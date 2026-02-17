
import React from 'react';
import { Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ASSETS } from '../constants';

const TESTIMONIALS = [
  {
    quote: "Fue el matrimonio de nuestros sueños. Las montañas, los cafetales, el atardecer... todo fue absolutamente mágico. Nuestros invitados aún hablan de esa noche.",
    label: "Boda para 35 invitados",
    image: ASSETS.CEREMONIA,
  },
  {
    quote: "Elegimos La Palma & El Tucán porque queríamos algo diferente, y superó todas nuestras expectativas. La comida, la decoración, el servicio... cada detalle fue perfecto.",
    label: "Boda para 30 invitados",
    image: ASSETS.MESA_RECEPCION,
  },
  {
    quote: "Nuestros invitados llegaron desde Bogotá y quedaron impresionados con el lugar. Las cabañas entre cafetales, la ceremonia al aire libre, la fiesta bajo las estrellas. Inolvidable.",
    label: "Destination wedding",
    image: ASSETS.ABRAZO_DORADA,
  },
];

const Testimonials: React.FC = () => {
  const reveal = useScrollReveal();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">Testimonios</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">Historias que comenzaron entre cafetales</h2>
          <p className="text-neutral-500 font-light text-base sm:text-lg">Parejas que celebraron en La Palma & El Tucán Hotel y vivieron una experiencia inolvidable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="group bg-brand-light rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={testimonial.image}
                  alt="Matrimonio en La Palma & El Tucán"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8">
                <Quote className="w-8 h-8 text-brand-pink/30 mb-4" />
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-brand-beige/30 pt-4">
                  <p className="text-neutral-400 text-xs uppercase tracking-wider">{testimonial.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
