import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("outgoing");
  return (
    <div className="w-full h-min p-4 md:p-8 lg:p-16 flex flex-col gap-6 justify-center items-center bg-bg">
      <span className="px-4 py-2 text-sm md:text-base text-brand font-black bg-brand-tint/70 rounded-full">
        {t("title")}
      </span>
      <h1 className="text-2xl md:text-5xl font-black text-fg">{t("sub-title")}</h1>
      <p className="w-[90%] md:w-1/2 text-fg-2 text-center text-base md:text-lg">{t("desc")}</p>
    </div>
  );
}
