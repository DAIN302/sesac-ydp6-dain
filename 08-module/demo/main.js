
/*
url 모듈은 웹 주소를 읽어옴
읽어온 내용을 구문 분석하여 주소의 각 부분으로 나누고 객체로 변환.

// var addr = 'http://localhost:8000/example.htm?year=2024&month=feb'
var addr = 'http://localhost:8000/demo.htm?id=2024&pw=feb'
// 확장자 뒤의 ? 부터는 쿼리 어떤 데이터를 전달해주는것 &기호로 구분해줌
var q = url.parse(addr, true)
// console.log(q);
console.log(q.pathname); // 경로와 파일이름  /example.htm
console.log(q.search); // ?year=2024&month=feb
var qdata = q.query // ?year=2024&month=feb
console.log(qdata); // [Object: null prototype] { year: '2024', month: 'feb' }
console.log(qdata.month); // 기존 쿼리에서 month에 해당하는 것만 출력 = feb
*/

const http = require('http')
const url = require('url')
const fs = require('fs')

// 서버 생성
http.createServer(function(req, res) {
    var q = url.parse(req.url, true)
    var filename = "."+q.pathname
    console.log(filename);
    fs.readFile(filename, function(err, data){
        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'})
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data);
        return res.end();
    })
}).listen(8000, ()=>{
    console.log('8000 서버 실행중');
})