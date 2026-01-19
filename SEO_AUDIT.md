# SEO-аудит: Ремонт стиральных машин

## Текущая оценка: 6.1/10

| Параметр | Оценка | Статус |
|----------|--------|--------|
| Meta-теги (Title/Description) | 8/10 | ✓ Хорошо |
| Заголовки (H1-H6) | 8/10 | ✓ Хорошо |
| Schema.org разметка | 5/10 | ⚠️ Базовая |
| Sitemap.xml | 6/10 | ⚠️ Неполный |
| Robots.txt | 9/10 | ✓ Хорошо |
| URL структура | 8/10 | ✓ Хорошо |
| Internal linking | 6/10 | ⚠️ Слабое |
| Alt-теги изображений | 8/10 | ✓ Хорошо |
| Open Graph теги | 3/10 | ❌ Нет og:image |
| Canonical теги | 2/10 | ❌ Отсутствует |

---

## Критические проблемы

### 1. Отсутствуют Canonical теги ❌
**Проблема:** Может привести к дублированию контента в индексе поисковиков.

**Файлы для исправления:**
- `src/app/layout.tsx` — добавить базовый canonical
- `src/app/[brand]/page.tsx` — динамический canonical
- `src/app/brands/page.tsx` — canonical

**Решение:**
```typescript
// В layout.tsx
export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.baseUrl,
  },
};

// В [brand]/page.tsx generateMetadata
alternates: {
  canonical: `${siteConfig.baseUrl}/${brand.slug}`,
},
```

---

### 2. Страница /brands/ отсутствует в Sitemap ❌
**Файл:** `src/app/sitemap.ts`

**Решение:**
```typescript
return [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${baseUrl}/brands`,  // <-- ДОБАВИТЬ
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  ...brandPages,
];
```

---

### 3. Нет AggregateRating Schema ❌
**Проблема:** Рейтинг 4.96 с 131 отзывом не размечен — упущенная возможность для rich snippets.

**Файл:** `src/components/JsonLd.tsx`

**Решение:**
```typescript
export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    // ... существующие поля ...

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.96",
      reviewCount: 131,
      bestRating: "5",
      worstRating: "1",
    },
  };
}
```

---

## Важные улучшения

### 4. Добавить BreadcrumbList Schema ⚠️
**Файл:** `src/components/JsonLd.tsx`

**Новый компонент:**
```typescript
export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

**Использование в [brand]/page.tsx:**
```tsx
<BreadcrumbJsonLd items={[
  { name: "Главная", url: siteConfig.baseUrl },
  { name: "Все бренды", url: `${siteConfig.baseUrl}/brands` },
  { name: brand.name, url: `${siteConfig.baseUrl}/${brand.slug}` },
]} />
```

---

### 5. Добавить Open Graph Image ⚠️
**Файл:** `src/app/layout.tsx`

**Решение:**
```typescript
openGraph: {
  type: "website",
  locale: "ru_RU",
  siteName: siteConfig.name,
  images: [
    {
      url: `${siteConfig.baseUrl}/washing-master/images/master.webp`,
      width: 800,
      height: 800,
      alt: `Мастер ${siteConfig.masterName} - ремонт стиральных машин`,
    },
  ],
},
```

---

### 6. Добавить Review Schema с отзывами ⚠️
**Файл:** `src/components/JsonLd.tsx`

**Добавить в LocalBusinessJsonLd:**
```typescript
review: reviewsData.reviews.slice(0, 5).map((review) => ({
  "@type": "Review",
  author: {
    "@type": "Person",
    name: review.author,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating.toString(),
    bestRating: "5",
  },
  reviewBody: review.text,
})),
```

---

### 7. Добавить FAQ Schema (опционально) ⚠️

**Создать файл:** `src/data/faq.ts`
```typescript
export const faqItems = [
  {
    question: "Сколько стоит ремонт стиральной машины?",
    answer: "Стоимость зависит от неисправности. Диагностика от 1000 ₽, ремонт от 1500 ₽.",
  },
  {
    question: "Как быстро приедет мастер?",
    answer: "Приеду в течение 2 часов. Работаю ежедневно с 8:00 до 21:00.",
  },
  {
    question: "Даёте ли гарантию на ремонт?",
    answer: "Да, гарантия на работу и запчасти до 12 месяцев.",
  },
];
```

**Компонент FAQJsonLd:**
```typescript
export function FAQJsonLd({ items }: { items: Array<{ question: string; answer: string }> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

---

## Улучшение перелинковки

### 8. Блок "Похожие бренды" на страницах брендов
**Файл:** `src/app/[brand]/page.tsx`

**Добавить после CTA секции:**
```tsx
<section className="py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-bold text-center mb-8">
      Также ремонтирую
    </h2>
    <div className="flex flex-wrap justify-center gap-4">
      {brands
        .filter((b) => b.slug !== brand.slug)
        .slice(0, 8)
        .map((b) => (
          <Link
            key={b.slug}
            href={`/${b.slug}`}
            className="px-4 py-2 bg-white rounded-lg border hover:border-blue-300 transition-colors"
          >
            {b.name}
          </Link>
        ))}
    </div>
  </div>
</section>
```

---

## План реализации

| # | Задача | Файл | Сложность | Приоритет |
|---|--------|------|-----------|-----------|
| 1 | Canonical теги | layout.tsx, [brand]/page.tsx | Низкая | 🔴 Критично |
| 2 | /brands/ в sitemap | sitemap.ts | Низкая | 🔴 Критично |
| 3 | AggregateRating Schema | JsonLd.tsx | Низкая | 🔴 Критично |
| 4 | Open Graph image | layout.tsx | Низкая | 🟡 Важно |
| 5 | BreadcrumbList Schema | JsonLd.tsx | Низкая | 🟡 Важно |
| 6 | Review Schema | JsonLd.tsx | Средняя | 🟡 Важно |
| 7 | FAQ Schema | faq.ts, JsonLd.tsx | Средняя | 🟢 Опционально |
| 8 | Похожие бренды | [brand]/page.tsx | Низкая | 🟢 Опционально |

---

## Ожидаемый результат после улучшений

| Параметр | До | После |
|----------|-----|-------|
| Meta-теги | 8/10 | 9/10 |
| Schema.org | 5/10 | 9/10 |
| Sitemap | 6/10 | 10/10 |
| Internal linking | 6/10 | 8/10 |
| Open Graph | 3/10 | 9/10 |
| Canonical | 2/10 | 10/10 |
| **ОБЩАЯ ОЦЕНКА** | **6.1/10** | **8.5-9/10** |

---

## Верификация изменений

1. **Sitemap:** Открыть `/sitemap.xml` — должен содержать `/brands/`
2. **Schema:** Проверить через [Google Rich Results Test](https://search.google.com/test/rich-results)
3. **Canonical:** View Source → найти `<link rel="canonical">`
4. **Open Graph:** Проверить через [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
5. **Сборка:** `npm run build` — убедиться, что нет ошибок
