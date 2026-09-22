import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Users,
  Stethoscope,
  BriefcaseBusiness,
  GraduationCap,
  Lightbulb,
  Handshake,
  Siren,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import roadAheadHero from "@/assets/road-ahead-hero.png";

export const Route = createFileRoute("/the-road-ahead")({
  head: () => ({
    meta: [
      { title: "The Road Ahead | Nightingales Medical Trust" },
      {
        name: "description",
        content: "Shaping the Future of Age Care",
      },
    ],
  }),
  component: TheRoadAheadPage,
});

const focusAreas = [
  {
    number: "01",
    title: "Nightingales Smriti Gram",
    subtitle: "An Integrated Dementia Care Village",
    icon: Heart,
    text: "Nightingales Smriti Gram is a 300-bed integrated dementia care village model near Doddaballapur in Bengaluru Rural District. It will provide a safe, supportive and therapeutic environment that preserves dignity, independence and quality of life.",
    extra:
      "The first phase will provide 100 residential beds exclusively for economically disadvantaged persons with dementia, completely free of cost, within the larger 300-bed ecosystem.",
    points: [
      "Person-centred dementia care",
      "Evidence-based medical and psychosocial care",
      "Palliative care",
      "Appropriate traditional and alternative therapies",
      "Therapeutic outdoor and activity spaces",
      "Rehabilitation and wellness services",
      "Telemedicine and technology-enabled care",
      "Family support and caregiver engagement",
      "Training and capacity building",
      "Research and innovation",
    ],
  },
  {
    number: "02",
    title: "Taking Quality Dementia Care Beyond Bengaluru",
    icon: Stethoscope,
    text: "Quality dementia care should not depend on where a person lives. NMT will use a hub-and-spoke approach, multidisciplinary expertise, telemedicine and technology to support like-minded organisations establishing dementia care services across India.",
    extra:
      "A pilot telemedicine-enabled centre in Kolar will lead the next phase, with an ambition to establish 10 telemedicine-enabled dementia care centres across India.",
    points: [
      "Specialist support via telemedicine",
      "Memory assessment and clinical consultation",
      "Personalised care planning",
      "Continuous family support",
      "Technical guidance and capacity building",
      "Quality monitoring and supervision",
    ],
  },
  {
    number: "03",
    title: "Building Stronger Communities for Older People",
    icon: Users,
    columns: [
      {
        title: "Hiriyaravadis",
        label: "Community Support for the Urban Poor",
        text: "Safe community spaces with health services, nutrition, social interaction, physical activity and income generation. The aim is to establish 25 Hiriyaravadis across Bengaluru.",
      },
      {
        title: "Active Ageing",
        label: "Growing Older Without Withdrawing From Life",
        text: "Expand programmes promoting physical wellbeing, cognitive stimulation and social connectedness online and in the community, with a Vision 2030 to reach more elders and expand active ageing in old age homes.",
      },
      {
        title: "Digital Literacy & Cyber Safety",
        label: "Confidence for a Connected Life",
        text: "Empower 1,000+ seniors each year with confidence to use smartphones, digital payments, online services and communication safely.",
      },
    ],
  },
  {
    number: "04",
    title: "Enabling Older Persons to Live with Dignity and Purpose",
    icon: BriefcaseBusiness,
    text: "Retirement should not mean the end of productivity, purpose or financial independence.",
    extra:
      "Through Jobs 60+, NMT will expand career counselling, skill development, employment opportunities and a dedicated job platform. Vision 2030 is to support 1,000+ older persons each year across Karnataka to remain active, engaged and financially independent.",
  },
  {
    number: "05",
    title: "Protecting the Rights, Safety and Dignity of Older Persons",
    icon: ShieldCheck,
    text: "Every older person deserves to live free from abuse, neglect, exploitation and discrimination.",
    extra:
      "Elders Helpline 1090 and Elder Line 14567 will continue to provide awareness, counselling, legal guidance, family reconciliation and support for elders in distress. The vision is to build communities where older persons are heard, respected and protected.",
  },
  {
    number: "06",
    title: "Caring for the Most Vulnerable",
    icon: Heart,
    text: "NMT will strengthen services for homeless, socially isolated and economically disadvantaged elders.",
    extra:
      "The long-term goal is to reach more vulnerable elders through community models combining health, nutrition, social support, livelihood and dignity.",
    points: [
      "Homes for homeless and destitute elders",
      "Day care for disadvantaged elders",
      "Hiriyaravadis in urban poor communities",
      "Community health and outreach",
      "Nutrition and wellbeing",
      "Income generation",
      "Support for independent and dignified living",
    ],
  },
  {
    number: "07",
    title: "Building a Community of Lifesavers",
    icon: Siren,
    text: "Bengaluru – CPR Capital of India",
    extra:
      "A few minutes can make a difference in a cardiac emergency. NMT Lifesaving Services will expand CPR, AED and First Aid training, targeting public transport workers, street vendors, community volunteers, students and frontline members.",
    stat: "50,000 citizens",
    statText: "Ambition for citizens to be trained and help make Bengaluru CPR Capital by 2030.",
    noteTitle: "Lifesavers Clubs in Schools",
    note:
      "Equip young people with emergency-response skills. Educational institutions can contact NMT.",
  },
  {
    number: "08",
    title: "Strengthening the Caregiving Workforce",
    icon: GraduationCap,
    text: "Quality eldercare depends on caregivers, yet there is a shortage of trained caregivers.",
    extra:
      "NMT will expand geriatric, dementia and caregiving training for caregivers, healthcare professionals and family carers. NMT is recognised as a Regional Resource and Training Centre for Age Care of the Government of India and contributes to capacity building, technical support, advocacy and knowledge development.",
    noteTitle: "Our goal",
    note: "A professional, skilled and compassionate caregiving workforce.",
  },
  {
    number: "09",
    title: "Research, Innovation and Knowledge",
    icon: Lightbulb,
    text: "The future of eldercare must be informed by evidence.",
    extra:
      "NMT will strengthen research in dementia, geriatric care, caregiving, healthy ageing and community-based models, working with academic institutions, healthcare organisations, government and partners to generate evidence and develop scalable and replicable models.",
    noteTitle: "Smriti Gram",
    note:
      "A platform for research, learning, innovation and best practices. Like-minded Educational institutions and Universities are welcome to collaborate with us.",
  },
  {
    number: "10",
    title: "Building Partnerships for Greater Impact",
    icon: Handshake,
    text: "The challenges are too large for one organisation to address alone.",
    extra:
      "NMT will continue to work with government agencies, healthcare institutions, universities and academic institutions, research organisations, corporates and CSR partners, NGOs and community organisations, volunteers, families and older persons.",
    noteTitle: "Together",
    note: "Meaningful partnerships can transform programmes into movements for lasting social change.",
  },
];

function TheRoadAheadPage() {
  return (
    <SiteLayout>
      <main className="bg-white text-slate-800">
        {/* HERO */}
       <section id="road-ahead" className="relative isolate w-full overflow-hidden">
  <div
    className="
      relative w-full
      aspect-[4/5]
      sm:aspect-[16/9]
      md:aspect-[16/7]
      lg:aspect-[21/9]
      max-h-[560px]
      min-h-[380px]
    "
  >
    <img
      src={roadAheadHero}
      alt="The Road Ahead"
      className="absolute inset-0 h-full w-full object-cover object-center"
      loading="eager"
    />

    {/* Very light overlay — image stays clearly visible */}
    <div className="absolute inset-0 bg-white/18" />
    <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-transparent to-transparent" />

    <div
      className="
        relative z-10 mx-auto flex h-full w-full max-w-7xl
        items-center
        px-6
        sm:px-10
        lg:px-16
      "
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="h-1 w-14 bg-[#ed6439] sm:w-20" />

          <h1 className="text-4xl font-extrabold tracking-tight text-[#ed6439] sm:text-5xl lg:text-7xl">
            The Road Ahead
          </h1>
        </div>
      </Reveal>
    </div>
  </div>
</section>

        {/* INTRO */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#ed6439]" />
                    <span className="h-px w-12 bg-[#ed6439]" />
                    <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ed6439]">
                      Looking Forward
                    </span>
                  </div>
                  <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#252525] sm:text-4xl lg:text-5xl">
                    Taking proven solutions to a larger scale.
                  </h2>
                </div>

                <div className="rounded-[1.75rem] border border-[#ed6439]/15 bg-[#fffaf7] p-7 sm:p-10 lg:p-12">
                  <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
                    <p>
                      For over 25 years, NMT has responded through innovative,
                      need-based and community-oriented programmes spanning
                      dementia care, active ageing, care for marginalized elders,
                      elder protection, livelihoods, training, advocacy and
                      capacity building.
                    </p>
                    <p>
                      The next chapter is about taking these solutions to larger
                      scale, creating compassionate, evidence-based, affordable,
                      inclusive, sustainable and scalable models.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOCUS AREAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <Reveal>
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#ed6439]" />
                  <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ed6439]">
                    Our Focus Areas
                  </span>
                  <span className="h-px w-10 bg-[#ed6439]" />
                </div>
                <h2 className="mt-4 text-3xl font-extrabold text-[#252525] sm:text-4xl lg:text-5xl">
                  The work that will shape the years ahead.
                </h2>
              </div>
            </Reveal>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {focusAreas.map((item) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.number}>
                    <article
  id={item.number === "09" ? "research-innovation" : undefined}
  className="py-12 sm:py-14 first:pt-8 last:pb-8"
>
                      <div className="grid gap-8 rounded-[1.5rem] border border-[#ed6439]/12 bg-white p-5 shadow-[0_12px_40px_rgba(237,100,57,0.06)] sm:p-8 lg:grid-cols-[90px_1fr] lg:gap-10">
                        <div className="flex items-start justify-between lg:block">
                          <span className="text-3xl font-bold text-[#ed6439]">
                            {item.number}
                          </span>
                          <Icon
                            className="h-7 w-7 text-[#ed6439] lg:mt-8"
                            strokeWidth={1.7}
                          />
                        </div>

                        <div>
                          <h3 className="max-w-4xl text-2xl font-bold leading-tight text-[#252525] sm:text-3xl">
                            {item.title}
                          </h3>

                          {"subtitle" in item && item.subtitle ? (
                            <p className="mt-2 text-sm font-semibold text-[#ed6439]">
                              {item.subtitle}
                            </p>
                          ) : null}

                          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
                            {item.text}
                          </p>

                          {item.extra ? (
                            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
                              {item.extra}
                            </p>
                          ) : null}

                          {"columns" in item && item.columns ? (
                            <div className="mt-9 grid gap-6 md:grid-cols-3">
                              {item.columns.map((column) => (
                                <div
                                  key={column.title}
                                  className="border-l-2 border-[#ed6439]/50 pl-5"
                                >
                                  <p className="font-bold text-[#252525]">
                                    {column.title}
                                  </p>
                                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#ed6439]">
                                    {column.label}
                                  </p>
                                  <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {column.text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : null}

                          {"points" in item && item.points ? (
                            <div className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                              {item.points.map((point) => (
                                <div
                                  key={point}
                                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ed6439]" />
                                  <span>{point}</span>
                                </div>
                              ))}
                            </div>
                          ) : null}

                          {"stat" in item && item.stat ? (
                            <div className="mt-9 inline-flex items-center gap-5 border border-[#ed6439]/30 bg-[#fff8f4] px-6 py-5">
                              <div className="text-3xl font-bold text-[#252525]">
                                {item.stat}
                              </div>
                              <div className="max-w-xs text-sm leading-6 text-slate-600">
                                {item.statText}
                              </div>
                            </div>
                          ) : null}

                          {"noteTitle" in item && item.noteTitle ? (
                            <div className="mt-9 border-l-2 border-[#ed6439] pl-5">
                              <p className="font-bold text-[#252525]">
                                {item.noteTitle}
                              </p>
                              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                                {item.note}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="bg-[#ed6439]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <Reveal>
              <div className="max-w-4xl">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/85">
                  Be Part of the Road Ahead
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Together, we can build a more compassionate, inclusive and
                  age-friendly society.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-white/85">
                  The future we envision is one where older persons, families
                  and communities have the care, knowledge, skills and support
                  they need.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "No person living with dementia is denied quality care because of poverty.",
                  "No older person is left alone because of neglect or isolation.",
                  "No vulnerable elder is denied dignity because of age or circumstance.",
                  "No family caregiver has to face dementia without knowledge and support.",
                  "No community remains without access to skills/services needed for healthy ageing.",
                  "No young person should grow up without understanding value of caring for older generations.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="border border-white/30 bg-white p-6"
                  >
                    <span className="text-sm font-extrabold text-[#ed6439]">
                      0{index + 1}
                    </span>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-16 border-t border-white/30 pt-10">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/85">
                  How You Can Partner With Us
                </p>
               <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
  {[
    { label: "Support a Project", href: "/get-involved#partnership-options" },
    { label: "Corporate Partnerships", href: "/get-involved#corporate-donations" },
    { label: "Volunteer", href: "/get-involved#corporate-volunteering" },
    { label: "Support Smriti Gram", href: "/smriti-gram" },
    { label: "Research & Academic Collaboration", href: "mailto:contact@nightingaleseldercare.com" },
    { label: "Fund a Training Programme", href: "/services#training-programmes" },
  ].map((item) => (
    <a
      key={item.label}
      href={item.href}
      className="group flex items-center justify-between border border-white/35 bg-white px-5 py-4 text-sm font-semibold text-[#252525] transition hover:bg-[#fff5f0]"
    >
      {item.label}
      <ArrowRight className="h-4 w-4 text-[#ed6439] transition group-hover:translate-x-1" />
    </a>
  ))}
</div>

                <p className="mt-10 max-w-2xl text-xl font-bold leading-8 text-white">
                  The road ahead is ambitious. With your partnership, it can
                  become a reality.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
