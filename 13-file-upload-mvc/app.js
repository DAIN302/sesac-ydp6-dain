const express = require('express')
const app = express()
const PORT = 8080

// 뷰 템플릿 등록
app.set('view engine', 'ejs')
app.set('views', './views')

//  body-parser 미들웨어 등록
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// multer 미들웨어 등록
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/static', express.static(__dirname + '/public'))

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

const uploadRouter = require('./routes/upload')
app.use('/upload', uploadRouter)


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})