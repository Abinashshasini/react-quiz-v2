import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--mainColor);
  padding: 0 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Content = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 15% 85%;
  max-width: var(--maxWidth);
  padding: 5px 0;
  margin: 0 auto;
  color: white;

  .icon {
    font-size: 2.2rem;
    color: white;
    cursor: pointer;
    margin: 0;

    @media screen and (max-width: 500px) {
      font-size: 1.8rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    letter-spacing: 1px;
    text-transform: capitalize;

    @media screen and (max-width: 500px) {
      font-size: 1.1rem;
    }
  }
`;
