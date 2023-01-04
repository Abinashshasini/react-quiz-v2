import styled, { createGlobalStyle } from 'styled-components';
import BGImage from '../../images/background.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold',
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-repeat: 100%;
    background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 40px;
    margin: 10px;
    text-align: center;
    font-weight: 400;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 10px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }

  .next {
    width: 100%;
  }
`;
