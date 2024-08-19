export interface Question {
  theme: QuestionTheme;
  title: string;
  options: AnswerOption[];
  correctAnswer: number;
}

export interface QuestionData {
  id: number;
  themeId: number;
  title: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: number;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionGroup {
  theme: string;
  questions: Question[];
}

export interface QuestionTheme {
  id: number;
  code: string;
  name: string;
  color: string;
}

export interface AnswerOption {
  id: number;
  text: string;
}
