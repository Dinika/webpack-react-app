import React from 'react';
import RenderDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

RenderDOM.render(app, document.getElementById('root'));
