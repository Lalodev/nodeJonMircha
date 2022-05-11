'use strict';
var http = require('http').createServer();

function webServer(req, res) {
  res
    .writeHead(200, { 'Content-Type': 'text/html' })
    .end('<h1>Hello Node.js</h1>');
}

http.on('request', webServer).listen(3000, 'localhost');

console.log('Servidor corriendo en http://127.0.0.1:3000/');
