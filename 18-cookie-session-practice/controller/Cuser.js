const User = require('../model/User')

exports.main = (req, res) =>{
    console.log('id info',req.session.loggedin);
    if(req.session.loggedin){ 
        res.render('login', {
            userid : req.session.userid,
        })
    } else { // 
        res.render('index')
    }
}

exports.postLogin = (req, res) => {
    if(req.session.loggedin) {
        res.render('login', {
            userid : req.session.userid,
        })
    } else {
        req.session.userid = req.body.userid
        req.session.pw = req.body.password
        User.postSignIn(req.session, (result)=>{
            if(result){
                req.session.loggedin = true;
                console.log('controller',result);
                res.render('login', {
                    userid : result.userid,
                })
            } else {
                req.session.loggedin = false;
                res.send(`<script>alert("로그인 실패😰"); history.back()</script>`)
            }
        })
    }
}

exports.getLogin = (req,res) =>{
    if(req.session.loggedin) {
        res.render('login', {
            userid : req.session.userid,
        })
    } else {
        res.redirect('/')
    }
}

exports.getLogout = (req, res) => {
    req.session.destroy(err=>{
        if(err) console.log(err);
        res.redirect('/')
    })
}


