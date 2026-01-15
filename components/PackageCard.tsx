import React from 'react';
import { ServicePackage } from '../types';

interface PackageCardProps {
  pkg: ServicePackage;
  index: number;
  onSelect: (pkg: ServicePackage) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, index, onSelect }) => {
  return (
    <div 
      className={`relative group bg-[#0A0A0C] border ${pkg.color || 'border-white/10'} rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden ${pkg.isPopular ? 'ring-2 ring-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-[#0f0f12]' : ''}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Dynamic Gradient Background on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${pkg.accent || 'from-white/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

      {pkg.isPopular && (
        <div className="absolute top-0 right-0 bg-violet-600 text-white font-sync text-[8px] font-bold tracking-widest px-4 py-2 rounded-bl-2xl uppercase z-10">
          Popular
        </div>
      )}
      
      <div className="relative z-10 mb-8">
        <span className="text-[10px] font-sync font-bold text-violet-400/80 tracking-widest uppercase block mb-2">
          {pkg.recommendedFor || 'Elite Rider'}
        </span>
        <h3 className="font-syne text-xl md:text-2xl font-bold text-white mb-2 leading-tight uppercase tracking-tight">{pkg.name}</h3>
        <div className="flex items-baseline gap-2">
          <p className="font-sync text-xl font-black text-white">{pkg.price}</p>
          {pkg.msi && <span className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">{pkg.msi}</span>}
        </div>
      </div>

      <ul className="relative z-10 space-y-3 mb-8 flex-grow">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start text-[11px] text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500/50 mt-1.5 mr-3 flex-shrink-0"></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={() => onSelect(pkg)}
        className={`relative z-10 w-full py-4 rounded-2xl font-sync text-[9px] font-black tracking-[0.2em] uppercase transition-all duration-300 border border-white/10 hover:border-white/40 ${pkg.isPopular ? 'bg-violet-600 text-white hover:bg-violet-500 border-transparent shadow-lg shadow-violet-900/20' : 'bg-white/5 text-gray-300 hover:text-white'}`}
      >
        Cotizar Ahora
      </button>
    </div>
  );
};

export default PackageCard;