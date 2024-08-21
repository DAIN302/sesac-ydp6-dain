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

//console.log(Cafe.americano, Cafe.latte);


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

//console.log(Cake);
//console.log(Cake.choco, Cake.vanilla, Cake.mango, Cake.kiwi);


// Any
// 1. 명시적 타입 지정
let val:any;
val = true;
val = 'dog'

// 2. 암시적 타입 지정
let val2; // 타입 지정안하면 any로 알아서 타입 지정되나봄
val2 = false;
val2 = 'cat';


// interface
// #1. 객체 타입 정의
// - interface 키워드 사용
interface Crew {
    name : string;
    readonly age : number;
    exp : boolean;
}

const crew1:Crew = {
    name : 'joy',
    age : 3,
    exp : false
}
// console.log(crew1);
/*
    "Crew" 인터페이스는 세 가지 속성 요구
    crew1 객체는 이 구조를 따라야함
    객체 안에 순서는 상관없음
*/

// #2. 선택적 속성
// 모든 속성이 필수는 아님
// ? 붙이기
interface Crew2 {
    name : string; 
    age? : number; // age는 선택적 속성 -> 써도 되고 안써도 돼
}

const crew2 : Crew2 = {
    name : 'sadness',
}

const crew22 : Crew2 = {
    name : 'anger',
    age : 44
}

//console.log(crew2);
//console.log(crew22);
// crew2 객체는 age 속성이 없어도 유효

// #3. readOnly 읽기 전용 속성
// 객체가 초기화 된 후에는 변경 불가
const crew3 : Crew = {
    name : 'disgust',
    age : 4,
    exp : true
}

// console.log(crew3);
crew3.name = 'joy2'
// crew3.age = 30 -> age속성이 readonly라서 못봐꿔

// console.log(crew3);

// #4. 상속 가능
enum Score {
    Aplus = 'A+',
    A = 'A',
    B = 'B',
    C = 'C'
}

// #5. 인터페이스 확장
// 기존 인터페이스의 모든 속성 포함 및 속성 추가
interface Team extends Crew {
    // {name, age, exp }의 속성을 가지게 됨
    position : string
    readonly personal? : number
    [grade : number] : Score
    // 인덱스 시그니쳐 : 객체가 어떤 키로든 접근할 수 있도록 허용, 키와 그에 대응하는 값의 타입을 정의할 수 있는 방법 제공
    // [grade : number] - 숫자인 Key
    // [grade : number] : string - 숫자 key 를 가진 객체가 문자열 값을 가질 것임을 명시
}

const first : Team = {
    name : 'joy',
    age : 20,
    exp : true,
    position : 'FrontEnd',
    1 : Score.Aplus
}

//console.log(first);

// 값 변경 가능 (점 접근법, 대괄호 법)
first.position = 'BackEnd';
// first['age'] = 25; -> readonly 라 못봐꿔
first['exp'] = false

// console.log(first);

// #6. 교차 타입 : 두 개 이상의 인터페이스를 합치는 것
interface Toy {
    name : string;
    start() : void; // void : 아무것도 return 하지 않는 함수를 대상으로 사용
}

interface Car {
    name : string; // 공통된 속성을 가지고 있어도 상관음슴
    color : string;
    price : number;
}

interface ToyCar extends Toy, Car {} // 인터페이스 확장을 사용한 교차 타입

const toyCar:ToyCar = {
    name : 'tayo',
    start(){
        console.log('타요 출발');
    },
    color : 'blue',
    price : 10000
}

//console.log(toyCar);
//console.log(toyCar.start); // Function : start -> void 로 타입 지정해서 반환하지 않고 그냥 이렇게 보임

// type 사용했을 때
type Gender = 'F' | 'M';
type Person = {
    name : string;
    age? : number;
    like? : string[];
    gender : Gender; // 'F' or 'M' 값만 가져야함
}

const IU : Person = {
    name : "IU",
    age : 30,
    gender : 'F' // Gender type 에 선언된 값만 넣을 수 있음
}

console.log(IU);




