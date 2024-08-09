import React, {useState, useCallback} from 'react'

// 해당 함수가 의존성의 변화와 관계없이 동일한 로직을 유지해야할 경우 성능 최적화가 필요할 떄 사용

// 매번 함수를 생성하지 않고, 함수를 기억해두었다가 필요할 때마다 함수 재사용
// 메모는 값! 콜백은 함수! 를 기억함
export default function UseCallbackEx() {
    const [text, setText] = useState('')
    const [number, setNumber] = useState(0)

    // before : useCallback 사용 전
    // const onChangeText = e => {
    //     // text 상태가 업데이트되면 컴포넌트 리렌더링 -> 코드 다시 읽음 
    //     // -> onChangeText 함수 다시 생성
    //     setText(e.target.value)
    // }

    // after : useCallback 적용
    // useCallback 훅으로 함수를 기억해서
    // 컴포넌트가 리렌더링되어도, 의존성 배열에 있는 값이 바뀌지 않는 한 기존 함수 재사용
    const onChangeText = useCallback(
      (e) => {
        console.log('text');
        setText(e.target.value)
      }, [text])

    const onClickNumber = useCallback(
        (e) => {
            console.log('number');
            setNumber(number +1)
        }, [number])


 
  return (
    <div>
        <h1>UseCallbackEx</h1>
        <input type='text' onChange={onChangeText}/>
        <div>작성한 값 : {text || 'no text'}</div>
        <button onClick={onClickNumber}>클릭</button>
        <div>number : {number}</div>
    </div>
  )
}
