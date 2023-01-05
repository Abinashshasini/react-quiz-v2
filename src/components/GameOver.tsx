/* eslint-disable jsx-a11y/iframe-has-title */
import { FC } from 'react';

interface Props {
  score: number;
}

const GameOver: FC<Props> = ({ score }) => {
  return (
    <div>
      <iframe
        src="https://giphy.com/embed/DwRN1GYnF7TqTUEeei"
        width="480"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <div>Congratulation!</div>
      <div>Your Scored {score}</div>
    </div>
  );
};

export default GameOver;
