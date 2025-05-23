'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { AssessmentResult, UserResponse } from '@/types/skills';
import { skills } from '@/data/skills';
import { EmailForm } from '@/components/EmailForm';
import { RecommendationCard } from '@/components/RecommendationCard';
import { getRecommendationsForSkill, getSkillLevel, getResourcesForSkill } from '@/data/recommendations';
import Link from 'next/link';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<AssessmentResult[]>([]);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Intentar obtener los resultados del localStorage
    const storedResults = localStorage.getItem('assessment_results');
    const storedResponses = localStorage.getItem('assessment_responses');

    if (!storedResults || !storedResponses) {
      setError('No se encontraron resultados de la evaluación');
      router.push('/assessment');
      return;
    }

    try {
      setResults(JSON.parse(storedResults));
      setResponses(JSON.parse(storedResponses));
    } catch (err) {
      setError('Error al cargar los resultados');
      console.error('Error al parsear los resultados:', err);
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleEmailSubmit = async (email: string) => {
    setIsLoading(true);
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

      setIsEmailSubmitted(true);
    } catch (err) {
      setError('Hubo un error al guardar tus resultados. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Cargando resultados...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Error</h2>
          <p className="mt-4 text-lg text-gray-500">{error}</p>
          <button
            onClick={() => router.push('/assessment')}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Volver a la Evaluación
          </button>
        </div>
      </div>
    );
  }

  if (!isEmailSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <EmailForm onSubmit={handleEmailSubmit} isLoading={isLoading} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Resultados de tu Evaluación</h1>
          <p className="mt-4 text-lg text-gray-600">
            Análisis detallado de tus habilidades y recomendaciones para el futuro
          </p>
        </div>

        {/* Gráfico Radar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vista General de Habilidades</h2>
          <div className="aspect-square max-w-2xl mx-auto">
            <Radar
              data={{
                labels: skills.map(skill => skill.name),
                datasets: [
                  {
                    label: 'Tu nivel actual',
                    data: results.map(result => result.score),
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                  },
                  {
                    label: 'Nivel objetivo',
                    data: skills.map(() => 4.5),
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                  }
                ]
              }}
              options={{
                scales: {
                  r: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                      stepSize: 1
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Análisis Detallado */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const result = results.find(r => r.skillId === skill.id);
            if (!result) return null;

            const level = getSkillLevel(result.score);
            const recommendations = getRecommendationsForSkill(skill.id, level);
            const resources = getResourcesForSkill(skill.id);

            return (
              <RecommendationCard
                key={skill.id}
                title={skill.name}
                description={skill.description}
                priority={result.score < 2 ? 'Alta' : result.score < 3.5 ? 'Media' : 'Baja'}
                recommendations={recommendations || []}
                resources={resources || undefined}
              />
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
} 