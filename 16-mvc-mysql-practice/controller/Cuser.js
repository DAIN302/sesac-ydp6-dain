const User = require('../model/User')

exports.main = (req, res) => {
    res.render('index')
}

// 회원가입 패이지 보여주기
exports.getSignUp = (req,res) => {
    res.render('signup')
}

// 새로운 회원 생성
exports.postSignUp = (req,res) => {
    User.postSignUp(req.body)
}

// 로그인 페이지 보여주기
exports.getSignIn = (req,res) => {
    res.render('signin')
}

// 로그인 회원 조회
exports.postSignIn = (req,res) => {
    User.postSignIn(req.body, (result)=>{
        res.send({ result })
    })
}

// 로그인 성공 시 회원 정보 수정 페이지 접속
exports.postProfile = (req, res) => {
    User.postProfile(req.body, (result)=>{
        res.render('profile', {
            userid : result.userid,
            id : result.id,
            pw : result.pw,
            name : result.name,
        })
    })
}

// 회원 정보 수정
exports.patchProfile = (req, res) => {
    console.log(req.body);
    User.patchProfile(req.body, (result)=>{
        res.send({result})
    })
}

// 회원 삭제
exports.deleteUser = (req, res) => {
    console.log(req.body.id);
    User.deleteUser(req.body.id, (result)=>{
        res.send({result})
    })
}