import Image from "next/image";
import Link from "next/link";
import hero from "../../../assets/test.jpg";
import { getTranslations } from "next-intl/server";

export default async  function  Hero() {
  const t = await getTranslations("HomePage");

  return (
    <div className="w-full h-min relative">
      <Image src={hero} className="w-full z-40  " alt="hero" />
      <div className="w-full h-full z-50 absolute top-0 left-0  bg-linear-to-l from-transparent to-gray-700 flex flex-col gap-6 justify-center items-start p-16">
        <span className="px-4 py-2 text-white font-bold bg-gray-400/40 rounded-full">{t("stories")}</span>
        <h1 className="text-4xl font-black text-white">{t("testimonials")}</h1>
        <p className="w-1/3 text-white  text-lg">{t("testimonials-desc")}</p>
        <div className="flex gap-5 ">
          <Link className="bg-line text-brand-ink px-6 py-3 rounded-full font-bold" href="/testimonials" >{t("testimonials-btn")} →</Link>
        </div>
      </div>
    </div>
  );
}
