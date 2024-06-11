const fs = require('fs')

// 파일 생성
// readFile() -> 파일 내용을 읽어옴

// 첫번째 인자로 파일 경로, 두번째 인자로 utf-8(유니코드 인코딩 방식) 로 읽는다는 정보 제공
// 컴퓨터는 문자에 대한 정보를 정확하게 잘 모르기 때문에 개발자가 지정해줘서 알려줘야함 (utf-8) 이런 식으로

fs.readFile('./input.txt', 'utf-8', function(err, data) {
    console.log('readFile',data);
})

/*
fs.readFile('./input.txt', function(err, data) {
    console.log(data);
    // 숫자 1 2 3 을 이런식으로 출력 -> <Buffer 31 0a 32 0a 33>
    // 컴퓨터가 정보를 알기 위해 저런식으로 해석하나?
})
*/

// readFileSync 는 동기화 그럼 readFile은 비동기화로 진행하나?
// 나중에 더 찾아봐야겠다 동기 비동기 차이를
const data = fs.readFileSync('./input.txt', 'utf-8')
console.log('readFileSync',data);
console.log('file read complete');

// readfile 이 더 먼저 코드가 적혔지만 readFileSync 가 먼저 호출됨
// 동기적으로 파일 읽어들이기 위해서는 readFileSync() 사용
// 비동기적으로 읽을때는 readFile() 사용

// readFileSync() 는 일반적인 함수처럼 반환값을 반환'
// readFile()은 반환값이 없고, 실행이 끝났을 때 콜백함수에 반환값을 인자로 받아서 실행