import React, { Component } from 'react'

export default class RefSample4 extends Component {
  // 컴포넌트 내부에서 변수에 React.createRef() 담기
  inputRef = React.createRef();

  handleFocus = () => {
    console.log(this.inputRef); // 클래스 자신
    // ref 설정 후, DOM 접근을 위해서는 this.inputRef.current까지 접근
    this.inputRef.current.focus()
  }
  
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭 시 input에 focusing 처리(내장함수 createRef)</p>
        <input type='text' ref={this.inputRef}/>
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    )
  }
}
