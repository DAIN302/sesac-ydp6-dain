// 컴포넌트 작성법
// 1. 함수 만들기
// 2. return () 안에 html 작성
// 3. <함수명 /> 도 가능

// 화살표 함수도 가능

// 언제 사용하면 좋을까?
// 반복적인 html 축약 버전으로 사용
// 큰 페이지 구성 시
// 자주 변경되는 UI -> 헤더나 푸터같은거에
// 장점 : html 하드코딩을 피할 수 있음, 다른사람이나 미래의 내가 봐도 이 컴포넌트가 무슨 용도인지 쉽게 알 수 있음

// 지역변수 개념임
import './larva.css'

function Larva(){
    return (
        <>
            <div class="container">
                <div class="worm worm1">
                    <div class="eye">
                        <div class="eyeball"></div>
                    </div>
                </div>
                <div class="worm worm2"></div>
                <div class="worm worm3"></div>
                <div class="worm worm4"></div>
                <div class="worm worm5"></div>
                <div class="grass"></div>
            </div>
        </>
    )
}

export default Larva;