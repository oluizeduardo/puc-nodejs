var http = require('http');

const port = process.env.PORT || 3000;

http.createServer(function(req, res){
	res.end('<h1>Luiz Eduardo da Costa | PUC MG</h1>');
}).listen(port);