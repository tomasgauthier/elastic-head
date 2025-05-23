# Diagnóstico de Habilidades Futuras

Una herramienta de diagnóstico web basada en el "Future of Jobs Report 2025" del Foro Económico Mundial para ayudar a las personas a identificar sus brechas de habilidades con respecto al futuro del trabajo.

## Características

- Evaluación de las 10 habilidades más relevantes para 2030
- Interfaz intuitiva y amigable
- Resultados instantáneos con análisis detallado
- Recomendaciones personalizadas
- Almacenamiento seguro de datos con Vercel KV
- Visualización de datos con gráficos radar

## Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel KV
- Chart.js
- Vercel Analytics

## Configuración del Proyecto

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd elastic-head
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
- Crea un archivo `.env.local` basado en `.env.example`
- Añade las credenciales de Vercel KV

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
src/
  ├── app/                    # Páginas de la aplicación
  │   ├── page.tsx           # Página principal
  │   ├── assessment/        # Evaluación
  │   └── results/           # Resultados
  ├── components/            # Componentes reutilizables
  ├── data/                  # Datos estáticos
  │   ├── skills.ts         # Definición de habilidades
  │   └── questions.ts      # Preguntas del diagnóstico
  ├── lib/                   # Utilidades y configuraciones
  │   └── kv.ts             # Cliente de Vercel KV
  └── types/                 # Definiciones de tipos
      └── skills.ts         # Tipos relacionados con habilidades
```

## Despliegue

La aplicación está optimizada para ser desplegada en Vercel:

1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno en el dashboard de Vercel
3. Despliega la aplicación

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerir cambios o mejoras.

## Licencia

MIT
