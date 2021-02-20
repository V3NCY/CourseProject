import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './scss/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import booking from './redux/reducers';
import reportWebVitals from './reportWebVitals';

const store = createStore(booking, composeWithDevTools());


ReactDOM.render(
  
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
reportWebVitals();
