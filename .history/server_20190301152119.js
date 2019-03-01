#!/usr/bin/env node

/*var readline = require('readline');
var cp = require('child_process');
var tail = cp.spawn('ls');
var lineReader = readline.createInterface(tail.stdout, tail.stdin);

lineReader.on('line', function(line) {
    console.log(line);
});

tail.on('close', function(code, signal) {
    console.log('ls finished...');
});*/

var http = require('http');

// Create http server.
var httpServer = http.createServer(function (req, resp) {

    resp.writeHeader(200);

    resp.end('This is a node js created http web server. ');
});

// Http server listen on port 8888.
httpServer.listen(8888);

console.log("Http web server listening on port 8888. Access it with url http://localhost:8888.");