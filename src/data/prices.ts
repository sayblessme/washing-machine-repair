export interface PriceItem {
  service: string;
  price: string;
  time: string;
  note?: string;
}

export interface PriceCategory {
  id: string;
  name: string;
  items: PriceItem[];
}

export const priceCategories: PriceCategory[] = [
  {
    id: "simple",
    name: "Простые неисправности",
    items: [
      { service: "Не сливает воду", price: "от 1500 ₽", time: "30-60 мин" },
      { service: "Не отжимает", price: "от 1700 ₽", time: "40-90 мин" },
      { service: "Не набирает воду", price: "от 1400 ₽", time: "20-40 мин" },
      { service: "Не закрывается люк", price: "от 1200 ₽", time: "15-30 мин" },
      { service: "Шумит при работе", price: "от 1600 ₽", time: "30-60 мин" },
      { service: "Ошибка на дисплее", price: "от 900 ₽", time: "15-30 мин", note: "Диагностика" },
      { service: "Не включается", price: "от 1500 ₽", time: "20-40 мин" },
      { service: "Останавливается во время стирки", price: "от 1300 ₽", time: "30-50 мин" },
    ],
  },
  {
    id: "parts",
    name: "Замена деталей",
    items: [
      { service: "Замена ТЭНа", price: "от 2000 ₽", time: "40-60 мин", note: "Гарантия 12 мес" },
      { service: "Замена насоса (помпы)", price: "от 2300 ₽", time: "30-50 мин" },
      { service: "Замена манжеты люка", price: "от 2500 ₽", time: "60-90 мин" },
      { service: "Замена ремня привода", price: "от 1500 ₽", time: "20-40 мин" },
      { service: "Замена УБЛ (замок люка)", price: "от 1800 ₽", time: "20-30 мин" },
      { service: "Замена амортизаторов", price: "от 2200 ₽", time: "40-60 мин" },
      { service: "Замена сливного шланга", price: "от 1200 ₽", time: "15-30 мин" },
    ],
  },
  {
    id: "complex",
    name: "Сложный ремонт",
    items: [
      { service: "Замена подшипников", price: "от 3500 ₽", time: "2-3 часа", note: "Срочно +30%" },
      { service: "Ремонт модуля управления", price: "от 3000 ₽", time: "1-2 часа" },
      { service: "Замена бака", price: "от 4500 ₽", time: "2-4 часа" },
      { service: "Не греет воду", price: "от 1800 ₽", time: "40-60 мин" },
      { service: "Течёт снизу", price: "от 1600 ₽", time: "30-90 мин", note: "Зависит от места" },
      { service: "Замена двигателя", price: "от 4000 ₽", time: "1.5-2 часа" },
    ],
  },
];

export const pricingDisclaimer = "Точная стоимость зависит от модели и результатов диагностики.";
