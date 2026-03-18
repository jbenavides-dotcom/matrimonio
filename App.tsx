
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import WhySection from './components/WhySection';
import EventTypes from './components/EventTypes';
import ExperienceJourney from './components/ExperienceJourney';
import Spaces from './components/Spaces';
import Activities from './components/Activities';

import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Sustainability from './components/Sustainability';
import LocationSection from './components/LocationSection';
import { BOOKING_URL, ASSETS, SOCIAL_LINKS, CONTACT_INFO } from './constants';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick, trackEmailClick, trackPhoneClick, trackSocialClick, initScrollTracking } from './hooks/useAnalytics';
import { useI18n } from './i18n';

const App: React.FC = () => {
  useEffect(() => { initScrollTracking(); }, []);
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-brand-light selection:bg-brand-pink selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <WhySection />
        <EventTypes />
        <Spaces />
        <ExperienceJourney />
        <Activities />

        <Testimonials />
        <Gallery />
        <Sustainability />
        <LocationSection />

        {/* CTA Final */}
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-brand-dark">
          <div className="absolute inset-0 z-0">
            <img
              src={ASSETS.CTA_BG}
              className="w-full h-full object-cover object-center opacity-30"
              alt={t('cta_img_alt')}
              loading="lazy"
              width="1200"
              height="800"
            />
            <div className="absolute inset-0 bg-brand-pink/20 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block bg-white/10 text-white/80 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold mb-6">
              {t('cta_badge')}
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8 text-white leading-tight">
              {t('cta_title')} <br className="hidden sm:block" />
              <span className="italic text-brand-beige">{t('cta_title_italic')}</span>
            </h3>
            <p className="text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
              {t('cta_subtitle')}
            </p>

            <div className="flex flex-col gap-4 justify-center items-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-pink hover:bg-white hover:text-brand-pink text-white px-10 sm:px-16 py-5 sm:py-6 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all shadow-2xl active:scale-95 w-full sm:w-auto rounded-xl"
                aria-label={t('cta_button_aria')}
                onClick={() => trackWhatsAppClick('cta_final')}
              >
                <MessageCircle className="w-6 h-6" />
                {t('cta_button')}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Cotización matrimonio en La Palma & El Tucán`}
                className="text-white/50 text-xs uppercase tracking-widest hover:text-white transition-colors"
                onClick={() => trackEmailClick('cta_final')}
              >
                {t('cta_email_prefix')} {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-brand-dark py-16 sm:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-20">
          <div className="col-span-1 sm:col-span-2">
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <img
                src="https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto/lpet/logo-hotel-light.svg"
                alt="La Palma & El Tucán Hotel"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-sm font-light">
              {t('footer_desc')}
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 text-white/40 font-bold text-[10px] uppercase tracking-widest">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors" onClick={() => trackSocialClick('instagram')}>Instagram</a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors" onClick={() => trackSocialClick('facebook')}>Facebook</a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors" onClick={() => trackSocialClick('tiktok')}>TikTok</a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors" onClick={() => trackSocialClick('linkedin')}>LinkedIn</a>
              <a href={SOCIAL_LINKS.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors" onClick={() => trackSocialClick('website')}>Website</a>
            </div>
          </div>

          <div>
            <h5 className="text-brand-pink font-bold uppercase tracking-[0.3em] text-[10px] mb-6 sm:mb-8 lg:mb-10">{t('footer_explore')}</h5>
            <ul className="space-y-3 sm:space-y-4 lg:space-y-5 text-xs text-white/50 font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">{t('footer_home')}</a></li>
              <li><a href="#spaces" className="hover:text-white transition-colors">{t('footer_spaces')}</a></li>
              <li><a href="#activities" className="hover:text-white transition-colors">{t('footer_services')}</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">{t('footer_location')}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-brand-pink font-bold uppercase tracking-[0.3em] text-[10px] mb-6 sm:mb-8 lg:mb-10">{t('footer_contact')}</h5>
            <div className="text-white/50 text-xs leading-loose font-medium flex flex-col gap-2">
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all sm:break-normal" onClick={() => trackEmailClick('footer')}>{CONTACT_INFO.email}</a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors" onClick={() => trackPhoneClick('footer')}>{CONTACT_INFO.phoneDisplay}</a>
              <p>{CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 lg:mt-32 pt-8 sm:pt-10 lg:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-8">
          <div className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold text-center md:text-left">
            &copy; {new Date().getFullYear()} La Palma & El Tucán. {t('footer_rights')}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold italic">{t('footer_award')}</span>
            <div className="w-px h-3 sm:h-4 bg-white/10 hidden sm:block"></div>
            <span className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold">{t('footer_sustain')}</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] w-14 h-14 sm:w-16 sm:h-16 bg-brand-pink text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-brand-pink/70 active:scale-95 transition-all duration-300"
        aria-label={t('floating_aria')}
        onClick={() => trackWhatsAppClick('floating_button')}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
};

export default App;
