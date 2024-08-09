import './App.css';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';

function App() {
  return (
    <div className="App">
      {/* <UseMemoEx /> */}
      <UseCallbackEx />
      <UseCallbackEx2 postId={14} />
    </div>
  );
}

export default App;


/*
  useEffect -> 생명주기
  useMemo -> 최적화, 값이 잘 바뀌지 않을때? 메모이제이션, 연산에 의한 값 전달, 값을 저장
  useCallback -> 최적화, 메모이제이션, 함수를 저장
*/