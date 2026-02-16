
import React from 'react';
import { NavLink } from './types';
import {
  Heart,
  Wine,
  Utensils,
  Music,
  Home,
  Palette,
  TreePine,
  Coffee,
  PartyPopper,
  Flame,
  Leaf,
} from 'lucide-react';

// ASSETS DE CLOUDINARY
const CDN = "https://res.cloudinary.com/dkqocgknd/image/upload";
const CDN_ALT = "https://res.cloudinary.com/dsylu9a7k/image/upload";

// Pipelines: algunas fotos no soportan efectos extra después de e_upscale
const UP_FULL = `${CDN}/e_upscale/f_auto,q_90,w_1920`;
const UP_HQ = `${CDN}/e_upscale/f_auto,q_90,w_1000`;
const UP_CARD = `${CDN}/e_upscale/f_auto,q_90,w_800`;
// Enhanced: upscale + restauración facial + mejora (solo fotos compatibles)
const ENH_FULL = `${CDN}/e_upscale/e_gen_restore/e_improve/e_auto_brightness/f_auto,q_90,w_1920`;
const ENH_HQ = `${CDN}/e_upscale/e_gen_restore/e_improve/e_auto_brightness/f_auto,q_90,w_1000`;

export const ASSETS = {
  // Hero - compatible con enhance completo
  HERO_FULL: `${ENH_FULL}/lpet-matrimonios/pareja-novios.jpg`,
  // CTA - solo upscale (no soporta efectos extra)
  CTA_BG: `${UP_FULL}/lpet-matrimonios/coctel-recepcion.jpg`,
  // Compatible con enhance
  CEREMONIA: `${ENH_HQ}/lpet-matrimonios/ceremonia.jpg`,
  INVITADOS: `${ENH_HQ}/lpet-matrimonios/invitados-deck.jpg`,
  // Solo upscale (no soportan efectos extra)
  COCTEL: `${UP_HQ}/lpet-matrimonios/coctel-recepcion.jpg`,
  NOVIA_CABANA: `${UP_HQ}/lpet-matrimonios/novia-cabana.jpg`,
  NOVIA_NATURALEZA: `${UP_HQ}/lpet-matrimonios/novia-naturaleza.jpg`,
  MUSICO: `${UP_HQ}/lpet-matrimonios/musico-atardecer.jpg`,
  CHEFS: `${UP_HQ}/lpet-matrimonios/chefs-fogon.jpg`,
  DJ_FIESTA: `${UP_HQ}/lpet-matrimonios/dj-fiesta.jpg`,
  TUCAN: `${UP_CARD}/lpet-matrimonios/tucan.jpg`,
  // Reutilizadas de empresariales (solo upscale compatible)
  CAFETALES: `${CDN_ALT}/e_upscale/f_auto,q_90,w_1920/lpet/cafetales.png`,
  CABANA: `${CDN_ALT}/e_upscale/f_auto,q_90,w_1000/lpet/cabana-interior.png`,
  COFFEE_TOUR: `${UP_HQ}/lpet-eventos/coffee-tour-guiado.png`,
};

// WHATSAPP RESERVAS
export const WHATSAPP_MATRIMONIOS = "https://wa.me/573189565617?text=Hola%2C%20quiero%20cotizar%20mi%20matrimonio%20en%20La%20Palma%20%26%20El%20Tuc%C3%A1n";
export const BOOKING_URL = WHATSAPP_MATRIMONIOS;

// CONTACTO
export const CONTACT_INFO = {
  email: "reservations@lapalmayeltucan.com",
  phone: "+573189565617",
  phoneDisplay: "(+57) 318 956 5617",
  address: "Zipacón, Cundinamarca, Colombia",
  googleMaps: "https://www.google.com/maps/search/La+Palma+y+El+Tucan+Hotel+Zipacon+Cundinamarca",
  whatsappReservas: "https://wa.me/573189565617",
};

// REDES SOCIALES
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/lapalmayeltucan_hotel/",
  facebook: "https://www.facebook.com/lapalmayeltucanboutiquehotel/",
  tiktok: "https://www.tiktok.com/@lapalmayeltucan_hotel",
  linkedin: "https://www.linkedin.com/company/la-palma-el-tuc%C3%A1n-hotel/",
  website: "https://lapalmayeltucanhotel.com/"
};

// NAV
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Espacios', href: '#spaces' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Ubicación', href: '#location' },
  { label: 'Contacto', href: '#footer' },
];

// SERVICIOS DE BODA
export const EVENT_TYPES = [
  {
    title: "Ceremonia al Aire Libre",
    description: "Digan 'sí, acepto' rodeados de montañas, cafetales y bosque de niebla.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Recepción & Cóctel",
    description: "Celebra con tus invitados en espacios únicos con vistas espectaculares.",
    icon: <Wine className="w-6 h-6" />,
  },
  {
    title: "Gastronomía Artesanal",
    description: "Menú farm-to-table con ingredientes de nuestra huerta orgánica.",
    icon: <Utensils className="w-6 h-6" />,
  },
  {
    title: "Música en Vivo & DJ",
    description: "Desde guitarra al atardecer hasta fiesta con DJ profesional.",
    icon: <Music className="w-6 h-6" />,
  },
  {
    title: "Alojamiento para Invitados",
    description: "20 cabañas privadas entre cafetales para tus seres queridos.",
    icon: <Home className="w-6 h-6" />,
  },
  {
    title: "Decoración & Ambientación",
    description: "Espacios naturales que se transforman según tu visión.",
    icon: <Palette className="w-6 h-6" />,
  },
];

// JOURNEY DE LA EXPERIENCIA
export const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Llegada al Paraíso",
    description: "El viaje de 90 minutos desde Bogotá por carreteras históricas marca el inicio de un día mágico. Tus invitados descubren un paisaje que quita el aliento entre montañas y cafetales.",
    image: ASSETS.NOVIA_CABANA,
  },
  {
    number: "02",
    title: "La Ceremonia",
    description: "Al aire libre, con las montañas como testigo y el sonido de la naturaleza como banda sonora. Un escenario que ningún salón puede igualar.",
    image: ASSETS.CEREMONIA,
  },
  {
    number: "03",
    title: "Cóctel & Celebración",
    description: "Brindis al atardecer con cócteles artesanales y música en vivo. El momento perfecto para compartir con familia y amigos.",
    image: ASSETS.COCTEL,
  },
  {
    number: "04",
    title: "Cena Farm-to-Table",
    description: "Un banquete artesanal preparado al fuego con ingredientes de nuestra huerta orgánica. Sabores auténticos para una noche inolvidable.",
    image: ASSETS.CHEFS,
  },
  {
    number: "05",
    title: "Fiesta & Recuerdos",
    description: "La noche se enciende con DJ profesional y pista de baile bajo las estrellas. Momentos que quedarán grabados para siempre.",
    image: ASSETS.DJ_FIESTA,
  },
];

// EXPERIENCIAS DE BODA
export const ACTIVITIES = [
  { label: "Ceremonia en la Naturaleza", image: ASSETS.CEREMONIA, icon: <TreePine className="w-5 h-5" /> },
  { label: "Cóctel al Atardecer", image: ASSETS.COCTEL, icon: <Wine className="w-5 h-5" /> },
  { label: "Música en Vivo", image: ASSETS.MUSICO, icon: <Music className="w-5 h-5" /> },
  { label: "Banquete al Fuego", image: ASSETS.CHEFS, icon: <Flame className="w-5 h-5" /> },
  { label: "Fiesta con DJ", image: ASSETS.DJ_FIESTA, icon: <PartyPopper className="w-5 h-5" /> },
  { label: "Coffee Tour para Invitados", image: ASSETS.COFFEE_TOUR, icon: <Coffee className="w-5 h-5" /> },
];

// DIRECCIONES
export const DIRECTIONS = [
  "Salida desde Bogotá por Calle 13 o Carrera 80 hacia Cachipay.",
  "Punto de referencia: Restaurante San Angelo Gourmet (antes de Cachipay).",
  "Desvío en el cruce de Macondo (500 mts).",
  "Paso por el cruce del Camino Real (Km 3.7 - Fundación Erika Verde).",
  "A 1km aprox. encontrarás el desvío señalizado hacia el hotel.",
];

// DATOS DE SOSTENIBILIDAD
export const SUSTAINABILITY_STATS = [
  { value: "70%", label: "Energía Solar" },
  { value: "100%", label: "Materiales Compostables" },
  { value: "100+", label: "Familias Cafeteras" },
  { value: "2.500", label: "Personas Impactadas" },
];
