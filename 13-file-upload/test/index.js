const express = require('express')
// multer : 파일 업로드를 위해 사용하는 미들웨어 
const multer = require('multer')
// path 모듈 불러오기
const path = require('path')
const app = express()
const PORT = 8080;

// 뷰 템플릿 등록
app.set('view engine', 'ejs')
app.set('views', './views')

//  body-parser 미들웨어 등록
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// multer 미들웨어 등록
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/static', express.static(__dirname + '/public'))

// multer 객체
const uploadDetail = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/')
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname); 
            done(null, req.body.userID + ext)
        }
    }),
    limits : {fileSize : 5*1024*1024} // 업로드 크기 제한
})

app.get('/', (req, res)=>{
    res.render('index', {title : '회원가입'})
})

app.post('/upload', uploadDetail.single('userimg'), (req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.render('result', {
        userID : req.body.userID,
        userpwd : req.body.userpwd,
        username : req.body.username,
        userage : req.body.userage,
        userImg : req.file.path
    })
})

app.listen(PORT, ()=>{
    console.log(`${PORT} 연결성공`);
})