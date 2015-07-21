var path_name = process.argv[2];
var ext = '.' + process.argv[3];

var fs = require('fs');
var path = require('path');

var ls = fs.readdir(path_name, function(err, list) {
	var ans = [];
	for (var i=0; i < list.length; i++) {
		if (path.extname(list[i]) === ext) {
			console.log(list[i]);
		}
	}
});