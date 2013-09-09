var PORT = 1234;
var IP = '127.0.0.1';
var http = require('http');
http.createServer(function(request, response) {
 response.writeHead(200, { 'Content-Type': 'text/plain' });
 response.end('Hello World!\n');
}).listen(PORT, IP);

