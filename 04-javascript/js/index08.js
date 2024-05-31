// 반복문
// for 문
for (let i =0; i < 10; i++){
    // for(시;한;증)
    // 시작은 얘부터 뭐가 될때까지 1씩 증감
    console.log(`${i}번째`)
}

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
    console.log('1씩 증가',i);
}

// 1~5 역순 출력(감소)
for(let i = 5; i > 0; i--){
    console.log('1씩 감소',i)
}

// 1부터 n까지의 합
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for(let i = 1; i <= n; i++){
    // sum 변수에 값을 재할당 (이전 sum 변수값 + 현재 반복변수 i 값)
    sum = sum + i;
    console.log(i, sum);
}

console.log(sum);

// 1~20 까지 숫자 반복
// 1 ~ 20 짝수일 때의 합을 구하기

let m = 20
let sum2 = 0;
for(let i =1; i <= m; i++) {
    if(i%2==0){
        sum2 = sum2 + i
        console.log(i, sum2)
    }

}





