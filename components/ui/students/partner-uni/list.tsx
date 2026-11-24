import { getTranslations } from "next-intl/server";

export default async function List() {
  const t = await getTranslations("partner");
  return (
    <div className="w-full h-min p-4 md:p-8 flex flex-col gap-6 justify-center items-center bg-bg">
            <div className="text-sm md:text-base bg-surface-2 rounded-3xl p-6 w-full">
                <h1 className="text-sm md:text-base font-bold text-brand-ink">{t("not-listed")}</h1>
                <br />
                <ul className="text-fg-2">
                    <li>1. {t("step-1")}</li>
                    <li>2. {t("step-2")}</li>
                    <li>3. {t("step-3")}</li>
                </ul>
                <br />
                <p className="text-sm md:text-base text-fg-2">{t("check")}</p>
            </div>
    </div>
  );
}
