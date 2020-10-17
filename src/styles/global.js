import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {    
    font-family: sans-serif;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #000;
    height: 100vh;
    overflow: hidden;
  }


  h1, input , button {
    font: 16px 'Russo One', sans-serif;
    border: none;
  }

  li{
    list-style: none;
  }

`;
