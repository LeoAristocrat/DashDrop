import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === '.gradle' || file === 'build' || file === '.idea' || file === '.git' || file === 'node_modules') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      if (/\.(kt|xml|js|html|md|json)$/i.test(file)) results.push(fullPath);
    }
  }
  return results;
}

const files = walk('.');
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // strip comments roughly
  let cleaned = content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*/g, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  
  // check for any Chinese characters outside comments
  const matches = cleaned.match(/[\u4e00-\u9fff]+/g);
  if (matches) {
    console.log(file, '->', matches.slice(0, 10).join(', '));
  }
}
