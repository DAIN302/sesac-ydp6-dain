const express = require('express')
// multer : 파일 업로드를 위해 사용하는 미들웨어 
const multer = require('multer')
const app = express()
// 파일 업로드 경로 설정 / dest : 파일을 업로드하고 그 파일이 저장될 경로를 지정하는 속성
const upload = multer({
    dest : 'uploads/',
})

const PORT = 8000

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({extended : true}))
app.use(express.json())

// multer 미들웨어 등록
app.use('/uploads', express.static(__dirname + '/uploads'))

app.get('/', (req, res)=>{
    res.render('index', {title : '파일 업로드 실습'})
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})