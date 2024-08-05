import React, {useState} from 'react'

function CounterPractice2() {
  const [number, setNumber] = useState(0)

  const increase = () =>{
    setNumber(number+1)
  }

  const decrease = () =>{
    setNumber(number-2)
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default CounterPractice2
