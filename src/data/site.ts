export const siteConfig = {
  name: "Ремонт стиральных машин",
  city: "Москве",
  cityGenitive: "Москвы",
  masterName: "Сергей Черковский",
  yearsExperience: "10",
  phone: "+7 (999) 123-45-67",
  phoneClean: "+79991234567",
  whatsappUrl: "https://wa.me/79991234567",
  telegramUrl: "https://t.me/master_repair",
  profiUrl: "https://profi.ru/profile/CherkovskiySV/",
  profiRating: "5.0",
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
