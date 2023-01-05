import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px; 
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --redPrimary: #f55778;
    --redSecondary: #ED8773;
    --white: #fff;
    --lightGrey: #C8D7F5;
    --bluePrimary: #5673EC;
    --blueSecondary: #0EB5FC;
    --violatePrimary: #A58ED0;
    --violateSecondary: #F0BAE5;
  }

  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    h1 {
      font-size: 2rem;
      margin: 0;
    }

    h3 {
      font-size: 1.1rem;
     
    }

    p {
      font-size: 1rem;
      margin: 0;
    }
  }

  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
    margin: 0;
    padding: 0;
}
`;
