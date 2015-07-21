var http = require('http');
var urls = process.argv.slice(2);
var url_data = [];

function getter(url, callBack) {
	http.get(url, function(response){
		var ans = '';
		response.setEncoding('utf8');
		response.on('data', function(data){
			ans += data;
		})
		response.on('end', function(){
			callBack(ans);
		})
	});
};

function printer(data) {
	data.forEach(function(el){
		console.log(el);
	})
}

function series(url){
	if (url) {
		getter(url, function(data){
			url_data.push(data);
			return series(urls.shift());
		})
	} else {
		return printer(url_data);
	}
};

series(urls.shift());