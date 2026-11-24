import { getTranslations } from "next-intl/server";

export default async function Apply() {
  const t = await getTranslations("outgoing");
  return (
    <div className="w-full h-min p-4 md:p-8 lg:p-16 flex flex-col gap-6 justify-start items-start bg-surface-2">
      <h1 className="font-bold text-2xl">{t("how")}</h1>
      <div className="flex flex-col md:flex-row rounded-3xl gap-4 justify-between items-center bg-surface p-5">
        <div className="flex flex-col justify-center items-start flex-1 w-full">
          <p className="font-bold text-brand-ink">1</p>
          <p className="font-bold text-fg">{t("step-1")}</p>
        </div>
        <span className="border border-line w-[90%] md:w-0 md:h-25" />
        <div className="flex flex-col justify-center items-start flex-1 w-full">
          <p className="font-bold text-brand-ink">2</p>
          <p className="font-bold text-fg">{t("step-2")}</p>
        </div>
        <span className="border border-line w-[90%] md:w-0 md:h-25" />
        <div className="flex flex-col justify-center items-start flex-1 w-full">
          <p className="font-bold text-brand-ink">3</p>
          <p className="font-bold text-fg">{t("step-3")}</p>
        </div>
        <span className="border border-line w-[90%] md:w-0 md:h-25" />
        <div className="flex flex-col justify-center items-start flex-1 w-full">
          <p className="font-bold text-brand-ink">4</p>
          <p className="font-bold text-fg">{t("step-4")}</p>
        </div>
        <span className="border border-line w-[90%] md:w-0 md:h-25" />
        <div className="flex flex-col justify-center items-start flex-1 w-full">
          <p className="font-bold text-brand-ink">5</p>
          <p className="font-bold text-fg">{t("step-5")}</p>
        </div>
      </div>
    </div>
  );
}
