
import { GoogleGenAI } from "@google/genai";

// Inicialización segura del cliente de IA
const getApiKey = () => (typeof process !== 'undefined' && process.env.API_KEY) || '';
const apiKey = getApiKey();

export const getWellnessAdvice = async (query: string) => {
  if (!apiKey) {
    return "El asistente no está configurado correctamente (falta API_KEY). Por favor, contacta con soporte.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `Eres LuminaAI, una asistente virtual experta en bienestar y psicología positiva para Lumina Wellness. 
        Tu objetivo es ofrecer consejos breves, empáticos y prácticos sobre autocuidado, gestión del estrés y mindfulness. 
        IMPORTANTE: Si el usuario menciona autolesiones o crisis graves, indica que eres una IA y que debe contactar con servicios de emergencia de inmediato.
        Responde siempre en español y mantén un tono profesional pero cálido.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo siento, mi conexión con el servidor de bienestar se ha interrumpido. Por favor, inténtalo de nuevo en unos momentos.";
  }
};
