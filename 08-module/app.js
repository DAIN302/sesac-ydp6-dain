// node 가 가지고 있는 기본 모듈 os (운영체제 정보 모듈)
const { log } = require('console');
const os = require('os')
//console.log(os);
// console.log(os.totalmem()); // 전체 메모리

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
// console.log(`total memory : ${totalMemory}`); // 전체 메모리
// console.log(`free memory : ${freeMemory}`); // 사용가능한 메모리

// path module
// path.join() : 여러 인자를 넣으면 하나의 경로로 합쳐줌
// path.resolve() : path.join()과 비슷하지만 약간의 차이
// path.parse() : 파일 경로를 root, dir, base, ext, name으로 구분
// path.format() : path.parse()한 객체를 파일 경로로 합친다
const path = require('path')
//console.log(path);
console.log(path.basename(__dirname)); // basename()을 쓰면 현재 자기가 있는 곳만 표시해줌
console.log(path.basename(__filename));
console.log(path.join(`a`, `b`, `index.html`));
console.log('_______________________________');
let pathname = path.parse('/home/user/dir/file.txt')
console.log(pathname);
console.log('_______________________________');
console.log(path.extname('/home/user/dir/file.txt')); // extname -> 확장자 이름
console.log(path.basename('/home/user/dir/file.txt')); // basename -> 파일 이름
