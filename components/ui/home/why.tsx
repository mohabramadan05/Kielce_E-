import { getTranslations } from "next-intl/server";

export default async function Why() {
  const t = await getTranslations("HomePage");
  return (
    <div className="w-full h-min bg-surface-2 flex p-4 md:p-8 lg:p-16 gap-2 justify-start flex-col items-start">
      <h1 className="text:2xl md:text-3xl font-black">{t("why")}</h1>
      <p className="text-sm lg:text-base text-fg-2">{t("ans")}</p>
    </div>
  );
}
