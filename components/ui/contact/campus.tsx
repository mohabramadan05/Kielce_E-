
import {
  BusFront,
  ExternalLink,
  Map,
  Ticket,
} from "lucide-react";

type CampusProps = {
  title: string;
  description: string;
  openMap: string;
  universityStop: string;
  dormitoryStop: string;
  universityStopLabel: string;
  dormitoryStopLabel: string;
  ticketTitle: string;
  ticketNote: string;
};

const campusMap = "/images/map.jpg";

export function Campus({
  title,
  description,
  openMap,
  universityStop,
  dormitoryStop,
  universityStopLabel,
  dormitoryStopLabel,
  ticketTitle,
  ticketNote,
}: CampusProps) {
  return (
    <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-4">
          <span className="rounded-xl bg-brand-tint p-3 text-brand-ink">
            <Map size={24} />
          </span>
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-fg-2">
              {description}
            </p>
          </div>
        </div>

        <a
          href={campusMap}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-2xl border border-line bg-surface"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={campusMap}
            alt={title}
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />

          <div className="flex items-center justify-between border-t border-line px-5 py-4 font-semibold text-brand-ink">
            {openMap}
            <ExternalLink size={19} />
          </div>
        </a>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <BusFront className="mb-4 text-brand-ink" size={26} />
            <p className="text-sm text-fg-2">
              {universityStopLabel}
            </p>
            <p className="mt-2 font-bold">
              {universityStop}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6">
            <BusFront className="mb-4 text-brand-ink" size={26} />
            <p className="text-sm text-fg-2">
              {dormitoryStopLabel}
            </p>
            <p className="mt-2 font-bold">
              {dormitoryStop}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-4 rounded-2xl border border-line bg-surface p-6">
          <Ticket size={25} className="shrink-0 text-brand-ink" />
          <div>
            <h3 className="font-bold">{ticketTitle}</h3>
            <p className="mt-2 leading-7 text-fg-2">
              {ticketNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
