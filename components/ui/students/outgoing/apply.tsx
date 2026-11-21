import { getTranslations } from "next-intl/server";

export default async function Apply() {
  const t = await getTranslations("outgoing");
  return (
    <div className="w-full h-min p-10 flex flex-col gap-6 justify-start items-start bg-surface-2">
      <h1 className="font-bold text-2xl">{t("how")}</h1>
      <div className="flex rounded-3xl gap-4 justify-between items-center bg-surface p-5">
        <div className="flex flex-col justify-center items-start flex-1">
          <p className="font-bold text-brand-ink">1</p>
          <p className="font-bold text-fg">{t("step-1")}</p>
        </div>
        <span className="border border-line h-25" />
        <div className="flex flex-col justify-center items-start flex-1">
          <p className="font-bold text-brand-ink">2</p>
          <p className="font-bold text-fg">{t("step-2")}</p>
        </div>
        <span className="border border-line h-25" />
        <div className="flex flex-col justify-center items-start flex-1">
          <p className="font-bold text-brand-ink">3</p>
          <p className="font-bold text-fg">{t("step-3")}</p>
        </div>
        <span className="border border-line h-25" />
        <div className="flex flex-col justify-center items-start flex-1">
          <p className="font-bold text-brand-ink">4</p>
          <p className="font-bold text-fg">{t("step-4")}</p>
        </div>
        <span className="border border-line h-25" />
        <div className="flex flex-col justify-center items-start flex-1">
          <p className="font-bold text-brand-ink">5</p>
          <p className="font-bold text-fg">{t("step-5")}</p>
        </div>
      </div>
    </div>
  );
}
