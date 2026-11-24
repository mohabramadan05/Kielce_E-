import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/ui/contact/hero";
import { Information } from "@/components/ui/contact/information";
import { Campus } from "@/components/ui/contact/campus";
import { Transport } from "@/components/ui/contact/transport";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ContactPage",
  });

  return {
    title: `${t("title")} | Erasmus+ KUT`,
    description: t("intro"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "ContactPage",
  });

  return (
    <div className="bg-bg text-fg">
      <Hero
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
      />

      <Information
        addressTitle={t("addressTitle")}
        address={t("address")}
        departmentTitle={t("departmentTitle")}
        travelTitle={t("travelTitle")}
        travelDescription={t("travelDescription")}
        trainStation={t("trainStation")}
        trainLabel={t("trainLabel")}
      />

      <Campus
        title={t("campusTitle")}
        description={t("campusDescription")}
        openMap={t("openMap")}
        universityStop={t("universityStop")}
        dormitoryStop={t("dormitoryStop")}
        universityStopLabel={t("universityStopLabel")}
        dormitoryStopLabel={t("dormitoryStopLabel")}
        ticketTitle={t("ticketTitle")}
        ticketNote={t("ticketNote")}
      />

      <Transport
        title={t("appsTitle")}
        description={t("appsIntro")}
        appStoreLabel={t("appStoreLabel")}
        googlePlayLabel={t("googlePlayLabel")}
        jakdojadeDescription={t("apps.jakdojade.description")}
        boltDescription={t("apps.bolt.description")}
        uberDescription={t("apps.uber.description")}
      />
    </div>
  );
}
