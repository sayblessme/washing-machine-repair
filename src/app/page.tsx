import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { brands, getBrandsWithLogos } from "@/data/brands";
import { reviewsData } from "@/data/reviews";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { ReviewCard } from "@/components/ReviewCard";
import { PricingSection } from "@/components/PricingSection";
import { ConsultationForm } from "@/components/ConsultationForm";

const basePath = "/washing-master";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт стиральной машины в СПб на дому — приеду в течение 2 часов
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Оставьте заявку — перезвоню в течение 5 минут
            </p>

            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-10 text-gray-700">
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Назову точную цену ДО начала работы
              </li>
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Гарантия 12 месяцев — сломается, починю бесплатно
              </li>
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Оплата только после проверки работы
              </li>
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Рейтинг {reviewsData.rating} на Profi.ru
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
                Узнать стоимость ремонта
              </a>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                Оставить заявку
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
            <span className="text-gray-700 font-medium">Рейтинг {reviewsData.rating} на Profi.ru ({reviewsData.totalCount} отзывов)</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {reviewsData.reviews.slice(0, 8).map((review) => (
              <ReviewCard key={review.id} review={review} />
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
                Ремонт без переплаты
              </h2>
              <p className="text-gray-600 mb-6">
                Меня зовут {siteConfig.masterName}. За {siteConfig.yearsExperience} лет починил более 3000 стиральных машин. Работаю сам — без диспетчеров, накруток и "менеджеров". Вы платите только за ремонт, а не за офис и рекламу сервисного центра.
              </p>
              <ul className="space-y-3">
                {[
                  "Честная цена — называю сумму до начала работы, не меняю после",
                  "Личный номер — звоните напрямую, без автоответчиков",
                  "Более 130 отзывов на Profi.ru — проверьте сами"
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
                src={`${basePath}/images/master.webp`}
                alt={`Мастер ${siteConfig.masterName}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Узнайте стоимость ремонта за 5 минут
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
            <p className="text-blue-100 max-w-xl mx-auto">
              Уже на этапе консультации подскажу возможную причину поломки и ориентировочную стоимость ремонта.
            </p>
          </div>

          {/* Consultation Form */}
          <div className="max-w-md mx-auto bg-white rounded-2xl p-6 sm:p-8">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <PricingSection />

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
            {/* Большое фото слева */}
            <div className="md:col-span-2 md:row-span-2 relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={`${basePath}/images/works/work-1.webp`}
                alt="Пример работы 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 50vw"
                unoptimized
              />
            </div>
            {/* Маленькие справа сверху */}
            <div className="relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={`${basePath}/images/works/work-2.webp`}
                alt="Пример работы 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            </div>
            <div className="relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={`${basePath}/images/works/work-3.webp`}
                alt="Пример работы 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            </div>
            {/* Маленькие справа снизу */}
            <div className="relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={`${basePath}/images/works/work-4.webp`}
                alt="Пример работы 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            </div>
            <div className="relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={`${basePath}/images/works/work-5.webp`}
                alt="Пример работы 5"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            </div>
            {/* Нижний ряд */}
            <div className="relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={`${basePath}/images/works/work-6.webp`}
                alt="Пример работы 6"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            </div>
            <div className="relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={`${basePath}/images/works/work-7.webp`}
                alt="Пример работы 7"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            </div>
            <div className="md:col-span-2 relative bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={`${basePath}/images/works/work-8.webp`}
                alt="Пример работы 8"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Ремонт стиральных машин любых марок
          </h2>
          {/* Основные бренды с логотипами */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {getBrandsWithLogos().map((brand) => (
              <Link
                key={brand.slug}
                href={`/${brand.slug}`}
                className="flex items-center justify-center h-20 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-200 p-4"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={Math.round(120 * (brand.scale || 1))}
                  height={Math.round(48 * (brand.scale || 1))}
                  className="object-contain max-h-12"
                  style={brand.scale ? { transform: `scale(${brand.scale})` } : undefined}
                  unoptimized
                />
              </Link>
            ))}
          </div>
          {/* Бренды без логотипов текстовым списком */}
          {brands.filter(b => !b.logo).length > 0 && (
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {brands.filter(b => !b.logo).sort((a, b) => a.name.localeCompare(b.name)).map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/${brand.slug}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Верну машинку в строй — звоните
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
            <div>Приеду в течение 2 часов</div>
            <div>Гарантия 12 месяцев</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвонить мастеру
            </a>
            <a
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
