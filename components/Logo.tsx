import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  // ID del archivo en Google Drive actualizado
  const FILE_ID = "1XPxfexSEVKf7mqDrA6IzqKGJ1W02g8cM";
  
  // URL Primaria: Endpoint de thumbnail de alta resolución (más fiable para hotlinking)
  const PRIMARY_URL = `https://drive.google.com/thumbnail?id=${FILE_ID}&sz=w1000`;
  
  // URL Secundaria: Servidor de exportación directo (Respaldo)
  const BACKUP_URL = `https://drive.google.com/uc?export=view&id=${FILE_ID}`;

  const [currentSrc, setCurrentSrc] = useState(PRIMARY_URL);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    // Si falla la URL primaria, intentamos con la secundaria
    if (currentSrc === PRIMARY_URL) {
      console.log("Cambiando a URL de respaldo para el logo...");
      setCurrentSrc(BACKUP_URL);
    } else {
      // Si ambas fallan, mostramos el fallback de texto
      console.error("No se pudo cargar el logo con ninguna URL.");
      setHasError(true);
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {!hasError ? (
        <div className="relative group">
          {/* Resplandor para asegurar contraste si el logo es oscuro */}
          <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
          
          <img 
            src={currentSrc} 
            alt="Shooting Events Logo Oficial" 
            className="h-10 md:h-14 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />
        </div>
      ) : (
        /* Fallback de seguridad visualmente atractivo (Texto) */
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 bg-gradient-to-br from-violet-600 to-violet-900 rotate-45 rounded-lg border border-white/20 flex items-center justify-center">
            <span className="font-sync font-black text-white -rotate-45">S</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-syne font-extrabold text-xl text-white leading-none tracking-tighter uppercase">SHOOTING</h2>
            <span className="font-sync text-[9px] text-gray-400 tracking-[0.4em]">EVENTS</span>
          </div>
        </div>
      )}

      {/* SEO Helper */}
      <span className="sr-only">Shooting Events - Producción de Eventos Elite</span>
    </div>
  );
};

export default Logo;