console.log('연결 성공');
const msgBox = document.querySelectorAll('.msg')

async function createMember() {
    const form = document.forms['form-register']

    const data = {
        userid : form.userid.value,
        pw : form.pw.value,
        name : form.name.value
    }

    if(!form.userid.checkValidity()){
        msgBox[0].textContent = 'ID를 입력해주세요(4글자 이상)'
    } else if(!form.pw.checkValidity()){
        $('.msg').empty()
        msgBox[1].textContent = '비밀번호를 입력해주세요(4글자 이상)'
    } else if(!form.name.checkValidity()) {
        $('.msg').empty()
        msgBox[2].textContent = '이름을 입력해주세요(2글자 이상)'
    } else {
        $('.msg').empty();
        try {
            const registerAxios = await axios({
                method : 'POST',
                url : '/register',
                data
            })    
            const result = registerAxios.data  
            if(!result) {
                msgBox[0].textContent = '이미 존재하는 회원입니다.'
            } else {
                alert('회원가입 성공')
                document.location.href= '/login'
            }      
        } catch(err) {
            console.error(err);
            alert('알 수없는 에러가 발생했습니다.')
        }
    }
}

async function login() {
    const form = document.forms['form-login']    
    const data = {
        userid : form.userid.value,
        pw : form.pw.value
    }

    if(!form.userid.checkValidity()){
        msgBox[0].textContent = 'ID를 입력해주세요'
    } else if(!form.pw.checkValidity()){
        $('.msg').empty()
        msgBox[1].textContent = '비밀번호를 입력해주세요'
    } else {
        try{
            const loginAxios = await axios({
                method : 'POST',
                url : '/',
                data
            })
            console.log(loginAxios);
            const result = loginAxios.data
            if(result){
                alert('로그인 성공')
                document.location.href= '/' 
            } else{
                msgBox[1].textContent = '로그인 실패, 아이디와 비밀번호를 확인해주세요'
                form.reset();
                
            }
        } catch(err){
            msgBox[1].textContent = '알 수 없는 이유로 로그인에 실패했습니다.'
            form.reset();
        }
    }
}

async function editProfile() {
    const form = document.forms['form-profile']
    
    const data = {
        userid : form.userid.value,
        pw : form.pw.value,
        name : form.name.value
    }

    if(!form.pw.checkValidity()){
        $('.msg').empty()
        msgBox[1].textContent = '비밀번호를 입력해주세요(4글자 이상)'
    } else if(!form.name.checkValidity()) {
        $('.msg').empty()
        msgBox[2].textContent = '이름을 입력해주세요(2글자 이상)'
    } else {
        $('.msg').empty()
        try {
            const editAxios = await axios({
                method : 'PATCH',
                url : '/profile/edit',
                data
            })
            if(editAxios.data==='edit'){
                alert('정보 수정 성공')
                document.location.href = '/'
            } else if(editAxios.data === 'same') {
                msgBox[1].textContent = '비밀번호가 이전과 동일합니다.'
            } else {
                alert('알 수 없는 이유로 실패')
            }
        } catch(err){
            alert('알 수없는 이유로 실패')
        }
    }
}

async function deleteProfile() {
    const form = document.forms['form-profile']
    const data = {
        userid : form.userid.value
    }
    if(!confirm('탈퇴하시겠습니까?')){
        return;
    }
    try {
        const deleteAxios = await axios({
            method : 'DELETE',
            url : '/profile/delete',
            data
        })
        if(deleteAxios.data){
            alert('탈퇴 완료')
            document.location.href = '/'
        } 
    } catch(err){
        alert('알 수 없는 이유로 실패')
    }
}

async function getUsers() {
   const userList = document.querySelector('.user-list')    
   const data = {}
   try {
       const usersAxios = await axios({
            method : 'GET',
            url : '/users',
            data
       })
       console.log(usersAxios.data);
   } catch(err){

   }
}
