"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";
import { geoMercator, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { select } from "d3-selection";
import { zoom, zoomIdentity, type ZoomBehavior, type ZoomTransform } from "d3-zoom";
import "d3-transition"; // enables selection.transition() for the zoom buttons
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import world from "world-atlas/countries-110m.json";

/* ------------------------------------------------------------------ */
/* Types (already-translated view data coming from the server)         */
/* ------------------------------------------------------------------ */

export type Audience = "students" | "staff" | "all";

export interface AgreementView {
  audience: Exclude<Audience, "all">;
  label: string;
  cycles?: string;
  persons?: string;
  duration?: string;
  isced: { code: string; desc: string }[];
}

export interface PartnerView {
  code: string;
  name: string;
  href?: string;
  contact?: string;
  contactLabel: string;
  validUntil?: string;
  agreements: AgreementView[];
}

export interface CountryView {
  iso2: string;
  isoNumeric: string;
  name: string;
  flag: string;
  partners: PartnerView[];
  universities: Record<Audience, string>;
}

export interface MapLabels {
  explore: string;
  ariaLabel: string;
  hint: string;
  zoomIn: string;
  zoomOut: string;
  zoomReset: string;
  filterLabel: string;
  filter: Record<Audience, string>;
  clear: string;
  noMatches: string;
  website: string;
  cycle: string;
  personsLabel: string;
  durationLabel: string;
}

/* ------------------------------------------------------------------ */
/* Geometry                                                            */
/* ------------------------------------------------------------------ */

const W = 480;
const H = 640;

type CountryFeature = Feature<Geometry, { name: string }>;

const topology = world as unknown as Topology<{ countries: GeometryCollection<{ name: string }> }>;
const allCountries = (
  feature(topology, topology.objects.countries) as FeatureCollection<Geometry, { name: string }>
).features as CountryFeature[];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function PartnerMapClient({ countries, labels }: { countries: CountryView[]; labels: MapLabels }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  const [transform, setTransform] = useState<ZoomTransform>(zoomIdentity);
  const [selected, setSelected] = useState<string | null>(null); // ISO numeric
  const [audience, setAudience] = useState<Audience>("students");
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string } | null>(null);

  const byId = useMemo<Record<string, CountryView>>(
    () => Object.fromEntries(countries.map((c) => [c.isoNumeric, c])),
    [countries],
  );

  // Project once: fit the map to the partner countries
  const [shapes] = useState(() => {
    const ids = new Set(countries.map((c) => c.isoNumeric));
    const fitTo = allCountries.filter((f) => ids.has(String(f.id)));
    const projection = geoMercator().fitExtent(
      [
        [24, 24],
        [W - 24, H - 24],
      ],
      { type: "FeatureCollection", features: fitTo } as GeoPermissibleObjects,
    );
    const path = geoPath(projection);
    // Kosovo, N. Cyprus and Somaliland have no ISO id in world-atlas, so key by name
    return allCountries
      .map((f) => ({
        key: f.properties.name,
        id: f.id != null ? String(f.id) : null,
        d: path(f) ?? "",
      }))
      .filter((s) => s.d);
  });

  /* d3-zoom wiring */
  useEffect(() => {
    if (!svgRef.current) return;
    const zb = zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .translateExtent([
        [0, 0],
        [W, H],
      ])
      .on("zoom", (e) => setTransform(e.transform));
    zoomRef.current = zb;
    const sel = select(svgRef.current).call(zb);
    return () => {
      sel.on(".zoom", null);
    };
  }, []);

  const zoomBy = (k: number) => {
    if (svgRef.current && zoomRef.current)
      select(svgRef.current).transition().duration(200).call(zoomRef.current.scaleBy, k);
  };
  const zoomReset = () => {
    if (svgRef.current && zoomRef.current)
      select(svgRef.current).transition().duration(300).call(zoomRef.current.transform, zoomIdentity);
  };

  const showTooltip = (e: MouseEvent, c: CountryView) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, label: `${c.flag} ${c.name}` });
  };

  const onKey = (e: KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(id);
    }
  };

  const group = selected ? byId[selected] : null;
  const partners = group
    ? group.partners
        .map((p) => ({
          ...p,
          agreements: p.agreements.filter((a) => audience === "all" || a.audience === audience),
        }))
        .filter((p) => p.agreements.length > 0)
    : [];

  return (
    <section className="bg-bg grid grid-cols-1 items-start gap-5 lg:items-stretch px-6 pb-14 md:px-12 lg:grid-cols-[480px_minmax(0,1fr)]">
      {/* ---------------- Map ---------------- */}
      <div className="lg:sticky lg:top-6">
        <h2 className="mb-4 text-[22px] font-extrabold text-fg">{labels.explore}</h2>

        <div
          ref={wrapRef}
          className="relative overflow-hidden rounded-[20px] border border-line bg-surface-2"
          style={{ aspectRatio: `${W} / ${H}` }}
        >
          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className="block h-full w-full cursor-grab touch-none active:cursor-grabbing"
            role="img"
            aria-label={labels.ariaLabel}
          >
            <g transform={transform.toString()}>
              {shapes.map(({ key, id, d }) => {
                const c = id ? byId[id] : undefined;
                if (!c || !id) {
                  return (
                    <path key={key} d={d} className="fill-fg-4/25 stroke-surface" strokeWidth={0.5 / transform.k} />
                  );
                }
                const isSel = selected === id;
                return (
                  <path
                    key={key}
                    d={d}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isSel}
                    aria-label={c.name}
                    strokeWidth={(isSel ? 1.2 : 0.5) / transform.k}
                    className={[
                      "cursor-pointer stroke-surface outline-none transition-colors duration-150",
                      isSel
                        ? "fill-brand-ink"
                        : "fill-brand-ink/50 hover:fill-brand-ink/75 focus-visible:fill-brand-ink/75",
                    ].join(" ")}
                    onClick={() => setSelected(id)}
                    onKeyDown={(e) => onKey(e, id)}
                    onMouseMove={(e) => showTooltip(e, c)}
                    onMouseLeave={() => setTooltip(null)}
                  />
                );
              })}
            </g>
          </svg>

          {/* Zoom controls */}
          <div className="absolute right-3 top-3 z-10 flex flex-col gap-1">
            <ZoomButton label={labels.zoomIn} onClick={() => zoomBy(1.5)}>
              +
            </ZoomButton>
            <ZoomButton label={labels.zoomOut} onClick={() => zoomBy(1 / 1.5)}>
              −
            </ZoomButton>
            <ZoomButton label={labels.zoomReset} onClick={zoomReset}>
              ⟲
            </ZoomButton>
          </div>

          {tooltip && (
            <div
              className="pointer-events-none absolute z-20 whitespace-nowrap rounded-lg bg-fg px-3 py-1.5 text-[13px] font-semibold text-bg"
              style={{ left: tooltip.x, top: tooltip.y, transform: "translate(-50%, -130%)" }}
            >
              {tooltip.label}
            </div>
          )}
        </div>
      </div>

      {/* ---------------- Details ---------------- */}
      <div className="flex flex-col pt-3 lg:h-0 lg:min-h-full">
        <div className="mb-4 flex shrink-0 flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-fg-4">{labels.filterLabel}</span>
          {(["students", "staff", "all"] as Audience[]).map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAudience(a)}
              aria-pressed={audience === a}
              className={[
                "rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors",
                audience === a ? "bg-brand text-white" : "bg-surface-2 text-fg-2 hover:bg-brand-tint",
              ].join(" ")}
            >
              {labels.filter[a]}
            </button>
          ))}
        </div>

        <div className="mb-6 flex shrink-0 flex-wrap gap-1.5">
          {countries.map((c) => (
            <button
              key={c.isoNumeric}
              type="button"
              onClick={() => setSelected(c.isoNumeric)}
              aria-pressed={selected === c.isoNumeric}
              className={[
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                selected === c.isoNumeric
                  ? "border-brand bg-brand-tint font-semibold text-brand-ink"
                  : "border-line text-fg-3 hover:border-brand-ink hover:text-brand-ink",
              ].join(" ")}
            >
              {c.flag} {c.name}
            </button>
          ))}
        </div>

        {/* only the results scroll; filter + countries stay fixed above */}
        <div className="min-h-0 flex-1 lg:overflow-y-auto lg:pr-2">
        {!group && <p className="py-10 text-center text-sm text-fg-3">{labels.hint}</p>}

        {group && (
          <div>
            <div className="mb-3.5 flex items-baseline justify-between gap-3">
              <h3 className="text-base font-extrabold tracking-[0.02em] text-brand-ink">
                {group.flag} {group.name}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-xs text-fg-3">{group.universities[audience]}</span>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="text-xs font-semibold text-brand-ink hover:text-brand-ink-hover"
                >
                  {labels.clear}
                </button>
              </div>
            </div>

            {partners.length === 0 ? (
              <p className="rounded-[14px] bg-surface-2 px-6 py-8 text-center text-sm text-fg-3">{labels.noMatches}</p>
            ) : (
              <div className="flex flex-col gap-px overflow-hidden rounded-[14px] bg-line">
                {partners.map((p) => (
                  <article key={p.code} className="bg-surface px-6 py-5">
                    <div className="mb-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                      <span className="font-mono text-xs text-fg-3">{p.code}</span>
                      <span className="text-center text-[15px] font-bold text-fg">{p.name}</span>
                      <span className="flex justify-end gap-2">
                        {p.href && (
                          <IconLink href={p.href} label={labels.website} external>
                            <circle cx="12" cy="12" r="9" />
                            <path d="M3 12h18" />
                            <path d="M12 3a13 13 0 0 1 0 18" />
                            <path d="M12 3a13 13 0 0 0 0 18" />
                          </IconLink>
                        )}
                        {p.contact && (
                          <IconLink href={`mailto:${p.contact}`} label={p.contactLabel}>
                            <path d="M4 4h16v16H4z" />
                            <path d="M22 6l-10 7L2 6" />
                          </IconLink>
                        )}
                      </span>
                    </div>

                    <div className="mt-1 flex flex-col gap-2.5">
                      {p.agreements.map((a, i) => (
                        <div
                          key={i}
                          className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-[14px] bg-surface-2 px-4.5 py-3.5"
                        >
                          <div className="w-full text-[13px] font-bold text-fg">{a.label}</div>
                          {a.cycles && (
                            <Meta icon="cap" title={labels.cycle}>
                              <span className="font-serif">{a.cycles}</span>
                            </Meta>
                          )}
                          {a.persons && (
                            <Meta icon="people" title={labels.personsLabel}>
                              {a.persons}
                            </Meta>
                          )}
                          {a.duration && (
                            <Meta icon="clock" title={labels.durationLabel}>
                              {a.duration}
                            </Meta>
                          )}
                          {a.isced.length > 0 && (
                            <div className="min-w-55 flex-1 text-[13px] leading-[1.7] text-fg-2">
                              {a.isced.map((c) => (
                                <div key={c.code}>
                                  <strong className="text-fg">{c.code}</strong> {c.desc}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {p.validUntil && <div className="mt-3 text-xs text-fg-4">{p.validUntil}</div>}
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Small presentational pieces                                         */
/* ------------------------------------------------------------------ */

function ZoomButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface text-base font-bold text-brand-ink transition-colors hover:bg-brand-tint"
    >
      {children}
    </button>
  );
}

function IconLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-brand-tint text-brand-ink transition-colors hover:text-brand-ink-hover"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}

const META_ICONS = {
  cap: (
    <>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </>
  ),
  people: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
};

function Meta({ icon, title, children }: { icon: keyof typeof META_ICONS; title: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[13px] text-fg" title={title}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 text-brand-ink"
        aria-hidden
      >
        {META_ICONS[icon]}
      </svg>
      <span>{children}</span>
    </div>
  );
}