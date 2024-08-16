import React from 'react'
import { useParams } from 'react-router-dom'
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
    const { productId } = useParams();
    // console.log(productId);

    const targetProduct =  productInfos[Number(productId) - 1]
    // productId의 type 이 string이기 떄문에 number로 형변환
    
    const {id, userId, title, body} = targetProduct

  return (
    <div>
        <h1>ProductDetailPage</h1>
        <ul>
            <li>상품번호 :{id}</li>
            <li>상품명 : {title} </li>
            <li>판매자 : {userId} </li>
            <li>상세설명 : {body} </li>
        </ul>
    </div>
  )
}
