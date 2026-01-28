
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useTheme } from '../src/theme';
import { Service } from '../types';

export const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const { currentTheme } = useTheme();

  // Ejemplo real de consulta a Supabase
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('services')
          .select('id, title, description, price, duration, icon')
          .order('created_at', { ascending: true });
        if (error) {
          console.error(error);
          setServices([]);
        } else if (data) {
          setServices(data);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: currentTheme.primaryColor }}></div>
    </div>
  );

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-4" style={{ color: currentTheme.textColor }}>Nuestros Servicios Web</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: currentTheme.textColor, opacity: 0.85 }}>Soluciones integrales de desarrollo web que generan resultados reales para tu negocio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.id} className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border flex flex-col lg:flex-row" style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor }}>
              <div className="lg:w-1/3 p-10 flex items-center md:justify-center" style={{ backgroundColor: currentTheme.backgroundBlurred }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform" style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.primaryColor }}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
              </div>
              <div className="p-8 lg:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4 flex-wrap sm:flex-nowrap gap-4 sm:gap-0">
                    <h3 className="text-wrap text-2xl font-bold" style={{ color: currentTheme.textColor }}>{service.title}</h3>
                    <span className="text-xs text-nowrap font-bold px-3 py-1 rounded-full" style={{ backgroundColor: `${currentTheme.primaryColor}20`, color: currentTheme.primaryColor }}>{service.duration}</span>
                  </div>
                  <p className="mb-6 leading-relaxed" style={{ color: currentTheme.textColor, opacity: 0.85 }}>{service.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 flex-wrap gap-4 sm:flex-nowrap" style={{ borderColor: currentTheme.lineColor, borderTop: `1px solid ${currentTheme.lineColor}` }}>
                  <span className="text-3xl font-extrabold" style={{ color: currentTheme.textColor }}>{service.price}€<span className="text-sm font-medium" style={{ color: currentTheme.textColor, opacity: 0.6 }}>/proyecto</span></span>
                  <button
                    className="px-6 py-3 rounded-xl text-white font-bold transition-all shadow-md hover:shadow-lg"
                    style={{ backgroundColor: currentTheme.primaryColor }}
                  >
                    Solicitar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[3rem] p-12 text-white relative overflow-hidden" style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.gradientPrimary}, ${currentTheme.gradientSecondary})` }}>
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <i className="fa-solid fa-rocket text-[10rem]"></i>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">¿Necesitas algo específico?</h3>
            <p className="text-white opacity-90 mb-8 text-lg">Contáctanos para presupuestos personalizados. Valoración gratis de tu proyecto sin compromiso.</p>
            <button className="bg-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-xl" style={{ color: currentTheme.primaryColor }}>
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
