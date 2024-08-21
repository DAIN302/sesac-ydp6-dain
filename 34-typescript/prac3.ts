function sum1(a:number, b:number) :void {
    console.log(a+b);
}

sum1(5, 11); // 16


function sum2(...number : number[]) : number {
    let numArr = number
    return numArr.reduce((acc, cur) => acc + cur, 0)    
}

console.log(sum2(1,2,3,4,10)); // 20
