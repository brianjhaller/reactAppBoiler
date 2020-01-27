import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App.jsx';
import Auth from './components/Auth.js';

let auth = new Auth();
ReactDOM.render(<App auth={auth} />, document.getElementById('root'));
