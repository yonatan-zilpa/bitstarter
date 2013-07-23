var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
/*  response.send("hello world"); */
});


re('fs');

fs.unlinkSync('/tmp/hello')
console.log('successfully deleted /tmp/hello');

/*var fs=require('fs');
  fs.redFile('./index.html', function (err, data) {
	  if (err) throw err;
	  console.log(data);
	});
*/	



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
