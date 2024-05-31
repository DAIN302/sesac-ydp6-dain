// 조건문 

// if 문
if(5 > 3) {
    console.log("I wanna go home")
}

// let number = Number(prompt('숫자입력해라'))


// if(number > 10) {
//     console.log('입력한 수는 10보다 크다')
// } else {
//     console.log('입력한 수는 10보다 작거나 같다')
// }


// if(number > 10) {
//     console.log('입력한 수는 10보다 크다')
// } else if(number === 10){
//     console.log('입력한 수는 10이다')
// } else {
//     console.log('입력한 수는 10보다 작다')
// }

// if(number > 100 || number < 0) {
//     console.log('0~100범위내에 입력해주세요')
// } else if(number >= 90){
//     console.log('A')
// } else if(number >= 80){
//     console.log('B')
// } else if(number >= 70){
//     console.log('C')
// } else if(number >= 60){
//     console.log('D')
// } else {
//     console.log('F')
// }


// 중첩 if문
let userId = 'sba'
let userPw = '1234'

// id, pw 검사하는 함수
// function loginUser() {
//     // let inputId = prompt('아이디 입력');
    
//     // userId, inputId 같으면 -> userPw, inputPW 비교
//     // inputId 입력안됨 -> '아이디 입력 안함' 문구 반환
//     // inputId 틀리면 -> '아이디 틀림' 문구 반환
//     if(userId === inputId) {
//         let inputPw = prompt('비번 입력') 
//         if(userPw === inputPw) {
//             return '로그인 성공'
//         } else {
//             return '비밀번호 틀림'
//         }
//     } else if(inputId === '') {
//         return '아이디 입력 안함'
//     } else {
//         return '아이디 틀림'
//     }
// }

// const result = loginUser();

// console.log(result);


/////////////////////////////////////////////
// switch 문
// - 하나 이상의 case 문으로 구성
// - default가 필수는 아니지만 사용하길 권장 - if문의 else같은 존재(예외처리)
// ㄴ switch 문 내의 모든 case가 매칭되지 않을 때 실행
// - 여러개의 case문을 묶을 수도 있다
// - break;
// ㄴ 조건을 빠져나갈 때 사용하는 키워드

let a = 4;

switch(a){
    case 1 : 
    case 2 : 
    case 3 : console.log("a는 3");
    break;
    case 4 : console.log("a는 4");
    break;
    case 5 : console.log("a는 5");
    break;
    default : console.log("a가 뭔값인지 모르겟슈");
    break;
}

// 실습문제
// Q) 학점 계산기
// 조건) 1. 0~100외의 숫자는 들어오지 않음 2. A~F
// number 자료형 / parseInt(), 10 

//let score = Number(prompt("점수를 입력하세요"))
let score = 66

switch(true) {
    case (score <= 100 && score >= 90) : console.log("A")
    break;
    case (score < 90 && score >= 80) : console.log("B")
    break;
    case (score < 80 && score >= 70) : console.log("C")
    break;
    case (score < 70 && score >= 60) : console.log("D")
    break;
    default : console.log("F")
    break;
} // 내꺼

let score2 = 96

switch (parseInt(score2/10)) {
    case 10:
    case 9: console.log("A")  
    break;
    case 8: console.log("B")  
    break;
    case 7: console.log("C")  
    break;
    case 6: console.log("D")  
    break;
    default: console.log("F")
        break;
} // 강사님꺼
// parseInt 를 써서 더 간단하게 하는 방법이 있군..
// 정수를 반올림 하는 방법
// parseInt(x/10) 를 쓰거나 Math.floor(x/10)을 쓰거나
let pI10 = parseInt(89/10)
let mR = Math.round(89/10)
// parseInt는 뒤의 소수점을 없애는거라서 어떻게 보면 내림이랑 비슷한듯?


console.log(pI10, mR)



// 삼항연산자
// 조건식?A:B;
// 조건식이 참이면 A 거짓이면 B

let num = 5;

num % 2 === 1 ? console.log("ㅇㅇ"): console.log("ㄴㄴ")

// new Date()
// 내장 함수 - 현재 날짜와 시간을 나타내는 객체
// 개발자가 별도로 정의하지 않아도 사용 가능
// 전역 객체에 속해 있어 어디서든 접근 가능하고 바로 사용 가능

let now = new Date()
let nowHours = now.getHours()

nowHours < 12 ? console.log("오전") : console.log("오후")






