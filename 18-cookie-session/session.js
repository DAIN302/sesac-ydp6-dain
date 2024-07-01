const express = require('express');
const session = require('express-session')
const dotenv = require('dotenv');
const path = require('path');
const app = express();

dotenv.config({
    path: path.resolve(__dirname, '.env'),
}); 

const port = process.env.PORT; 

app.set('view engine', 'ejs');
app.set('views', './views');

// express-session 미들웨어 등록
app.use(session({
    secret : process.env.COOKIE_SECRET, // 필수 옵션, 세션 암호화하는데 사용하는 키
    resave : false, // 세션이 변경되지 않더라도 매번 덮어쓰기로 저장을 할건지 여부 설정 옵션
    saveUninitialized : false, // 세션을 초기값이 지정되지 않은 상태에서도 처음부터 세션을 생성할 건지 여부 설정 옵션
    // 세션 쿠키 설정(세션관리할 때 클라이언트로 보내는 쿠키)
    cookie : {
        httpOnly : true, // 클라이언트에서 쿠키 확인 X
        secure : false, // http에서 사용가능하도록 true면 https에서만 가능
        maxAge : 60 * 1000 // 단위(ms), expires : 만료기간 설정
    }
}))
// 인자로 세션에 대한 설정 객체를 넣음


app.get('/', (req, res) => {
    res.render('session');
});

// 세션 설정
app.get('/set', (req, res) => {
    // 세션 설정
    // req.session.key = value

    if(req.query.name){
        req.session.name = req.query.name
        req.session.age = req.query.age
    } else {
        req.session.name = 'banana'
        req.session.age = 10
    }
    res.send('session complete')
});

// 세션 사용
app.get('/name', (req, res) => {
    // 세션 사용(조회)
    // req.session.key
    // console.log('req.session', req.session);
    /*
        req.session Session {
        cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
        name: 'banana',
        age: 10
        }
    */
    res.send({
        id : req.sessionID, // 클라이언트 구분을 위해 session마다 ID부여
        name : req.session.name
    })
});

// 세션 삭제
app.get('/destroy', (req, res) => {
    // req.session.destroy(세션 삭제 시 호출할 콜백함수)
    req.session.destroy((err)=>{
        if(err) throw err;
        // res.send('세션 삭제 완료')
        res.redirect('/name') // 경로를 변경한다. 응답하면서 경로를 바꿔줌
    })
});

app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...`);
    
})

// express-session 모듈
// : 세션 관리
// ex. 로그인 등의 세션을 구현하거나 특정 클라이언트에 대한 데이터 저장할 때 사용
// -> 사용자 별로 req.session 객체 안에 유지

// 세션 사용 : req.session.key
// 세션 설정 : req.session.key = value
// 세션 삭제 : req.session.destroy(콜백)

