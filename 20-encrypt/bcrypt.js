// bcrypt 
// 비밀번호 암호화 시 자주 사용하는 모듈 ## 단방향 암호화만 지원
// 외부 라이브러리이므로 설치 필요  npm i bcrypt
// 양방향 암호화는 지원하지 않으며 비밀번호 암호화에 특화된 모듈
// 비밀번호 같은 민감한 정보는 복호화할 필요가 없고, 복호화가 가능해진다는 것은 보안상 위험

// bcrypt 모듈 불러오기
const bcrypt = require('bcrypt')

// 정답 비밀번호 정의
const originalPw = '1234'

// 솔트 생성 라운드 수 정의
// 라운드? 해시 함수를 반복하는 횟수
const saltRounds = 10 // 2^10 = 1024회 반복 ( 10~12 사이의 값을 보통 씀)
// 솔트 라운드 숫자가 커짐? -> 해시 생성 시간이 길어짐(느려짐), but 보안성이 높아진다.

// 비밀번호 해싱 함수 정의
const hashPw = (pw) => {
    // hashSync(비밀번호, 솔트생성라운드수)
    return bcrypt.hashSync(pw, saltRounds)
}

// console.log(hashPw(originalPw));

// 비밀번호 정답 검증 함수 정의
const comparePw = (inputPw, originalPw) => {
    return bcrypt.compareSync(inputPw, originalPw) // 평문 비밀번호와 암호화된 비밀번호를 받아서 비교
    // 사용자가 입력한 평문과 해시값을 비교하여 boolean 형태로 반환
}

const hashedPw = hashPw(originalPw)
// console.log(`hashedPw ${hashedPw}`);

// 비교 
const isMatch = comparePw(originalPw, hashedPw)
console.log(isMatch ? '비번 일치' : '비번 불일치');
const isMatch2 = comparePw('1233', hashedPw)
console.log(isMatch2 ? '비번 일치' : '비번 불일치');