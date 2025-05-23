export type Skill = {
  id: string;
  name: string;
  description: string;
  category: 'technical' | 'soft' | 'leadership' | 'environmental';
  importance: number;
};

export type Question = {
  id: string;
  skillId: string;
  text: string;
  type: 'likert' | 'frequency' | 'scenario';
  options: {
    value: number;
    label: string;
  }[];
};

export type UserResponse = {
  questionId: string;
  value: number;
};

export type AssessmentResult = {
  skillId: string;
  score: number;
  gap: number;
  recommendations: string[];
};

export type UserProfile = {
  email: string;
  createdAt: string;
  lastAssessment: string;
};

export type AssessmentHistory = {
  id: string;
  userId: string;
  date: string;
  responses: UserResponse[];
  results: AssessmentResult[];
}; 