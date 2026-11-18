import { getFormatter, getLocale, getTranslations } from "next-intl/server";

import { ISCED, PARTNER_COUNTRIES, STAFF_TYPES, type Agreement } from "@/data/partners";
import PartnerMapClient, { type Audience, type CountryView, type MapLabels } from "./PartnerMapClient";

const ROMAN: Record<string, string> = { "1": "I", "2": "II", "3": "III" };

const flagEmoji = (iso2: string) =>
  String.fromCodePoint(...[...iso2.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));

const audienceOf = (a: Agreement): Exclude<Audience, "all"> =>
  STAFF_TYPES.includes(a.type) ? "staff" : "students";

/**
 * Server component: resolves every string (translations, plurals, country names,
 * dates) with next-intl/server, then hands plain data to the interactive client map.
 */
export default async function PartnerMap() {
  const t = await getTranslations("partner");
  const locale = await getLocale();
  const format = await getFormatter();

  const regionNames = new Intl.DisplayNames([locale], { type: "region" });
  const lang = locale === "pl" ? "pl" : "en";

  const countries: CountryView[] = PARTNER_COUNTRIES.map((c) => {
    const partners = c.partners.map((p) => ({
      code: p.code,
      name: p.name,
      href: p.href,
      contact: p.contact,
      contactLabel: p.contactName ? `${t("map.contact")}: ${p.contactName}` : t("map.contact"),
      validUntil: p.validUntil
        ? t("map.validUntil", { date: format.dateTime(new Date(p.validUntil), { dateStyle: "medium" }) })
        : undefined,
      agreements: p.agreements.map((a) => ({
        audience: audienceOf(a),
        label: t(`map.types.${a.type}`),
        cycles: a.cycles.length
          ? a.cycles.map((cy) => (cy === "short" ? t("map.shortCycle") : ROMAN[cy])).join(", ")
          : undefined,
        persons:
          a.persons != null
            ? t("map.persons", { count: a.persons }) + (a.perIscedCode ? ` ${t("map.perCode")}` : "")
            : undefined,
        duration:
          a.months != null
            ? t("map.months", { count: a.months })
            : a.days != null
              ? t("map.days", { count: a.days })
              : undefined,
        isced: a.isced.map((code) => ({ code, desc: ISCED[code]?.[lang] ?? "" })),
      })),
    }));

    // university counts per filter, pre-pluralised
    const countFor = (aud: Audience) =>
      partners.filter((p) => aud === "all" || p.agreements.some((a) => a.audience === aud)).length;

    return {
      iso2: c.iso2,
      isoNumeric: c.isoNumeric,
      name: regionNames.of(c.iso2) ?? c.iso2,
      flag: flagEmoji(c.iso2),
      partners,
      universities: {
        students: t("map.universities", { count: countFor("students") }),
        staff: t("map.universities", { count: countFor("staff") }),
        all: t("map.universities", { count: countFor("all") }),
      },
    };
  }).sort((a, b) => a.name.localeCompare(b.name, locale));

  const labels: MapLabels = {
    explore: t("explore"),
    ariaLabel: t("map.ariaLabel"),
    hint: t("map.hint"),
    zoomIn: t("map.zoomIn"),
    zoomOut: t("map.zoomOut"),
    zoomReset: t("map.zoomReset"),
    filterLabel: t("map.filterLabel"),
    filter: {
      students: t("map.filter.students"),
      staff: t("map.filter.staff"),
      all: t("map.filter.all"),
    },
    clear: t("map.clear"),
    noMatches: t("map.noMatches"),
    website: t("map.website"),
    cycle: t("map.cycle"),
    personsLabel: t("map.personsLabel"),
    durationLabel: t("map.durationLabel"),
  };

  return <PartnerMapClient countries={countries} labels={labels} />;
}