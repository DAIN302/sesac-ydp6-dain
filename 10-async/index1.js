// #1. setTimeout(code, delay)
// delay(단위 : ms) 시간동안 기다리다가 code 함수를 실행

// 실행결과 : 1->3->2
// => js에서는 setTimeout 함수를 사용했을 때, 이것이 실행 완료될 때까지 기다리지 않고
// 바로 다음 구문을 실행
/*
console.log(1);
setTimeout(() => {
   console.log(2); 
}, 2000);
console.log(3);
*/


// ##############################
// #2. 비동기처리
// ex. 편의점에 들어가서 음료수를 사고 나오는 상황
/*
let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민');
}

function pickDrink() {
    // setTimeout을 이용해 3초를 기다린 후 코드 실행
    setTimeout(() => {
        console.log('고민 끝');
        product = 'zero coke'
        price = '3000'
    }, 3000);
}

function pay(product, price) {
    console.log(`상품명 : ${product} / 가격 : ${price}`);
}

goMart();
pickDrink(); 
pay(product, price); // 상품명 : undefined / 가격 : undefined
// setTimeout 을 써서 3초후에 값이 할당이 되므로 undefined 뜨는것
*/

// 1. product, price 전역 변수 확인
// 2. goMart(), pickDrink(), pay() 함수 정의부
// 3. goMart() 함수 실행 : 콘솔 로그
// 4. pickDrink() 함수 실행 -> setTimeout 함수에 의해 3초 대기 / 비동기처리이므로 코드가 끝날때까지 기다리지 않고 다음 함수 실행
// 5. pay() 함수 실행  -> undefined 출력
// -> 3초가 지난 후 setTimeout의 첫번째 인자인 함수 실행 고민 끝 문장 출력
// -> product, price 변수에 값이 할당
// 그렇다면 pickDrink 내부에 setTimeout을 쓰지 않고 함수를 불러올때 setTimeout을 써도 결과가 똑같을까?
// -> setTimeout(pickDrink, 3000) : 결과 똑같음

// ###################################
// #3. 콜백함수(callback)로 문제 해결
// 콜백함수? 
// 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// JS에서 어떤 함수의 매개변수로 쓰일 수 있음

// 목표 : 콘솔로그 하나 찍고, 3초 뒤에 "고민끝"이랑 삼품명, 가격이 올바르게 출력

let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민');
}

function pickDrink(callback) {
    // callback 매개변수 : 콜백함수 들어올 예정
    // setTimeout을 이용해 3초를 기다린 후 코드 실행
    setTimeout(() => {
        console.log('고민 끝');
        product = 'zero coke'
        price = '1000'
        // 매개변수로 받은 콜백 함수 실행
        callback(product, price) // pay 함수가 2개의 매개변수를 받기 때문에 2개의 매개변수를 써줌
    }, 3000);
}

function pay(product, price) {
    console.log(`상품명 : ${product} / 가격 : ${price}`);
}

goMart();
pickDrink(pay); 


