const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

const today = new Date()
const expireDate = new Date()
expireDate.setDate(today.getDate() + 1)

// cookie-parser 미들웨어 
app.use(cookieParser());
const cookieConfig = {
    httpOnly: true, 
    expires: expireDate, 
    signed: false,
}

app.get('/', (req, res) => {
    if(req.cookies.popup==="hide"){
        res.render('cookie', { popup : req.cookies.popup});
        console.log(req.cookies);
    } else {
        res.render('cookie', { popup : ''})
    }
});

app.get('/setCookie', (req, res) => {
    res.cookie('popup', 'hide', cookieConfig)
    res.send(req.cookies)
});

app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...`);
})
