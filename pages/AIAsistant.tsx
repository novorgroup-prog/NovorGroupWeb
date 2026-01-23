
import React, { useState, useRef, useEffect } from 'react';
import { getWellnessAdvice } from '../services/geminiService';
import { useTheme } from '../src/theme';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const AIAssistant: React.FC = () => {
  const { currentTheme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '¡Hola! Soy Novor AI, tu asistente de desarrollo web. Te puedo ayudar con preguntas sobre nuestros servicios, presupuestos y soluciones digitales.' }
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
    <div className="py-24 min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg" style={{ backgroundColor: currentTheme.primaryColor }}>
            <i className="fa-solid fa-robot"></i>
          </div>
          <div>
            <h2 className="text-3xl font-bold" style={{ color: currentTheme.textColor }}>Novor AI</h2>
            <p className="font-medium" style={{ color: currentTheme.textColor, opacity: 0.7 }}>Asistente de Desarrollo Web 24/7</p>
          </div>
        </div>

        <div className="rounded-[2.5rem] p-8 h-[600px] flex flex-col shadow-inner border" style={{ backgroundColor: currentTheme.backgroundColor, borderColor: currentTheme.lineColor }}>
          <div className="flex-grow overflow-y-auto space-y-6 mb-6 pr-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-5 rounded-3xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'text-white rounded-tr-none' 
                      : 'rounded-tl-none'
                  }`}
                  style={m.role === 'user' ? { backgroundColor: currentTheme.primaryColor } : { backgroundColor: currentTheme.backgroundBlurred, color: currentTheme.textColor, borderColor: currentTheme.lineColor, border: `1px solid ${currentTheme.lineColor}` }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="p-5 rounded-3xl flex gap-1" style={{ backgroundColor: currentTheme.backgroundBlurred, borderColor: currentTheme.lineColor, border: `1px solid ${currentTheme.lineColor}` }}>
                  <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: currentTheme.primaryColor }}></div>
                  <div className="w-2 h-2 rounded-full animate-bounce delay-75" style={{ backgroundColor: currentTheme.primaryColor }}></div>
                  <div className="w-2 h-2 rounded-full animate-bounce delay-150" style={{ backgroundColor: currentTheme.primaryColor }}></div>
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
              placeholder="Escribe tu pregunta..."
              className="w-full border rounded-2xl py-5 px-6 pr-16 focus:outline-none shadow-sm"
              style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.textColor, borderColor: currentTheme.lineColor }}
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
              style={{ backgroundColor: currentTheme.primaryColor }}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
          {[
            "¿Cuál es tu precio?",
            "¿Cuánto tarda un proyecto?",
            "¿Qué incluye el e-commerce?",
            "Solicitar presupuesto"
          ].map((suggestion, idx) => (
            <button 
              key={idx}
              onClick={() => setInput(suggestion)}
              className="whitespace-nowrap border px-4 py-2 rounded-full text-sm hover:transition-all font-medium"
              style={{ backgroundColor: currentTheme.backgroundBlurred, borderColor: currentTheme.lineColor, color: currentTheme.textColor }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
