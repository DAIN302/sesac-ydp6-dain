type arrType = {
    <arrT>(arr: arrT[], idx:number): arrT | boolean
}
function arrElement<T> (arr : T[], idx : number) : T | boolean {
    return  idx + 1 > arr.length ? false : arr[idx]
}
// function arrElement<arrType> (arr, idx) {
//     return  idx + 1 > arr.length ? false : arr[idx]
// }

console.log(arrElement<string>(['a'], 0));


// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!
console.log(arrElement<string>(['a'], 1)); // false
console.log(arrElement<string>(['a', 'b','c'], 2)); 
console.log(arrElement<string>(['a', 'b','c'], 4)); 


// 화살표 함수로 바꿔보기
const arrElement2: arrType = (arr, idx) => {
    return  idx + 1 > arr.length ? false : arr[idx]
}

console.log(arrElement2<string>(['a'], 1)); // false
console.log(arrElement2<string>(['a', 'b','c'], 2)); 
console.log(arrElement2<string>(['a', 'b','c'], 4));


