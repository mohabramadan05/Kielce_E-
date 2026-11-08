import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowRight, LogOut, ExternalLink, Globe, Flag, type LucideIcon } from "lucide-react";

export default async function GetStarted() {
  const t = await getTranslations("HomePage");
  return (
    <div className="w-full h-min bg-bg flex p-16 gap-2 justify-start flex-col items-start">
      <h1 className="text-3xl font-black">{t("get")}</h1>
      <p className="text-fg-2">{t("get-desc")}</p>
      <div className="flex justify-between w-full mt-4">
        <Link
          href="/students/incoming"
          className="group relative flex w-full max-w-[320px] flex-col rounded-3xl border-t-[3px] border-t-[#1e3a5f] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
        >
          <div className="mb-10 flex items-start justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 bg-brand-tint text-brand-ink group-hover:text-brand-ink-hover">
              <LogOut className="" />
            </div>

            <ArrowRight
              className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#1e3a5f]"
              strokeWidth={1.75}
            />
          </div>

          <h3 className="text-xl font-bold text-slate-900">{t("incoming")}</h3>
          <p className="mt-1 text-base leading-relaxed text-slate-500">
            {t("c1")}
          </p>
        </Link>
        <Link
          href="/students/incoming"
          className="group relative flex w-full max-w-[320px] flex-col rounded-3xl border-t-[3px] border-t-[#1e3a5f] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
        >
          <div className="mb-10 flex items-start justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 bg-brand-tint text-brand-ink group-hover:text-brand-ink-hover">
              <ExternalLink />
            </div>

            <ArrowRight
              className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#1e3a5f]"
              strokeWidth={1.75}
            />
          </div>

          <h3 className="text-xl font-bold text-slate-900">{t("outgoing")}</h3>
          <p className="mt-1 text-base leading-relaxed text-slate-500">
            {t("c2")}
          </p>
        </Link>
        <Link
          href="/students/incoming"
          className="group relative flex w-full max-w-[320px] flex-col rounded-3xl border-t-[3px] border-t-[#1e3a5f] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
        >
          <div className="mb-10 flex items-start justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 bg-brand-tint text-brand-ink group-hover:text-brand-ink-hover">
             <Globe />
            </div>

            <ArrowRight
              className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#1e3a5f]"
              strokeWidth={1.75}
            />
          </div>

          <h3 className="text-xl font-bold text-slate-900">{t("partners")}</h3>
          <p className="mt-1 text-base leading-relaxed text-slate-500">
            {t("c3")}
          </p>
        </Link>
        <Link
          href="/students/incoming"
          className="group relative flex w-full max-w-[320px] flex-col rounded-3xl border-t-[3px] border-t-[#1e3a5f] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
        >
          <div className="mb-10 flex items-start justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 bg-brand-tint text-brand-ink group-hover:text-brand-ink-hover">
              <Flag />
            </div>

            <ArrowRight
              className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#1e3a5f]"
              strokeWidth={1.75}
            />
          </div>

          <h3 className="text-xl font-bold text-slate-900">{t("ka171")}</h3>
          <p className="mt-1 text-base leading-relaxed text-slate-500">
            {t("c4")}
          </p>
        </Link>
      </div>
    </div>
  );
}
