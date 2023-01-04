import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Headings = styled.div`
  width: 100%;
  border-radius: 7px;
  h2 {
    margin: 0;
    letter-spacing: 1.5px;
    color: black;
    font-size: 1.2rem;
    margin-left: 10px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 1.5rem;
  padding: 25px 20px;
  margin: 10px auto;
  width: 97%;
  border-radius: 7px;
  a {
    text-decoration: none;
  }
  .Item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    background: var(--white);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 7px;
    border-radius: 7px;
    overflow: visible;
    position: relative;
    min-height: 130px;
    img {
      position: absolute;
      top: -13%;
      width: 100px;
      height: 100px;
    }
    p {
      color: black;
      letter-spacing: 1px;
      text-align: center;
      margin: 0;
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: 7px;
      text-transform: capitalize;
      text-decoration: none;
    }
  }
`;
