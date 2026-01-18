import Link from "next/link";
import { brands } from "@/data/brands";
import { siteConfig } from "@/data/site";

// Топ-12 брендов (как в футере) — они идут первыми
const topBrandSlugs = [
  "samsung", "lg", "bosch", "siemens", "electrolux", "indesit",
  "ariston", "beko", "whirlpool", "candy", "zanussi", "haier"
];

// Сортируем: сначала топ-12, потом остальные в алфавитном порядке
const sortedBrands = [
  ...topBrandSlugs.map(slug => brands.find(b => b.slug === slug)!),
  ...brands.filter(b => !topBrandSlugs.includes(b.slug)).sort((a, b) => a.name.localeCompare(b.name))
];

export const metadata = {
  title: `Все бренды стиральных машин | Ремонт в ${siteConfig.city}`,
  description: `Ремонт стиральных машин всех марок: ${brands.slice(0, 10).map(b => b.name).join(", ")} и другие. Частный мастер ${siteConfig.masterName} в ${siteConfig.city}.`,
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Главная
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Все бренды</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ремонт стиральных машин всех марок
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Ремонтирую стиральные машины {brands.length} брендов. Опыт работы с любыми моделями — от бюджетных до премиум-класса.
          </p>
        </div>
      </section>

      {/* All brands grid */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {sortedBrands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/${brand.slug}`}
                className="bg-gray-50 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-200 text-center"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Не нашли свой бренд?
          </h2>
          <p className="text-blue-100 mb-6">
            Позвоните — отремонтирую стиральную машину любой марки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
