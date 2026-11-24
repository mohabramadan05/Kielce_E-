import { getTranslations } from "next-intl/server";

export default async function Dept() {
  const t = await getTranslations("Coordinators");
  return (
    <div className="w-full h-min bg-surface-2 px-6 py-5 lg:py-16 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-center text-text text-base md:text-2xl font-black">{t("dept-staff")}</h1>
      <p className="text-center text-sm md:text-base text-fg-2">
        al. Tysiąclecia Państwa Polskiego 7, 25-314 Kielce — {t("room")} 4.09,
        4.20, 4.21, {t("building")} C
      </p>
      <p className="text-center text-sm md:text-base text-fg-2">+48 41 34 24 773 · +48 41 34 24 788 · erasmus@tu.kielce.pl</p>
    </div>
  );
}
