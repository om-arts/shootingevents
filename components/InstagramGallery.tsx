import React from 'react';
import { INSTAGRAM_FEED } from '../constants';

const InstagramGallery: React.FC = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="reveal">
            <span className="text-violet-500 font-bold tracking-[0.6em] uppercase text-[10px] block mb-4">Experiencia Social</span>
            <h2 className="font-syne text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-none tracking-tighter">
              SÍGUENOS EN <br/><span className="text-gradient">INSTAGRAM</span>
            </h2>
          </div>
          <a 
            href="https://www.instagram.com/shootingeventos/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="reveal px-8 py-4 bg-[#E1306C]/10 border border-[#E1306C]/30 text-[#E1306C] rounded-full font-sync text-[9px] font-black uppercase tracking-widest hover:bg-[#E1306C] hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(225,48,108,0.1)]"
          >
            @shootingeventos
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 reveal">
          {INSTAGRAM_FEED.map((post) => (
            <a 
              key={post.id} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5 bg-zinc-900"
            >
              <img 
                src={post.url} 
                alt="Shooting Events Instagram Post" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E1306C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;