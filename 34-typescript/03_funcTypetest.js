// TS에서의 함수 선언
// #1. 기본 함수 선언
function add(a, b) {
    return a + b
}

// 두 매개변수 'a', 'b' 모두 number type, 반환값도 number type

// #2. 선택적 매개변수
// - 선택적 매개변수 ('?')는 매개변수 중 맨 뒤에 있어야함
function print(a,b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// 함수의 리턴값이 없는 함수 - void
// return 이 없거나 함수가 단순히 작업을 '수행'만 할 때
print(1,2) // 1, 2, undefined
print(2,4,6) // 2,4,6
print(2) //-> js에서는 에러 안남

// JS는 선언된 매개변수의 개수와 함수 호출 시 전달되는 파라미터의 개수가 달라도 상관없음
// TS는 매우 상관 있음 -> 오류나욧