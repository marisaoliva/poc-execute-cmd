#!/usr/bin/env node

var readline = require('readline');
var cp = require('child_process');
var tail = cp.spawn('tail', ['-500', 'mylogfile.log']);
var lineReader = readline.createInterface(tail.stdout, tail.stdin);

lineReader.on('line', function(line) {
    console.log('Line: ' + line);
});

tail.on('close', function(code, signal) {
    console.log('ls finished...');
});