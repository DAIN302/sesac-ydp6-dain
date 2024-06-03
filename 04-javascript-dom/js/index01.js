// 변수 or (함수 매개변수)가 전달될 때,
// 값 또는 참조가 어떻게 전달되는지 확인

// #1. pass by value(값에 의한 전달)
// 원시타입(primitive type)은 값(value)이 복사되어 전달
let num = 1;
let num2 = num;
//console.log(num, num2); // 1 1
//console.log(num === num2); // true

num = 5;
//console.log(num, num2); // 5 1
//console.log(num === num2); // false

function changeValue(x) {
    x = 10;
    console.log(x); // 10
}

changeValue(num)
//console.log(num); // 5

// 함수로 전달될 때, 변수의 값이 복사되어 함수의 매개변수로 전달됨
// 따라서 함수 내에서 매개변수의 값을 변경하더라도 원본 변수의 값은 변하지 않음
// 함수 내에서 사용되는 변수는 함수 내에서만 유효한 지역 변수이기 때문이다.
// x가 num의 값의 복사본을 가지고 있기 때문이다.

// #2. pass by reference (참조에 의한 전달)
// 객체나 배열같은 참조파일이 전달될 때 사용됨
// 변수의 메모리 위치(참조)가 전달되므로, 함수 내에서 요소를 변경하면 원래 변수도 변경됨
const obj = {one : 1, two : 2};
const obj2 = obj;
console.log(obj, obj2);
console.log(obj === obj2); // true

obj.five = 5; // key 값 추가
console.log(obj, obj2); // 원본 객체뿐 아니라 복사본 객체에도 key값이 추가됨 -> 참조값 전달에 의해서
console.log(obj === obj2); // true

// obj와 obj2는 현재 데이터도 같고 참조값(address, 주소)도 같다
///////////////////////////////////////////////////////
const obj3 = {one : 1, two : 2};
const obj4 = {one : 1, two : 2};
console.log(obj3, obj4);
console.log(obj3 === obj4); // false -> obj3, obj4는 데이터는 같지만 서로 다른 별도의 객체 즉, 참조값(address, 주소)가 다름
obj3.five = 5;
console.log(obj3, obj4);
console.log(obj3 === obj4);




