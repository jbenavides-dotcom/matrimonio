
import React from 'react';
import { ASSETS } from '../constants';
import { Heart, Music, Users, Utensils, Home, TreePine } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n';

const Spaces: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();

  const FACILITIES = [
    { icon: <Heart className="w-5 h-5" />, title: t('facility_1_title'), label: t('facility_1_label') },
    { icon: <Users className="w-5 h-5" />, title: t('facility_2_title'), label: t('facility_2_label') },
    { icon: <Music className="w-5 h-5" />, title: t('facility_3_title'), label: t('facility_3_label') },
    { icon: <Utensils className="w-5 h-5" />, title: t('facility_4_title'), label: t('facility_4_label') },
    { icon: <Home className="w-5 h-5" />, title: t('facility_5_title'), label: t('facility_5_label') },
    { icon: <TreePine className="w-5 h-5" />, title: t('facility_6_title'), label: t('facility_6_label') },
  ];

  return (
    <section id="spaces" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={ASSETS.CEREMONIA} alt={t('spaces_img1_alt')} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] translate-y-6 sm:translate-y-10">
                <img src={ASSETS.NOVIA_HABITACION} alt={t('spaces_img2_alt')} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">{t('spaces_eyebrow')}</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark mb-4 sm:mb-6 leading-tight">
              {t('spaces_title')} <br className="hidden sm:block" /><span className="italic text-brand-pink">{t('spaces_title_italic')}</span>
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
              {t('spaces_subtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {FACILITIES.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-brand-light p-3 sm:p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-brand-dark block">{item.title}</span>
                    <span className="text-xs text-neutral-500">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
