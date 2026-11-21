
import type { Metadata } from "next";
import {
  Accessibility,
  ArrowDownToLine,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  HandHeart,
  HeartHandshake,
  Target,
  Users,
} from "lucide-react";

type Locale = "en" | "pl";

const content = {
  en: {
    badge: "Erasmus+ Programme",
    title: "Inclusion Strategy",
    subtitle:
      "Creating equal opportunities and removing barriers to international education and mobility.",

    introduction: "Introduction",
    introText:
      "The Kielce University of Technology's Inclusion and Equal Opportunities Strategy was created to ensure equal opportunities for all students and staff, especially those with fewer opportunities. This strategy encompasses activities that support inclusion within international mobility programs such as Erasmus+ and other university initiatives. Our goal is to promote diversity and inclusion and eliminate barriers that may hinder participation in education and mobility programs.",

    objectives: "Strategy Objectives",
    objectivesIntro: "Our main goals are:",
    objectivesList: [
      {
        title: "Increase participation",
        description:
          "Increasing the participation of students with fewer opportunities (e.g. people with economic, health, or disability difficulties) in Erasmus+ mobility programmes by 25% over the next 5 years.",
      },
      {
        title: "Improve access",
        description:
          "Increasing access to international programs by removing financial, informational and logistical barriers.",
      },
      {
        title: "Ensure equal opportunities",
        description:
          "Ensuring equal opportunities in all aspects of academic life, including study trips and internships abroad.",
      },
      {
        title: "Raise awareness",
        description:
          "Raising awareness of inclusion and diversity among students and university staff through training, workshops and information campaigns.",
      },
    ],

    targetGroups: "Target Groups",
    targetIntro: "This strategy is aimed at:",
    targets: [
      "People with financial difficulties who may have limited access to mobility programmes due to cost.",
      "Students and employees with disabilities.",
      "People from social, cultural or ethnic minorities.",
      "People with health problems who may require special support during mobility.",
      "Students caring for children or family members.",
    ],

    activities: "Activities and Initiatives",
    activitiesIntro:
      "The university implements the following measures to support inclusive participation:",

    initiatives: [
      {
        title: "Financial support",
        description:
          "Providing additional financial support to students with fewer opportunities benefiting from Erasmus+ mobility programmes, such as scholarships to cover additional costs related to mobility.",
      },
      {
        title: "Individual advisory support",
        description:
          "Providing access to advisors specializing in the needs of students with fewer opportunities. Each student can benefit from individual consultations about travel options, preparation for departure, and support during their stay abroad.",
      },
      {
        title: "Adaptation of infrastructure and services",
        description:
          "The university ensures that the infrastructure is fully adapted to the needs of people with disabilities.",
      },
      {
        title: "Inclusion training and workshops",
        description:
          "Organizing workshops and training for employees and students on diversity, inclusion, and anti-discrimination. The goal is to increase awareness and knowledge of the needs of people with fewer opportunities.",
      },
      {
        title:
          "Cooperation with non-governmental and student organizations",
        description:
          "Collaboration with organizations supporting people with disabilities, student organizations, and local NGOs promoting equality and social integration.",
      },
      {
        title: "Easier access to information",
        description:
          "Information on the website regarding support for students with fewer opportunities, including rules for obtaining additional financial support, guides to partner universities, and other resources.",
      },
    ],

    monitoring: "Monitoring and Evaluation",
    monitoringText:
      "To assess the effectiveness of its inclusion strategy, the university will regularly conduct satisfaction surveys and analyze participation rates of people with fewer opportunities in mobility programs. The results of these evaluations will be included in annual reports and will serve as a basis for further improvements.",

    summary: "Summary",
    summaryText:
      "Kielce University of Technology strives to create an academic environment that supports diversity and inclusion. Our inclusion strategy is a key element of this effort and reflects our commitment to ensuring that every student, regardless of their background, can fully benefit from the opportunities offered by Erasmus+ and other international initiatives.",

    documentTitle: "Official Inclusion Strategy Document",
    documentText:
      "Download the official Inclusion Strategy document of Kielce University of Technology.",
    download: "Download PDF",
    documentLanguage: "(This document is in Polish)",
  },

  pl: {
    badge: "Program Erasmus+",
    title: "Strategia włączenia społecznego",
    subtitle:
      "Tworzenie równych szans i eliminowanie barier w edukacji międzynarodowej oraz mobilności.",

    introduction: "Wprowadzenie",
    introText:
      "Strategia włączenia społecznego i równych szans Politechniki Świętokrzyskiej została opracowana w celu zapewnienia równych możliwości wszystkim studentom i pracownikom, szczególnie osobom z mniejszymi szansami. Strategia obejmuje działania wspierające włączenie społeczne w ramach programów mobilności międzynarodowej, takich jak Erasmus+, oraz innych inicjatyw uczelni. Naszym celem jest promowanie różnorodności i integracji oraz eliminowanie barier utrudniających uczestnictwo w edukacji i programach mobilności.",

    objectives: "Cele strategii",
    objectivesIntro: "Nasze główne cele to:",
    objectivesList: [
      {
        title: "Zwiększenie uczestnictwa",
        description:
          "Zwiększenie udziału studentów z mniejszymi szansami, w tym osób z trudnościami ekonomicznymi, zdrowotnymi lub niepełnosprawnościami, w programach mobilności Erasmus+ o 25% w ciągu najbliższych 5 lat.",
      },
      {
        title: "Poprawa dostępności",
        description:
          "Zwiększenie dostępu do programów międzynarodowych poprzez usuwanie barier finansowych, informacyjnych i logistycznych.",
      },
      {
        title: "Zapewnienie równych szans",
        description:
          "Zapewnienie równych szans we wszystkich aspektach życia akademickiego, w tym podczas wyjazdów na studia i praktyki za granicą.",
      },
      {
        title: "Zwiększenie świadomości",
        description:
          "Zwiększanie świadomości na temat włączenia społecznego i różnorodności wśród studentów i pracowników uczelni poprzez szkolenia, warsztaty i kampanie informacyjne.",
      },
    ],

    targetGroups: "Grupy docelowe",
    targetIntro: "Strategia skierowana jest do:",
    targets: [
      "Osób znajdujących się w trudnej sytuacji finansowej, dla których koszty mogą ograniczać dostęp do programów mobilności.",
      "Studentów i pracowników z niepełnosprawnościami.",
      "Osób należących do mniejszości społecznych, kulturowych lub etnicznych.",
      "Osób z problemami zdrowotnymi, które mogą wymagać specjalnego wsparcia podczas mobilności.",
      "Studentów sprawujących opiekę nad dziećmi lub członkami rodziny.",
    ],

    activities: "Działania i inicjatywy",
    activitiesIntro:
      "Uczelnia realizuje następujące działania wspierające uczestnictwo wszystkich osób:",

    initiatives: [
      {
        title: "Wsparcie finansowe",
        description:
          "Zapewnienie dodatkowego wsparcia finansowego studentom z mniejszymi szansami uczestniczącym w programach mobilności Erasmus+, na przykład poprzez stypendia pokrywające dodatkowe koszty związane z wyjazdem.",
      },
      {
        title: "Indywidualne wsparcie doradcze",
        description:
          "Zapewnienie dostępu do doradców specjalizujących się w potrzebach studentów z mniejszymi szansami. Każdy student może skorzystać z indywidualnych konsultacji dotyczących możliwości wyjazdu, przygotowania do mobilności oraz wsparcia podczas pobytu za granicą.",
      },
      {
        title: "Dostosowanie infrastruktury i usług",
        description:
          "Uczelnia zapewnia pełne dostosowanie infrastruktury do potrzeb osób z niepełnosprawnościami.",
      },
      {
        title: "Szkolenia i warsztaty dotyczące włączenia społecznego",
        description:
          "Organizowanie warsztatów i szkoleń dla pracowników i studentów na temat różnorodności, włączenia społecznego i przeciwdziałania dyskryminacji. Ich celem jest zwiększenie świadomości i wiedzy o potrzebach osób z mniejszymi szansami.",
      },
      {
        title:
          "Współpraca z organizacjami pozarządowymi i studenckimi",
        description:
          "Współpraca z organizacjami wspierającymi osoby z niepełnosprawnościami, organizacjami studenckimi oraz lokalnymi organizacjami pozarządowymi promującymi równość i integrację społeczną.",
      },
      {
        title: "Łatwiejszy dostęp do informacji",
        description:
          "Udostępnianie na stronie internetowej informacji o wsparciu dla studentów z mniejszymi szansami, w tym zasad uzyskiwania dodatkowego wsparcia finansowego, przewodników po uczelniach partnerskich i innych materiałów.",
      },
    ],

    monitoring: "Monitorowanie i ewaluacja",
    monitoringText:
      "Aby ocenić skuteczność strategii włączenia społecznego, uczelnia będzie regularnie przeprowadzać badania satysfakcji oraz analizować poziom uczestnictwa osób z mniejszymi szansami w programach mobilności. Wyniki tych ocen będą uwzględniane w corocznych raportach i posłużą jako podstawa do dalszych usprawnień.",

    summary: "Podsumowanie",
    summaryText:
      "Politechnika Świętokrzyska dąży do stworzenia środowiska akademickiego wspierającego różnorodność i integrację. Nasza strategia włączenia społecznego jest kluczowym elementem tych działań i odzwierciedla nasze zaangażowanie w zapewnienie każdemu studentowi, niezależnie od jego pochodzenia i sytuacji życiowej, możliwości pełnego korzystania z oferty programu Erasmus+ oraz innych inicjatyw międzynarodowych.",

    documentTitle: "Oficjalny dokument strategii włączenia",
    documentText:
      "Pobierz oficjalny dokument Strategii włączenia społecznego Politechniki Świętokrzyskiej.",
    download: "Pobierz PDF",
    documentLanguage: "",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const language: Locale = locale === "pl" ? "pl" : "en";
  const t = content[language];

  return {
    title: `${t.title} | Erasmus+ KUT`,
    description: t.subtitle,
  };
}

function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="mb-7 flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-tint text-brand-ink">
        <Icon size={24} />
      </span>

      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default async function InclusionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const language: Locale = locale === "pl" ? "pl" : "en";
  const t = content[language];

  return (
    <main className="bg-bg text-fg">
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">
            <Accessibility size={17} />
            {t.badge}
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* 1. INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading icon={BookOpen} title={t.introduction} />

        <p className="max-w-4xl leading-8 text-fg-2">
          {t.introText}
        </p>
      </section>

      {/* 2. OBJECTIVES */}
      <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Target} title={t.objectives} />

          <p className="mb-8 leading-8 text-fg-2">
            {t.objectivesIntro}
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {t.objectivesList.map((item, index) => (
              <article
                key={index}
                className="rounded-2xl border border-line bg-surface p-7"
              >
                <span className="inline-flex rounded-xl bg-brand-tint p-3 text-brand-ink">
                  <CheckCircle2 size={25} />
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-fg-2">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TARGET GROUPS */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading icon={Users} title={t.targetGroups} />

        <p className="mb-8 leading-8 text-fg-2">
          {t.targetIntro}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {t.targets.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-2xl border border-line bg-surface-2 p-6"
            >
              <HandHeart
                size={23}
                className="mt-1 shrink-0 text-brand-ink"
              />

              <p className="leading-7 text-fg-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ACTIVITIES AND INITIATIVES */}
      <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={HeartHandshake} title={t.activities} />

          <p className="mb-8 leading-8 text-fg-2">
            {t.activitiesIntro}
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {t.initiatives.map((item, index) => (
              <article
                key={index}
                className="rounded-2xl border border-line bg-surface p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-tint font-bold text-brand-ink">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-fg-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MONITORING */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading icon={ClipboardCheck} title={t.monitoring} />

        <p className="max-w-4xl leading-8 text-fg-2">
          {t.monitoringText}
        </p>
      </section>

      {/* 6. SUMMARY */}
      <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading icon={Globe2} title={t.summary} />

          <p className="max-w-4xl leading-8 text-fg-2">
            {t.summaryText}
          </p>
        </div>
      </section>

      {/* PDF DOCUMENT DOWNLOAD */}
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-brand p-8 text-white md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                {t.documentTitle}
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-white/85">
                {t.documentText}
              </p>

              <p className="mt-3 text-sm text-white/70">
                {t.documentLanguage}
              </p>
            </div>

            <a
              href="/assets/Strategia-wlaczenia.pdf"
              download="Strategia-wlaczenia.pdf"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-[#11406e] transition hover:bg-gray-100"
            >
              <ArrowDownToLine size={20} />
              {t.download}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
