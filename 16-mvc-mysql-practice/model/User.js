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

// 로그인
exports.postSignIn = (data, callback) => {
    conn.query(`select * from user where userid='${data.userid}' and pw='${data.pw}'`, (err, rows)=>{
        if(err) {
            throw err;
        }

        // console.log('model signin', rows[0]);
        callback(rows[0])
    })
}

// 로그인 성공 시 회원 정보 수정 페이지 접속
exports.postProfile = (data, callback) => {
    conn.query(`select * from user where userid='${data.userid}'`, (err,rows)=>{
        if(err) {
            throw err;
        }
        //console.log('model',rows);
        callback(rows[0])
    })
}

exports.patchProfile = (updateData, callback) => {
    const {id, pw, name} = updateData
    conn.query(`update user set pw='${pw}', name='${name}' where id=${id}`, (err, rows)=>{
        if(err) {
            throw err;
        }
        // console.log('model',rows);
        callback(true)
    })
}

exports.deleteUser = (targetId, callback) => {
    console.log('targetID',targetId);
    conn.query(`delete from user where id=${targetId}`, (err, rows)=>{
        if(err){
            throw err
        }
        callback(true) // 삭제
    })
}