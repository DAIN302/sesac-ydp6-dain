// mysql 연결
const mysql = require('mysql')

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : '12345678',
    database : 'codingon'
})

