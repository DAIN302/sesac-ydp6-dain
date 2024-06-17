// let product, price;

// function goMart() {
//   console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
// }

// function pickDrink() {
//   setTimeout(function () {
//     console.log(`고민 끝`);
//     product = `제로콜라`;
//     price = `3000원`;
//   }, 3000);
// }

// function pay(product, price) {
//   setTimeout(function () {
//     console.log(`상품명: ${product} // 가격: ${price}`);
//   }, 5000);
// }

// goMart();
// pickDrink();
// pay(product, price);



/*
마트에 가서 어떤 음료를 살지 고민한다..
고민 끝
상품명: undefined // 가격: undefined
// 1. undefined 출력되는 원인
pickDrink 함수와 pay 함수가 setTimeout 으로 인해 비동기 처리 방식으로 동작하기 때문이다.
pickDrink 함수 실행을 3초 대기함과 동시에 pay 함수가 실행을 5초 대기하면서
pickDrink에서 할당된 값이 pay 파라미터로 전달되지 않았기 때문이다.
 
*/

let product, price;

function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink() {
    return new Promise((res, rej)=>{
        setTimeout(function () {
          console.log(`고민 끝`);
          product = `제로콜라`;
          price = `3000원`;
          res()
        }, 3000);
    })
}

function pay(product, price) {
    return new Promise((res, rej)=>{
        setTimeout(function () {
          console.log(`상품명: ${product} // 가격: ${price}`);
          res()
        }, 5000);
    })
}

async function exec(){
    try {
        goMart();
        await pickDrink();
        await pay(product, price);
    } catch(err){
        console.error(err);
    }
}

exec()