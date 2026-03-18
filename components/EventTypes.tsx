
import React from 'react';
import { Heart, Wine, Utensils, Music, Home, Palette } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n';

const EventTypes: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();

  const EVENT_TYPES_I18N = [
    { icon: <Heart className="w-6 h-6" />, title: t('event_1_title'), description: t('event_1_desc') },
    { icon: <Wine className="w-6 h-6" />, title: t('event_2_title'), description: t('event_2_desc') },
    { icon: <Utensils className="w-6 h-6" />, title: t('event_3_title'), description: t('event_3_desc') },
    { icon: <Music className="w-6 h-6" />, title: t('event_4_title'), description: t('event_4_desc') },
    { icon: <Home className="w-6 h-6" />, title: t('event_5_title'), description: t('event_5_desc') },
    { icon: <Palette className="w-6 h-6" />, title: t('event_6_title'), description: t('event_6_desc') },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">{t('events_title')}</h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">{t('events_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {EVENT_TYPES_I18N.map((event, idx) => (
            <div key={idx} className="group bg-brand-light p-6 sm:p-8 rounded-2xl hover:bg-brand-pink hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-4 sm:mb-6 group-hover:bg-white/20 group-hover:text-white transition-all">
                {event.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-brand-dark mb-2 sm:mb-3 group-hover:text-white transition-colors">{event.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
