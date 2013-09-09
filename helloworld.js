var PORT = 1234;
var IP = '127.0.0.1';
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
 // google maps.
 if (req.url == '/map') {
  fs.readFile('./html/map.html', function(err, data) {
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end(data);
  });
 // hello world.
 } else {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!\n');
  res.end('Google Map API -> http://' + IP + ':' + PORT + '/map');
 }
}).listen(PORT, IP, function(){
 console.log("Server is running at http://" + IP + ":" + PORT + "/");
});

