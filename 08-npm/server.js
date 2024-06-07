const http = require('http')
// 파일 모듈 불러오기
// fs -> 파일 시스템을 관리해주는 모듈
const fs = require('fs')

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    // readFile 파일을 읽어오는 메서드
    fs.readFile('./views/index.html', (err, data)=>{ // err -> 에러가 났을 경우, date -> 정삭적으로 불러왔을 경우
        if(err){ // 에러가 났을 경우
            console.log(err);
            res.end();
        } else { // 정상적으로 불러왔을 경우
            res.end(data)
        }
    })
});
server.listen(8000, ()=>{
    console.log(`8000번 서버 실행`);
});