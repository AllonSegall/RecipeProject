////////////////////////////////    REQUIRE   //////////////////////////////////

var express = require("express");
var bodyParser = require("body-parser");

var routes = require('./routes/home');
var newRec = require('./routes/uploadRecipe');
var dashboard = require('./routes/dashboard');

///////////////////////////////////    APP   //////////////////////////////////

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', routes);
app.use('/upload', newRec);
app.use('/dashboard', dashboard);

var port = process.env.PORT || "4000";
app.listen(port);
