import React from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
    render(){
        const {text, valid} = this.props

        return(
            <>
                <div>{text}</div>
                <button onClick={()=>console.log(valid)}>버튼</button>
            </>
        )
    }

    static defaultProps = {
        text: '이건 기본 text props 입니다.',
    }

    static propTypes = {
        text: PropTypes.string,
    }
}

export default ClassComponent;