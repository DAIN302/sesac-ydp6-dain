const express = require('express')
// multer : 파일 업로드를 위해 사용하는 미들웨어 
const multer = require('multer')
// path 모듈 불러오기
const path = require('path')

const app = express()
// 파일 업로드 경로 설정 / dest : 파일을 업로드하고 그 파일이 저장될 경로를 지정하는 속성 (dest : destination)
// const upload = multer({
//     dest : 'uploads/', 
// })
const PORT = 8000

// 뷰 템플릿 등록
app.set('view engine', 'ejs')
app.set('views', './views')

//  body-parser 미들웨어 등록
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// multer 미들웨어 등록
app.use('/uploads', express.static(__dirname + '/uploads'))

const uploadDetail = multer({
    storage : multer.diskStorage({ // 저장할 공간에 대한 정보 diskStorage -> 디스크에 저장하겠다고 설정
        destination(req, file, done){ // 저장할 경로 설정
            done(null, 'uploads/') // 파일을 저장할 경로
        },
        filename(req, file, done){ // 디스크에 저장될 파일명 설정
            const ext = path.extname(file.originalname); // path.extname()-> 확장자만 추출
            // 저장할 파일명
            done(null, path.basename(file.originalname, ext) + Date.now() + ext) // 파일명 + 업로드한 시간 + 확장자
        }
        // (req, file, done) -> req 요청 객체 / file -> req.file / done -> 끝났당
    }),
    limits : {fileSize : 5*1024*1024} // 업로드 크기 제한
})

app.get('/', (req, res)=>{
    res.render('index', {title : '파일 업로드 실습'})
})

// 하나의 인풋에 하나의 파일 업로드
// 경로, multer객체.single ,콜백 -> single 미들웨어 등록(하나의 파일을 업로드)
// single 메서드 인자값으로는 input:file 의 name 값을 줘야함 -> 어떤 폼요소에 담겨있는지 확인
// - single 미들웨어는 라우터 미들웨어 앞에 넣으면 됨
// - multer 객체 생성시 작성한 옵션에 따라 파일 업로드 후에 객체가 생성
app.post('/upload', uploadDetail.single('userfile'), (req,res)=>{
    // console.log(req.body); // [Object: null prototype] { title: '' } file은 body 에 포함x
    console.log(req.file); // req.file -> upload 된 파일 정보
    /*{
        fieldname: 'userfile',
        originalname: 'á\x84\x89á\x85³á\x84\x8Fá\x85³á\x84\x85á\x85µá\x86«á\x84\x89á\x85£á\x86º 2024-06-17 á\x84\x8Bá\x85©á\x84\x92á\x85® 5.43.03.png',
        encoding: '7bit',
        mimetype: 'image/png',
        destination: 'uploads/',
        filename: '1d43f9ad231eaad895293e3a76ffb865',
        path: 'uploads/1d43f9ad231eaad895293e3a76ffb865',
        size: 44932
    } */
    // 영어 파일 이름은 잘되는데 왜 한글은 깨지죠??ㅜㅜ -> 멀터 최신버전 버그임 1.4.4 버전으로 다시 받으면 잘됨~
    //res.send('업로드 성공')
    // 파일 탐색기에 uploads 라는 폴더 생성
    // 확장자 없이 파일명이 저장(multer 객체 생성할 때 dest 옵션 외에 설정을 안해서)
    // 파일 탐색기에서 png 등의 확장자를 붙이면 업로드한 파일임이 확인됨)
    res.render('uploaded', {title : req.body.title, src: req.file.path})
})

// 하나의 인풋에 여러개의 파일 업로드
// multer객체.array() : 여러 파일을 하나의 인풋에 업로드
app.post('/upload/array',uploadDetail.array('userfiles'), (req, res)=>{
    console.log(req.files); // 여러개의 파일은 files 객체에 있음 -> [{},{},{}] 배열 형태로 파일 정보를 저장
    res.send('여러개의 파일 업로드 성공1')
})

// 여러개의 인풋에 파일 업로드
// multer객체.fields() : 여러 파일을 각각의 인풋에 업로드 -> 인자값을 배열형태로 전달
app.post('/upload/fields', uploadDetail.fields([{name:'apple'},{name:'banana'}]), (req,res)=>{
    console.log(req.body);
    console.log(req.files); // 여러개의 파일이라 files에 담김
    // {apple: [{}], banana : [{}]} 객체 형태로 파일 정보 저장
    res.send('여러개의 파일 업로드 성공2')
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})