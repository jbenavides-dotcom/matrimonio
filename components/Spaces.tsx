
import React from 'react';
import { ASSETS } from '../constants';
import { Heart, Music, Users, Utensils, Home, TreePine } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FACILITIES = [
  { icon: <Heart className="w-5 h-5" />, title: "Ceremonia al aire libre", label: "Escenarios naturales con vista a montañas y cafetales, donde el paisaje es parte del \"sí, acepto\"." },
  { icon: <Users className="w-5 h-5" />, title: "Recepción hasta 40 personas", label: "Espacios íntimos que permiten compartir con calma y cercanía." },
  { icon: <Music className="w-5 h-5" />, title: "Música en vivo & DJ", label: "Desde un atardecer acústico hasta una celebración bajo las estrellas." },
  { icon: <Utensils className="w-5 h-5" />, title: "Gastronomía de origen", label: "Propuesta elaborada con ingredientes frescos y locales, inspirada en nuestra huerta." },
  { icon: <Home className="w-5 h-5" />, title: "Cabañas privadas", label: "Alojamiento entre cafetales para que la celebración continúe todo el fin de semana." },
  { icon: <TreePine className="w-5 h-5" />, title: "Entorno natural único", label: "Bosque de niebla y finca cafetera reconocida mundialmente como marco de tu historia." },
];

const Spaces: React.FC = () => {
  const reveal = useScrollReveal();

  return (
    <section id="spaces" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={ASSETS.CEREMONIA} alt="Ceremonia de matrimonio en La Palma & El Tucán" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] translate-y-6 sm:translate-y-10">
                <img src={ASSETS.NOVIA_HABITACION} alt="Novia preparándose en cabaña de La Palma & El Tucán" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">Espacios</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark mb-4 sm:mb-6 leading-tight">
              Espacios que se integran <br className="hidden sm:block" /><span className="italic text-brand-pink">con la naturaleza</span>
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
              Rincones entre cafetales, montañas y bosque de niebla donde cada celebración se vive en armonía con el entorno.
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
