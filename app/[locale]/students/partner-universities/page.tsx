import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/ui/students/partner-uni/hero";
import List from "@/components/ui/students/partner-uni/list";
import Codes from "@/components/ui/students/partner-uni/codes";
import Partnership from "@/components/ui/students/partner-uni/partnership";
import PartnerMap from "@/components/ui/students/partner-uni/PartnerMap";

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
      <List />
      <Codes />
      <PartnerMap />
      <Partnership />
    </div>
  );
}
