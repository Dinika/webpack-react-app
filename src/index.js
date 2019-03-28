import React from 'react';
import RenderDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

RenderDom(app, document.getElementById('root'));
