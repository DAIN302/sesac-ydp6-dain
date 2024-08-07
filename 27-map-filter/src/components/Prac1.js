import React, { useState } from 'react'

export default function Prac1() {
    const [infos, setInfos] = useState([])
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')

    // 정보 추가
    const addInfo = (e) => {
        e.preventDefault()

        const name = inputName.trim()
        const email = inputEmail.trim()
        if(name === '' || email === '') return;

        const newInfos =  infos.concat({
            id : infos.length + 1,
            name : inputName,
            email : inputEmail
        })

        setInfos(newInfos)
        setInputName('')
        setInputEmail('')
    }

    // 정보 삭제
    const deleteInfo = (targetId) => {
        const newInfo = infos.filter(info => info.id !== targetId)
        setInfos(newInfo)
    }


  return (
    <div>
      <form>
        <input type='text' placeholder='이름' value={inputName} onChange={(e) => setInputName(e.target.value)}/>
        <input type='email' placeholder='이메일' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>
        <button onClick={addInfo}>등록</button>
      </form>
      <ul>
        {   
            infos.length > 0 &&
            infos.map(info => <li key={info.id} onDoubleClick={() => deleteInfo(info.id)}>{info.name} : {info.email}</li>)
        }
      </ul>
    </div>
  )
}
