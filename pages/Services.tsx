
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { THEME } from '../constants';
import { Service } from '../types';

export const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

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
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Soluciones profesionales diseñadas para cada aspecto de tu bienestar emocional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-50 p-10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform" style={{ color: THEME.primaryColor }}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{service.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <span className="text-3xl font-extrabold text-gray-900">{service.price}€<span className="text-sm font-medium text-gray-400">/sesión</span></span>
                  <button
                    className="px-6 py-3 rounded-xl text-white font-bold transition-all shadow-md hover:shadow-lg"
                    style={{ backgroundColor: THEME.primaryColor }}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-emerald-600 rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <i className="fa-solid fa-leaf text-[10rem]"></i>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">¿No sabes por dónde empezar?</h3>
            <p className="text-emerald-50 mb-8 text-lg">Ofrecemos una primera sesión de valoración gratuita de 15 minutos para entender tu situación y recomendarte el mejor camino.</p>
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-colors shadow-xl">
              Agendar Valoración Gratuita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
