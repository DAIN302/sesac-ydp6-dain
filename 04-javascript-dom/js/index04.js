// 요소 가져오기
const div1 = document.getElementById("div1")
console.log(div1);

// 태그 내부 내용 변경
// innerHTML : 태그 사용 가능
// innerText, textContent : 태그가 문자(기호)로 그대로 노출
console.log("innerText",div1.innerText);
console.log("textContent",div1.textContent);

div1.innerHTML = `여기는 <b>첫번째</b> 태그`
console.log('innerHTML', div1.innerHTML);

// innerText 와 textContent
// 공통점 
// - 둘 모두 텍스트를 추가함
// 차이점 
// - innerText는 보여지는 텍슽트만 그대로 출력(html태그 해석 x)
// - textContent는 html태그 포함해서 처리

// div1.innerText = `여기는 <b>두번째</b> 태그`
// console.log(div1);
// div1.textContent = `여기는 <b>세번째</b> 태그`
// console.log(div1);

// 속성(attribute) 변경
// setAttribute(속성명, 변경할 속성 값) => 속성 값을 "설정"
const naver = document.getElementById("naver")
naver.setAttribute("href", "https://www.google.com")

const bono = document.getElementById("bono")
bono.setAttribute("src", "../03-css/css/img/porori.webp")

// getAttribute(속성명) -> 속성값 얻기
console.log(bono.getAttribute('alt'));

// # 참고1 속성 접근 (.) 연산자로도 가능
console.log(bono.alt);

// # 참고2 (.)연산자로 속성에 접근하고 = 할당 연산자로 속성 값 변경 가능
bono.alt = "porori"
console.log(bono.alt);
naver.href = "#" // 내부 앵커 // 현재 페이지의 상단으로 스크롤

// css 지정
const h1 = document.querySelector("h1")
const list = document.querySelectorAll("ul>li") // 유사배열
console.log(list);

// css 지정
// 1. style 속성을 이용해서 css 지정 가능
// style.xxx(xxx는 속성명, camelCase로 되어있다)

list[0].style.backgroundColor = "purple"
list[0].style.fontSize = "20px"

for(let li of list) {
    li.style.color = "pink"
}

list.forEach(item=>item.style.fontWeight ="bold");


// 2. classList 사용
// xxx.classList.add : class 명 추가
// xxx.classList.remove : class 명 제거
// xxx.classList.contains : 클래스명 있는지 없는지 확인 (true or false 로 값을 반환)
// xxx.classList.toggle : class 있으면 제거, 없으면 추가

h1.classList.add('add-h1')
// h1.classList.remove('add-h1')
// h1.classList.toggle('add-h1')
console.log(h1.classList.contains('add-h1'));


// 요소 찾기
// 계층 구조(형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector("#friends")
const tiger = document.querySelector("#tiger")

// 1. 자식 요소 
console.log(friends.children); // 유사배열, 자식 모두 선택 , HTMLCollection
console.log(friends.children[0]); 
console.log(friends.childNodes); // NodeList

// 2. 부모 요소
console.log(tiger.parentNode);
console.log(tiger.parentNode.parentNode);

// 3. 형제 요소
console.log(tiger.previousElementSibling); // 이전 형제 요소
console.log(tiger.nextElementSibling); // 다음 형제 요소






