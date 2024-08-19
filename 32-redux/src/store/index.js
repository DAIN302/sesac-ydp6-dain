// reducer 종합 관리
// #5. rootReducer 작성
// [Redux 전통 방식]
// combineReducers : 여러 개의 리듀서를 하나로 결합

import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";

const rootReducer = combineReducers({
    counter : counterReducer, // counter 상태 관리 리듀서
    isVisible : isVisibleReducer, // isVisible 상태 관리 리듀서
})

export default rootReducer;