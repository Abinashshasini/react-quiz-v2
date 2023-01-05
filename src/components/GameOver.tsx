/* eslint-disable jsx-a11y/iframe-has-title */
import React, { FC } from 'react';

interface Props {
  score: number;
}

const GameOver: FC<Props> = ({ score }) => {
  return (
    <div>
      {(() => {
        if (score > 5) {
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
              <p>Noiceee Baklol...</p>
            </div>
          );
        } else {
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

              <p>Bhak betichod...</p>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default GameOver;
