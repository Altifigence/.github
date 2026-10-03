import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync, statSync} from 'node:fs';
import {dirname, resolve, relative, sep} from 'node:path';

const root = process.cwd();
const files = execFileSync('git', ['ls-files', '-z'], {encoding: 'utf8'}).split('\0').filter(Boolean);
for (const file of files) {
  assert(!/(^|\/)(?:\.env(?:\.|$)|\.ssh|\.aws|node_modules|dist|target)(?:\/|$)/i.test(file), `Private/generated path: ${file}`);
  const content = readFileSync(file, 'utf8');
  assert(!/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(content), `Private key marker: ${file}`);
  if (!file.endsWith('.md')) continue;
  for (const match of content.matchAll(/\[[^\]]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|#)/.test(href)) continue;
    const target = resolve(dirname(resolve(root, file)), decodeURIComponent(href.split('#')[0]));
    assert(!relative(root, target).split(sep).includes('..'), `Link leaves repository: ${file}`);
    assert(statSync(target).isFile(), `Broken local link: ${file}`);
  }
}
for (const file of ['LICENSE', 'CONTRIBUTING.md', 'SECURITY.md', 'SUPPORT.md', 'CODE_OF_CONDUCT.md', 'profile/README.md']) {
  assert(files.includes(file), `Missing community file: ${file}`);
}
console.log(`Checked ${files.length} tracked community files and local Markdown links.`);
