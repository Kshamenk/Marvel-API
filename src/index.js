import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import store from './redux/store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= {store} >
  <BrowserRouter>
    <Auth0Provider
      domain="dev-70n6pkjz75xtokdg.us.auth0.com"
      clientId="5wbB3QD6G7AJYrujYU57xvBJyDJZd0jJ"
      redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </BrowserRouter>
  </Provider>
);


