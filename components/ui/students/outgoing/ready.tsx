import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Partnership() {
  const t = await getTranslations("outgoing");
  return (
    <div className="bg-brand w-full h-min px-110 py-16 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-center text-white text-2xl font-black">
        {t("ready")}
      </h1>
      <p className="text-center text-fg-4">{t("ready-desc")}</p>
      <Link
        className="bg-white text-brand px-6 py-3 rounded-full font-bold"
        href="/contact"
      >
        {t("ready-btn")} →
      </Link>
    </div>
  );
}
