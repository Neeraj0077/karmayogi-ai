export interface Competency {
  name: string;
  current: number;
  required: number;
  category: string;
}

export interface Course {
  id: number;
  title: string;
  provider: string;
  duration: string;
  level: string;
  match: number;
  skill: string;
  description: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}