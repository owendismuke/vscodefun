var express = require('express');
var app = express();

app.use(express.static('./public'));

var server = app.listen(8181, function(){
	console.log("Express server running!");
});