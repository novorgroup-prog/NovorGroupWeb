
import React from 'react';
import { Route } from '../constants';
import { useTheme } from '../src/theme';
import { useInView } from '../src/hooks/useInView';
import '../src/styles/animations.css';

export const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const whatOfferRef = useInView();
  const forWhoRef = useInView();
  const whyUsRef = useInView();
  const testimonialsRef = useInView();
  const statsRef = useInView();
  const ctaRef = useInView();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10" style={{ backgroundColor: currentTheme.backgroundColor }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full font-semibold text-sm mb-6 border" style={{ backgroundColor: `${currentTheme.primaryColor}15`, color: currentTheme.primaryColor, borderColor: `${currentTheme.primaryColor}30` }}>
              Desarrollo Web a Medida
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6" style={{ color: currentTheme.textColor }}>
              Webs que venden.<br/><span style={{ color: currentTheme.primaryColor }}>Hechas para tu negocio.</span>
            </h1>
            <p className="text-xl mb-10 leading-relaxed max-w-lg" style={{ color: currentTheme.textColor, opacity: 0.85 }}>
              Diseño personalizado, velocidad de carga optimizada e integración con tu estrategia comercial. Webs que convierten visitantes en clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`#${Route.CONTACT}`}
                className="px-8 py-4 rounded-2xl text-white font-bold text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: currentTheme.primaryColor }}
              >
                Solicitar Presupuesto
              </a>
              <a 
                href={`#${Route.CONTACT}`}
                className="px-8 py-4 rounded-2xl font-bold text-center border transition-all"
                style={{ backgroundColor: `${currentTheme.primaryColor}10`, color: currentTheme.primaryColor, borderColor: currentTheme.primaryColor }}
              >
                Hablemos
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2" src={`https://picsum.photos/seed/${i}/100/100`} alt="Avatar" style={{ borderColor: currentTheme.backgroundColor }} />
                ))}
              </div>
              <p className="text-sm font-medium" style={{ color: currentTheme.textColor, opacity: 0.7 }}>
                +120 webs activas generando ventas
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 transition-all duration-500">
              <img 
                src={currentTheme.homeImage} 
                className="w-full h-full object-cover transition-all duration-500" 
                alt="Wellness" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 rounded-3xl shadow-xl border hidden sm:block animate-bounce-slow transition-all duration-500" style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 transition-all duration-500">
                  <i className="fa-solid fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <p className="font-bold transition-colors duration-500" style={{ color: currentTheme.textColor }}>Resultados Comprobados</p>
                  <p className="text-sm transition-colors duration-500" style={{ color: currentTheme.textColor, opacity: 0.6 }}>100% online y seguro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿QUÉ OFRECES? */}
      <section ref={whatOfferRef.ref} className={`py-24 transition-all duration-700 ${whatOfferRef.isInView ? 'animate-fade-in-up' : 'opacity-0-init'}`} style={{ backgroundColor: currentTheme.backgroundBlurred }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-6" style={{ color: currentTheme.textColor }}>¿Qué ofrecemos?</h2>
            <p className="text-xl" style={{ color: currentTheme.textColor, opacity: 0.85 }}>
              Soluciones digitales completas que transforman tu presencia online en un generador de ingresos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Webs Personalizadas', desc: 'Diseño único y estratégico. Cada píxel cuenta. Optimizado para conversiones y SEO.', icon: 'fa-code', benefit: '↑ Ventas desde el día 1' },
              //{ title: 'E-commerce Profesional', desc: 'Tienda online completa. Pasarelas de pago integradas, inventario automático y análisis de ventas.', icon: 'fa-shopping-cart', benefit: 'Vende 24/7' },
              { title: 'Mantenimiento & Soporte', desc: 'Actualizaciones de seguridad, backups automáticos y soporte técnico prioritario. Olvídate de problemas.', icon: 'fa-shield', benefit: 'Tu web siempre activa' },
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl border transition-all hover:shadow-lg" style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl" style={{ backgroundColor: currentTheme.primaryColor }}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: currentTheme.textColor }}>{service.title}</h3>
                <p className="mb-4" style={{ color: currentTheme.textColor, opacity: 0.85 }}>{service.desc}</p>
                <div className="pt-4 border-t" style={{ borderColor: currentTheme.lineColor }}>
                  <p className="text-sm font-semibold" style={{ color: currentTheme.primaryColor }}>✨ {service.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿PARA QUIÉN? */}
      <section ref={forWhoRef.ref} className={`py-24 transition-all duration-700 ${forWhoRef.isInView ? 'animate-fade-in-up' : 'opacity-0-init'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-6" style={{ color: currentTheme.textColor }}>¿Para quién?</h2>
            <p className="text-xl" style={{ color: currentTheme.textColor, opacity: 0.85 }}>
              Webs a medida para autónomos, tiendas pequeñas y empresas que necesitan presencia online profesional con mantenimiento continuo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { persona: 'Autónomos & Freelancers', desc: 'Tu presencia profesional online. Portfolio, servicios, formularios de contacto. Una web que genera clientes automáticamente.', needs: ['Portfolio elegante', 'Contacto directo', 'Mantenimiento incluido'] },
              { persona: 'Tiendas Pequeñas & Locales', desc: 'Tu tienda online profesional. Productos, carrito de compra, pasarela de pago segura. Vende sin depender de intermediarios.', needs: ['Tienda online', 'Pasarelas de pago', 'Soporte continuo'] },
              { persona: 'Pequeñas Empresas', desc: 'Presencia corporativa que genera confianza. Catálogo de servicios, contacto y atracción de clientes. Todo integrado en una web.', needs: ['Sitio corporativo', 'Gestión de contenidos', 'Mantenimiento gratis'] },
              { persona: 'Negocios en Crecimiento', desc: 'Una web que crece con tu negocio. Hoy catálogo, mañana tienda online. Infraestructura escalable desde el inicio.', needs: ['Base sólida', 'Escalabilidad', 'Soporte premium'] },
            ].map((audience, idx) => (
              <div key={idx} className="p-8 rounded-3xl border" style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg flex-shrink-0" style={{ backgroundColor: currentTheme.primaryColor }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: currentTheme.textColor }}>{audience.persona}</h3>
                    <p className="mb-4" style={{ color: currentTheme.textColor, opacity: 0.85 }}>{audience.desc}</p>
                    <div className="space-y-2">
                      {audience.needs.map((need, nidx) => (
                        <p key={nidx} className="text-sm" style={{ color: currentTheme.primaryColor }}>• {need}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - ¿POR QUÉ TÚ? */}
      <section ref={whyUsRef.ref} className={`py-24 transition-all duration-700 ${whyUsRef.isInView ? 'animate-fade-in-up' : 'opacity-0-init'}`} style={{ backgroundColor: currentTheme.backgroundBlurred }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-6" style={{ color: currentTheme.textColor }}>¿Por qué Novor Group?</h2>
            <p className="text-xl" style={{ color: currentTheme.textColor, opacity: 0.85 }}>
              No es solo código. Es estrategia digital convertida en resultados comerciales reales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Equipo Full-Stack', desc: 'Desarrolladores, diseñadores y especialistas en conversion.', icon: 'fa-code', color: currentTheme.primaryColor },
              { title: 'SEO Desde el Inicio', desc: 'Estructura optimizada, velocidad de carga <2s, core web vitals perfectos. Primeras posiciones garantizadas.', icon: 'fa-search', color: currentTheme.secondaryColor },
              { title: 'Diseño que Convierte', desc: 'UX/UI basado en psicología del consumidor. Cada elemento tiene un objetivo: vender o captar leads.', icon: 'fa-palette', color: currentTheme.accentColor },
              { title: 'Soporte Premium', desc: 'No te abandonamos al lanzar. Asistencia técnica prioritaria, updates y mejoras continuas.', icon: 'fa-headset', color: currentTheme.primaryColor },
              { title: 'Analítica Avanzada', desc: 'Dashboard en tiempo real. Entiende cada visitor, dónde viene, qué hace, si compra. Datos = dinero.', icon: 'fa-chart-line', color: currentTheme.secondaryColor },
              { title: 'Tecnología Moderno', desc: 'React, Node.js, bases de datos escalables. Infraestructura que crece con tu negocio sin pagar demás.', icon: 'fa-microchip', color: currentTheme.accentColor },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl border transition-all hover:shadow-lg" style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl" style={{ backgroundColor: item.color }}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: currentTheme.textColor }}>{item.title}</h3>
                <p style={{ color: currentTheme.textColor, opacity: 0.85 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios y Casos de Éxito */}
      <section ref={testimonialsRef.ref} className={`py-24 transition-all duration-700 ${testimonialsRef.isInView ? 'animate-fade-in-up' : 'opacity-0-init'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-6" style={{ color: currentTheme.textColor }}>Casos de Éxito</h2>
            <p className="text-xl" style={{ color: currentTheme.textColor, opacity: 0.85 }}>
              Negocios que multiplicaron ingresos con una web estratégica de Novor Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Marina Gómez', role: 'CEO', company: 'FitLife Studio', testimonial: 'La web de Novor multiplicó nuestras inscripciones en 300%. El diseño vende por sí solo. ROI en 2 meses.', improvement: '↑ 300% leads', highlight: 'En 3 meses' },
              { name: 'Jorge Valdés', role: 'Founder', company: 'TechConsult SPA', testimonial: 'Pasamos de contactos esporádicos a clientes cualificados. SEO impecable. Ahora somos referentes en Google.', improvement: '↑ 250% consultas', highlight: 'Posición 1' },
              { name: 'Sofía Navarro', role: 'Directora', company: 'Casa & Estilo E-commerce', testimonial: 'Ticketing automatizado, pasarela integrada. Ventas 24/7 sin tocar la web. Pura agilidad.', improvement: '↑ 500% ventas', highlight: 'Automatizada' },
              { name: 'Pablo Reyes', role: 'Consultor', company: 'Premium Consulting', testimonial: 'El portfolio + booking automático. Sin emails, sin llamadas. Clientes agendaban solos. Eficiencia máxima.', improvement: '↑ 180% proyectos', highlight: 'Booking 24/7' },
              { name: 'Alejandra López', role: 'Propietaria', company: 'Luna Boutique Online', testimonial: 'Diseño hermoso + conversión. Mi anterior web no vendía. Esta hace trabajar a la web por mí.', improvement: '↑ 420% ingresos', highlight: 'Premium Design' },
              { name: 'Mateo Espinoza', role: 'Manager', company: 'Digital Academy', testimonial: 'Integramos Novor + estrategia de content. Tráfico + conversión. Sistema que escala. Somos data-driven ahora.', improvement: '↑ 350% tráfico', highlight: 'Escalable' },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-6 rounded-3xl border" style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: `${currentTheme.primaryColor}20` }}></div>
                  <div>
                    <p className="font-bold" style={{ color: currentTheme.textColor }}>{testimonial.name}</p>
                    <p className="text-xs" style={{ color: currentTheme.textColor, opacity: 0.6 }}>{testimonial.role}</p>
                  </div>
                </div>
                <p className="mb-4 italic" style={{ color: currentTheme.textColor, opacity: 0.85 }}>"{testimonial.testimonial}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold" style={{ color: currentTheme.primaryColor }}>{testimonial.improvement}</span>
                  <span className="text-xs" style={{ color: currentTheme.textColor, opacity: 0.6 }}>{testimonial.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas y Garantía */}
      <section ref={statsRef.ref} className={`py-24 transition-all duration-700 ${statsRef.isInView ? 'animate-fade-in-up' : 'opacity-0-init'}`} style={{ backgroundColor: currentTheme.backgroundBlurred }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: 'Webs Creadas', value: '120+', icon: 'fa-globe' },
              { label: 'Clientes Activos', value: '95%', icon: 'fa-handshake' },
              { label: 'Tasa de Conversión', value: '↑ 250%', icon: 'fa-chart-line' },
              { label: 'Años Experiencia', value: '8+', icon: 'fa-trophy' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2" style={{ color: currentTheme.primaryColor }}>
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <p className="text-3xl font-extrabold mb-1" style={{ color: currentTheme.textColor }}>{stat.value}</p>
                <p className="text-sm" style={{ color: currentTheme.textColor, opacity: 0.75 }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r p-10 rounded-3xl text-center text-white" style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.gradientPrimary}, ${currentTheme.gradientSecondary})` }}>
            <h3 className="text-2xl font-bold mb-3">Garantía: Tu Web Vende o Te Devolvemos tu Dinero</h3>
            <p className="mb-6 opacity-90">Si en 60 días no tienes conversiones medibles, revisamos gratis hasta lograrlas. Tu éxito es el nuestro.</p>
            <div className="space-x-4">
              <button className="px-8 py-3 rounded-xl bg-white font-bold transition-all hover:shadow-lg" style={{ color: currentTheme.primaryColor }}>
                Solicitar Presupuesto
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section ref={ctaRef.ref} className={`py-24 transition-all duration-700 ${ctaRef.isInView ? 'animate-fade-in-up' : 'opacity-0-init'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6" style={{ color: currentTheme.textColor }}>Tu web perfecta está a un paso</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: currentTheme.textColor, opacity: 0.85 }}>
            Agenda una llamada gratis. Analizamos tu negocio y te mostramos exactamente cómo una web de Novor puede triplicar tus ingresos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`#${Route.CONTACT}`}
              className="px-10 py-5 rounded-2xl text-white font-bold text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ backgroundColor: currentTheme.primaryColor }}
            >
              Solicitar Presupuesto
            </a>
            <a 
              href={`#${Route.CONTACT}`}
              className="px-10 py-5 rounded-2xl font-bold text-center border transition-all"
              style={{ backgroundColor: `${currentTheme.primaryColor}10`, color: currentTheme.primaryColor, borderColor: currentTheme.primaryColor }}
            >
              Hablemos (Gratuito)
            </a>
          </div>
          <p className="text-sm mt-8" style={{ color: currentTheme.textColor, opacity: 0.6 }}>
            Consulta inicial gratis: 30 minutos. Sin compromiso.
          </p>
        </div>
      </section>
    </div>
  );
};
