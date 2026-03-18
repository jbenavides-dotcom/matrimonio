
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ASSETS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n';

const Gallery: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const GALLERY_IMAGES = [
    { src: ASSETS.CEREMONIA, alt: t('gallery_img_1_alt') },
    { src: ASSETS.ABRAZO_DORADA, alt: t('gallery_img_2_alt') },
    { src: ASSETS.VOTOS, alt: t('gallery_img_3_alt') },
    { src: ASSETS.MESA_RECEPCION, alt: t('gallery_img_4_alt') },
    { src: ASSETS.NOVIA_RIENDO, alt: t('gallery_img_5_alt') },
    { src: ASSETS.CHAMPAGNE, alt: t('gallery_img_6_alt') },
    { src: ASSETS.ARCO_FLORAL, alt: t('gallery_img_7_alt') },
    { src: ASSETS.PAREJA_BAR, alt: t('gallery_img_8_alt') },
    { src: ASSETS.NOVIA_CARCAJADA, alt: t('gallery_img_9_alt') },
    { src: ASSETS.SALIDA_CONFETI, alt: t('gallery_img_10_alt') },
    { src: ASSETS.NOVIA_HABITACION, alt: t('gallery_img_11_alt') },
    { src: ASSETS.ANILLOS, alt: t('gallery_img_12_alt') },
    { src: ASSETS.PAREJA_ARCOIRIS, alt: t('gallery_img_13_alt') },
  ];

  const total = GALLERY_IMAGES.length;

  const goTo = useCallback((index: number) => {
    setCurrent((index + total) % total);
  }, [total]);

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play cada 4 segundos
  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 4000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, total]);

  // Pausar auto-play al interactuar, reanudar después de 8s
  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  // Teclado
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { goNext(); pauseAutoPlay(); }
      if (e.key === 'ArrowLeft') { goPrev(); pauseAutoPlay(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, pauseAutoPlay]);

  // Posición relativa al slide actual (-2, -1, 0, +1, +2)
  const getOffset = (index: number) => {
    let diff = index - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-24 bg-[#0a0a0a] overflow-hidden">
      <div ref={reveal.ref} className={`${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4 sm:px-6">
          <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">{t('gallery_eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6">{t('gallery_title')}</h2>
          <p className="text-white/50 font-light text-base sm:text-lg">{t('gallery_subtitle')}</p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center" style={{ height: 'clamp(400px, 60vh, 600px)' }}>
          {GALLERY_IMAGES.map((img, idx) => {
            const offset = getOffset(idx);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            const translateX = offset * 280;
            const scale = isActive ? 1 : Math.abs(offset) === 1 ? 0.75 : 0.55;
            const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.4 : 0.15;
            const zIndex = isActive ? 30 : Math.abs(offset) === 1 ? 20 : 10;
            const blur = isActive ? 0 : Math.abs(offset) === 1 ? 2 : 4;

            return (
              <div
                key={idx}
                className="absolute cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  filter: `blur(${blur}px)`,
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'transform, opacity, filter',
                }}
                onClick={() => {
                  if (!isActive) {
                    goTo(idx);
                    pauseAutoPlay();
                  }
                }}
              >
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    width: 'clamp(260px, 35vw, 380px)',
                    height: 'clamp(350px, 50vh, 520px)',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading={Math.abs(offset) <= 1 ? "eager" : "lazy"}
                  />
                </div>
                {isActive && (
                  <p className="text-white/60 text-center text-sm mt-4 transition-opacity duration-500">
                    {img.alt}
                  </p>
                )}
              </div>
            );
          })}

          {/* Flechas de navegación */}
          <button
            onClick={() => { goPrev(); pauseAutoPlay(); }}
            className="absolute left-4 sm:left-8 lg:left-16 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-brand-pink/80 text-white/60 hover:text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            aria-label={t('gallery_prev')}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => { goNext(); pauseAutoPlay(); }}
            className="absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-brand-pink/80 text-white/60 hover:text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            aria-label={t('gallery_next')}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores de puntos */}
        <div className="flex justify-center gap-2 mt-8">
          {GALLERY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { goTo(idx); pauseAutoPlay(); }}
              className={`rounded-full transition-all duration-500 ${
                idx === current
                  ? 'w-8 h-2 bg-brand-pink'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`${t('gallery_go_to')} ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
