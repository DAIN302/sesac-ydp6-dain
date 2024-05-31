// 실습문제 1
// 1 ~ 100까지의 배열 for문으로 만들기
let arr =[];
for(let i = 1; i <=100;i++) {
    arr.push(i)
}
// 배열의 합 구하기
let sumFor = 0;
let sumForEach = 0;

// for 문으로 구하기
for(let i = 0; i <= arr.length;i++){
    sumFor += i
}

//console.log("for문",sumFor)

// for of 문으로 구하기
let sumForOf = 0;
for(let x of arr){
    sumForOf += x
}
//console.log("for of문",sumForOf);

// forEach로 구하기
arr.forEach(val => sumForEach += val)
//console.log("forEach",sumForEach);

// 실습문제 2
let fruits1 = ["사과","딸기","파인애플","수박","참외","오렌지","자두","망고"]
let fruits2 = ["수박","사과","참외","오렌지","파인애플","망고"]

let same = fruits1.filter((fruit)=>fruits2.includes(fruit))
let diff = fruits1.filter((fruit)=>!fruits2.includes(fruit))

// console.log(same);
// console.log(diff);

// 실습문제3
const today = new Date()
let week = today.getDay()
let whatDay;
week === 0 || week === 6 ? whatDay = "주말" : whatDay = "평일";

console.log(whatDay);

// 실습문제4
let randomNum = Math.floor(Math.random()*11)
console.log(randomNum);
