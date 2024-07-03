// 빈 객체 생성
const nickObjs = {}
console.log(nickObjs);

// ID속성을 가진 객체로 생성
const socket = {id:"aslkdasjlkdnsalkcnkla"}
// console.log(socket);

// js에서 obj에 key와 value 추가하는 방법
// 1. '.'연산자를 사용한 속성 추가
nickObjs.hello = 'ㅎㅇㅎㅇ'
nickObjs.hi = 'ㅎㅇㅎㅇ22'
console.log(nickObjs);

// 2. []을 이용한 속성 추가
nickObjs['apple'] = '사과'
console.log(nickObjs);

// 3. 변수를 이용한 속성 추가
nickObjs[socket.id] = 'haha'
console.log(nickObjs);

// js에 obj에 특정키가 존재하는지 검사
const nickObjs2 = {hello : 'hi', apple : '사과'}
const nick1 = 'hi'
const nick2 = '사과'
const nick3 = '오렌지'

console.log(nickObjs2);

// Object.values() -> object에서 value만 뽑아서 배열로 만들어줌
console.log(Object.values(nickObjs2));
console.log(Object.values(nickObjs2).indexOf(nick1)); // 0
console.log(Object.values(nickObjs2).indexOf(nick2)); // 1
console.log(Object.values(nickObjs2).indexOf(nick3)); // -1 -> 없어서 -1 값 반환

// for in 반복문 
for(let key in nickObjs2){
    console.log(key, nickObjs2[key]);
}

// object 요소 삭제
console.log('삭제 전', nickObjs2);
delete nickObjs2['hello']
console.log('삭제 후', nickObjs2);