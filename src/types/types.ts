export interface Option {
  id: number;
  text: string;
}

export interface Question {
  theme: string;
  question: string;
  options: Option[];
  correctAnswer: number;
}

export interface QuestionGroup {
  theme: string;
  questions: Question[];
}

export interface QuestionTheme {
  code: string;
  name: string;
  color: string;
}

export interface AnswerOption {
  id: number;
  text: string;
}
