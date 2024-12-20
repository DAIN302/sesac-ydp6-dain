import { useDispatch, useSelector } from 'react-redux';
import './styles/Box.css'

function App2() {
  // #7. useSelector Hook 사용하여 Redux 스토어에서 상태 읽어오기
  // Redux 상테에서 number 값 선택

  // const number =  useSelector((state)=>state);
  const number =  useSelector((state)=>state.number);
  // console.log(number); // {number : 100}
  // console.log(number2); // 100

  return (
    <div className="App">
      <h1>React Redux Ex2</h1>
      <h2>Redux를 사용</h2>
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
  // #8. useDispatch 로 액션을 디스패치하는 함수 가져오기
  // - 이 함수를 사용해서 상태 업데이트
  // Redux 상태에서 number값을 선택하고, 액션을 디스패치 할 준비
  const number = useSelector((state)=>state.number)
  const dispatch = useDispatch();

  return (
    <div className='Box4'>
      <h2>Box 4 : {number} </h2>
      <button onClick={()=>dispatch({type : 'counter/plus'})}>PLUS</button>
      <button onClick={()=>dispatch({type : 'counter/minus'})}>MINUS</button>
    </div>
  )
}


export default App2;