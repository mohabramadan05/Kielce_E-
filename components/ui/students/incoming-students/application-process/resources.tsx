
import {
  ArrowUpRight,
  FileDown,
  Globe2,
  Mail,
} from "lucide-react";

type ResourcesProps = {
  title: string;
  description: string;
  registrationLabel: string;
  coordinatorsLabel: string;
  guidelinesLabel: string;
  grantSampleLabel: string;
  financialFormLabel: string;
  distanceCalculatorLabel: string;
  departureTitle: string;
  departureText: string;
  contactTitle: string;
};

const links = {
  registration: "https://irk.usos.tu.kielce.pl/",
  coordinators: "/students/coordinators",
  guidelines:
    "/students/incoming",
  grantSample:
    "https://erasmus.tu.kielce.pl/wp-content/uploads/2025/02/zalacznik-6-umowa-student-2023-en-2.docx",
  financialForm:
    "https://erasmus.tu.kielce.pl/wp-content/uploads/2024/01/SMS-incoming-application-form_KUT-info-FINANCIAL.docx",
  distanceCalculator:
    "https://erasmus-plus.ec.europa.eu/resources-and-tools/distance-calculator",
};

export function Resources({
  title,
  description,
  registrationLabel,
  coordinatorsLabel,
  guidelinesLabel,
  grantSampleLabel,
  financialFormLabel,
  distanceCalculatorLabel,
  departureTitle,
  departureText,
  contactTitle,
}: ResourcesProps) {
  const resources = [
    {
      title: registrationLabel,
      href: links.registration,
    },
    {
      title: coordinatorsLabel,
      href: links.coordinators,
    },
    {
      title: guidelinesLabel,
      href: links.guidelines,
    },
    {
      title: grantSampleLabel,
      href: links.grantSample,
    },
    {
      title: financialFormLabel,
      href: links.financialForm,
    },
    {
      title: distanceCalculatorLabel,
      href: links.distanceCalculator,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-fg-2">
          {description}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {resources.map((resource) => {
          const external = resource.href.startsWith("http");

          return (
            <a
              key={resource.title}
              href={resource.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:bg-surface-2"
            >
              <div className="flex items-center gap-3">
                <FileDown
                  size={21}
                  className="shrink-0 text-brand-ink"
                />
                <span className="font-semibold">
                  {resource.title}
                </span>
              </div>

              <ArrowUpRight
                size={19}
                className="shrink-0 text-brand-ink"
              />
            </a>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface-2 p-7">
          <Globe2 size={27} className="text-brand-ink" />
          <h3 className="mt-4 text-xl font-bold">
            {departureTitle}
          </h3>
          <p className="mt-4 leading-8 text-fg-2">
            {departureText}
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-surface-2 p-7">
          <Mail size={27} className="text-brand-ink" />
          <h3 className="mt-4 text-xl font-bold">
            {contactTitle}
          </h3>
          <a
            href="mailto:erasmus@tu.kielce.pl"
            className="mt-5 inline-block font-semibold text-brand-ink hover:underline"
          >
            erasmus@tu.kielce.pl
          </a>
        </div>
      </div>
    </section>
  );
}
