import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import {BrowserRouter} from 'react-router-dom';

const theme = {
  colors: {
    white: '#F5F1ED',
    black: '#252323',
    green: '#98FB98',
    blue: '#557C93',
    orange: '#DC965A;',
    error: 'red',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  spacing: value => `${value * 4}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);
