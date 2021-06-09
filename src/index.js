import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/Global.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import TimerButton from './components/TimerButton'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TimerButton />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
