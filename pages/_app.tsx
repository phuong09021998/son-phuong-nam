import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import reducers from '../redux/reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
