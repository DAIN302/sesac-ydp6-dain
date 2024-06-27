console.log('연결 성공');
const msgBox = document.querySelectorAll('.msg')

async function createUser() {
    const form = document.forms['form-register']

    const data = {
        userid : form.userid.value,
        pw : form.password.value,
        name : form.name.value
    }

    if(!form.userid.checkValidity()){
        msgBox[0].textContent = 'ID를 입력해주세요(4글자 이상)'
    } else if(!form.password.checkValidity()){
        $('.msg').empty()
        msgBox[1].textContent = '비밀번호를 입력해주세요(4글자 이상)'
    } else if(!form.name.checkValidity()) {
        $('.msg').empty()
        msgBox[2].textContent = '이름을 입력해주세요(2글자 이상)'
    } else {
        $('.msg').empty();
        try {
            alert('회원가입 성공')
            document.location.href= '/user/signin'
            await axios({
                method : 'POST',
                url : '/user/signup',
                data
            })        
        } catch(err) {
            console.error(err);
            alert('알 수없는 에러가 발생했습니다.')
        }
    }
}

async function login() {
    console.log('로그인');
    const form = document.forms['form-login']
    const form_info = document.forms['form_info']

    console.log(form);
    
    const data = {
        userid : form.userid.value,
        pw : form.password.value
    }

    if(!form.userid.checkValidity()){
        msgBox[0].textContent = 'ID를 입력해주세요'
    } else if(!form.password.checkValidity()){
        $('.msg').empty()
        msgBox[1].textContent = '비밀번호를 입력해주세요'
    } else {
        try{
            const loginAxios = await axios({
                method : 'POST',
                url : '/user/signin',
                data
            })
            const result = loginAxios.data.result
            console.log('front', result);
            if(result){
                const { userid } = loginAxios.data.result
                console.log('front2', userid);
                form_info.userid.value = userid
                alert('로그인 성공')
                form_info.submit()
            } else{
                alert('로그인 실패')
                form.reset();
                form_info.reset();
            }
        } catch(err){
            alert('로그인 실패')
            form.reset();
            form_info.reset();
        }
    }
}

async function editProfile() {
    //console.log('수정');
    const form = document.forms['form-profile']
    
    const data = {
        id : form.id.value,
        userid : form.userid.value,
        pw : form.password.value,
        name : form.name.value
    }

    if(!form.password.checkValidity()){
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
                url : '/user/profile/edit',
                data
            })
            if(editAxios.data.result){
                alert('정보 수정 성공')
            }
        } catch(err){
            alert('알 수없는 이유로 실패')
        }
    }
}

async function deleteProfile() {
    console.log('삭제');
    const form = document.forms['form-profile']
    const data = {
        id : form.id.value
    }
    if(!confirm('탈퇴하시겠습니까?')){
        return;
    }
    try {
        const deleteAxios = await axios({
            method : 'DELETE',
            url : '/user/profile/delete',
            data
        })
        console.log(deleteAxios.data.result);

        if(deleteAxios.data.result){
            alert('탈퇴 완료')
            document.location.href = '/'
        }
    } catch(err){
        alert('알 수 없는 이유로 실패')
    }
}

