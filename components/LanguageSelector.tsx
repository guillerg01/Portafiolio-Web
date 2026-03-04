"use client";

import { useLocale } from "@/app/providers/LocaleProvider";
import type { Locale } from "@/app/i18n/translations";

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
];

export const LanguageSelector = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-2 py-1 text-xs font-semibold uppercase tracking-widest">
      {options.map((option) => {
        const isActive = locale === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            className={`rounded-full px-2 py-1 transition ${
              isActive
                ? "bg-[#F7AB0A] text-black"
                : "text-gray-300 hover:text-white"
            }`}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};


