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

// token 검증
app.post('/token', (req, res)=>{
    // 서버는 클라이언트 요청의 authorization 헤더를 확인
    if(req.headers.authorization){
        console.log('인증 헤더', req.headers.authorization);

        // ['Bearer', 'token_string']
        const token = req.headers.authorization.split(' ') // 공백을 기준으로 나눠서 배열로 담기
        console.log('token',token);
        try {
            const result = jwt.verify(token[1], SECRET)
            console.log('result', result);

            // 유효한 토큰일 때
            if(result.id === userInfo.id) {
                res.json({result : true, name : userInfo.name})
            }
        } catch (error) {
            // 토큰 검증 실패 또는 유효하지 않은 토큰일 때
            console.error(error);
            res.json({result : false, message : '인증된 회원이 아닙니다.'})
        }
    } else {
        // 토큰이 없으면 로그인창으로 보내기
        res.redirect('/login')
    }
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})