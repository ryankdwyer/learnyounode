var fs = require('fs');

var file = fs.readFile(process.argv[2], 'utf8', function(error, data){
	var numNewLines = data.split('\n').length - 1;
	console.log(numNewLines);
});

