var PORT = process.env.VMC_APP_PORT || '1234';
var IP = process.env.VCAP_APP_HOST || '127.0.0.1';
var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!\n');
  res.end();
}).listen(PORT, IP);

