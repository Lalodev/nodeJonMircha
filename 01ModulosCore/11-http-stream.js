'use strict';
var http = require('http').createServer(webServer),
  fs = require('fs'),
  index = fs.createReadStream('assets/index.html');

function webServer(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  index.pipe(res);
}

http.listen(3000);

console.log('Servidor corriendo en http://127.0.0.1:3000/');
