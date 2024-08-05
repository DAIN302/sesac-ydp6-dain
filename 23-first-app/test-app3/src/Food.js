const Food = (props) => {
    return (
        <h2 style={{color : 'red'}}>내가 제일 좋아하는 음식은 {props.food}</h2>
    )
}

Food.defaultProps = {
    food : '초콜릿'
}

export default Food;

