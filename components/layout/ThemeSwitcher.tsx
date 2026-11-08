// components/layout/ThemeSwitcher.tsx
"use client";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useMounted } from "@/hooks/useMounted";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("Theme");
  const mounted = useMounted();

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const label = isDark ? t("toLight") : t("toDark");

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-line-2 bg-surface px-4 py-1.5 font-medium text-brand-ink shadow-sm transition-colors hover:border-brand-ink hover:bg-surface-2 hover:text-brand-ink-hover"
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
      <span>{isDark ? t("toLight") : t("toDark")}</span>
    </button>
  );
}