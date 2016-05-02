#!/usr/bin/env node

var express = require('express'),
	path = require('path'),
	app = express();


app.use(express.static(path.join(__dirname, 'public')));
var port = process.env.PORT || 3010;

app.set('port', port);

app.listen(port, function() {
	console.log('Galaxies application is available at http://localhost:' + port);
});