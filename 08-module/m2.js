const add = (a,b) => {
    return a+b;
}

const subtract = (a,b) => {
    return a-b;
}

// 다수의 함수 exports 하기
module.exports = {
    // add:add,
    // subtract:subtract -> 이름이 같으면 생략 가능 (하나만 써도 된다)
    add, subtract
};