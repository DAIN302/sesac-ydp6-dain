import React, {useState} from 'react'


// 종합 실습 리더님 해답2
// 상태관리를 따로 하는 방법
export default function Prac2() {
    const [fruit, setFruit] = useState('peach')
    const [bgc, setBgc] = useState('pink')
    const [color, setColor] =useState('black')
    const [text, setText] = useState('text')

    function Typing(e) {
        setText(e.target.value)
    }

    const fruitChange = (e) => {
        setFruit(e.target.value)
    }

    const bgcChange = (e) => {
        setBgc(e.target.value)
    }
    const colorChange = (e) => {
        setColor(e.target.value)
    }

  return (
    <div>
      과일 :
      <select onChange={fruitChange}>
        <option value='peach'>복숭아</option>
        <option value='apple'>사과</option>
        <option value='banana'>바나나</option>
      </select>
      배경색 : 
      <select onChange={bgcChange}>
        <option value='pink'>분홍</option>
        <option value='yellow'>노랑</option>
        <option value='skyblue'>하늘</option>
      </select>
      글자색 : 
      <select onChange={colorChange}>
        <option value='pink'>분홍</option>
        <option value='yellow'>노랑</option>
        <option value='skyblue'>하늘</option>
      </select>
      <div>
        내용 : <input type='text' onChange={Typing}/>
      </div>
      <div>
        <img src={'./image/'+fruit+'.png'}/>
      </div>
      <div style={{backgroundColor : bgc, color : color}}>
        {text}
      </div>
    </div>
  )
}

