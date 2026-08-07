import { site, schedule, faqs } from "@/lib/data";

// Mapeo de los códigos de día (es) a los nombres de schema.org (en)
const DAY_TO_SCHEMA: Record<string, string> = {
  Lun: "Monday",
  Mar: "Tuesday",
  Mié: "Wednesday",
  Jue: "Thursday",
  Vie: "Friday",
  Sáb: "Saturday",
};

function openingHours() {
  return schedule.map((s) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: DAY_TO_SCHEMA[s.day],
    opens: s.start,
    closes: s.end,
  }));
}

/**
 * Datos estructurados (JSON-LD) para SEO local.
 * - LocalBusiness/HealthClub: ayuda a Google a entender que es un estudio de
 *   yoga en Bariloche (NAP, geo, horarios, redes) → rich results y mapa.
 * - WebSite: nombre del sitio + búsqueda.
 */
export default function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthClub", "SportsActivityLocation"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: ["Ayur Yoga Vital", "Ayur Yoga Vital Bariloche", "Yoga Bariloche"],
    description:
      "Estudio de Ayur Yoga Vital en San Carlos de Bariloche con Rashi. Yoga terapéutico que une el yoga clásico con el Ayurveda, meditación con gongs, talleres y formación profesional.",
    url: site.url,
    image: `${site.url}/og.jpg`,
    logo: `${site.url}/og.jpg`,
    telephone: site.phoneE164,
    email: site.email,
    foundingDate: String(site.founded),
    priceRange: "$$",
    currenciesAccepted: "ARS",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: {
      "@type": "City",
      name: "San Carlos de Bariloche",
    },
    knowsAbout: [
      "Yoga",
      "Yoga terapéutico",
      "Ayur Yoga Vital",
      "Ayurveda",
      "Meditación",
      "Baño de gongs",
      "Pranayama",
    ],
    sameAs: [site.instagramUrl, site.facebookUrl],
    openingHoursSpecification: openingHours(),
    founder: {
      "@type": "Person",
      name: site.teacherFullName,
      alternateName: site.teacher,
      jobTitle: "Instructor de Ayur Yoga Vital",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "es-AR",
    publisher: { "@id": `${site.url}/#business` },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
