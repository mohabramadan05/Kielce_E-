// Partner universities (KA-131) — generated from Lista_umow_Erasmus.xlsx
// Outgoing quotas per agreement row; rows that differ only by ISCED code are merged.

export type MobilityType =
  | "studentStudies"
  | "studentInternship"
  | "phdStudies"
  | "phdInternship"
  | "staffTeaching"
  | "staffTraining";

/** "short" = short cycle, "1" = Bachelor, "2" = Master, "3" = Doctoral */
export type Cycle = "short" | "1" | "2" | "3";

export interface Agreement {
  type: MobilityType;
  cycles: Cycle[];
  /** number of people (per ISCED code when perIscedCode is true) */
  persons?: number;
  /** total months (students) */
  months?: number;
  /** total days (staff) */
  days?: number;
  perIscedCode?: boolean;
  isced: string[];
}

export interface Partner {
  code: string;
  name: string;
  href?: string;
  contact?: string;
  contactName?: string;
  /** ISO date (YYYY-MM-DD) the agreement expires */
  validUntil?: string;
  agreements: Agreement[];
}

export interface CountryGroup {
  /** ISO 3166-1 alpha-2 — used for the flag and the localized country name */
  iso2: string;
  /** ISO 3166-1 numeric — matches feature ids in world-atlas topojson */
  isoNumeric: string;
  partners: Partner[];
}

export const STUDENT_TYPES: MobilityType[] = ["studentStudies", "studentInternship", "phdStudies", "phdInternship"];
export const STAFF_TYPES: MobilityType[] = ["staffTeaching", "staffTraining"];

export const ISCED: Record<string, { en: string; pl: string }> = {
  "0311": { en: "Economics", pl: "Ekonomia" },
  "041": { en: "Business and administration", pl: "Biznes i administracja" },
  "0410": { en: "Business and administration, not further defined", pl: "Biznes i administracja, bliżej nieokreślone" },
  "0413": { en: "Management and administration", pl: "Zarządzanie i administracja" },
  "052": { en: "Environment", pl: "Środowisko" },
  "0520": { en: "Environment, not further defined", pl: "Środowisko, bliżej nieokreślone" },
  "0521": { en: "Environmental sciences", pl: "Nauki o środowisku" },
  "0530": { en: "Physical sciences, not further defined", pl: "Nauki fizyczne, bliżej nieokreślone" },
  "0532": { en: "Earth sciences", pl: "Nauki o Ziemi" },
  "0533": { en: "Physics", pl: "Fizyka" },
  "0540": { en: "Mathematics and statistics, not further defined", pl: "Matematyka i statystyka, bliżej nieokreślone" },
  "0541": { en: "Mathematics", pl: "Matematyka" },
  "061": { en: "Information and Communication Technologies (ICTs)", pl: "Technologie informacyjno-komunikacyjne (ICT)" },
  "0610": { en: "Information and Communication Technologies (ICTs), not further defined", pl: "Technologie informacyjno-komunikacyjne (ICT), bliżej nieokreślone" },
  "0611": { en: "Computer use", pl: "Użytkowanie komputerów" },
  "0612": { en: "Database and network design and administration", pl: "Projektowanie i administrowanie bazami danych i sieciami" },
  "0613": { en: "Software and applications development and analysis", pl: "Tworzenie i analiza oprogramowania i aplikacji" },
  "0688": { en: "Inter-disciplinary programmes involving ICTs", pl: "Programy interdyscyplinarne obejmujące ICT" },
  "071": { en: "Engineering and engineering trades", pl: "Inżynieria i technika" },
  "0710": { en: "Engineering and engineering trades, not further defined", pl: "Inżynieria i technika, bliżej nieokreślone" },
  "0712": { en: "Environmental protection technology", pl: "Technologia ochrony środowiska" },
  "0713": { en: "Electricity and energy", pl: "Elektryczność i energia" },
  "0714": { en: "Electronics and automation", pl: "Elektronika i automatyka" },
  "0715": { en: "Mechanics and metal trades", pl: "Mechanika i obróbka metali" },
  "0716": { en: "Motor vehicles, ships and aircraft", pl: "Pojazdy silnikowe, statki i statki powietrzne" },
  "0719": { en: "Engineering and engineering trades, not elsewhere classified", pl: "Inżynieria i technika, gdzie indziej niesklasyfikowane" },
  "0720": { en: "Manufacturing and processing, not further defined", pl: "Produkcja i przetwórstwo, bliżej nieokreślone" },
  "073": { en: "Architecture and construction", pl: "Architektura i budownictwo" },
  "0730": { en: "Architecture and construction, not further defined", pl: "Architektura i budownictwo, bliżej nieokreślone" },
  "0731": { en: "Architecture and town planning", pl: "Architektura i urbanistyka" },
  "0732": { en: "Building and civil engineering", pl: "Budownictwo i inżynieria lądowa" },
  "0788": { en: "Inter-disciplinary programmes involving engineering, manufacturing and construction", pl: "Programy interdyscyplinarne obejmujące inżynierię, produkcję i budownictwo" },
  "1041": { en: "Transport services", pl: "Usługi transportowe" },
};

export const PARTNER_COUNTRIES: CountryGroup[] = [
  {
    iso2: "BE",
    isoNumeric: "056",
    partners: [
      {
        code: "B MECHELE14",
        name: "Thomas More Mechelen-Antwerpen",
        href: "https://thomasmore.be/en",
        contact: "agreements@thomasmore.be",
        contactName: "Agreements Thomas More",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 2, months: 10, isced: ["0410"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0410"] },
        ],
      },
      {
        code: "B GEEL07",
        name: "Thomas More Kempen",
        href: "https://thomasmore.be/en",
        contact: "incoming@thomasmore.be",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 3, months: 15, isced: ["0410", "0610"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0410", "0610"] },
        ],
      },
      {
        code: "B LIEGE38",
        name: "Haute École de la Province de Liège",
        href: "https://www.provincedeliege.be/fr/hepl",
        agreements: [
          { type: "studentStudies", cycles: [], persons: 4, months: 20, isced: ["0311", "0611", "071"] },
          { type: "studentStudies", cycles: [], persons: 3, days: 5, perIscedCode: true, isced: ["0311", "041", "052", "061", "071", "0731", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, isced: ["0311", "0611", "071"] },
          { type: "staffTeaching", cycles: [], persons: 2, perIscedCode: true, isced: ["0311", "041", "052", "061", "071", "073", "0732"] },
          { type: "staffTraining", cycles: [], persons: 2, perIscedCode: true, isced: ["0311", "041", "052", "061", "071", "0731", "0732"] },
        ],
      },
    ],
  },
  {
    iso2: "BG",
    isoNumeric: "100",
    partners: [
      {
        code: "BG ALBENA01",
        name: "Visshe Uchilishte po Menidzhmant",
        href: "https://erasmusplus.vum.bg/",
        contact: "erasmus@vumk.eu",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 3, months: 15, isced: ["0410", "0610"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0410", "0610"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0410", "0610"] },
        ],
      },
      {
        code: "BG ROUSSE01",
        name: "University of Ruse Angel Kanchev",
        href: "https://www.uni-ruse.bg/en",
        contact: "dgeorgieva@uni-ruse.bg",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0410", "0610"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0410", "0610"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0410", "0610"] },
        ],
      },
      {
        code: "BG GABROVO01",
        name: "Technical University of Gabrovo",
        href: "https://www.tugab.bg/en",
        contact: "erasmus@tugab.bg",
        contactName: "Pangelova Nadezhda",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 5, months: 25, isced: ["0610"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0610"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0610"] },
        ],
      },
      {
        code: "BG SOFIA03",
        name: "University of National and World Economy",
        href: "https://www.unwe.bg/en/",
        contact: "erasmus.incoming@unwe.bg",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0410", "0540", "0610", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 1, days: 5, isced: ["0410", "0540", "0610", "1041"] },
          { type: "staffTraining", cycles: [], persons: 1, days: 5, isced: ["0540"] },
        ],
      },
      {
        code: "BG VARNA02",
        name: "Technical University of Varna",
        href: "https://fs.tu-varna.bg/",
        contact: "erasmus@tu-varna.bg",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0610", "0612", "0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0610", "0612", "0710"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0610", "0612", "0710"] },
        ],
      },
    ],
  },
  {
    iso2: "CZ",
    isoNumeric: "203",
    partners: [
      {
        code: "CZ OSTRAVA01",
        name: "VSB - Technical University of Ostrava",
        href: "https://www.vsb.cz/en",
        contact: "international@vsb.cz",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0311", "0410", "0520", "0533", "0610", "0710", "0715", "0730", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0311", "0410", "0520", "0533", "0610", "0714", "0715", "0732"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0311", "0410", "0520", "0533", "0610", "0714", "0715", "0730", "0732"] },
        ],
      },
      {
        code: "CZ LIBEREC01",
        name: "Technical University of Liberec",
        href: "https://www.tul.cz/en/home-page/",
        contact: "international@tul.cz",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 3, months: 15, isced: ["0710"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0730"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 2, months: 10, isced: ["0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0710", "0730"] },
        ],
      },
      {
        code: "CZ PREROV01",
        name: "Vysoká škola logistiky (VŠLG)",
        href: "https://vslg.cz/en/",
        contact: "veronika.matejickova@vslg.cz",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 3, months: 15, isced: ["0710", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0710", "1041"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0710", "1041"] },
        ],
      },
      {
        code: "CZ ZLIN01",
        name: "Tomas Bata University in Zlin",
        href: "https://www.utb.cz/en/",
        contact: "hromada@utb.cz",
        contactName: "Martin Hromada",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0610"] },
          { type: "phdStudies", cycles: ["3"], persons: 3, months: 3, isced: ["0610"] },
          { type: "staffTeaching", cycles: [], persons: 3, isced: ["0610"] },
          { type: "staffTraining", cycles: [], persons: 3, isced: ["0610"] },
        ],
      },
      {
        code: "CZ PLZEN01",
        name: "University of West Bohemia in Pilsen",
        href: "https://www.zcu.cz/en/index.html",
        contact: "honik@kma.zcu.cz",
        contactName: "Pospíšil Jan",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 2, months: 10, isced: ["0540", "0610", "0710"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 2, months: 10, isced: ["0540", "0610", "0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: [] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: [] },
        ],
      },
      {
        code: "CZ CESKE04",
        name: "Vysoká škola technická a ekonomická v Českých Budějovicích",
        href: "https://www.vstecb.cz/en/",
        contact: "18116@mail.vstecb.cz",
        contactName: "Černá Anežka",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 20, months: 25, isced: ["0311", "0413", "0710", "0730", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0311", "0413", "0710", "0730", "1041"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0311", "0413", "0710", "0730", "1041"] },
        ],
      },
    ],
  },
  {
    iso2: "DE",
    isoNumeric: "276",
    partners: [
      {
        code: "D DEGGEND01",
        name: "Technische Hochschule Deggendorf",
        href: "https://www.th-deg.de/en",
        contact: "incomings@th-deg.de",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 6, months: 30, isced: ["0311", "0410", "0610", "0710", "0714", "1041"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 2, months: 6, isced: ["0710", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0410", "0610", "0710", "0714", "1041"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0410", "0610", "0710", "0714", "1041"] },
        ],
      },
      {
        code: "D DRESDEN01",
        name: "Hochschule für Technik und Wirtschaft Dresden",
        href: "https://www.htw-dresden.de/en",
        validUntil: "2029-09-30",
        agreements: [
          { type: "staffTeaching", cycles: [], persons: 1, days: 1, isced: ["0532"] },
        ],
      },
    ],
  },
  {
    iso2: "ES",
    isoNumeric: "724",
    partners: [
      {
        code: "E SANTIAG01",
        name: "Universidad de Santiago de Compostela",
        href: "https://www.usc.gal/en",
        contact: "erasmus.in@usc.es",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 6, months: 30, isced: ["0413"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0413"] },
        ],
      },
      {
        code: "E MADRID03",
        name: "Universidad Complutense de Madrid",
        href: "https://www.ucm.es/english",
        contact: "erasmus1@ucm.es",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 2, months: 18, isced: ["0311", "0413"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 18, isced: ["0610"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0413", "0610"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0413"] },
        ],
      },
      {
        code: "E HUELVA01",
        name: "Universidad de Huelva",
        href: "https://www.uhu.es/english/",
        contact: "drinter02@sc.uhu.es",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 2, months: 18, isced: ["0521", "0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0521", "0710"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0521"] },
        ],
      },
      {
        code: "E MURCIA04",
        name: "Universidad Politécnica de Cartagena",
        href: "https://international.upct.es/",
        contact: "vicrice@upct.es",
        contactName: "Toledo Moreo Rafael",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 5, months: 25, isced: ["0710"] },
          { type: "studentStudies", cycles: ["1"], persons: 6, months: 30, isced: ["0410", "0730"] },
          { type: "studentStudies", cycles: ["2"], persons: 6, months: 30, isced: ["0410"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 6, months: 30, isced: ["0610"] },
          { type: "studentStudies", cycles: ["1"], persons: 4, months: 20, isced: ["0732"] },
          { type: "studentStudies", cycles: ["2"], persons: 2, months: 10, isced: ["0730", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0410", "0532", "0710", "0730", "0732"] },
        ],
      },
      {
        code: "E SEVILLA01",
        name: "Universidad de Sevilla",
        href: "https://www.us.es/",
        contact: "relint4@us.es",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 2, months: 10, isced: ["0413", "0610"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0710", "0714"] },
          { type: "phdInternship", cycles: ["3"], persons: 4, months: 4, isced: ["0413", "0610", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0413", "0610", "0710", "0714", "0732"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0413", "0610", "0710", "0714", "0732"] },
        ],
      },
      {
        code: "E SAN-SEB50",
        name: "FUNDACION PARA LA FORMACION TECNICA EN MAQUINA-HERRAMIENTA",
        href: "https://www.imh.eus/en",
        contact: "monika@imh.eus",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0610", "0710"] },
          { type: "studentInternship", cycles: ["1", "2"], persons: 2, months: 6, isced: ["0610", "0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0610", "0710"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0610", "0710"] },
        ],
      },
      {
        code: "E VALENCI02",
        name: "Universitat Politècnica de València",
        href: "https://www.upv.es/en",
        contact: "inmarsa1@upvnet.upv.es",
        contactName: "IRO - Immaculada Marco",
        agreements: [
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0410", "0413", "0532", "0710", "0732"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0410", "0413", "0532", "0710", "0732"] },
        ],
      },
      {
        code: "E SALAMAN02",
        name: "Universidad de Salamanca",
        href: "https://www.usal.es/",
        contact: "erasmus-in@usal.es",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 3, months: 15, isced: ["0610"] },
          { type: "studentStudies", cycles: ["3"], persons: 1, months: 5, isced: ["0730"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0732"] },
        ],
      },
      {
        code: "E CORDOBA01",
        name: "Universidad de Córdoba",
        href: "https://www.uco.es/internacional/extranjeros/en/",
        contact: "epsb_internacionales@uco.es",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 3, months: 15, isced: ["0532", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0532", "0732"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0532", "0732"] },
        ],
      },
    ],
  },
  {
    iso2: "GR",
    isoNumeric: "300",
    partners: [
      {
        code: "G VOLOS01",
        name: "PANEPISTIMIO THESSALIAS",
        href: "https://www.uth.gr/en",
        contact: "irep@uth.gr",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0610"] },
          { type: "studentInternship", cycles: ["1", "2"], persons: 2, months: 12, isced: ["0610"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0610"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0610"] },
        ],
      },
      {
        code: "G THESSAL14",
        name: "DIETHNES PANEPISTIMIO ELLADOS",
        href: "https://www.ihu.gr/en/enhome",
        contact: "erasmus@ihu.edu.gr",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0311", "0410", "0521", "0610", "0710", "0712", "0714", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0410", "0521", "0610", "0710", "0712", "0714", "0732"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0410", "0521", "0610", "0710", "0712", "0714", "0732"] },
        ],
      },
      {
        code: "G KRITIS05",
        name: "ELLINIKO MESOGEIAKO PANEPISTIMIO",
        href: "https://ee.hmu.gr/en/home-2/",
        contact: "ogareth@hmu.gr",
        contactName: "Owens Gareth",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0311", "0410", "0610", "0710", "0714", "0730"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0311", "0410", "0610", "0710", "0714", "0730"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0311", "0410", "0610", "0710", "0714", "0730"] },
        ],
      },
    ],
  },
  {
    iso2: "HR",
    isoNumeric: "191",
    partners: [
      {
        code: "HR ZADAR01",
        name: "Sveuciliste u Zadru",
        href: "https://www.unizd.hr/eng/",
        contact: "erasmus@unizd.hr",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 3, months: 15, isced: ["0311"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 3, months: 18, isced: ["0311"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311"] },
        ],
      },
      {
        code: "HR PULA01",
        name: "Sveuciliste Jurja Dobrile u Puli",
        href: "https://www.unipu.hr/en",
        contact: "international@unipu.hr",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0311", "0413", "0610", "0710"] },
          { type: "staffTeaching", cycles: [], persons: 8, days: 40, isced: ["0311", "0413", "0610", "0710"] },
        ],
      },
      {
        code: "HR OSIJEK01",
        name: "Sveuciliste Josipa Jurja Strossmayera u Osijeku",
        href: "https://www.unios.hr/en/",
        contact: "erasmus@unios.hr",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 6, months: 30, isced: ["0311", "0413", "1041"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 3, months: 15, isced: ["0610"] },
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 2, months: 10, isced: ["0521", "0710", "0712", "0715"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0311", "0413", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0521", "0610", "0710", "0712", "0715"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0311", "0413", "1041"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0521", "0610", "0710", "0712", "0715"] },
        ],
      },
      {
        code: "HR RIJEKA01",
        name: "University of Rijeka",
        href: "https://uniri.hr/en/home/",
        contact: "international@uniri.hr",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0610"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0610"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0610"] },
        ],
      },
      {
        code: "HR SIBENIK01",
        name: "Veleučiliste u Šibeniku",
        href: "https://www.vus.hr/en",
        contact: "erasmus@vus.hr",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, days: 10, isced: ["0413"] },
          { type: "studentStudies", cycles: ["1"], persons: 2, months: 10, isced: ["0610", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0413", "0610", "1041"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0413", "0610", "1041"] },
        ],
      },
    ],
  },
  {
    iso2: "IT",
    isoNumeric: "380",
    partners: [
      {
        code: "I ROMA31",
        name: "Universita degli Studi Niccolo Cusano Telematica Roma",
        href: "https://www.unicusano.it/en/",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 3, months: 15, isced: ["0311", "0413", "0610", "0714"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0413", "0610", "0714"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0413", "0610", "0714"] },
        ],
      },
      {
        code: "I CASAMAS01",
        name: "LUM Giuseppe Degennaro",
        href: "https://www.lum.it/en/",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 5, months: 25, isced: ["0311", "0413", "0610", "0710"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 1, months: 3, isced: ["0311", "0413", "0610", "0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0413", "0610", "0710"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0413", "0610", "0710"] },
        ],
      },
      {
        code: "I PARMA01",
        name: "Universita degli Studi di Parma",
        href: "https://en.unipr.it/",
        contact: "incoming@unipr.it",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 8, months: 40, isced: ["0610", "0715", "0730"] },
          { type: "staffTeaching", cycles: [], persons: 6, days: 30, isced: ["0610", "0715", "0730"] },
          { type: "staffTraining", cycles: [], persons: 6, days: 30, isced: ["0610", "0715", "0730"] },
        ],
      },
      {
        code: "I MODENA01",
        name: "Universita degli Studi di Modena e Reggio Emilia",
        href: "https://international.unimore.it/",
        contact: "incoming.erasmus@unimore.it",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 5, months: 25, isced: ["0610", "0710", "0712", "0730", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0610", "0710", "0712", "0730", "0732"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0610", "0710", "0712", "0730"] },
        ],
      },
      {
        code: "I VITERBO01",
        name: "Universita degli Studi della Tuscia di Viterbo",
        href: "https://www.unitus.it/en/",
        contact: "erasmus@unitus.it",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 6, months: 30, isced: ["0311", "0413", "0710"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0311"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0311", "0413", "0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0413", "0710"] },
        ],
      },
      {
        code: "I NAPOLI11",
        name: "Universita Telematica Pegaso",
        href: "https://www.unipegaso.it/",
        contact: "erasmus@unipegaso.it",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 8, months: 40, isced: ["0410", "0612", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0410", "0612", "0732"] },
        ],
      },
      {
        code: "I CAGLIAR01",
        name: "University of Cagliari",
        href: "https://web.unica.it/unica/en/homepage.page",
        contact: "ferraris@unica.it",
        contactName: "Ferrari Simone",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 2, months: 10, isced: ["0715", "0732"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 2, months: 12, isced: ["0715", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0715", "0732"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0715", "0732"] },
        ],
      },
      {
        code: "I TORINO02",
        name: "POLITECNICO DI TORINO",
        href: "https://www.polito.it/?lang=en",
        contact: "incoming.students@polito.it",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 3, months: 30, isced: ["0731"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0731"] },
        ],
      },
      {
        code: "I ANCONA01",
        name: "Università Politecnica delle Marche",
        href: "https://www.univpm.it/",
        contact: "erasmus.incoming@univpm.it",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 2, months: 10, isced: ["0520"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0532", "0712"] },
          { type: "studentInternship", cycles: [], persons: 2, months: 2, isced: ["0520", "0532", "0712"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0520", "0532", "0712"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0520", "0532", "0712"] },
        ],
      },
      {
        code: "I ROME16",
        name: "Università Roma Tre",
        href: "https://www.uniroma3.it/en/",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0413"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0610"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 5, perIscedCode: true, isced: ["0311", "052", "071", "073"] },
          { type: "studentInternship", cycles: [], persons: 1, months: 3, perIscedCode: true, isced: ["0311", "052", "071", "073"] },
          { type: "staffTeaching", cycles: [], persons: 1, isced: ["0413", "0610"] },
          { type: "staffTeaching", cycles: [], persons: 1, perIscedCode: true, isced: ["0311", "052", "071", "073"] },
          { type: "staffTraining", cycles: [], persons: 1, perIscedCode: true, isced: ["0311", "052", "071", "073"] },
        ],
      },
    ],
  },
  {
    iso2: "LT",
    isoNumeric: "440",
    partners: [
      {
        code: "LT KAUNAS02",
        name: "Kaunas University of Technology",
        href: "https://en.ktu.edu/",
        contact: "incoming@ktu.lt",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0610"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0610"] },
        ],
      },
      {
        code: "LT KLAIPED09",
        name: "Klaipedos Valstybine Kolegija",
        href: "https://www.kvk.lt/en/",
        contact: "https://www.kvk.lt/en/erasmus/",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 6, months: 30, isced: ["0311", "0413", "0610", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0311", "0413", "0610", "1041"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0311", "0413", "0610", "1041"] },
        ],
      },
      {
        code: "LT VILNIUS02",
        name: "Vilniaus Gedimino Technikos Universitetas",
        href: "https://vilniustech.lt/index.php?lang=2",
        contact: "exchange@vilniustech.lt",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 8, months: 40, isced: ["0311", "0410", "0521", "0610", "0710", "0713", "0730", "0732", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 6, days: 30, isced: ["0410", "0521", "0710", "0713", "0732"] },
        ],
      },
      {
        code: "LT VILNIUS14",
        name: "Vilniaus Technologiju ir Dizaino Kolegija",
        href: "https://en.vtdko.lt/",
        contact: "international@vtdko.lt",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 2, months: 10, isced: ["0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0710"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0710"] },
        ],
      },
      {
        code: "LT KAUNAS12",
        name: "Kauno technikos kolegija",
        href: "https://www.lik.tech/en",
        contact: "international@lik.tech",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 5, months: 25, isced: ["0532", "0610", "0710", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0532", "0610", "0710", "0732"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0532", "0610", "0710", "0732"] },
        ],
      },
    ],
  },
  {
    iso2: "LV",
    isoNumeric: "428",
    partners: [
      {
        code: "LV RIGA02",
        name: "Rigas Tehniska Universitate",
        href: "https://rtu.lv/en",
        contact: "incomingexchange@rtu.lv",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0715", "1041"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 1, months: 3, isced: ["0715", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0715", "1041"] },
          { type: "staffTraining", cycles: [], persons: 1, days: 5, isced: ["0715", "1041"] },
        ],
      },
      {
        code: "LV RIGA01",
        name: "Latvijas Universitate",
        href: "https://www.lu.lv/en/",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 2, months: 10, isced: ["0533", "0541", "0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0533", "0541", "0710"] },
          { type: "staffTraining", cycles: [], persons: 1, days: 5, isced: ["0533", "0541", "0710"] },
        ],
      },
      {
        code: "LV RIGA50",
        name: "Rigas Aeronavigacijas Instituts",
        href: "http://rai.lv/en/index.php",
        contact: "erasmus.rai@rai.lv",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 4, months: 20, isced: ["0311", "0410", "0520", "0540", "0710", "0716", "0720", "1041"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 2, months: 6, isced: ["0311", "0410", "0520", "0540", "0710", "0716", "0720", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0311", "0410", "0520", "0540", "0710", "0716", "0720", "1041"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0311", "0410", "0520", "0540", "0710", "0716", "0720", "1041"] },
        ],
      },
      {
        code: "LV JELGAVA01",
        name: "Latvijas Biozinatnu un Tehnologiju Universitate",
        href: "https://www.lbtu.lv/en",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0311", "0410", "0610", "0710", "0720", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0410", "0610", "0710", "0720", "1041"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0410", "0610", "0710", "0720", "1041"] },
        ],
      },
    ],
  },
  {
    iso2: "MK",
    isoNumeric: "807",
    partners: [
      {
        code: "MK STIP01",
        name: "Republic of Macedonia Goce Delcev State University Stip",
        href: "https://www.ugd.edu.mk/en/home/",
        contact: "https://cmus.ugd.edu.mk/contact.html",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 3, months: 15, isced: ["0610"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 2, months: 12, isced: ["0610"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0610"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0610"] },
        ],
      },
      {
        code: "MK SKOPJE01",
        name: "Ss. Cyril and Methodius University in Skopje",
        href: "https://www.ukim.edu.mk/en/",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 2, months: 10, isced: ["0520", "0532", "0710", "0712"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0520", "0532", "0710", "0712"] },
        ],
      },
      {
        code: "MK BITOLA01",
        name: "University St Kliment Ohridski Bitola",
        href: "https://uklo.edu.mk/?lang=en",
        contact: "erasmus@uklo.edu.mk",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0710", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0710", "1041"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0710", "1041"] },
        ],
      },
      {
        code: "MK SKOPJE20",
        name: "Univerzitet Goce Delchev Shtip - Voena Akademija - General Mihajlo Apostolski",
        contact: "ljupco.sosolovski@ugd.edu.mk",
        contactName: "Shosholovski, Ljupcho",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 3, months: 15, isced: ["0610", "0710"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 3, months: 15, isced: ["0610", "0710"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0610", "0710"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0610", "0710"] },
        ],
      },
    ],
  },
  {
    iso2: "PT",
    isoNumeric: "620",
    partners: [
      {
        code: "P BEJA01",
        name: "Instituto Politécnico de Beja",
        href: "https://www.ipbeja.pt/en/Pages/default.aspx",
        contact: "gri@ipbeja.pt",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 4, months: 20, isced: ["0410"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0521", "0610", "0712"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0410", "0521", "0610", "0712"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0410", "0521", "0610", "0712"] },
        ],
      },
      {
        code: "P GUARDA01",
        name: "Instituto Politécnico da Guarda",
        href: "https://politecnicoguarda.pt/en/homepage/",
        contact: "vito@ipg.pt",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 10, months: 50, isced: ["0410", "0521", "0610", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0410", "0521", "0610", "0732"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0410", "0521", "0610", "0732"] },
        ],
      },
      {
        code: "P SETUBAL01",
        name: "Instituto Politecnico de Setubal",
        href: "https://www.ips.pt/ips_si/web_page.inicial",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 3, months: 15, isced: ["0311", "0410", "0413", "0521", "0610", "0710"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0410", "0413", "0521", "0610", "0710", "0732"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0410", "0413", "0521", "0610", "0710", "0732"] },
        ],
      },
      {
        code: "P COVILHA01",
        name: "Universidade da Beira Interior",
        href: "https://www.ubi.pt/en/",
        contact: "inter@ubi.pt",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0731"] },
          { type: "staffTeaching", cycles: [], persons: 1, days: 5, isced: ["0731"] },
          { type: "staffTraining", cycles: [], persons: 1, days: 5, isced: ["0731"] },
        ],
      },
    ],
  },
  {
    iso2: "RO",
    isoNumeric: "642",
    partners: [
      {
        code: "RO ALBAIU01",
        name: "Universitatea 1 Decembrie 1918",
        href: "https://en.uab.ro/",
        contact: "erasmus@uab.ro",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 15, months: 75, isced: ["0610", "0611", "0710", "0714"] },
          { type: "studentInternship", cycles: ["1", "2"], persons: 3, months: 9, isced: ["0610", "0611", "0710", "0714"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0610", "0611", "0710", "0714"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0610", "0611", "0710", "0714"] },
        ],
      },
      {
        code: "RO CLUJNAP01",
        name: "Universitatea Babes Bolyai din Cluj-Napoca",
        href: "https://www.ubbcluj.ro/en/",
        contact: "ilona.dranca@ubbcluj.ro",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 3, months: 15, isced: ["0610"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 6, months: 30, isced: ["0311", "0413"] },
          { type: "studentStudies", cycles: ["2"], persons: 4, months: 20, isced: ["0311", "0413"] },
          { type: "studentStudies", cycles: ["2"], persons: 2, months: 10, isced: ["0610"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0413", "0610"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0413", "0610"] },
        ],
      },
      {
        code: "RO BRASOV01",
        name: "University \"Transilvany\" of Brasov",
        href: "https://www.unitbv.ro/en/",
        contact: "erasmus@unitbv.ro",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0311", "0413"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0413"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0413"] },
        ],
      },
      {
        code: "RO ORADEA01",
        name: "University of Oradea",
        href: "https://www.uoradea.ro/",
        contact: "dri@uoradea.ro",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: [], persons: 4, months: 20, isced: ["0719", "0732"] },
          { type: "studentInternship", cycles: [], persons: 2, months: 4, isced: ["0719", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0719", "0732"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0719", "0732"] },
        ],
      },
      {
        code: "RO IASI02",
        name: "Universitatea Alexandru Ioan Cuza",
        href: "https://www.uaic.ro/en/",
        validUntil: "2028-09-30",
        agreements: [
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0533", "0710"] },
        ],
      },
      {
        code: "RO BUCURES43",
        name: "POLITEHNICA București",
        href: "https://upb.ro/en/",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 3, months: 15, isced: ["0413", "0610", "0710", "0713", "0714"] },
          { type: "phdStudies", cycles: ["short", "3"], persons: 1, months: 1, isced: ["0610", "0710", "0713", "0714"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0413", "0610", "0710", "0713", "0714"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0413", "0610", "0710", "0713", "0714"] },
        ],
      },
    ],
  },
  {
    iso2: "RS",
    isoNumeric: "688",
    partners: [
      {
        code: "RS KRAGUJE01",
        name: "Kragujcu University",
        href: "https://en.kg.ac.rs/",
        contact: "erasmus@kg.ac.rs",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 2, months: 10, isced: ["0521"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0521"] },
        ],
      },
    ],
  },
  {
    iso2: "SI",
    isoNumeric: "705",
    partners: [
      {
        code: "SI LJUBLJA01",
        name: "Univerza v Ljubljani",
        href: "https://www.uni-lj.si/international_cooperation_and_exchange/",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0710"] },
          { type: "staffTraining", cycles: [], persons: 1, days: 5, isced: ["0710"] },
        ],
      },
      {
        code: "SI CELJE04",
        name: "Fakulteta za Komercialne in Poslovne Vede",
        href: "https://www.fkpv.si/en/",
        contact: "erasmus@fkpv.si",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0410"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0410"] },
        ],
      },
    ],
  },
  {
    iso2: "SK",
    isoNumeric: "703",
    partners: [
      {
        code: "SK ZILINA01",
        name: "Zilinska Univerzita v Ziline",
        href: "https://www.uniza.sk/index.php/en/",
        contact: "incoming@uniza.sk",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 3, months: 15, isced: ["0710", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 8, days: 40, isced: ["0710", "1041"] },
          { type: "staffTraining", cycles: [], persons: 3, days: 15, isced: ["0710", "1041"] },
        ],
      },
      {
        code: "SK KOSICE03",
        name: "Technicka Univerzita v Kosiciach",
        href: "https://www.tuke.sk/wps/portal",
        contact: "international.office@tuke.sk",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0520"] },
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 3, months: 15, isced: ["0520", "0710"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 2, months: 12, isced: ["0520", "0532", "0710"] },
          { type: "staffTeaching", cycles: [], persons: 3, days: 15, isced: ["0520", "0532", "0710"] },
        ],
      },
      {
        code: "SK BRATISL01",
        name: "Slovenska Technicka Univerzita v Bratislave",
        href: "https://www.stuba.sk/english.html",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 5, months: 25, isced: ["0521", "0532", "0710", "0712", "0732"] },
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 5, months: 25, isced: ["0610", "0710", "0715"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 5, isced: ["0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0520", "0532", "0610", "0710", "0712", "0715", "0732"] },
        ],
      },
    ],
  },
  {
    iso2: "TR",
    isoNumeric: "792",
    partners: [
      {
        code: "TR KARABUK01",
        name: "Karabük University",
        href: "https://www.karabuk.edu.tr/en",
        contact: "adnanucur@karabuk.edu.tr",
        contactName: "Ucur Adnan",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 7, months: 35, isced: ["0311", "0413", "0521", "0530", "0610", "0710", "0730"] },
          { type: "studentInternship", cycles: ["1", "2"], persons: 7, months: 14, isced: ["0311", "0413", "0521", "0530", "0610", "0710", "0730"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0311", "0413", "0521", "0530", "0610", "0710", "0730"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0311", "0413", "0521", "0530", "0610", "0710", "0730"] },
        ],
      },
      {
        code: "TR YALOVA01",
        name: "Yalova University",
        href: "https://www.yalova.edu.tr/en",
        contact: "erasmus@yalova.edu.tr",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 12, months: 60, isced: ["0311", "0410", "0611"] },
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0732"] },
          { type: "studentStudies", cycles: ["1"], persons: 4, months: 20, isced: ["0714"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0311", "0410", "0611"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0714", "0732"] },
        ],
      },
      {
        code: "TR ISTANBU19",
        name: "Istanbul Kultur University",
        href: "https://www.iku.edu.tr/en",
        contact: "erasmus@iku.edu.tr",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 4, months: 20, isced: ["0613", "0714"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0613", "0714"] },
        ],
      },
      {
        code: "TR TOKAT01",
        name: "Tokat Gaziosmanpasa University",
        href: "https://www.gop.edu.tr/?d=en-US",
        contact: "erasmusyonetim@gop.edu.tr",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 20, months: 100, isced: ["0311", "0521", "0610", "0710", "0730"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 2, months: 12, isced: ["0311", "0521", "0610", "0710", "0730"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0521", "0610", "0710", "0730"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0311", "0521", "0610", "0710", "0730"] },
        ],
      },
      {
        code: "TR BURSA02",
        name: "Bursa Teknik Universitesi",
        href: "https://btu.edu.tr/en",
        contact: "erasmus@btu.edu.tr",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 6, months: 30, isced: ["0521", "0610", "0710", "0713", "0714"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0710", "0720"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0710", "0720"] },
        ],
      },
      {
        code: "TR MERSIN05",
        name: "Tarsus Üniversitesi",
        href: "https://www.tarsus.edu.tr/",
        contact: "uio@tarsus.edu.tr",
        validUntil: "2028-09-29",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 10, months: 50, isced: ["0710"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0710"] },
        ],
      },
      {
        code: "TR BARTIN01",
        name: "Bartin Universitesi",
        href: "https://en.bartin.edu.tr/",
        contact: "ulik@bartin.edu.tr",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 2, months: 12, isced: ["0611", "0688", "0714", "0788"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 2, months: 6, isced: ["0611", "0688", "0714", "0788"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 5, isced: ["0611", "0688", "0714", "0788"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0611", "0688", "0714", "0788"] },
        ],
      },
      {
        code: "TR ANKARA28",
        name: "Ankara Medipol Üniversitesi",
        href: "https://ankaramedipol.edu.tr/",
        contact: "erasmus@ankaramedipol.edu.tr",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 3, months: 15, isced: ["0413", "0611", "0710", "0730"] },
          { type: "studentInternship", cycles: ["1", "2"], persons: 3, months: 12, isced: ["0413", "0611", "0710", "0730"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0413", "0611", "0710", "0730"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0413", "0611", "0710", "0730"] },
        ],
      },
      {
        code: "TR MALATYA01",
        name: "Inonu Universitesi",
        href: "https://www.inonu.edu.tr/",
        contact: "erasmus@inonu.edu.tr",
        contactName: "Toman Hasan",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 6, months: 30, isced: ["0311", "0413", "0610"] },
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 8, months: 40, isced: ["0533", "0713", "0714", "0715", "0732"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 2, months: 6, isced: ["0311", "0413", "0533", "0610", "0713", "0714", "0715", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0311", "0413", "0533", "0610", "0713", "0714", "0715", "0732"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0311", "0413", "0533", "0610", "0713", "0714", "0715", "0732"] },
        ],
      },
      {
        code: "TR ESKISEH03",
        name: "Eskisehir Technical University",
        href: "https://www.eskisehir.edu.tr/en",
        contact: "uib@eskisehir.edu.tr",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 4, months: 20, isced: ["0521", "0712"] },
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 2, months: 10, isced: ["0533", "0715", "0731"] },
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 3, months: 15, isced: ["0610", "0713"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0521", "0533", "0610", "0712", "0713", "0715", "0731"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0521", "0533", "0610", "0712", "0713", "0715", "0731"] },
        ],
      },
      {
        code: "TR ISTANBU64",
        name: "Istanbul Universitesi - Cerrahpasa",
        href: "https://www.iuc.edu.tr/en/_",
        contact: "erasmus@iuc.edu.tr",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 5, months: 25, isced: ["0521", "0712"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0521", "0712"] },
        ],
      },
      {
        code: "TR ISTANBU07",
        name: "Yildiz Technical University",
        href: "https://www.yildiz.edu.tr/en",
        contact: "incoming@yildiz.edu.tr",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 2, months: 10, isced: ["0532", "0712"] },
          { type: "studentInternship", cycles: ["1", "2", "3"], persons: 1, months: 6, isced: ["0532", "0712"] },
          { type: "staffTeaching", cycles: [], persons: 1, days: 5, isced: ["0532", "0712"] },
        ],
      },
      {
        code: "TR ISPARTA01",
        name: "Suleyman Demirel Universitesi",
        href: "https://w3.sdu.edu.tr/",
        contact: "erasmusincoming@sdu.edu.tr",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 2, months: 10, isced: ["0413", "0710", "1041"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0413", "0710", "1041"] },
          { type: "staffTraining", cycles: [], persons: 2, days: 10, isced: ["0413", "0710", "1041"] },
        ],
      },
      {
        code: "TR KAYSERI01",
        name: "Erciyes University",
        href: "https://www.erciyes.edu.tr/home/index",
        contact: "erasmus@erciyes.edu.tr",
        validUntil: "2028-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1"], persons: 2, months: 10, isced: ["0713", "0716"] },
          { type: "staffTeaching", cycles: [], persons: 1, days: 5, isced: ["0713", "0716"] },
        ],
      },
      {
        code: "TR KONYA04",
        name: "Necmettin Erbakan Universitesi",
        href: "https://www.erbakan.edu.tr/en",
        contact: "erasmus@konya.edu.tr",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2"], persons: 4, months: 20, isced: ["0532", "0610", "0710", "0716"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0532", "0610", "0710", "0716"] },
          { type: "staffTraining", cycles: [], persons: 4, days: 20, isced: ["0532", "0610", "0710", "0716"] },
        ],
      },
      {
        code: "TR AKSARAY01",
        name: "AKSARAY UNIVERSITESI",
        href: "https://www.aksaray.edu.tr/?l=en",
        contact: "erasmus@aksaray.edu.tr",
        validUntil: "2029-09-30",
        agreements: [
          { type: "studentStudies", cycles: ["1", "2", "3"], persons: 3, months: 15, isced: ["0311", "0410", "0520", "0532", "0610", "0712", "0713", "0715", "0730", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 2, days: 10, isced: ["0311", "0410", "0530", "0532", "0610", "0712", "0713", "0715", "0730", "0732"] },
          { type: "staffTeaching", cycles: [], persons: 4, days: 20, isced: ["0311", "0410", "0520", "0532", "0610", "0712", "0713", "0715", "0730", "0732"] },
        ],
      },
    ],
  },
];

export const PARTNERS_BY_ISO_NUMERIC: Record<string, CountryGroup> = Object.fromEntries(
  PARTNER_COUNTRIES.map((c) => [c.isoNumeric, c]),
);