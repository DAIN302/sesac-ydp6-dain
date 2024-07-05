const express = require('express')
const http = require('http') 
const socketIO = require('socket.io') 

const app = express()
const server = http.createServer(app) 
const io = socketIO(server) 

const PORT = 8888

// 뷰 엔진 등록
app.set('view engine', 'ejs')
// app.set('views', './views')

// 라우터 등록
app.get('/', (req,res)=>{
    res.render('client')
})

// 4. 유저리스트
// 사용자 정보를 갱신하는 함수
function getUserList(room) {
    const users = []; // room에 접속할 모든 사용자 정보를 저장할 배열 초기화

    // 필요한거
    // room id
    // 특정 채팅방에 접속한 socket.id 집합 값을 찾음
    const clients = io.sockets.adapter.rooms.get(room);
    // Set {"1234", "5678"} -> 특정 채팅방에 접속한 socket.id 집합 값

    // 'io' 객체 
    // - socket IO 인스턴스를 나타내는 객체 => 전체 소켓 서버 관리
    // 'io.sockets' 
    // - 현재 연결된 모든 소켓들을 관리하는 객체 => 소켓들의 상태를 관리하고 다양한 소켓 관련 작업 수행
    // 'io.sockets.adapter' 
    // - 소켓 서버 간의 상태를 관리하는 역할을 담당하는 객체 => 소켓 들의 연결 상태와 룸 정보를 관리
    // 'io.sockets.adapter.rooms' 
    // - 모든 방 정보를 저장하고 있는 객체
    // 'io.sockets.adapter.rooms.get(room)' 
    // - 위 객체에서 특정 방(room)의 아이디에 해당하는 정보를 set 형태로 가져오는 역할 
    // => 해당 방에 접속한 클라이언트들의 소켓 아이디를 set형태로(중복값 X) 값 반환

    // 방에 클라이언트가 있는 경우 실행
    if(clients) {
        // 각 소켓 아이디에 대해 반복 실행
        clients.forEach(client => {
            // console.log('client',client);      
            // socket.ID로 소켓 객체 가져오기
            // io.sockets.sockets : socket.id 가 할당한 변수들의 객체 값
            const userSocket = io.sockets.sockets.get(client);
            // console.log('userSocket',userSocket);

            // 사용자 정보 객체 생성
            const info = {userName : userSocket.userName, key : client}

            // 사용자 정보 배열에 추가
            users.push(info)
        });
    };

    return users; // 사용자 정보 배열값 반환
}

io.on('connection', (socket)=>{
    // socket : 접속한 웹 브라우저 -> 브라우저에 접속하면 고유 id값 생성 : socket.id
    // io : 접속해 있는 모든 웹 브라우저
    console.log('접속 완', socket.id);
    socket.on('create', (res)=>{
        // console.log(res);
        // join(방제목) -> '방제목'이 없으면 생성, 있으면 입장
        socket.join(res.roomName); 
        // console.log('방 생성 후', socket.rooms);

        // 사용자 정보 저장 
        socket.roomName = res.roomName; // socket 객체에 없는 메소드 생성
        socket.userName = res.userName; 

        // 3. 공지 알림
        // 나를 제외한 모든 방 사람들에게 메세지 전달 
        socket.to(res.roomName).emit('notice', `${socket.userName}님이 입장하셨습니다.`)

        // 4. 유저 리스트 갱신
        const userList = getUserList(res.roomName)
        console.log('유저들아',userList);
        io.to(res.roomName).emit('userList', userList)
    })


})

// 서버 열기
server.listen(PORT, ()=>{
    console.log(`localhost:${PORT}`);
})