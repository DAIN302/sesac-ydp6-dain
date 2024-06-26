const tbody = document.querySelector('tbody')

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
                <td><button type="button">수정</button></td>
                <td><button type="button" onclick="deleteVisitor(this, ${data.id});">삭제</button></td>
            </tr>
        `;

        // insertAdjacentHTML: 특정 요소에 html 추가
        tbody.insertAdjacentHTML('beforeend', html);
    })
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
        // 삭제하면? res.data.result true일때
        if(res.data.result) { // 삭제 
            obj.parentElement.parentElement.remove();
        }
    })
}