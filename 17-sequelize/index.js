const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index');
const playerRouter = require('./routes/player');
const teamRouter = require('./routes/team');
const { sequelize } = require('./models/index')

// 뷰 템플릿
app.set('view engine', 'ejs');
app.set('views', './views'); 

//  body-parser 미들웨어 등록
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// 라우터 등록
app.use('/', router);
app.use('/players', playerRouter);
app.use('/teams', teamRouter);

// 모델 등록
sequelize.sync({force:false}) // force : true -> 서버 실행때마다 테이블 재생성 / false -> 서버 실행 시 테이블이 없으면 생성
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`database connection succeeded`);
        console.log(`Server is running! Port number is ${PORT}`);
    });
}).catch((err)=>console.log(err))

