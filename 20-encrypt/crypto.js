// crpyto
// Node.js 내장 모듈
// 암호화 기능 제공
// bcrypt보다 범용성 큼

// crypt 내장 모듈 불러오기
const crypto = require('crypto')

// createHash()
// 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 함수
// 매개변수로 받은 pw를 암호화하는 함수
const createHashedPw  = (pw) => {
    // createHash(알고리즘).update(암호화할값).digest(인코딩방식)
    return crypto.createHash('sha512').update(pw).digest('base64')
}

// 단방향으로 처리 -> 단방향은 같은 값에 대해 같은 해시값을 얻는다. 
// 인풋에 대한 아웃풋이 항상 같다보니 이를 역추적해서 암호를 해킹할 수 있음 
// => 이때문에 한계를 가져서 보완 필요!
// 보완 방법 : salt / 해시 여러번 돌리기

// 해시함수의 한계 : 같은 인풋에 대해 암호화된 같은 아웃풋 출력
// -> 평문으로 되돌아갈수는 없지만(복호화 ㄴㄴ) 아웃풋이 동일하면 인풋이 동일하다는 것을 유추 가능
// 레인보우 테이블에서도 암호화된 아웃풋을 역추적해서 찾아낼 수 있음
// console.log('첫번째',createHashedPw('1234'));
// console.log('두번째',createHashedPw('1234')); // 같은 인풋에 대해 같은 해시값 반환
// console.log('세번째',createHashedPw('1233')); // 미세한 변화에도 해시값 완전히 다르게 반환됨

////////////////////////////////////////////////////////////////////////////////////
// pbkdf2
// 비밀번호 기반 키 도출 함수로 주로 비밀번호 저장 시 사용

// 단방향 암호화 생성 함수
// 임의의 salt값 생성 후 pbkdf2Sync함수를 사용해서 해당 솔트와 비밀번호를 기반으로 해시 생성
const saltAndHashPw = (pw) => {
    const salt = crypto.randomBytes(16).toString('base64') // salt 생성
    const iterations = 100000 // 반복횟수
    const keylen = 64  // 생성할 키 길이
    const digest = 'sha512' // 해시 알고리즘

    //pbkdf2Sync(비밀번호원문, 솔트, 반복횟수, 키의 길이, 알고리즘)
    const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest) // pw값 암호화 
    .toString('base64') // 암호화된 버퍼형식의 데이터를 base64 문자열 변환해서 저장하거나 전송하기 쉽도록

    return { salt, hash }
}

//console.log('첫번째', saltAndHashPw('1234'));
// console.log('두번째', saltAndHashPw('1234'));

////////////////////////////////////////////////////////////////////////////////////
// 비밀번호 비교 함수
const comparePw = (inputPw, savedSalt, savedHash) =>{
    // saltAndHashPw 함수에서 정의한 값들이랑 일치
    const iterations = 100000 // 반복횟수
    const keylen = 64  // 생성할 키 길이
    const digest = 'sha512' // 해시 알고리즘

    const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, digest) // pw값 암호화 
    .toString('base64') 

    // hash : 사용자가 주장하는 비밀번호를 savedHash와 조합해서 암호화한 해시값
    // savedHash : 정답 비밀번호에 대한 해시값

    return hash === savedHash;
}

// 암호 비교 예제
const password = '1234!' // 정답비밀번호

// 비밀번호 암호화
const { salt, hash } = saltAndHashPw(password) 
console.log(`Salt : ${salt} // Hash : ${hash}`);

const inputPassword = '1234!' // 주장하는 비밀번호
const isMatch = comparePw(inputPassword, salt, hash)
console.log(`비밀번호 ${isMatch ? '일치' : '불일치'}`);

