// write your code here
function handleHTTP(req, res) {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World');
        }
        else {
            res.writeHead(403);
            res.end('Bye World');
        }
    }  
    else {
            res.writeHead(403);
            res.end('Bye World');
        }
    }


var host = 'localhost';
var port = 8080;

var http = require('http');
var http_serv = http.createServer(handleHTTP).listen(port, host);
