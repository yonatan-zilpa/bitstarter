#!/usr/bin/env node
var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/',function(request,response){
// response.send('Hello Wrold2 !');
response.send(fs.read.FileSync("./index.html").toString());
});

