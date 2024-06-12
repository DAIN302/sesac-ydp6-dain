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