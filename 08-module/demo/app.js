const http = require('http')
const url = require('url')
const fs = require('fs')

// 127.0.0.1:3000 포트로 접속해서 winter.html, summer.html 읽어오기
http.createServer(function(req, res){
    // req에 사용자가 원하는 파일 
    var q = url.parse(req.url, true);
    var filename = '.'+q.pathname;

    fs.readFile(filename, (err, data)=>{
        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'})
            return res.end('file not found')
        }
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })

}).listen(3000, ()=>{
    console.log('3000 포트에서 서버 실행중');
})