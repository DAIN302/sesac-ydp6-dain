// 함수형 컴포넌트
// 직관적으로 함수 이름을 만들고, 보여줄 html 요소를 return 내에 작성
// 화살표 함수(함수표현식), 함수선언문 둘 다 사용 가능

// 함수표현식
const FunctionComponent = (props) => {
    const teacher = 'Damon';
    const {name} = props
    console.log('function props', props);

    return (
        <>
            <h1>Hi~ {teacher}</h1>
            <p>여기는 Funtional Component 다</p>
            {/* props 사용 */}
            <p>새로운 컴포넌트의 이름은 <b>{props.name}</b></p>
            {/* <p>{name}</p> */}
        </>
    )
}

export {FunctionComponent}

// 왜 log 두 번 찍힘?
// Raact 18 부터 React.StrictMode 기본적으로 활성화
// 이는 개발 모드에서 컴포넌트의 렌더링과 라이플사이클 메서드 두 번 호출되도록 하여 부작용을 테스트하고 식별하는데 도움 줌 이로인해서 두번 찍힐 수 있음
