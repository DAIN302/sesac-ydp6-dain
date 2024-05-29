// 함수
// 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합

// 용어 정리
// - 함수 정의(선언) : 함수를 생성
// - 함수 호출 : 함수를 사용

// 함수 선언 방식
// #1. 명시적 함수 선언(함수선언문)
// - 함수 이름과 매개 변수를 명시하고 함수의 본문을 중괄호로 감싼다.
// - 스크립트 어디에서든 호출 가능(호이스팅)
// - "function"이라는 키워드를 사용하여 함수를 선언하는 방식

helloWorld(); // 명시적 함수는 호이스팅이 되어서 함수를 선언하기 전에 불러도 호출이 됨
console.log(helloWorld2())

function helloWorld(){
    // return 키워드 생략 가능
    // 특정 값이 도출되어야 할때는 리턴이 필요함
    console.log('hello world');
}

// 함수 호출
helloWorld();


function helloWorld2(){
    return "hello world hihi"
}
// return (반환값)
// 함수 내부 코드의 "최종 결과값"
// 최종 결과값을 저장하고 보관하기 위한 키워드
// return 키워드를 만나면 함수 실행 중단됨(return 다음에 코드 더 작성하는 것이 의미가 없다고 느끼기 때문) 

console.log(helloWorld2())

// #2. 함수 표현식(Funtion Expression)
// 변수에 익명 함수를 할당(저장)하는 형태
// 변수가 선언된 이후에만 호출 가능

// * 익명함수 : 이름이 없는 함수
// -> 이름 지정 가능 : 이 경우 함수 이름은 내부에서만 사용 가능

// sayHello();선언 전에는 호출이 되지 않는다

const sayHello = function hello(){
    console.log("hello world 333");
}

sayHello();
// hello(); 블록 함수 안에서만 사용 가능하므로 밖에서는 정의되지 않다는 오류가 뜸

const helloWorld3 = function(){
    console.log("hello hihihihihi");
}

const helloWorld4 = function(){
    return "hello hihihihihi44";
}


helloWorld3();
console.log(helloWorld4())

const sayHello2 = () => {
    return "dgdgd"
};


console.log(sayHello2())


////////////////////////////////////
// 매개변수가 있는 함수?
// 매개변수 1개
function food(text) {
    return text + "먹고 싶어";
}

console.log(food("치킨"));
console.log(food("피자"));
console.log(food("찐빵"));
console.log(food("밀크티"));
console.log(food("아이스크림"));
console.log(food("마라탕탕후루후루"));

const pizza = "피자는 역시 하와이안 피자"
console.log(food(pizza))
// 매개변수는 어떤 데이터 타입이든 상관 없음

// 매개변수 두개
function music(name, title) {
    return `${name} - ${title}`
}

console.log(music('뉴진스','버블검'))
console.log(music('데이식스','예뻤어'))

function music2(name, title) {
    console.log(`${name} - ${title}`)
}

music2(`에스파`,`슈퍼노바`)

// #3. 화살표 함수(arrow function)
// 함수 표현식의 축약형, 간결하게 정의
// 단일 표현식의 경우에는 중괄호와 return 키워드 생략 가능
// 코드가 길어진다면(여러줄) 중괄호와 return 키워드 명시

// 축약형
const music3 = (name, title) => `${name} - ${title}`
const music4 = (name, title) => console.log(`${name} - ${title}`)

console.log(music3('아이유', 'love wins all'))
music4('아이브','해야')


// 일반형
const triangle = (base, height) => {
    const area =(base * height) / 2;
    return area;
}

console.log(triangle(4,6))

// 호이스팅 -> 함수, 변수
// JS에서 변수 및 함수 선언이 해당 범위의 맨 위로 끌어올려지는 현상
// "함수 선언문"이 호이스팅, "함수 표현식"은 호이스팅의 대상이 될 수 없음 -> 변수에 함수가 할당되기 때문에 그 이후에만 호출 가능