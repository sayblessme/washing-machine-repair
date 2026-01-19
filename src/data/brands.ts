export interface Brand {
  slug: string;
  name: string;
  nameLower: string;
  logo: string;
  scale?: number; // Масштаб логотипа (1 = 100%)
}

const basePath = "/washing-master";

export const brands: Brand[] = [
  // Основные бренды (с логотипами)
  { slug: "bosch", name: "Bosch", nameLower: "Bosch", logo: `${basePath}/images/brands/bosch.png` },
  { slug: "lg", name: "LG", nameLower: "LG", logo: `${basePath}/images/brands/LG_logo_(2014).svg.png` },
  { slug: "samsung", name: "Samsung", nameLower: "Samsung", logo: `${basePath}/images/brands/samsung.png`, scale: 1.4 },
  { slug: "indesit", name: "Indesit", nameLower: "Indesit", logo: `${basePath}/images/brands/Indesit_Company_logo.svg.png` },
  { slug: "ariston", name: "Ariston", nameLower: "Ariston", logo: `${basePath}/images/brands/ariston.png`, scale: 1.4 },
  { slug: "electrolux", name: "Electrolux", nameLower: "Electrolux", logo: `${basePath}/images/brands/Electrolux_2015.png` },
  { slug: "beko", name: "Beko", nameLower: "Beko", logo: `${basePath}/images/brands/New_Beko_logo.svg.png` },
  { slug: "whirlpool", name: "Whirlpool", nameLower: "Whirlpool", logo: `${basePath}/images/brands/logo_whirpool.png` },
  { slug: "candy", name: "Candy", nameLower: "Candy", logo: `${basePath}/images/brands/Candy-Logo.png` },
  // Дополнительные бренды (с логотипами)
  { slug: "aeg", name: "AEG", nameLower: "AEG", logo: `${basePath}/images/brands/AEG.png` },
  { slug: "ardo", name: "ARDO", nameLower: "ARDO", logo: `${basePath}/images/brands/ardo.png` },
  { slug: "asko", name: "Asko", nameLower: "Asko", logo: `${basePath}/images/brands/Asko-logo.png` },
  { slug: "brandt", name: "Brandt", nameLower: "Brandt", logo: `${basePath}/images/brands/Logo_Brandt_.png` },
  { slug: "bompani", name: "Bompani", nameLower: "Bompani", logo: `${basePath}/images/brands/2606-bompani_logo.webp`, scale: 4.8 },
  { slug: "eurosoba", name: "Eurosoba", nameLower: "Eurosoba", logo: `${basePath}/images/brands/eurosoba.png` },
  { slug: "haier", name: "Haier", nameLower: "Haier", logo: `${basePath}/images/brands/Haier_logo.png` },
  { slug: "hoover", name: "Hoover", nameLower: "Hoover", logo: `${basePath}/images/brands/Hoover-Logo.svg.png` },
  { slug: "hyundai", name: "Hyundai", nameLower: "Hyundai", logo: `${basePath}/images/brands/Hyundai_Motor_Company_logo.svg.png` },
  { slug: "kaiser", name: "Kaiser", nameLower: "Kaiser", logo: `${basePath}/images/brands/logo-kaiser.png` },
  { slug: "leran", name: "Leran", nameLower: "Leran", logo: `${basePath}/images/brands/leran.webp`, scale: 1.6 },
  { slug: "panasonic", name: "Panasonic", nameLower: "Panasonic", logo: `${basePath}/images/brands/Panasonic_logo.png` },
  { slug: "philips", name: "Philips", nameLower: "Philips", logo: `${basePath}/images/brands/Philips_logo_new.svg.png` },
  { slug: "siemens", name: "Siemens", nameLower: "Siemens", logo: `${basePath}/images/brands/Siemens_AG_logo.svg.png` },
  { slug: "siltal", name: "Siltal", nameLower: "Siltal", logo: `${basePath}/images/brands/siltal-logo-png-transparent.png`, scale: 1.6 },
  { slug: "weissgauff", name: "Weissgauff", nameLower: "Weissgauff", logo: `${basePath}/images/brands/weissgauff.png` },
  // Бренды без логотипов
  { slug: "atlant", name: "Атлант", nameLower: "Атлант", logo: "" },
  { slug: "bauknecht", name: "Bauknecht", nameLower: "Bauknecht", logo: "" },
  { slug: "blomberg", name: "Blomberg", nameLower: "Blomberg", logo: "" },
  { slug: "daewoo", name: "Daewoo", nameLower: "Daewoo", logo: "" },
  { slug: "dexp", name: "DEXP", nameLower: "DEXP", logo: "" },
  { slug: "gaggenau", name: "Gaggenau", nameLower: "Gaggenau", logo: "" },
  { slug: "gorenje", name: "Gorenje", nameLower: "Gorenje", logo: "" },
  { slug: "ignis", name: "Ignis", nameLower: "Ignis", logo: "" },
  { slug: "ikea", name: "IKEA", nameLower: "IKEA", logo: "" },
  { slug: "korting", name: "Korting", nameLower: "Korting", logo: "" },
  { slug: "kraft", name: "Kraft", nameLower: "Kraft", logo: "" },
  { slug: "kuppersberg", name: "Kuppersberg", nameLower: "Kuppersberg", logo: "" },
  { slug: "kuppersbusch", name: "Kuppersbusch", nameLower: "Kuppersbusch", logo: "" },
  { slug: "midea", name: "Midea", nameLower: "Midea", logo: "" },
  { slug: "miele", name: "Miele", nameLower: "Miele", logo: "" },
  { slug: "neff", name: "Neff", nameLower: "Neff", logo: "" },
  { slug: "reeson", name: "Reeson", nameLower: "Reeson", logo: "" },
  { slug: "rosenlew", name: "Rosenlew", nameLower: "Rosenlew", logo: "" },
  { slug: "schaub-lorenz", name: "Schaub Lorenz", nameLower: "Schaub Lorenz", logo: "" },
  { slug: "smeg", name: "Smeg", nameLower: "Smeg", logo: "" },
  { slug: "upo", name: "UPO", nameLower: "UPO", logo: "" },
  { slug: "vestel", name: "Vestel", nameLower: "Vestel", logo: "" },
  { slug: "vestfrost", name: "Vestfrost", nameLower: "Vestfrost", logo: "" },
  { slug: "vyatka", name: "Вятка", nameLower: "Вятка", logo: "" },
  { slug: "zanussi", name: "Zanussi", nameLower: "Zanussi", logo: "" },
  { slug: "zerowatt", name: "Zerowatt", nameLower: "Zerowatt", logo: "" },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

export function getAllBrandSlugs(): string[] {
  return brands.map((brand) => brand.slug);
}

// Бренды с логотипами (для секции с картинками)
export function getBrandsWithLogos(): Brand[] {
  return brands.filter((brand) => brand.logo !== "");
}

// Все бренды (для списка текстом)
export function getAllBrands(): Brand[] {
  return brands;
}
