interface ResourceLinksProps {
  courses: string[];
  articles: string[];
  communities: string[];
}

export function ResourceLinks({ courses, articles, communities }: ResourceLinksProps) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium text-gray-900 mb-3">📚 Cursos Recomendados</h4>
        <ul className="space-y-2">
          {courses.map((course, index) => (
            <li key={index} className="text-blue-600 hover:text-blue-800 transition-colors">
              <a href="#" className="flex items-center">
                <span className="mr-2">•</span>
                {course}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-3">📝 Artículos y Recursos</h4>
        <ul className="space-y-2">
          {articles.map((article, index) => (
            <li key={index} className="text-blue-600 hover:text-blue-800 transition-colors">
              <a href="#" className="flex items-center">
                <span className="mr-2">•</span>
                {article}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-3">👥 Comunidades</h4>
        <ul className="space-y-2">
          {communities.map((community, index) => (
            <li key={index} className="text-blue-600 hover:text-blue-800 transition-colors">
              <a href="#" className="flex items-center">
                <span className="mr-2">•</span>
                {community}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Estos recursos son recomendaciones basadas en tu nivel actual. 
          Recuerda que el aprendizaje es un proceso continuo y personal.
        </p>
      </div>
    </div>
  );
} 