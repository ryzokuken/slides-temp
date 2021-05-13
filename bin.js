#!/usr/bin/env node

const { execFile } = require('child_process');

const [cmd, file] = process.argv.slice(2);
let option;
switch (cmd) {
  case 'build': option = "--static"; break;
  case 'dev': option = "--watch"; break;
  default: throw RangeError();
}
const child = execFile(`${__dirname}/node_modules/.bin/reveal-md`, [file, option], {
  cwd: __dirname
}, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

