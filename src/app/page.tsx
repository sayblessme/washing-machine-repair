import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { brands } from "@/data/brands";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт стиральных машин на дому в {siteConfig.city}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Частный мастер &bull; Выезд в день обращения &bull; Реальные отзывы на Profi.ru
            </p>

            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-10 text-gray-700">
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Бесплатная консультация по фото / видео / телефону
              </li>
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Выезд мастера {siteConfig.prices.visit}
              </li>
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Гарантия до 12 месяцев
              </li>
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Работаю без посредников
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center" id="contact">
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Вызвать мастера
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Получить консультацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
            Реальные отзывы клиентов
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-4">
            Я зарегистрирован на сервисе Profi.ru. Все отзывы настоящие и оставлены реальными клиентами после ремонта стиральных машин.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-medium">Рейтинг {siteConfig.profiRating} на Profi.ru</span>
          </div>
          <div className="text-center mb-8">
            <a
              href={siteConfig.profiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Смотреть все отзывы на Profi.ru
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="aspect-[3/4] relative bg-gray-200">
                  <Image
                    src={`/placeholders/review-${num}.svg`}
                    alt={`Отзыв с Profi.ru ${num}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    unoptimized
                  />
                </div>
                <p className="text-xs text-gray-500 text-center py-2">Отзыв с Profi.ru</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Частный мастер по ремонту стиральных машин
              </h2>
              <p className="text-gray-600 mb-6">
                Меня зовут {siteConfig.masterName}. Я занимаюсь ремонтом стиральных машин на дому более {siteConfig.yearsExperience} лет. Работаю напрямую с клиентами, без диспетчеров и сервисных центров, поэтому предлагаю честные цены и несу личную ответственность за результат.
              </p>
              <ul className="space-y-3">
                {[
                  "Ремонт в день обращения",
                  "Диагностика на месте",
                  "Запчасти в наличии",
                  "Гарантия на работу"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/placeholders/master.svg"
                alt={`Мастер ${siteConfig.masterName}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Бесплатная консультация мастера
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              По фото
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              По видео
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              По телефону
            </div>
          </div>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Уже на этапе консультации подскажу возможную причину поломки и ориентировочную стоимость ремонта.
          </p>
          <p className="text-xl font-semibold mb-6">
            Выезд мастера — {siteConfig.prices.visit}
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Получить консультацию
          </a>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Цены на ремонт стиральных машин
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    { service: "Не сливает воду", price: siteConfig.prices.noWaterDrain },
                    { service: "Не отжимает", price: siteConfig.prices.noSpin },
                    { service: "Не греет воду", price: siteConfig.prices.noHeat },
                    { service: "Течёт", price: siteConfig.prices.leak },
                    { service: "Не включается", price: siteConfig.prices.noPower },
                    { service: "Замена ТЭНа", price: siteConfig.prices.heaterReplacement },
                    { service: "Замена подшипников", price: siteConfig.prices.bearingReplacement },
                  ].map((item, index) => (
                    <tr key={item.service} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 text-gray-700">{item.service}</td>
                      <td className="px-6 py-4 text-right font-semibold text-gray-900">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm text-center mt-4">
              Точная стоимость определяется после диагностики.
            </p>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
            Примеры выполненных работ
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600 mb-8">
            <li>замена подшипников</li>
            <li>устранение протечек</li>
            <li>замена насосов</li>
            <li>ремонт электронных модулей</li>
          </ul>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholders/work-${num}.svg`}
                  alt={`Пример работы ${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Ремонт стиральных машин любых марок
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/${brand.slug}`}
                className="flex items-center justify-center h-20 bg-gray-50 rounded-lg text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-100 hover:border-blue-200"
              >
                {brand.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            Каждая ссылка ведёт на отдельную бренд-страницу
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Нужен ремонт стиральной машины?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
            <div>Выезд {siteConfig.prices.visit}</div>
            <div>Гарантия до 12 месяцев</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Вызвать мастера
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
