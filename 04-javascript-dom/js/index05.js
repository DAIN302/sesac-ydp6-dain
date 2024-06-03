// JS Event
// 어떤 사건을 의미
// ex. 버튼 클릭, 웹페이지 로드, 키보드 키가 눌렸을 때 등등

// 이벤트에 함수를 등록하는 방법 2가지
// HTML 상에서 onXXX 속성으로 등록
// JS에서 addEventListener 사용에서 등ㄹㄱ

// 1. onXXX
function clickH1(){
    alert('제목 클릭! 함수 이용')
}

// 2. addEventListener 
const btn1 = document.querySelector(".btn--black")
const btn2 = document.querySelector(".btn--green")
const btn3 = document.querySelector(".btn--blue")
const btn4 = document.querySelector(".btn--red")
const container = document.querySelector("#container")


// 이벤트 종류, 이벤트가 발생했을 때 일어날 일 함수로 작성
// addEventListener(이벤트 종류, 이벤트 발생 시 일어날 일 함수로 작성)
btn1.addEventListener("click", function(){
    alert("버튼 1을 클릭하셨네요")
})

btn1.addEventListener("mouseover", function(){
    // this.style.backgroundColor = "aqua"
    btn1.style.backgroundColor = "aqua"
})

btn1.addEventListener("mouseout", function(){
    btn1.style.backgroundColor = "rgb(244,1,106)"
})

btn2.addEventListener("click", ()=>{
    const div = document.createElement("div")
    div.style.backgroundColor = "pink"
    div.innerHTML = "HI~"
    container.append(div);
})

btn3.addEventListener("click", changeColor)

function changeColor(){
    const divs = document.querySelectorAll("#container div")
    console.log(divs);
    for(let div of divs){
        div.style.backgroundColor = "skyblue"
    }
}

btn4.addEventListener("click", changeBtnColor)

function changeBtnColor(){
    console.log(this); // this 는 선택된 자기 자신
    this.style.backgroundColor = "lightgreen"
}


// key Event
// 이벤트 객체
// 브라우저는 발생한 이벤트에 대한 정보를 담은 "이벤트 객체(event object)"를 이벤트 리스너에 전달
// ex. mousedown -> 이벤트 객체는 마우스 좌표, 버튼 번호 등의 정보를 가잠
// ex. keydown -> 이벤트 객체는 키 코드, 어떤 키가 눌렸는지에 대한 정보를 가짐


const btn = document.querySelector("button")
const input = document.querySelector("input")

btn.addEventListener("click", function(event){
    // console.log(event); // 이벤트 객체에 대한 정보 출력
})  

input.addEventListener("keydown", function(e){
    // console.log(e);
    // console.log(e.code, e.key); // e.code - 눌려진 키의 고유 코드 / e.key - input에 입력된 값
    // if(e.code ==='ArrowUp'){
    //     console.log('upup');
    // }else if(e.code==="ArrowDown"){
    //     console.log('downdown');
    // }else {
    //     console.log("others");
    // }
})

// form 이벤트
const todoForm = document.getElementById("todo-form")
const todos = document.querySelector(".todos")

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault(); // form submit을 이벤트가 새로고침 되는 것을 막아줌 -> 폼 제출 막음
    // console.log(e);
    const todoInput = document.querySelector("#todo")
    // console.log(todoInput.value); // 입력된 값을 가져옴
    const newTodo = todoInput.value.trim();
    if(newTodo !== ''){
        const newTodoLi = document.createElement("li")
        newTodoLi.append(newTodo)
        todos.append(newTodoLi)
    } else {
        alert("값을 입력해라")
    }

    // input 창 초기화
    todoInput.value = "";
})

// change : input 요소에 변경이 일어나고, 다른 요소를 클릭해서 인풋이 포커스 아웃(blur) 처리 되었을 때 일어나는 이벤트
const chgInput = document.querySelector("#change-input")
chgInput.addEventListener("change", function(e){
    console.log(e.target.value);
})


// input에 값이 입력될 때마다 이벤트 발생
chgInput.addEventListener("input", function(e){
    // console.log(e, this);
    const div = document.querySelector(".intro")
    div.textContent = this.value
})