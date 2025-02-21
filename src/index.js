import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// In your index.js or App.js file
import 'bootstrap/dist/css/bootstrap.min.css';
import { CounterProvider } from './components/CounterContext';  // Import the provider
import { CartProvider } from "./CartContext"; // Make sure to import CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <CounterProvider>
    <App />
  </CounterProvider>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
