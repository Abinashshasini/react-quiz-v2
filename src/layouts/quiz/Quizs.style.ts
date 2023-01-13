import styled from 'styled-components';

type Props = {
  totalTime: number;
};

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 1100px;
  margin: 0 auto;

  .headerCont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 20px;
    min-height: 130px;
    align-items: center;

    a {
      background-color: yellow;
      padding: 20px 0.5em;
      border-radius: 3rem;
      font-size: 1.2rem;
      line-height: 0;
    }

    .headerBtn {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 35px;
        height: 35px;
      }
    }

    .plandiv {
      width: 35px;
      height: 35px;
    }

    .timerCont {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .time {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--white);
        font-size: 1.8rem;
      }

      svg {
        display: inline-block;
        transform: rotate(-90deg);

        circle {
          stroke-width: 5px;
          fill: transparent;
          stroke-linecap: round;
        }

        #circle1 {
          stroke: gray;
        }

        #circle2 {
          transition: 1s linear;
          stroke-dasharray: 188px;
          stroke: #00e55b;
          stroke-linecap: round;
          /* stroke-dashoffset: 0px; */
          /* animation: ${({ totalTime }) => `countdownAnimation ${
            totalTime + 1
          }s linear infinite forwards,
            colorAnimation ${totalTime + 1}s linear infinite forwards`}; */
        }

        @keyframes countdownAnimation {
          from {
            stroke-dashoffset: 0px;
          }
          to {
            stroke-dashoffset: 188px;
          }
        }

        @keyframes colorAnimation {
          100%,
          0%,
          40% {
            stroke: #00e55b;
          }

          50%,
          80% {
            stroke: yellow;
          }

          80%,
          100% {
            stroke: var(--redPrimary);
          }
        }
      }
    }
  }

  > p {
    color: #fff;
  }

  .loading {
    height: 70%;
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
