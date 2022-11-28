import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppDinamico from './App-modo-dinamico';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppDinamico />
  </React.StrictMode>
);
