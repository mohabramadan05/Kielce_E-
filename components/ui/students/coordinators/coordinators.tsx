import { getTranslations } from "next-intl/server";
import weaii from "../../../../assets/logo-weaii.png";
import wbia from "../../../../assets/logo-wbia.png";
import wisge from "../../../../assets/logo-wisge.png";
import wmibm from "../../../../assets/logo-wmibm.png";
import wzimk from "../../../../assets/logo-wzimk.png";
import Image from "next/image";

export default async function Coordinators() {
  const t = await getTranslations("Coordinators");
  return (
    <div className="w-full h-min px-16 pb-8 grid grid-cols-2 gap-6 justify-center items-start bg-bg">
      <div className="group relative gap-3 flex w-full flex-col rounded-3xl border-t-[3px] border-t-[#EF7A1B] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2">
        <div className="flex gap-4 items-center">
          <Image src={weaii} alt="weaii" className="w-22 h-8" />
          <h1 className="font-black text-lg text-text">{t("weaii")}</h1>
        </div>
        <span className="border-t border-line "></span>
        <div className="flex flex-col gap-1 ">
          <p className="text-[#EF7A1B] font-semibold">{t("study")}</p>
          <p className="text-fg font-bold text-lg">Dorota Wiraszka PhD, eng.</p>
          <p className="text-fg-2">
            {t("room")} 4.26 · +48 41 34 24 141 · d.wiraszka@tu.kielce.pl
          </p>
        </div>
        <span className="border-t border-line "></span>
        <div className="flex flex-col gap-1">
          <p className="text-[#EF7A1B] font-semibold">{t("intern")}</p>
          <p className="text-fg font-bold text-lg">
            Arkadiusz Chrobot PhD, Eng.
          </p>
          <p className="text-fg-2">
            {t("room")} 3.23 · +48 41 34 24 185 · a.chrobot@tu.kielce.pl
          </p>
        </div>
      </div>
      <div className="group relative gap-3 flex w-full flex-col rounded-3xl border-t-[3px] border-t-[#224382] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2">
        <div className="flex gap-4 items-center">
          <Image src={wmibm} alt="weaii" className="w-22 h-8" />
          <h1 className="font-black text-lg text-text">{t("wmibm")}</h1>
        </div>
        <span className="border-t border-line "></span>
        <div className="flex flex-col gap-1 ">
          <p className="text-[#224382] font-semibold">{t("study")}</p>
          <p className="text-fg font-bold text-lg">
            Sebastian Lipiec PhD, eng.
          </p>
          <p className="text-fg-2">
            {t("room")} 2.29 · +48 41 34 24 714 · slipiec@tu.kielce.pl
          </p>
        </div>
        <span className="border-t border-line "></span>
        <div className="flex flex-col gap-1">
          <p className="text-[#224382] font-semibold">{t("intern")}</p>
          <p className="text-fg font-bold text-lg">
            Damian Gogolewski PhD, Eng.
          </p>
          <p className="text-fg-2">
            {t("room")} 2.16 · +48 41 34 24 453 · dgogolewski@tu.kielce.pl
          </p>
        </div>
      </div>
      <div className="group relative gap-3 flex w-full flex-col rounded-3xl border-t-[3px] border-t-[#898989] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2">
        <div className="flex gap-4 items-center">
          <Image src={wzimk} alt="weaii" className="w-22 h-8" />
          <h1 className="font-black text-lg text-text">{t("wzimk")}</h1>
        </div>
        <span className="border-t border-line "></span>
        <div className="flex flex-col gap-1 ">
          <p className="text-[#898989] font-semibold">{t("study")}</p>
          <p className="text-fg font-bold text-lg">Joanna Radowicz PhD.</p>
          <p className="text-fg-2">
            {t("room")} 2.29 · +48 41 34 24 309 · jradowicz@tu.kielce.pl
          </p>
        </div>
      </div>
      <div className="group relative gap-3 flex w-full flex-col rounded-3xl border-t-[3px] border-t-[#7C2727] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2">
        <div className="flex gap-4 items-center">
          <Image src={wbia} alt="weaii" className="w-22 h-8" />
          <h1 className="font-black text-lg text-text">{t("wbia")}</h1>
        </div>
        <span className="border-t border-line "></span>
        <div className="flex flex-col gap-1 ">
          <p className="text-[#7C2727] font-semibold">{t("study")}</p>
          <p className="text-fg font-bold text-lg">Adam Kłak PhD, eng.</p>
          <p className="text-fg-2">
            {t("room")} 2.01 · +48 41 34 24 697 · adamklak@tu.kielce.pl
          </p>
        </div>
      </div>
      <div className="group relative gap-3 flex w-full flex-col rounded-3xl border-t-[3px] border-t-[#006842] bg-surface p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2">
        <div className="flex gap-4 items-center">
          <Image src={wisge} alt="weaii" className="w-22 h-8" />
          <h1 className="font-black text-lg text-text">{t("wisge")}</h1>
        </div>
        <span className="border-t border-line "></span>
        <div className="flex flex-col gap-1 ">
          <p className="text-[#006842] font-semibold">{t("study-intern")}</p>
          <p className="text-fg font-bold text-lg">
            Agnieszka Cienciała PhD, Eng.
          </p>
          <p className="text-fg-2">
            {t("room")} 5.04 · +48 41 34 24 859 · acienciala@tu.kielce.pl
          </p>
        </div>
      </div>
    </div>
  );
}
