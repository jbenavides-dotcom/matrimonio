
import React from 'react';
import { ASSETS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n';

const ExperienceJourney: React.FC = () => {
  const headerReveal = useScrollReveal();
  const stepsReveal = useScrollReveal();
  const { t } = useI18n();

  const JOURNEY_STEPS_I18N = [
    { number: '01', title: t('journey_1_title'), description: t('journey_1_desc'), image: ASSETS.CHAMPAGNE },
    { number: '02', title: t('journey_2_title'), description: t('journey_2_desc'), image: ASSETS.VOTOS },
    { number: '03', title: t('journey_3_title'), description: t('journey_3_desc'), image: ASSETS.PAREJA_BAR },
    { number: '04', title: t('journey_4_title'), description: t('journey_4_desc'), image: ASSETS.MESA_RECEPCION },
    { number: '05', title: t('journey_5_title'), description: t('journey_5_desc'), image: ASSETS.SALIDA_CONFETI },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerReveal.ref} className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20 ${headerReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">{t('journey_eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">{t('journey_title')}</h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">{t('journey_subtitle')}</p>
        </div>

        <div ref={stepsReveal.ref} className={`space-y-8 sm:space-y-12 lg:space-y-16 ${stepsReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          {JOURNEY_STEPS_I18N.map((step, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
              <div className={`relative rounded-2xl sm:rounded-[2rem] overflow-hidden aspect-[4/3] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-brand-pink text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-serif text-lg sm:text-xl">
                  {step.number}
                </div>
              </div>
              <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-brand-pink font-bold text-[10px] uppercase tracking-widest mb-2 block">{t('journey_step_label')} {step.number}</span>
                <h3 className="text-2xl sm:text-3xl font-serif text-brand-dark mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceJourney;
