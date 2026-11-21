
import {
  GraduationCap,
  BriefcaseBusiness,
  Users,
  Globe2,
} from "lucide-react";

type OpportunityKey =
  | "study"
  | "traineeship"
  | "staff"
  | "blended";

type OpportunityItem = {
  key: OpportunityKey;
  title: string;
  description: string;
};

type OpportunitiesProps = {
  label: string;
  title: string;
  intro: string;
  items: OpportunityItem[];
};

const icons = {
  study: GraduationCap,
  traineeship: BriefcaseBusiness,
  staff: Users,
  blended: Globe2,
};

export default function Opportunities({
  label,
  title,
  intro,
  items,
}: OpportunitiesProps) {
  return (
    <section
      id="opportunities"
      className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <span className="text-sm font-bold uppercase tracking-widest text-brand-ink">
          {label}
        </span>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-fg-2">
          {intro}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = icons[item.key];

            return (
              <article
                key={item.key}
                className="rounded-3xl border border-line bg-surface p-7 transition hover:shadow-lg"
              >
                <span className="inline-flex rounded-2xl bg-brand-tint p-3 text-brand-ink">
                  <Icon size={26} />
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-fg-2">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
