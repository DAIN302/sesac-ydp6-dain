const { Member } = require('../models/index')
const { hashPw, comparePw } = require('../utils/encrypt')

exports.main = (req, res) => {
    if(req.session.loggedin){
        res.render('index', {name : req.session.name})
    } else {
        res.render('index', {name : false})
    }
}

// 회원가입 페이지 이동
exports.getRegister = (req,res)=>{
    res.render('register')
}

// 회원가입 기능
exports.postRegister = async (req, res) => {
    try{
        const { userid, pw, name } = req.body
        // 아이디 중복검사
        const findMember = await Member.findOne({
            where : {userid}
        })
        // 데이터베이스에 아이디가 없으면 아이디 생성
        if(findMember===null){
            const newMember = await Member.create({
                userid, pw : hashPw(pw), name
            })
            res.render('login')
        } else {
            res.send(undefined)
        }
    }catch(err){
        console.error(err);
    }
}

// 로그인 페이지 이동
exports.getLogin = (req,res)=>{
    res.render('login')
}

// 로그인 기능
exports.postLogin = async (req, res) => {
    try {

        const { userid, pw } = req.body
        if(req.session.loggedin){
            res.render('index', {name : req.session.name})
        } else {
            req.session.userid = userid
            req.session.pw = pw
            const isMember = await Member.findOne({
                where : {userid},
                attributes : ['userid', 'pw', 'name']
            })
            if(isMember===null) {
                req.session.loggedin = false;
                res.send(undefined)
            }
            if(comparePw(pw, isMember.pw)){
                req.session.loggedin = true
                req.session.name = isMember.name
                res.render('index', {name : isMember.name})
            } else {
                req.session.loggedin = false;
                res.send(undefined)
            }
        }
    } catch(err){
        console.error(err);
    }
}

// 회원정보 수정 페이지 
exports.getProfile = async (req, res) => {
    try {
        const userid = req.session.userid
        const profile = await Member.findOne({
            where : {userid},
            attributes : ['userid', 'pw', 'name']
        })
        res.render('profile', {
            userid : profile.userid, 
            pw : profile.pw,
            name : profile.name
        })
    } catch(err){
        console.error(err);
    }
}

// 회원정보수정
exports.patchProfile = async (req, res) => {
    try {
        const { pw, name } = req.body
        const userid = req.session.userid
        const isPwMatch = await Member.findOne({
            where : {userid},
            attributes : ['pw']
        })
        const updateName = async () => {
            const updateName = await Member.findOne({
                where : {userid},
                attributes : ['name']
            })
            req.session.name = updateName.name
            res.send('edit')
        }
        if(comparePw(pw, isPwMatch.pw)){ // 비밀번호 같으면 메시지 보여주기
            res.send('same')
        } else if(pw===isPwMatch.pw) { // 비밀번호가 같으면 닉네임만 수정
            const updateMemberInfo = await Member.update(
                {name},
                {where : {userid}}
            )
            updateName()
        } else { // 비밀번호랑 닉네임 둘 다 수정
            const updateMemberInfo = await Member.update(
                { pw:hashPw(pw), name},
                { where : {userid} }
            )
            updateName()
        }
    } catch(err){
        console.error(err);
    }
}

// 회원 탈퇴
exports.deleteUser = async (req, res) => {
    try {
        const userid = req.session.userid
        const isDeleted = await Member.destroy({
            where : { userid }
        })
        if(isDeleted) {
            req.session.destroy(err=>{
                if(err) console.log(err);
                return res.send(true)
            })
        }
        else {
            return res.send(false)
        }
    } catch(err){
        console.error(err);
    }
}

// 전체 회원 조회
exports.getUsers = async (req, res) => {
    try {
        const members = await Member.findAll({
            attributes : ['name'],
            raw : true
        })
        res.render('users', {
            users : members,
            name : req.session.name
        })
    } catch(err){

    }
}

// 로그아웃
exports.getLogout = (req, res) => {
    req.session.destroy(err=>{
        if(err) console.log(err);
        res.redirect('/')
    })
}