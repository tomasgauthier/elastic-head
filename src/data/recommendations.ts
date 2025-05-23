import { Skill } from '@/types/skills';

interface SkillRecommendation {
  skillId: string;
  recommendations: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
  };
  resources: {
    courses: string[];
    articles: string[];
    communities: string[];
  };
}

export const recommendations: SkillRecommendation[] = [
  {
    skillId: 'ai_bigdata',
    recommendations: {
      beginner: [
        'Completar cursos básicos de análisis de datos',
        'Aprender conceptos fundamentales de IA y machine learning',
        'Practicar con herramientas de visualización de datos'
      ],
      intermediate: [
        'Desarrollar proyectos prácticos de análisis de datos',
        'Aprender técnicas avanzadas de machine learning',
        'Participar en competencias de ciencia de datos'
      ],
      advanced: [
        'Liderar proyectos de implementación de IA',
        'Mentorear a otros en análisis de datos',
        'Contribuir a proyectos open source de IA'
      ]
    },
    resources: {
      courses: [
        'Coursera: Machine Learning Specialization',
        'DataCamp: Data Science Career Track',
        'Fast.ai: Practical Deep Learning'
      ],
      articles: [
        'Towards Data Science',
        'Analytics Vidhya',
        'KDnuggets'
      ],
      communities: [
        'Kaggle',
        'Stack Overflow',
        'GitHub'
      ]
    }
  },
  {
    skillId: 'cybersecurity',
    recommendations: {
      beginner: [
        'Aprender conceptos básicos de seguridad',
        'Estudiar protocolos de red fundamentales',
        'Practicar en entornos seguros de prueba'
      ],
      intermediate: [
        'Obtener certificaciones de seguridad',
        'Participar en programas de bug bounty',
        'Aprender técnicas de pentesting'
      ],
      advanced: [
        'Desarrollar herramientas de seguridad',
        'Realizar auditorías de seguridad',
        'Investigar amenazas emergentes'
      ]
    },
    resources: {
      courses: [
        'CompTIA Security+',
        'Certified Ethical Hacker',
        'SANS Institute Courses'
      ],
      articles: [
        'Krebs on Security',
        'Dark Reading',
        'The Hacker News'
      ],
      communities: [
        'HackerOne',
        'Bugcrowd',
        'OWASP'
      ]
    }
  },
  // ... Más recomendaciones para otras habilidades
];

export function getRecommendationsForSkill(skillId: string, level: 'beginner' | 'intermediate' | 'advanced'): string[] {
  const skillRec = recommendations.find(r => r.skillId === skillId);
  if (!skillRec) return [];
  return skillRec.recommendations[level];
}

export function getResourcesForSkill(skillId: string) {
  const skillRec = recommendations.find(r => r.skillId === skillId);
  if (!skillRec) return null;
  return skillRec.resources;
}

export function getSkillLevel(score: number): 'beginner' | 'intermediate' | 'advanced' {
  if (score < 2.5) return 'beginner';
  if (score < 4) return 'intermediate';
  return 'advanced';
} 