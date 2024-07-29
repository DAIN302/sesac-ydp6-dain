import './App.css';
import Larva from './Larva';

function App() {
  const name = 'DAIN';
  const student = 'sesac';
  const style = {
    backgroundColor : 'pink',
    color : '#fff',
    fontSize : '40px'
  }

  return (
    <>
      {/* 자동 생성 코드는 지움 */}

      {/* JSX 문법 */}
      {/* #1. 하나로 감싸인 요소 */}
      {/* 의미없는 div 싫어! -> <></> Fragment 문법 */}

      {/* #2 JS 문법 사용 */}
      {/* {}로 감싸면 js 표현식 사용 가능, 삼항연산자 사용 가능(if문, for문은 사용불가) */}
      <div className='App'>
        <div style={style}>{name}안녕</div>
        <div>{student === 'sesac' ? <span>새싹크루</span>: <span>새싹이 뭐야</span>}</div>
      </div>
      {/* #3 style 속성 */}
      {/* 리액트에서 DOM 요소에 스타일 적용 시 문자열 X -> 객체 사용 */}
      {/* {{스타일명 : 값}} */}
      {/* 스타일 이름 중 하이픈(-) 포함 시 camelCase 로 작성해야함 ex)backgroundColor */}
      {/* 1. 스타일을 객체로 만들어서 넣는 방법 */}
      <div style={style}>스타일 적용</div>
      {/* 2. 스타일을 직접 넣는 방법 */}
      <div style={{backgroundColor : 'yellow', color : 'blue'}}>스타일 적용2</div>
      {/* #4. className */}
      {/* class 대신 className 사용 */}

      {/* #5. 클로징 태그가 없는 태그 사용 */}
      {/* html에서는 클로징 태그 안해줘도 되었지만 여기서는 클로징 태그 해야함  */}
      {/* <img src="" /> , <input type="text" /> */}

      {/* 6. 주석 : jsx 외부 주석 지금 여기에 쓰고 있는 그거 */}

      {/* 애벌레 컴포넌트 불러오기 */}
      <Larva />
    </>
  );
}

export default App;
