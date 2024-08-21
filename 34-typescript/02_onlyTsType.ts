// only ts type : 타입스크립트에만 있는 타입
 
// 튜플 (Tuple)
// 튜플은 고정된 개수의 요소를 가짐
// 각 요소의 타입이 미리 지정된 배열
// 각 요소의 순서가 중요하며 순서에 따라 타입이 다를 수 있다.

// 튜플 타입 선언
let drink:[string, string];
// 튜플 값 할당
drink = ['coffee', 'cafe latte']
// drink = ['coke', 10000] -> type error
//console.log(drink);

// 튜플 타입 선언과 할당을 동시에 하는 법
let drink2: [string, string] = ['sparkling', 'lemon ade']
//console.log(drink2);

// 튜플의 데이터를 변경할 떄도, 배열의 데이터를 변경했던 것처럼 인덱스로 접근
// 또한, 배열의 메서드도 사용 가능

// 인덱스로 접근해 값 변경
drink2[0] = 'zero coke';
drink2[1] = 'zero cider';

//console.log(drink2);

drink2.push('milk tea')
//console.log(drink2);
// 요소의 갯수가 정해져야 한다고 하는데 push 메서드가 동작하네?/?
// 튜플의 숨겨진 한계
// 길이와 타입이 정해진 것처럼 보이지만, push 메서드가 동작하므로 그 정의가 깨짐
// 튜플이라 고정된 개수가 변하면 안되는데 변해버림

// 이유 :
// 이는 타입스크립트의 타입 시스템이 배열 메서드와 관련된 동작을 완전히 제한하지 않기 때문
// 이처럼 타입 시스템의 의도와 어긋나는 동작을 방지하고자 한다면 
// as const 를 사용하거나 readOnly 키워드를 사용하여 튜플을 불변으로 만들 수 있음

// readOnly
// 요소의 타입 순서와 길이를 완벽히 고정시켜줌
let drink3: readonly [string, number] = ['cider', 3000];
// drink3.push('hello') -> readOnly 때문에 push 못함 
// console.log(drink3);

// 타입 별칭 (type alias)
// 타입 별칭을 이용해 type 선언 가능
type campionInfo = [number, string, number]; // tuple

// 엄격하고 명확히 데이터를 관리해야하는 작업일 경우 사용하면 이점
let most1 : campionInfo = [1, 'yumi', 50000]; // most1이라는 배열에 타입 지정
let most2 : campionInfo = [2, 'timo', 40000]; 

// Enum
/*
    Enum 사용 이유
    1. 분야별로 종류를 정의하여 명확하게 사용
    2. 하드코딩의 실수를 줄이기 위해서
*/

// 숫자값 지정 가능 (기본 문법)
// enum Auth {
//     admin = 0,
//     user = 1,
//     guset = 2
// }

// #1. enum 은 기본으로 0부터 1씩 증가는 값을 갖는다...오 auto_increment 같음
enum Auth {
    admin, user, guset
}

// console.log(Auth.admin, Auth.user, Auth.guset); // 0,1,2

// #2. 정의되지 않은 값은 이전 값의 1씩 더해짐
enum Menu {
    pasta = 4000, pizza = 5600, chicken
}

//console.log(Menu.chicken); // 5601 나옴 -> 1씩 증가하니깐

// #3. 문자열 지정 가능 -> 대신 문자열이라서 값을 지정안해주면 1이 안더해짐
enum Cafe {
    americano = "아메리카노",
    latte = "카페라떼",
}

console.log(Cafe.americano, Cafe.latte);


// 문자열 & 숫자 혼합 지정 가능
enum Cake {
    choco,
    vanilla = 200,
    mango,
    kiwi = 'kiwi', 
    apple =300,
    peach
}
// 근데 문자열 지정한거 바로 다음꺼는 값 지정 안하면 에러남

console.log(Cake);
console.log(Cake.choco, Cake.vanilla, Cake.mango, Cake.kiwi);


// Any
// 1. 명시적 타입 지정
let val:any;
val = true;
val = 'dog'

// 2. 암시적 타입 지정
let val2; // 타입 지정안하면 any로 알아서 타입 지정되나봄
val2 = false;
val2 = 'cat';



