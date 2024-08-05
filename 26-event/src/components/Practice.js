import React, {useState} from 'react'

const Practice = (props) => {
    const [text, setText] = useState('text')
    const [bgc, setBgc] = useState('black')
    const [color, setColor] =useState('white')
    const [fruit, setFruit] = useState('apple')

    const chaSomeThing = (e, setThing) =>  {
        setThing(e.target.value)
    }

  return (
    <div>
      <form>
        <label>과일 : </label>
        <select onChange={(e)=>chaSomeThing(e, setFruit)}>
            <option value='apple'>사과</option>
            <option value='banana'>바나나</option>
            <option value='peach'>복숭아</option>
            <option value='orange'>오렌지</option>
        </select>
        <label>배경색 : </label>
        <select onChange={(e)=>chaSomeThing(e, setBgc)}>
            <option value='black'>검정</option>
            <option value='white'>하양</option>
            <option value='red'>빨강</option>
            <option value='orange'>주황</option>
            <option value='yellow'>노랑</option>
            <option value='green'>초록</option>
            <option value='blue'>파랑</option>
            <option value='purple'>보라</option>
            <option value='pink'>분홍</option>
        </select>
        <label>글자색 : </label>
        <select onChange={(e)=>chaSomeThing(e, setColor)}>
            <option value='black'>검정</option>
            <option value='white'>하양</option>
            <option value='red'>빨강</option>
            <option value='orange'>주황</option>
            <option value='yellow'>노랑</option>
            <option value='green'>초록</option>
            <option value='blue'>파랑</option>
            <option value='purple'>보라</option>
            <option value='pink'>분홍</option>
        </select>
        <br/>
        <label>내용 : </label>
        <input type='text' onChange={(e)=>chaSomeThing(e, setText)}/>
      </form>
      <figure>
        <img src={'./image/'+fruit+'.png'} style={{width : '200px'}}/>
      </figure>
      <div style={{backgroundColor : bgc, color : color, width : '100px', margin : '0 auto'}}>{text}</div>
    </div>
  )
}

export default Practice
