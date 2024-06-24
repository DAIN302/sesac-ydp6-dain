// mysql 연결 전
// exports.getVisitors = () => {
//     return [
//         {id : 1, name : '홍길동', comment : '내가 왔다'},
//         {id : 2, name : '이찬혁', comment : '으라차차'},
//     ]
// }

// mysql 연결
const mysql = require('mysql')

const conn = mysql.createConnection({    
    host : 'localhost',
    user : 'user',
    password : '1234',
    database : 'codingon'
}); // database 연결 객체


exports.getVisitors = (callback) => {
    // read all
    conn.query(`select * from visitor`, (err, rows) => {
      if (err) {
        throw err;
      }
      
      // console.log('model/Visitor.js >> ', rows); // rows 는 배열로 들어온다
      callback(rows)
    })
};

exports.postVisitor = (data, callback) => {
    conn.query(`insert into visitor(name, comment) values ('${data.name}', '${data.comment}')`,
        (err,rows) => {
            if(err) {
                throw err
            }
            // console.log(rows.insertId);
            callback(rows.insertId)
        }
    )
}