
import React from 'react';
import { Layout } from './components/Layout';
import { DemosLayout } from './components/DemosLayout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { AIAssistant } from './pages/AIAsistant';
import { Demos } from './pages/Demos';
import { DemoMinimalTech } from './pages/demos_pages/DemoMinimalTech';
import { DemoLuxuryPremium } from './pages/demos_pages/DemoLuxuryPremium';
import { DemoVibrantCreative } from './pages/demos_pages/DemoVibrantCreative';
import { Route } from './constants';
import { useRouter } from './src/router/RouterContext';

const App: React.FC = () => {
  const { currentPath } = useRouter();

  const renderContent = () => {
    switch (currentPath) {
      case Route.HOME:
      case '/':
        return <Home />;
      case Route.SERVICES:
        return <Services />;
      case Route.DEMOS:
        return <Demos />;
      case '/demo/minimal-tech':
        return <DemoMinimalTech />;
      case '/demo/luxury-premium':
        return <DemoLuxuryPremium />;
      case '/demo/vibrant-creative':
        return <DemoVibrantCreative />;
      case Route.AI_ASSISTANT:
        return <AIAssistant />;
      case Route.CONTACT:
        return <Contact />;
      case Route.LEGAL:
        return (
          <div className="py-24 max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Política de Privacidad y Aviso Legal</h1>
            <div className="prose prose-blue max-w-none text-gray-600 space-y-4">
              <p>Novor Group cumple íntegramente con el RGPD y la LOPD. Todos los datos recogidos mediante esta web son tratados con absoluta confidencialidad para la gestión exclusiva de consultas y servicios.</p>
              <p>No cedemos datos a terceros. Los datos de contacto facilitados en el formulario de contacto se almacenan de forma segura en nuestra base de datos gestionada por Supabase.</p>
              <p>Usted tiene derecho al acceso, rectificación y eliminación de sus datos enviando un correo a hola@novorgroup.com.</p>
            </div>
          </div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <>
      {['/demo/minimal-tech', '/demo/luxury-premium', '/demo/vibrant-creative'].includes(currentPath) ? (
        <DemosLayout>
          {renderContent()}
        </DemosLayout>
      ) : (
        <Layout>
          {renderContent()}
        </Layout>
      )}
    </>
  );
};

export default App;
