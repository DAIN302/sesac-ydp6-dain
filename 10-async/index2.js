// Promise (프로미스) 객체
// 비동기 처리를 위한 첫번째 방법이 콜백함수인데, 콜백지옥이라는 치명적인 단점이 있음
// 이 단점을 해결하기 위해 ES6 부터 등장한 문법
// 미래에 성공/실패에 대한 결과값을 "약속"한다는 의미
// 어떤 작업에 대해 성공, 실패를 분리해서 반환
// -> 성공 then, 실패 catch 메서드로 이어서 받음
// => 성공이든 실패든 무언가의 최종 결과를 보여줌
// resolved(성공), rejected(실패)

/*
// 1. promise 를 생성하는 코드 -> 제작 코드(Producing code)
function promise1(flag) { // flag -> 분기처리를 해야할 때 많이 쓰는 변수명
    // 프로미스 객체를 반환하는 함수
    // - new 연산자를 이용해서 프로미스 객체를 만들고 바로 반환
    // 실행함수(excutor)가 두개의 콜백함수를 받는 것(resolve, reject)
    return new Promise((resolve, reject)=>{
        if(flag){
            // 성공함수
            resolve(`프로미스 이행(fullfilled)상태 성공, ${flag}`)
        } else {
            // 실패함수
            reject(`프로미스 거절(rejected)상태 실패, ${flag}`)
        }
    })
}
// 2. promise 를 소비하는 코드 -> 소비 코드(Consuming code)
promise1(5 > 3)
.then(result=>console.log(result)) // 성공 시, resolve를 받음
.catch(error=>console.log(error))// 실패 시, reject를 받음
*/

// ##############################################################
// index1.js 에서 콜백함수를 사용해서 작성한 코드를 promise를 이용해 바꿔보기
/*
let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민');
}

function pickDrink() {
    // 프로미스 제작 코드
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('고민 끝');
            product = 'zero coke'
            price = '10000'
            // 가격이 3000보다 낮으면 성공함수, 높으면 실패함수 불러옴
            if(price <= 3000){
                // 성공함수 불러오기
                resolve()
            } else {
                // 실패함수 불러오기
                reject()
            }     
        }, 3000);
    })
}

function pay() {
    console.log(`상품명 : ${product} / 가격 : ${price}`);
}

function nopay(){
    console.log(`돈 없어서 못사유 ㅠ`);
}
*/
/*
goMart();
// 프로미스 소비 코드
pickDrink().then(pay) // 성공하면(true) pay 함수 실행해줘
.catch(nopay) // 실패하면(false) nopay 함수 실행해줘
*/


// ##############################################################
// 프로미스 체이닝(Promise Chaining)
// 목표 : 함수를 이용해서 (4+3)*2-1 연산

// 콜백함수를 이용해서 연산하기 (토나올 것 같은 콜백지옥 체험판)
// sub(mul(add(4,3),2),1): 실행순서 add -> mul -> sub

/*
function add(n1, n2, callback) {
    setTimeout(() => {
       const result = n1 + n2
       callback(result) 
    }, 1000);
}

function mul(n, callback) {
    setTimeout(() => {
        const result = n * 2
        callback(result)
    }, 700);
}

function sub(n, callback) {
    setTimeout(() => {
        const result = n - 1;
        callback(result)
    }, 500);
}

add(4,3, (x)=>{
    console.log(x) // 예상값 7
    mul(x, (y)=>{
        console.log(y) // 예상값 14
        sub(y, (z)=>{
            console.log(z); // 예상값 13
        })
    })
})
*/
// 프로미스 체이닝 이용해서 연산
// 프로미스 제작코드
function add(n1, n2) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           const result = n1 + n2
           resolve(result)
        }, 1000);
    })
}

function mul(n) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           const result = n * 2
           resolve(result)
           // reject(new Error('의도적으로 발생시킨 에러다'))
        }, 700);
    })
}

function sub(n) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const result = n - 1;
            resolve(result)
            // reject(new Error('의도적으로 발생시킨 에러다'))
        }, 500);
    })
}

// 프로미스 소비코드
add(4,3).then(res=>{
    console.log(res) // 7
    return mul(res)}) // return mul(7)
.then(res=>{
    console.log(res) // 14
    return sub(res)}) // return sub(14)
.then(res=>console.log(res)) // 13
.catch(err=>console.log(err)) // Error: 의도적으로 발생시킨 에러다