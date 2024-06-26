const Visitor = require('../model/Visitor')

exports.main = (req, res) => res.render('index')

// 전체 조회
exports.getVisitors = (req, res) =>{
    // console.log(Visitor.getVisitors());
    // mysql 연결 전
    // mysql 연결 후
    Visitor.getVisitors((result)=>{
        // result 매개변수 : model/visitor.js의 getVisitors의 callback(rows)의 "rows" 변수에 대응
        // console.log(result);
        // res.send('test')
        // res.render('visitor', {data : Visitor.getVisitors()})
        res.render('visitor', {data : result})
    })
}

// 하나 추가
exports.postVisitor = (req, res) => {
    console.log(req.body);

    Visitor.postVisitor(req.body, (result)=>{
        // result -> row.insertId
        console.log(result);
        res.send({id : result, name : req.body.name, comment : req.body.comment})
    })

    // res.send('test')
}

// 하나 삭제
exports.deleteVisitor = (req, res) => {
    console.log(req.body);
    Visitor.deleteVisitor(req.body.id, (result)=>{
        console.log('controller', result);
        res.send({ result })
    })
}
