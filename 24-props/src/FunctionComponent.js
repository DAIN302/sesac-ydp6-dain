// 함수형 컴포넌트
// 직관적으로 함수 이름을 만들고, 보여줄 html 요소를 return 내에 작성
// 화살표 함수(함수표현식), 함수선언문 둘 다 사용 가능
import PropTypes from 'prop-types';

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

// defaultProps : 부모 컴포넌트에서 props 미전달 시 기본값을 보여줄 props 설정 // 얘는 다음 업데이트에 없어질지도 모른댕
FunctionComponent.defaultProps = {
    name : '메롱'
}

// propTypes : 컴포넌트의 필수 props 를 지정하거나 props 타입을 지정할 때
// Typescript가 아닌 JS의 유연한 특성 때문에 문제 생길 수 있는데, 이를 해결하기 위해 권장
FunctionComponent.propTypes = {
    // 프로퍼티의 자료형을 객체 형태로 지정하여 FunctionComponent.propTypes 저장
    name : PropTypes.string
    // 'string' 타입이자 '필수값'으로 지정 -> props를 반드시 제공해야함
}

export {FunctionComponent}

// 왜 log 두 번 찍힘?
// Raact 18 부터 React.StrictMode 기본적으로 활성화
// 이는 개발 모드에서 컴포넌트의 렌더링과 라이플사이클 메서드 두 번 호출되도록 하여 부작용을 테스트하고 식별하는데 도움 줌 이로인해서 두번 찍힐 수 있음
