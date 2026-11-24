
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/ui/about/policy/hero";
import { Introduction } from "@/components/ui/about/policy/introduction";
import { Strategy } from "@/components/ui/about/policy/strategy";
import { Erasmus } from "@/components/ui/about/policy/erasmus";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  return locale === "pl"
    ? {
        title: "Deklaracja polityki | Erasmus+ KUT",
        description:
          "Deklaracja polityki Erasmus+ Politechniki Świętokrzyskiej.",
      }
    : {
        title: "Policy Statement | Erasmus+ KUT",
        description:
          "Erasmus+ Policy Statement of Kielce University of Technology.",
      };
}

export default async function PolicyStatementPage({
  params,
}: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "PolicyPage",
  });

  return (
    <main className="bg-bg text-fg">
      <Hero
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
      />

      <Introduction
        title={t("universityTitle")}
        history={t("universityHistory")}
        origins={t("universityOrigins")}
        dates={[
          {
            label: t("originsLabel"),
            year: t("originsYear"),
            description: t("originsDescription"),
          },
          {
            label: t("establishmentLabel"),
            year: t("establishmentYear"),
            description: t("establishmentDescription"),
          },
        ]}
        tasksTitle={t("tasksTitle")}
        tasksDescription={t("tasksDescription")}
        tasks={[
          t("tasks.research"),
          t("tasks.studentEducation"),
          t("tasks.doctoralEducation"),
          t("tasks.staffTraining"),
          t("tasks.accessibility"),
          t("tasks.civicResponsibility"),
          t("tasks.physicalEducation"),
          t("tasks.knowledgeSharing"),
          t("tasks.communityEngagement"),
        ]}
      />

      <Strategy
        title={t("strategyTitle")}
        description={t("strategyDescription")}
        goals={[
          t("strategyGoals.studentNumbers"),
          t("strategyGoals.researchDevelopment"),
          t("strategyGoals.europeanCompetitiveness"),
          t("strategyGoals.academicPartnerships"),
          t("strategyGoals.internationalPosition"),
        ]}
        internationalisationTitle={t("internationalisationTitle")}
        internationalisation={[
          t("internationalisation.multiculturalCommunity"),
          t("internationalisation.globalEducation"),
          t("internationalisation.internationalCooperation"),
          t("internationalisation.erasmusPartnerships"),
          t("internationalisation.researchNetworks"),
          t("internationalisation.europeanIntegration"),
        ]}
      />

      <Erasmus
        participationTitle={t("erasmusTitle")}
        participation={[
          t("erasmus.programmeDevelopment"),
          t("erasmus.digitalModernisation"),
          t("erasmus.innovativeTeaching"),
          t("erasmus.researchOpportunities"),
          t("erasmus.staffMobility"),
          t("erasmus.culturalExchange"),
          t("erasmus.programmePromotion"),
        ]}
        mobilityTitle={t("mobilityTitle")}
        mobility={[
          t("mobility.educationQuality"),
          t("mobility.exchangeOpportunities"),
          t("mobility.internationalAccess"),
          t("mobility.universityCooperation"),
          t("mobility.studentDevelopment"),
          t("mobility.mobilityBenefits"),
        ]}
        inclusionTitle={t("inclusionTitle")}
        inclusion={[
          t("inclusion.multiculturalEnvironment"),
          t("inclusion.financialSupport"),
          t("inclusion.technologicalProgress"),
          t("inclusion.inclusiveFuture"),
        ]}
      />
    </main>
  );
}
