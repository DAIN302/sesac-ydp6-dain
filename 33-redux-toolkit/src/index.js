import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import Prac from './Prac';

const root = ReactDOM.createRoot(document.getElementById('root'));

//#3. Store 연결
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Prac />
    </Provider>
  </React.StrictMode>
);

