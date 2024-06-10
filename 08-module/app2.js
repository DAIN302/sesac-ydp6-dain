const fs = require('fs');
const path = require('path');


// console.log(fs);
// fs.mkdir(path, mode, callback) -> 디랙토리(폴더) 만들어줌, mode 인자 생략가능
/*
fs.mkdir(path.join(__dirname, 'test'), (err)=>{ // 현재 경로에 디렉토리를 만들어줌
    if(err){
        return console.error(err);
    } 
    console.log('디렉토리 생성완료');
})
*/

// fs.rmdir(path, mode, callback) -> 디렉토리 삭제
fs.rmdir(path.join(__dirname, 'test'), (err)=>{ // rmdir 현재 경로에 디렉토리를 삭제
    if(err){
        return console.error(err);
    } 
    console.log('디렉토리 삭제');
})
