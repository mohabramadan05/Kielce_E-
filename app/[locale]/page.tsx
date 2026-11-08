import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "../../components/ui/home/hero";
import Why from "../../components/ui/home/why";
import Testimonials from "../../components/ui/home/testimonials";
import GetStarted from "../../components/ui/home/get";
import Contact from "../../components/ui/home/contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Why />
      <Testimonials />
      <GetStarted/>
      <Contact />
    </div>
  );
}
