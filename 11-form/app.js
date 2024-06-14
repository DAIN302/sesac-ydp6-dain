// express modlue
const express = require('express')
// express object
const app = express()
// server port number
const PORT = 8888;

// view engine & view template 
app.set('view engine', 'ejs')
app.set('views', './views')

// 미들웨어 연결
// 요청(request)과 응답(response)의 중간에서 작업
// express 에서는 app.use()로 등록

// body-parser 미들웨어 함수 연결
app.use(express.urlencoded({extended : true})); // urlencoded 로 parsing된 body를 요청 
// -> post 요청으로 들어오는 모든 형식의 데이터를 parsing
app.use(express.json()) // 요청의 body 객체에 json 형태로 온다.

// 라우팅(Routing) => 주소를 설정
// 포트번호 경로로 접속 시, index.ejs response
app.get('/', (req, res)=>{
    // rendering
    res.render('index', {title : 'Form 실습'})
})

app.get('/getForm', (req, res)=>{
    // console.log(req.query); // { id: 'banana', pw: '1234' }
    // get 방식으로 응답을 요청시 req.query 의 결과가 url에 보여짐 http://localhost:8888/getForm?id=banana&pw=1234
    // res.send('get 요청 성공')
    res.render('result', {
        title : 'GET 요청 결과',
        userInfo : req.query // req.query { id: 'banana', pw: '1234' }
    })
})

app.post('/postForm', (req, res)=>{
    // console.log(req.query); // {}
    // console.log(req.body); 
    // undefined -> body-parser 미들웨어 함수를 쓰지 않아서 
    // { id: 'apple', pwd: '1234 } -> body-parser 사용해서 데이터를 받았음
    // res.send('post 요청 성공')
    res.render('result', {
        title : 'POST 요청 결과', 
        userInfo : req.body // req.body { id: 'apple', pw: '1234' }
    })
})

// res.send() : 문자열, JSON, 파일 등을 클라이언트에게 응답 (JSON을 가장 많이 응답)
// -> 서버가 데이터를 응답할 때 사용
// res.render(view, data) : 템플릿 엔진을 사용해서 서버 측에서 "동적으로" HTML을 생성하고 클라이언트에게 응답
// -> 서버 측에서 동적으로 페이지를 렌더링할 때 사용
// -> view : views/ 폴더의 ejs 파일 연결
// -> data :  view에 넣어줄 정보

// listen(port, callback) : server start method
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})

