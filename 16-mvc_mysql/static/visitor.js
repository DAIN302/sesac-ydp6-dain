const tbody = document.querySelector('tbody')
const btnGroup = document.querySelector('#button-group')

// form 의 등록버튼을 클릭했을 때
// POST /visitor 요청
function createVisitor() {
    const form = document.forms['visitor-form']

    axios({
        method: 'POST',
        url: '/visitor',
        // 추가하려는 정보를 req.body에 실어서 요청을 보냄
        data: {
            name: form.name.value,
            comment: form.comment.value,   
        }
    }).then((res) => {
        // console.log(res)

        const { data } = res; // {id: 7, name: 'lily', comment: 'hihi'}
        
        const html = `
            <tr id="tr_${data.id}">
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.comment}</td>
                <td><button type="button" onclick="editVisitor(${data.id});">수정</button></td>
                <td><button type="button" onclick="deleteVisitor(this, ${data.id});">삭제</button></td>
            </tr>
        `;

        // insertAdjacentHTML: 특정 요소에 html 추가
        tbody.insertAdjacentHTML('beforeend', html);

        form.name.value = ''
        form.comment.value = ''
    })
}

// 수정 버튼 클릭 시
// form input에 value 넣기
// 변경, 취소 버튼 보이기
// 테이블의 [수정] 버튼 클릭시
// - form input에 value 넣기
// - [변경], [취소] 버튼 보이기
function editVisitor(id) {
    axios({
        method: 'GET',
        url: `/visitor/${id}`
    }).then(res => {
        console.log(res.data);
        // { "id": 6, "name": "lily", "comment": "hello" }

        const { name, comment } = res.data;
        const form = document.forms['visitor-form'];
        form.name.value = name;
        form.comment.value = comment;
    })

    const html = `
        <button type="button" onclick="editDo(${id});">변경</button>
        <button type="button" onclick="editCancel()">취소</button>
    `;
    btnGroup.innerHTML = html;
}

// 삭제 버튼 클릭 시
// - 테이블에서 해당 행 삭제
function deleteVisitor(obj, id) {
    console.log(obj); // 클릭한 삭제 버튼 (this)
    console.log(id); // 행의 id
    if(!confirm('삭제하시겠습니까?')) { // 취소눌렀을 때(false)
        return // deleteVisitor 함수 종료
    }

    axios({
        method : 'DELETE',
        url : '/visitor',
        data : { id }
    }).then((res)=>{
        console.log(res.data);  // {result: true}
        if(res.data.result) { // res.data.result true일때 삭제 
            // 방법 1 ) parentElement() 사용
            // obj -> 버튼 태그 자체 ojb.perentElement -> obj를 감싸고 있는 td 태그
            // obj.parentElement.parentElement -> obj를 감싸고 있는 td 태그를 감싸고 있는 tr 태그
            // remove() -> 요소 삭제 메서드
            // obj.parentElement.parentElement.remove();
            // 방법 2 ) closest() 사용
            // 대상의 부모(조상)중에서 이 선택자를 가진애를 찾아라!
            obj.closest(`#tr_${id}`).remove()
        }
    })
}

// 변경 버튼 클릭 시
// 데이터 수정 요청
function editDo(id) {
    const form = document.forms['visitor-form'];
    axios({
        method : "PATCH",
        url : '/visitor',
        data : {
            id,
            name : form.name.value,
            comment : form.comment.value
        }
    }).then(res=>{
        console.log(res.data);
        if(res.data.result) {
            alert('변경되었습니다.')

            const children = document.querySelector(`#tr_${id}`).children;
            children[1].textContent = form.name.value;
            children[2].textContent = form.comment.value;

            // 입력창 초기화
            editCancel();
        }
    })
}

// 취소 버튼 클릭
// input 초기화
// 등록버튼 되돌리기
function editCancel(){
    const form = document.forms['visitor-form'];
    // 1. input 초기화
    form.name.value = ''
    form.comment.value = ''

    // 2. 등록 버튼 보이기
    const html = `
        <button type="button" onclick="createVisitor()">등록</button>
    `

    btnGroup.innerHTML = html


}