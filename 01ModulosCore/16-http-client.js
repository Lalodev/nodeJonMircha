'use strict';

var http = require('https'),
  options = {
    host: 'jonmircha.com',
    port: 443,
    path: '/',
  };

http
  .get(options, function (res) {
    console.log(
      `El sitio ${options.host} ha respondido. Código de Estado: ${res.statusCode}`
    );
  })
  .on('error', function (err) {
    console.log(
      `El sitio ${options.host} no respondió. Código de Estado: ${err.code}. Error: ${err.message}`
    );
  });
