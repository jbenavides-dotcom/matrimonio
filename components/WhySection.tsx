
import React from 'react';
import { MapPin, Users, Home, Heart, Award, Leaf } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n';

const WhySection: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();

  const WHY_ITEMS = [
    { icon: <MapPin className="w-5 h-5" />, title: t('why_1_title'), text: t('why_1_text') },
    { icon: <Users className="w-5 h-5" />, title: t('why_2_title'), text: t('why_2_text') },
    { icon: <Home className="w-5 h-5" />, title: t('why_3_title'), text: t('why_3_text') },
    { icon: <Heart className="w-5 h-5" />, title: t('why_4_title'), text: t('why_4_text') },
    { icon: <Award className="w-5 h-5" />, title: t('why_5_title'), text: t('why_5_text') },
    { icon: <Leaf className="w-5 h-5" />, title: t('why_6_title'), text: t('why_6_text') },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 blur-[120px] rounded-full"></div>

      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 relative z-10 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">{t('why_eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">{t('why_title')}</h2>
          <p className="text-neutral-500 font-light text-base sm:text-lg">{t('why_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {WHY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`group bg-white border border-brand-beige/30 p-6 sm:p-7 rounded-2xl hover:bg-brand-pink/5 hover:border-brand-pink/30 hover:shadow-lg transition-all duration-300 ${idx === 6 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-4 group-hover:bg-brand-pink group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-brand-dark font-bold text-sm sm:text-base mb-1.5">{item.title}</h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
