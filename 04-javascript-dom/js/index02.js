// js 표준 내장 객체
// 기본적으로 미리 정의된 객체
// 모든 JS 환경에서 사용할 수 있는 내장 객체
// 자주 사용되는 기능을 미리 구현한 것

// #01. Date 객체 : 시간, 날짜
let now = new Date();
console.log(now); // 요일 월 날짜 년도 시간 표준시 순으로 출력

// 참고) 타임스탬프(timestamp)
// 1970년 1월 1일을 기준으로 흘러간 밀리초(ms) 를 나타내는 함수
// "에포크" 이후의 시간 "애포크" -> 특정 시간의 기준점
// 기준의 된 이유 : 
// 1. 유닉스 os에서 타임스탬프를 측정하는데 사용된 날짜 초기 컴퓨터 시간을 나타냄
// 2. 기술적인 편의성 - 시간을 숫자로 표현하는 방법, 수학적으로 편리한 계산 가능하게 함

// new Date(timestamp)
let jan_01_1970 = new Date(0)
console.log(jan_01_1970); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)
let jan_02_1970 = new Date(24 * 3600 * 1000)
console.log(jan_02_1970); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)

// new Date(date_string)
let date = new Date('2024-06-03')
console.log(date); // Mon Jun 03 2024 09:00:00 GMT+0900 (한국 표준시) 
let date2 = new Date('2024', '06', '03') // Month 는 0을 1월부터 계산
console.log(date2); // Wed Jul 03 2024 00:00:00 GMT+0900 (한국 표준시)

// 관련 메서드 
// 객체 점 접근법
// getFullYear() : 몇년인지 반환
// getDate() : 월의 몇번째 날인지 반환
// getDay() : 주의 몇번째 날인지 반환(0부터 시작/일요일부터 0)
// getMonth() : 몇번째 달인지 반환(0부터 시작)
// getHours() : 시간 반환(0 ~ 23)
// getMinutes() : 분 반환(0 ~ 59)
// getSeconds() : 초 반환(0 ~ 59)
// getMilliseconds() : 밀로초 반환(0 ~ 999)
// getTimes() : 1970년 1월 1일 부터 현재까지의 밀리초 단위의 시간 반환

console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 5 -> 0부터 시작하기 때문에 현재 월을 표현하고 싶으면 +1 해줘야함
console.log(now.getDate()); // 3
console.log(now.getDay()); // 1 -> 0은 일요일이다. 
console.log(now.getHours()); // 
console.log(now.getMinutes());
console.log(now.getSeconds());

// #02. Math 객체
// 수학적인 상수와 함수

// 속성
console.log(Math.E);// 자연로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근

// 메서드
console.log(Math.min(100, -2, 0, 5)); // 가장 작은 숫자 구하기
console.log(Math.max(100, -2, 0, 5)); // 가장 큰 숫자 구하기
console.log(Math.round(5.3122)); // 반올림
console.log(Math.ceil(5.3122)); // 올림
console.log(Math.floor(5.3122)); // 내림
console.log(Math.random()); // 랜덤값 출력(0이상 1미만 범위의 난수)

// Math.random() 응용
// 0 ~ 9 사이의 난수
console.log(Math.floor(Math.random() * 10));
// 0 ~ 10 사이의 난수
console.log(Math.floor(Math.random() * 11));

// 실습
// 1 ~ 100 사이의 난수
console.log(Math.ceil(Math.random() * 100));
console.log(Math.floor(Math.random() * 100) + 1);
// 20 ~ 22 사이의 난수
console.log(Math.floor(Math.random() * 3) + 20)

console.log((Math.ceil(0.00000001)));