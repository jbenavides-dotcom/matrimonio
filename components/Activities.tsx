
import React from 'react';
import { ASSETS } from '../constants';
import { TreePine, Wine, Heart, Flame, PartyPopper, Coffee } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n';

const Activities: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();

  const ACTIVITIES_I18N = [
    { label: t('activity_1_label'), text: t('activity_1_text'), image: ASSETS.CEREMONIA, icon: <TreePine className="w-5 h-5" /> },
    { label: t('activity_2_label'), text: t('activity_2_text'), image: ASSETS.MESA_RECEPCION, icon: <Wine className="w-5 h-5" /> },
    { label: t('activity_3_label'), text: t('activity_3_text'), image: ASSETS.NOVIA_RIENDO, icon: <Heart className="w-5 h-5" /> },
    { label: t('activity_4_label'), text: t('activity_4_text'), image: ASSETS.ABRAZO_DORADA, icon: <Flame className="w-5 h-5" /> },
    { label: t('activity_5_label'), text: t('activity_5_text'), image: ASSETS.SALIDA_CONFETI, icon: <PartyPopper className="w-5 h-5" /> },
    { label: t('activity_6_label'), text: t('activity_6_text'), image: ASSETS.COFFEE_TOUR, icon: <Coffee className="w-5 h-5" /> },
  ];

  return (
    <section id="activities" className="py-12 sm:py-16 lg:py-20 bg-brand-light">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">{t('activities_eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">{t('activities_title')}</h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">{t('activities_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ACTIVITIES_I18N.map((activity, idx) => (
            <div key={idx} className="group relative rounded-2xl sm:rounded-[2rem] overflow-hidden aspect-[4/3] cursor-default">
              <img
                src={activity.image}
                alt={activity.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-white flex-shrink-0">
                    {activity.icon}
                  </div>
                  <span className="text-white font-bold text-sm sm:text-base">{activity.label}</span>
                </div>
                <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed pl-[52px]">{activity.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
