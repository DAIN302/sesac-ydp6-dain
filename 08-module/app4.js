const fs = require('fs')

// 파일 삭제
// unlink() -> 첫번째 인자로 지정한 파일을 삭제한다.
/*
fs.unlink('mynewfile3.txt', function(err){
    if(err) throw err;
    console.log('file delete complete');
})
*/

// 파일 이름 변경
// rename() -> 첫번째 인자로 원본 파일, 두번째 인자로 바꿀 이름, 세번째 인자로 콜백함수
// rename(oldfilename, newfilename, callback)
fs.rename('mynewfile1.txt', 'renamefile1.txt', function(err){
    if(err) throw err;
    console.log('rename complete');

})

