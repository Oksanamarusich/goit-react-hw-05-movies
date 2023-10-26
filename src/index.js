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
    blue: '#ADD8E6',
    orange: 'orange',
    error: 'red',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  spacing: value => `${value * 4}px`,
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
