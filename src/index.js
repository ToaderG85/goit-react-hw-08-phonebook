import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <Provider store={store}>
      <BrowserRouter>
        <App />        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
