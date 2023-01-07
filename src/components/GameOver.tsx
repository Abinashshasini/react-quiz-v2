/* eslint-disable jsx-a11y/iframe-has-title */
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router';
import Lottie from 'lottie-react';
import { Wrapper } from './GameOver.style';
import congratulation from '../images/cong.json';
import completeed from '../images/complete.json';
import failed from '../images/failed.json';

const GameOver: FC = () => {
  const navigate = useNavigate();
  const { score = '' } = useParams();

  // * Function to navigate the user to home page * //
  const handleClickOnPlayAgain = () => {
    console.log('Againg clicked');
    navigate('/');
  };

  return (
    <Wrapper>
      {Number(score) > 1 ? (
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
      <button className="start-again" onClick={handleClickOnPlayAgain}>
        Start Another
      </button>
    </Wrapper>
  );
};

export default GameOver;
