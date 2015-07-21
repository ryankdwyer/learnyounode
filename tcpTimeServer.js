var net = require('net');

var port = Number(process.argv[2]);


function pad(num, size){
	var ans = num+'';
	while (ans.length < size) 
		ans = '0' + ans;
	return ans;
}

function customDate(){
	var date = new Date();
	// return (date.toISOString().replace("T"," ").slice(0, -8) + '\n');
	var year = date.getFullYear().toString();
	var month = pad(date.getMonth() + 1, 2);
	var day = pad(date.getDate().toString(), 2);
	var hours = pad(date.getHours().toString(), 2);
	var min = pad(date.getMinutes().toString(), 2);
	var ans = (year + '-' + month + '-' + day + " " + hours + ':' + min + '\n')
	return ans;
};

var server = net.createServer(function(socket){
	socket.end(customDate());
})
server.listen(port);

