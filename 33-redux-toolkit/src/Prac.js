import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveMoney, plus, minus } from './store/moneySlice'


export default function Prac() {
    const state = useSelector((state)=>state.money)
    console.log(state);
  return (
    <div>
        <h1>코딩온 은행</h1>
        <Money />
        <MoneyInput />
    </div>
  )
}

const Money = () =>{
    const money = useSelector(state => state.money.money)
    console.log(money);
    return (
        <div>
            잔액 : {money}원
        </div>
    )
}

const MoneyInput = () => {
    let savedMoney = Number(useSelector(state => state.money.saveMoney))
    let inputRef = useRef();
    const dispatch = useDispatch()


    const clickFn = (action) => {
        dispatch(action(savedMoney))
        inputRef.current.value = ''
    }

    return (
        <div>
            <input type='number' onChange={(e)=>dispatch(saveMoney(e.target.value))} ref={inputRef} />
            <button onClick={()=>clickFn(plus)}>입금</button>
            <button onClick={()=>clickFn(minus)}>출금</button>
        </div>
    )
}