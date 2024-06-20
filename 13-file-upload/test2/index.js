// express module 등록
const express = require('express')
const path = require('path')
const multer = require('multer')

const app = express()

const PORT = 8080;

// ejs 엔진 설정
app.set('view engine', 'ejs')
// views 폴더 연결
app.set('views', './views')

// body-parser 미들웨어 연결
app.use(express.urlencoded({extended : true}));
app.use(express.json())

// multer 미들웨어 등록
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/static', express.static(__dirname + '/public'))

const uploadDetail = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/')
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname)
            done(null, path.basename(file.originalname, ext) + ext)
        }
    })
})


app.get('/', (req, res)=>{
    res.render('index')
})

// 파일업로드
app.get('/upload', (req, res)=>{
    res.send(req.query)
})

app.listen(PORT, ()=>{
    console.log(PORT);
})