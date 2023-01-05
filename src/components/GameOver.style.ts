import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--white);

  .gifcont {
    position: absolute;
    top: 50px;
    bottom: 0;
    height: 100%;
    width: 100%;
  }

  h1 {
    background-repeat: 100%;
    color: var(--redPrimary);
    font-size: 2rem;
    letter-spacing: 2px;
    margin: 10px;
    text-align: center;
    z-index: 100;
  }

  .comp {
    height: 250px;
    width: 250px;
  }

  .para {
    font-size: 0.8rem;
    color: var(--lightGrey);
    letter-spacing: 0.5px;
    margin: 15px 0;
  }

  .score {
    color: var(--bluePrimary);
    font-size: 1.1rem;
    font-weight: 600;
  }

  .start-again {
    border: none;
    outline: none;
    height: 40px;
    border-radius: 10px;
    background: var(--redPrimary);
    color: var(--white);
    padding: 0px 20px;
    margin: 20px 0;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;
