import React, {useState} from 'react'

const ChgColor = () => {
  const [colortxt, setColortxt] = useState('검정색')
  const [color, setColor] = useState('black')

  const chgColor = (e) => {
    let txt = e.target.innerText;
    let datatype = e.target.getAttribute('data-type')
    console.log(datatype);
    setColortxt(txt);
    setColor(datatype);
  }
  return (
    <div>
      <h1 style={{color : color}}>{colortxt}글씨</h1>
      <button onClick={chgColor} data-type='red'>빨간색</button>
      <button onClick={chgColor} data-type='blue'>파란색</button>
    </div>
  )
}

export default ChgColor
