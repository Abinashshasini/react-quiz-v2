import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --secondColor: #658dca; 
    --mainColor: #107eeb;
    --textColor: #c4c4c4;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;//F55778
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }

  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #f5f5f5;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
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
