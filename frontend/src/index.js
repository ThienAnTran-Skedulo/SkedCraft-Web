import React from 'react';
import ReactDOM from 'react-dom';
import { RealtimeProvider } from '@space-kit/redis-realtime-react'
import { createStore } from "redux";
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allReducers from "./reducers";

const store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        {/* <RealtimeProvider baseUrl='localhost:5000' db="skedjob" secure={false}> */}
          <App />
        {/* </RealtimeProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
