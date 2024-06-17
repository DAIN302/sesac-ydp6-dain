// express module 등록
const express = require('express')
const app = express()
const PORT = 8080;

// ejs 엔진 설정
app.set('view engine', 'ejs')
// views 폴더 연결
app.set('views', './views')

// body-parser 미들웨어 연결
app.use(express.urlencoded({extended : true}));
app.use(express.json())

app.get('/', (req, res)=>{
    res.render('dynamic',{title : '동적 Form 실습'})
})

// ajax 요청 처리 : get
app.get('/ajax', (req, res)=>{
    // get방식이므로 브라우저에서 url 쿼리까지 직접 입력해서도 값 확인 가능
    // console.log(req.query);
    res.send(req.query)
})

// ajax 요청 처리 : post
app.post('/ajax', (req, res)=>{
    //console.log(req.body);
    res.send(req.body)
})

// axios 요청 처리 : get
app.get('/axios', (req,res)=>{
    //console.log(req.query);
    res.send(req.query)
})

// axios 요청 처리 : post
app.post('/axios', (req,res)=>{
    res.send(req.body)
})

// fetch 요청 처리 : get
app.get('/fetch', (req,res)=>{
    res.send(req.query)
})

// fetch 요청 처리 : post
app.post('/fetch', (req,res)=>{
    res.send(req.body)
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})