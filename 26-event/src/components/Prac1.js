import React, {useState} from 'react'
import Select from './Select'
import Input from './Input'
import Result from './Result'

// 종합 실습 리더님 해답1
// 상태관리를 한 번에 하는 방법
export default function Prac1() {
    const [data, setData] = useState({
        fruit : 'apple',
        bgc : 'black',
        color : 'white',
        content : 'text'
    })
  return (
    <>
        <div>
            <Select setData={setData}/>
        </div>
        <div>
            <Input setData={setData}/>
        </div>
        <div>
            <Result data={data}/> 
        </div>
    </>
  )
}
