"use client";

import { useState } from "react";
import { priceCategories, pricingDisclaimer, type ProblemCard as ProblemCardType } from "@/data/prices";

interface PricingProps {
  title?: string;
}

export function PricingSection({ title = "Цены на ремонт стиральных машин" }: PricingProps) {
  const [activeCategory, setActiveCategory] = useState(priceCategories[0].id);

  const currentCategory = priceCategories.find((cat) => cat.id === activeCategory) || priceCategories[0];

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
            <ProblemCard key={card.id} card={card} />
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
    </section>
  );
}

function ProblemCard({ card }: { card: ProblemCardType }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative">
      {/* Card */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-2xl border-2 border-gray-100 p-4 sm:p-6 text-center
                   hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer h-full
                   flex flex-col justify-between min-h-[180px] sm:min-h-[220px]"
      >
        <div>
          <div className="text-3xl sm:text-4xl mb-3">{card.icon}</div>
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
        </div>
      )}
    </div>
  );
}
