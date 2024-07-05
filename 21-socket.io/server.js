const express = require('express')
const http = require('http') // node.js 기본 내장 모듈 / HTTP 서버와 클라이언트 기능을 제공
const socketIO = require('socket.io') // socket.io 모듈, WebSocket 기반, 실시간 양방향 데이터 전송 지원 라이브러리

const app = express()
const server = http.createServer(app) // express 애플리케이션 기반으로 http 서버 생성
const io = socketIO(server) // HTTP 서버 'server' 를 socket.io 에 바인딩하여 웹소켓 기능을 추가한 서버 생성
// => 클라이언트 <-> 서버 간 실시간 양방향 통신 가능

const PORT = 8080

// 뷰 엔진 등록
app.set('view engine', 'ejs')
// app.set('views', './views')

// 라우터 등록
app.get('/', (req,res)=>{
    res.render('client')
})

// 실습 3-2-1
// 사용자 닉네임 모음 객체
const nickObjs = {}

// 실습 3-2-3
// 유저 목록 업데이트
function updateList() {
    io.emit('updateNicks', nickObjs) // 전체 사용자 닉네임 모음 객체 클라이언트에 전달
}

// io.on() : 소켓 관련한 통신 작업을 처리
// connection 이벤트 : 클라이언트가 접속 했을 때 발생
io.on('connection', (socket)=>{
    // console.log('서버 연결 완료', socket.id);
    // socket.id 소켓 고유 아이디(브라우저, 탭 단위로 바뀜)
    // 서버 연결 완료 GzsnyGwdNprOe6R1AAAR -> 새로고침할때마다 아이디 바뀜

    // 실습 1
    socket.on('hello', (data) => {
        console.log(`${data.who} : ${data.msg}`);
        // 클라이언트에 응답 보내기
        socket.emit('hello2', {who : 'hello', msg : '안녕'})
    })

    socket.on('study', (data) => {
        console.log(`${data.who} : ${data.msg}`);
        // 클라이언트에 응답 보내기
        socket.emit('study2', {who : 'study', msg : '공부공부'})
    })

    socket.on('bye', (data) => {
        console.log(`${data.who} : ${data.msg}`);
        // 클라이언트에 응답 보내기
        socket.emit('bye2', {who : 'bye', msg : 'ok bye~'})
    })

    // 실습 3 : 채팅창 입장 안내 문구
    // io.emit('notice', `${socket.id} 님이 입장하셨습니다.`)

    // 실습 3-2 : 채팅창 입장 문구 socket.id를 닉네임으로 바꾸기
    // emit() from server 
    // - socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트 데이터 전송
    // - io.emit(event_name, data) : 서버에 접속된 모든 클라이언트에게 전송
    // - io.to(소켓아이디).emit(event_name, data) : 소켓아이디에 해당하는 클라이언트에게만 전송(ex. 귓속말)

    socket.on('setnick', (nick)=>{
        // console.log(`닉네임 설정 완료 ${nick}님이 입장하셨습니다.`);

        // 실습 3-2-1
        // 프론트에서 입력한 nick이 nickObjs에 존재하는지 중복 검사
        // 이미 존재 : error 이벤트 + '이미 존재하는 닉네임 입니다.'
        // => 클라이언트 : error 이벤트 받으면 alert창 띄우기
        // 새 닉네임 :  notice 이벤트 띄우기 + ${nick}님이 입장하셨습니다.
        if(Object.values(nickObjs).indexOf(nick) > -1 ){ // -1보다 큼 -> 닉네임이 이미 존재함
            socket.emit('error', '이미 존재하는 닉네임입니다.')
        } else { 
            // 새로운 닉네임
            nickObjs[socket.id] =  nick
            console.log('접속 유저 목록', nickObjs);
            io.emit('notice', `${nick}님이 입장하셨습니다.`) // 전체 공지

            // 실습 3-2-2 
            socket.emit('entrySuccess', nick) // 해당 소켓 데이터 전송
            // 실습 3-2-3
            updateList()
        }
    })

    // 실습 3-3 : 클라이언트 퇴장 시
    // "notice" 이밴트로 퇴장 공지
    socket.on("disconnect", ()=>{
        console.log('접속 끊김', `${nickObjs[socket.id]} 님이 퇴장`, socket.id);
        io.emit('notice', `${nickObjs[socket.id]}님이 퇴장하셨습니다.`)
        delete nickObjs[socket.id];
        updateList();
    })

    // 실습4 : 채팅창 메시지 전송
    // send 이벤트 받아서 모두에게 newMessage 이벤트로 
    socket.on('send', (data)=>{
        console.log('서버측 data', data);
        
        // 실습 5 : DM 기능 추가
        // DM인지 아닌지 구분
        // io.to(소켓아이디).emit(event_name, data) : 소켓아이디에 해당하는 클라이언트에게만 전송
        if(data.dm === 'all'){
            // 전체 발송
            io.emit('newMessage', {nick: data.myNick, msg : data.msg})
        } else{
            // dm 발송
            let dmSocketId = data.dm
            const sendData = {
                nick : data.myNick,
                msg : data.msg,
                dm : '(속닥속닥)'
            }
            io.to(dmSocketId).emit('newMessage', sendData) // dm을 보내야하는 타켓에게 메세지 전송
            socket.emit('newMessage', sendData)
            console.log('dm', sendData);
        }
    })
})

// 서버 열기
server.listen(PORT, ()=>{
    console.log(`localhost:${PORT}`);
})