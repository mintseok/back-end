var fs = require('fs');

/*
// readFileSync

console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8',);
console.log(result);
console.log('C');
*/


// readFile

console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8',function(err, result){ // readFile을 하고 3번째 인자의 function이 실행되는 것
    console.log(result); // 3번째 인자는 callback이라고 불림
});
console.log('C');