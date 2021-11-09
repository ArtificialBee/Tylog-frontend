import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './themes/themes'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
  ,
  document.getElementById('root')
);

