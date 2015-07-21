var myModule = require('./mymodule.js');
var dir_name = process.argv[2];
var ext = process.argv[3];

myModule(dir_name, ext, function(err, data) {
	if (err) {
		console.error(err);
		return;
	} else {
		data.forEach(function(file) {
			console.log(file);
		});
	}
});