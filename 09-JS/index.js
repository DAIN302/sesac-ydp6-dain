// 구조분해 할당

/*
// 배열의 구조분해
const arr1 = [1,2,3,4,5]
const arr2 = ['a','b','c']

// 배열값을 변수에 순서대로 할당
const [one, two, abc, four, five] =  arr1; 
const one = arr1[0] 이런거랑 같은 의미
console.log(one, two, abc, four, five); // 1 2 3 4 5
console.log(one);

const [x,y,z,alpha] = arr2;
console.log(x,y,z,alpha); // a b c undefined
// 값이 3개인데 4개로 변수가 지정되서 순서대로 할당되다보니 마지막 것은 undefined가 됨
*/

/*
// 변수값의 교환, 2개의 변수값을 교환할 때는 반드시 제 3의 변수를 사용했어야했음
let num1 = 1;
let num2 = 2;
console.log('교환 전',num1, num2);
// 지금은 새로운 문법이 나와서 그럴 필요가 없다
// [변수1, 변수2] = [교환할 변수2, 교환할 변수1]
[num2, num1] = [num1, num2]
console.log('교환 후',num1, num2);
*/

/*
const lists = ['apple', 'grape']
// 값이 없으면 undefined가 뜨는데 세번째꺼만 따로 지정하고 싶으면 내부에서 디폴트 값 할당 가능
const [f1, f2, f3='orange'] = lists;
console.log(f1,f2,f3);
*/

/*
// 객체, object : key & value {key : value}
const obj = {
    title : '엘리먼트',
    content : 'fun',
    num : 5
}
*/
/*
// object.key -> .표기법
console.log(obj.title);
console.log(obj.content);
console.log(obj.num);

// object['key']
console.log(obj['title']);
console.log(obj['content']);
console.log(obj['num']);
*/
/*
// 객체 구조 분해, 디폴트값 지정 가능
const {num, title, content, star=1000} = obj 
console.log(num, title, content, star);

const {a1, b1, c1} = obj; 
console.log(a1,b1,c1); // undefined 출력 해당 key를 가지고 있지 않기 때문에 가지고 있는 key 명을 사용해야함
*/


// undefined : 변수는 선언되었지만(초기화), 값이 할당이 안됨

const lectureInfo = {
    name : 'Coding on',
    part : 'web',
    leader : 'Kim',
}
// console.log(lectureInfo);

function getInfo(lecture) {
    // 객체 구조 분해
    const {name, part, leader} = lecture;
    const output = `${name}강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`
    return output
}

const result = getInfo(lectureInfo);
console.log(result);

