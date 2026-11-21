import PolishPolicyPage from "./policy-pl";
import type { Metadata } from "next";
import {
  BookOpen,
  GraduationCap,
  Globe2,
  Users,
  Target,
  Landmark,
  ArrowRight,
  FileText,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Policy Statement | Erasmus+ KUT",
  description:
    "Erasmus+ Policy Statement of Kielce University of Technology.",
};

const universityTasks = [
  "Conducting scientific research, development work, providing research services and transferring technology to the economy.",
  "Educating students during diploma, postgraduate and other forms of education.",
  "Providing education for doctoral students.",
  "Educating and offering training opportunities to University staff.",
  "Creating the necessary conditions for the full participation of people with disabilities in the education and research process.",
  "Educating students with a sense of responsibility for the Polish state, national tradition, strengthening the principles of democracy and respect for human rights.",
  "Creating conditions for the development of students' physical culture.",
  "Disseminating the achievements of science and technology by collecting and making available library and information resources.",
  "Carrying out activities for the local community and the region.",
];

const developmentStrategy = [
  "Maintaining the number of students at a level corresponding to the teaching potential of the Kielce University of Technology and the needs of the labor market.",
  "Intensification of development activities in the area of science and research resulting from the implementation of projects co-financed by the European Union.",
  "Strengthening competitiveness in the European higher education space in the areas of education, science and research.",
  "Undertaking tasks aimed at expanding cooperation between the Kielce University of Technology and universities and research units with a similar profile of activity, aimed at cooperation consistent with the interests of the Kielce University of Technology.",
  "Strengthening the position of the Kielce University of Technology as an international university.",
];

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

export default async function PolicyStatementPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale === "pl") {
    return <PolishPolicyPage />;
  }
    return (
    <main className="bg-bg text-fg">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-brand px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">
            <FileText size={16} />
            Erasmus+ Programme
          </span>

          <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Policy Statement
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            The internationalisation strategy, institutional
            objectives and Erasmus+ commitments of Kielce
            University of Technology.
          </p>
        </div>
      </section>

      {/* UNIVERSITY INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          icon={Landmark}
          title="About Kielce University of Technology"
        />

        <p className="max-w-4xl leading-8 text-fg-2">
          The Kielce University of Technology is a leading
          university in the Świętokrzyskie Voivodeship and
          the only technical university in the Świętokrzyskie
          Voivodeship with such a long history.
        </p>

        <p className="mt-5 max-w-4xl leading-8 text-fg-2">
          Formally established in 1974, its origins date back
          to 1951, when it was part of the Kielce-Radom
          Evening Engineering School, offering students the
          opportunity to earn a bachelor's degree in
          mechanical engineering.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface-2 p-7">
            <p className="text-sm font-semibold text-fg-2">
              Origins
            </p>
            <p className="mt-3 text-4xl font-black text-brand-ink">
              1951
            </p>
            <p className="mt-3 text-sm text-fg-2">
              Kielce-Radom Evening Engineering School
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-surface-2 p-7">
            <p className="text-sm font-semibold text-fg-2">
              Formal establishment
            </p>
            <p className="mt-3 text-4xl font-black text-brand-ink">
              1974
            </p>
            <p className="mt-3 text-sm text-fg-2">
              Kielce University of Technology
            </p>
          </div>
        </div>
      </section>

      {/* UNIVERSITY TASKS */}
      <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={BookOpen}
            title="Main Tasks of the University"
          />

          <p className="mb-8 max-w-3xl leading-8 text-fg-2">
            The main tasks of the Kielce University of
            Technology are defined in the University Statute.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {universityTasks.map((task, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-line bg-surface p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-tint text-sm font-bold text-brand-ink">
                  {index + 1}
                </span>

                <p className="leading-7 text-fg-2">
                  {task}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT STRATEGY */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          icon={Target}
          title="University Development Strategy 2015–2025"
        />

        <p className="mb-8 max-w-3xl leading-8 text-fg-2">
          The most important assumptions of the University
          Development Strategy formulated for 2015–2025
          include:
        </p>

        <div className="space-y-4">
          {developmentStrategy.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 rounded-2xl border border-line bg-surface p-6"
            >
              <span className="text-xl font-extrabold text-brand-ink">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="leading-8 text-fg-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNATIONALISATION */}
      <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Globe2}
            title="Internationalisation and Cooperation"
          />

          <div className="max-w-4xl space-y-6 leading-8 text-fg-2">
            <p>
              Kielce University of Technology (PŚk)
              continually strives to increase the importance
              of internationalization among its students,
              as the development of a multicultural student
              and staff community is crucial for the University.
            </p>

            <p>
              Kielce University of Technology provides an
              educational experience that prepares students
              for global political and social environments,
              including through the development of
              international alliances and partnerships aimed
              at capacity building, education, and
              entrepreneurship, introducing study programs
              that meet international market demand, and
              raising the University's profile and importance
              worldwide.
            </p>

            <p>
              International cooperation has always been a
              significant value for the Kielce University of
              Technology, both with European Union countries
              and non-EU countries.
            </p>

            <p>
              Among the benefits of the LLP-Erasmus program
              are the establishment of relationships with
              90 of the most important universities in
              20 European countries.
            </p>

            <p>
              The Kielce University of Technology's
              internationalization is also achieved through
              the inclusion of its academic staff in
              international research and
              scientific-educational networks both in Europe
              and globally, such as CEEPUS and DAAD.
            </p>

            <p>
              The development of internationalization,
              as well as the participation of students and
              faculty in educational and research structures
              at the European level, constitute a significant
              part of the University's Strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ERASMUS+ 2021-2027 */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          icon={GraduationCap}
          title="Participation in Erasmus+ 2021–2027"
        />

        <div className="max-w-4xl space-y-6 leading-8 text-fg-2">
          <p>
            Participation in the 2021–2027 Programme ensures
            the sustainable development of activities
            initiated and implemented in recent years.
            Thanks to projects like these, the Kielce
            University of Technology is constantly developing
            and increasing its international standing.
          </p>

          <p>
            Moreover, the University's participation in
            the Programme encourages the introduction
            of increasingly new modernisation processes,
            including various technological solutions in
            which the primary idea is to enrich e-learning
            tools, while the main goal of internationalisation
            is to increase the reach and mobility of employees.
          </p>

          <p>
            The Kielce University of Technology continually
            supports its academic staff in their pursuit of
            ever newer and more innovative teaching methods.
          </p>

          <p>
            Promoting research is crucial, including through
            research trips, which provide opportunities to
            learn about project-based courses in specific
            areas of specialization and their relevance to
            professional requirements and skills in various
            countries.
          </p>

          <p>
            Participation in the Erasmus+ programme provides
            administrative and teaching staff with the
            opportunity to achieve these goals through
            mobility.
          </p>

          <p>
            The University continually promotes participation
            in the staff mobility programme, which provides
            support to participants on both a personal and
            professional level by offering opportunities to
            share knowledge and explore new cultures.
          </p>

          <p>
            The programme is promoted for university staff
            through personal contact, a website containing
            support materials, and Faculty Programme
            Coordinators.
          </p>
        </div>
      </section>

      {/* STUDENT MOBILITY */}
      <section className="bg-surface-2 px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            icon={Users}
            title="Student Mobility and Educational Quality"
          />

          <div className="max-w-4xl space-y-6 leading-8 text-fg-2">
            <p>
              The university strives to ensure the highest
              quality of education for both Polish and
              international students. The best measure of
              the effectiveness of the Kielce University
              of Technology's efforts in international
              cooperation and teaching is the success of
              its students, both academic and professional.
            </p>

            <p>
              The University strives to ensure that the
              international exchange programme is even
              more attractive to students, and that the
              experience gained during studies abroad
              provides an increasing number of opportunities.
            </p>

            <p>
              Furthermore, the Kielce University of
              Technology offers the opportunity to
              participate in European and international
              exchange programmes to all students, including
              incoming full-time international students.
            </p>

            <p>
              Kielce University of Technology strives to
              increase its international standing, and
              the growing importance of international
              cooperation undoubtedly influences this process.
              Therefore, it is crucial to continuously
              develop cooperation with foreign universities.
            </p>

            <p>
              In today's era of dynamic change and the
              rapid development of cutting-edge technologies,
              the University strives to ensure that students
              have the opportunity to create the best possible
              future on the international stage.
            </p>

            <p>
              Student mobility offers a unique opportunity
              to conduct research and explore new environments
              in dynamic international social, cultural,
              and business life.
            </p>
          </div>
        </div>
      </section>

      {/* INCLUSION AND MODERNISATION */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          icon={Globe2}
          title="Inclusion, Diversity and Modernisation"
        />

        <div className="max-w-4xl space-y-6 leading-8 text-fg-2">
          <p>
            The University is building a multicultural
            environment, which translates into recognition
            and understanding of emerging differences
            among both students and staff.
          </p>

          <p>
            It is significant that individuals with limited
            income can also participate in the Programme,
            as higher financial support is available for
            such individuals.
          </p>

          <p>
            Modernisation is at the forefront of global
            policies, and this entails technological advances
            that increase competitiveness and improve the
            quality of education.
          </p>

          <p>
            Ultimately, the University's priority is to
            prepare students to build a scientific tradition
            and create a culturally diverse future with
            many new challenges and opportunities.
          </p>
        </div>
      </section>

      {/* OFFICIAL DOCUMENT */}

    </main>
  );
}
