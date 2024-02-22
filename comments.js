// Create web server for comments
// Dependencies: express, body-parser, path, fs
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var app = express();

// Set up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Set up the port
var PORT = process.env.PORT || 3000;

// Set up the routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/comments', function(req, res) {
	fs.readFile('comments.json', 'utf8', function(err, data) {
		if (err) {
			console.log(err);
		} else {
			res.send(data);
		}
	});
});

app.post('/comments', function(req, res) {
	fs.readFile('comments.json', 'utf8', function(err, data) {
		if (err) {
			console.log(err);
		} else {
			var comments = JSON.parse(data);
			comments.push(req.body);
			fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
				if (err) {
					console.log(err);
				} else {
					res.send('Comment added');
				}
			});
		}
	});
});

// Start the server
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});


