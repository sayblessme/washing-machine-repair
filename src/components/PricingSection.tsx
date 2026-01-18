"use client";

import { useState } from "react";
import { priceCategories, pricingDisclaimer, type PriceCategory, type PriceItem } from "@/data/prices";

const ITEMS_TO_SHOW = 6;

interface PricingProps {
  title?: string;
}

export function PricingSection({ title = "Цены на ремонт стиральных машин" }: PricingProps) {
  const [activeCategory, setActiveCategory] = useState(priceCategories[0].id);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [showAllItems, setShowAllItems] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const toggleShowAll = (categoryId: string) => {
    setShowAllItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const getVisibleItems = (category: PriceCategory) => {
    const showAll = showAllItems.has(category.id);
    return showAll ? category.items : category.items.slice(0, ITEMS_TO_SHOW);
  };

  return (
    <section id="prices" className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          {title}
        </h2>

        {/* Desktop: Tabs */}
        <div className="hidden md:block">
          {/* Tab buttons */}
          <div role="tablist" className="flex border-b border-gray-200 mb-6">
            {priceCategories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`panel-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
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

          {/* Tab panels */}
          {priceCategories.map((category) => (
            <div
              key={category.id}
              id={`panel-${category.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${category.id}`}
              hidden={activeCategory !== category.id}
            >
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Услуга
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Время
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Цена
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getVisibleItems(category).map((item, index) => (
                      <PriceRow key={item.service} item={item} index={index} />
                    ))}
                  </tbody>
                </table>
              </div>

              {category.items.length > ITEMS_TO_SHOW && (
                <div className="text-center mt-4">
                  <button
                    onClick={() => toggleShowAll(category.id)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    {showAllItems.has(category.id)
                      ? "Скрыть"
                      : `Показать ещё ${category.items.length - ITEMS_TO_SHOW}`}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {priceCategories.map((category) => {
            const isExpanded = expandedCategories.has(category.id);
            return (
              <div key={category.id} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`accordion-${category.id}`}
                  className="w-full px-4 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900">{category.name}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExpanded && (
                  <div id={`accordion-${category.id}`} className="px-4 pb-4">
                    <div className="space-y-3">
                      {getVisibleItems(category).map((item) => (
                        <MobilePriceCard key={item.service} item={item} />
                      ))}
                    </div>

                    {category.items.length > ITEMS_TO_SHOW && (
                      <div className="text-center mt-4">
                        <button
                          onClick={() => toggleShowAll(category.id)}
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                        >
                          {showAllItems.has(category.id)
                            ? "Скрыть"
                            : `Показать ещё ${category.items.length - ITEMS_TO_SHOW}`}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer text */}
        <p className="text-gray-500 text-sm text-center mt-6">
          Выезд + диагностика = от 1000 ₽. При ремонте — вычитается из стоимости.
        </p>
        <p className="text-gray-400 text-xs text-center mt-2">
          {pricingDisclaimer}
        </p>
      </div>
    </section>
  );
}

function PriceRow({ item, index }: { item: PriceItem; index: number }) {
  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-700">{item.service}</span>
          {item.note && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">
              {item.note}
            </span>
          )}
        </div>
      </td>
      <td className="px-6 py-4 text-center text-gray-500 text-sm">{item.time}</td>
      <td className="px-6 py-4 text-right font-semibold text-gray-900">{item.price}</td>
    </tr>
  );
}

function MobilePriceCard({ item }: { item: PriceItem }) {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-gray-900">{item.service}</span>
            {item.note && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">
                {item.note}
              </span>
            )}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {item.time}
          </div>
        </div>
        <div className="font-semibold text-gray-900 whitespace-nowrap">
          {item.price}
        </div>
      </div>
    </div>
  );
}
