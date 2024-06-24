// express 모듈 등록
const express = require('express')
const app = express();
const PORT = 8000;

// 뷰 템플릿
app.set('view engine', 'ejs');
app.set('views', './views'); 

// 요청이 들어왔을 때 routes/index.js 읽을 수 있게 설정
const indexRouter = require('./routes/index'); // index는 생략 가능
app.use('/', indexRouter); // 기본 요청 주소 : localhost:PORT

const userRouter = require('./routes/user')
app.use('/user', userRouter)
// -> 이 요청에 의한 라우터 불러오기는 /user 가 붙는다. 따라서 기본 요청 주소 : localhost:PORT/user

// 잘못된 요청에 대한 처리 404 -> 맨 마지막 라우트(주소)로 선언해야함 안그러면 나머지 라우팅이 전부 무시됨
// * 때문에 맨 위로 올리면 모든 요청에 대해 이거로 처리함 
// 가장 마지막으로 해야 위에 설정된 라우팅을 제외하고 처리함
app.get('*', (req,res)=>{
    res.render('404')
})

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});