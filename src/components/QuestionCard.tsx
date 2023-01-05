import { FC } from 'react';
import { AnswerObject } from '../layouts/quiz/Quizs';
import { Wrapper, ButtonWrapper } from './QuestionCard.style';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard: FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestion,
}) => {
  return (
    <Wrapper>
      <p className="questioNr">
        Question {questionNr} of {totalQuestion}
      </p>
      <p
        dangerouslySetInnerHTML={{ __html: question }}
        className="question"
      ></p>
      <div>
        {answers.map((element) => (
          <ButtonWrapper
            key={element}
            correct={userAnswer?.correctAnswer === element}
            userClicked={userAnswer?.answer === element}
          >
            <button disabled={!!userAnswer} onClick={callback} value={element}>
              <span dangerouslySetInnerHTML={{ __html: element }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
