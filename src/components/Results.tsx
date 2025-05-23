'use client';

import { useState } from 'react';
import { AssessmentResult, UserResponse } from '@/types/skills';
import { RadarChart } from './RadarChart';
import { EmailForm } from './EmailForm';

interface ResultsProps {
  results: AssessmentResult[];
  responses: UserResponse[];
}

export function Results({ results, responses }: ResultsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');

  const handleSaveResults = async (email: string) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          responses,
          results,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al guardar los resultados');
      }

      setIsSaved(true);
    } catch (err) {
      setError('Hubo un error al guardar tus resultados. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Resultados de tu Evaluación
      </h2>

      <div className="mb-8">
        <RadarChart data={results} />
      </div>

      <div className="space-y-6">
        {results.map((result) => (
          <div
            key={result.skillId}
            className="bg-white rounded-lg shadow p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {result.skillId}
            </h3>
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-blue-600 rounded"
                    style={{ width: `${result.score * 20}%` }}
                  />
                </div>
              </div>
              <span className="ml-4 text-sm font-medium text-gray-600">
                {result.score.toFixed(1)}/5
              </span>
            </div>
            {result.recommendations.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Recomendaciones:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {result.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {!isSaved && (
        <div className="mt-8">
          <EmailForm onSubmit={handleSaveResults} isLoading={isLoading} />
          {error && (
            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>
      )}

      {isSaved && (
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-green-800">
            ¡Resultados guardados exitosamente!
          </h3>
          <p className="mt-2 text-green-700">
            Hemos guardado tus resultados. Podrás acceder a tu historial de evaluaciones usando tu correo electrónico.
          </p>
        </div>
      )}
    </div>
  );
} 