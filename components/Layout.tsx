
import React, { ReactNode, useState, useEffect } from 'react';
import { THEMES, Route } from '../constants';

interface LayoutProps {
  children: ReactNode;
}

const NavLink: React.FC<{ to: string; children: ReactNode }> = ({ to, children }) => (
  <a 
    href={`#${to}`} 
    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
  >
    {children}
  </a>
);

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    try {
      const stored = localStorage.getItem('themeMode');
      return (stored === 'dark' ? 'dark' : 'light');
    } catch (e) {
      return 'light';
    }
  });

  const currentTheme = THEMES[themeMode];

  useEffect(() => {
    try {
      localStorage.setItem('themeMode', themeMode);
    } catch (e) {}
  }, [themeMode]);

  useEffect(() => {
    document.body.style.backgroundColor = currentTheme.backgroundColor;
  }, [currentTheme]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.textColor }}>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: currentTheme.primaryColor }}>
              <i className="fa-solid fa-sparkles text-lg"></i>
            </div>
            <span className="text-2xl font-bold tracking-tight" style={{ color: currentTheme.textColor }}>Novor <span style={{ color: currentTheme.primaryColor }}>Group</span></span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to={Route.HOME}>Inicio</NavLink>
            <NavLink to={Route.SERVICES}>Servicios</NavLink>
            <NavLink to={Route.AI_ASSISTANT}>Asistente IA</NavLink>
            <NavLink to={Route.CONTACT}>Contacto</NavLink>
            <a 
              href={`#${Route.CONTACT}`}
              className="px-6 py-2.5 rounded-full text-white font-semibold transition-all hover:shadow-lg active:scale-95"
              style={{ backgroundColor: currentTheme.primaryColor }}
            >
              Reservar Cita
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setThemeMode(m => m === 'light' ? 'dark' : 'light')}
              aria-label="Cambiar tema"
              className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              style={{ color: currentTheme.textColor }}
            >
              <i className={`fa-solid ${themeMode === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>

            <button className="md:hidden text-gray-600">
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: currentTheme.primaryColor }}>
                <i className="fa-solid fa-sparkles"></i>
              </div>
              <span className="text-xl font-bold">Lumina Wellness</span>
            </div>
            <p className="text-gray-400 mb-6">Acompañando tu camino hacia la plenitud y el equilibrio emocional.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href={`#${Route.HOME}`} className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href={`#${Route.SERVICES}`} className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href={`#${Route.AI_ASSISTANT}`} className="hover:text-white transition-colors">Lumina AI</a></li>
              <li><a href={`#${Route.CONTACT}`} className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href={`#${Route.LEGAL}`} className="hover:text-white transition-colors">Aviso Legal</a></li>
              <li><a href={`#${Route.LEGAL}`} className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href={`#${Route.LEGAL}`} className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope" style={{ color: currentTheme.primaryColor }}></i>
                <span>hola@lumina-wellness.com</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot" style={{ color: currentTheme.primaryColor }}></i>
                <span>C. Gran Vía, 28, 28013 Madrid</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Lumina Wellness. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};
