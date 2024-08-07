import React, {useRef} from 'react'

export default function RefSample() {
    // 1. ref 객체 생성
    const inputRef = useRef()

    // 3. useRef() 를 이용해서 만든 객체의 current 값에 focus() DOM API 사용
    const handleFocus = () => {
        // console.log(inputRef);
        // console.log(inputRef.current);

        // **current 
        // - ref 객체가 가리키는 값을 저장하는 곳

        // useRef() 훅이 반환하는 'ref' 객체의 속성
        // DOM 요소 참조 : 'useRef'를 통해 DOM 요소에 접근할 때, 해당 DOM 요소가 current에 저장됨
        inputRef.current.focus()
    }
 
  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭 시 input 에 focusing 처리</p>
      {/* 2. 직접 접근하고 싶은 DOM 요소에 ref props 설정 */}
      <input type='text' ref={inputRef}/>
      <button onClick={handleFocus}>Focus</button>
    </div>
  )
}
