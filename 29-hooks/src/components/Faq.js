import React from 'react'
import useToggle from '../hooks/useToggle'

export default function Faq() {
    const [isFaqOpen, setIsFaqOpen] = useToggle()
    // return [value, toggleValue]
    // console.log(isFaqOpen, setIsFaqOpen);
  return (
    <div>
        <h1>custom hooks</h1>    
        <div onClick={setIsFaqOpen} style={{cursor: 'pointer'}}>Q. 리액트에서 커스텀 훅 만들 수 있습니까?</div>
        {/* {isFaqOpen ? <div>쌉가능 ㅇㅇ</div> : <div>ㄴㄴ</div>} */}
        {isFaqOpen && <div>쌉가능 ㅇ</div>}
    </div>
  )
}
