import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin-top: 100px;
  padding: 20px 30px;

  .questioNr {
    font-size: 1.1rem;
    color: var(--lightGrey);
    margin: 15px 0px;
    letter-spacing: 0.7;
  }

  .question {
    font-size: 1.5rem;
    color: var(--white);
    letter-spacing: 1px;
    margin: 15px 0px;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 50px;
    margin: 7px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? '#F1D701'
        : !correct && userClicked
        ? 'var(--redPrimary)'
        : 'var(--white)'};
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
    border: none;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    padding: 0px 10px;

    span {
      color: ${({ correct, userClicked }) =>
        correct
          ? 'var(--white)'
          : !correct && userClicked
          ? 'var(--white)'
          : 'var(--bluePrimary)'};
      font-weight: 500;
    }
  }
`;
