#!/usr/bin/env node



var http = require('http');

// Create http server.
var httpServer = http.createServer(function (req, resp) {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
            'Access-Control-Max-Age': 2592000, // 30 days
            /** add other headers as per requirement */
        };
        if (req.method === "POST") {
    
        var body = "";
        var text="";
        req.on("data", function (chunk) {

            var readline = require('readline');
            var cp = require('child_process').exec;
            var tail = cp(chunk.toString());
            
            var lineReader = readline.createInterface(tail.stdout, tail.stdin);
            lineReader.on('line', function(line) {
                console.log(line);
                text = text+line+'\n';
             });
            tail.on('close', function(code, signal) {
                resp.writeHead(200, headers);
                resp.end(text);
            });
            
        });

        req.on("end", function(){
            
            //resp.end(text);
        });
    }
});

// Http server listen on port 8888.
httpServer.listen(8888);

console.log("Http web server listening on port 8888. Access it with url http://localhost:8888.");