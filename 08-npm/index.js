// const http = require('http')
// // console.log(http); -> http : node가 기본으로 가지고 있는 모듈이라 따로 설치를 안해도 로드됨

// // http 모듈이 가지고 있는 서버 만드는 기능을 사용하기
// const server = http.createServer();
// listen(port, callback)
// port에 연결이 되면 뒤의 함수를 실행해줘
// 8000포트 사용
// server.listen(8000, function(){
//     console.log('8000 포트에서 서버 실행 중');
// });

const http = require('http');
const server = http.createServer();
server.listen(8000, function(){
    console.log('서버실행');
});

