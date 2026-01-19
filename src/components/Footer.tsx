import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">Ремонт стиральных машин</h3>
            <p className="text-sm text-gray-400 mb-4">
              Частный мастер {siteConfig.masterName}. Ремонт стиральных машин на дому в {siteConfig.city}.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-white font-bold mb-4">Ремонтируем бренды</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
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
                <li key={brand.slug}>
                  <Link
                    href={`/${brand.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/brands" className="text-blue-400 hover:text-blue-300 mt-3 block text-sm">
              Все 51 бренд →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${siteConfig.phoneClean}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href={siteConfig.profiUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Profi.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Ремонт стиральных машин в {siteConfig.city}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
