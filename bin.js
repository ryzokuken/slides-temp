#!/usr/bin/env node

const { execFileSync } = require('child_process');

const [cmd, file] = process.argv.slice(2);
let option;
switch (cmd) {
  case 'build': option = `--static ${process.cwd()}/_static`; break;
  case 'dev': option = "--watch"; break;
  default: throw RangeError();
}

execFileSync('node_modules/.bin/reveal-md', [file, option], {
  cwd: __dirname
}, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  process.stdout.pipe(stdout);
  process.stderr.pipe(stderr);
});

