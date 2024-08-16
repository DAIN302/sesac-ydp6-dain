import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
    const { productId } = useParams();
    // console.log(productId);

    const navigate = useNavigate();

    const targetProduct =  productInfos[Number(productId) - 1]
    // productId의 type 이 string이기 떄문에 number로 형변환
    
    const {id, userId, title, body} = targetProduct

  return (
    <div>
        <h1>ProductDetailPage</h1>
        <button onClick={()=>navigate(-1)}>뒤로가기</button>
        <button onClick={()=>navigate('/')}>홈으로 이동</button>
        <ul>
            <li>상품번호 :{id}</li>
            <li>상품명 : {title} </li>
            <li>판매자 : {userId} </li>
            <li>상세설명 : {body} </li>
        </ul>
    </div>
  )
}

/*
    navigate() 숫자 인자 의미
    양수 숫자('n')
    - 현재 페이지에서 'n' 페이지 앞으로 이동
    ex) 1 = 다음 페이지
    
    음수 숫자('-n')
    - 현재 페이지에서 'n' 페이지 뒤로 이동
    ex) -1 = 이전 페이지
*/
