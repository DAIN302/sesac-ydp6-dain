// express 모듈 등록
const express = require('express')
const app = express();
const PORT = 8888;

// 뷰 템플릿
app.set('view engine', 'ejs');
app.set('views', './views'); 

// static 미들웨어
app.use('/static', express.static(__dirname + '/static'))

//  body-parser 미들웨어 등록
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// 라우터 등록
const indexRouter = require('./routes/index')
app.use('/', indexRouter)

// 404 처리
app.get('*', (req, res) => {
    res.render('404')
})

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});
