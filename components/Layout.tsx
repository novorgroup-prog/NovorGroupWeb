
import React, { ReactNode, useState } from 'react';
import { Route } from '../constants';
import { ThemeProvider, useTheme } from '../src/theme';

interface LayoutProps {
  children: ReactNode;
}

const NavLinkInner: React.FC<{ to: string; children: ReactNode; theme: any }> = ({ to, children, theme }) => {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="font-medium transition-colors"
      style={{ color: hover ? theme.primaryColor : theme.textColor }}
    >
      {children}
    </a>
  );
};

const LayoutContent: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme, themeMode, setThemeMode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: currentTheme.backgroundBlurred, color: currentTheme.textColor, borderColor:currentTheme.lineColor }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: currentTheme.primaryColor }}>
              <img src="/src/img/logos/novor_Logo_White.png" className="w-5 h-6" alt="Logo" />
            </div>
            <span className="text-2xl font-bold tracking-tight" style={{ color: currentTheme.textColor }}>Novor <span style={{ color: currentTheme.primaryColor }}>Group</span></span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLinkInner to={Route.HOME} theme={currentTheme}>Inicio</NavLinkInner>
            <NavLinkInner to={Route.SERVICES} theme={currentTheme}>Servicios</NavLinkInner>
            <NavLinkInner to={Route.DEMOS} theme={currentTheme}>Demos</NavLinkInner>
            <NavLinkInner to={Route.CONTACT} theme={currentTheme}>Contacto</NavLinkInner>
            <a
              href={Route.CONTACT}
              className="px-6 py-2.5 rounded-full text-white font-semibold transition-all hover:shadow-lg active:scale-95"
              style={{ backgroundColor: currentTheme.primaryColor }}
            >
              Solicitar Presupuesto
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setThemeMode(m => m === 'light' ? 'dark' : 'light')}
              aria-label="Cambiar tema"
              className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-opacity-5 transition-colors"
              style={{ color: currentTheme.textColor }}
            >
              <i className={`fa-solid ${themeMode === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>

            <button className="md:hidden" style={{ color: currentTheme.textColor }}>
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="pt-16 pb-8" style={{ backgroundColor: currentTheme.secondaryBackgroundColor, color: currentTheme.textColor, transition: 'background-color 0.35s ease, color 0.35s ease' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: currentTheme.primaryColor }}>
                <img src="/src/img/logos/novor_Logo_White.png" className="w-5 h-6 mx-auto" alt="Logo" />
              </div>
              <span className="text-xl font-bold" style={{ color: currentTheme.textColor }}>Novor Group</span>
            </div>
            <p className="mb-6" style={{ color: currentTheme.textColor, opacity: 0.85 }}>Desarrollo de webs personalizadas que venden. Expertos en diseño y estrategia digital.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity" style={{ backgroundColor: currentTheme.primaryColor }}>
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity" style={{ backgroundColor: currentTheme.primaryColor }}>
                <i className="fa-brands fa-linkedin text-white"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: currentTheme.textColor }}>Navegación</h4>
            <ul className="space-y-4">
              <li><a href={Route.HOME} style={{ color: currentTheme.textColor }} className="transition-colors">Inicio</a></li>
              <li><a href={Route.SERVICES} style={{ color: currentTheme.textColor }} className="transition-colors">Servicios</a></li>
              <li><a href={Route.AI_ASSISTANT} style={{ color: currentTheme.textColor }} className="transition-colors">Asistente IA</a></li>
              <li><a href={Route.CONTACT} style={{ color: currentTheme.textColor }} className="transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: currentTheme.textColor }}>Legal</h4>
            <ul className="space-y-4">
              <li><a href={Route.LEGAL} style={{ color: currentTheme.textColor }} className="transition-colors">Aviso Legal</a></li>
              <li><a href={Route.LEGAL} style={{ color: currentTheme.textColor }} className="transition-colors">Política de Privacidad</a></li>
              <li><a href={Route.LEGAL} style={{ color: currentTheme.textColor }} className="transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: currentTheme.textColor }}>Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope" style={{ color: currentTheme.primaryColor }}></i>
                <span>novorgroup@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-globe" style={{ color: currentTheme.primaryColor }}></i>
                <a href="https://novorgroup.com/contacto" className="text-white">novorgroup.com/contacto</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 border-t pt-8 text-center text-sm" style={{ borderTopColor: currentTheme.lineColor, color: currentTheme.textColor, opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} Novor Group. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
};
