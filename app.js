'use strict';
var http = require('http');

var logger = require('./logger');
var Point = require('./Point');

logger.info('Hello World!');

var point = new Point(100, 100);

point.print();

http.createServer(function(request, response){
  
  response.writeHead({
    'Content-Type': 'text/plain'
  });

  response.end('hello master!');
}).listen(3000);