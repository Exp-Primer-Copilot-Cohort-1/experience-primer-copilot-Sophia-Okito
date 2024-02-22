// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// Use the createServer method from the http module to create the server
// Use the createReadStream method from the fs module to read the comments.html file    
// Use the pipe method to send the file to the response object
// Listen on port 3000
// The server should respond to all requests with the comments.html file
// The server should listen on port 3000
// The server should respond to all requests with the comments.html file
// The comments.html file should be read from the file system
// The comments.html file should be sent to the response object using the pipe method
// The server should listen on port 3000
// The server should respond to all requests with the comments.html file
// The comments.html file should be read from the file system
// The comments.html file should be sent to the response object using the pipe method
// The server should listen on port 3000
// The server should respond to all requests with the comments.html file
// The comments.html file should be read from the file system
// The comments.html file should be sent to the response object using the pipe method
// The server should listen on port 3000


// Create web server for comment
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('comments.html').pipe(res);
});

server.listen(3000);

// Path: comments.html

// Create a form

// Create a form in the comments.html file

// The form should have a method of POST

// The form should have an action of /submit

// The form should have a textarea with a name of comment

// The form should have a submit button

// The form should have a method of POST

// The form should have an action of /submit

// The form should have a textarea with a name of comment

// The form should have a submit button

// The form should have a method of POST

// Create web server for comment

