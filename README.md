
# 🌟 Lumina Wellness - Portal de Bienestar Moderno

Este proyecto es una aplicación web de vanguardia diseñada para **Lumina Wellness**, enfocada en la captación de clientes y prestación de servicios de salud mental. Utiliza un stack moderno para garantizar rendimiento, escalabilidad y facilidad de mantenimiento.

## 🚀 Stack Tecnológico

- **Frontend:** React 18 (SPA) + TypeScript
- **Estilos:** Tailwind CSS (Mobile-first, Responsive)
- **Backend:** [Supabase](https://supabase.com/) (API de base de datos y autenticación)
- **IA:** Google Gemini API (Asistente de bienestar)
- **Hosting:** Cloudflare Pages
- **Iconos:** Font Awesome 6

## 🛠 Justificación de Decisiones

Se ha optado por una arquitectura de **Single Page Application (SPA)** reactiva y ligera. Esta decisión se basa en:
1. **Rendimiento:** Carga instantánea de componentes y navegación fluida para el usuario final.
2. **Interactividad:** Ideal para el asistente de IA y los formularios dinámicos.
3. **Escalabilidad con Supabase:** Aprovechamos las capacidades de tiempo real (Realtime) y la facilidad de conexión API sin necesidad de gestionar servidores adicionales.

## ⚙️ Configuración y Requisitos

### Variables de Entorno
Crea un archivo `.env` en la raíz con las siguientes claves:

```env
SUPABASE_KEY=tu_anon_key_de_supabase
API_KEY=tu_clave_de_gemini_api
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

## ☁️ Despliegue en Cloudflare Pages

1. Sincroniza tu repositorio con GitHub.
2. En el panel de Cloudflare, selecciona "Create a project" -> "Connect to git".
3. Configura el comando de build: `npm run build` y el directorio de salida: `dist`.
4. **IMPORTANTE:** Añade las variables de entorno `SUPABASE_KEY` y `API_KEY` en la configuración de Cloudflare Pages antes de desplegar.

## 🗄 Estructura del Proyecto

- `/components`: Elementos UI reutilizables (Layout, Header, Cards).
- `/pages`: Componentes de página (Home, Services, Contact, AI).
- `/lib`: Configuración de clientes externos (Supabase).
- `/services`: Lógica de integración con servicios (Gemini API).
- `/constants.ts`: Configuración centralizada de tema y rutas.
- `/types.ts`: Definición de interfaces TypeScript.

## 🔐 Seguridad y Backups

- **Seguridad:** Los roles (RLS) se gestionan directamente en Supabase para proteger las tablas de `leads` y `services`.
- **Backups:** Supabase realiza backups diarios automáticos de la base de datos de producción.

---
> ⚠️ **Nota:** No hardcodear nunca la `SUPABASE_KEY` ni la `API_KEY` en los archivos fuente. Usa siempre variables de entorno.
