const http = require('http');
http.createServer(function(req, res){ // req - request(요청) , res - response(응답)
    // send http 
    // http status 200은 정상적인 응답
    // Content-Type : test/plain
    // Content-Type : 어떤 타입인지 알려주는거
    // test/plain -> 그냥 메모??? 로 해석해라
    // res.writeHead(200, {'Content-Type' : 'text/plain'})
    // test/html -> html로 해석해라
    res.writeHead(200, {'Content-Type' : 'text/html'}) 
    // 응답(res) 이거 주고 끝내(end)
    res.write(`<h1>Hello</h1>`)
    res.end(`<h2>Hello World</h2>`)
}).listen(8080, ()=>{
    console.log('8080포트에서 실행 중');
});

