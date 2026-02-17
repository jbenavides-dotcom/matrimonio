
import React from 'react';
import { BOOKING_URL, ASSETS } from '../constants';
import { ArrowRight, MapPin, Users, MessageCircle, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.HERO_FULL}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          alt="Matrimonio en La Palma & El Tucán"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 pt-32 sm:pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-brand-pink text-white text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold mb-6 sm:mb-8 animate-fade-in">
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Destination Wedding
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6 leading-[1.15] text-white">
            Celebra tu matrimonio en medio <br className="hidden sm:block" /><span className="italic text-brand-beige">del bosque y el café</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 max-w-2xl font-light leading-relaxed">
            En una finca cafetera reconocida mundialmente
          </p>

          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl font-light leading-relaxed">
            Rodeados de montañas, cafetales y bosque de niebla, a solo 90 minutos de Bogotá. Un escenario natural e íntimo para celebrar tu historia con calma, conexión y propósito.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex flex-col gap-2 text-white/90 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-pink" />
                <span>Hasta 40 personas</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-pink" />
                <span>Zipacón, Cundinamarca</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-pink text-white px-6 sm:px-8 py-4 sm:py-5 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:scale-105 hover:bg-brand-pink/70 transition-all shadow-2xl rounded-lg active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar Mi Matrimonio
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 text-white/80 px-4 sm:px-6 py-3 sm:py-4 glass-morphism rounded-xl">
              <span className="text-xs uppercase tracking-widest font-medium">20 cabañas privadas entre cafetales</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4 text-white/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="w-px h-8 sm:h-10 bg-white/20"></div>
      </div>
    </section>
  );
};

export default Hero;
