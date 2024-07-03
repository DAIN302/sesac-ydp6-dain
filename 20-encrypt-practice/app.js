const express = require('express');
const session = require('express-session')
const dotenv = require('dotenv');
const path = require('path');
const router = require('./routes/user');
const app = express();
const { sequelize } = require('./models/index')
dotenv.config({
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
}); 
const port = process.env.PORT

// 뷰 엔진 등록
app.set('view engine', 'ejs');
app.set('views', './views');

// static 미들웨어
app.use('/static', express.static(__dirname + '/static'))

//  body-parser 미들웨어 등록
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// express-session 미들웨어 등록
app.use(session({
    secret : process.env.COOKIE_SECRET,
    resave : false,
    saveUninitialized : false,
    cookie : {
        httpOnly :true,
        secure : false,
        expires : 1800 * 1000
    }
}))

// 라우터 등록
app.use('/', router)

// 404 처리
app.get('*', (req, res) => {
    res.render('404')
})

sequelize.sync({force : false})
.then(()=>{
    app.listen(port, () => {
        console.log(`Sever is running! The port number is ${port} ...`);
    })
}).catch(err=>console.log(err))