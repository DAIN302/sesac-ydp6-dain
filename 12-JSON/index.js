// JSON 
const car = `{
    "model" : "IONIQ 5",
    "company" : "HYUNDAI",
    "price" : 500000000,
    "year" : 2023,
    "isElectricCar" : true,
    "option" : ["side mirror","smart sensor", "built-in cam"]
}`;

// 후행쉼표(뒤에 오는 요소가 없어도 , 쓰는 것)
// const arr = ['a','b','c',]
// 자바스크립트는 배열이나 객체를 만들 때 후행쉼표 가넝 JSON은 ㄴㄴ 

console.log(car); // format : JSON

// 역직렬화 : JSON.parse() 통신하여 받은 데이터를 객체로 변환 JSON -> JS object
const obj = JSON.parse(car)
console.log(obj); // js obj

// obj 변수는 js object 이므로 .(dot) []로 키 값에 접근 가능
console.log(obj.model); // IONIQ 5
console.log(obj.price); // 500000000
console.log(obj.hello); // undefined -> hello라는 key 값이 존재하지 않으므로

// 직렬화 : JSON.stringify() 통신하기 쉬운 포맷으로 변환 JS object -> JSON

const json = JSON.stringify(obj)
console.log(json, typeof json); // type : string(문자열) 

// json변수는 문자열이므로 .(dot)이나 [] 로 키 값에 접근 불가
console.log(json.model); // undefined

// json 변수는 string 타입이므로 string 타입에 쓸 수 있는 내장 메서드 사용 가능
console.log(json.split(""));
console.log(json.toUpperCase());