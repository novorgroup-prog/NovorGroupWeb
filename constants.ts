
/**
 * SECCIÓN DE TEMA (OBLIGATORIA)
 * Configuración centralizada de colores
 */
export const THEMES = {
  light: {
    primaryColor: '#0066ff',   // Azul Eléctrico
    secondaryColor: '#10B981', // Verde Bienestar
    accentColor: '#F59E0B',    // Ambar Energía
    backgroundColor: '#F9FAFB', // Gris Claro Neutro
    textColor: '#111827'
  },
  dark: {
    primaryColor: '#0EA5FF',   // Azul Eléctrico para dark
    secondaryColor: '#059669',
    accentColor: '#F59E0B',
    backgroundColor: '#1e1e1e', // Fondo oscuro
    textColor: '#E5E7EB'
  }
};

// Compatibilidad: valor por defecto (light)
export const THEME = THEMES.light;

export const SITE_CONFIG = {
  name: 'Novor Group',
  description: 'Acompañamiento profesional para tu equilibrio emocional y crecimiento personal.',
  contactEmail: 'novorgroup@gmail.com',
  social: {
    instagram: 'https://instagram.com/lumina.wellness',
    linkedin: 'https://linkedin.com/company/lumina-wellness'
  }
};

export enum Route {
  HOME = '/',
  SERVICES = '/servicios',
  CONTACT = '/contacto',
  LEGAL = '/legal',
  AI_ASSISTANT = '/asistente-ia'
}
