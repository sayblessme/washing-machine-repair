"use client";

import { useState, type ReactNode } from "react";
import { priceCategories, pricingDisclaimer, type ProblemCard as ProblemCardType } from "@/data/prices";
import { siteConfig } from "@/data/site";

interface PricingProps {
  title?: string;
}

// SVG иконки для карточек
function ProblemIcon({ id }: { id: string }) {
  const iconClass = "w-10 h-10 sm:w-12 sm:h-12 text-blue-600";

  const icons: Record<string, ReactNode> = {
    // Неисправности
    door: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="11" r="5" />
        <circle cx="12" cy="11" r="2" />
        <rect x="17" y="10" width="1.5" height="3" rx="0.5" />
      </svg>
    ),
    "no-drain": (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2C12 2 6 10 6 14a6 6 0 1012 0c0-4-6-12-6-12z" />
        <path d="M4 4l16 16" strokeWidth="2" />
      </svg>
    ),
    "no-spin": (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 019 9" strokeLinecap="round" />
        <path d="M16 12l-4-4v8l4-4z" fill="currentColor" />
      </svg>
    ),
    "no-heat": (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22c-3 0-6-2-6-6 0-2.5 1.5-4.5 3-6.5S12 6 12 2c0 4 1.5 5.5 3 7.5s3 4 3 6.5c0 4-3 6-6 6z" />
        <path d="M12 22v-6" />
        <path d="M9 13l3 3 3-3" />
      </svg>
    ),
    leak: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M7 16a4 4 0 01-4-4c0-2 2-6 4-6s4 4 4 6a4 4 0 01-4 4z" />
        <path d="M17 22a4 4 0 01-4-4c0-2 2-6 4-6s4 4 4 6a4 4 0 01-4 4z" />
        <path d="M12 10a3 3 0 01-3-3c0-1.5 1.5-4.5 3-4.5s3 3 3 4.5a3 3 0 01-3 3z" />
      </svg>
    ),
    noise: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" fillOpacity="0.2" />
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.5 8.5a5 5 0 010 7" />
        <path d="M18.5 5.5a9 9 0 010 13" />
      </svg>
    ),
    // Замена деталей
    heating: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" fillOpacity="0.2" />
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    pump: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5V2M12 22v-3M5 12H2M22 12h-3M7.05 7.05L4.93 4.93M19.07 19.07l-2.12-2.12M7.05 16.95l-2.12 2.12M19.07 4.93l-2.12 2.12" />
      </svg>
    ),
    bearings: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    module: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="8" y="8" width="8" height="8" rx="1" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    motor: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
        <path d="M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M6.34 17.66l1.42-1.42M16.24 7.76l1.42-1.42" />
      </svg>
    ),
    "other-parts": (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    // Услуги
    diagnostics: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    installation: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 12l9-9 9 9" />
        <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
        <rect x="9" y="14" width="6" height="7" />
      </svg>
    ),
    maintenance: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" fill="currentColor" fillOpacity="0.2" />
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    ),
    urgent: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[id] || <div className={iconClass} />;
}

// Компонент попапа с формой
function ContactPopup({
  isOpen,
  onClose,
  problemTitle
}: {
  isOpen: boolean;
  onClose: () => void;
  problemTitle: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brand: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симуляция отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Здесь можно добавить реальную отправку данных
    console.log("Form submitted:", { ...formData, problem: problemTitle });

    setIsSubmitting(false);
    setSubmitted(true);

    // Закрыть попап через 2 секунды после отправки
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", brand: "", address: "" });
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Закрыть"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Заявка отправлена!</h3>
            <p className="text-gray-600">Мастер свяжется с вами в ближайшее время</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Оставить заявку</h3>
            <p className="text-gray-600 text-sm mb-6">Мастер перезвонит в течение 15 минут</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Проблема (автозаполнение) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Проблема</label>
                <input
                  type="text"
                  value={problemTitle}
                  readOnly
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-700"
                />
              </div>

              {/* Имя */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Как к вам обращаться?"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Телефон */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Марка */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Марка стиральной машины</label>
                <input
                  type="text"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  placeholder="Например, Samsung, LG, Bosch..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Адрес */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Адрес или ближайшее метро</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Улица, дом или станция метро"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </button>

              {/* Контактные данные */}
              <p className="text-center text-sm text-gray-500">
                или позвоните: <a href={`tel:${siteConfig.phoneClean}`} className="text-blue-600 font-medium hover:underline">{siteConfig.phone}</a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export function PricingSection({ title = "Цены на ремонт стиральных машин" }: PricingProps) {
  const [activeCategory, setActiveCategory] = useState(priceCategories[0].id);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState("");

  const currentCategory = priceCategories.find((cat) => cat.id === activeCategory) || priceCategories[0];

  const handleCardClick = (problemTitle: string) => {
    setSelectedProblem(problemTitle);
    setPopupOpen(true);
  };

  return (
    <section id="prices" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          {title}
        </h2>

        {/* Category Tabs - stretched full width */}
        <div role="tablist" className="flex border-b border-gray-200 mb-8">
          {priceCategories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`panel-${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors relative text-center ${
                activeCategory === category.id
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          id={`panel-${currentCategory.id}`}
          role="tabpanel"
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {currentCategory.cards.map((card) => (
            <ProblemCard key={card.id} card={card} onCardClick={handleCardClick} />
          ))}
        </div>

        {/* Footer text */}
        <p className="text-gray-500 text-sm text-center mt-8">
          Выезд + диагностика = от 1000 ₽. При ремонте — вычитается из стоимости.
        </p>
        <p className="text-gray-400 text-xs text-center mt-2">
          {pricingDisclaimer}
        </p>
      </div>

      {/* Попап с формой */}
      <ContactPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        problemTitle={selectedProblem}
      />
    </section>
  );
}

function ProblemCard({ card, onCardClick }: { card: ProblemCardType; onCardClick: (title: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // На мобильных устройствах сначала раскрываем подробности
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    } else {
      // На десктопе сразу открываем попап
      onCardClick(card.title);
    }
  };

  const handleOrderClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCardClick(card.title);
  };

  return (
    <div className="group relative">
      {/* Card */}
      <div
        onClick={handleClick}
        className="bg-white rounded-2xl border-2 border-gray-100 p-4 sm:p-6 text-center
                   hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer h-full
                   flex flex-col justify-between min-h-[180px] sm:min-h-[220px]"
      >
        <div>
          <div className="flex justify-center mb-3">
            <ProblemIcon id={card.id} />
          </div>
          <h3 className="font-medium text-gray-900 text-sm sm:text-base mb-2 leading-tight">
            {card.title}
          </h3>
        </div>
        <div>
          <p className="text-blue-600 font-bold text-lg sm:text-xl mb-3">{card.price}</p>
          <span className="inline-flex items-center text-xs text-gray-400">
            Подробнее
            <svg
              className={`w-3 h-3 ml-1 transition-transform ${isOpen ? "rotate-180" : ""} md:hidden`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Desktop: Hover dropdown */}
      <div className="absolute left-full top-0 ml-3 hidden md:group-hover:block z-50">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 min-w-[280px]">
          <h4 className="font-semibold text-gray-900 mb-3 text-sm">{card.title}</h4>
          <div className="space-y-0">
            {card.subItems.map((item, idx) => (
              <div
                key={item.name}
                className={`flex justify-between items-center py-2.5 ${
                  idx !== card.subItems.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span className="text-gray-600 text-sm pr-4">{item.name}</span>
                <span className="font-semibold text-gray-900 text-sm whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
          {/* Кнопка заказать в dropdown */}
          <button
            onClick={handleOrderClick}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
          >
            Оставить заявку
          </button>
        </div>
      </div>

      {/* Mobile: Expanded list below card */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-gray-50 rounded-xl p-3">
          {card.subItems.map((item, idx) => (
            <div
              key={item.name}
              className={`flex justify-between items-center py-2 ${
                idx !== card.subItems.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <span className="text-gray-600 text-sm pr-2">{item.name}</span>
              <span className="font-medium text-gray-900 text-sm whitespace-nowrap">{item.price}</span>
            </div>
          ))}
          {/* Кнопка заказать на мобильных */}
          <button
            onClick={handleOrderClick}
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors text-sm"
          >
            Оставить заявку
          </button>
        </div>
      )}
    </div>
  );
}
