import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .headerCont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 20px;
    align-items: center;

    .headerBtn {
      border-radius: 50%;
      border: 1px solid var(--white);
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 25px;
        height: 25px;
      }
    }

    .plandiv {
      width: 35px;
      height: 35px;
    }

    .headerBtnBg {
      width: 65px;
      height: 65px;
      border: 5px solid var(--lightGrey);
      span {
        color: var(--white);
        font-size: 1.8rem;
      }
    }
  }

  > p {
    color: #fff;
  }

  .loading {
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > svg {
      width: 150px;
    }

    > p {
      color: var(--white);
      font-size: 1.2rem;
      letter-spacing: 0.5px;
    }
  }

  .start {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }

  .nextbtncont {
    width: 100%;
    padding: 0px 30px;
    display: flex;
    justify-content: flex-end;

    .next {
      cursor: pointer;
      display: flex;
      align-items: center;
      border-radius: 10px;
      height: 40px;
      padding: 0 40px;
      color: var(--bluePrimary);
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 1rem;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      background: var(--white);

      svg {
        vertical-align: center;
        margin-left: 5px;
        width: 20px;
        height: 20px;
      }
    }
  }
`;
