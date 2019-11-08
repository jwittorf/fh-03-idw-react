import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; // import from file
import Main from './Main';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root')); // set the content from the file in the matching .html file
ReactDOM.render(<Main />, document.getElementById('root')); // set the content from the file in the matching .html file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
