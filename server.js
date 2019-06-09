#!/usr/bin/env node



var http = require('http');

// Create http server.
var httpServer = http.createServer(function (req, resp) {

        if (req.method === "POST") {
    
        var body = "";
        req.on("data", function (chunk) {

            var readline = require('readline');
            var cp = require('child_process').exec;
            var tail = cp(chunk.toString());
            var lineReader = readline.createInterface(tail.stdout, tail.stdin);
            lineReader.on('line', function(line) {
                console.log(line);
            });
            tail.on('close', function(code, signal) {
                
            });
            
        });

        req.on("end", function(){
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(body);
        });
    }
});

// Http server listen on port 8888.
httpServer.listen(8888);

console.log("Http web server listening on port 8888. Access it with url http://localhost:8888.");