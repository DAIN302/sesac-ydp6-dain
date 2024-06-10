const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res)=>{
    let q = req.url;
    let filename = '.'+ q.pathname;
    res.readFile(filename, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'})
            return res.end('Page Not Found')
        }
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
        
    })
}).listen(3000, ()=>{
    console.log('3000 port server on')
})
