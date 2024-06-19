import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './app/styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from './app/providers/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContext>
);
