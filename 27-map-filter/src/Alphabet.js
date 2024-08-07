import React, { useState } from 'react'

export default function Alphabet() {
    // const [alphabet, setAlphabet ] = useState(['b', 'a', 'n', 'a', 'n', 'a'])
    
    // 배열 안에는 객체 형태
    const [alphabet, setAlphabet ] = useState([
        {id : 1, alpha : 'a'},
        {id : 2, alpha : 'p'},
        {id : 3, alpha : 'p'},
        {id : 4, alpha : 'l'},
        {id : 5, alpha : 'e'},
    ])

    const [inputAlpha, setInputAlpha] = useState('');

    // 알파벳 추가하는 함수
    const addAlpha = () => {
        // Q) input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기
        const input = inputAlpha.trim()
        if(input===''){
            return
        }

        // concat 
        // 원본 배열을 변경하지 않고, 주어진 배열이나 값들을 새로운 배열로 결합하여 반환
        // push() 메서드와 비슷하지만 원본배열을 변경하지 않는 점이 다르다 (push는 기존 배열에 추가하는 것, concat은 새로운 배열에 결합해서 반환)

        const newAlpha = alphabet.concat({
            id : alphabet.length + 1,
            alpha : inputAlpha
        })

        setAlphabet(newAlpha)
        setInputAlpha('') // 입력 칸 초기화
    }

  return (
    <div>
      <h1>Map & Filter</h1>
      <ol>
        {/* 배열 ex */}
        {/* {alphabet.map((value, index) => <li key={index}>{value}</li>)} */}
        {/* 객체 ex */}
        {alphabet.map((value)=><li key={value.id}>{value.alpha}</li>)}
      </ol>

      {/* 알파벳 추가해보기 */}
      <input type='text' placeholder='알파벳 입력' value={inputAlpha} onChange={(e)=>{setInputAlpha(e.target.value)}} 
      onKeyDown={(e)=>{if(e.keyCode === 13){addAlpha()}}} />
      <button onClick={addAlpha}>클릭</button>
    </div>
  )
}
