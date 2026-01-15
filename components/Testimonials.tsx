import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial; delay: string }> = ({ testimonial, delay }) => (
  <div 
    style={{ animationDelay: delay }}
    // Se agregó 'whitespace-normal' para contrarrestar el 'whitespace-nowrap' del padre (marquee)
    // Se ajustó el ancho a w-[320px] md:w-[450px] para mejor proporción
    className="flex-shrink-0 w-[320px] md:w-[450px] whitespace-normal group bg-[#0A0A0C] border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl hover:border-violet-500 transition-all duration-700 flex flex-col justify-between h-auto min-h-[350px] hover:scale-[1.02] relative overflow-hidden animate-float mx-4 md:mx-6 shadow-2xl"
  >
    {/* Shine effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none opacity-30"></div>
    
    <div>
      {/* Stars */}
      <div className="flex text-violet-400 mb-6 md:mb-8 space-x-1.5">
        {[...Array(testimonial.stars)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-100 text-sm md:text-lg font-medium leading-[1.6] mb-8 group-hover:text-white transition-colors">
        "{testimonial.content}"
      </p>
    </div>

    {/* Profile Info */}
    <div className="flex items-center gap-5 pt-8 border-t border-white/10 mt-auto">
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-violet-600 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity"></div>
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-14 h-14 rounded-full object-cover border-2 border-white/20 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl"
        />
      </div>
      <div className="flex flex-col min-w-0">
        <p className="text-white font-syne font-extrabold text-sm md:text-base tracking-tight uppercase truncate">{testimonial.name}</p>
        <p className="text-violet-400/80 text-[9px] md:text-[10px] font-sync uppercase tracking-[0.2em] mt-1 font-bold truncate">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4, 8);

  return (
    <section className="py-48 bg-black border-y border-white/5 relative overflow-hidden pause-on-hover">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.05)_0%,transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-24">
            <div className="text-center">
              <span className="text-violet-500 font-bold tracking-[1em] uppercase text-[10px] block mb-6">Social Proof</span>
              <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tighter leading-none mb-4">
                  Testimonios <br/><span className="text-gradient">Elite</span>
              </h2>
              <p className="text-gray-500 font-sync text-[9px] uppercase tracking-[0.4em] mt-8">Pausa el movimiento colocando el cursor</p>
            </div>
        </div>

        <div className="space-y-16 mask-edges">
            <div className="flex overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap py-8">
                    {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
                        <TestimonialCard key={`${t.id}-${i}`} testimonial={t} delay={`${i * 0.4}s`} />
                    ))}
                </div>
            </div>

            <div className="flex overflow-hidden">
                <div className="flex animate-marquee-reverse whitespace-nowrap py-8">
                    {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
                        <TestimonialCard key={`${t.id}-${i}`} testimonial={t} delay={`${i * 0.6}s`} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;