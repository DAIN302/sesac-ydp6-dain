import React, {useReducer} from 'react'

// useReducer
// useState 에서보다 복잡한 상태관리가 필요한 경우에 사용
// 업데이트 로직을 컴포넌트 외부로 뺄 수 있는 장점!

// #1. 초기 상태값 정의
const initState = {value : 0}

// #2. reducer 함수 정의
// 이 함수는 현재 상태와 액션을 받아 새로운 상태를 반환
const reducer = (prevState, action) => { // 매개변수 이름은 바꿔도 됨
    // prevState = 현재 상태 / action = 액션
    console.log('prevState >>> ',prevState);
    
    console.log('action >>> ',action);

    // action은 dispatch로 전달
    // action
    switch(action.type){
        case 'INCREMENT' : return {value : prevState.value+1}
        case 'DECREMENT' : return {value : prevState.value-1}
        case 'RESET' : return {value : 0}
        default : return {value : prevState.value}
    }
}

export default function UseReducerEx() {
    // #3. useReducer 훅 사용
    const [state, dispatch] = useReducer(reducer, initState);
    // state : 현재 상태
    // dispatch : action 을 발생시키는 함수 (state가 어떻게 변경되어야 하는지에 대한 힌트)
    // reducer : state를 업데이트 하는 함수

    console.log('state >>>', state); // {value : 0}

    // #4. 액션 핸들러 함수 정의
    // 이 함수들은 dispatch를 호출해서 액션 발생
    const increment = () => dispatch({type : 'INCREMENT'})
    const decrement = () => dispatch({type : 'DECREMENT'})
    const reset = () => dispatch({type : 'RESET'})

  return (
    <div>
        <h1>UseReducerEx</h1>
        <h2> {state.value} </h2>
        {/* #5. 컴포넌트 렌더링 */}
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

// 값 순서 
// #4 > #3 > #2
