#!/usr/bin/env node

var readline = require('readline');
var cp = require('child_process');
var tail = cp.spawn('ls');
var lineReader = readline.createInterface(tail.stdout, tail.stdin);

lineReader.on('line', function(line) {
    console.log(line);
});

tail.on('close', function(code, signal) {
    console.log('ls finished...');
});