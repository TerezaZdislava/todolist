// import {StrictMode} from 'react';
// import ReactDOM from 'react-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import App from './App';
import WebVitals from './WebVitals';
import GlobalStyles from './GlobalStyles';
import {store} from './store';
import './i18n/i18n';
import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme} resetCSS>
        <HelmetProvider>
          <App />
          <GlobalStyles />
          <WebVitals showStatusInConsoleLog />
        </HelmetProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// reportWebVitals();
