var path_name = process.argv[2];
var ext = '.' + process.argv[3];

var fs = require('fs');
var path = require('path');

module.exports = function (dir_name, ext_name, callBack){
	var fs = require('fs')
	var path = require('path');
	var	ans = [];

	fs.readdir(dir_name, function(err, list) {
		if (err) {
			return callBack(err);
		} 
		for (var i=0; i < list.length; i++) {
			if (path.extname(list[i]) === ('.' + ext_name)) {
				ans.push(list[i]);
			}
		}
		return callBack(null, ans);
	});
	
};







	