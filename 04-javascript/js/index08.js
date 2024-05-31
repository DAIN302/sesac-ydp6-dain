// 반복문
// for 문
for (let i =0; i < 10; i++){
    // for(시;한;증)
    // 시작은 얘부터 뭐가 될때까지 1씩 증감
   // console.log(`${i}번째`)
}

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
   // console.log('1씩 증가',i);
}

// 1~5 역순 출력(감소)
for(let i = 5; i > 0; i--){
    //console.log('1씩 감소',i)
}

// 1부터 n까지의 합
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for(let i = 1; i <= n; i++){
    // sum 변수에 값을 재할당 (이전 sum 변수값 + 현재 반복변수 i 값)
    sum = sum + i;
 //   console.log(i, sum);
}

// console.log(sum);


// for-if중첩
// 1~20 까지 숫자 반복
// 1 ~ 20 짝수일 때의 합을 구하기

let m = 20
let sum2 = 0;
for(let i =1; i <= m; i++) {
    if(i%2==0){
        sum2 = sum2 + i
   //     console.log(i, sum2)
    }
}

// while문 
// while(조건){코드;증감;}
// 조건이 항상 참이거나 증감을 써주지 않으면 무한루프에 빠질 수 있다.

// 구구단
let x = 2, y = 1;
while(x < 10) {
    while(y < 10) {
        // console.log(x+' x '+ y+' = '+x*y)
        y++;
    }
    x++;
    y=1; // 맨끝에 y를 1로 만들어서 초기화,  x가 증가한 상태에서 다시 와일문을 돌면서 구구단완성~ 
}
// for문을 이용한 구구단
for(let i = 2; i <= 9; i++){
    for(let j=1;j<=9;j++){
        // console.log(i+' x '+ j+' = '+i*j)
    }
}
///////////////////////////////////
// do ~ while문
/*
   자바스크립트에서 사용되는 반복문 중 하나로
   조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후 조건 검사
   항상 코드 블록을 한 번 실행한 다음, 조건이 참인 동안 반복을 계속함  
   // 구문
   do {
       // 실행할 코드 내용
   } while (condition);
*/

let g =1;
do {
    // console.log(`do while 문 예시 ${g}`);
    g++;
} while (g <=5);

// 조건이 참일 때까지 반복을 시킬 수 있어서 뭔가 중복 검사에 알맞을듯?

/////////////////////////////////////////////////
// break & continue 
// 반복문에서 사용되는 제어문
// # break
// 반복문을 중단하고 빠져나옴
// # continue 
// 현재 반복을 중지하고 다음 반복으로 넘어감(skip)

// ex
for(let i = 0; i <= 10; i++) {
    if(i===5){
        break; // i가 5가 되면 반복 중단
    }
    // console.log(i) // 출력결과 0,1,2,3,4
}

for (let i = 1; i <= 5; i++) {
    if(i===3){
        continue; // 3을 스킵
    }
    // console.log(i); // 출력결과 1,2,4,5
}






// 배수 찾기
let num = 10;
for(let i =0; i <= num; i++){
    
}






