import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Proxima Nova';
    src: url('../../fonts/ProximaNovaBold.woff2') format('woff2'),
        url('../../fonts/ProximaNovaBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('../../fonts/ProximaNovaThin.woff2') format('woff2'),
        url('../../fonts/ProximaNovaThin.woff') format('woff');
    font-weight: light;
    font-style: normal;
   
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('../../fonts/ProximaNovaRegular.woff2') format('woff2'),
        url('../../fonts/ProximaNovaRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
   
  }

html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Proxima Nova', serif;
}
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  h1, h3, h6 {
    margin: 0
  }

  .container {
    width: 1200px;
    max-width: 100%;
	  margin: 0px auto;
  }

  .container-full {
  
    max-width: 100%;
	  margin: 0px auto;
  }

  a {
    color: black;
    text-decoration: none;
    transition: .3s;
    :hover {
      color: #E34949;
    }
  }

`;

export default GlobalStyle;
