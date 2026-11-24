
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  TrainFront,
  ArrowUpRight,
} from "lucide-react";

type InformationProps = {
  addressTitle: string;
  address: string;
  departmentTitle: string;
  travelTitle: string;
  travelDescription: string;
  trainStation: string;
  trainLabel: string;
};

export function Information({
  addressTitle,
  address,
  departmentTitle,
  travelTitle,
  travelDescription,
  trainStation,
  trainLabel,
}: InformationProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-line bg-surface p-7 sm:p-9">
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-xl bg-brand-tint p-3 text-brand-ink">
              <MapPin size={24} />
            </span>
            <h2 className="text-2xl font-extrabold">
              {addressTitle}
            </h2>
          </div>

          <p className="whitespace-pre-line leading-8 text-fg-2">
            {address}
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Kielce+University+of+Technology"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-ink hover:underline"
          >
            Google Maps
            <ArrowUpRight size={17} />
          </a>

          <div className="mt-8 border-t border-line pt-6">
            <div className="mb-4 flex items-center gap-3">
              <Building2 size={23} className="text-brand-ink" />
              <h3 className="text-lg font-bold">
                {departmentTitle}
              </h3>
            </div>

            <div className="space-y-4 text-fg-2">
              <a
                href="tel:+48413424773"
                className="flex items-center gap-3 hover:text-brand-ink"
              >
                <Phone size={19} />
                +48 41 34 24 773
              </a>

              <a
                href="tel:+48413424788"
                className="flex items-center gap-3 hover:text-brand-ink"
              >
                <Phone size={19} />
                +48 41 34 24 788
              </a>

              <a
                href="mailto:erasmus@tu.kielce.pl"
                className="flex items-center gap-3 break-all hover:text-brand-ink"
              >
                <Mail size={19} className="shrink-0" />
                erasmus@tu.kielce.pl
              </a>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-line bg-surface p-7 sm:p-9">
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-xl bg-brand-tint p-3 text-brand-ink">
              <TrainFront size={24} />
            </span>
            <h2 className="text-2xl font-extrabold">
              {travelTitle}
            </h2>
          </div>

          <p className="leading-8 text-fg-2">
            {travelDescription}
          </p>

          <div className="mt-7 rounded-2xl bg-surface-2 p-5">
            <p className="text-sm text-fg-2">
              {trainLabel}
            </p>
            <p className="mt-2 text-xl font-bold">
              {trainStation}
            </p>
          </div>

          <a
            href="https://koleo.pl/en"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            KOLEO
            <ArrowUpRight size={18} />
          </a>
        </article>
      </div>
    </section>
  );
}
