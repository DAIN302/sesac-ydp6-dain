import React, {useState} from 'react'
import SelectColor from './SelectColor'
import SelectFruit from './SelectFruit'

const Practice = (props) => {
    const [text, setText] = useState('text')
    const [bgc, setBgc] = useState('black')
    const [color, setColor] =useState('white')
    const [fruit, setFruit] = useState('apple')

    const chgSomeThing = (e, setThing) =>  {
        setThing(e.target.value)
    }

  return (
    <div>
      <form>
        <label>과일 : </label>
        <SelectFruit fruit={(e)=>chgSomeThing(e, setFruit)}/>
        <label>배경색 : </label>
        <SelectColor color={(e)=>chgSomeThing(e, setBgc)}/>
        <label>글자색 : </label>
        <SelectColor color={(e)=>chgSomeThing(e, setColor)}/>
        <br/>
        <label>내용 : </label>
        <input type='text' onChange={(e)=>chgSomeThing(e, setText)}/>
      </form>
      <figure>
        <img src={'./image/'+fruit+'.png'} style={{width : '200px'}}/>
      </figure>
      <div style={{backgroundColor : bgc, color : color, width : '100px', margin : '0 auto'}}>{text}</div>
    </div>
  )
}

export default Practice
