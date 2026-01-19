"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBrandsWithLogos } from "@/data/brands";

export function BrandsSection() {
  const [showAll, setShowAll] = useState(false);
  const allBrands = getBrandsWithLogos();

  const hasMore = allBrands.length > 15;

  // Функция для определения видимости бренда
  const getVisibilityClass = (index: number) => {
    if (showAll) return "";

    // Мобилки (grid-cols-2): показываем первые 12
    // Планшет (sm:grid-cols-3): показываем первые 15
    // ПК (lg:grid-cols-5): показываем первые 15

    if (index >= 15) {
      // Скрыт на всех размерах экрана
      return "hidden";
    } else if (index >= 12) {
      // Скрыт на мобилках, виден на планшете и ПК
      return "hidden sm:flex";
    }
    return "";
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          Ремонт стиральных машин любых марок
        </h2>
        {/* Основные бренды с логотипами */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          {allBrands.map((brand, index) => (
            <Link
              key={brand.slug}
              href={`/${brand.slug}`}
              className={`flex items-center justify-center h-20 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-200 p-4 overflow-hidden ${getVisibilityClass(index)}`}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={Math.round(120 * (brand.scale || 1))}
                height={Math.round(48 * (brand.scale || 1))}
                className="object-contain max-h-12 pointer-events-none"
                style={brand.scale ? { transform: `scale(${brand.scale})` } : undefined}
                unoptimized
              />
            </Link>
          ))}
        </div>

        {/* Кнопка "Показать все бренды" */}
        {hasMore && !showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Показать все бренды
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Кнопка "Свернуть" */}
        {showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium transition-colors"
            >
              Свернуть
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
