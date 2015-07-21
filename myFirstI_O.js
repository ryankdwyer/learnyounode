var fs = require('fs');

var file = fs.readFileSync(process.argv[2]).toString();

var numNewLines = file.split('\n').length - 1; 

console.log(numNewLines);