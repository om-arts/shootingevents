import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InteractiveReel from './components/InteractiveReel';
import PackageCard from './components/PackageCard';
import ChatAssistant from './components/ChatAssistant';
import WhatsAppButton from './components/WhatsAppButton';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import Logo from './components/Logo';
import OfflineNotice from './components/OfflineNotice';
import { PACKAGES, SECONDARY_SERVICES, PILLARS } from './constants';
import { ServicePackage } from './types';

const BRAND_LOGOS = [
  // Google Drive Images (Updated to thumbnail format for reliability)
  { name: "Palacio de Hierro", url: "https://drive.google.com/thumbnail?id=12kJVlW6FCJD2VpDxNFIKHYuJNRqKiPYi&sz=w1000" },
  { name: "Ferrari", url: "https://drive.google.com/thumbnail?id=1aSMPkJmKZDGPdMcaLAek_LLClLol4vna&sz=w1000" },
  { name: "Sephora", url: "https://drive.google.com/thumbnail?id=1cnh5JFmT3xRHGENoWsgnUYruVytVmusB&sz=w1000" },
  { name: "Liverpool", url: "https://drive.google.com/thumbnail?id=1WSoGmNj_b5s-44EUI3SCpZsc2pbDJuW0&sz=w1000" },
  { name: "Porsche", url: "https://drive.google.com/thumbnail?id=1Ty5RYXNrlR8c26mY5IZ9RO0DiQAeGPfN&sz=w1000" },
  { name: "Land Rover", url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Land_Rover_logo_black.svg/512px-Land_Rover_logo_black.svg.png" },
  { name: "Nh", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/NH_Hoteles.svg/512px-NH_Hoteles.svg.png" },
  { name: "Diablos", url: "https://drive.google.com/thumbnail?id=1YeOghJOjuCjeSVtR140d69jCEglP3azu&sz=w1000" },
  { name: "Lexus", url: "https://drive.google.com/thumbnail?id=1YeOghJOjuCjeSVtR140d69jCEglP3azu&sz=w1000" },
  { name: "Pioneer", url: "https://drive.google.com/thumbnail?id=1YeOghJOjuCjeSVtR140d69jCEglP3azu&sz=w1000" },
  { name: "Alpha", url: "https://drive.google.com/thumbnail?id=1YeOghJOjuCjeSVtR140d69jCEglP3azu&sz=w1000" },
  // External URLs (Optimized for hotlinking)
  { name: "BMW", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/512px-BMW.svg.png" },
  { name: "Mercedes-Benz", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/512px-Mercedes-Logo.svg.png" },
  { name: "Audi", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi_logo_detail.svg/512px-Audi_logo_detail.svg.png" },
  { name: "Rolex", url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/512px-Rolex_logo.svg.png" },
  { name: "Cartier", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cartier_logo.svg/512px-Cartier_logo.svg.png" }
];

const App: React.FC = () => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  
  const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/shootingeventos/",
    facebook: "https://www.facebook.com/shootingeventsmx",
    tiktok: "https://www.tiktok.com/@shootingevents"
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const handlePackageSelect = (pkg: ServicePackage) => {
    setSelectedPackageId(pkg.id);
    scrollToSection('booking-form');
  };

  const handleFullFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormSuccess(true);
    setIsSubmitting(false);
    setTimeout(() => setFormSuccess(false), 5000);
  };

  return (
    <div className="relative min-h-screen selection:bg-violet-500/30">
      <OfflineNotice />
      <Header />
      
      <main>
        <div className="reveal"><Hero /></div>

        {/* Brand Marquee */}
        <section className="py-32 bg-black overflow-hidden border-y border-white/5 reveal">
          <div className="container mx-auto px-6 mb-16 text-center">
            <span className="text-violet-500 font-bold tracking-[1em] uppercase text-[10px] block mb-6">MARCAS DE CLASE MUNDIAL</span>
            <h2 className="font-syne text-3xl md:text-4xl font-extrabold uppercase text-white tracking-tight pb-2">NUESTROS CLIENTES</h2>
          </div>
          {/* Se cambió animate-marquee-fast a animate-marquee para velocidad suave y mejor visibilidad de logos finales */}
          <div className="flex animate-marquee whitespace-nowrap mask-edges pause-on-hover">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="flex space-x-16 md:space-x-24 items-center px-12">
                {BRAND_LOGOS.map((logo, lIdx) => (
                  <div key={`${logo.name}-${idx}-${lIdx}`} className="w-32 md:w-40 h-12 md:h-16 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={logo.url} 
                      alt={logo.name} 
                      loading="eager"
                      referrerPolicy="no-referrer"
                      className={`max-h-full max-w-full opacity-80 hover:opacity-100 transition-all duration-700 object-contain brightness-0 invert ${logo.name === 'Sephora' ? 'scale-[1.8]' : ''} ${logo.name === 'Nh' ? 'scale-[2.2]' : ''}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Sección: Galería / Reel Interactivo */}
        <div id="gallery" className="reveal">
          <InteractiveReel />
        </div>

        {/* Sección: PILARES DE PRODUCCIÓN */}
        <section id="services" className="py-32 md:py-48 bg-black reveal">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-start">
              <div className="lg:col-span-5 xl:col-span-5 space-y-8 md:space-y-12">
                <div className="space-y-4">
                  <span className="text-violet-500 font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-[10px] block">Engineering Atmosphere</span>
                  <h2 className="font-syne text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase leading-tight text-white pb-2 break-words">
                    Expertise en <br/><span className="text-gradient">Producción</span>
                  </h2>
                </div>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-lg">
                  Diseñamos experiencias sensoriales inmersivas. Audio de alta fidelidad, iluminación arquitectónica y efectos especiales de nivel concierto.
                </p>
                <div className="hidden lg:block pt-8">
                    <div className="w-24 h-1 bg-violet-600 rounded-full"></div>
                </div>
              </div>

              <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {PILLARS.map((pillar, i) => (
                  <div key={i} className={`p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-gradient-to-br ${pillar.accent} to-transparent backdrop-blur-md group hover:border-violet-500/30 transition-all duration-500 flex flex-col h-full`}>
                    <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{pillar.icon}</div>
                    <h4 className="font-sync text-[12px] font-black text-white mb-4 uppercase tracking-[0.2em]">{pillar.title}</h4>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección: PAQUETES (RIDERS) */}
        <section id="packages" className="py-48 bg-[#050507] reveal">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-32 text-center">
              <span className="text-violet-500 font-bold tracking-[0.8em] uppercase text-[10px] block mb-4">Pricing Strategy</span>
              <h2 className="font-syne text-4xl md:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight leading-[1.1] text-white pb-4">TECHNICAL <br/><span className="text-white/10">RIDERS</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {PACKAGES.map((pkg, idx) => (
                <PackageCard key={pkg.id} pkg={pkg} index={idx} onSelect={handlePackageSelect} />
              ))}
            </div>
          </div>
        </section>

        {/* Nueva Sección: Instagram Gallery */}
        <div className="reveal">
          <InstagramGallery />
        </div>

        {/* Sección: COMPLEMENTOS ELITE */}
        <section id="extra-services" className="py-48 bg-black reveal">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
              <div className="text-left">
                <span className="text-violet-500 font-bold tracking-[0.8em] uppercase text-[10px] block mb-6">Modular Solutions</span>
                <h2 className="font-sync text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-[-0.05em] italic leading-[1.1] text-white pb-4">
                  Complementos <br/>
                  <span className="text-gradient not-italic tracking-[0.1em]">PREMIUM</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {SECONDARY_SERVICES.map((service, i) => (
                <div 
                  key={i} 
                  className={`group relative overflow-hidden rounded-[2.5rem] border ${service.color}/10 hover:border-white/30 transition-all duration-700 bg-black h-[300px] cursor-pointer shadow-2xl`}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <h4 className="font-sync text-lg md:text-xl font-bold text-white uppercase tracking-[0.25em] group-hover:tracking-[0.3em] transition-all duration-500 leading-tight">
                      {service.title}
                    </h4>
                    <div className={`w-0 group-hover:w-full h-[1px] mt-6 transition-all duration-700 opacity-50 ${service.color.replace('border-', 'bg-')}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="reveal"><Testimonials /></div>

        {/* Sección: COTIZACIÓN */}
        <section id="booking-form" className="py-48 bg-[#050507] reveal">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="glass rounded-[4rem] p-12 md:p-24 border border-white/10 relative overflow-hidden shadow-2xl">
              {formSuccess ? (
                <div className="text-center py-24">
                  <div className="text-9xl mb-12">💎</div>
                  <h2 className="font-syne text-4xl md:text-5xl font-extrabold mb-8 text-white uppercase tracking-tight pb-2">Solicitud Enviada</h2>
                  <p className="text-gray-400 font-sync text-[10px] tracking-[0.5em] uppercase">Un experto se pondrá en contacto pronto.</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-20">
                    <span className="text-violet-500 font-bold tracking-[0.8em] uppercase text-[10px] block mb-6">Inmediate Quote</span>
                    <h2 className="font-syne text-3xl md:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight mb-8 leading-tight text-white pb-4">Diseña tu <br/><span className="text-gradient">Evento</span></h2>
                  </div>

                  <form onSubmit={handleFullFormSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[9px] font-sync font-bold text-gray-600 uppercase tracking-widest ml-4">Nombre</label>
                        <input required type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-violet-500 transition-all text-[11px] uppercase font-sync text-white" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-sync font-bold text-gray-600 uppercase tracking-widest ml-4">WhatsApp</label>
                        <input required type="tel" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-violet-500 transition-all text-[11px] uppercase font-sync text-white" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-sync font-bold text-gray-600 uppercase tracking-widest ml-4">Paquete</label>
                        <select 
                          required 
                          value={selectedPackageId} 
                          onChange={(e) => setSelectedPackageId(e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-violet-500 transition-all text-[11px] uppercase font-sync text-white appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-black">Seleccionar...</option>
                          {PACKAGES.map(p => <option key={p.id} value={p.id} className="bg-black">{p.name}</option>)}
                          <option value="custom" className="bg-black">Personalizado VIP</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[9px] font-sync font-bold text-gray-600 uppercase tracking-widest ml-4">Fecha</label>
                        <input required type="date" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-violet-500 transition-all text-[11px] uppercase font-sync text-white [color-scheme:dark]" />
                      </div>
                    </div>
                    <button disabled={isSubmitting} type="submit" className={`w-full py-8 bg-violet-600 hover:bg-violet-700 text-white rounded-[2rem] font-sync text-[10px] font-black tracking-[0.4em] transition-all transform hover:scale-[1.02] uppercase ${isSubmitting ? 'opacity-50' : ''}`}>
                      {isSubmitting ? 'Procesando...' : 'Solicitar Rider Técnico'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-48 glass border-t border-white/5 bg-black/98 reveal">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
            <div className="col-span-2">
              <Logo className="mb-12 scale-110 origin-left" />
              <p className="text-gray-400 max-w-sm text-lg font-light mb-12">Producción técnica de alto impacto. <br/>Innovación y excelencia en cada beat.</p>
              <div className="flex space-x-8">
                {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white font-sync text-[9px] font-black tracking-widest uppercase transition-colors">
                    {key}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-sync text-[10px] font-black text-violet-500 uppercase tracking-[0.4em] mb-10">Navegación</h5>
              <ul className="space-y-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <li><a href="#services" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#packages" className="hover:text-white transition-colors">Paquetes</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Social</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-sync text-[10px] font-black text-violet-500 uppercase tracking-[0.4em] mb-10">Contacto</h5>
              <div className="flex flex-col gap-2 mb-4">
                <a href="https://wa.me/525520572391" target="_blank" rel="noopener noreferrer" className="text-white font-black text-lg tracking-tighter hover:text-violet-400 transition-colors">+52 1 55 2057 2391</a>
                <a href="https://wa.me/525611094485" target="_blank" rel="noopener noreferrer" className="text-white font-black text-lg tracking-tighter hover:text-violet-400 transition-colors">+52 1 56 1109 4485</a>
              </div>
              <p className="text-gray-500 text-[9px] tracking-widest uppercase">CDMX & EDO DE MÉXICO</p>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 text-center">
            <p className="text-[10px] font-bold text-gray-700 tracking-[0.8em] uppercase">© 2025 Shooting Events una empresa de Gurú Estudio</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <ChatAssistant />
    </div>
  );
};

export default App;