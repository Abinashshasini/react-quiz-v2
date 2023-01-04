import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 10px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 10px auto;
  width: 97%;
  border-radius: 7px;
`;

export const Content = styled.div`
  h1 {
    color: var(--textColor);
    font-size: 1.4rem;
    letter-spacing: 2px;
    margin: 0;
    margin-bottom: 10px;
    margin-left: 10px;
    text-transform: capitalize;
  }
  h2 {
    color: black;
    font-size: 1.8rem;
    letter-spacing: 1px;
    margin: 0;
    margin-left: 10px;
    text-transform: capitalize;
  }
`;
