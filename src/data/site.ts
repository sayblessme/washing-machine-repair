export const siteConfig = {
  name: "Ремонт стиральных машин",
  city: "Санкт-Петербурге",
  cityGenitive: "Санкт-Петербурга",
  masterName: "Сергей",
  yearsExperience: "10",
  phone: "+7 (951) 665-86-28",
  phoneClean: "+79516658628",
  telegramUrl: "https://t.me/+79516658628",
  profiUrl: "https://profi.ru/profile/CherkovskiySV/",
  profiRating: "4,96",
  baseUrl: "https://remont-stiralok.ru",
  prices: {
    visit: "от 1000 ₽",
    diagnostics: "от 1000 ₽",
    noWaterDrain: "от 1500 ₽",
    noSpin: "от 1700 ₽",
    noHeat: "от 1800 ₽",
    leak: "от 1600 ₽",
    noPower: "от 1500 ₽",
    heaterReplacement: "от 2000 ₽",
    bearingReplacement: "от 3500 ₽",
    pumpReplacement: "от 2300 ₽",
  },
} as const;

export type SiteConfig = typeof siteConfig;
