import React, {useState, useMemo} from 'react'

// useMemo
// 메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화
export default function UseMemoEx() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState('') // 재렌더링용

    // useMemo 사용 전
    const calc = () => {
        console.log('열심히 계산중...');
        for(let i = 0; i < 10000000; i++){}
        return count ** 2;
    }
    
    // useMemo 적용
    const calcMemo = useMemo(() => {
        console.log('열심히 계산하는 메모!');
        for(let i = 0; i < 10000000; i++){}
        return count ** 2;
    }, [count]) // count 가 변경될 때만 안에 내용 실행
    // -> input 상태만 바뀌면 컴포넌트는 리렌더링되지만 calc는 연산되지 않음(count의 내용은 바뀌지 않으니깐)


    // useEffect -> 생명주기에 관련할 떄 쓰는 것 
    // useMemo -> 최적화 / 불필요한 반복작업을 안하겠다! 이럴때 쓰는 것

  return (
    <div>
        <h1>useMemo Ex</h1>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={() => setCount(()=>count+1)}>Plus</button>
        <p>count : {count}</p>

        {/* useMemo 사용 전 */}
        <p>calc : {calc()}</p>

        {/* useMemo 적용 */}
        <p>calcMemo : {calcMemo}</p>
        
    </div>
  )
}
