import { getTranslations } from "next-intl/server";
import { File } from "lucide-react";
import Link from "next/link";

export default async function docs() {
  const t = await getTranslations("incoming");
  return (
    <div className="w-full h-min p-4 md:p-8 lg:p-16 flex flex-col gap-6 justify-start items-start bg-surface-2">
      <h1 className="text-xl md:text-2xl text-fg font-black">{t("docs")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Link
          href="/"
          className="p-4 rounded-2xl flex flex-row items-center gap-8 bg-bg"
        >
          <div className="text-brand-ink flex items-center justify-center rounded-xl bg-brand-tint p-4">
            <File />
          </div>
          <p className="font-semibold text-fg text-base md:text-lg">
            {t("learn-doc")}
          </p>
        </Link>
        <Link
          href="/"
          className="p-4 rounded-2xl flex flex-row items-center gap-8 bg-bg"
        >
          <div className="text-brand-ink flex items-center justify-center rounded-xl bg-brand-tint p-4">
            <File />
          </div>
          <p className="font-semibold text-fg text-base md:text-lg">
            {t("app-doc")}
          </p>
        </Link>
        <Link
          href="/"
          className="p-4 rounded-2xl flex flex-row items-center gap-8 bg-bg"
        >
          <div className="text-brand-ink flex items-center justify-center rounded-xl bg-brand-tint p-4">
            <File />
          </div>
          <p className="font-semibold text-fg text-base md:text-lg">
            {t("rate-doc")}
          </p>
        </Link>
      </div>
    </div>
  );
}
