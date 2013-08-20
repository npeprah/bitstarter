var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

function readHtml(index) {
	return fs.readFileSync(index,'utf-8');
}


app.get('/', function(request, response) {
  response.send(readHtml('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
