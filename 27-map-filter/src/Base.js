import React from 'react'

export default function Base() {
    /*
    # arr.map(callbackFuntion, [thisArg]) 분석
    - callbackFunction : 배열의 각 요소를 순회하며 반복 실행할 함수
    (currentValue, index, array) 3개의 인수를 가짐
    - currentValue : 배열의 현재 요소
    - index : 현재 요소의 인덱스(위치, 순번), (선택)
    - array : map() 이 호출된 원본 배열, (선택)
    
    -[thisArg] : callbackFunction 내부에서 this 로 사용할 값을 지정(선택)
    만약 이 인수가 제공되지 않으면 undefined 가 기본값으로 설정(지정안하고 map 함수 내부에서 this 호출 시 undefined 반환)

    - 모든 배열 뒤에 .map
    - array 자료의 개수만큼 함수안에 코드를 실행
    - return 안에 있는 것들을 array 로 반환
    - index => 반복을 돌때마다 0부터 1씩 증가
    */

    // 원본 배열
    const numbers = [10,20,30,40];

    // map() 함수 사용
    const Items = numbers.map((value, idx, arr)=> {
        // console.log('현재 값', value); 
        // console.log('인덱스', idx); 
        // console.log('원본 배열', arr); 

        return (
            <li key={idx}>
                값 : {value}, 인덱스 : {idx}, 배열 : {arr.join(',')}
            </li>
        )

    })

    // filter() 함수 사용
    let animals = ['dog', 'cat', 'rabbit']
    let newAnimals = animals.filter((animal)=> {
      return animal.length > 3
    })
    
    let words = ['dog', 'cat', 'rabbit']
    let result = words.filter(word => word.includes('a'))

    

  return (
    <div>
      <h1>Map (1)</h1>
      {/* 함수 사용 */}
      <ul>{Items}</ul>

      <h1>Map (2)</h1>
      {/* return 문 안에 map() 함수 직접 작성 */}
      <ul>
        {numbers.map((value, idx, arr)=> <li key={idx}>값 : {value}, 인덱스 : {idx}, 배열 : {arr.join(',')}</li>)}
      </ul>
      <h1>Filter (1)</h1>
      <ul>{newAnimals.join(',')}</ul>
      <h1>Filter (2)</h1>
      <ul>{result.join(',')}</ul>


    </div>
  )
}

/*
    Q) forEach 와 map의 차이점
    * 공통점 : 배열의 각 요소를 순회하는 메서드

    * 차이점
    - forEach : 
    배열의 각 요소에 대해 주어진 함수를 실행하는 것이 목적
    반환값이 없음
    배열을 순회하면서 각 요소에 대해 이벤트를 발생시키는데 사용

    - map : 
    배열의 각 요소를 변형하여 새로운 배열을 생성하는 것이 목적
    변형된 요소들로 구성된 새로운 배열 반환
    원본 배열은 변경되지 않음

    * 결론
    - 데이터 변형이 필요하거나 변형된 데이터를 가지고 추가적인 작업을 해야 할때 -> map 사용
    - 단순히 배열을 순회하며 각 요소에 대해 작업을 수행할 때 -> forEach 사용
*/
