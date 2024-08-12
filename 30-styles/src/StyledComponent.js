import React from 'react'
import styled from 'styled-components'

// CSS in JS : JS 안에 CSS 작성
// 자동으로 고유한 클래스 이름 생성
// props 를 사용하여 동적으로 스타일을 변경
const StyledContainer = styled.div`
    display: flex;
    gap : 0 20px;
`

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props)=>props.bgColor || 'skyblue'}; // 화살표 함수로 props 전달
    transition: all, .4s;
    &:hover {
        transform: translateY(-20px);
        background-color: lightblue;
    }
`

export default function StyledComponent() {
  return (
   <>
    <StyledContainer>
        <StyledBox bgColor='pink'>1</StyledBox> 
        {/* props 로 컬러값 전달 */}
        <StyledBox>2</StyledBox>
        <StyledBox>3</StyledBox>
        <StyledBox>4</StyledBox>
    </StyledContainer>
   </>
  )
}
