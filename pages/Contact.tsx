
import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { THEME } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          full_name: formData.name,
          email: formData.email,
          service_interest: formData.service,
          message: formData.message
        }]);

      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', service: 'General', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
    }
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Hablemos</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              ¿Tienes dudas sobre nuestros servicios o quieres agendar una sesión? Completa el formulario y nuestro equipo te contactará en menos de 24 horas laborables.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Llámanos</p>
                  <p className="text-xl font-bold text-gray-900">+34 912 345 678</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-xl">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-xl font-bold text-gray-900">Disponible 9:00 - 18:00</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-3xl p-8 text-white mt-12 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">Soporte Urgente</h4>
                  <p className="text-gray-400 mb-6">Si estás pasando por una crisis grave, por favor contacta con el Teléfono de la Esperanza: 717 003 717.</p>
                  <a href="tel:717003717" className="inline-block px-6 py-3 bg-red-500 rounded-xl font-bold hover:bg-red-600 transition-colors">Llamar Ahora</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 shadow-2xl shadow-blue-100 border border-gray-100">
            {status === 'success' ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-4xl mx-auto mb-6">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Mensaje Recibido!</h3>
                <p className="text-gray-600 mb-8">Gracias por confiar en Lumina Wellness. Nos pondremos en contacto contigo pronto.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="juan@ejemplo.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Servicio de Interés</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="General">Consulta General</option>
                    <option value="Individual">Terapia Individual</option>
                    <option value="Grupal">Talleres Grupales</option>
                    <option value="Coaching">Coaching Ejecutivo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">¿Cómo podemos ayudarte?</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Cuéntanos brevemente qué buscas..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full py-5 rounded-2xl text-white font-bold text-lg shadow-xl transition-all active:scale-95 disabled:opacity-50"
                  style={{ backgroundColor: THEME.primaryColor }}
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-center text-sm font-medium">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
