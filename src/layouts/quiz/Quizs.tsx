import React, { useState } from 'react';
import QuestionCard from '../../components/QuestionCard';
import { fetchQuizQuestion } from '../../api';
import { QuestionState, Difficulty } from '../../api';
import { Wrapper } from './Quizs.style';

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function Quizs() {
  // * Required states * //
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  // * Function to start the game for the user * //
  const handleStartTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    try {
      const response = await fetchQuizQuestion(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );
      setQuestions(response);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
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

  return (
    <>
      <Wrapper>
        <h1>React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={handleStartTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver && <p className="score">Score: {score} </p>}
        {loading && <p className="loading">Loading question ...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestion={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={handleCheckAnswer}
          />
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={handleClickOnNextQuestion}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  );
}

export default Quizs;
