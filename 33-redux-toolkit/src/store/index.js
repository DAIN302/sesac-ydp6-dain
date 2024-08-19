// [ Toolkit 사용 ]
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice' // import 시 이름을 마음대로 
import isVisibleReducer from './isVisibleSlice';
import moneyReducer from './moneySlice';


// #2. store 생성
// - configureStroe 사용하여 스토어 생성


// - 'configureStore' : redux toolkit 에서 제공하는 함수, 스토어를 더 쉽게 설정 가능하게 해줌
const store = configureStore({
    reducer : {
        counter : counterReducer, 
        visible : isVisibleReducer,
        money : moneyReducer
    }
})

export default store;