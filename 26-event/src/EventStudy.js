import React, { useState } from 'react'

/*
// 이벤트 핸들러
   특정 이벤트가 발생했을 때 실행되는 함수
   보통 이벤트 객체를 매개변수로 받아서 이벤트에 대한 정보를 접근하고 처리 

// 이벤트 객체
   이벤트가 발생한 요소와 관련된 정보를 담고 있음
   
----------------------------------------------------------
이벤트 객체를 사용하지 않아도 이벤트 핸들러 작동 가능
이벤트 객체는 추가적인 정보를 제공하는 역할일 뿐, 반드시 사용해야 하는 것은 아님

** 리액트 이벤트 핸들러는 기본적으로 이벤트 객체를 자동으로 전달
- 순수 JS, html -> 얘네는 이벤트 핸들러를 설정할 때, 브라우저가 이벤트 객체를 자동으로 전달해줌

*/
export default function EventStudy() {
    const [count, setCount] = useState(0)
    const [position, setPosition] = useState({x : 0, y : 0})
    const [message, setMessage] = useState('')

    const handleClick = (e) => {
        setCount(count+1)
        // console.log(e.target);
    }

    // 이벤트 객체를 사용한 상태 업데이트
    const handleClickWithEvent = (e) => {
        setCount(count + 1)
        // 클릭한 위치의 좌표를 상태에 저장
        setPosition({x : e.clientX, y : e.clientY})
    }
    
    // 매개변수를 사용하는 handler
    const handleClickWithParams = (e, msg) => {
        setCount(count+1)
        setPosition({x : e.clientX, y : e.clientY})
        console.log('메시지',msg);
    }

    const messageFn = (e) => {
        setMessage(`호출 ${e}`)
        console.log('msgFn',e);
    }

    const messageClick = () => {
        messageFn('안녕')
    }
  return (
    <div>
      {/* 이벤트 객체 없이 handleClick 함수 호출 */}
      <button onClick={handleClick}>click</button>
      <div>클릭 횟수 : {count}</div>
      <hr/>
      {/* onClick 핸들러 함수에서 이벤트 객체는 자동으로 매개변수 전달 */}
      <button onClick={handleClickWithEvent}>click</button>
      <div>
        클릭 위치 - x:{position.x}, y: {position.y}
      </div>
      <hr/>
      {/* 매개변수를 사용하여 함수 호출 */}
      {/* 이벤트 객체를 직접 보내는 이유? 핸들러 함수에 추가적인 매개변수를 전달하기 위해서 */}
      <button onClick={(e)=>handleClickWithParams(e, '메롱')}>click</button>
      <hr/>
      {/* 클릭 시 함수 호출 */}
      <button onClick={messageClick}>click</button>
      <div>메시지 : {message}</div>


    </div>
  )
}
