import { getTranslations } from "next-intl/server";

export default async function Steps() {
  const t = await getTranslations("incoming");
  return (
    <div className="w-full h-min p-4 md:p-8 lg:p-16 bg-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
        <div className="flex flex-col gap-2 items-start justify-start p-4 md:p-6 bg-bg">
          <h1 className="text-sm md:text-base font-bold text-brand-ink">
            {t("step-1")}
          </h1>
          <h1 className="text-base md:text-xl font-bold text-fg">
            {t("step-1-title")}
          </h1>
          <p className="text-sm md:text-base text-fg-2">{t("step-1-desc")}</p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start p-4 md:p-6 bg-bg">
          <h1 className="text-sm md:text-base font-bold text-brand-ink">
            {t("step-2")}
          </h1>
          <h1 className="text-base md:text-xl font-bold text-fg">
            {t("step-2-title")}
          </h1>
          <p className="text-sm md:text-base text-fg-2">{t("step-2-desc")}</p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start p-4 md:p-6 bg-bg">
          <h1 className="text-sm md:text-base font-bold text-brand-ink">
            {t("step-3")}
          </h1>
          <h1 className="text-base md:text-xl font-bold text-fg">
            {t("step-3-title")}
          </h1>
          <p className="text-sm md:text-base text-fg-2">{t("step-3-desc")}</p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start p-4 md:p-6 bg-bg">
          <h1 className="text-sm md:text-base font-bold text-brand-ink">
            {t("step-4")}
          </h1>
          <h1 className="text-base md:text-xl font-bold text-fg">
            {t("step-4-title")}
          </h1>
          <p className="text-sm md:text-base text-fg-2">{t("step-4-desc")}</p>
        </div>
      </div>
    </div>
  );
}
