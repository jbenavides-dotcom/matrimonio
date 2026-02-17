
import React from 'react';
import { JOURNEY_STEPS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ExperienceJourney: React.FC = () => {
  const headerReveal = useScrollReveal();
  const stepsReveal = useScrollReveal();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headerReveal.ref} className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20 ${headerReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">La Experiencia</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">La experiencia de tu matrimonio</h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">Cada momento fluye en armonía con la naturaleza, creando una celebración auténtica e inolvidable.</p>
        </div>

        <div ref={stepsReveal.ref} className={`space-y-8 sm:space-y-12 lg:space-y-16 ${stepsReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          {JOURNEY_STEPS.map((step, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
              <div className={`relative rounded-2xl sm:rounded-[2rem] overflow-hidden aspect-[4/3] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-brand-pink text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-serif text-lg sm:text-xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-brand-pink font-bold text-[10px] uppercase tracking-widest mb-2 block">Paso {step.number}</span>
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
