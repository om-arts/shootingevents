import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" 
          alt="Atmósfera de producción técnica y DJ para eventos de lujo CDMX" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <div className="mb-6 flex justify-center">
          <span className="px-4 py-1 border border-white/20 rounded-full bg-black/30 backdrop-blur-sm text-[10px] font-sync font-bold tracking-[0.4em] uppercase text-violet-300 animate-fade-in">
            Expertos en Producción Audiovisual
          </span>
        </div>
        
        <h1 className="font-syne text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight leading-tight md:leading-[1.1] mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] pb-4">
          <span className="block opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards] translate-y-10">Arquitectura</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-white to-violet-400 opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards] translate-y-10 pb-2">
            SENSORIAL
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 font-light text-base md:text-lg lg:text-xl leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards] translate-y-10">
          Producción técnica, diseño de audio y atmósferas visuales para eventos corporativos y sociales que exigen perfección en México.
        </p>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards] translate-y-10">
          <button 
            onClick={() => scrollToSection('packages')}
            className="px-10 py-4 bg-white text-black font-sync text-xs font-black tracking-widest uppercase hover:bg-violet-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] cursor-pointer"
          >
            Ver Riders Técnicos
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="px-10 py-4 border border-white/30 text-white font-sync text-xs font-black tracking-widest uppercase hover:bg-white/10 backdrop-blur-sm transition-all duration-300 cursor-pointer"
          >
            Galería de Producciones
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 cursor-pointer" onClick={() => scrollToSection('services')}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;