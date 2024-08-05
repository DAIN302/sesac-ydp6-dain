import React, {useState} from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)

    const increase = () => {
        setNumber(number + 1)
    }

    // 인자 1개 보내기
    const alertMsg = (msg) => {
        alert(`${msg} 현재 숫자는 ${number} 입니다`)
    }

    // 인자 2개 보내기
    const consoleMsg = (e, msg) => {
        console.log(e.target);
        console.log(`${msg} 현재 숫자는 ${number} 입니다`);
    }

    const handleEvent = (e) => {
        console.log('타켓', e.target);
        // e.target 
        // -> 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소
        console.log('커렌트타겟', e.currentTarget);
        // e.curretTarget 
        // -> 이벤트 핸들러가 있는 요소
    }

  return (
    <div>
        <h1>Number Counter</h1>
        <h2>{number}</h2>
        {/* 함수에 인자가 없는 경우 : 함수 이름만 전달 */}
        <button onClick={increase}>더하기</button>
        {/* 함수에 인자 보내기 */}
        <button onClick={()=>alertMsg('hello')}>alert 출력</button>
        <button onClick={(e)=>consoleMsg(e,'hello')}>console 출력</button>
        {/* target vs currentTarget */}
        <button onClick={handleEvent}><span>handleEvent</span></button>
    </div>
  )
}

export default Counter
