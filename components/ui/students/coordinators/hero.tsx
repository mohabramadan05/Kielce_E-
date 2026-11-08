import { getTranslations } from "next-intl/server";
import { Box } from "lucide-react";

export default async function Hero() {
  const t = await getTranslations("Coordinators");
  return (
    <div className="w-full h-min p-16 flex flex-col gap-6 justify-center items-center bg-bg">
      <span className="px-4 py-2 text-brand font-black bg-brand-tint/70 rounded-full">
        {t("get")}
      </span>
      <h1 className="text-5xl font-black text-fg">{t("title")}</h1>
      <p className="w-1/3 text-fg-2 text-center text-lg">{t("desc")}</p>
      <div className="flex flex-row w-1/2 p-8 gap-6 rounded-3xl bg-brand items-center">
        <span className="text-white w-min h-min p-4 bg-white/20 rounded-full">
          <Box />
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-gray-300 text-sm"> {t("eur-cor")}</p>
          <h1 className="text-white text-2xl font-bold"> Anna Kasztelewicz, Ma.</h1>
          <p className="text-gray-300"> 
            {t("building")} C . {t("room")} 4.21 . +48 41 34 24 773 .
            erasmus@tu.kiele.pl
          </p>
        </div>
      </div>
    </div>
  );
}
