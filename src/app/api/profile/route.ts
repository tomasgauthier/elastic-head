import { NextResponse } from 'next/server';
import { createUserProfile, getUserByEmail, saveAssessment } from '@/lib/kv';
import { AssessmentResult, UserResponse } from '@/types/skills';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, responses, results } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'El correo electrónico es requerido' },
        { status: 400 }
      );
    }

    // Verificar si el usuario ya existe
    let userId = await getUserByEmail(email);

    // Si no existe, crear un nuevo perfil
    if (!userId) {
      userId = await createUserProfile(email);
    }

    // Guardar la evaluación
    if (responses && results) {
      await saveAssessment(
        userId,
        responses as UserResponse[],
        results as AssessmentResult[]
      );
    }

    return NextResponse.json({ userId });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
} 