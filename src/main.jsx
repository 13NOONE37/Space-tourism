import React from 'react';
import ReactDOM from 'react-dom/client';

import './config.css';
import App from './components/app/App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>,
);
