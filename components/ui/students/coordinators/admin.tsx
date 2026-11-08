import { getTranslations } from "next-intl/server";

export default async function Admin() {
  const t = await getTranslations("Coordinators");
  return (
    <div className="w-full h-min px-16 py-4 flex flex-col gap-6 justify-start items-start bg-bg">
      <h1 className="text-text text-2xl font-black">{t("admin")}</h1>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col justify-start items-start rounded-2xl border border-line p-4">
          <p className="text-brand-ink font-semibold">{t("outgoings")}</p>
          <h1 className="text-xl text-fg font-black">Iwona Ciosk, Ma.</h1>
          <p className="text-fg-2">
            {t("room")} 4.20 · +48 41 34 24 772 · erasmus@tu.kielce.pl
          </p>
        </div>
        <div className="flex flex-col justify-start items-start rounded-2xl border border-line p-4">
          <p className="text-brand-ink font-semibold">{t("incomings")}</p>
          <h1 className="text-xl text-fg font-black">
            Michalina Mikołajczyk, Ma.
          </h1>
          <p className="text-fg-2">
            {t("room")} 4.09 · +48 41 34 24 788 · erasmus@tu.kielce.pl
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
