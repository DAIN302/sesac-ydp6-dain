// fs 모듈
const fs = require('fs')

console.log('abc');
fs.readFile('./test.txt', 'utf-8', function(err, data){
    if(err) return console.error(err);
    console.log(data);
    
})
console.log('ㄱㄴㄷ');

// console.log(data);
// const data = fs.readFileSync('./test.txt', 'utf-8')