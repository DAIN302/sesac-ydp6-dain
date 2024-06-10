// __dirname : 디렉토리 이름
//console.log(__dirname);
// __filename : 파일 이름
//console.log(__filename);
// const add = require('./add');
// console.log(add(58, 66))
// console.log('from index.js');

//scope(범위) 모듈은 각각의 범위를 가지고 있다
// require('./batman')
// require('./superman')
// 각각의 파일에서 같은 변수명이지만 각각의 범위를 가지고 있기 때문에 변수가 덮어씌워지지 않는다.

// 모듈의 기초형태
//()() 함수의 자동실행
/* 
(function(){
    const superHero = 'Superman'
    console.log(superHero);
})()
*/
// 모듈의 형태 -> 모듈은 자동실행 형태다.
/* 
(function(exports, require, module, __filename, __dirname){
    // 인자로 exports, requie, module, __filename, __dirname을 받는다. 
    // 인자는 생략가능하다.
    // 실행코드
})() 
*/

// 모듈의 패턴