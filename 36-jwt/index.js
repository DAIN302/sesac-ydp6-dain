const express = require('express');
const jwt = require('jsonwebtoken');
const app =  express();
const PORT = 8000;
const SECRET = 'NUXsEUrVboQY9ik51sfDpxcxVw9RdmvC'
// 영어 32자 암호화 SHA-256(영어 1글자가 8bit 따라서 256bit에 맞추려면 32글자)

// 임시 DB 정보
const userInfo = {
    id : 'dain', pw : '1234', name : 'dain'
}

app.set('view engine', 'ejs');
// app.set('views', './views'); 
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login', (req, res)=> {
    try {
        const { id, pw } = req.body // 유저가 입력한 정보
        const { id : uId, pw : uPw } = userInfo // 유저의 DB 정보
        
        if(id === uId && pw === uPw) {
            const token = jwt.sign({ id }, SECRET)
            res.json({result : true, token})
        } else {
            // 로그인 실패
            res.json({result : false, message : '로그인 정보가 올바르지 않습니다.'})
        }
    } catch(err){
        console.log(err);
    }
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})