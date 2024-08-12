import React from 'react'
import { useForm } from 'react-hook-form'


export default function Form() {
    const {
        register, // input 할당, value 변경 감지
        handleSubmit, // form submit 시 호출
        formState : {errors}, // 폼 상태 객체
        watch // 특정 폼 필드의 값을 실시간으로 사용
    } = useForm()

    // handleSubmit(func A[, func B]) - 두개의 함수를 인자로 받는다. (두번째인자는 생략 가능)
    // func A는 필수 값, 유효할 때 실행
    // func B는 선택, 유효하지 않을 때 실행

    // func A -> 유효할 떄 실행
    const onValid = (data) => {
        console.log('onValid >>> ', data);
    }

    // func B -> 유효하지 않을 때 실행
    const onInValid = (err) => {
        console.log('onInValid >>> ', err);
    }

    console.log('errors>>>', errors);
    console.log('watch>>>', watch('username'));
    
  return (
    <div>
        <h1>react-hook-form 라이브러리 DEMO</h1>
        <form onSubmit={handleSubmit(onValid, onInValid)}>
            <input type='text' placeholder='username' 
            {...register('username', { // register를 'username'으로 해줘서 name이 username됨
                required : '이름은 필수항목입니다.', 
                minLength : {message : '이름은 최소 2글자 이상 작성해주세요', value : 2}
            })}
            // 'username'이라는 필드명 / required, minLengh 라는 유효성 검사 규칙
            // 'username' 이라는 input 필드를 RHF(react-hook-form)에 등록
            />
            {errors.username?.message}
            {/* 이 표현은 조건부 렌더링과 옵셔널 체이닝을 활용하여 폼 필드의 오류 메시지를 표시하는 방법 */}
            {/* errors = formState 객체 중 하나 각 폼 필드에 대한 오류 메시지를 담고, 유효성 검사가 실패한 경우에만 해당 필드의 오류 메시지가 저장됨 */}
            {/* 옵셔널 체이닝 연산자 '?.'
                JS에서 객체의 속성에 접근할 때 해당 속성이 존재하는지 확인하고, 없을 경우 undefined 반환하는 연산자 */}
            <br />
            <input type='email' placeholder='email(gmail)' 
            {...register('email',{
                required : '이메일을 입력해주세요',
                validate : {
                    useGmail : (v) => v.includes('gmail.com') || 'gmail로만 가입 가능합니다.'
                }
            }) }
            />
            {/* validate : reat hook form 에서 제공하는 유효성 검사 옵션 중 하나,
                폼 필드에 대하 커스텀 유효성 검사를 수행할 수 있도록 함,
                함수 또는 함수들을 포함하는 객체를 받을 수 있음 */}
            {/* validate 가 객체로 사용될 경우, 객체의 각 속성에 대해 개별적인 유효성 검사 수행 가능
                각 속성은 함수 형태로 정의, 이 함수들이 개별적인 유효성 검사 규칙 적용 */}
            {/* 
                useGmail : validate 옵션의 객체 내부에서 useGmail 이라는 이름의 함수로 정의, 특정 유효성 검사 규칙 설정 
                v : 사용자가 email 필드에 입력한 값(이메일 주소)을 의미
            */}
            {errors.email?.message}
            <br />
            <input type='password' placeholder='password' {...register('password')}/>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

/*
// React hook form 은 주로 언컨트롤드 컴포넌트 사용
폼 필드가 업데이트 될 때마다 전체 폼이 리렌더링되지 않도록 함 -> 최적화와 관련
필요할 때만 폼 필드의 상태를 업데이트 하여 불필요한 렌더링을 줄이고, 결과적으로 앱성능 향상

일반 폼 작성 vs RHF 라이브러리 차이
일반폼 :
- 각 입력 필드의 상태를 useState 로 관리해야함
- 모든 입력값의 상태를 관리 가능, 값이 바뀔떄마다 전체 컴포넌트가 리렌더링 될 수 있음
- 검증 로직을 직접 다 작성해야함
- 폼 제출 시 각 입력 필드의 상태들을 모아서 폼 데이터를 수집해야함
- 간단한 폼 양식 작성 시 사용

RHF 라이브러리 
- 코드의 간결화
- 비제어 컴포넌트 / 필요한 경우에만 리렌더링 된다
- 다양한 검증 규칙을 쉽게 설정 가능
- handleSubmit 하나로 모든 폼데이터를 쉽게 관리
- 복잡하고 대규모 폼 양식을 작성할 떄 사용

*/

