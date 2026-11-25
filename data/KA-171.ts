import { label } from "framer-motion/client";
import { link } from "fs";
import { title } from "process";


//components/ui/ka171/countries.tsx
 export const Countries  = [
  {
    code: "dz",
    university: "Centre Universitaire d'Ain Temouchent",
    smsIncoming: 8,
    staIncoming: 4,
    staOutgoing: 3,
  },
  {
    code: "ar",
    university: "Universidad Nacional de Tres de Febrero",
    smsIncoming: null,
    staIncoming: 2,
    staOutgoing: 1,
  },
  {
    code: "cn",
    university: "Zhejiang University of Technology",
    smsIncoming: 1,
    staIncoming: 1,
    staOutgoing: 1,
  },
  {
    code: "cu",
    university: "Universidad Tecnológica de La Habana José Antonio Echeverría",
    smsIncoming: 2,
    staIncoming: 2,
    staOutgoing: 1,
  },
  {
    code: "ge",
    university: "Kutaisi International University",
    smsIncoming: 3,
    staIncoming: 2,
    staOutgoing: 2,
  },
  {
    code: "in",
    university: "Vellore Institute of Technology (VIT University)",
    smsIncoming: 1,
    staIncoming: 1,
    staOutgoing: 1,
  },
  {
    code: "jo",
    university: "Al-Hussein Bin Abdullah II Technical University",
    smsIncoming: 2,
    staIncoming: 2,
    staOutgoing: null,
  },
  {
    code: "my",
    university: "Universiti Kuala Lumpur",
    smsIncoming: 2,
    staIncoming: 1,
    staOutgoing: 3,
  },
  {
    code: "ua",
    university: "Multiple partner institutions",
    smsIncoming: 3,
    staIncoming: 2,
    staOutgoing: 3,
  },
  {
    code: "uz",
    university: "Jizzakh Polytechnic Institute",
    smsIncoming: 1,
    staIncoming: 4,
    staOutgoing: 1,
  },
]

export const Compoleted_cohorts =[
{
    name: "KA 171 2020",
    expire: "31.07.2023",
    code: "2020-1-PL01-KA171-HED-000079213",
    countryKeys: ["brazil", "malaysia", "ukraine", "india"],
  },
  {
    name: "KA 171 2022",
    expire: "31.07.2024",
    code: "2022-1-PL01-KA171-HED-000079213",
    countryKeys: ["malaysia", "ukraine"],
  },
  {
    name: "KA 171 2023",
    expire: "31.07.2025",
    code: "2023-1-PL01-KA171-HED-000079213",
    countryKeys: ["china", "malaysia", "ukraine", "india", "jordan"],
  },
];

export const Applications=[
  {
    titleKey: "staff-title",
    link: [
      { labelKey: "Rules-form", href: "https://erasmus.tu.kielce.pl/wp-content/uploads/2025/02/ST_rules_incoming.pdf" },
      { labelKey: "STA-form", href: "https://erasmus.tu.kielce.pl/wp-content/uploads/2024/03/STA-incoming-application-form_KUT-1.docx" },
      { labelKey: "STT-form", href: "https://erasmus.tu.kielce.pl/wp-content/uploads/2024/03/STT-incoming-application-form_KUT-2.docx" },
    ],
  },
  {
    titleKey: "student-title",
    link: [
      { labelKey: "application-process", href: "https://erasmus.tu.kielce.pl/en/welcome/incoming-students/incomings/application-process/" },
      { labelKey: "learning-agreement", href: "http://erasmus.tu.kielce.pl/wp-content/uploads/2026/02/he-learning-agreement-sms-ka171-1.docx" },
      { labelKey: "applicable-rates", href: "https://erasmus.tu.kielce.pl/wp-content/uploads/2026/02/ERASMUS-RATES.pdf" },
    ],
  },
];
