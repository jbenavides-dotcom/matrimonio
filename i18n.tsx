
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Lang = 'es' | 'en';

// ─────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────
const translations = {
  es: {
    // ── NAVBAR ──
    nav_cta: 'Cotizar Matrimonio',
    nav_cta_mobile: 'Cotizar Matrimonio por WhatsApp',
    nav_home: 'Home',
    nav_spaces: 'Espacios',
    nav_gallery: 'Galería',
    nav_location: 'Ubicación',
    nav_contact: 'Contacto',
    nav_open_menu: 'Abrir menú',
    nav_close_menu: 'Cerrar menú',

    // ── HERO ──
    hero_badge: 'Destination Wedding',
    hero_h1: 'Celebra tu matrimonio',
    hero_h1_italic: 'en medio del bosque y el café',
    hero_subtitle: 'En una finca cafetera reconocida mundialmente',
    hero_desc: 'Rodeados de montañas, cafetales y bosque de niebla, a solo 90 minutos de Bogotá. Un escenario natural e íntimo para celebrar tu historia con calma, conexión y propósito.',
    hero_capacity: 'Hasta 40 personas',
    hero_location: 'Zipacón, Cundinamarca',
    hero_cta: 'Cotizar Mi Matrimonio',
    hero_img_alt: 'Matrimonio en La Palma & El Tucán',

    // ── WHY SECTION ──
    why_eyebrow: '¿Por qué elegir La Palma & El Tucán Hotel?',
    why_title: 'Un lugar diferente para una historia única',
    why_subtitle: 'Matrimonios íntimos en una finca cafetera reconocida mundialmente; una celebración diseñada en armonía con la naturaleza.',
    why_1_title: '90 minutos de Bogotá',
    why_1_text: 'Acceso fácil sin perder la sensación de estar en medio del bosque, rodeado de cafetales y montaña.',
    why_2_title: 'Celebraciones íntimas (hasta 40 personas)',
    why_2_text: 'Un espacio ideal para bodas conscientes y exclusivas, donde cada invitado hace parte real del momento.',
    why_3_title: 'Cabañas privadas entre cafetales',
    why_3_text: '20 cabañas independientes inmersas en la naturaleza para que tu celebración se convierta en una experiencia de fin de semana.',
    why_4_title: 'Ceremonia al aire libre',
    why_4_text: 'Escenarios naturales con vista a montañas y bosque de niebla, donde el paisaje es el verdadero protagonista.',
    why_5_title: 'Finca cafetera reconocida mundialmente',
    why_5_text: 'Parte de un proyecto galardonado en cafés especiales, cultivados bajo principios de agricultura regenerativa.',
    why_6_title: 'Experiencia personalizada y gastronomía de origen',
    why_6_text: 'Cada detalle se diseña contigo, acompañado de una propuesta gastronómica elaborada con ingredientes frescos y locales.',

    // ── EVENT TYPES ──
    events_title: 'Una celebración pensada para sentirse, no solo vivirse',
    events_subtitle: 'Diseñamos contigo cada momento para que vivas una celebración íntima, auténtica y sin preocupaciones.',
    event_1_title: 'Ceremonia al Aire Libre',
    event_1_desc: 'Di "sí, acepto" rodeado de cafetales, montañas y bosque de niebla.',
    event_2_title: 'Recepción & Cóctel',
    event_2_desc: 'Comparte con tus invitados en espacios integrados al paisaje, con vistas abiertas y atmósfera natural.',
    event_3_title: 'Gastronomía de Origen',
    event_3_desc: 'Propuesta elaborada con ingredientes frescos y locales, inspirada en nuestra huerta y el territorio.',
    event_4_title: 'Música en Vivo & DJ',
    event_4_desc: 'Desde un atardecer acústico hasta una celebración vibrante bajo las estrellas.',
    event_5_title: 'Alojamiento entre Cafetales',
    event_5_desc: 'Cabañas privadas para que tus invitados vivan la experiencia completa de fin de semana.',
    event_6_title: 'Ambientación Personalizada',
    event_6_desc: 'Cada detalle se diseña en armonía con el entorno y la esencia de tu historia.',

    // ── SPACES ──
    spaces_eyebrow: 'Espacios',
    spaces_title: 'Espacios que se integran',
    spaces_title_italic: 'con la naturaleza',
    spaces_subtitle: 'Rincones entre cafetales, montañas y bosque de niebla donde cada celebración se vive en armonía con el entorno.',
    facility_1_title: 'Ceremonia al aire libre',
    facility_1_label: 'Escenarios naturales con vista a montañas y cafetales, donde el paisaje es parte del "sí, acepto".',
    facility_2_title: 'Recepción hasta 40 personas',
    facility_2_label: 'Espacios íntimos que permiten compartir con calma y cercanía.',
    facility_3_title: 'Música en vivo & DJ',
    facility_3_label: 'Desde un atardecer acústico hasta una celebración bajo las estrellas.',
    facility_4_title: 'Gastronomía de origen',
    facility_4_label: 'Propuesta elaborada con ingredientes frescos y locales, inspirada en nuestra huerta.',
    facility_5_title: 'Cabañas privadas',
    facility_5_label: 'Alojamiento entre cafetales para que la celebración continúe todo el fin de semana.',
    facility_6_title: 'Entorno natural único',
    facility_6_label: 'Bosque de niebla y finca cafetera reconocida mundialmente como marco de tu historia.',
    spaces_img1_alt: 'Ceremonia de matrimonio en La Palma & El Tucán',
    spaces_img2_alt: 'Novia preparándose en cabaña de La Palma & El Tucán',

    // ── EXPERIENCE JOURNEY ──
    journey_eyebrow: 'La Experiencia',
    journey_title: 'La experiencia de tu matrimonio',
    journey_subtitle: 'Cada momento fluye en armonía con la naturaleza, creando una celebración auténtica e inolvidable.',
    journey_step_label: 'Paso',
    journey_1_title: 'Preparativos entre cafetales',
    journey_1_desc: 'Comienza el día en cabañas privadas rodeadas de bosque y montaña. Calma, luz natural y la emoción compartida antes del gran momento.',
    journey_2_title: 'La ceremonia',
    journey_2_desc: 'Al aire libre, con el paisaje como testigo y el sonido del bosque como banda sonora. Un escenario que ningún salón puede replicar.',
    journey_3_title: 'Cóctel al atardecer',
    journey_3_desc: 'Brinda entre cafetales con coctelería artesanal y música en vivo, mientras la montaña se tiñe de dorado.',
    journey_4_title: 'Cena de origen',
    journey_4_desc: 'Un banquete inspirado en ingredientes frescos y locales, servido en espacios que se integran con el entorno natural.',
    journey_5_title: 'Celebración & Recuerdos',
    journey_5_desc: 'Risas, abrazos y celebración en un ambiente íntimo, donde cada recuerdo se vive sin prisa.',

    // ── ACTIVITIES ──
    activities_eyebrow: 'Momentos',
    activities_title: 'Momentos que se sienten, no solo se viven',
    activities_subtitle: 'Cada instante fluye en armonía con la naturaleza para crear recuerdos auténticos y memorables.',
    activity_1_label: 'Ceremonia en la Naturaleza',
    activity_1_text: 'Un "sí, acepto" rodeado de montañas, cafetales y bosque de niebla.',
    activity_2_label: 'Recepción con Identidad',
    activity_2_text: 'Mesas, detalles y gastronomía que reflejan tu esencia en un entorno natural.',
    activity_3_label: 'Preparativos con Calma',
    activity_3_text: 'Luz suave, risas compartidas y la emoción de comenzar una nueva etapa.',
    activity_4_label: 'Instantes Inolvidables',
    activity_4_text: 'Miradas, abrazos y atardeceres que quedan grabados para siempre.',
    activity_5_label: 'Celebración Íntima',
    activity_5_text: 'Alegría compartida en un ambiente cercano y lleno de significado.',
    activity_6_label: 'Experiencia Cafetera para Invitados',
    activity_6_text: 'Un recorrido por nuestra finca para que el café también sea parte de tu historia.',

    // ── TESTIMONIALS ──
    testimonials_eyebrow: 'Testimonios',
    testimonials_title: 'Historias que comenzaron entre cafetales',
    testimonials_subtitle: 'Parejas que celebraron en La Palma & El Tucán Hotel y vivieron una experiencia inolvidable.',
    testimonial_1_quote: 'Fue el matrimonio de nuestros sueños. Las montañas, los cafetales, el atardecer... todo fue absolutamente mágico. Nuestros invitados aún hablan de esa noche.',
    testimonial_1_label: 'Boda para 35 invitados',
    testimonial_2_quote: 'Elegimos La Palma & El Tucán porque queríamos algo diferente, y superó todas nuestras expectativas. La comida, la decoración, el servicio... cada detalle fue perfecto.',
    testimonial_2_label: 'Boda para 30 invitados',
    testimonial_3_quote: 'Nuestros invitados llegaron desde Bogotá y quedaron impresionados con el lugar. Las cabañas entre cafetales, la ceremonia al aire libre, la fiesta bajo las estrellas. Inolvidable.',
    testimonial_3_label: 'Destination wedding',
    testimonial_4_quote: 'Cada rincón de la finca fue parte de nuestra celebración. La ceremonia entre cafetales, el cóctel al atardecer, la cena bajo las estrellas. Un lugar que no necesita decoración.',
    testimonial_4_label: 'Boda íntima',
    testimonial_5_quote: 'Buscábamos un venue con alma, no un salón genérico. La Palma & El Tucán fue exactamente eso: un lugar con historia, con naturaleza y con un equipo que hizo todo posible.',
    testimonial_5_label: 'Boda para 25 invitados',
    testimonial_6_quote: 'La gastronomía fue espectacular. Ingredientes frescos, presentación impecable y el café de especialidad como cierre perfecto. Nuestros invitados quedaron encantados.',
    testimonial_6_label: 'Boda gastronómica',
    testimonials_prev: 'Reseñas anteriores',
    testimonials_next: 'Siguientes reseñas',
    testimonials_page: 'Página',
    testimonials_img_alt: 'Matrimonio en La Palma & El Tucán',

    // ── GALLERY ──
    gallery_eyebrow: 'Galería',
    gallery_title: 'Momentos reales',
    gallery_subtitle: 'Matrimonios celebrados en La Palma & El Tucán.',
    gallery_prev: 'Foto anterior',
    gallery_next: 'Foto siguiente',
    gallery_go_to: 'Ir a foto',
    gallery_img_1_alt: 'Salida de ceremonia con confeti',
    gallery_img_2_alt: 'Abrazo de novios al atardecer',
    gallery_img_3_alt: 'Lectura de votos matrimoniales',
    gallery_img_4_alt: 'Mesa de recepción elegante',
    gallery_img_5_alt: 'Novia riendo de felicidad',
    gallery_img_6_alt: 'Brindis de preparativos',
    gallery_img_7_alt: 'Pareja bajo arco de flores',
    gallery_img_8_alt: 'Pareja en el bar del venue',
    gallery_img_9_alt: 'Momento de alegría espontánea',
    gallery_img_10_alt: 'Celebración con confeti',
    gallery_img_11_alt: 'Novia preparándose en la cabaña',
    gallery_img_12_alt: 'Intercambio de anillos',
    gallery_img_13_alt: 'Pareja con arcoíris y montañas',

    // ── SUSTAINABILITY ──
    sustain_eyebrow: 'Sostenibilidad',
    sustain_title: 'Su celebración también puede',
    sustain_title_italic: 'generar impacto positivo',
    sustain_desc: 'Al elegir La Palma & El Tucán, su matrimonio apoya un modelo de agricultura regenerativa que cuida el suelo, el agua y las comunidades cafeteras de la región.',
    sustain_li_1: '100% de respaldo energético solar',
    sustain_li_2: 'Programa zero waste con materiales compostables',
    sustain_li_3: 'Iluminación LED inteligente en todas las instalaciones',
    sustain_li_4: 'Green Travel Award Winner',
    sustain_stat_1_label: 'Energía Solar',
    sustain_stat_2_label: 'Materiales Compostables',
    sustain_stat_3_label: 'Familias Cafeteras',
    sustain_stat_4_label: 'Personas Impactadas',

    // ── LOCATION ──
    location_title: 'Ubicación Estratégica',
    location_desc: 'Estamos en Zipacón, Cundinamarca. Un refugio mágico a solo 90 minutos de Bogotá, perfecto para una celebración lejos del ruido de la ciudad.',
    location_cta: 'Ver en Google Maps',
    location_cta_aria: 'Ver ubicación en Google Maps',

    // ── CTA FINAL ──
    cta_badge: 'Fechas Limitadas',
    cta_title: 'Hagamos realidad',
    cta_title_italic: 'el matrimonio de sus sueños',
    cta_subtitle: 'Cada matrimonio en La Palma & El Tucán es una experiencia única. Cuéntanos su visión y diseñamos la celebración perfecta.',
    cta_button: 'Cotizar Mi Matrimonio por WhatsApp',
    cta_button_aria: 'Cotizar matrimonio por WhatsApp',
    cta_email_prefix: 'O escríbenos a',
    cta_img_alt: 'Celebra tu matrimonio en La Palma & El Tucán',

    // ── FOOTER ──
    footer_brand_sub: 'HOTEL',
    footer_desc: 'Matrimonios en una finca cafetera galardonada internacionalmente. Zipacón, Cundinamarca, a 90 minutos de Bogotá.',
    footer_explore: 'Explora',
    footer_contact: 'Contacto',
    footer_home: 'Home',
    footer_spaces: 'Espacios',
    footer_services: 'Servicios',
    footer_location: 'Ubicación',
    footer_award: 'Green Travel Award Winner',
    footer_sustain: 'Sustainability First',
    footer_rights: 'Todos los derechos reservados.',

    // ── FLOATING BUTTON ──
    floating_aria: 'Cotizar matrimonio por WhatsApp',
  },

  en: {
    // ── NAVBAR ──
    nav_cta: 'Get a Quote',
    nav_cta_mobile: 'Get a Quote on WhatsApp',
    nav_home: 'Home',
    nav_spaces: 'Spaces',
    nav_gallery: 'Gallery',
    nav_location: 'Location',
    nav_contact: 'Contact',
    nav_open_menu: 'Open menu',
    nav_close_menu: 'Close menu',

    // ── HERO ──
    hero_badge: 'Destination Wedding',
    hero_h1: 'Celebrate your wedding',
    hero_h1_italic: 'surrounded by forest and coffee',
    hero_subtitle: 'At an internationally recognized coffee farm',
    hero_desc: 'Surrounded by mountains, coffee fields and cloud forest, just 90 minutes from Bogotá. A natural, intimate setting to celebrate your story with calm, connection and purpose.',
    hero_capacity: 'Up to 40 guests',
    hero_location: 'Zipacón, Cundinamarca',
    hero_cta: 'Get My Wedding Quote',
    hero_img_alt: 'Wedding at La Palma & El Tucán',

    // ── WHY SECTION ──
    why_eyebrow: 'Why choose La Palma & El Tucán Hotel?',
    why_title: 'A different place for a unique story',
    why_subtitle: 'Intimate weddings at a world-renowned coffee farm; a celebration designed in harmony with nature.',
    why_1_title: '90 minutes from Bogotá',
    why_1_text: 'Easy access without losing the feeling of being in the middle of the forest, surrounded by coffee fields and mountains.',
    why_2_title: 'Intimate celebrations (up to 40 guests)',
    why_2_text: 'An ideal space for conscious, exclusive weddings where every guest is truly part of the moment.',
    why_3_title: 'Private cabins among coffee fields',
    why_3_text: '20 independent cabins immersed in nature so your celebration becomes a full weekend experience.',
    why_4_title: 'Open-air ceremony',
    why_4_text: 'Natural settings with views of mountains and cloud forest, where the landscape is the true protagonist.',
    why_5_title: 'World-renowned coffee farm',
    why_5_text: 'Part of an award-winning specialty coffee project, grown under principles of regenerative agriculture.',
    why_6_title: 'Personalized experience and farm-to-table cuisine',
    why_6_text: 'Every detail is designed with you, accompanied by a gastronomic proposal crafted with fresh, local ingredients.',

    // ── EVENT TYPES ──
    events_title: 'A celebration meant to be felt, not just experienced',
    events_subtitle: 'We design every moment with you so you live an intimate, authentic and worry-free celebration.',
    event_1_title: 'Open-Air Ceremony',
    event_1_desc: 'Say "I do" surrounded by coffee fields, mountains and cloud forest.',
    event_2_title: 'Reception & Cocktail',
    event_2_desc: 'Share with your guests in spaces integrated into the landscape, with open views and a natural atmosphere.',
    event_3_title: 'Farm-to-Table Cuisine',
    event_3_desc: 'A proposal crafted with fresh and local ingredients, inspired by our garden and the territory.',
    event_4_title: 'Live Music & DJ',
    event_4_desc: 'From an acoustic sunset to a vibrant celebration under the stars.',
    event_5_title: 'Accommodation among Coffee Fields',
    event_5_desc: 'Private cabins so your guests can live the complete weekend experience.',
    event_6_title: 'Personalized Décor',
    event_6_desc: 'Every detail is designed in harmony with the surroundings and the essence of your story.',

    // ── SPACES ──
    spaces_eyebrow: 'Spaces',
    spaces_title: 'Spaces that blend',
    spaces_title_italic: 'with nature',
    spaces_subtitle: 'Corners among coffee fields, mountains and cloud forest where every celebration is lived in harmony with the surroundings.',
    facility_1_title: 'Open-air ceremony',
    facility_1_label: 'Natural settings with mountain and coffee views, where the landscape is part of the "I do".',
    facility_2_title: 'Reception up to 40 guests',
    facility_2_label: 'Intimate spaces that allow sharing calmly and closely.',
    facility_3_title: 'Live music & DJ',
    facility_3_label: 'From an acoustic sunset to a celebration under the stars.',
    facility_4_title: 'Farm-to-table cuisine',
    facility_4_label: 'A proposal crafted with fresh, local ingredients inspired by our garden.',
    facility_5_title: 'Private cabins',
    facility_5_label: 'Accommodation among coffee fields so the celebration continues all weekend.',
    facility_6_title: 'Unique natural surroundings',
    facility_6_label: 'Cloud forest and a world-renowned coffee farm as the backdrop of your story.',
    spaces_img1_alt: 'Wedding ceremony at La Palma & El Tucán',
    spaces_img2_alt: 'Bride getting ready at La Palma & El Tucán cabin',

    // ── EXPERIENCE JOURNEY ──
    journey_eyebrow: 'The Experience',
    journey_title: 'Your wedding experience',
    journey_subtitle: 'Every moment flows in harmony with nature, creating an authentic and unforgettable celebration.',
    journey_step_label: 'Step',
    journey_1_title: 'Getting ready among coffee fields',
    journey_1_desc: 'Start the day in private cabins surrounded by forest and mountain. Calm, natural light and the shared excitement before the big moment.',
    journey_2_title: 'The ceremony',
    journey_2_desc: 'Outdoors, with the landscape as witness and the sound of the forest as the soundtrack. A setting no ballroom can replicate.',
    journey_3_title: 'Sunset cocktail',
    journey_3_desc: 'Toast among coffee fields with artisan cocktails and live music, while the mountain turns golden.',
    journey_4_title: 'Farm-to-table dinner',
    journey_4_desc: 'A banquet inspired by fresh local ingredients, served in spaces that blend with the natural surroundings.',
    journey_5_title: 'Celebration & Memories',
    journey_5_desc: 'Laughter, hugs and celebration in an intimate atmosphere, where every memory is lived without rush.',

    // ── ACTIVITIES ──
    activities_eyebrow: 'Moments',
    activities_title: 'Moments to be felt, not just experienced',
    activities_subtitle: 'Every instant flows in harmony with nature to create authentic and memorable memories.',
    activity_1_label: 'Ceremony in Nature',
    activity_1_text: 'An "I do" surrounded by mountains, coffee fields and cloud forest.',
    activity_2_label: 'Reception with Identity',
    activity_2_text: 'Tables, details and cuisine that reflect your essence in a natural setting.',
    activity_3_label: 'Getting Ready with Calm',
    activity_3_text: 'Soft light, shared laughter and the excitement of beginning a new chapter.',
    activity_4_label: 'Unforgettable Moments',
    activity_4_text: 'Glances, embraces and sunsets that stay with you forever.',
    activity_5_label: 'Intimate Celebration',
    activity_5_text: 'Shared joy in a close and meaningful atmosphere.',
    activity_6_label: 'Coffee Experience for Guests',
    activity_6_text: 'A tour of our farm so coffee becomes part of your story too.',

    // ── TESTIMONIALS ──
    testimonials_eyebrow: 'Testimonials',
    testimonials_title: 'Stories that began among coffee fields',
    testimonials_subtitle: 'Couples who celebrated at La Palma & El Tucán Hotel and lived an unforgettable experience.',
    testimonial_1_quote: 'It was the wedding of our dreams. The mountains, the coffee fields, the sunset... everything was absolutely magical. Our guests still talk about that night.',
    testimonial_1_label: 'Wedding for 35 guests',
    testimonial_2_quote: 'We chose La Palma & El Tucán because we wanted something different, and it exceeded all our expectations. The food, the decor, the service... every detail was perfect.',
    testimonial_2_label: 'Wedding for 30 guests',
    testimonial_3_quote: 'Our guests came from Bogotá and were blown away by the place. The cabins among coffee fields, the outdoor ceremony, the party under the stars. Unforgettable.',
    testimonial_3_label: 'Destination wedding',
    testimonial_4_quote: 'Every corner of the farm was part of our celebration. The ceremony among coffee fields, the cocktail at sunset, the dinner under the stars. A place that needs no decoration.',
    testimonial_4_label: 'Intimate wedding',
    testimonial_5_quote: 'We were looking for a venue with soul, not a generic ballroom. La Palma & El Tucán was exactly that: a place with history, nature and a team that made everything possible.',
    testimonial_5_label: 'Wedding for 25 guests',
    testimonial_6_quote: 'The cuisine was spectacular. Fresh ingredients, impeccable presentation and specialty coffee as the perfect finale. Our guests were delighted.',
    testimonial_6_label: 'Gastronomic wedding',
    testimonials_prev: 'Previous reviews',
    testimonials_next: 'Next reviews',
    testimonials_page: 'Page',
    testimonials_img_alt: 'Wedding at La Palma & El Tucán',

    // ── GALLERY ──
    gallery_eyebrow: 'Gallery',
    gallery_title: 'Real moments',
    gallery_subtitle: 'Weddings celebrated at La Palma & El Tucán.',
    gallery_prev: 'Previous photo',
    gallery_next: 'Next photo',
    gallery_go_to: 'Go to photo',
    gallery_img_1_alt: 'Ceremony exit with confetti',
    gallery_img_2_alt: 'Couple embracing at golden hour',
    gallery_img_3_alt: 'Reading of wedding vows',
    gallery_img_4_alt: 'Elegant reception table',
    gallery_img_5_alt: 'Bride laughing with joy',
    gallery_img_6_alt: 'Champagne toast during preparations',
    gallery_img_7_alt: 'Couple under floral arch',
    gallery_img_8_alt: 'Couple at the venue bar',
    gallery_img_9_alt: 'Spontaneous moment of joy',
    gallery_img_10_alt: 'Confetti celebration',
    gallery_img_11_alt: 'Bride getting ready in the cabin',
    gallery_img_12_alt: 'Exchange of rings',
    gallery_img_13_alt: 'Couple with rainbow and mountains',

    // ── SUSTAINABILITY ──
    sustain_eyebrow: 'Sustainability',
    sustain_title: 'Your celebration can also',
    sustain_title_italic: 'create positive impact',
    sustain_desc: 'By choosing La Palma & El Tucán, your wedding supports a regenerative agriculture model that cares for the soil, water and coffee-growing communities of the region.',
    sustain_li_1: '100% solar energy backup',
    sustain_li_2: 'Zero-waste program with compostable materials',
    sustain_li_3: 'Smart LED lighting throughout all facilities',
    sustain_li_4: 'Green Travel Award Winner',
    sustain_stat_1_label: 'Solar Energy',
    sustain_stat_2_label: 'Compostable Materials',
    sustain_stat_3_label: 'Coffee-Growing Families',
    sustain_stat_4_label: 'People Impacted',

    // ── LOCATION ──
    location_title: 'Strategic Location',
    location_desc: 'We are located in Zipacón, Cundinamarca. A magical retreat just 90 minutes from Bogotá, perfect for a celebration away from the noise of the city.',
    location_cta: 'View on Google Maps',
    location_cta_aria: 'View location on Google Maps',

    // ── CTA FINAL ──
    cta_badge: 'Limited Dates',
    cta_title: "Let's bring to life",
    cta_title_italic: 'your dream wedding',
    cta_subtitle: 'Every wedding at La Palma & El Tucán is a unique experience. Share your vision with us and we will design the perfect celebration.',
    cta_button: 'Get My Wedding Quote on WhatsApp',
    cta_button_aria: 'Get wedding quote on WhatsApp',
    cta_email_prefix: 'Or write to us at',
    cta_img_alt: 'Celebrate your wedding at La Palma & El Tucán',

    // ── FOOTER ──
    footer_brand_sub: 'HOTEL',
    footer_desc: 'Weddings at an internationally acclaimed coffee farm. Zipacón, Cundinamarca, 90 minutes from Bogotá.',
    footer_explore: 'Explore',
    footer_contact: 'Contact',
    footer_home: 'Home',
    footer_spaces: 'Spaces',
    footer_services: 'Services',
    footer_location: 'Location',
    footer_award: 'Green Travel Award Winner',
    footer_sustain: 'Sustainability First',
    footer_rights: 'All rights reserved.',

    // ── FLOATING BUTTON ──
    floating_aria: 'Get wedding quote on WhatsApp',
  },
} as const;

export type TranslationKey = keyof typeof translations.es;

// ─────────────────────────────────────────────
// CONTEXT
// ─────────────────────────────────────────────
interface I18nContextValue {
  lang: Lang;
  t: (key: TranslationKey) => string;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const LS_KEY = 'lpet-matrimonio-lang';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem(LS_KEY);
      if (stored === 'es' || stored === 'en') return stored;
    } catch {}
    return 'es';
  });

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next: Lang = prev === 'es' ? 'en' : 'es';
      try { localStorage.setItem(LS_KEY, next); } catch {}
      return next;
    });
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    return (translations[lang] as Record<string, string>)[key] ?? key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
