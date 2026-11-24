import { getTranslations, getLocale } from "next-intl/server";
import { Countries } from "@/data/KA-171";

export default async function Card() {
  const t = await getTranslations("Ka-171");
  const locale = await getLocale();
  const names = new Intl.DisplayNames([locale], { type: "region" });

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 px-5 p-5">
      {Countries.map((c) => (
        <div key={c.code} className="flex flex-row p-4 border-shadow-md rounded-3xl bg-surface/50 shadow-md backdrop-blur-md hover:*:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="relative w-2/5  shrink-0">
                <img src={`/flags/${c.code}.svg`} alt="" className=" absolute inset-0 h-full w-full object-cover rounded-2xl" />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-surface" />
            </div>
            <div className="flex flex-1 flex-col  z-10 p-4">
                <h1 className="font-extrabold">{names.of(c.code.toUpperCase())}</h1>
                <p>{c.university}</p>
                <p className="text-sm text-muted-foreground text-gray-500">
                    {t("SMS")} {c.smsIncoming ?? "—"}
                </p>
                <p className="text-sm text-muted-foreground text-gray-500">
                    {t("STA")} {c.staIncoming ?? "—"}
                </p>
                <p className="text-sm text-muted-foreground text-gray-500">
                    {t("STA_O")} {c.staOutgoing ?? "—"}
                </p>
            </div>
        </div>
      ))}
    </div>
  );
}