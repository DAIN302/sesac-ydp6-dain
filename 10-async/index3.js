// 비동기 처리의 3번째 방법
// Async/Await
// async는 함수가 Promise를 반환하도록 설정
// await는 함수가 Promise를 기다리게 설정
// async 키워드 : 함수 앞에 작성
// => async 를 붙이는 순간 해당 함수는 프로미스가 아닌 값을 반환하더라도 프로미스로 감싸서 반환

/*
async function f1(){
    return 1;
}

async function f2(){
    return Promise.resolve(2);
}

// 화살표 함수에도 async 키워드 사용 가능
const f3 = async () => {
    return 3
}

// console.log('f1()>> ', f1()); // Promise { 1 } -> 프로미스로 감싸서 반환
// console.log('f2()>> ', f2()); // Promise { <pending> }
// console.log('f3()>> ', f3()); // Promise { 3 }

// 값을 꺼낼때는 then() 쓰면 됨
f1().then(res=>console.log(res))
f2().then(res=>console.log(res))
f3().then(res=>console.log(res))
*/
///////////////////////////////////////////////////////////////////
// async/await
// await 기다리다
// 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
// await 뒤에는 promise가 오게됨
// async 키워드를 사용한 함수 안에서만 사용 가능
// -> await, async 둘이 세트!

function fetchFruits(){ // fetchXXX, getXXX 뭔가를 가지고 오는 함수
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           const fruits = ['🍎','🍊','🍋']
           resolve(fruits)
           // reject(new Error('error! 과일 없슈')) 
        }, 1000);
    })
}

// i) promise then()
/*
fetchFruits().then(f=>console.log(f)) // 과일 배열 반환
.catch(err=>console.log(err))
*/

// ii)async/await
// async/await 에서는 예외처리를 try...catch 구문으로 하게 됨
// try 성공 / catch 실패
// catch 에서 에러를 잡아서(catch) 실행
/*
async function printItems(){
    const fruits = await fetchFruits(); // await -> 실행 다 되기까지 기다릴겡~  셋타임아웃 그거 다 될때까지 기다려줌 ㅇㅇ
    // await 키워드 쓰지 않을 경우  Promise { <pending> } 출력
    try{
        console.log(fruits); // 과일 배열 반환
    }catch(err){
        console.log(err); // Error: error! 과일 없슈
    }
}

printItems()

*/

// index2.js 에 있는 마트에 가서 뭐 살래 이 코드 async/await 로 바꿔서 작성
let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민');
}

function pickDrink() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('고민 끝');
            product = 'zero coke'
            price = '1000'
            if(price <= 3000) {
                resolve()
            } else {
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

async function exec(){
    try { // 성공 시
        // 장점) 함수의 실행 순서가 명확히 보임
        goMart();
        await pickDrink(); // 시간이 걸리는 printDrink() 함수의 작업을 await 키워드로 인해 기다려줌
        // pickDrink() // 상품명 : undefined / 가격 : undefined
        pay()
    } catch(err){ // 실패 시
        nopay()
    } 
}

exec()

