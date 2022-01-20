import React from 'react';
import ReactDOM from 'react-dom';
import { RealtimeProvider } from '@space-kit/redis-realtime-react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <RealtimeProvider baseUrl='localhost:5000' db="skedjob" secure={false}> */}
      <App />
    {/* </RealtimeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
