var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send("hello world");
  fs.readFile('index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
