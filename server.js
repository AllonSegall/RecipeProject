////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require("express");
var bodyParser = require("body-parser");


///////////////////////////////////    APP   //////////////////////////////////

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.get('/', function(req, res, next){
  res.sendFile('index.html');
});

var port = process.env.PORT || "4000";
app.listen(port);
