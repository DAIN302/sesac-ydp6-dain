// mysql 연결
const mysql = require('mysql')
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
    path: path.resolve(__dirname, '../.env'),
}); 

const host = process.env.HOST
const user = process.env.DATABASE_USER
const password = process.env.DATABASE_PW
const database = process.env.DATABASE_NAME

const conn = mysql.createConnection({
    host,
    user,
    password,
    database
})

// 로그인
exports.postSignIn = (data, callback) => {
    conn.query(`select * from user where userid='${data.userid}' and pw='${data.pw}'`, (err, rows)=>{
        if(err) {
            throw err;
        }
        console.log('singin',rows);
        callback(rows[0])
    })
}

