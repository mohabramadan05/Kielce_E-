import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/ui/students/outgoing/hero";
import Cards from "@/components/ui/students/outgoing/cards";
import Apply from "@/components/ui/students/outgoing/apply";
import Details from "@/components/ui/students/outgoing/details";
import Ready from "@/components/ui/students/outgoing/ready";

export default async function CoordinatorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Cards />
      <Apply/>
      <Details/>
      <Ready/>
    </div>
  );
}
