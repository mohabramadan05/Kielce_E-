import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Hero() {
  const t = await getTranslations("outgoing");
  return (
    <div className="w-full h-min p-16 grid grid-cols-2 gap-6 justify-start items-start bg-bg">
      <div className="flex flex-col flex-1 items-start justify-start gap-3">
        <h1 className="text-2xl text-fg font-bold">{t("who")}</h1>
        <ul className="list-disc pl-5 text-fg-2">
          <li>{t("p1")}</li>
          <li>{t("p2")}</li>
          <li>{t("p3")}</li>
          <li>{t("p4")}</li>
        </ul>
      </div>
      <div className="flex flex-col flex-1 items-start justify-start gap-3">
        <h1 className="text-2xl text-fg font-bold">{t("funding")}</h1>{" "}
        <p className="text-fg-2">{t("funding-desc")}</p>
        <Link
          href="/students/outgoing/short-term"
          className="py-2 underline underline-offset-8 text-brand-ink font-semibold"
        >
          {t("funding-btn")} →
        </Link>
      </div>
    </div>
  );
}
