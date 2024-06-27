// mysql 연결
const mysql = require('mysql')

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : '12345678',
    database : 'codingon'
})

// 회원가입
exports.postSignUp = (data) => {
    // { userid: 'ssadasd', pw: 'asdasdas', name: 'asdasdas' }
    conn.query(`INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}');`,(err,rows)=>{
        if(err) {
            throw err;
        }

        // console.log('model signup', rows);
    })
}
exports.postSignIn = (data, callback) => {
    conn.query(`select * from user where userid='${data.userid}' and pw='${data.pw}'`, (err, rows)=>{
        if(err) {
            throw err;
        }

        console.log('model signin', rows[0]);
        callback(rows[0])
    })
}
