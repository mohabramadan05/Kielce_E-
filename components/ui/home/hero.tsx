import Image from "next/image";
import Link from "next/link";
import hero from "../../../assets/hero.jpg";
import { getTranslations } from "next-intl/server";

export default async  function  Hero() {
  const t = await getTranslations("HomePage");

  return (
    <div className="w-full h-min relative">
      <Image src={hero} className="w-full z-40  " alt="hero" />
      <div className="w-full h-full z-50 absolute top-0 left-0  bg-linear-to-b from-transparent to-gray-700 flex flex-col gap-6 justify-center items-center">
        <span className="px-4 py-2 text-white font-bold bg-gray-400/40 rounded-full">{t("title")}</span>
        <h1 className="text-4xl font-black text-white">{t("sub-title")}</h1>
        <p className="w-1/3 text-white text-center text-lg">{t("desc")}</p>
        <div className="flex gap-5 ">
          <Link className="bg-line text-brand-ink px-6 py-3 rounded-full font-bold" href="/students/incoming" >{t("incoming")} →</Link>
          <Link className="bg-gray-400/40 text-white px-6 py-3 rounded-full font-bold" href="/students/outgoing" >{t("outgoing")} →</Link>
        </div>
      </div>
    </div>
  );
}
