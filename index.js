
var http = require('http');
var fs = require('fs');
var content = fs.readFileSync('index.html');

const port = process.env.PORT || 3000;

http.createServer(function(req, res){
	res.end(content);
}).listen(port);