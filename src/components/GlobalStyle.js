import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.white};
  //background: linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 50%, hsla(213, 77%, 14%, 1) 100%);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  ul{
    list-style:none;
  }
 
`;