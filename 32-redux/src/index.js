import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux'; // 취소선!! -> 잘안쓰니깐 지양해라 이런 의미
import {Provider} from 'react-redux'
import App from './App';
import App2 from './App2';
import App3 from './App3';
import counterReducer from './store/counterReducer';
import rootReducer from './store';
import App4 from './App4';

const root = ReactDOM.createRoot(document.getElementById('root'));

// #6. store 생성
// (전통 redux 방식) -> 'createStore' 키워드 사용
const store = createStore(rootReducer, 
  // Redux DevTools Extension 사용하는 경우 -> Toolkit 쓰면 이거 안해줘도 됨
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <React.StrictMode>
    {/* Provider : 리액트와 리덕스 연결 */}
    {/* 애플리케이션의 모든 컴포넌트가 Redux 스토어에 접근 가능하게 됨 */}
    <Provider store={store}> {/* redux provider로 스토어를 앱에 주입함 */}
      <App />
      <hr />
      <App2 />
      <hr />
      <App3 />
      <hr />
      <App4 />

    </Provider>
  </React.StrictMode>
);

