/* eslint-disable jsx-a11y/iframe-has-title */
import { FC } from 'react';
import { Wrapper } from './GameOver.style';
import Lottie from 'lottie-react';
import congratulation from '../images/cong.json';
import completeed from '../images/complete.json';
import failed from '../images/failed.json';
import { useNavigate } from 'react-router';
interface Props {
  score: number;
}

const GameOver: FC<Props> = ({ score = 0 }) => {
  console.log('score: ', score);
  const navigate = useNavigate();

  return (
    <Wrapper>
      {score > 1 ? (
        <>
          <div className="gifcont">
            <Lottie animationData={congratulation} loop={true} />
          </div>
          <h1 className="cong">Congatulations!</h1>
          <div className="comp">
            <Lottie animationData={completeed} loop={true} />
          </div>
          <p className="para">You did a great job in this attempt</p>
        </>
      ) : (
        <>
          <h1 className="cong">Sorry Try Again!</h1>
          <div className="comp">
            <Lottie animationData={failed} loop={true} />
          </div>
          <p className="para">Better luck next time please try harder</p>
        </>
      )}
      <div className="scoretxt">Your Scored {score}</div>
      <button className="start-again" onClick={() => navigate(-1)}>
        Start Again
      </button>
    </Wrapper>
  );
};

export default GameOver;
