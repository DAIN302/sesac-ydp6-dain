// const ps = process.env
// console.log(ps); // object
const express = require('express')
const path = require('path')
const app = express()

// dotenv 모듈을 이용해서 .env파일의 환경 변수를 불러옴
// npm i dotenv cross-env
// require('dotenv').config();

// 환경변수 파일이 어디있는지 경로를 설정해줘야함
require('dotenv').config({
    // NODE_ENV에 따라서 적절한 .env 파일을 로드
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

// process.env 객체를 통해 환경 변수에 접근
const port = process.env.PORT || 8888;
const dbName = process.env.DATABASE_NAME;
const dbPw = process.env.DATABASE_PW;

app.listen(port, ()=>{
    console.log(`server is running! port number is ${port}`);
    console.log(`db name is ${dbName}, db pw is ${dbPw}`);
})