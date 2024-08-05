import './best.css'

const BestSeller = (props) => {
    return (
        <div className='best'>
            <h2>이번주 베스트 셀러</h2>
            <img src={props.img}/>
            <h3>{props.title}</h3>
            <p>저자 : {props.author}</p>
            <p>판매가 : {props.price}</p>
            <p>구분 : {props.type}</p>
        </div>
    )
}

export default BestSeller;