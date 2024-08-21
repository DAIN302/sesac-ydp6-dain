import React from 'react'

// 인터페이스 설정 
interface CardProps {
    title : string,
    children : React.ReactNode
}

/*
    React.ReactNode
    - 리액트에서 가장 유연하고 광범위한 타입
    - 컴포넌트가 자식으로 받을 수 있는 모든 형태의 값을 정의
*/


// #1. children 직접 전달
/*
export default function Card({title, children} : CardProps) {
  return (
    <div>
        <h1>{title}</h1>
        <div>{children}</div>
    </div>
  )
}
*/

// #2. React.FC (children 자동 전달)
// React 18 이후로 변경 -> 자동 전달 x / children에 대한 type도 명시적으로 적어줄 것
const Card:React.FC<CardProps> = ({title, children}) => { // <React.PropsWithChildren> children 타입 명시 안했을 떄는 얘도 같이 써야함
  return (
    <div>
        <h1>{title}</h1>
        <div>{children}</div>
    </div>
  )
}

export default Card