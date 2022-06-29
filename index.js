
var http = require('http');
var fs = require('fs');
var content = fs.readFileSync('index.html');

http.createServer(function(req, res){
	res.end(content);
}).listen(3000);