import { Skill } from '@/types/skills';

interface SkillAnalysisProps {
  skill: Skill;
  score: number;
  recommendations: string[];
}

export function SkillAnalysis({ skill, score, recommendations }: SkillAnalysisProps) {
  const getSkillCategory = (category: string) => {
    switch (category) {
      case 'technical':
        return 'Técnica';
      case 'soft':
        return 'Habilidad Blanda';
      case 'leadership':
        return 'Liderazgo';
      case 'environmental':
        return 'Ambiental';
      default:
        return category;
    }
  };

  const getSkillLevel = (score: number) => {
    if (score >= 4.5) return 'Experto';
    if (score >= 3.5) return 'Avanzado';
    if (score >= 2.5) return 'Intermedio';
    if (score >= 1.5) return 'Básico';
    return 'Principiante';
  };

  const getRecommendationPriority = (score: number) => {
    if (score < 2) return 'Alta';
    if (score < 3.5) return 'Media';
    return 'Baja';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
          {getSkillCategory(skill.category)}
        </span>
      </div>

      <p className="mt-2 text-gray-600">{skill.description}</p>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Nivel Actual</span>
          <div className="flex items-center">
            <span className="text-sm font-bold text-blue-600 mr-2">
              {score.toFixed(1)}/5.0
            </span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              {getSkillLevel(score)}
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(score / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Prioridad de Desarrollo</span>
          <span className={`text-xs px-2 py-1 rounded ${
            getRecommendationPriority(score) === 'Alta'
              ? 'bg-red-100 text-red-800'
              : getRecommendationPriority(score) === 'Media'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-green-100 text-green-800'
          }`}>
            {getRecommendationPriority(score)}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-medium text-gray-900 mb-2">Recomendaciones:</h4>
        <ul className="space-y-2">
          {recommendations.map((rec, i) => (
            <li key={i} className="text-sm text-gray-600 flex items-start">
              <span className="mr-2">•</span>
              {rec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 