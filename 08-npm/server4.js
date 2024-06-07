const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    let path = "./views/"
    switch(req.url){
        case "/" :
            path += 'index.html'
            res.statusCode = 200;
            break;
        case "/about" :
            path += 'about.html'
            res.statusCode = 200;    
            break;
        default : 
            res.statusCode = 404;
            break;                
    }

    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err, data)=>{ 
        if(err){ 
            console.log(err);
            res.end();
        } else { 
            res.end(data)
        }
    })
});
server.listen(8000, ()=>{
    console.log(`8000번 서버 실행`);
});