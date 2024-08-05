import React from 'react'

export default function SyntheticEvent() {
    function systheicEvnet(e) {
        console.log('syntheticEvent 버튼 클릭');
        console.log(e);
        // 콘솔에 찍히는 e객체는 합성 이벤트 (합성된, 인공적으로 만들어진) -> 리액트가 만들어낸 이벤트 객체
        // 브라우저마다 이벤트 이름과 종류 등 이벤트를 처리하는 방식이 다르기 때문에 
        // 이를 동일하게 처리하기 위해 리액트에서 사용하는 이밴트 객체
        // ex) e.preventDefault()
        // 합성 이벤트는 리액트가 모든 브라우저에서 일관된 방식으로 이벤트를 처리할 수 있게 해주는 도구!
    }

    function printInputValue(e){
        console.log(e.target.value);
    }
  return (
    <div>
      <h1>SyntheticEvent</h1>
      <button onClick={systheicEvnet}>콘솔에 찍기</button>
      <br/>
      <input type='text' placeholder='입력하세요' onChange={printInputValue} />
    </div>
  )
}
