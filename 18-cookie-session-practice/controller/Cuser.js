const User = require('../model/User')

exports.main = (req, res) =>{
    res.render('index')
}

exports.postLogin = (req, res) => {
    req.session.userid = req.body.userid
    req.session.pw = req.body.password
    User.postSignIn(req.session, (result)=>{
        if(result){
            console.log('controller',result);
            res.render('login', {
                userid : result.userid,
                name : result.name
            })
        } else {
            res.send(`<script>alert("로그인 실패😰"); history.back()</script>`)
        }
    })
}

exports.getLogout = (req, res) => {
    req.session.destroy(err=>{
        if(err) console.log(err);
        res.redirect('/')
    })
}