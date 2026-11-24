import { getTranslations } from "next-intl/server";
import { File } from "lucide-react";

export default async function Info() {
  const t = await getTranslations("incoming");
  return (
    <div className="w-full h-min p-4 md:p-8 lg:p-16 flex flex-col gap-6 justify-start items-start bg-bg">
      <h1 className="text-xl md:text-2xl text-fg font-black">{t("info")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="p-4 rounded-2xl flex flex-col gap-2 border border-line">
          <p className="font-semibold text-fg text-base md:text-lg">
            {t("accomodation")}
          </p>
          <p className="text-fg-2 text-sm md:text-base">
            {t("accomodation-desc")}
          </p>
        </div>
        <div className="p-4 rounded-2xl flex flex-col gap-2 border border-line">
          <p className="font-semibold text-fg text-base md:text-lg">
            {t("insurance")}
          </p>
          <p className="text-fg-2 text-sm md:text-base">
            {t("insurance-desc")}
          </p>
        </div>
        <div className="p-4 rounded-2xl flex flex-col gap-2 border border-line">
          <p className="font-semibold text-fg text-base md:text-lg">
            {t("language")}
          </p>
          <p className="text-fg-2 text-sm md:text-base">
            {t("language-desc")}
          </p>
        </div>
      </div>
    </div>
  );
}
