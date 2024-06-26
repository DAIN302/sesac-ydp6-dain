const express = require('express');
const app = express();
const path = require('path')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config({
    path: path.resolve(__dirname, `.env`),
}); // 기본으로 .env파일 로드
const port = process.env.PORT;

// 뷰 템플릿
app.set('view engine', 'ejs');
app.set('views', './views'); 

// cookie-parser 미들웨어 등록
app.use(cookieParser(process.env.COOKIE_SECRET));
// const cookieConfig = {
//     httpOnly : true, // 웹서버를 통해서만 쿠키에 접근 가능
//     maxAge : 60 * 1000, // 쿠키 수명(단위 : ms) // expires : 만료 날짜/시간 지정 가능
//     signed : true, // 쿠키 암호화 하겠다고 지정(req.signedCookies 에 저장됨)
//     // secure  :  웹 브라우저와 웹 서버가 https 통신하는 경우만 쿠키를 서버에 전송
// }
const cookieConfig = {
    httpOnly: true, // 웹 서버를 통해서만 쿠키에 접근 가능 -> front js에서 document.cookie 로 접근 차단,
    maxAge: 60 * 1000, // 쿠키 수명 (단위: ms)
    // expires: 만료 날짜/시간 지정 가능
    signed: true, // 쿠키의 암호화 (req.signedCookies)
    // secure: 웹 브라우저와 웹 서버가 https 통신하는 경우만 쿠키를 서버에 전송
}

app.get('/', (req,res)=>{
    res.render('cookie')
})

// 쿠키 설정
// app.get('/setCookie', (req,res)=>{
//     // res.cookie(키, 값, 옵션)
//     // : 쿠키를 설정하는 메서드, 서버가 클라이언트한테 응답하는 것이 아니라 쿠키를 설정하는 것!
//     res.cookie('myKeyTest', 'myValueTest', cookieConfig);

//     // 클라이언트한테 응답
//     res.send('Set Signed Cookie!')
// })
app.get('/setCookie', (req, res) => {
    // res.cookie(키, 값, 옵션)
    // : 쿠키를 설정하는 메서드 =/= 서버가 클라이언트 응답
    res.cookie('myKeyTest', 'myValueTest', cookieConfig);

    // 클라이언트한테 응답!
    res.send('Set signed cookie!');
})

app.get('/getCookie', (req,res)=>{
    // req.signedCookies
    // : cookie-parser가 만든 요청의 쿠키를 보여줌
    res.send(req.signedCookies)
})

app.get('clearCookie', (req,res) =>{
    // res.clearCookie(키,값,옵션)
    // : 쿠키를 삭제하는 메서드 =/= 서버가 클라이언트 응답
    // 쿠키를 생성할 때의 키, 값, 옵션이 일치해야함(maxAge, expires키는 일치 불필요)
    res.clearCookie('myKeyTest', 'myValueTest', cookieConfig);
    res.send('Deleted signed Cookie');
})

app.listen(port, ()=>{
    console.log(`server is running! port number is ${port}`);
    console.log(`쿠키비밀키 ${process.env.COOKIE_SECRET}`);
})

// cookie-parser
// : 요청에 실려온 쿠키를 해석해서 req.cookies 객체로 만듦

// cookieParser(secretKey, optionObj)
// - secretKey : 비밀키
// -> 비밀키의 값을 통해 해당 쿠키가 이 서버가 만든 쿠키임을 검증
// -> 쿠키는 클라이언트에 저장되는 정보이다보니 위조가 쉬워서 비밀키 설정을 통해 만든 서명을 쿠키 뒤에 붙임
// - optionObj : 쿠키에 사용되는 옵션
// 두 인자 선택이어서 안써도 됨
