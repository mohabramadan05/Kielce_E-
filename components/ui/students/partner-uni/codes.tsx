import { getTranslations } from "next-intl/server";
import weaii from "../../../../assets/logo-weaii.png";
import wbia from "../../../../assets/logo-wbia.png";
import wisge from "../../../../assets/logo-wisge.png";
import wmibm from "../../../../assets/logo-wmibm.png";
import wzimk from "../../../../assets/logo-wzimk.png";
import Image from "next/image";
import Link from "next/link";

export default async function Codes() {
  const t = await getTranslations("partner");
  return (
    <div className="w-full h-min p-10 flex flex-col gap-6 justify-start items-start bg-bg">
      <h1 className="font-black text-lg md:text-2xl">{t("isced-f-codes")}</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-row lg:flex-col gap-2 flex-1 justify-center items-center">
          <div className="flex flex-row items-center gap-2 md:gap-4 md:flex-1">
            <Image src={wbia} alt="wbia" className="w-22 h-8" />
            <p className="font-semibold">{t("wbia")}</p>
          </div>
          <span className="border-line h-20 w-0 lg:h-0 lg:w-full border" />
          <p className="text-brand-ink font-semibold">0730, 0732</p>
        </div>
        <span className="border border-line w-[90%] h-0 lg:w-0 lg:h-50" />
        <div className="flex flex-row lg:flex-col gap-2 flex-1 justify-center items-center">
          <div className="flex flex-row items-center gap-2 md:gap-4 md:flex-1">
            <Image src={wmibm} alt="wmibm" className="w-22 h-8" />
            <p className="font-semibold">{t("wmibm")}</p>
          </div>
          <span className="border-line h-20 w-0 lg:h-0 lg:w-full border" />
          <p className="text-brand-ink font-semibold">0710, 0715</p>
        </div>{" "}
        <span className="border border-line w-[90%] h-0 lg:w-0 lg:h-50" />
        <div className="flex flex-row lg:flex-col gap-2 flex-1 justify-center items-center">
          <div className="flex flex-row items-center gap-2 md:gap-4 md:flex-1">
            <Image src={wzimk} alt="wzimk" className="w-22 h-8" />
            <p className="font-semibold">{t("wzimk")}</p>
          </div>
          <span className="border-line h-20 w-0 lg:h-0 lg:w-full border" />
          <p className="text-brand-ink font-semibold">0311, 0410, 0610</p>
        </div>{" "}
        <span className="border border-line w-[90%] h-0 lg:w-0 lg:h-50" />
        <div className="flex flex-row lg:flex-col gap-2 flex-1 justify-center items-center">
          <div className="flex flex-row items-center gap-2 md:gap-4 md:flex-1">
            <Image src={weaii} alt="weaii" className="w-22 h-8" />
            <p className="font-semibold">{t("weaii")}</p>
          </div>
          <span className="border-line h-20 w-0 lg:h-0 lg:w-full border" />
          <p className="text-brand-ink font-semibold">0610, 0713</p>
        </div>{" "}
        <span className="border border-line w-[90%] h-0 lg:w-0 lg:h-50" />
        <div className="flex flex-row lg:flex-col gap-2 flex-1 justify-center items-center">
          <div className="flex flex-row items-center gap-2 md:gap-4 md:flex-1">
            <Image src={wisge} alt="wisge" className="w-22 h-8" />
            <p className="font-semibold">{t("wisge")}</p>
          </div>
          <span className="border-line h-20 w-0 lg:h-0 lg:w-full border" />
          <p className="text-brand-ink font-semibold">0520, 0532, 0712</p>
        </div>
      </div>
      <Link
        className="bg-brand text-[#eee] mt-2 px-6 py-3 rounded-full font-bold text-sm md:text-base"
        href="/contact"
      >
        {t("download-btn")} →
      </Link>
    </div>
  );
}
