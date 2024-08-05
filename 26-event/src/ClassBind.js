import React, { Component } from 'react'

export default class ClassBind extends Component {
    constructor(props){
        // class 형 컴포넌트의 생성자 메서드, 컴포넌트가 처음 생성될 때 호출
        super(props);

        // console.log('constructor this : ', this); // 생성자 내에서 this가 무엇을 가리치는지 출력
        this.state = {
            name : 'sesac'
        }
        // #1. 클래스 컴포넌트에서 이벤트 사용 - bind 사용
        /*
            'bind' 메서드로 'this' 바인딩
            바인딩?
            -> 프로그램의 어떤 기본 단위가 가질 수 있는 구성 요소의 구체적인 값, 성격을 확정짓는 것
            - js에서 this는 함수가 호출되는 방식에 따라 달라짐
            - this 가 무엇을 가리키는지 명확하게 해주기 위해 바인딩이 필요 => this 가 올바른 객체를 가리키도록 설정하는 작업
        */
       // #1. 생성자에서 바인딩하기
       this.printConsole = this.printConsole.bind(this) // this -> 컴포넌트를 객체화시킨것!

    }
    // bind 사용하기
    printConsole(){
         console.log('printConsole this', this); // 컴포넌트 인스턴스를 가리킴
         console.log('printConsole this.state', this.state); // 컴포넌트의 상태 출력
    }

    // #2. 화살표 함수에서 이벤트 사용
    /*
        화살표 함수는 this가 상위 스코프의 this를 참조하므로 바인딩 필요 없음 (렉시컬 스코핑)
        (자신만의 this를 가지지 않음!)
    */

    // evt : 이벤트 객체 / msg,e : 추가로 전달된 인자
    printConsole2 = (evt, msg, msg2) => {
        console.log('evt', evt);
        console.log('evt.target', evt.target);
        console.log('evt.currentTarget', evt.currentTarget);
        console.log('msg', msg);
        console.log('msg2', msg2);
        console.log('this', this); // 클래스 인스턴스
    }

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        {/* 인자 없이 호출 */}
        <button onClick={this.printConsole}>printConsole 인자 X</button>
        {/* 인자 받으면서 호출*/}
        <button onClick={(e)=>this.printConsole2(e,'msg','msg2')}>printConsole2 인자 O</button>
        {/* 이벤트 객체만 전달*/}
        <button onClick={this.printConsole2}>printConsole2 인자 X</button>
      </div>
    )
  }
}
