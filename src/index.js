// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Change this line
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
