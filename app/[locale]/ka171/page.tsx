import Hero from "@/components/ui/KA-171/Hero";
import Countries from "@/components/ui/KA-171/countries";
import Completed from "@/components/ui/KA-171/Completed";
import { setRequestLocale } from "next-intl/server";

export default async function Ka171Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section>
      <Hero />
      <Countries />
      <section className="bg-gray-100 w-full py-8 pb-5">
         <Completed/>
      </section>
    </section>
  );
}
