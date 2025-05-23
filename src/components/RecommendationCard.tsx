import { ResourceLinks } from './ResourceLinks';

interface RecommendationCardProps {
  title: string;
  description: string;
  priority: 'Alta' | 'Media' | 'Baja';
  recommendations: string[];
  resources?: {
    courses: string[];
    articles: string[];
    communities: string[];
  };
}

export function RecommendationCard({
  title,
  description,
  priority,
  recommendations,
  resources
}: RecommendationCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta':
        return 'bg-red-100 text-red-800';
      case 'Media':
        return 'bg-yellow-100 text-yellow-800';
      case 'Baja':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className={`px-3 py-1 text-sm rounded-full ${getPriorityColor(priority)}`}>
          Prioridad {priority}
        </span>
      </div>

      <p className="mt-4 text-gray-600">{description}</p>

      <div className="mt-6">
        <h4 className="font-medium text-gray-900 mb-4">Pasos para mejorar:</h4>
        <ul className="space-y-3">
          {recommendations.map((rec, index) => (
            <li key={index} className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mr-3">
                {index + 1}
              </span>
              <span className="text-gray-600">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {resources && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <ResourceLinks
            courses={resources.courses}
            articles={resources.articles}
            communities={resources.communities}
          />
        </div>
      )}
    </div>
  );
} 