const express = require('express')
const app = express()
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', './views')
// 미들웨어 함수 등록 : express.static()
// express.static() -> 이미지, CSS 파일 및 JavaScript 파일과 같은 정적 파일을 제공
// express.static 함수를 써서 public 폴더에 있는 것을 사용하겠다.
app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('index', {title : "Home"})
})
app.get('/about', (req,res)=>{
    res.render('about', {title : "About"})
})
app.get('/create', (req,res)=>{
    res.render('create', {title : "Create"})
})
// 지정된 경로 외 경로일때
app.use((req,res)=>{
    res.status(404).render('404')
})

app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`);
})