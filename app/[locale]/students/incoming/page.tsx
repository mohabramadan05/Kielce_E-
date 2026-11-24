import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/ui/students/incoming/hero";
import Steps from "@/components/ui/students/incoming/steps";
import Apply from "@/components/ui/students/incoming/apply";
import Docs from "@/components/ui/students/incoming/docs";
import Info from "@/components/ui/students/incoming/information";
import Ready from "@/components/ui/students/incoming/ready";

export default async function IncomingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Steps />
      <Apply />
      <Docs />
      <Info />
      <Ready />
    </div>
  );
}
