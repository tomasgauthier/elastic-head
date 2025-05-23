import { UserProfile, AssessmentHistory, UserResponse, AssessmentResult } from '@/types/skills';

// Función auxiliar para generar IDs únicos
const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

export async function saveResponses(userId: string, responses: any) {
  localStorage.setItem(`responses:${userId}`, JSON.stringify(responses));
}

export async function getResponses(userId: string) {
  const responses = localStorage.getItem(`responses:${userId}`);
  return responses ? JSON.parse(responses as string) : null;
}

export async function saveResults(userId: string, results: any) {
  localStorage.setItem(`results:${userId}`, JSON.stringify(results));
}

export async function getResults(userId: string) {
  const results = localStorage.getItem(`results:${userId}`);
  return results ? JSON.parse(results as string) : null;
}

export async function createUserProfile(email: string): Promise<string> {
  const userId = generateId();
  const profile: UserProfile = {
    email,
    createdAt: new Date().toISOString(),
    lastAssessment: new Date().toISOString(),
  };
  
  localStorage.setItem(`profile:${userId}`, JSON.stringify(profile));
  localStorage.setItem(`email_to_id:${email}`, userId);
  
  return userId;
}

export async function getUserByEmail(email: string): Promise<string | null> {
  return localStorage.getItem(`email_to_id:${email}`);
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  const profile = localStorage.getItem(`profile:${userId}`);
  return profile ? JSON.parse(profile) : null;
}

export async function saveAssessment(
  userId: string,
  responses: UserResponse[],
  results: AssessmentResult[]
) {
  const assessmentId = generateId();
  const assessment: AssessmentHistory = {
    id: assessmentId,
    userId,
    date: new Date().toISOString(),
    responses,
    results,
  };

  // Guardar la evaluación
  localStorage.setItem(`assessment:${assessmentId}`, JSON.stringify(assessment));
  
  // Actualizar el perfil del usuario
  const profile = await getUserProfile(userId);
  if (profile) {
    profile.lastAssessment = assessment.date;
    localStorage.setItem(`profile:${userId}`, JSON.stringify(profile));
  }

  // Obtener la lista actual de evaluaciones
  const currentAssessments = JSON.parse(localStorage.getItem(`user_assessments:${userId}`) || '[]');
  currentAssessments.unshift(assessmentId);
  localStorage.setItem(`user_assessments:${userId}`, JSON.stringify(currentAssessments));

  return assessmentId;
}

export async function getAssessmentHistory(userId: string): Promise<AssessmentHistory[]> {
  const assessmentIds = JSON.parse(localStorage.getItem(`user_assessments:${userId}`) || '[]');
  const assessments: AssessmentHistory[] = [];

  for (const id of assessmentIds) {
    const assessment = localStorage.getItem(`assessment:${id}`);
    if (assessment) {
      assessments.push(JSON.parse(assessment));
    }
  }

  return assessments;
}

export async function getLatestAssessment(userId: string): Promise<AssessmentHistory | null> {
  const assessmentIds = JSON.parse(localStorage.getItem(`user_assessments:${userId}`) || '[]');
  if (!assessmentIds.length) return null;

  const assessment = localStorage.getItem(`assessment:${assessmentIds[0]}`);
  return assessment ? JSON.parse(assessment) : null;
} 