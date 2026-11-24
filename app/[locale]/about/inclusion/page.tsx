
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/ui/about/inclusion/hero";
import { Introduction } from "@/components/ui/about/inclusion/introduction";
import { Barriers } from "@/components/ui/about/inclusion/barriers";
import { Support } from "@/components/ui/about/inclusion/support";
import { Commitments } from "@/components/ui/about/inclusion/commitments";
import { Documents } from "@/components/ui/about/inclusion/documents";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "InclusionPage",
  });

  return {
    title: `${t("title")} | Erasmus+ KUT`,
    description: t("subtitle"),
  };
}

export default async function InclusionPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "InclusionPage",
  });

  return (
    <main className="bg-bg text-fg">
      <Hero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Introduction
        title={t("introductionTitle")}
        description={t("introductionText")}
      />

      <Barriers
        objectivesTitle={t("objectivesTitle")}
        objectivesIntro={t("objectivesIntro")}
        objectives={[
          {
            title: t("objectives.participation.title"),
            description: t("objectives.participation.description"),
          },
          {
            title: t("objectives.access.title"),
            description: t("objectives.access.description"),
          },
          {
            title: t("objectives.equalOpportunities.title"),
            description: t("objectives.equalOpportunities.description"),
          },
          {
            title: t("objectives.awareness.title"),
            description: t("objectives.awareness.description"),
          },
        ]}
        targetsTitle={t("targetsTitle")}
        targetsIntro={t("targetsIntro")}
        targets={[
          t("targets.financialDifficulties"),
          t("targets.disabilities"),
          t("targets.minorities"),
          t("targets.healthConditions"),
          t("targets.familyResponsibilities"),
        ]}
      />

      <Support
        title={t("activitiesTitle")}
        intro={t("activitiesIntro")}
        initiatives={[
          {
            title: t("initiatives.financialSupport.title"),
            description: t("initiatives.financialSupport.description"),
          },
          {
            title: t("initiatives.advisorySupport.title"),
            description: t("initiatives.advisorySupport.description"),
          },
          {
            title: t("initiatives.accessibleInfrastructure.title"),
            description: t("initiatives.accessibleInfrastructure.description"),
          },
          {
            title: t("initiatives.inclusionTraining.title"),
            description: t("initiatives.inclusionTraining.description"),
          },
          {
            title: t("initiatives.organisationCooperation.title"),
            description: t("initiatives.organisationCooperation.description"),
          },
          {
            title: t("initiatives.informationAccess.title"),
            description: t("initiatives.informationAccess.description"),
          },
        ]}
      />

      <Commitments
        monitoringTitle={t("monitoringTitle")}
        monitoringText={t("monitoringText")}
        summaryTitle={t("summaryTitle")}
        summaryText={t("summaryText")}
      />

      <Documents
        title={t("documentTitle")}
        description={t("documentText")}
        languageNote={t("documentLanguage")}
        downloadLabel={t("download")}
      />
    </main>
  );
}
