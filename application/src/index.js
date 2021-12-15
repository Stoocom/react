import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from "react-redux";
import Router from './components/Router';
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
import store from './store';
import './firebase.js';

//let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

