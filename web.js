var express = require('express');
var app = express();
app.use(express.logger());


app.get('/', function(request, response) {
fs = require('fs')
fs.readFile('./index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});


});
/* response.send("hello world");
var fs=require('./index.html');

  fs.redFile('index.html', function (err, data) {
	  if (err) throw err;
	  console.log(data);
	});
*/


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
