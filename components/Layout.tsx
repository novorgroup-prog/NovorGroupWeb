
import React, { ReactNode, useState, useEffect } from 'react';
import { Route } from '../constants';
import { ThemeProvider, useTheme } from '../src/theme';
import { relative } from 'path';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCookies, setShowCookies] = useState(() => {
    try {
      return !localStorage.getItem('cookiesAccepted');
    } catch (e) {
      return true;
    }
  });

  const handleAcceptCookies = () => {
    try {
      localStorage.setItem('cookiesAccepted', 'true');
      setShowCookies(false);
    } catch (e) { }
  };

  const handleRejectCookies = () => {
    try {
      localStorage.setItem('cookiesAccepted', 'rejected');
      setShowCookies(false);
    } catch (e) { }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      setShowMobileMenu(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setShowMobileMenu(false);
      }, 500);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen]);

  // Cerrar el menú móvil cuando se redimensiona la ventana a tamaño desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b ${!showMobileMenu ? currentTheme.backgroundBlurred : ''}`}
        style={{
          backgroundColor: showMobileMenu ? currentTheme.backgroundColor : undefined,
          color: currentTheme.textColor,
          borderColor: currentTheme.lineColor
        }}>
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
              className="md:inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-opacity-5 transition-colors"
              style={{ color: currentTheme.textColor }}
            >
              <i className={`fa-solid ${themeMode === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: currentTheme.textColor }}
              className="md:hidden"
            >

              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </header>

      {showMobileMenu && (
        <>
          <div
            className="md:hidden fixed inset-0 z-30"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <nav
            className="md:hidden border-b fixed top-20 left-0 right-0 z-40 overflow-hidden"
            style={{
              backgroundColor: currentTheme.secondaryBackgroundColor,
              borderColor: currentTheme.lineColor,
              animation: mobileMenuOpen ? 'slideDown 0.7s ease-out' : 'slideUp 0.7s ease-out',
              pointerEvents: mobileMenuOpen ? 'auto' : 'none'
            }}
          >
              <style>{`
              @keyframes slideDown {
                from {
                  transform: translateY(-500px);
                }
                to {
                  transform: translateY(0);
                }
              }
              @keyframes slideUp {
                from {
                  transform: translateY(0);
                }
                to {
                  transform: translateY(-500px);
                }
              }
            `}</style>
              <div className="px-4 py-4 space-y-3">
                <a
                  href={Route.HOME}
                  className="block py-2 transition-colors"
                  style={{ color: currentTheme.textColor }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </a>
                <a
                  href={Route.SERVICES}
                  className="block py-2 transition-colors"
                  style={{ color: currentTheme.textColor }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Servicios
                </a>
                <a
                  href={Route.DEMOS}
                  className="block py-2 transition-colors"
                  style={{ color: currentTheme.textColor }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Demos
                </a>
                <a
                  href={Route.CONTACT}
                  className="block py-2 transition-colors"
                  style={{ color: currentTheme.textColor }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </a>
                <a
                  href={Route.CONTACT}
                  className="block w-full py-2.5 rounded-lg text-center text-white font-semibold transition-all mt-4"
                  style={{ backgroundColor: currentTheme.primaryColor }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solicitar Presupuesto
                </a>
              </div>
            </nav>
        </>
      )}

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
              <li><a href={Route.DEMOS} style={{ color: currentTheme.textColor }} className="transition-colors">Demos</a></li>
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
                <a href="https://novorgroup.com/contacto" style={{ color: currentTheme.textColor }}>novorgroup.com/contacto</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 border-t pt-8 text-center text-sm" style={{ borderTopColor: currentTheme.lineColor, color: currentTheme.textColor, opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} Novor Group. Todos los derechos reservados.
        </div>
      </footer>

      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 flex justify-center">
          <div className="w-3/4 p-6 rounded-lg backdrop-blur-md border transition-all" style={{
            backgroundColor: currentTheme.gradientPrimary,
            borderColor: currentTheme.lineColor,
            color: '#fff'
          }}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">🍪 Cookies y Privacidad</h3>
                <p className="text-sm opacity-85">
                  Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al continuar navegando, aceptas nuestra{' '}
                  <a href={Route.LEGAL} className="underline font-semibold" style={{ color: currentTheme.primaryColor }}>
                    política de privacidad
                  </a>.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={handleRejectCookies}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors border"
                  style={{
                    borderColor: currentTheme.primaryColor == "#0066ff" ? '#fff' : currentTheme.primaryColor,
                    color: currentTheme.primaryColor == "#0066ff" ? '#fff' : currentTheme.primaryColor,
                    backgroundColor: currentTheme.gradientPrimary
                  }}
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAcceptCookies}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: '#0EA5FF' }}
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
