import React from 'react';
import { REEL_IMAGES } from '../constants';

const InteractiveReel: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[600px] md:h-[400px]">
          {/* Bloque 1: Imagen Principal (Atmósferas) - Reemplaza al video */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-gray-900 cursor-pointer">
            
            {/* Imagen Principal */}
            <img 
              src={REEL_IMAGES.atmospheres} 
              alt="Producción de eventos inmersiva con iluminación arquitectónica" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Overlay de Gradiente y Texto */}
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/60 to-transparent z-20">
              <span className="text-violet-500 font-sync text-[10px] font-bold tracking-widest uppercase mb-2 block">Producción Técnica</span>
              <h3 className="text-2xl md:text-3xl font-syne font-bold text-white uppercase tracking-tighter">Atmósferas Inmersivas</h3>
            </div>
          </div>

          {/* Bloque 2: Imagen Secundaria (Audio) */}
          <div className="relative group overflow-hidden rounded-3xl border border-white/10 cursor-pointer shadow-2xl">
            <img 
              src={REEL_IMAGES.audio} 
              alt="Setup de DJ profesional con mezcladores de gama alta" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/50 to-transparent">
              <span className="text-violet-500 font-sync text-[10px] font-bold tracking-widest uppercase mb-2 block">Tecnología Audio Hi-Fi</span>
              <h3 className="text-2xl md:text-3xl font-syne font-bold text-white uppercase tracking-tighter">Audio Elite</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveReel;