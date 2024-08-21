// typescript basic type (js type)

// 타입 지정(명시적) 
// 변수 : 타입 = 값
let a:number = 1;
a = 2;
// a = 'hello'; -> string이라서 타입 에러남
//console.log(a);

let b:string = 'str';
let c:boolean = true;
let d:undefined;
let e:null = null;
//console.log(b,c,d,e);

// 타입 추론(암묵적)
// 타입을 명시하지 않아도 잘 나와
// 변수의 초기값을 기반으로 변수의 타입을 자동으로 "추론" => 암묵적 타입 추론
let aa = 1;
let bb = 'hi';
let cc = false;
let dd;
let ee = null;
// aa = 'bye'; -> 변수 aa의 초기값이 number라서 string type 을 재할당하면 타입 에러남
//console.log(aa,bb,cc,dd,ee);

// 배열
let numArr: number[] = [1,2,3,4,5]; // number type array
// numArr = ['a', 'b'] -> type error

// 배열 원소가 여러 타입일 경우
let arr1:(number | boolean | string)[] = [1, true, 'string']

// '\' 연산자 
// 유니온 타입(union type) 을 정의할 때 사용
// -> 유니온 타입 : 하나의 값이 여러 타입 중 하나일 수 있음을 명시하는 타입 시스템의 기능

// boolean, null, number array 가 원소가 될수 있는 arr2
let arr2:Array<boolean | null | number[]> = [true, false, null, [1,2,3], null, true, true]
// -> 갯수, 순서 상관 X 맞는 타입만 오면 되는듯(위의 것은 string을 지정안해줘서 string 타입 들어가면 타입 에러남)

// 어떤 자료형이든 상관없는 배열
let arr3:any[] = [1, 2, 'hi', true, null, 'haha']

// 객체
let obj1:object = {
    name : 'happy',
    age : 10
}


