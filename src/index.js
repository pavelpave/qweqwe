import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './state/state'
import state2 from './state/state2'
import * as serviceWorker from './serviceWorker';
//min_modul_taskTreck


ReactDOM.render(<App state={state}/>, document.getElementById('root'));


ReactDOM.render(<App state={state2}/> , document.getElementById('min_modul_taskTreck'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
