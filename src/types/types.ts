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

export interface QuestionTheme {
  code: string;
  name: string;
  color: string;
}
