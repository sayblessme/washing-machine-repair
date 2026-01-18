"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"], a[href*="/#"]');

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Извлекаем id из href (например, "#reviews" или "/#reviews")
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const id = href.slice(hashIndex + 1);
      if (!id) return;

      const element = document.getElementById(id);
      if (!element) return;

      e.preventDefault();

      // Высота хедера
      const headerHeight = 80;

      // Вычисляем позицию
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      // Плавный скролл
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Обновляем URL без перезагрузки
      history.pushState(null, "", `#${id}`);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
