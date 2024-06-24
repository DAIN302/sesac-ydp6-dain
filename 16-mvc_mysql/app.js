const express = require('express')
const app = express()
const PORT = 8000;

// 뷰 템플릿
app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use('/static', express.static(__dirname + '/static'))
//  body-parser 미들웨어 등록
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// 라우터 분리
const indexRouter = require('./routes')
app.use('/', indexRouter)

// 404 error 처리
app.get('*', (req,res)=>{
    res.render('404')
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})