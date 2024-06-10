const fs = require('fs')
const path = require('path')


fs.mkdir(path.join(__dirname, 'demo'), (err)=>{
    if(err){
        console.error(err)
    }
    console.log('demo complete');
})

/*
fs.rmdir(path.join(__dirname, 'demo'), (err)=>{
    if(err){
        console.error(err)
    }
    console.log('demo delete');
}
)
*/