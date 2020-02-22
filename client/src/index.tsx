import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle } from 'styled-components';

import App from './app/App';
import store, { persistor } from './app/store/store';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(#087878, #152b40);
    padding: 25px 0;
    font-family: Axiform-Bold, sans-serif;
    color: white;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
