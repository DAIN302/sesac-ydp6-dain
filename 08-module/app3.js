// 디렉토리 읽기 -> readdir
const fs = require('fs')

/*
fs.readdir('./', function(err, files){
    if(err) console.log('error', err)
    else console.log('result',files);    
}) // 결과들이 배열??에 담겨서 출력됨
// 파일 목록을 배열로 리턴함
*/

// 파일 생성1 -> writeFile(파일이름, 내용, 콜백함수)
/*
fs.writeFile('mynewfile1.txt', 'Hello World', function(err){
    if(err) throw err;
    console.log('파일 생성');
})
*/

// 파일 생성2 -> open(), w를 이용해서 파일 생성
/*
fs.open('mynewfile2.txt', 'w', function(err, file){
    if(err) throw err;
    console.log('파일 생성');
}) // 내용이 없어 컨텐츠가 없이 빈 파일, 'w'-> write mode 로 생성한다는 의미 
*/

// 파일 생성3 -> appendFile() 추가, 기존 파일이 있다는 것을 전제로 둠
// 기존 파일이 있으면 두번째 인자로 받은 것이 기존 파일에 내용으로 추가됨
// 기존 파일이 없다면 파일이 새로 생성되며 두번째 인자로 받은 것이 내용으로 추가됨
fs.appendFile('mynewfile3.txt', 'Kim', function(err){
    if(err) throw err;
    console.log('파일 생성');
})