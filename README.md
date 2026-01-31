# 🌟 Novor Group - Webs que venden

Este proyecto es el sitio web corporativo de **Novor Group**, una agencia especializada en la creación de páginas web de alto impacto, diseñadas para captar clientes y vender. La plataforma incluye un portafolio de demos interactivas y un asistente de IA integrado.

## 🚀 Stack Tecnológico

- **Frontend:** React 19 (SPA) + TypeScript
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS v4
- **Navegación:** Custom Router Context (SPA sin dependencias externas pesadas)
- **Backend:** [Supabase](https://supabase.com/) (Base de datos para leads y contactos)
- **IA:** Google Gemini API (Asistente virtual integrado)
- **Hosting:** Optimizado para Cloudflare Pages / Netlify

## 🛠 Características Clave

1. **Diseño Premium:** Interfaces modernas con animaciones fluidas y estética "Glassmorphism".
2. **Sistema de Routing Propio:** Implementación ligera de navegación SPA para máximo rendimiento.
3. **Galería de Demos:** Páginas de demostración integradas para diferentes sectores (Tech, Lujo, Creativo).
4. **Asistente IA:** Chatbot contextual potenciado por Google Gemini.
5. **Captación de Leads:** Formularios integrados con Supabase.

## ⚙️ Configuración y Requisitos

### Variables de Entorno
Crea un archivo `.env` o `.env.local` en la raíz con las siguientes claves:

```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
VITE_GEMINI_API_KEY=tu_clave_de_gemini_api
```

### Comandos Principales
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🗄 Estructura del Proyecto

- `/components`: Elementos UI reutilizables (Link, Layout, Cards).
- `/pages`: Vistas principales.
  - `Home.tsx`: Landing page principal.
  - `Services.tsx`: Catálogo de servicios web.
  - `Demos.tsx`: Galería de plantillas.
  - `demos_pages/`: Implementaciones de demos específicas (Minimal, Luxury, Vibrant).
  - `AIAsistant.tsx`: Interfaz del asistente de IA.
  - `Contact.tsx`: Formulario de contacto.
- `/src/router`: Lógica del enrutador personalizado (`RouterContext`).
- `/lib`: Cliente de Supabase.
- `/services`: Integración con Gemini AI.
- `/types.ts`: Tipado estático de la aplicación.

## 🔐 Seguridad y Datos

- **Protección de Datos:** Los formularios envían la información directamente a Supabase bajo conexión segura.
- **Rendimiento:** El sitio está optimizado para cargar instantáneamente gracias a Vite y la arquitectura SPA.

---
> ⚠️ **Nota:** Asegúrate de configurar las políticas RLS en Supabase para permitir la inserción de leads desde el frontend anonimo si es necesario.
