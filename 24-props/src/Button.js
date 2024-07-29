// props.children 
// 부모 컴포넌트에서 자식 컴포넌트 호출 시 태그 사이에 있는 문자열, 숫자, JSX, 배열 등을 쓰면 보여줌
import './button.css'
import PropTypes from 'prop-types';


const Button = (props) => {
    // console.log('btn props', props); // link : https://www.google.com, children : Google
    //const {link, children} = props
    return (
        <>
            <a href={props.link}>
                <button className='btn'>{props.children}</button>
            </a>
        </>
    )
}

Button.defaultProps = {
    children : 'Naver',
    link : 'https://www.naver.com'
}

Button.propTypes = {
    children : PropTypes.string,
    link : PropTypes.string
}

export default Button;