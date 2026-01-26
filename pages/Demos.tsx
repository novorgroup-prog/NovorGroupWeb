import React from 'react';
import { useTheme } from '../src/theme';
import { useInView } from '../src/hooks/useInView';
import { Route } from '../constants';

interface Demo {
  id: string;
  name: string;
  description: string;
  image: string;
  style: string;
  background: string;
}

export const Demos: React.FC = () => {
  const { currentTheme } = useTheme();
  const demosRef = useInView();

  const demos: Demo[] = [
    {
      id: 'minimal-tech',
      name: 'Minimalista Tech',
      description: 'Diseño limpio y moderno. Perfecto para startups y agencias de software.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      style: 'Consulta por diseño Minimalista Tech',
      background:'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    },
    {
      id: 'luxury-premium',
      name: 'Lujo Premium',
      description: 'Elegancia y sofisticación. Ideal para marcas de lujo, joyería y consultoría.',
      image: 'https://images.unsplash.com/photo-1522869635100-ce306f98b5c2?w=400&h=300&fit=crop',
      style: 'Consulta por diseño Lujo Premium',
      background:'linear-gradient(135deg, #1a1a1a 0%, #2a2520 100%)',
    },
    {
      id: 'vibrant-creative',
      name: 'Vibrant Creativo',
      description: 'Colores dinámicos para agencias creativas, diseñadores y artistas.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      style: 'Consulta por diseño Vibrant Creativo',
      background:'linear-gradient(135deg, #fff5f7 0%, #ffb703 20%, #fb5607 40%, #ff006e 60%, #8338ec 80%, #3a86ff 100%)',
    }
  ];

  return (
    <div>
      {/* Hero Demos */}
      <section className="py-20 sm:py-30" style={{ backgroundColor: currentTheme.backgroundColor }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full font-semibold text-sm mb-6 border" style={{ backgroundColor: `${currentTheme.primaryColor}15`, color: currentTheme.primaryColor, borderColor: `${currentTheme.primaryColor}30` }}>
              Inspírate
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6" style={{ color: currentTheme.textColor }}>
              Galerías de Diseño
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: currentTheme.textColor, opacity: 0.85 }}>
              Explora diferentes estilos y encuenta inspiración para tu web. Cada diseño está optimizado para convertir visitantes en clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Demos Grid */}
      <section ref={demosRef.ref} className={`py-20 transition-all duration-700 ${demosRef.isInView ? 'animate-fade-in-up' : 'opacity-0-init'}`} style={{ backgroundColor: currentTheme.backgroundBlurred }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {demos.map((demo) => (
              <div 
                key={demo.id} 
                className="rounded-3xl overflow-hidden shadow-lg border transition-all hover:shadow-2xl hover:-translate-y-2 group cursor-pointer"
                style={{ 
                  backgroundColor: currentTheme.backgroundColor, 
                  borderColor: currentTheme.lineColor 
                }}
              >
                {/* Image - Clickeable */}
                <a href={`/demo/${demo.id}`} className="block relative overflow-hidden h-48 group-hover:brightness-110 transition-all" style={{ background: demo.background }}>
                  <div className="absolute inset-0" style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {(() => {
                    switch(demo.id) {
                    case 'minimal-tech':
                      return <h4 
                        style={{
                            padding: '0.875rem 2rem',
                            backgroundColor: 'transparent',
                            color: '#0066ff',
                            border: '2px solid #0066ff',
                            borderRadius: '0.375rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                      >{demo.name}</h4>;
                    case 'luxury-premium':
                      return <h4 
                        style={{
                          padding: '1rem 3rem',
                          backgroundColor: '#d4af37',
                          color: '#0f0e0e',
                          border: 'none',
                          borderRadius: 0,
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          letterSpacing: '2px',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          fontFamily: 'Georgia, serif'
                        }}
                      >{demo.name}</h4>;
                    case 'vibrant-creative':
                      return <h4 
                        style={{
                          padding: '1rem 2rem',
                          background: 'linear-gradient(135deg, #ff006e, #8338ec)',
                          color: 'white',
                          border: '2px solid white',
                          borderRadius: '1rem',
                          fontSize: '1rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                      }}
                    >{demo.name}</h4>;
                    default:
                      return null;
                    }
                  })()}
                  </div>
                </a>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: currentTheme.textColor }}>
                    {demo.name}
                  </h3>
                  <p className="text-sm mb-6" style={{ color: currentTheme.textColor, opacity: 0.85 }}>
                    {demo.description}
                  </p>

                  {/* Button */}
                  <a
                    href={`${Route.CONTACT}?design=${encodeURIComponent(demo.style)}`}
                    className="inline-block w-full py-3 px-4 rounded-xl text-white font-bold text-center transition-all hover:shadow-lg active:scale-95"
                    style={{ backgroundColor: currentTheme.primaryColor }}
                  >
                    Solicitar Este Diseño
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 p-12 rounded-3xl text-center text-white" style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.gradientPrimary}, ${currentTheme.gradientSecondary})` }}>
            <h3 className="text-3xl font-bold mb-4">¿No encuentras tu estilo?</h3>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              No te preocupes. Podemos crear un diseño completamente personalizado basado en tu visión y necesidades comerciales.
            </p>
            <a
              href={Route.CONTACT}
              className="inline-block px-8 py-4 rounded-xl font-bold transition-all hover:shadow-lg"
              style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.primaryColor }}
            >
              Contactar para Diseño Personalizado
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
