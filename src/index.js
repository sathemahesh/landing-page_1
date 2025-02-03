import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Navbar from './components/Navbar'

import Carousel from './components/Carousel';
import Middle from './components/Middle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Navbar />
    <Carousel />
    <Middle />

    
    <App />
  </React.StrictMode>
);

