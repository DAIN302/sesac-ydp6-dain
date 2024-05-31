// 내장 메서드
// 프로그래밍 언어나 프레임워크에서 기본적으로 제공되는 메서드
// 따로 설치하거나 추가 설정할 필요가 없다

// 문자열 관련 내장 메서드
// 문자열을 다루는데 유용한 기능을 제공한다

let str = "Happy Birthday"
let str2 = "     Happy Birthday      "

// 문자열 인덱싱
console.log(str[0]) // H
console.log(str[0]+str[12]); // Ha
console.log(str[0]+str[1]+str[8]+str[11]); // Hard

// 문자열 길이를 구하는 length 는 메서드가 아닌 속성이다. ()가 안붙었지
// length 는 1부터 센다
console.log(str.length);

// 대소문자 변환
console.log(str.toUpperCase()); // 대문자로 변환
console.log(str.toLowerCase()); // 소문자로 변환

// 양끝 공백 제거
console.log(str.trim());
console.log(str2);
console.log(str2.trim());


// indexOf() 글자 위치 찾아줌
// 0부터 시작, 같은 문자열이 있으면 맨 처음 만나는 것의 위치 반환
console.log(str.indexOf('a')); // 맨 처음 만나는 a의 위치인 1 반환
console.log(str.indexOf('w')); // 존재하지 않는 문자에 대해 검색하면 -1 반환
console.log(str.indexOf()); // 매개변수에 아무 값이 들어가지 않으면 -1 반환

// slice() 문자열 자르기
// 음수값이 들어가면 뒤에서부터 순서를 센다.
console.log(str.slice(10));
console.log(str.slice(-1));
console.log(str.slice(-2)); // 뒤에서 2번째 글자부터 끝까지 나옴
console.log(str.slice(1, 5)); // 1부터 4까지 잘라서 추출

// replace() 문자열 바꾸기
console.log(str.replace('a','i')); // 처음 만나는 글자만 변경
console.log(str.replaceAll('a', 'v')); // 선택한 문자열 전부 변경

// split() 문자열 쪼개기(배열로 변환)
let str3 = "dinner"
console.log(str3.split('e')); // ['dinn', 'r'] 기준이 된 애를 제외하고 배열로 반환
console.log(str3.split('n')); // ['di','','er'] n이 두개가 있었는데 맨 처음 n을 기준으로 자르고 나머지 잘린 n은 공백이 되어 배열로 반환됨
let harry = "harry porter"
console.log(harry.split('r'));

// repeat() 문자열 반복 반환
console.log(str3.repeat(3));


/////////////////////////////
// 배열 내장 메서드
let arr = [1,2,3,4,5];
console.log(arr);
let arr2 = ["rabbit", "cat", "puppy", "panda","hamster"];

// 배열에 값을 추가하는 법
// #1 배열[인덱스번호] = 값; 으로 할당해서 하는 방법
arr[5] = 6
console.log(arr);
arr[8] = 9
console.log(arr);
console.log(arr[6]);

// #2 배열 내장 메서드 사용하는 방법
// push() : 맨 끝 요소 추가
arr.push(6);
console.log(arr);
arr.push(10);
console.log(arr);
// pop() : 맨 끝 요소 제거
arr.pop()
console.log(arr);
arr.pop()
console.log(arr);
// unshift() : 맨 앞에 요소 추가
arr2.unshift("snake")
console.log(arr2);
// shift() : 맨 앞에 요소 제거
arr2.shift()
console.log(arr2);

// 배열.length -> 배열 길이 반환

// includes(요소) : 요소가 있으면 참, 없으면 거짓 반환
console.log(arr2.includes("cat")); // true
console.log(arr2.includes("tiger")); // false

// reverse() 순서를 역순으로 변경
// console.log(arr.reverse());  // 원본 배열을 변경됨
// console.log(arr);

// join() join 안의 문자열 기준으로 병합 // 배열내의 요소를 문자열로 반환해줌
console.log(arr2);
console.log(arr2.join(''));
console.log(arr2.join('-'));

// 메서드 체이닝(method chaining)
// 여러 메서드를 연결해서 사용 가능
console.log('hello'.split(''));
console.log('hello'.split('').reverse());
console.log('hello'.split('').reverse().join(''));
