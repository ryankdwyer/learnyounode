var http = require('http');

http.get(process.argv[2], function(response){
	var ans = '';
	response.setEncoding('utf8');
	response.on('data', function(data){
		ans += data;
	})
	response.on('end', function(){
		console.log(ans.length);
		console.log(ans);
	})
});