
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
        systemInstruction: `Eres NovorAI, una asistente virtual experta en comfort digital y el desempeño de webs para Novor Group. 
        Tu objetivo es ofrecer consejos breves, empáticos y prácticos sobre cualquier pregunta sobre nuestra empresa. 
        IMPORTANTE:Si el usuario te pide cualquier cosa que no sea una pregunta sobre Novor Group, indica que eres una IA y no puedes proporcionar esa información.
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
