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
  // Дополнительные бренды (без логотипов)
  { slug: "aeg", name: "AEG", nameLower: "AEG", logo: "" },
  { slug: "ardo", name: "ARDO", nameLower: "ARDO", logo: "" },
  { slug: "asko", name: "Asko", nameLower: "Asko", logo: "" },
  { slug: "atlant", name: "Атлант", nameLower: "Атлант", logo: "" },
  { slug: "bauknecht", name: "Bauknecht", nameLower: "Bauknecht", logo: "" },
  { slug: "blomberg", name: "Blomberg", nameLower: "Blomberg", logo: "" },
  { slug: "bompani", name: "Bompani", nameLower: "Bompani", logo: "" },
  { slug: "brandt", name: "Brandt", nameLower: "Brandt", logo: "" },
  { slug: "daewoo", name: "Daewoo", nameLower: "Daewoo", logo: "" },
  { slug: "dexp", name: "DEXP", nameLower: "DEXP", logo: "" },
  { slug: "euronova", name: "Euronova", nameLower: "Euronova", logo: "" },
  { slug: "eurosoba", name: "Eurosoba", nameLower: "Eurosoba", logo: "" },
  { slug: "gaggenau", name: "Gaggenau", nameLower: "Gaggenau", logo: "" },
  { slug: "gorenje", name: "Gorenje", nameLower: "Gorenje", logo: "" },
  { slug: "haier", name: "Haier", nameLower: "Haier", logo: "" },
  { slug: "hoover", name: "Hoover", nameLower: "Hoover", logo: "" },
  { slug: "hotpoint-ariston", name: "Hotpoint-Ariston", nameLower: "Hotpoint-Ariston", logo: "" },
  { slug: "hyundai", name: "Hyundai", nameLower: "Hyundai", logo: "" },
  { slug: "ignis", name: "Ignis", nameLower: "Ignis", logo: "" },
  { slug: "ikea", name: "IKEA", nameLower: "IKEA", logo: "" },
  { slug: "kaiser", name: "Kaiser", nameLower: "Kaiser", logo: "" },
  { slug: "korting", name: "Korting", nameLower: "Korting", logo: "" },
  { slug: "kraft", name: "Kraft", nameLower: "Kraft", logo: "" },
  { slug: "kuppersberg", name: "Kuppersberg", nameLower: "Kuppersberg", logo: "" },
  { slug: "kuppersbusch", name: "Kuppersbusch", nameLower: "Kuppersbusch", logo: "" },
  { slug: "leran", name: "Leran", nameLower: "Leran", logo: "" },
  { slug: "midea", name: "Midea", nameLower: "Midea", logo: "" },
  { slug: "miele", name: "Miele", nameLower: "Miele", logo: "" },
  { slug: "neff", name: "Neff", nameLower: "Neff", logo: "" },
  { slug: "panasonic", name: "Panasonic", nameLower: "Panasonic", logo: "" },
  { slug: "philips", name: "Philips", nameLower: "Philips", logo: "" },
  { slug: "reeson", name: "Reeson", nameLower: "Reeson", logo: "" },
  { slug: "rosenlew", name: "Rosenlew", nameLower: "Rosenlew", logo: "" },
  { slug: "schaub-lorenz", name: "Schaub Lorenz", nameLower: "Schaub Lorenz", logo: "" },
  { slug: "siemens", name: "Siemens", nameLower: "Siemens", logo: "" },
  { slug: "siltal", name: "Siltal", nameLower: "Siltal", logo: "" },
  { slug: "smeg", name: "Smeg", nameLower: "Smeg", logo: "" },
  { slug: "upo", name: "UPO", nameLower: "UPO", logo: "" },
  { slug: "vestel", name: "Vestel", nameLower: "Vestel", logo: "" },
  { slug: "vestfrost", name: "Vestfrost", nameLower: "Vestfrost", logo: "" },
  { slug: "vyatka", name: "Вятка", nameLower: "Вятка", logo: "" },
  { slug: "weissgauff", name: "Weissgauff", nameLower: "Weissgauff", logo: "" },
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
