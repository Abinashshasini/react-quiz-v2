import { shuffelArray } from './utils';
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestion = async (
  amount: number,
  difficulty: Difficulty,
  category: string | undefined
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=${difficulty}&category=${category}`;
  const response = await (await fetch(endpoint)).json();
  return response.results.map((question: Question) => ({
    ...question,
    answers: shuffelArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
