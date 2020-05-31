import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background: #242435;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    color: #2e2f45;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }


  button{
    cursor: pointer;
  }
`;
