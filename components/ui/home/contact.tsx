import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Contact() {
  const t = await getTranslations("HomePage");
  return (
    <div className="w-full h-min bg-brand flex p-4 md:p-8 lg:p-16 gap-4 md:gap-2 justify-between flex-col md:flex-row items-start md:items-center">
      <div className="flex flex-col gap-2">
        <h1 className="md:text-3xl font-black text-white">{t("contact-title-01")}<br/>{t("contact-title-02")}</h1>
        <p className="text-sm md:text-base text-fg-4">{t("contact-desc-01")}<br/>{t("contact-desc-02")}</p>
      </div>
      <Link
        className="bg-line text-brand-ink px-6 py-3 rounded-full font-bold"
        href="/contact"
      >
        {t("contact")} →
      </Link>
    </div>
  );
}
