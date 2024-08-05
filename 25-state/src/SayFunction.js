import React, { useState } from 'react'

const SayFunction = () => {
    // console.log(useState('welcome')); // 자료를 잠시 저장하는 용도

    // ** const [a,b] = useState('')
    // a: state 에 저장할 자료
    // b: state 변경을 도와주는 함수
    // useState('') 상태 초기값(숫자형, 문자열, 배열, 객체 등 값의 형태는 자유로움)

    const [message, setMessage] = useState('안뇽')
    // message : 메세지의 현재 상태
    // setMessage : message state 값을 바꾸는 함수

    // 바뀌는 부분만 재렌더링 -> 비동기적인 모습을 구현

    const onClickEnter = () => {
        setMessage('ㅎㅇㅎㅇ')
    }

    const onClickLeave = () => {
        setMessage('byebye~')
    }

    const handleClick = () => {
        setMessage((currentMessage)=>{
            return currentMessage === '안뇽' ? 'Hi' : 'Bye';
        })
    }
  return (
    <div>
        {/* 
            HTML - onclick = "onclickEvent()" -> 문자열 형식의 호출문 등록
            JS - addEventListner('click', clickEvent) -> 괄호를 없애 함수를 바로 실행 X
            React - onClick={onClickEvent}
        */}
        <h1>Function Component State</h1>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <button onClick={handleClick}>HI</button>
        <h1>{message}</h1>
    </div>
  )
}

export default SayFunction

