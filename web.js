var express = require('express');
var app = express();
var buff = new Buffer(fs.readFileSync(index.html), "utf-8");
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(Buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
