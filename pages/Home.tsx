
import React from 'react';
import { THEME, Route } from '../constants';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
              Bienvenido a tu nueva etapa
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Encuentra la calma en un <span style={{ color: THEME.primaryColor }}>mundo ruidoso</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Ofrecemos terapias personalizadas y herramientas de IA para mejorar tu bienestar emocional desde cualquier lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`#${Route.SERVICES}`}
                className="px-8 py-4 rounded-2xl text-white font-bold text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: THEME.primaryColor }}
              >
                Explorar Servicios
              </a>
              <a 
                href={`#${Route.AI_ASSISTANT}`}
                className="px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold text-center border border-gray-200 shadow-sm hover:bg-gray-50 transition-all"
              >
                Prueba Lumina AI
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i}/100/100`} alt="Avatar" />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                +500 personas ya confían en nosotros
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Wellness" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <i className="fa-solid fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Bienestar Real</p>
                  <p className="text-sm text-gray-500">100% online y seguro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Pacientes Felices', value: '500+' },
            { label: 'Sesiones Realizadas', value: '2k+' },
            { label: 'Expertos Activos', value: '15' },
            { label: 'Satisfacción', value: '98%' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir Lumina?</h2>
            <p className="text-gray-600">Combinamos la experiencia humana con la innovación tecnológica para ofrecerte el mejor cuidado posible.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Personalización', desc: 'Cada plan se adapta a tus necesidades específicas y ritmo de vida.', icon: 'fa-heart' },
              { title: 'Accesibilidad', desc: 'Conéctate desde cualquier lugar, sin desplazamientos innecesarios.', icon: 'fa-globe' },
              { title: 'Tecnología IA', desc: 'Asistente de IA disponible 24/7 para apoyo inmediato y recursos.', icon: 'fa-robot' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white text-2xl" style={{ backgroundColor: idx % 2 === 0 ? THEME.primaryColor : THEME.secondaryColor }}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
