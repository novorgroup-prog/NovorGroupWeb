
import React, { useState, useRef, useEffect } from 'react';
import { getWellnessAdvice } from '../services/geminiService';
import { THEME } from '../constants';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '¡Hola! Soy LuminaAI, tu asistente de bienestar. ¿Cómo te sientes hoy o en qué puedo ayudarte?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const botResponse = await getWellnessAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || '' }]);
    setIsTyping(false);
  };

  return (
    <div className="py-24 bg-white min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-3xl shadow-lg">
            <i className="fa-solid fa-robot"></i>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Lumina AI</h2>
            <p className="text-gray-500 font-medium">Asistente de Bienestar 24/7</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-[2.5rem] p-8 h-[600px] flex flex-col shadow-inner border border-gray-100">
          <div className="flex-grow overflow-y-auto space-y-6 mb-6 pr-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-5 rounded-3xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-3xl border border-gray-100 flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu mensaje aquí..."
              className="w-full bg-white border border-gray-200 rounded-2xl py-5 px-6 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
          {[
            "Tengo mucho estrés laboral",
            "Busco tips de mindfulness",
            "¿Cómo mejorar mi sueño?",
            "Necesito motivación diaria"
          ].map((suggestion, idx) => (
            <button 
              key={idx}
              onClick={() => setInput(suggestion)}
              className="whitespace-nowrap bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-50 hover:border-blue-300 transition-all font-medium"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
