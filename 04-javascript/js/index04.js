// 자료형(data types)
// 데이터의 종류
// - primitive(원시 타입) : string, number, boolean, undefined, null 등등
// - object(객체 타입) : primitive이 아닌 나머지

// 1. string (문자형)
// 텍스트 정보, 따옴표로 감싸야함 "hello"
// 숫자나 특수문자도 따옴표 안에 포함되어 있으면 문자형

let text = "ㅎㅇㅎㅇ"
let text2 = "ㅎㅇ"
let gender = "female"

// console.log(text)
// console.log(text2)
// console.log(gender)
// console.log(text + text2)

// 문자 + 변수를 동시에 쓰고 싶을 때
// console.log("안녕"+text+"my gender is " +gender) // 문자열 연결
// console.log("안녕", text2, '우앵')

// ES6 버전에서 백틱(`)  와 달러($), 중괄호({}) 조합으로 사용 -> 템플릿 리터럴 : 문자를 표현하는 새로운 문법
// 문자열 내에서 변수와 상수를 간결히 표현
// console.log(`${text} 반갑다 나는 ${gender}이다`)

// 2. Number(숫자형)
// 정수, 실수
// 연산 가능(사칙연산 가능)
let num = 100;
let num2 = 0.12;

// console.log(num, num2)
// console.log(num + num2)
// console.log(num - num2)
// console.log(num * num2)
// console.log(num / num2)

let stNum = "200"

// 자바스크립트 언어가 유연하다고 하는이유 나는 stNum을 문자열로 해줬는데 사칙연산이 먹힌다?!(플러스 빼고) -> 예기치 못한 오류 발생할 수 있음
// console.log(num + stNum)
// console.log(num - stNum)
// console.log(num * stNum)
// console.log(num / stNum)


// 3. boolean(불리언)
// true, false (참, 거짓) 두 가지 값만 가지는 데이터
let isWater = true;
let haveMoney = false;
// console.log(isWater, haveMoney)

// 4. null (빈 값)
// "값이 없음"을 의도적으로 명시
let temp = null;
// console.log(temp)
temp = "hello"
// console.log(temp)

// 5. undefined 
// 값도 없고, 타입도 지정되지 않은 상태(값이 할당되지 않은 상태)

// null 과 undefined 차이
// null 은 내가 의도적으로 얘는 값이 없어! 라고 명시해준것이고
// undefined 는 어?? 얘 아직 값 할당 안된거 같은데! 이런거

let x;
// console.log(x)
// 변수 선언만 했을 때 초기 값으로 undefined 할당

// 5. Array(배열)
// 배열 요소(아이템) : 배열 안에 있는 데이터 하나하나
// 배열 위치(인덱스) : 0부터 시작 - zero based numbering
// 배열 길이(크기) : 요소의 개수와 동일
let fruits = ['apple', 'banana','cherry','dragonfruit' ]
// console.log(fruits)
// console.log(fruits[0])
// fruits 배열에서 위치가 0인 요소 출력
// console.log(fruits.length)
// fruits 배열의 길이 출력
// console.log(typeof(fruits))

// js 에서는 배열 요소의 자료형이 달라도 됨 -> js의 동적 타입 특성으로 인한 유연성

let mixedArr = ['dada', 1, null, undefined, true, {name : 'adad'}]
// console.log(mixedArr)

// 배열 중첩 가능 -> 배열 안에 배열 들어갈 수 있음 => 2차원 배열
let korean = [
    ['가','나','다'],
    ['라','마','바'],
    ['사','아','자'],
    ['차','카','타']
]

// console.log(korean)
// console.log(korean[1])
// console.log(korean[0][1])
// console.log(korean[3][2])

// '가자 '글씨 출력
// console.log(korean[0][0]+korean[2][2])
// '사다' 글씨 출력
// console.log(korean[2][0]+korean[0][2])

// 3차원 배열에서 숫자 출력
const nums =[
    [
        [1,2,3],
        [4,5,6],
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
]

// console.log(nums[1][0][1])

// 6. Object(객체) (key : value)
// 프로그래밍에서 실제 존재하는 개체나 개념을 표현하는 데이터 구조
// 속성과 메서드로 구성
// 속성 : key 와 value의 쌍으로 이루어져 있음 - 상태나 특징
// 메서드 : 함수(funtion)을 값으로 가짐 - 동작이나 행위
let cat = {
    name : '장화', // key - name, value - "장화"
    age : 10,
    isCute : true,
    mew : function(){
        return '냐옹';
    }
}

// console.log(cat) // 객체 자체를 출력
// 객체의 속성에 접근하는 방법
// #1. 점표기법(.) -> 객체명.키
// console.log(cat.name)
// console.log(cat.age)
// console.log(cat.isCute)
// console.log(cat.mew)

// #2. 대괄호 표기법([]) -> 객체명['키']
// console.log(cat['name'])

// #3. key 가 변수에 저장되어 있을 때 사용법 -> 객체명[변수명]
const temVal = 'name';
// console.log(cat[temVal]) // = cat['name']이랑 동일


// 객체의 메서드에 접근하는 방법
//console.log(cat.mew()) // 객체의 메서드인 mew() 출력


// 7. typeof : 자료형을 확인할 수 있는 키워드
// typeof(x) 형식 (x안에는 변수나 자료형을 넣으면 됨)
// typeof X 형식 (x안에는 변수나 자료형을 넣으면 됨)
// 둘 다 해봤는데 됐음
console.log(typeof nums); // 객체는 object로 나옴
console.log(typeof null); // type 이 object 나온건 공식에서 인정한 오류임~ 

// 8. 형변환

let mathScore = prompt('수학점수 입력');
let engScore = prompt('영어점수 입력');
// prompt 로 받은 데이터를 string으로 받는다.

mathScore = Number(mathScore)
engScore = Number(engScore)

let avgScore = (mathScore + engScore) / 2

console.log(`수학 점수는? ${mathScore}`);
console.log(`영어 점수는? ${engScore}`);
console.log(`평균 점수는? ${avgScore}`);

// #1. String() : 문자로 형변환
// number에서 string으로 변환 : String(), toString()
let str1 = true;
let str2 = 12;
let str3 = undefined;
console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(str3, typeof str3);

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
console.log(String(str3), typeof String(str3));

console.log(str1.toString(), typeof str1.toString());

// #2. Number() : 숫자로 형변환
// string에서 number로 형변환 : Number(), parseInt()
let n1 = true;
let n2 = false;
let n3 = "123.9";

console.log(n1, typeof n1);
console.log(Number(n1), typeof Number(n1)); // true -> 1로 출력
console.log(n2, typeof n2);
console.log(Number(n2), typeof Number(n2)); // false -> 0으로 출력
console.log(n3, typeof n3);
console.log(Number(n3), typeof Number(n3));

console.log(parseInt(n3, 10)); // n3의 값을 10진수의 정수(int)로 바꾸겠다. -> 소수점이 없어짐 123만 출력
console.log(parseFloat(n3)); // n3의 값을 실수로 바꾸겠다 -> 123.9 출력

console.log(Number(str3), typeof Number(str3)); // NaN 출력 -> NaN : Not a Number 숫자가 아님
console.log(Number(null), typeof Number(null)); // 0으로 출력









