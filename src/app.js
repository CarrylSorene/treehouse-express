'use strict';

var express = require("express");

var app = express();

app.get('/', function(request, response) {
  response.send("Response");
})

app.listen(3000);