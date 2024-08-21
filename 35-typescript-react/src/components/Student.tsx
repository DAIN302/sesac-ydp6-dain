import React from 'react'

// Student 컴폰넌트의 props 타입 정의
interface StudentInfo {
    name : string;
    grade : number;
    part? : string;
    handleClick : (name : string, grade : number) => void;
}

// #1. function 선언형 컴포넌트의 타입 정의
// - React.FC 사용 안함 -> React.FC : 함수형 컴포넌트 타입이라고 명시해주는 것
/*
export default function Student({name, grade, part, handleClick}: StudentInfo) { //interface에서 정의된 것들은 props 로 넘겨받지 않더라도 써줘야댐
  return (
    <div onClick={()=>handleClick(name, grade)}>
        <ul>
            <li>이름 : {name} </li>
            <li>학년 : {grade} </li>
            <li>전공 : {part || '안알려줄거지롱'} </li> 
        </ul>
    </div>
  )
}

*/


// #2. 화살표 함수 컴포넌트 타입 정의
// - React.FC 를 써도되고 안써도 되긴 함
/*
    React.FC : React.FunctionsComponent -> 리액트 함수형 컴포넌트를 정의할 때 유용한 타입 정의 도구
    'children' 자동 포함 : 기본적으로 'children' prop을 자동으로 포함
    'children' 필요없으면 안쓰고 직접 'props' 타입을 정의하는게 더 나음

    근데 논재 있음 이유?
    children이 존재한다는 가정하에 사용하기 때문에 TS를 사용하는 의미가 있나????
    children의 타입을 명확하게 안해주면? -> TS를 쓰는 이유가 있냐?
    children의 타입을 명확하게 해주면? -> React.FC 뭐하러 씀?
    => 그래서 지양함
*/

// 1. 사용하는 버전
// 인터페이스와 제너릭이 필요함
/*
const Student:React.FC<StudentInfo> = ({name, grade, part, handleClick}) => { // 제너릭으로 타입 명시함
  return (
    <div onClick={()=>handleClick(name, grade)}>
        <ul>
            <li>이름 : {name} </li>
            <li>학년 : {grade} </li>
            <li>전공 : {part || '안알려줄거지롱'} </li> 
        </ul>
    </div>
  )
}
*/
// 2. 사용하지 않는 버전
const Student = ({name, grade, part, handleClick} : StudentInfo) => {
  return (
    <div onClick={()=>handleClick(name, grade)}>
        <ul>
            <li>이름 : {name} </li>
            <li>학년 : {grade} </li>
            <li>전공 : {part || '안알려줄거지롱'} </li> 
        </ul>
    </div>
  )
}


export default Student


