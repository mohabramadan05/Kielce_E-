
import type { Metadata } from "next";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import Hero from "@/components/ui/about/overview/hero";
import Introduction from "@/components/ui/about/overview/introduction";
import Opportunities from "@/components/ui/about/overview/opportunities";
import University from "@/components/ui/about/overview/university";
import Documents from "@/components/ui/about/overview/documents";
import Leaflets from "@/components/ui/about/overview/leaflets";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "AboutPage",
  });

  return {
    title: `${t("title")} | Erasmus+ KUT`,
    description: t("intro"),
  };
}

export default async function AboutPage({
  params,
}: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("AboutPage");

  return (
    <main className="bg-bg text-fg">

      {/* 1. HERO */}
      <Hero
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
        explore={t("explore")}
      />

      {/* 2. INTRODUCTION */}
      <Introduction
        whatLabel={t("whatLabel")}
        whatTitle={t("whatTitle")}
        whatText1={t("whatText1")}
        whatText2={t("whatText2")}
        periodTitle={t("periodTitle")}
        periodText={t("periodText")}
        budgetLabel={t("budgetLabel")}
        billion={t("billion")}
      />

      {/* 3. OPPORTUNITIES */}
      <Opportunities
        label={t("opportunitiesLabel")}
        title={t("opportunitiesTitle")}
        intro={t("opportunitiesIntro")}
        items={[
          {
            key: "study",
            title: t("opportunities.study.title"),
            description: t("opportunities.study.description"),
          },
          {
            key: "traineeship",
            title: t("opportunities.traineeship.title"),
            description: t("opportunities.traineeship.description"),
          },
          {
            key: "staff",
            title: t("opportunities.staff.title"),
            description: t("opportunities.staff.description"),
          },
          {
            key: "blended",
            title: t("opportunities.blended.title"),
            description: t("opportunities.blended.description"),
          },
        ]}
      />

      {/* 4. UNIVERSITY */}
      <University
        label={t("kutLabel")}
        title={t("kutTitle")}
        text={t("kutText")}
        charterText={t("charterText")}
        identifiers={t("identifiers")}
        locale={locale}
      />

      {/* 5. OFFICIAL DOCUMENTS */}
      <Documents
        title={t("documentsTitle")}
        intro={t("documentsIntro")}
        charter={t("documents.charter")}
        policy={t("documents.policy")}
        inclusion={t("documents.inclusion")}
      />

      {/* 6. ERASMUS+ LEAFLETS */}
      <Leaflets locale={locale} />

      {/* 7. PARTNER UNIVERSITIES CTA */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-3xl bg-brand px-7 py-9 text-white sm:flex-row sm:items-center sm:px-10">
          <div>
            <h2 className="text-2xl font-extrabold">
              {t("ctaTitle")}
            </h2>

            <p className="mt-2 text-white/80">
              {t("ctaText")}
            </p>
          </div>

          <a
            href={`/${locale}/students/partner-universities`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#11406e] transition hover:bg-gray-100"
          >
            {t("ctaButton")}
          </a>
        </div>
      </section>

    </main>
  );
}
