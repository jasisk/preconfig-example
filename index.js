'use strict';
var kraken = require('kraken-js');
var express = require('express');
var http = require('http');

var app = express();

app.use(kraken());

app.on('start', function () {
  var server = http.createServer(this);
  server.listen(this.kraken.get('ssl:port'), function () {
    console.log('listening on %j', server.address());
  });
});


