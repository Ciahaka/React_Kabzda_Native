import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {sum} from "./01_testHello/01_ts";

let  a =sum


//      !данные перехали в тесты
// export const render = 'Привет мой юный друх!'
// const result = splitIntoWords('')
// console.log(result[0]==='привет');
// console.log(result[1]==='мой');
// console.log(result[2]==='юный');
// console.log(result[3]==='друх');


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
