import { Question } from '@/types/skills';

const likertOptions = [
  { value: 1, label: 'Muy bajo' },
  { value: 2, label: 'Bajo' },
  { value: 3, label: 'Medio' },
  { value: 4, label: 'Alto' },
  { value: 5, label: 'Muy alto' }
];

const frequencyOptions = [
  { value: 1, label: 'Nunca' },
  { value: 2, label: 'Raramente' },
  { value: 3, label: 'Ocasionalmente' },
  { value: 4, label: 'Frecuentemente' },
  { value: 5, label: 'Siempre' }
];

export const questions: Question[] = [
  // IA y Big Data
  {
    id: 'ai_1',
    skillId: 'ai_bigdata',
    text: '¿Qué tan cómodo te sientes trabajando con grandes conjuntos de datos y herramientas de análisis?',
    type: 'likert',
    options: likertOptions
  },
  {
    id: 'ai_2',
    skillId: 'ai_bigdata',
    text: '¿Con qué frecuencia utilizas o interactúas con herramientas de IA en tu trabajo o estudios?',
    type: 'frequency',
    options: frequencyOptions
  },
  {
    id: 'ai_3',
    skillId: 'ai_bigdata',
    text: '¿Qué tan bien comprendes los conceptos básicos de machine learning y análisis de datos?',
    type: 'likert',
    options: likertOptions
  },

  // Ciberseguridad
  {
    id: 'cyber_1',
    skillId: 'cybersecurity',
    text: '¿Qué tan familiarizado estás con las mejores prácticas de seguridad digital?',
    type: 'likert',
    options: likertOptions
  },
  {
    id: 'cyber_2',
    skillId: 'cybersecurity',
    text: '¿Con qué frecuencia implementas medidas de seguridad en tu trabajo digital?',
    type: 'frequency',
    options: frequencyOptions
  },

  // Alfabetización Tecnológica
  {
    id: 'tech_1',
    skillId: 'tech_literacy',
    text: '¿Qué tan rápido te adaptas a nuevas herramientas y tecnologías?',
    type: 'likert',
    options: likertOptions
  },
  {
    id: 'tech_2',
    skillId: 'tech_literacy',
    text: '¿Con qué frecuencia exploras o aprendes sobre nuevas tecnologías?',
    type: 'frequency',
    options: frequencyOptions
  },

  // Pensamiento Creativo
  {
    id: 'creative_1',
    skillId: 'creative_thinking',
    text: '¿Qué tan frecuentemente propones soluciones innovadoras a problemas?',
    type: 'frequency',
    options: frequencyOptions
  },
  {
    id: 'creative_2',
    skillId: 'creative_thinking',
    text: '¿Qué tan cómodo te sientes pensando "fuera de la caja"?',
    type: 'likert',
    options: likertOptions
  },

  // Resiliencia
  {
    id: 'resilience_1',
    skillId: 'resilience',
    text: '¿Qué tan bien manejas los cambios inesperados en tu trabajo o vida?',
    type: 'likert',
    options: likertOptions
  },
  {
    id: 'resilience_2',
    skillId: 'resilience',
    text: '¿Con qué frecuencia te recuperas rápidamente de contratiempos?',
    type: 'frequency',
    options: frequencyOptions
  },

  // Aprendizaje Continuo
  {
    id: 'learning_1',
    skillId: 'continuous_learning',
    text: '¿Con qué frecuencia dedicas tiempo a aprender nuevas habilidades?',
    type: 'frequency',
    options: frequencyOptions
  },
  {
    id: 'learning_2',
    skillId: 'continuous_learning',
    text: '¿Qué tan motivado te sientes para aprender cosas nuevas?',
    type: 'likert',
    options: likertOptions
  },

  // Liderazgo
  {
    id: 'leadership_1',
    skillId: 'leadership',
    text: '¿Qué tan efectivo eres liderando equipos o proyectos?',
    type: 'likert',
    options: likertOptions
  },
  {
    id: 'leadership_2',
    skillId: 'leadership',
    text: '¿Con qué frecuencia tomas la iniciativa en situaciones grupales?',
    type: 'frequency',
    options: frequencyOptions
  },

  // Gestión del Talento
  {
    id: 'talent_1',
    skillId: 'talent_management',
    text: '¿Qué tan bien identificas y desarrollas el potencial en otros?',
    type: 'likert',
    options: likertOptions
  },
  {
    id: 'talent_2',
    skillId: 'talent_management',
    text: '¿Con qué frecuencia participas en actividades de mentoring o coaching?',
    type: 'frequency',
    options: frequencyOptions
  },

  // Pensamiento Analítico
  {
    id: 'analytical_1',
    skillId: 'analytical_thinking',
    text: '¿Qué tan bien analizas problemas complejos?',
    type: 'likert',
    options: likertOptions
  },
  {
    id: 'analytical_2',
    skillId: 'analytical_thinking',
    text: '¿Con qué frecuencia utilizas datos para tomar decisiones?',
    type: 'frequency',
    options: frequencyOptions
  },

  // Gestión Ambiental
  {
    id: 'env_1',
    skillId: 'environmental',
    text: '¿Qué tan bien comprendes los principios de sostenibilidad?',
    type: 'likert',
    options: likertOptions
  },
  {
    id: 'env_2',
    skillId: 'environmental',
    text: '¿Con qué frecuencia consideras el impacto ambiental en tus decisiones?',
    type: 'frequency',
    options: frequencyOptions
  }
]; 