import React from 'react'

export default function SelectFruit(props) {
  return (
    <select onChange={props.fruit}>
        <option value='apple'>사과</option>
        <option value='banana'>바나나</option>
        <option value='peach'>복숭아</option>
        <option value='orange'>오렌지</option>
    </select>
  )
}
