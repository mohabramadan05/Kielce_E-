import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Partnership() {
  const t = await getTranslations("partner");
  return (
    <div className="w-full h-min bg-surface-2  px-8 py-16 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-center text-text text-xl md:text-2xl font-black">
        {t("ask-partner")}
      </h1>
      <p className="text-center text-sm md:text-base text-fg-2">{t("ask-desc")}</p>
      <Link
        className="bg-brand text-[#eee] px-6 py-3 text-sm md:text-base rounded-full font-bold"
        href="/contact"
      >
        {t("ask-btn")} →
      </Link>
    </div>
  );
}
