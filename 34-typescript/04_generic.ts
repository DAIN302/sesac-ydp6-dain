// # generic
// 선언할 때 타입을 지정하기 어려운 케이스가 존재
// 데이터 타입을 외부에서 지정 후 생성 시점에서 타입을 명시 -> 재사용성 및 유연셩 증가!
// 타입을 변수처럼 사용
// <T> 형태로 주로 사용

// ex1)
function numArrLem(arr : number[]) : number {
    return arr.length;
}

// console.log(numArrLem([1,2,3])); //3

//ex2)
function strArrLen(arr:string[]) : number {
    return arr.length;
}
// console.log(strArrLen(['a', 'b', 'c', 'd', 'e']));
// -> 리턴값은 같고 타입만 다른데 쓸데없이 함수를 두개를 만들어야해?

// 리턴되는 값이 string, number, boolean .... 등 모든 값이 들어 올 수 있는 함수라면 좋겠다

// #1. 제너릭 기본 사용법
// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만듬
// -> type 만 올 수 있음
function arrLen<T>(arr : T[]){
    return arr.length;
} 

// T[] : T에 대응되는 자료형의 배열
console.log(arrLen<string>(['a', 'b', 'c', 'dasd'])); // 함수를 호출할 때 데이터 타입 명시
console.log(arrLen<number>([1,2,3,4,]));
console.log(arrLen<string | number>([1,2,3,4,'dsad']));

// ex
function printSome<T> (x : T, y : T) : void {
    console.log(x,y);
}

printSome<number>(1,2)
printSome<string>('hi','hello')
printSome<boolean[]>([true, false],[false, false])


// #2. 두개의 서로 다른 타입 매개변수 제너릭
// * 관례 : T : type, U : usually -> 꼭 이렇게 안써도 됨 걍 관례임
function printSome2<T, M>(x : T, y : M) : void {
    console.log(x, y);
} 

printSome2<number, string>(1,'일')
printSome2<string, number>('배고파',20000)

// interface 와 generic
// ex1) 
// Phone 인터페이스의 옵션이 여러 타입으로 정의 될 수 있다면? 그럴때 제너릭 씀
interface Phone<T> {
    company : string;
    createdAt : Date;
    option : T;
}

// 사용자가 지정한 타입
type iphoneOption = {
    color : string,
    storage :  number
}

const iphone50: Phone<iphoneOption> = {
    company : 'apple',
    createdAt : new Date('2024-08-21'),
    option : { // 제너릭을 통해 옵션의 속성타입을 유연하게 지정 가능
        color : 'pink',
        storage : 256
    }
}

console.log(iphone50);

// ex)
type galaxyOption = {
    color : string,
    isBuz : boolean
}

const galaxy50 : Phone<galaxyOption> = {
    company : 'samsung',
    createdAt : new Date('2024-09-21'), 
    option : {
        color : 'blue',
        isBuz : true
    }
}

console.log((galaxy50));
