import { ServicePackage, Pillar, SecondaryService, Testimonial } from './types';

// Centralización de imágenes de la galería/reel para fácil edición
export const REEL_IMAGES = {
  // Imagen de producción profesional para el fondo del Reel
  atmospheres: "https://lh3.googleusercontent.com/d/1_Dgc_vHY302LvvTf2y19VS4kbV5kL_J9", 
  audio: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
};

// Imágenes para la Galería de Instagram
export const INSTAGRAM_FEED = [
  { 
    id: 1, 
    // Primera imagen personalizada
    url: "https://lh3.googleusercontent.com/d/17Tooy6AYAEoolNPQo7vhNQuSvldA10PW", 
    link: "https://www.instagram.com/shootingeventos/" 
  },
  { 
    id: 2, 
    // Segunda imagen personalizada
    url: "https://lh3.googleusercontent.com/d/1Tf9-NvilQungo_CzNG15ycT--n4FPtaQ", 
    link: "https://www.instagram.com/shootingeventos/" 
  },
  { 
    id: 3, 
    // Imagen de confeti
    url: "https://lh3.googleusercontent.com/d/1VC2RlCsA23Tn0vDCSj7L3wFK7FQYUI2h", 
    link: "https://www.instagram.com/p/DRyBb1lifkV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
  },
  { id: 4, url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800", link: "https://www.instagram.com/shootingeventos/" },
  { 
    id: 5, 
    // Quinta imagen personalizada
    url: "https://lh3.googleusercontent.com/d/1cpWPNdV7bb_k2S5q8F7ThTBJuBpRjFqI", 
    link: "https://www.instagram.com/shootingeventos/" 
  },
  { 
    id: 6, 
    // Sexta imagen personalizada (recién agregada)
    url: "https://lh3.googleusercontent.com/d/1d-p3Jx4TJ48oYZI6F7YqxWgIddMu52z5", 
    link: "https://www.instagram.com/shootingeventos/" 
  }
];

export const PACKAGES: ServicePackage[] = [
  {
    id: 'micro',
    name: 'AUDIO AMBIENTAL',
    price: '$2,000',
    msi: 'Aparta con $500',
    features: [
      '5 Horas de Servicio',
      '1 Bocina lineal JBL con Sub',
      'Conexión Bluetooth High-Link',
      '1 Luz Robótica Inteligente',
      'Instalación y transporte incluido'
    ],
    recommendedFor: 'Eventos íntimos y Cocteles',
    accent: 'from-cyan-600/20',
    color: 'border-cyan-500/30'
  },
  {
    id: 'essential',
    name: 'DJ REUNION',
    price: '$4,000',
    msi: 'Aparta con $1,000',
    features: [
      'DJ Pro (4 hrs) Mezclando en Vivo',
      'Controlador & Laptop Mac Pro',
      'Audio JBL Lineal + Subwoofer',
      '1 Micrófono Inalámbrico',
      '2 Luces LED Wash + 1 Robótica'
    ],
    recommendedFor: 'Reuniones y Fiestas de Casa',
    accent: 'from-blue-600/20',
    color: 'border-blue-500/30'
  },
  {
    id: 'club',
    name: 'DJ PLUS',
    price: '$5,000',
    msi: 'Aparta con $1,000',
    features: [
      'DJ Pro (4 hrs) + Cabina Elegante',
      '2 Bocinas LD Systems (Gama Alta)',
      '1 Micrófono Inalámbrico Pro',
      '4 Luces LED Wash + 2 Robóticas',
      'Máquina de Humo incluida'
    ],
    recommendedFor: 'Fiestas de Alto Impacto',
    accent: 'from-indigo-600/20',
    color: 'border-indigo-500/30',
    isPopular: true
  },
  {
    id: 'premium',
    name: 'DJ VIP',
    price: '$13,000',
    msi: 'Aparta con $1,000 • MSI',
    features: [
      'DJ Pro (5 hrs) + Cabina Pro',
      'Sistema LD Systems + Turbosound',
      '2 Pantallas 55" en base',
      '4 LED Wash + 3 Luces Robóticas',
      'Staff y Logística Premium'
    ],
    recommendedFor: 'Bodas VIP y Corporativos',
    accent: 'from-violet-600/20',
    color: 'border-violet-500/30'
  },
  {
    id: 'aura',
    name: 'DJ VIDEO',
    price: '$15,000',
    msi: 'Aparta con $1,000 • MSI',
    features: [
      'DJ Pro (5 hrs) Video-Mezcla',
      '2 Bocinas LD Systems (Gama Alta)',
      '2 Pantallas 55" en bases fijas',
      '6 LED Wash + 3 Robóticas',
      'Láser RGB + Humo + Staff'
    ],
    recommendedFor: 'Sociales Modernos',
    accent: 'from-emerald-600/20',
    color: 'border-emerald-500/30'
  },
  {
    id: 'elite',
    name: 'KARAOKE',
    price: '$5,000',
    msi: 'Aparta con $1,000',
    features: [
      'DJ Pro (5 hrs) + Cabina Elegante',
      'Audio LD Systems High-End',
      '1 Pantalla 55" + 2 Mics Pro',
      '4 Luces LED Wash + 1 Robótica',
      'Catálogo Digital Actualizado'
    ],
    recommendedFor: 'Fiestas Familiares',
    accent: 'from-pink-600/20',
    color: 'border-pink-500/30'
  },
  {
    id: 'stadium',
    name: 'DJ + KARAOKE',
    price: '$6,000',
    msi: 'Aparta con $2,000',
    features: [
      'DJ Pro (5 hrs) Full Mix',
      'Audio LD Systems (Gama Alta)',
      '1 Pantalla 55" + 2 Mics Pro',
      '4 Luces LED Wash + 1 Robótica',
      'Humo, Instalación y Operador'
    ],
    recommendedFor: 'Eventos Sociales Mixtos',
    accent: 'from-rose-600/20',
    color: 'border-rose-500/30'
  },
  {
    id: 'custom',
    name: 'DJ + PHOTOBOOTH',
    price: '$7,000',
    msi: 'Aparta con $2,000 • MSI',
    features: [
      'DJ Pro (4 hrs) + Cabina (3 hrs)',
      '2 Bocinas LD Systems High-End',
      'Impresiones Ilimitadas',
      '4 Luces LED Wash + 2 Robóticas',
      'Staff, Instalación y Transporte'
    ],
    recommendedFor: 'Bodas y Graduaciones',
    accent: 'from-orange-600/20',
    color: 'border-orange-500/30'
  }
];

export const PILLARS: Pillar[] = [
  { 
    title: "DJ PROFESIONAL", 
    icon: "🎧", 
    desc: "Repertorio versátil con todos los géneros musicales mezclando en vivo.",
    accent: "from-violet-500/20"
  },
  { 
    title: "AUDIO HI-FI", 
    icon: "🔊", 
    desc: "Alta fidelidad con equipos JBL y LD Systems para una claridad absoluta.",
    accent: "from-pink-500/20"
  },
  { 
    title: "ILUMINACIÓN & FX", 
    icon: "💡", 
    desc: "Luces inteligentes, láseres y efectos visuales DMX.",
    accent: "from-indigo-500/20"
  },
  { 
    title: "SISTEMAS DE VOZ", 
    icon: "🎤", 
    desc: "Micrófonos Pro para presentaciones y conferencias de gala.",
    accent: "from-blue-500/20"
  }
];

export const SECONDARY_SERVICES: SecondaryService[] = [
  { 
    title: "PANTALLAS", 
    color: "border-blue-500",
    image: "https://lh3.googleusercontent.com/d/149AEZxr5rhOwQYlIW47MwOgdNwsE9zF8"
  },
  { 
    title: "PISTA", 
    color: "border-orange-500",
    image: "https://lh3.googleusercontent.com/d/13VVdh4Ry3VA1ZMROxny9sytO9Dn60W22"
  },
  { 
    title: "FOTO Y VIDEO", 
    color: "border-rose-500",
    image: "https://lh3.googleusercontent.com/d/1X7_ki35qvtswQ2EoexweE-U02qrfUeyB"
  },
  { 
    title: "CABINAS DE FOTO", 
    color: "border-purple-500",
    image: "https://lh3.googleusercontent.com/d/1oQsXbQbixXObUvasQhqlw7yzGGzQ6h3l"
  },
  { 
    title: "PLATAFORMA 360", 
    color: "border-cyan-500",
    image: "https://lh3.googleusercontent.com/d/1glt6MiBRONL_ZWW8eZrCm9l13WhrT5jq"
  },
  { 
    title: "ESCENOGRAFÍA", 
    color: "border-emerald-500",
    image: "https://lh3.googleusercontent.com/d/1G2ru0H6T-jlXm1V2XcZ_MFlBNWi7ru4w"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sofía & Alejandro",
    role: "Boda en Hacienda San Gabriel",
    content: "La iluminación transformó el lugar por completo. El DJ leyó a la perfección a nuestros invitados. Superaron nuestras expectativas.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 2,
    name: "Ricardo Salinas",
    role: "Director IT - Tech Global",
    content: "Profesionalismo puro. El montaje fue puntual y la calidad del audio fue impecable para nuestra convención anual de alto nivel.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 3,
    name: "Carla Méndez",
    role: "Celebración XV Años",
    content: "La pista iluminada y el robot LED fueron el hit de la fiesta. Mis amigos no pararon de bailar ni un segundo en toda la noche.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 4,
    name: "Sonia & Roberto",
    role: "Boda Destino - Valle de Bravo",
    content: "Increíble servicio. Desde la planeación hasta el evento, Shooting Events demostró ser la mejor opción técnica en todo México.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 5,
    name: "BMW México",
    role: "Lanzamiento Serie M",
    content: "La sincronización de luces con el video fue espectacular. Un nivel de producción internacional que pocos ofrecen en el país.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 6,
    name: "Mariana Godínez",
    role: "Fiesta de Graduación Anáhuac",
    content: "El paquete con cabina de fotos fue lo mejor. Todo el staff fue súper amable y la música siempre estuvo en el punto exacto.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 7,
    name: "Luis Fernando",
    role: "Boda en Acapulco",
    content: "El rider de audio que trajeron fue impresionante. No hubo un solo fallo técnico a pesar de la humedad y el calor extremo.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 8,
    name: "Ana Karen Ortega",
    role: "Evento Corporativo Sephora",
    content: "La mejor agencia de producción en CDMX. Entendieron nuestro concepto de marca y lo elevaron a un nivel audiovisual increíble.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
  }
];