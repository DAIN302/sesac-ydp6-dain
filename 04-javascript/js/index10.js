// 배열에서 반복문 사용하기
// for 문
// for of 문
// forEach() 메서드

// 배열에서 for문 사용 이유
const fruits = ["사과","딸기","포도","배"]
// 배열의 수가 많아지면 일일히 치기 번거롭고 귀찮고 비효율적이니까 작업량을 줄이려고

for(let i =0; i < fruits.length; i++){
    // console.log(fruits[i]);
}
////////////////////////////////////////
const arr = [1,2,5,6]
const alphabets = ['a','b','c', 'd']



// #1. for 문
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    
}

// #2. for of 문
// 이 반복은 배열의 요소를 직접 참조하므로 인덱스를 사용할 필요가 없음
// 순서가 있는 구조 반복에 적합
// 배열의 각 요소를 반복하면서 alpha 변수에 순서대로 할당됨
// let num = 0;
for (let alpha of alphabets) {
    console.log(alpha);
    // num++;
}

//#3. forEach() 메서드
// 배열의 각 요소에 대해 지정됨 함수 실행
// 일반적으로 배열을 순회하면서 각 요소에 대해 동일한 작업을 수행할 때 사용
// 각 요소에 대해 함수가 호출될 때마다 해당 요소가 함수에 인자로 전달됨
alphabets.forEach(function (alpha) {
    // alpha : currentValue를 의미, 반복하고 있는 현재 요소
    console.log(alpha);
})

alphabets.forEach((alpha, idx) => {
    // idx : currentValue의 인덱스(위치)
    console.log(alpha, idx);
})

alphabets.forEach((alpha, idx, arr) => {
    // arr : forEach를 호출한 배열
    console.log(alpha, idx, arr);
})

// map, filter, find 메서드
// 조건에 따라 요소를 변형하거나 선택
// #1 map()
// 배열의 각 요소에 대해 지정된 함수를 호출하고, 그 결과를 반영한 새로운 배열 생성
// 한마디로 배열을 이용해서 새로운 배열을 만드는 것!
const numbers = [1,2,3,4,5]
const doubleNumbers = numbers.map(function(num){
    return num * 2;
})

console.log(doubleNumbers);
console.log(numbers);

//#2 filter()
// 배열의 각 요소에 대해 지정된 함수를 호출하고, 그 결과가 true 인 요소들로 이루어진 새로운 배열 생성
const pracNumbers = numbers.filter((num)=>{
    return num % 2 === 0;
})

const pracNumbers2 = numbers.filter(num=>num%3===0)

console.log(pracNumbers); // ['2','4'] 반환
console.log(pracNumbers2);

// #3 find()
// 조건을 만족하는 첫 번째 요소 찾기
// 조건 만족 -> 해당 요소 반환
// 조건 불만족 -> undefined 반환

const pracNumbers3 = numbers.find(num=>num %2 === 0)
console.log(pracNumbers3); // 2 반환
console.log(typeof pracNumbers3); 
console.log(typeof pracNumbers2); 


/////////////////////////////////////////
// 옵션) for in 문
// 객체의 key 를 반복할 수 있는 구문
const obj = {
    name : "마루",
    gender : "f",
    info : "강쥐"
}

for (const key in obj) {
    console.log(key, obj[key]); // 객체의 각 속성에 대해 실행할 코드
    // key : key
    // value : obj[key]
}

// 참고
// 변수 : key - 각 속성의 키를 저장하는 변수
// 객체 : obj - 각 속성을 반복할 객체




