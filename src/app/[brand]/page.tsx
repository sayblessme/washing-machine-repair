import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { brands, getBrandBySlug, getAllBrandSlugs } from "@/data/brands";
import { siteConfig } from "@/data/site";
import { reviewsData } from "@/data/reviews";
import { ServiceJsonLd } from "@/components/JsonLd";
import { ReviewCard } from "@/components/ReviewCard";
import { PricingSection } from "@/components/PricingSection";

interface BrandPageProps {
  params: Promise<{ brand: string }>;
}

export async function generateStaticParams() {
  return getAllBrandSlugs().map((brand) => ({ brand }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { brand: brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);

  if (!brand) {
    return {};
  }

  const title = `Ремонт стиральных машин ${brand.name} в ${siteConfig.city}`;
  const description = `Ремонт стиральных машин ${brand.name} на дому в ${siteConfig.city}. Частный мастер ${siteConfig.masterName}. Выезд в день обращения, гарантия до 12 месяцев.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ru_RU",
    },
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brand: brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);

  if (!brand) {
    notFound();
  }

  return (
    <>
      <ServiceJsonLd brandName={brand.name} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ремонт стиральных машин {brand.name} в {siteConfig.city}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Частный мастер &bull; Выезд в день обращения &bull; Гарантия
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Я выполняю ремонт стиральных машин {brand.name} на дому. Хорошо знаю конструктивные особенности техники этого бренда и типовые неисправности, поэтому ремонт занимает минимум времени.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Частые поломки стиральных машин {brand.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "💧", text: "Не сливает воду" },
              { icon: "🔄", text: "Не отжимает бельё" },
              { icon: "🔥", text: "Не греет воду" },
              { icon: "🔊", text: "Шумит при отжиме" },
              { icon: "💦", text: "Протекает" },
              { icon: "⚡", text: "Не включается" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg"
              >
                <span className="text-2xl mb-2">{item.icon}</span>
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <PricingSection title={`Цены на ремонт стиральных машин ${brand.name}`} brandName={brand.name} />

      {/* Reviews Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
            Отзывы о ремонте
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-4">
            Ниже — реальные отзывы клиентов о ремонте стиральных машин с Profi.ru.
          </p>
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
            {reviewsData.reviews.slice(0, 4).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Нужен ремонт стиральной машины {brand.name}?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Отправьте фото
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Позвоните мастеру
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-blue-100">
            <div>Выезд {siteConfig.prices.visit}</div>
            <div>Гарантия до 12 месяцев</div>
          </div>
          <a
            href={`tel:${siteConfig.phoneClean}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Вызвать мастера
          </a>
        </div>
      </section>
    </>
  );
}
