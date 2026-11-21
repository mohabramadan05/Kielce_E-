import { getTranslations } from "next-intl/server";
import { Box } from "lucide-react";

export default async function Hero() {
  const t = await getTranslations("Coordinators");
  return (
    <div className="w-full h-min p-4 md:p-8 lg:p-16 flex flex-col gap-6 justify-center items-center bg-bg">
      <span className="px-4 py-2 text-sm md:text-base text-brand font-black bg-brand-tint/70 rounded-full">
        {t("get")}
      </span>
      <h1 className="text-3xl md:text-5xl font-black text-fg">{t("title")}</h1>
      <p className="w-[90%] md:w-1/3 text-fg-2 text-center text-lg">{t("desc")}</p>
      <div className="flex flex-row w-[90%] md:w-1/2 p-2 md:p-8 gap-3 md:gap-6 rounded-3xl bg-brand items-center">
        <span className="text-white text-xs md:text-base w-min h-min p-3 md:p-4 bg-white/20 rounded-full">
          <Box />
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-gray-300 text-xs md:text-base"> {t("eur-cor")}</p>
          <h1 className="text-white text-base md:text-2xl font-bold"> Anna Kasztelewicz, Ma.</h1>
          <p className="text-gray-300 text-xs md:text-base"> 
            {t("building")} C . {t("room")} 4.21 . +48 41 34 24 773 .
            erasmus@tu.kiele.pl
          </p>
        </div>
      </div>
    </div>
  );
}
