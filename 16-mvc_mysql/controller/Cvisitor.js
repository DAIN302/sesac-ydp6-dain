const Visitor = require('../model/Visitor')

exports.main = (req, res) => res.render('index')

exports.getVisitors = (req, res) =>{
    // console.log(Visitor.getVisitors());
    // mysql 연결 전
    // res.render('visitor', {data : Visitor.getVisitors()})
    // mysql 연결 후
    Visitor.getVisitors((result)=>{
        // result 매개변수 : model/visitor.js의 getVisitors의 callback(rows)의 "rows" 변수에 대응
        console.log(result);
        res.send('test')
    })
}
