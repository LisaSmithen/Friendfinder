var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');


var app = express()

var PORT = process.env.PORT || 7778;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});