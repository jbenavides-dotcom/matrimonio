
import React from 'react';
import { SUSTAINABILITY_STATS, ASSETS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n';

const Sustainability: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();

  const STATS_I18N = [
    { value: SUSTAINABILITY_STATS[0].value, label: t('sustain_stat_1_label') },
    { value: SUSTAINABILITY_STATS[1].value, label: t('sustain_stat_2_label') },
    { value: SUSTAINABILITY_STATS[2].value, label: t('sustain_stat_3_label') },
    { value: SUSTAINABILITY_STATS[3].value, label: t('sustain_stat_4_label') },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 text-white overflow-hidden relative">
      <div className="absolute inset-0">
        <img src={ASSETS.CAFETALES} alt="" role="presentation" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-brand-green/80"></div>
      </div>
      <div ref={reveal.ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          <div>
            <span className="text-white/60 text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">{t('sustain_eyebrow')}</span>
            <h2 className="text-3xl sm:text-4xl font-serif mb-4 sm:mb-6 leading-tight">
              {t('sustain_title')} <br className="hidden sm:block" /><span className="italic text-brand-beige">{t('sustain_title_italic')}</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-light mb-6 sm:mb-8">
              {t('sustain_desc')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/90 text-sm">
                <div className="w-2 h-2 rounded-full bg-brand-beige"></div>
                {t('sustain_li_1')}
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm">
                <div className="w-2 h-2 rounded-full bg-brand-beige"></div>
                {t('sustain_li_2')}
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm">
                <div className="w-2 h-2 rounded-full bg-brand-beige"></div>
                {t('sustain_li_3')}
              </li>
              <li className="flex items-center gap-3 text-white/90 text-sm">
                <div className="w-2 h-2 rounded-full bg-brand-beige"></div>
                {t('sustain_li_4')}
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {STATS_I18N.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 text-center">
                <span className="text-3xl sm:text-4xl font-serif text-brand-beige block mb-2">{stat.value}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
