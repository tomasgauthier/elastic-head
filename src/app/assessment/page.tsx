'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import { skills } from '@/data/skills';
import { ProgressBar } from '@/components/ProgressBar';
import { AssessmentResult, UserResponse } from '@/types/skills';
import { getRecommendationsForSkill, getSkillLevel } from '@/data/recommendations';

export default function Assessment() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const currentSkill = currentQuestion
    ? skills.find(s => s.id === currentQuestion.skillId)
    : null;

  const calculateResults = (responses: UserResponse[]): AssessmentResult[] => {
    const results: AssessmentResult[] = [];
    
    // Agrupar respuestas por habilidad
    const skillResponses = new Map<string, number[]>();
    responses.forEach(response => {
      const question = questions.find(q => q.id === response.questionId);
      if (question) {
        const responses = skillResponses.get(question.skillId) || [];
        responses.push(response.value);
        skillResponses.set(question.skillId, responses);
      }
    });

    // Calcular puntuación promedio por habilidad
    skillResponses.forEach((values, skillId) => {
      const score = values.reduce((a, b) => a + b, 0) / values.length;
      const skill = skills.find(s => s.id === skillId);
      if (skill) {
        const level = getSkillLevel(score);
        const recommendations = getRecommendationsForSkill(skillId, level);
        results.push({
          skillId,
          score,
          gap: 5 - score,
          recommendations: recommendations || [],
        });
      }
    });

    return results;
  };

  const handleResponse = (value: number) => {
    const newResponses = [
      ...responses,
      { questionId: currentQuestion.id, value }
    ];
    setResponses(newResponses);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const results = calculateResults(newResponses);
      // Guardar resultados en localStorage
      localStorage.setItem('assessment_responses', JSON.stringify(newResponses));
      localStorage.setItem('assessment_results', JSON.stringify(results));
      setIsComplete(true);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">¡Evaluación Completada!</h2>
          <p className="mt-4 text-lg text-gray-500">
            Tus respuestas han sido registradas. Ahora veremos tus resultados.
          </p>
          <button
            onClick={() => router.push('/results')}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Ver Resultados
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ProgressBar
          current={currentQuestionIndex + 1}
          total={questions.length}
        />

        <div className="mt-8">
          {currentSkill && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{currentSkill.name}</h2>
              <p className="mt-2 text-gray-600">{currentSkill.description}</p>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-medium text-gray-900 mb-8">
              {currentQuestion.text}
            </h3>

            <div className="space-y-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleResponse(option.value)}
                  className="w-full text-left px-4 py-3 border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 