
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { AIAssistant } from './pages/AIAsistant';
import { Route } from './constants';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    const cleanRoute = currentRoute.replace('#', '');
    
    switch (cleanRoute) {
      case Route.HOME:
        return <Home />;
      case Route.SERVICES:
        return <Services />;
      case Route.AI_ASSISTANT:
        return <AIAssistant />;
      case Route.CONTACT:
        return <Contact />;
      case Route.LEGAL:
        return (
          <div className="py-24 max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Política de Privacidad y Aviso Legal</h1>
            <div className="prose prose-blue max-w-none text-gray-600 space-y-4">
              <p>Lumina Wellness cumple íntegramente con el RGPD y la LOPD. Todos los datos recogidos mediante esta web son tratados con absoluta confidencialidad para la gestión exclusiva de citas y servicios de bienestar.</p>
              <p>No cedemos datos a terceros. Los datos de contacto facilitados en el formulario de contacto se almacenan de forma segura en nuestra base de datos gestionada por Supabase.</p>
              <p>Usted tiene derecho al acceso, rectificación y eliminación de sus datos enviando un correo a hola@lumina-wellness.com.</p>
            </div>
          </div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
};

export default App;
