var PORT = process.env.VMC_APP_PORT;
var IP = process.env.VCAP_APP_HOST;
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

