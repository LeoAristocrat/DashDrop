const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const i18nPath = path.resolve(__dirname, '../../main/assets/web/i18n.js');

function loadI18n(querySelectorAll = () => []) {
    const source = fs.readFileSync(i18nPath, 'utf8');
    const documentElement = {
        lang: '',
        setAttribute(name, value) {
            if (name === 'lang') this.lang = value;
        },
    };
    const context = {
        document: {
            documentElement,
            querySelectorAll,
            addEventListener() {},
        },
        fetch: async () => ({ ok: false }),
        setTimeout() { return 1; },
        clearTimeout() {},
        AbortController,
    };
    context.window = context;
    vm.runInNewContext(source, context);
    return { i18n: context.flikkyI18n, documentElement, source };
}

test('English can be selected and interpolated', () => {
    const { i18n, documentElement } = loadI18n();

    i18n.setLanguage('en-US');

    assert.equal(documentElement.lang, 'en');
    assert.equal(i18n.t('app.peer_from', { device: 'Pixel' }), 'From Pixel');
    assert.equal(i18n.count('export.sessions', 1), '1 session');
    assert.equal(i18n.count('export.sessions', 2), '2 sessions');
});

test('unsupported tags fall back to English', () => {
    const { i18n, documentElement } = loadI18n();

    i18n.setLanguage('fr-FR');

    assert.equal(documentElement.lang, 'en');
    assert.equal(i18n.t('login.submit'), 'Continue');
});

test('translations never use innerHTML', () => {
    const { source } = loadI18n();
    assert.equal(source.includes('innerHTML'), false);
});

test('PIN login card carries no privacy advisory', () => {
    // faa22ba 的决定是「登录页不放隐私/安全劝告」（原文是「建议使用无痕窗口」）。
    // 那次顺带钉上的 login.description 是附带品 —— 它当时本来就没被任何页面引用。
    // v1.19.0 删掉了 <h2>「输入 PIN 码」，说明文字成了页面上唯一一句告诉用户
    // 该做什么的话，所以这一条放开；隐私劝告的禁令原样保留。
    const html = fs.readFileSync(
        path.resolve(__dirname, '../../main/assets/web/login.html'),
        'utf8',
    );
    const { source: i18nSource } = loadI18n();

    assert.equal(html.includes('data-i18n="login.privacy_tip"'), false);
    assert.equal(i18nSource.includes("'login.privacy_tip'"), false);
});

test('the login page explains itself in exactly one line', () => {
    // 六个空格子 + 一个灰掉的按钮，不配文字就是一道谜题。反过来，说明多于一句
    // 又会把这页变回旧版那种「标题 + 说明 + 提示」三段式。
    const html = fs.readFileSync(
        path.resolve(__dirname, '../../main/assets/web/login.html'),
        'utf8',
    );
    const paragraphs = html.match(/<p\b[^>]*data-i18n="[^"]+"/g) || [];
    assert.equal(paragraphs.length, 1, `login.html renders ${paragraphs.length} explanatory paragraphs`);
    assert.match(html, /data-i18n="login\.description"/);
});

test('polling the same language does not overwrite dynamic page state', () => {
    let writes = 0;
    let value = '';
    const element = {
        getAttribute(name) {
            return name === 'data-i18n' ? 'login.submit' : null;
        },
        set textContent(next) {
            writes += 1;
            value = next;
        },
        get textContent() { return value; },
    };
    const { i18n } = loadI18n((selector) => selector === '[data-i18n]' ? [element] : []);
    assert.equal(writes, 1);

    element.textContent = 'Working…';
    const writesAfterDynamicUpdate = writes;
    i18n.setLanguage('en');

    assert.equal(writes, writesAfterDynamicUpdate);
    assert.equal(element.textContent, 'Working…');
});

function dictionaryKeys(source) {
    const enStart = source.indexOf('\n        en: {');
    const dictEnd = source.indexOf('\n    };');
    assert.ok(enStart >= 0 && dictEnd > enStart, 'dictionary layout changed');
    const keysIn = (block) =>
        new Set([...block.matchAll(/^\s*'([a-z0-9_.]+)':/gm)].map((m) => m[1]));
    return {
        en: keysIn(source.slice(enStart, dictEnd)),
    };
}

test('dictionary defines valid keys', () => {
    const { source } = loadI18n();
    const dicts = dictionaryKeys(source);
    assert.ok(dicts.en.size > 50, 'en dictionary should contain translation keys');
});

test('every translation key referenced by a page exists in the dictionaries', () => {
    const webDir = path.resolve(__dirname, '../../main/assets/web');
    const pageFiles = fs
        .readdirSync(webDir)
        .filter((f) => (f.endsWith('.js') || f.endsWith('.html')) && f !== 'i18n.js')
        .sort();
    assert.ok(pageFiles.length >= 8, `expected to find the page files, got ${pageFiles.join(', ')}`);

    const keyPattern = /['"]((?:common|login|app|export)\.[a-z0-9_]+(?:\.[a-z0-9_]+)*)['"]/g;
    const keys = new Set();
    for (const file of pageFiles) {
        const source = fs.readFileSync(path.join(webDir, file), 'utf8');
        for (const match of source.matchAll(keyPattern)) keys.add(match[1]);
    }

    const { source } = loadI18n();
    const dicts = dictionaryKeys(source);
    for (const key of keys) {
        assert.ok(dicts.en.has(key), `en is missing ${key}`);
    }
});

test('every web page loads translations before its page script', () => {
    const webDir = path.resolve(__dirname, '../../main/assets/web');
    for (const page of ['login', 'app', 'export']) {
        const html = fs.readFileSync(path.join(webDir, `${page}.html`), 'utf8');
        const i18nIndex = html.indexOf('/static/i18n.js');
        const pageScriptIndex = html.indexOf(`/static/${page}.js`);
        assert.notEqual(i18nIndex, -1, `${page}.html must load translations`);
        assert.ok(i18nIndex < pageScriptIndex, `${page}.html must load translations first`);
    }
});
