// 업로드 실행 함수
function uploadThumbnail() {
    // formData object를 활용하여 데이터 보내기
    // 폼 전송 시 멀티미디어 파일을 비동기로 제출하고 싶다면 formData 객체 이용

    // FormData 객체 생성
    const formData = new FormData() 

    // form 요소 선택
    const fileInput = document.querySelector('#thumbnail');
    // console.dir(fileInput.files)

    // formData에 업로드한 파일 정보 추가
    formData.append('thumbnail', fileInput.files[0])
    // FormData는 특수한 형태의 객체여서 console.log로 출력이 안되요

    // 서버로 요청 보내기 
    axios({
        method : 'POST',
        url : '/dynamicFile',
        data : formData,
        // key
        headers : {
            'Content-Type' : 'multipart/form-data', //enctype="multipart/form-data" -> 이거랑 비슷한 역할
        }
    }).then((res)=>{
        // 서버의 req.file이 클라이언트의 res 변수가 받음
        console.log(res.data.path); // 이미지 주소
        document.querySelector('img').src = `/${res.data.path}`
        document.querySelector('img').classList.add('thumbnail')
    })
    

}