import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px 20px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Headings = styled.div`
  width: 100%;

  h2 {
    margin: 5px 0;
    letter-spacing: 1.5px;
    color: var(--white);
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding-bottom: 100px;
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
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 7px;
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
    margin-top: 50px;
  }
`;
