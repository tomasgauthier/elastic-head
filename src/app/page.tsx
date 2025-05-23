import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Diagnóstico de Habilidades para el{' '}
            <span className="text-blue-600">Futuro del Trabajo</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Basado en el Future of Jobs Report 2025 del Foro Económico Mundial
          </p>
        </div>

        <div className="mt-16">
          <div className="rounded-lg bg-white shadow-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-gray-900">
                  Evalúa tus habilidades para el 2030
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Descubre cómo te posicionas frente a las 10 habilidades más demandadas del futuro y recibe recomendaciones personalizadas para tu desarrollo profesional.
                </p>
              </div>

              <div className="mt-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Evaluación completa de las 10 habilidades más relevantes
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Resultados instantáneos con análisis detallado
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Recomendaciones personalizadas para tu desarrollo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-8 bg-gray-50 sm:px-10">
              <div className="text-center">
                <Link
                  href="/assessment"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Comenzar Diagnóstico
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            ¿Por qué es importante?
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Transformación Digital</h3>
              <p className="mt-2 text-base text-gray-500">
                El 39% de las habilidades actuales se transformarán o quedarán obsoletas para 2030.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Demanda Laboral</h3>
              <p className="mt-2 text-base text-gray-500">
                59 de cada 100 trabajadores necesitarán capacitación para 2030.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900">Prioridad Empresarial</h3>
              <p className="mt-2 text-base text-gray-500">
                85% de las empresas están priorizando el desarrollo de nuevas habilidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
