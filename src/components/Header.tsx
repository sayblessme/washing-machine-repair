"use client";

import Link from "next/link";
import { useState } from "react";
import { brands } from "@/data/brands";
import { siteConfig } from "@/data/site";

export function Header() {
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" strokeWidth="2" />
              <path strokeWidth="2" d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            </svg>
            <span className="hidden sm:inline">Ремонт стиральных машин</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Главная
            </Link>

            {/* Brands Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsBrandsOpen(true)}
              onMouseLeave={() => setIsBrandsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
                aria-expanded={isBrandsOpen}
                aria-haspopup="true"
              >
                Бренды
                <svg
                  className={`w-4 h-4 transition-transform ${isBrandsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isBrandsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="w-[700px] bg-white rounded-lg shadow-lg border border-gray-100 p-4">
                    <div className="grid grid-cols-6 gap-x-4 gap-y-1 text-sm">
                      {brands.map((brand) => (
                        <Link
                          key={brand.slug}
                          href={`/${brand.slug}`}
                          className="text-gray-600 hover:text-gray-900 transition-colors py-1 truncate"
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#prices" className="text-gray-600 hover:text-gray-900 transition-colors">
              Цены
            </Link>

            <Link href="/#reviews" className="text-gray-600 hover:text-gray-900 transition-colors">
              Отзывы
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              {siteConfig.phone}
            </a>
            <a
              href="#consultation"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Оставить заявку
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Главная
              </Link>

              <div className="px-4 py-2">
                <div className="text-sm font-medium text-gray-500 mb-2">Бренды</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  {[
                    { slug: "samsung", name: "Samsung" },
                    { slug: "lg", name: "LG" },
                    { slug: "bosch", name: "Bosch" },
                    { slug: "siemens", name: "Siemens" },
                    { slug: "electrolux", name: "Electrolux" },
                    { slug: "indesit", name: "Indesit" },
                    { slug: "ariston", name: "Ariston" },
                    { slug: "beko", name: "Beko" },
                    { slug: "whirlpool", name: "Whirlpool" },
                    { slug: "candy", name: "Candy" },
                    { slug: "zanussi", name: "Zanussi" },
                    { slug: "haier", name: "Haier" },
                  ].map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`/${brand.slug}`}
                      className="py-1 text-gray-600 hover:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/brands"
                  className="text-blue-600 hover:text-blue-700 mt-2 block text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Все 51 бренд →
                </Link>
              </div>

              <Link
                href="/#prices"
                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Цены
              </Link>

              <Link
                href="/#reviews"
                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Отзывы
              </Link>

              <div className="px-4 pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="text-center py-2 border border-gray-200 rounded-lg text-gray-600"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href="#consultation"
                  className="text-center py-2 bg-blue-600 text-white rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Оставить заявку
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
