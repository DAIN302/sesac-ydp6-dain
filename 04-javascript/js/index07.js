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
function loginUser() {
    let inputId = prompt('아이디 입력');
    
    // userId, inputId 같으면 -> userPw, inputPW 비교
    // inputId 입력안됨 -> '아이디 입력 안함' 문구 반환
    // inputId 틀리면 -> '아이디 틀림' 문구 반환
    if(userId === inputId) {
        let inputPw = prompt('비번 입력') 
        if(userPw === inputPw) {
            return '로그인 성공'
        } else {
            return '비밀번호 틀림'
        }
    } else if(inputId === '') {
        return '아이디 입력 안함'
    } else {
        return '아이디 틀림'
    }
}

const result = loginUser();

console.log(result);



