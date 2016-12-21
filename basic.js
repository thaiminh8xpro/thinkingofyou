var express = require('express');
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var server = require('http').Server(app);
var port = process.env.PORT || 5000;

server.listen(port, function (err) {
  console.log('Running server on port ' + port);
});

app.post('/', function(req, res) {
    console.log(req.body.message);
    console.log(req.body.type)
});
