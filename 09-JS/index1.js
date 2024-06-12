// spread 연산자 ...
/*
const a = [1,2,3]
const b = [4,5]

// 배열을 합치는 연산자 -> spread 연산자 ... 
const spread = [...a, ...b]
console.log(spread); //[ 1, 2, 3, 4, 5 ]
*/

/*
// 문자열 한개씩 배열에 담기
// 스프레드 연산자 이용
const c  = [...'hello'];
console.log(c);
// 기존의 방식 -> 문자열메서드 split() 사용
const d = 'hello'.split('')
console.log(d);
*/
/*
// spread 연산자를 object 에서 사용해보기
const chip = {
    base : 'chip',
    company : 'lotte'    
}

// 기존에 있던 객체를 합치고 싶을 때 스프레드 연산자 사용
const potatoChip = {
    ...chip,
    flavor : 'potato'
}

console.log(chip);
console.log(potatoChip);
*/

// rest 파라미터 
// 나머지를 몽땅 담고 싶을 때 사용?
/*
// 함수에서 사용 시
const values = [10,20,30,40,50,60]
function get(a,b, ...rest) { // 앞에서부터 순서대로 읽고 나머지들은 rest에 넣어줘
    console.log(a,b); // 10 20
    console.log(typeof a, typeof b); // type number
    console.log(rest); // [30,40,50,60]
    console.log(typeof rest) // type object(array)
}

get(...values)
*/

/*
// 객체에서 사용 시
const icecream = {
    company : 'lotte',
    flavor : 'choco',
    price : 1000
}

const {flavor, ...abc} = icecream;
console.log(flavor); // choco
console.log(abc); // { company: 'lotte', price: 1000 }
*/

/*
// 배열에서 사용 시
const number = [1,2,3,4,5,6,7,8];
const [one1, two1, ...rest2] = number;
console.log(one1, two1); //1 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8 ]
*/
