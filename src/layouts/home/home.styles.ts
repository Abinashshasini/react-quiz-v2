import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px 20px;
`;

export const Headings = styled.div`
  width: 100%;
  border-radius: 7px;
  h2 {
    margin: 0;
    letter-spacing: 1.5px;
    color: black;
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  a {
    text-decoration: none;
  }
  .Item {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    background: var(--white);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 20px;
    overflow: visible;
    position: relative;
    margin: 20px 0px 60px;
    padding: 20px 10px;
    padding-left: 20px;
    .icons {
      border: 1px solid white;
      border-radius: 10px;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
    }

    .level,
    .heading {
      color: var(--white);
      letter-spacing: 1px;
      margin: 0;
      font-weight: 400;
      font-size: 0.9rem;
      text-transform: capitalize;
      text-decoration: none;
    }

    .heading {
      font-size: 1.3rem;
    }

    img {
      position: absolute;
      top: -30%;
      right: 10%;
      width: 100px;
      height: 100px;
    }
  }

  .Item:first-child {
    margin-top: 30px;
  }
`;
