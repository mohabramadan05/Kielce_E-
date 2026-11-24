import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Ready() {
  const t = await getTranslations("incoming");
  return (
    <div className="w-full h-min bg-brand  px-8 py-16 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-center text-text text-xl md:text-2xl font-black">
        {t("ready-title")}
      </h1>
      <p className="text-center text-sm md:text-base text-fg">{t("ready-desc")}</p>
      <Link
        className="bg-bg text-brand-ink px-6 py-3 text-sm md:text-base rounded-full font-bold"
        href="/contact"
      >
        {t("ready-btn")} →
      </Link>
    </div>
  );
}
