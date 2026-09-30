(function () {
    const translations = {
        en: {
            'common.cancel': 'Cancel',
            'common.confirm': 'Confirm',
            'common.got_it': 'Got it',

            'login.title': 'DashDrop sign in',
            'login.description': 'Find the 6-digit PIN on your phone.',
            'login.pin_group': 'PIN',
            'login.submit': 'Continue',
            'login.invalid_pin': 'Enter the 6-digit PIN',
            'login.locked': 'Too many attempts. Try again in 30 seconds.',
            'login.terminated': 'Too many incorrect attempts. The service has stopped.',
            'login.pin_consumed': 'This PIN has already been used. Restart the service on your phone.',
            'login.wrong_pin': 'Incorrect PIN',
            'login.network_error': 'Network error',

            'app.nav.chat': 'Chat',
            'app.nav.files': 'Files',
            'app.nav.album': 'Album',
            'app.album.title': 'Album',
            'app.album.loading': 'Loading album…',
            'app.album.empty': 'No photos or videos',
            'app.album.refresh': 'Refresh',
            'app.album.retry': 'Retry',
            'app.album.truncated': 'The album listing may be incomplete. Try again.',
            'app.album.loadFailed': 'Couldn\'t load the album. Try again.',
            'app.album.today': 'Today',
            'app.album.yesterday': 'Yesterday',
            'app.album.monthDay': '{month}/{day}',
            'app.album.yearMonthDay': '{year}/{month}/{day}',
            'app.album.total': '{count} items',
            'app.album.select': 'Select',
            'app.album.selected': '{count} selected',
            'app.album.clear': 'Clear selection',
            'app.album.saveSelected': 'Download selected',
            'app.album.viewTimeline': 'Timeline',
            'app.album.viewBuckets': 'Albums',
            'app.album.unknownBucket': 'Unknown album',
            'app.album.bucketCount': '{count} items',
            'app.files.title': 'Files',
            'app.files.loading': 'Loading…',
            'app.files.empty': 'This folder is empty',
            'app.files.root': 'Internal storage',
            'app.files.breadcrumb': 'Path',
            'app.files.breadcrumbMore': 'Show the levels in between',
            'app.files.itemCount': '{count} items',
            'app.files.download': 'Download {name}',
            'app.files.restrictedRow': 'Restricted by the system',
            'app.files.needPermission': 'Permission needed on the phone',
            'app.files.needPermissionHow': 'Open DashDrop on the phone, tap "Grant access" in Settings, and this panel will recover on its own.',
            'app.files.restricted': 'Restricted by the system',
            'app.files.restrictedWhy': 'Android locks this folder — no app can read what is inside it.',
            'app.files.badPath': 'Invalid path — returned to the previous location',
            'app.files.unavailable': 'File browsing is unavailable',
            'app.files.unavailableWhy': 'Turn on "Let the browser browse phone storage" on the phone.',
            'app.files.selected': '{count} selected',
            'app.files.clear': 'Clear selection',
            'app.files.saveSelected': 'Save selected',
            'app.files.truncated': 'The listing may be incomplete — refresh to retry',
            'app.files.elsewhere': '{count} elsewhere',
            'app.files.refresh': 'Refresh',
            'app.files.search': 'Search this folder',
            'app.files.searchEmpty': 'No matching files',
            'app.files.sort': 'Sort',
            'app.files.sortName': 'By name',
            'app.files.sortTime': 'By date modified',
            'app.files.sortSize': 'By size',
            'app.files.selectAll': 'Select all',
            'app.files.deselect': 'Deselect all',
            'app.files.total': '{count} items',
            'app.files.loadingCount': 'Loading… {count} so far',
            'app.files.gone': 'That location no longer exists',
            'app.files.offline': 'Connection lost — showing the last listing that loaded',
            'app.nav.favorites': 'Favorites',
            'app.nav.settings': 'Settings',
            'app.avatar.change': 'Change avatar',
            'app.peer_info': 'Peer information',
            'app.peer_avatar': 'Peer avatar',
            'app.connecting': 'Connecting…',
            'app.files': { one: '{count} file', other: '{count} files' },
            'app.my_avatar': 'My avatar, click to change',
            'app.choose_avatar': 'Choose avatar',
            'app.attach': 'Attach',
            'app.message': 'Message',
            'app.message_placeholder': 'Enter a message',
            'app.send': 'Send',
            'app.recall_title': 'Recall this message?',
            'app.recall_body': 'It will disappear on both devices and can\'t be recovered.',
            'app.recall': 'Recall',
            'app.copy': 'Copy',
            'app.download': 'Download',
            'app.preview': 'Preview',
            'app.copied': 'Copied',
            'app.copy_failed': 'Copy failed',
            'app.peer_from': 'From {device}',
            'app.phone': 'Phone',
            'app.connected': 'Connected',
            'app.disconnected': 'Disconnected',
            'app.watermark': '{status} · {device}',
            'app.filled_icons': 'Filled icons',
            'app.avatar_character': 'Avatar character',
            'app.message_recalled': 'Message recalled',
            'app.recall_not_enabled': 'Message recall is disabled',
            'app.recall_own_only': 'You can only recall messages you sent',
            'app.recall_failed': 'Couldn\'t recall message',
            'app.recall_network_failed': 'Couldn\'t recall message: network error',
            'app.peer_recalled': 'The other device recalled a message',
            'app.favorite': 'Favorite',
            'app.favorited': 'Favorited',
            'app.favorite_added': 'Saved to the phone\'s favorites',
            'app.favorite_exists': 'Already in favorites. Remove it on the phone.',
            'app.favorite_not_enabled': 'The phone doesn\'t allow favoriting messages',
            'app.favorite_failed': 'Couldn\'t favorite message',
            'app.favorite_network_failed': 'Couldn\'t favorite message: network error',
            'app.upload_failed_retry': 'Upload failed. Click to retry.',
            'app.retry': 'Click to retry',
            'app.upload_failed_file': 'Upload failed: {file}{suffix}',
            'app.transfer_failed': 'Transfer failed',
            'app.service_stopped': 'The service stopped and the connection closed',
            'app.reconnecting': 'Connection lost. Reconnecting…',
            'app.service_maybe_closed': 'Connection lost. The service may have stopped.',
            'app.reconnected': 'Reconnected',
            'app.reconnecting_attempt': 'Connection lost. Reconnecting… ({attempt}/{max})',
            'app.wait_reconnect': 'Connection lost. Please wait.',
            'app.drop_hint': 'Release to send files',
            'app.drop_folder_unsupported': 'Folders cannot be sent',
            'app.send_failed': 'Send failed',
            'app.processing': 'Processing…',
            'app.close_preview': 'Close preview',
            'app.save_all': 'Save all files',
            'app.save_all_each': 'Save each ({count})',
            'app.save_all_zip': 'Download as ZIP',

            'app.settings.collapse': 'Collapse panel',
            'app.settings.title': 'Settings',
            'app.settings.layout': 'Layout',
            'app.settings.railSide': 'Sidebar on the right',
            'app.settings.railSideSub': 'Moves the nav rail to your dominant hand. Wide screens only.',
            'app.settings.paneSwap': 'Swap chat and panel columns',
            'app.settings.paneSwapSub': 'Swaps only the two middle columns; the nav rail is unaffected. Wide screens only.',
            'app.settings.resetSplit': 'Reset column width',
            'app.settings.resetSplitSub': 'Restore the default 58 : 42',
            'app.settings.fromPhone': 'From your phone',
            'app.settings.language': 'Language',
            'app.settings.languageZh': '简体中文',
            'app.settings.languageEn': 'English',
            'app.settings.theme': 'Theme & appearance',
            'app.settings.themeSub': 'Color, dark mode, and bubble shape are controlled from the phone',
            'app.settings.timestamps': 'Message timestamps',
            'app.settings.timestampsSubOn': 'On · change it on the phone under Settings › Chat appearance',
            'app.settings.timestampsSubOff': 'Off · change it on the phone under Settings › Chat appearance',
            'app.settings.about': 'About',
            'app.settings.browserClient': 'Browser client · v{version}',
            'app.settings.browserClientNoVersion': 'Browser client',
            'app.settings.github': 'GitHub repository',

            'app.favorites.search': 'Search favorites',
            'app.favorites.sort': 'Sort',
            'app.favorites.sortName': 'By name',
            'app.favorites.sortTime': 'By date saved',
            'app.favorites.sortSize': 'By size',
            'app.favorites.allGroups': 'All',
            'app.favorites.ungrouped': 'Ungrouped',
            'app.favorites.copy': 'Copy',
            'app.favorites.save': 'Save',
            'app.favorites.copied': 'Copied',
            'app.favorites.selected': '{count} selected',
            'app.favorites.saveSelected': 'Save selected',
            'app.favorites.clear': 'Clear selection',
            'app.favorites.empty': 'No favorites yet',
            'app.favorites.loadFailed': 'Couldn\'t load favorites',
            'app.favorites.retry': 'Retry',
            'app.favorites.refresh': 'Refresh',
            'app.favorites.disabled': 'Favorites is not enabled',
            'app.favorites.disabledHint': 'Turn it on your phone under Settings › Favorites',
            'app.favorites.noMatches': 'No favorites match',

            'export.title': 'DashDrop export',
            'export.pending': 'Ready to download',
            'export.loading': 'Loading…',
            'export.session_list': 'Sessions',
            'export.preparing': 'Preparing…',
            'export.hint': 'Your browser handles the download. Keep this page open until the file has been saved.',
            'export.cancelled_title': 'Export cancelled',
            'export.cancelled_body': 'The export was cancelled on your phone. Start a new export there if needed.',
            'export.sessions': { one: '{count} session', other: '{count} sessions' },
            'export.messages': { one: '{count} message', other: '{count} messages' },
            'export.favorites': { one: '{count} favorite', other: '{count} favorites' },
            'export.files': { one: '{count} file', other: '{count} files' },
            'export.settings': 'Settings',
            'export.approx_size': 'About {size}',
            'export.session_fallback': 'Session #{id}',
            'export.session_description': '{messages} · {files} · {size}',
            'export.download_archive': 'Download archive ({size})',
            'export.network_info_failed': 'Network error. Export information is unavailable.',
            'export.network_check': 'Network error. Check the connection.',
            'export.expired': 'This export session has expired',
            'export.unavailable': 'Unavailable',
            'export.expired_action': 'This export session has expired. Start it again on your phone.',
            'export.load_failed': 'Loading failed ({status})',
            'export.parse_failed': 'Couldn\'t read the server response',
            'export.disconnected': 'Connection to the phone was lost. Check the network.',
            'export.disconnected_short': 'Connection to the phone was lost',
            'export.connection_restored': 'Connection restored',
            'export.downloading': 'Downloading…',
            'export.download_started': 'Download started. Check your browser’s download manager for progress.',
            'export.download_started_hint': 'Download started. You can close this page after it finishes. The phone service will stop automatically.',
            'export.cancelled': 'Cancelled',
        },
    };

    let currentLanguage = null;
    const listeners = new Set();

    function normalizeLanguageTag(languageTag) {
        return 'en';
    }

    function interpolate(template, values) {
        return String(template).replace(/\{([a-zA-Z0-9_]+)\}/g, (_, key) =>
            Object.prototype.hasOwnProperty.call(values || {}, key) ? String(values[key]) : `{${key}}`
        );
    }

    function entryFor(key) {
        return (translations[currentLanguage] && translations[currentLanguage][key]) ?? translations.en[key] ?? key;
    }

    function t(key, values) {
        const entry = entryFor(key);
        const template = typeof entry === 'object' ? entry.other : entry;
        return interpolate(template, values);
    }

    function count(key, value, values) {
        const entry = entryFor(key);
        const template = typeof entry === 'object'
            ? (value === 1 ? entry.one : entry.other)
            : entry;
        return interpolate(template, Object.assign({ count: value }, values || {}));
    }

    function applyStaticTranslations() {
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            element.textContent = t(element.getAttribute('data-i18n'));
        });
        const bindings = [
            ['data-i18n-title', 'title'],
            ['data-i18n-label', 'label'],
            ['data-i18n-placeholder', 'placeholder'],
            ['data-i18n-aria-label', 'aria-label'],
            ['data-i18n-headline', 'headline'],
        ];
        bindings.forEach(([dataAttribute, targetAttribute]) => {
            document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
                element.setAttribute(targetAttribute, t(element.getAttribute(dataAttribute)));
            });
        });
    }

    function setLanguage(languageTag) {
        const normalized = normalizeLanguageTag(languageTag);
        const changed = normalized !== currentLanguage;
        currentLanguage = normalized;
        document.documentElement.setAttribute('lang', normalized);
        if (changed) {
            applyStaticTranslations();
            listeners.forEach((listener) => listener(normalized));
        }
        return normalized;
    }

    function onChange(listener) {
        listeners.add(listener);
        listener(currentLanguage);
        return () => listeners.delete(listener);
    }

    let connected = true; // The PIN page has no WebSocket; app/export take ownership on load.
    let refreshTimer = null;
    let activeRequest = null;

    function pause() {
        if (refreshTimer !== null) clearTimeout(refreshTimer);
        refreshTimer = null;
        if (activeRequest) activeRequest.controller.abort();
        activeRequest = null;
    }

    function refresh() {
        if (!connected || document.hidden) return Promise.resolve();
        if (activeRequest) return activeRequest.promise;
        if (refreshTimer !== null) clearTimeout(refreshTimer);
        refreshTimer = null;
        const request = { controller: new AbortController(), promise: null };
        activeRequest = request;
        request.promise = (async () => {
            let succeeded = false;
            try {
                const response = await fetch('/api/web-theme', {
                    cache: 'no-store', signal: request.controller.signal,
                });
                if (!response.ok) return;
                const appearance = await response.json();
                if (activeRequest !== request) return;
                setLanguage(appearance.languageTag);
                succeeded = true;
                return appearance;
            } catch (_) {
                // An unreachable phone must not leave an endless background retry loop.
            } finally {
                if (activeRequest === request) {
                    activeRequest = null;
                    if (succeeded && connected && !document.hidden) {
                        refreshTimer = setTimeout(refresh, 30000);
                    }
                }
            }
        })();
        return request.promise;
    }

    function setConnected(value) {
        connected = !!value;
        if (connected) refresh();
        else pause();
    }

    function applyServerLanguage(languageTag) {
        if (!connected || typeof languageTag !== 'string') return;
        // A poll started before this push must not restore the previous locale.
        pause();
        setLanguage(languageTag);
        if (!document.hidden) refreshTimer = setTimeout(refresh, 30000);
    }

    window.flikkyI18n = {
        t,
        count,
        setLanguage,
        onChange,
        refresh,
        setConnected,
        applyServerLanguage,
        get language() { return currentLanguage; },
    };

    setLanguage('en');
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) pause();
        else refresh();
    });
    refresh();
})();
