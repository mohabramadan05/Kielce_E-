"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex gap-2 text-base text-brand">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => router.replace(pathname, { locale: l })}
          className={l === locale ? "font-bold" : "text-text-2 hover:text-brand"}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}