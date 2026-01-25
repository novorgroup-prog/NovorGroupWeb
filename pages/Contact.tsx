
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useTheme } from '../src/theme';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Consulta',
    message: ''
  });
  const { currentTheme } = useTheme();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Obtener parámetros de URL para pre-llenar el formulario
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const designParam = params.get('design');
    
    if (designParam) {
      setFormData(prev => ({
        ...prev,
        message: designParam
      }));
    }
  }, []);

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
            <h2 className="text-4xl font-extrabold mb-8" style={{ color: currentTheme.textColor }}>Hablemos</h2>
            <p className="text-lg mb-12 leading-relaxed" style={{ color: currentTheme.textColor, opacity: 0.85 }}>
              ¿Tienes un proyecto en mente? Cuéntanos tus necesidades y te ayudaremos a crear la web perfecta para tu negocio. Nuestro equipo te contactará en menos de 24 horas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl" style={{ backgroundColor: `${currentTheme.primaryColor}20`, color: currentTheme.primaryColor }}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest" style={{ color: currentTheme.textColor, opacity: 0.6 }}>Email</p>
                  <p className="text-xl font-bold" style={{ color: currentTheme.textColor }}>novorgroup@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl" style={{ backgroundColor: `${currentTheme.primaryColor}20`, color: currentTheme.primaryColor }}>
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest" style={{ color: currentTheme.textColor, opacity: 0.6 }}>WhatsApp</p>
                  <p className="text-xl font-bold" style={{ color: currentTheme.textColor }}>Disponible 9:00 - 18:00</p>
                </div>
              </div>

              <div className="rounded-3xl p-8 text-white mt-12 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(135deg, ${currentTheme.gradientPrimary}, ${currentTheme.gradientSecondary})` }}>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">¿Urgencia?</h4>
                  <p className="text-white opacity-90 mb-6">Si necesitas una respuesta inmediata, contáctanos por WhatsApp para atención rápida.</p>
                  <a href="https://wa.me/34912345678" className="inline-block px-6 py-3 rounded-xl font-bold transition-colors" style={{ color: currentTheme.textColor, backgroundColor: currentTheme.backgroundColor }}>Enviar WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[3rem] p-10 shadow-2xl border" style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor }}>
            {status === 'success' ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 text-white" style={{ backgroundColor: currentTheme.primaryColor }}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: currentTheme.textColor }}>¡Mensaje Recibido!</h3>
                <p className="mb-8" style={{ color: currentTheme.textColor, opacity: 0.85 }}>Gracias por confiar en Novor Group. Nos pondremos en contacto contigo pronto.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="font-bold hover:underline"
                  style={{ color: currentTheme.primaryColor }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: currentTheme.textColor }}>Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ej. Juan Pérez"
                    className="w-full border rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 transition-all"
                    style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor, color: currentTheme.textColor, '--tw-ring-color': currentTheme.primaryColor } as any}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: currentTheme.textColor }}>Correo Electrónico</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="juan@ejemplo.com"
                    className="w-full border rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 transition-all"
                    style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor, color: currentTheme.textColor, '--tw-ring-color': currentTheme.primaryColor } as any}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: currentTheme.textColor }}>¿Qué tipo de proyecto tienes en mente?</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full border rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 transition-all"
                    style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor, color: currentTheme.textColor, '--tw-ring-color': currentTheme.primaryColor } as any}
                  >
                    <option value="Consulta">Consulta General</option>
                    <option value="Web">Diseño Web Personalizado</option>
                    <option value="Ecommerce">E-commerce / Tienda Online</option>
                    <option value="Mantenimiento">Mantenimiento & Soporte</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: currentTheme.textColor }}>Cuéntanos sobre tu proyecto</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe brevemente tu idea y necesidades..."
                    className="w-full border rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor, color: currentTheme.textColor, '--tw-ring-color': currentTheme.primaryColor } as any}
                  ></textarea>
                </div>
                <button
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full py-5 rounded-2xl text-white font-bold text-lg shadow-xl transition-all active:scale-95 disabled:opacity-50"
                  style={{ backgroundColor: currentTheme.primaryColor }}
                >
                  {status === 'loading' ? 'Enviando...' : 'Solicitar Presupuesto'}
                </button>
                {status === 'error' && (
                  <p className="text-center text-sm font-medium" style={{ color: currentTheme.primaryColor, opacity: 0.8 }}>Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
