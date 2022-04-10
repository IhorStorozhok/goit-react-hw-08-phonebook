import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/es/integration/react';

import { store,persistor } from './redux/store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Phonebook from './App'



ReactDOM.render(<BrowserRouter>
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor} >
    <Provider store={store}>
      <Phonebook />
      </Provider>
      </PersistGate>
  </React.StrictMode></BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

