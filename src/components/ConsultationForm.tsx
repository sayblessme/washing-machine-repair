"use client";

import { useState, useRef } from "react";
import { siteConfig } from "@/data/site";
import { sendToTelegram } from "@/utils/telegram";

// Форматирование телефона по российской маске +7 (XXX) XXX-XX-XX
// Маска всегда видна полностью, подчёркивания заменяются на цифры
function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, "");

  // Убираем ведущую 8 или 7, оставляем только 10 цифр номера
  let phone = digits;
  if (phone.startsWith("8") || phone.startsWith("7")) {
    phone = phone.slice(1);
  }

  // Ограничиваем до 10 цифр
  phone = phone.slice(0, 10).padEnd(10, "_");

  // Форматируем с полной маской
  return `+7 (${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 8)}-${phone.slice(8)}`;
}

// Проверка валидности телефона (10 цифр после +7)
function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  // Должно быть 11 цифр (7 + 10 цифр номера) или 10 цифр без кода
  return digits.length === 11 || digits.length === 10;
}

// Вычисляет позицию курсора после последней введённой цифры
function getCursorPosition(value: string): number {
  const underscoreIndex = value.indexOf("_");
  if (underscoreIndex === -1) {
    return value.length; // Все цифры введены
  }
  return underscoreIndex;
}

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+7 (___) ___-__-__",
    problem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
    setPhoneError(false);

    // Устанавливаем курсор после последней введённой цифры
    requestAnimationFrame(() => {
      if (phoneInputRef.current) {
        const pos = getCursorPosition(formatted);
        phoneInputRef.current.setSelectionRange(pos, pos);
      }
    });
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // При нажатии Backspace удаляем последнюю введённую цифру
    if (e.key === "Backspace") {
      e.preventDefault();
      const digits = formData.phone.replace(/\D/g, "");
      // Убираем ведущую 7
      let phone = digits;
      if (phone.startsWith("7")) {
        phone = phone.slice(1);
      }
      // Удаляем последнюю цифру
      if (phone.length > 0) {
        phone = phone.slice(0, -1);
      }
      const formatted = formatPhoneNumber(phone);
      setFormData({ ...formData, phone: formatted });

      requestAnimationFrame(() => {
        if (phoneInputRef.current) {
          const pos = getCursorPosition(formatted);
          phoneInputRef.current.setSelectionRange(pos, pos);
        }
      });
    }
  };

  const handlePhoneFocus = () => {
    // При фокусе ставим курсор после последней введённой цифры
    requestAnimationFrame(() => {
      if (phoneInputRef.current) {
        const pos = getCursorPosition(formData.phone);
        phoneInputRef.current.setSelectionRange(pos, pos);
      }
    });
  };

  const handlePhoneClick = () => {
    // При клике ставим курсор после последней введённой цифры
    if (phoneInputRef.current) {
      const pos = getCursorPosition(formData.phone);
      phoneInputRef.current.setSelectionRange(pos, pos);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // Проверяем телефон перед отправкой
    if (!isValidPhone(formData.phone)) {
      e.preventDefault();
      setPhoneError(true);
      return;
    }
    e.preventDefault();
    setIsSubmitting(true);

    // Отправляем заявку в Telegram
    await sendToTelegram(formData, "Форма консультации");

    setIsSubmitting(false);
    setSubmitted(true);

    // Сбросить форму через 3 секунды
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "+7 (___) ___-__-__", problem: "" });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Заявка отправлена!</h3>
        <p className="text-gray-600">Мастер перезвонит в течение 15 минут</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Ваше имя
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Иван"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Номер телефона
        </label>
        <input
          type="tel"
          id="phone"
          ref={phoneInputRef}
          value={formData.phone}
          onChange={handlePhoneChange}
          onKeyDown={handlePhoneKeyDown}
          onFocus={handlePhoneFocus}
          onClick={handlePhoneClick}
          placeholder="+7 (999) 123-45-67"
          required
          className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${phoneError ? "border-red-500" : "border-gray-300"}`}
        />
        {phoneError && (
          <p className="text-red-500 text-xs mt-1">Введите корректный номер телефона</p>
        )}
      </div>
      <div>
        <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
          Опишите проблему
        </label>
        <textarea
          id="problem"
          value={formData.problem}
          onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
          rows={3}
          placeholder="Машинка не сливает воду..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>
      <p className="text-xs text-gray-500 text-center">
        Выезд мастера — {siteConfig.prices.visit}
      </p>
    </form>
  );
}
