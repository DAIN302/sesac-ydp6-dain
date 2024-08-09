import React, { useState, useEffect } from 'react'

export default function LifeCycleFunctionChild({number}) {
    const [input, setInput] = useState('')

    // useEffect(effect, deps)
    // deps : 의존성 배열 -> 배열값이 변하면 effect 함수 실행

    // #1. Mount 시점에 실행(return X)
    useEffect(()=>{
        console.log('마운트 되었지롱');
    }, [])
    
    // #2. Mount 시점에 실행(return O -> unmount 시점에도 동작이 필요할 때 사용)
    useEffect(()=>{
        console.log('마운트 되었지롱');
        return () => {
            // unmount 시점에 실행
            console.log('꿰꼬닭');
        }
    }, [])

    // #3. 빈배열 생략 버전 mount or update 시점에 실행(의존성 배열 생략)
    useEffect(() => {
      console.log('마운트? 업데이트?');
    })

    // 의존성 배열이 빈배열이므로 위의 두개(#1, #2) 는 렌더링 시 한번 만 실행
    // 의존성 배열을 생략하는 의미는 '렌더링 될때마다(상태변경마다) 실행'하겠다는 것

    //#4. input 상태가 업데이트 될 때 실행
    useEffect(() => {
      console.log('마운트되거나 input 상태가 변경됨에 따라 컴포넌트 업데이트');
    
    }, [input])
    // input 이 배열형태가 아니라도 의존성 배열에 추가 가능
    // 문자열, 숫자형이든 상관없이, 이 값이 변경될 때마다 useEffect가 실행됨 

  return (
    <div style={{color : 'blue'}}>
        자식 컴포넌트
        <div>현재 number 값은 {number} </div>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <p>{input}</p>
    </div>
  )
}
