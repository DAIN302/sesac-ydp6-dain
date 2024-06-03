// console.log(document);
// console.log(document.childNodes[1].childNodes[0].childNodes[0]);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// console.log(document.URL);
//console.log(document.domain); // 취소선이 그어진 이유는? 해당 속성의 사용을 권장하지 않거나 더 이상 지원되지 않을 가능성을 나타냄
// 최신 보안 정책에서는 도메인 사용한 접근 제어 방식이 보안상 취약할 수 있기 때문에 지양함 

// document 객체를 이용해 HTML 요소 선텍
// 1. getElementById
const green = document.getElementById("green")
const red = document.getElementById("red")
console.log(green)
console.log(red)

// 2. getElementsByClassName (HTMLCollection)
const pink = document.getElementsByClassName("pink")
console.log(pink[1])

// 3. getElementsByTagName (HTMLCollection)
const div = document.getElementsByTagName("div")
console.log(div);

// 4. getElementsByName (NodeList)
const id = document.getElementsByName("id")
console.log(id);

// 5. querySelector (css selector)
// 처음 발견한 하나만 가져옴
const qsPink = document.querySelector(".pink")
console.log(qsPink);
const qsOthers = document.querySelector(".others")
console.log(qsOthers);
const qsDiv = document.querySelector("div")
console.log(qsDiv);
const qsByName = document.querySelector("[name='id']")
console.log(qsByName)

// 6. querySelectorAll (css selector)(NodeList)
const qsaPink = document.querySelectorAll(".pink")
console.log(qsaPink);
console.log(qsaPink[0]);
const qsaOthers = document.querySelectorAll(".others")
console.log(qsaOthers);
const qsaDiv = document.querySelectorAll("div")
console.log(qsaDiv);
const qsaByName = document.querySelectorAll("[name='id']")
console.log(qsaByName)

// 유사배열 (HTMLCollection, NodeList)
// []식으로 생긴 배열을 의미, 배열은 아님
// index, length 는 가짐
// 배열과 달리 사용 가능한 메서드가 제한
// NodeList -> forEach 사용 가능 , HTMLCollection -> forEach 사용 불가
qsaPink.forEach(item => console.log("NodeList",item))
for(let color of qsaPink) {
    console.log("for of",color);
}
// pink.forEach(item=>console.log(item)) -> HTMLCollection 이라 forEach 사용 불가
// 쓰고 싶으면 Array.from() 사용해서 배열로 바꿔줘야함
Array.from(pink).forEach(item=>console.log("HTMLCollection",item))


