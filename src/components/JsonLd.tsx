import { siteConfig } from "@/data/site";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Ремонт стиральных машин - ${siteConfig.masterName}`,
    description: `Ремонт стиральных машин на дому в ${siteConfig.city}. Частный мастер с гарантией.`,
    url: siteConfig.baseUrl,
    telephone: siteConfig.phone,
    priceRange: "₽₽",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city.replace("е", "а"),
      addressCountry: "RU",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
    sameAs: [siteConfig.profiUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ServiceJsonLdProps {
  brandName: string;
}

export function ServiceJsonLd({ brandName }: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Ремонт стиральных машин ${brandName}`,
    description: `Ремонт стиральных машин ${brandName} на дому в ${siteConfig.city}. Диагностика, замена запчастей, гарантия.`,
    provider: {
      "@type": "LocalBusiness",
      name: `Ремонт стиральных машин - ${siteConfig.masterName}`,
      telephone: siteConfig.phone,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city.replace("е", "а"),
    },
    serviceType: "Ремонт бытовой техники",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
