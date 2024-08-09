import React, { useState } from 'react'
import LifeCycleFunctionChild from './LifeCycleFunctionChild';

// 부모 컴포넌트
export default function LifeCycleFunction() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true)

    const changeNumber = () => {
        setNumber(number + 1)
    }

    const changeVisible = () => {
        setVisible(!visible)
    }

  return (
    <div style={{background : 'pink'}}>
        <button onClick={changeNumber}>Plus</button>
        <button onClick={changeVisible}>On / Off</button>
        {/* 자식 컴포넌트 다루기 */}
        { visible && <LifeCycleFunctionChild number={number}/> }
    </div>
  )
}
