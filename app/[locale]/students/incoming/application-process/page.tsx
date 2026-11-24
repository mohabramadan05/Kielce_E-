
import type { Metadata } from "next";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { Hero } from "@/components/ui/students/incoming-students/application-process/hero";
import { Process } from "@/components/ui/students/incoming-students/application-process/process";
import { Agreement } from "@/components/ui/students/incoming-students/application-process/agreement";
import { Resources } from "@/components/ui/students/incoming-students/application-process/resources";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ApplicationProcessPage",
  });

  return {
    title: `${t("title")} | Erasmus+ KUT`,
    description: t("intro"),
  };
}

export default async function ApplicationProcessPage({
  params,
}: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "ApplicationProcessPage",
  });

  return (
    <main className="bg-bg text-fg">
      <Hero
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
        scope={t("scope")}
      />

      <Process
        title={t("stepsTitle")}
        subtitle={t("stepsSubtitle")}
        sections={[
          {
            title: t("general.title"),
            items: [
              t("general.eligibility"),
              t("general.academicRecognition"),
              t("general.programmeRules"),
            ],
          },
          {
            title: t("qualification.title"),
            items: [
              t("qualification.homeUniversity"),
              t("qualification.englishLevel"),
            ],
          },
          {
            title: t("nomination.title"),
            items: [
              t("nomination.procedure"),
              t("nomination.requiredDetails"),
            ],
          },
          {
            title: t("registration.title"),
            items: [
              t("registration.acceptanceEmail"),
              t("registration.irkAccount"),
            ],
          },
          {
            title: t("beforeArrival.title"),
            items: [
              t("beforeArrival.insurance"),
              t("beforeArrival.learningAgreement"),
              t("beforeArrival.approval"),
              t("beforeArrival.acceptanceLetter"),
              t("beforeArrival.bankDetails"),
              t("beforeArrival.financialForm"),
              t("beforeArrival.grantSignature"),
            ],
          },
        ]}
      />

      <Agreement
        title={t("agreementTitle")}
        rules={[
          {
            title: t("agreement.duration.title"),
            description: t("agreement.duration.description"),
          },
          {
            title: t("agreement.funding.title"),
            description: t("agreement.funding.description"),
          },
          {
            title: t("agreement.payments.title"),
            description: t("agreement.payments.description"),
          },
          {
            title: t("agreement.changes.title"),
            description: t("agreement.changes.description"),
          },
          {
            title: t("agreement.changesApproval.title"),
            description: t("agreement.changesApproval.description"),
          },
        ]}
        fundingNote={t("fundingNote")}
      />

      <Resources
        title={t("resourcesTitle")}
        description={t("resourcesDescription")}
        registrationLabel={t("resources.registration")}
        coordinatorsLabel={t("resources.coordinators")}
        guidelinesLabel={t("resources.guidelines")}
        grantSampleLabel={t("resources.grantSample")}
        financialFormLabel={t("resources.financialForm")}
        distanceCalculatorLabel={t("resources.distanceCalculator")}
        departureTitle={t("departureTitle")}
        departureText={t("departureText")}
        contactTitle={t("contactTitle")}
      />
    </main>
  );
}
    