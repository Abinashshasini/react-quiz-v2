/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, FC } from 'react';
import QuestionCard from '../../components/QuestionCard';
import GameOver from '../../components/GameOver';
import { fetchQuizQuestion } from '../../api';
import { QuestionState, Difficulty } from '../../api';
import Lottie from 'lottie-react';
import { useNavigate, useParams } from 'react-router';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import loadingAnimation from '../../images/loading.json';
import errorAnimastion from '../../images/error.json';
import { Wrapper } from './Quizs.style';

const TOTAL_QUESTIONS = 10;
const TOTAL_TIME = 30;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Quizs: FC = () => {
  const { quiz_id = '' } = useParams();
  const navigate = useNavigate();

  // * Required states * //
  const [loading, setLoading] = useState<boolean>(true);
  const [error, SetError] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(TOTAL_TIME);

  // * Function to start the game for the user * //
  const handleStartTrivia = async () => {
    try {
      const response = await fetchQuizQuestion(
        TOTAL_QUESTIONS,
        Difficulty.EASY,
        quiz_id
      );
      setLoading(false);
      if (response.length > 0) {
        setQuestions(response);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
      } else {
        SetError(true);
      }
    } catch (error) {
      setLoading(false);
      console.log('Fetching question error', error);
    }
  };

  // * Function to check the user Answer * //
  const handleCheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User selected answer
      const answer = e.currentTarget.value;
      // Check user's answer againset the correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore(score + 1);
      // Save answer in the userAnswers array
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((previousState) => [...previousState, answerObject]);
    }
  };

  // * Fucntion to navigate the user to next question if it's not the last question * //
  const handleClickOnNextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  // * Function to handle question back * //
  const handleQuestionBack = () => {
    if (number !== 0) {
      setNumber(number - 1);
    } else {
      navigate(-1);
    }
  };

  // * initial useEffect to call the API based upon users selected category * //
  useEffect(() => {
    handleStartTrivia();
  }, []);

  // * Effect to reset the timer when question changes * //
  useEffect(() => {
    setTimer(TOTAL_TIME);
  }, [number]);

  //  * Effect to create a timer when user is checking the question * //
  useEffect(() => {
    const newInterval = setInterval(() => {
      if (timer > 0 && !loading) {
        setTimer(timer - 1);
      } else if (timer === 0 && !gameOver) {
        setNumber(number + 1);
      }
    }, 1000);
    return () => clearInterval(newInterval);
  }, [timer, loading]);

  return (
    <>
      <Wrapper>
        {!gameOver && !error && (
          <div className="headerCont">
            <div className="headerBtn" onClick={handleQuestionBack}>
              <AiFillCaretLeft color="white" />
            </div>
            <div className="headerBtnBg headerBtn">
              <span>{timer}</span>
            </div>
            <div className="plandiv" />
          </div>
        )}
        {/* {gameOver && <GameOver score={score} />} */}
        {loading && (
          <div className="loading">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
        )}
        {!loading && !gameOver && !error && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestion={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={handleCheckAnswer}
          />
        )}
        {error && (
          <div className="loading">
            <p>No results found 😰</p>
            <Lottie animationData={errorAnimastion} loop={true} />
          </div>
        )}
        {!gameOver && !loading && userAnswers.length !== 0 && (
          <div className="nextbtncont">
            <button className="next" onClick={handleClickOnNextQuestion}>
              Next <AiFillCaretRight color="var(--bluePrimary)" />
            </button>
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default Quizs;
