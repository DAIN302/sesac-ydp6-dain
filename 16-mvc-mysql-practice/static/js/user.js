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
        try {
            $('.msg').empty();
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
                alert('로그인 성공')
                const { userid } = loginAxios.data
                form.info.userid.value = userid
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