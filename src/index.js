import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

/* require('dotenv').config()
import fs from 'fs' */

import { Provider } from 'react-redux';
import store from './app/store'

import './index.css'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);