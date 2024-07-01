const express = require('express');
const session = require('express-session')
const dotenv = require('dotenv');
const path = require('path');
const app = express();
dotenv.config({
    path: path.resolve(__dirname, '.env'),
}); 

const port = process.env.PORT; 

app.set('view engine', 'ejs');
app.set('views', './views');

// static 미들웨어
app.use('/static', express.static(__dirname + '/static'))

//  body-parser 미들웨어 등록
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// express-session 미들웨어 등록
app.use(session({
    secret : process.env.COOKIE_SECRET, 
    resave : false, 
    saveUninitialized : false,
    cookie : {
        httpOnly : true, 
        secure : false, 
        expires : 1800 * 1000 // 단위(ms), expires : 만료기간 설정
    }
}))
// 

// 라우터 등록
const indexRouter = require('./routes/index')
app.use('/', indexRouter)


app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...`);
    
})

