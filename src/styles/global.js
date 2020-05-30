import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

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
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    color: #2e2f45;
    font: 14px 'Poppins', sans-serif;
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
