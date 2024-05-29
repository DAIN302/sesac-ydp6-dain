// 연산자 
// 대잆연산자(=)
// 변수에 값을 할당할 때 사용

// 산술연산자
// 사칙연산 : +,-,*,/
// 나머지연산 : %
// 거듭제곡 연산 : **

let a = 5;
let b = 2;

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
console.log(a**b);

// 비교연산자
// #1. 동등비교
// 같다(동등) : ==, ===
// 같지 않다(부등) : !=. !==
// ==, != : 값만 비교(타입은 비교하지 않음)
// ===, !== : 값과 타입을 모두 비교

console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 2); // true
console.log(1 != 1); // false
console.log(1 != "1"); // false
console.log(1 !== "1"); // true
console.log(1 == "1"); // true
console.log(1 === "1"); // false
console.log("---------------------");

// #2. 크기비교
console.log(2 > 1);
console.log(2 >= 2);
console.log(2 < 1);
console.log(2 <= 2);

// 동등연산자 (==)
// 타입을 비교하지 않아서 예기치 못한 결과를 야기할 수 있으므로 자제하는게 좋다
console.log(1=='1');
console.log('0'==false);
console.log(''==0);
console.log(null==undefined);

// 논리연산자
// !:not(참->거짓, 거짓->참)
// &&: and(모두 참이어야 참)
// || : or(하나 중 참이어도 참)

// 문자열에서 + 연산 : 문자열 더하기
console.log("안녕"+"하세요")
// 더하기 이외의 연산은 숫자로 자동 형변환 되어서 계산됨
console.log('5' + '2');
console.log('5' - '2');
console.log('5' * '2');
console.log('5' / '2');
console.log('5' % '2');

// 증감연산자
// ++ : 변수값 1 증가
// -- : 변수값 1 감소
// 증감연산자를 붙이는 위치에 따라 결과가 다름
let result1, result2;
let num = 0, num2 = 10;

// 후위 연산자(postfix operator)
// 변수에 먼저 대입한 후에 +1(-1) 연산 수행
result1 =  num++;

console.log(result1) //0
console.log(num)// 1
// 증감을 해서 대입은 되었는데 변수에 대입이 된거

// 전위 연산자(prefix operator)
// +1(-1) 연산을 먼저 수행하고 변수에 대입
result2 = ++num2;

console.log(result2); //11
console.log(num2);//11

// 연산자 줄여쓰기
// +=, -= 연산자를 자주 쓴다(코드가 짧아져서)
