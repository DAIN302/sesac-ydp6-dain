import React, {useState} from 'react'

export default function ShowText() {
    const [btnTit, setBtnTit] = useState('사라져라')
    const [title, setTitle] = useState('안녕하세요')

    const showText = (e) => {
        let btnText = e.target.innerText;
        // btnText === '사라져라' ? setBtnTit('보여줘') : setBtnTit('사라져라');
        const h1 = e.target.nextSibling
        if(btnText === '사라져라'){
            setBtnTit('보여줘')
            h1.style.display = 'none';
        } else {
            setBtnTit('사라져라')
            h1.style.display = 'block';
        }
    }
    
  return (
    <div>
      <button onClick={showText}>{btnTit}</button>
      <h1>{title}</h1>
    </div>
  )
}
