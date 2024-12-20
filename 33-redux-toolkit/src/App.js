import { useDispatch, useSelector } from 'react-redux';
import './styles/Box.css'
import { minus, plus } from './store/counterSlice';
import { changeVisibility } from './store/isVisibleSlice'

function App() {
  // #7. useSelector Hook 사용하여 Redux 스토어에서 상태 읽어오기
  // Redux 상테에서 number 값 선택

  const state = useSelector((state)=>state) 
  const number =  useSelector((state)=>state.counter.number);
  console.log(state);
  // console.log(state.counter);// {counter : {number : 100}, isVisible : true}

  return (
    <div className="App">
      <h1>React Redux Ex3</h1>
      <h2>Redux Toolkit 사용</h2>
      <h2>리듀서 추가</h2>  
      <h2>number : { number }</h2>
      <Box1/> 
    </div>
  );
}

// Box1 컴포넌트
const Box1 = () => {
  return (
    <div className='Box'>
      <h2>Box 1 : </h2>
      <Box2/>
    </div>
  )
}
// Box2 컴포넌트
const Box2 = () => {
  return (
    <div className='Box2'>
      <h2>Box 2 : </h2>
      <Box3/>
    </div>
  )
}
// Box3 컴포넌트
const Box3 = () => {
  return (
    <div className='Box3'>
      <h2>Box 3 : </h2>
      <Box4/>
    </div>
  )
}
// Box4 컴포넌트
const Box4 = () => {
  // #4. useSelector, useDispatch 사용
  const number = useSelector((state)=>state.counter.number)
  const isVisible = useSelector((state)=>state.visible);
  const dispatch = useDispatch();

  return (
    <div className='Box4'>
      <h2>Box 4 : {number} </h2>
      <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}"</h2>
      <button onClick={()=>dispatch(plus(5))}>PLUS</button>
      <button onClick={()=>dispatch(minus(5))}>MINUS</button>
      {/* change 버튼 클릭하면 '참', '거짓' 글자 토글  */}
      <button onClick={()=>dispatch(changeVisibility())}>Change</button>
    </div>
  )
}


export default App;