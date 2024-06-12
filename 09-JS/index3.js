// && || -> 논리 연산자 -> 값을 비교하여 true, false를 반환
const x = 5;
const y = 7;
const result = x || 100;
// console.log(result);

const result3 = x < y && 'aaaaaa'
// console.log(result3);

// falsy: false로 판명되는 애들 -> undefined, null, 0, false, NaN, ''

// let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
// let cColor = userColor ? 'red' : defaultColor;
// console.log(cColor);