import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ASSETS } from '../constants';
import { useI18n } from '../i18n';

const Testimonials: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseRef = useRef(false);

  const TESTIMONIALS = [
    {
      quote: t('testimonial_1_quote'),
      label: t('testimonial_1_label'),
      image: ASSETS.CEREMONIA,
      source: 'Booking' as const,
    },
    {
      quote: t('testimonial_2_quote'),
      label: t('testimonial_2_label'),
      image: ASSETS.MESA_RECEPCION,
      source: 'TripAdvisor' as const,
    },
    {
      quote: t('testimonial_3_quote'),
      label: t('testimonial_3_label'),
      image: ASSETS.ABRAZO_DORADA,
      source: 'Booking' as const,
    },
    {
      quote: t('testimonial_4_quote'),
      label: t('testimonial_4_label'),
      image: ASSETS.VOTOS,
      source: 'TripAdvisor' as const,
    },
    {
      quote: t('testimonial_5_quote'),
      label: t('testimonial_5_label'),
      image: ASSETS.SALIDA_CONFETI,
      source: 'Booking' as const,
    },
    {
      quote: t('testimonial_6_quote'),
      label: t('testimonial_6_label'),
      image: ASSETS.PAREJA_BAR,
      source: 'TripAdvisor' as const,
    },
  ];

  const totalPages = Math.ceil(TESTIMONIALS.length / 3);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!pauseRef.current) {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
      }
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [totalPages]);

  const handleInteraction = (newIndex: number) => {
    pauseRef.current = true;
    setCurrentIndex(newIndex);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => {
      pauseRef.current = false;
      startAutoplay();
    }, 8000);
  };

  const goNext = () => handleInteraction((currentIndex + 1) % totalPages);
  const goPrev = () => handleInteraction((currentIndex - 1 + totalPages) % totalPages);

  const visibleReviews = TESTIMONIALS.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-dark">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">{t('testimonials_eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6">{t('testimonials_title')}</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-lg">5</span>
            <span className="text-white/50 text-sm">/ 5</span>
          </div>
          <p className="text-white/50 font-light text-base sm:text-lg mt-4">{t('testimonials_subtitle')}</p>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
            aria-label={t('testimonials_prev')}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
            aria-label={t('testimonials_next')}
          >
            <ChevronRight size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {visibleReviews.map((testimonial, idx) => (
              <div key={currentIndex * 3 + idx} className="group bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/12 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={t('testimonials_img_alt')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/60">
                      {testimonial.source}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-brand-gold/70 text-xs uppercase tracking-wider">{testimonial.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleInteraction(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-brand-pink w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`${t('testimonials_page')} ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
