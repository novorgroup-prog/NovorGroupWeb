
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
    secondaryBackgroundColor: '#eeeeee',
    textColor: '#111827',
    backgroundBlurred: 'bg-white/80',
    lineColor: 'rgba(154, 154, 154, 0.12)',
    shadow:'shadow-sm',
    shadowColor: 'rgba(202, 202, 202, 0.1)',
    homeImage:'/src/img/ChatGPT Image 23 ene 2026, 16_12_46.png'
  },
  dark: {
    primaryColor: '#0EA5FF',   // Azul Eléctrico para dark
    secondaryColor: '#059669',
    accentColor: '#F59E0B',
    backgroundColor: '#1d1d1d', // Fondo oscuro
    secondaryBackgroundColor: '#111111',
    textColor: '#E5E7EB',
    backgroundBlurred: 'bg-dark/80',
    lineColor: 'rgba(255,255,255,0.12)',
    shadow: 'shadow-md',
    shadowColor: 'rgba(0, 0, 0, 0.63)',
    homeImage:'/src/img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'
  }
};

// Compatibilidad: valor por defecto (light)
export const THEME = THEMES.light;

export const SITE_CONFIG = {
  name: 'Novor Group',
  description: 'Desarrollo de webs personalizadas que venden. Diseño estratégico, SEO y conversión.',
  contactEmail: 'contacto@novorgroup.com',
  social: {
    instagram: 'https://instagram.com/novorgroup',
    linkedin: 'https://linkedin.com/company/novor-group'
  }
};

export enum Route {
  HOME = '/',
  SERVICES = '/servicios',
  CONTACT = '/contacto',
  LEGAL = '/legal',
  AI_ASSISTANT = '/asistente-ia'
}
