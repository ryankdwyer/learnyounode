var http = require('http');
var url = require('url');

var port = process.argv[2];

function parse(url_path) {
	var url_path = url.parse(url_path, true);
	if (url_path.pathname === '/api/parsetime') {
		var date = new Date(url_path.query.iso);
		return JSON.stringify({'hour': date.getHours(),
				'minute': date.getMinutes(),
				'second': date.getSeconds()
			});
	} else if (url_path.pathname === '/api/unixtime') {
		var unix = new Date(url_path.query.iso	).getTime();
		return JSON.stringify({'unixtime': unix});
	}
};

var server = http.createServer(function(request, response){
	response.writeHead(200, { 'Content-Type': 'application/json' })
	response.end(parse(request.url));
})
server.listen(port);
