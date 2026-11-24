import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { GraduationCap, Briefcase, Clock } from "lucide-react";

export default async function Cards() {
  const t = await getTranslations("outgoing");
  return (
    <div className="w-full h-min p-4 grid md:p-8 lg:p-16 grid-cols-1 lg:grid-cols-3 gap-6 bg-bg">
      <div className="mb-3 group relative flex w-full  flex-col rounded-3xl border-t-[3px] border-t-[#1e3a5f] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2">
        <div className="mb-5 md:mb-10 flex items-start justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 bg-brand-tint text-brand-ink group-hover:text-brand-ink-hover">
            <GraduationCap />
          </div>
        </div>

        <h3 className="text-base md:text-xl font-bold text-fg">{t("studies")}</h3>
        <p className="mt-1 text-sm md:text-base  leading-relaxed text-slate-500">
          {t("studies-desc")}
        </p>
        <Link
          href="/students/outgoing/studies"
          className="py-2 underline underline-offset-8 text-sm md:text-base text-brand-ink font-semibold"
        >
          {t("studies-btn")} →
        </Link>
      </div>{" "}
      <div className="mb-3 group relative flex w-full  flex-col rounded-3xl border-t-[3px] border-t-[#1e3a5f] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2">
        <div className="mb-5 md:mb-10 flex items-start justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 bg-brand-tint text-brand-ink group-hover:text-brand-ink-hover">
            <Briefcase />
          </div>
        </div>
        <h3 className="text-base md:text-xl font-bold text-fg">{t("intern")}</h3>
        <p className="mt-1 text-sm md:text-base leading-relaxed text-slate-500">
          {t("intern-desc")}
        </p>{" "}
        <Link
          href="/students/outgoing/internship"
          className="py-2 underline underline-offset-8 text-sm md:text-base text-brand-ink font-semibold"
        >
          {t("intern-btn")} →
        </Link>
      </div>{" "}
      <div className="mb-3 group relative flex w-full  flex-col rounded-3xl border-t-[3px] border-t-[#1e3a5f] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2">
        <div className="mb-5 md:mb-10 flex items-start justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 bg-brand-tint text-brand-ink group-hover:text-brand-ink-hover">
            <Clock />
          </div>
        </div>
        <h3 className="text-base md:text-xl font-bold text-fg">{t("short")}</h3>
        <p className="mt-1 text-sm md:text-base leading-relaxed text-slate-500">
          {t("short-desc")}
        </p>{" "}
        <Link
          href="/students/outgoing/short-term"
          className="py-2 underline underline-offset-8 text-sm md:text-base text-brand-ink font-semibold"
        >
          {t("short-btn")} →
        </Link>
      </div>
    </div>
  );
}
