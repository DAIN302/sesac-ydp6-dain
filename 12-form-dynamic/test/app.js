const express = require('express')
const app = express()
const PORT = 8080;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({extended : true}));
app.use(express.json())

app.get('/', (req, res)=>{
    res.render('index', {title : '포켓몬'})
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})