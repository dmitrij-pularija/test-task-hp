import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    src: local('Montserrat-Regular'), 
    url('../assets/fonts/Montserrat-Regular.ttf') format('truetype');
  }

@font-face {
    font-family: 'Montserrat';
    font-weight: 500;
    src: local('Montserrat-Medium'), 
    url('../assets/fonts/Montserrat-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    src: local('Montserrat-SemiBold'), 
    url('../assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
  }

body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  .no-scroll {
    overflow: hidden;
  }
`;

export default GlobalStyle;
