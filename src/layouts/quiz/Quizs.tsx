/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useState, useEffect, FC, useRef } from 'react';
import QuestionCard from '../../components/QuestionCard';
import { fetchQuizQuestion } from '../../api';
import { QuestionState, Difficulty } from '../../api';
import Lottie from 'lottie-react';
import { useNavigate, useParams } from 'react-router';
import { AiFillCaretRight } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import loadingAnimation from '../../images/loading.json';
import errorAnimastion from '../../images/error.json';
import { useLocation } from 'react-router';
import { Wrapper } from './Quizs.style';

const TOTAL_QUESTIONS = 10;
const TOTAL_TIME = 20;
let LENGTH = 0;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Quizs: FC = () => {
  const { quiz_id = '' } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // * Required states * //
  const [loading, setLoading] = useState<boolean>(true);
  const [error, SetError] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(TOTAL_TIME);
  const circleAnimationRef = useRef<SVGCircleElement>(null);

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
    // If user has not answered then don't navigate to the next question
    if (nextQuestion !== userAnswers.length) {
      return;
    }
    // If user has reached the last question then navigate the user to details page or increase the question
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      navigate(`${location.pathname}/game_over/${score}`);
    } else {
      setNumber(nextQuestion);
    }
  };

  // * Function to handle question back * //
  const handleQuestionBack = () => {
    navigate(-1);
  };

  // * initial useEffect to call the API based upon users selected category * //
  useEffect(() => {
    window.scrollTo(0, 0);
    handleStartTrivia();
  }, []);

  // * Effect to reset the timer when question changes * //
  useEffect(() => {
    setTimer(TOTAL_TIME);
  }, [number]);

  // * Effect to get the circle when completed loading * //
  useEffect(() => {
    if (!loading) {
      LENGTH = circleAnimationRef.current.getTotalLength();
      circleAnimationRef.current.style.strokeDasharray = LENGTH;
      circleAnimationRef.current.style.strokeDashoffset = 0;
    }
  }, [loading]);

  //  * Effect to create a timer when user is checking the question * //
  useEffect(() => {
    const newInterval = setInterval(() => {
      if (timer > 0 && !loading) {
        setTimer(timer - 1);
        // setting the circle dash offset for reducing the circle
        circleAnimationRef.current.style.strokeDashoffset =
          LENGTH - (timer / 22) * LENGTH;
      } else if (timer === 0 && number !== TOTAL_QUESTIONS - 1) {
        setNumber(number + 1);
      } else if (!loading) {
        setGameOver(true);
        navigate(`${location.pathname}/game_over/${score}`);
      } else {
        return;
      }
    }, 1000);
    return () => clearInterval(newInterval);
  }, [timer, loading]);

  return (
    <>
      <Wrapper totalTime={TOTAL_TIME}>
        <div className="headerCont">
          <div className="headerBtn" onClick={handleQuestionBack}>
            <IoIosArrowBack color="white" />
          </div>
          {!loading && !error && (
            <div className="timerCont">
              <div className="time">
                <span>{timer}</span>
              </div>
              <svg width="70" height="70">
                <circle id="circle1" cx="35" cy="35" r="30"></circle>
                <circle
                  id="circle2"
                  cx="35"
                  cy="35"
                  r="30"
                  ref={circleAnimationRef}
                ></circle>
              </svg>
            </div>
          )}
          <div className="plandiv" />
        </div>
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
