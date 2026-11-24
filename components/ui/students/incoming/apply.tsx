import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Hero() {
  const t = await getTranslations("incoming");
  return (
    <div className="w-full h-min p-4 md:p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-6 justify-start items-start bg-bg">
      <div className="flex flex-col flex-1 items-start justify-start gap-3 bg-surface-2 p-5 md:p-8 rounded-2xl md:rounded-3xl">
        <h1 className="text-2xl text-fg font-bold">{t("app")}</h1>
        <ol className="list-disc pl-5 text-fg-2">
          <li>{t("p1")}</li>
          <li>{t("p2")}</li>
          <li>{t("p3")}</li>
          <li>{t("p4")}</li>
          <li>{t("p5")}</li>
        </ol>
        <Link
          href="/students/incomings/application-process"
          className="py-2 underline underline-offset-8 text-brand-ink font-semibold"
        >
          {t("app-btn")} →
        </Link>
      </div>
      <div className="flex flex-col flex-1 items-start justify-start gap-3 bg-surface-2 p-5 md:p-8 rounded-2xl md:rounded-3xl">
        <h1 className="text-2xl text-fg font-bold ">{t("deadlines")}</h1>
        <div className="flex flex-row border-b-2 border-line justify-between items-center w-full pb-2">
          <p className="text-sm md:text-base text-fg font-semibold">{t("winter")}</p>
          <p className="text-sm md:text-base text-brand-ink font-semibold">{t("winter-deadline")}</p>
        </div>
        <div className="flex flex-row border-b-2 border-line justify-between items-center w-full pb-2">
          <p className="text-sm md:text-base text-fg font-semibold">{t("summer")}</p>
          <p className="text-sm md:text-base text-brand-ink font-semibold">{t("summer-deadline")}</p>
        </div>
        <p className="text-fg-2">{t("deadlines-desc")}</p>
      </div>
    </div>
  );
}
