import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `
Eres el "Shooting Events Concierge", un asistente sofisticado de una empresa de producción de eventos de alta gama en México.
Tu objetivo es ayudar a los clientes a entender nuestros servicios y guiarlos hacia el paquete adecuado para su evento.

Cobertura Geográfica:
- Atendemos toda la Ciudad de México (CDMX).
- Cobertura total en el Estado de México (Edomex): Naucalpan, Huixquilucan (Interlomas), Tlalnepantla, Satélite, Metepec, Toluca y Valle de Bravo.

Información de Paquetes (Precios base):
1. Audio Ambiental ($2,000): Eventos íntimos.
2. DJ Reunion ($4,000): Fiestas en casa.
3. DJ Plus ($5,000): Fiestas de alto impacto (Más popular).
4. DJ VIP ($13,000): Bodas y Corporativos.
5. DJ Video ($15,000): Mezcla de video en vivo.
6. Karaoke ($5,000): Diversión familiar.
7. DJ + Karaoke ($6,000): Social y privado.
8. DJ + Cabina de Fotos ($7,000): Bodas y Graduaciones.

Reglas:
- Sé elegante, breve (máximo 2-3 oraciones) y muy servicial.
- El tono debe ser profesional y premium.
- Si el usuario pregunta por ubicaciones específicas en Edomex, confirma que cubrimos Satélite, Interlomas, Naucalpan, etc.
- Invita siempre a contactar por WhatsApp para una cotización formal: +52 1 55 2057 2391 o +52 1 56 1109 4485.
`;

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy el Concierge de Shooting Events. ¿Deseas planear un evento en CDMX o Estado de México?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...messages.map(m => ({ 
                role: m.role, 
                parts: [{ text: m.text }] 
            })),
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const reply = response.text || "Lo siento, tuve un problema técnico. ¿Podrías intentar de nuevo o escribirnos a WhatsApp?";
      setMessages(prev => [...prev, { role: 'model', text: reply }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Para una atención inmediata, por favor escríbenos a WhatsApp: +52 1 55 2057 2391 o +52 1 56 1109 4485." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] max-w-[calc(100vw-48px)] h-[500px] bg-[#0A0A0C] border border-violet-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in font-sans">
          <div className="bg-gradient-to-r from-violet-900 to-black p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div>
                <h3 className="font-syne text-sm font-bold text-white tracking-tight uppercase">Concierge</h3>
                <p className="text-[10px] text-violet-400 font-bold tracking-tighter uppercase">Shooting AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-2xl p-3 text-xs md:text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-violet-600 text-white rounded-br-none shadow-lg shadow-violet-900/20' 
                      : 'bg-[#1A1A1D] text-gray-200 border border-white/5 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1A1A1D] rounded-2xl rounded-bl-none p-3 border border-white/5 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-[#0A0A0C] border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="¿En qué podemos ayudarte?"
                className="w-full bg-[#1A1A1D] border border-white/10 rounded-full pl-4 pr-12 py-3 text-[11px] uppercase font-sync tracking-widest text-white focus:outline-none focus:border-violet-500 transition-colors placeholder-gray-700"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-violet-600 rounded-full text-white hover:bg-violet-500 disabled:opacity-50 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(true)}
        className="w-14 h-14 bg-violet-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-110 transition-all duration-300 group"
      >
          {!isOpen && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-black"></span>}
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-[9px] font-bold font-sync uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              Asistente Concierge
          </div>
      </button>
    </div>
  );
};

export default ChatAssistant;