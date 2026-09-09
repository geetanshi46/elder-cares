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
        {/* HERO — intentionally image-free to match the existing NMT visual system */}
        <section className="bg-[#f6efe6]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <Reveal>
              <div className="max-w-4xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#d9792b]">
                  The Road Ahead
                </p>
                <h1 className="text-4xl font-bold leading-tight text-[#173b3d] sm:text-5xl lg:text-6xl">
                  Shaping the Future of Age Care
                </h1>
                <div className="mt-7 h-1 w-16 bg-[#d9792b]" />
                <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  India is ageing rapidly, and the needs of older persons are
                  increasingly complex. Dementia, social isolation, poverty,
                  elder abuse, financial insecurity and lack of accessible care
                  affect millions.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9792b]">
                    Looking Forward
                  </p>
                  <h2 className="mt-3 text-3xl font-bold leading-tight text-[#173b3d] sm:text-4xl">
                    Taking proven solutions to a larger scale.
                  </h2>
                </div>
                <div className="space-y-5 text-base leading-8 text-slate-600">
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
            </Reveal>
          </div>
        </section>

        {/* FOCUS AREAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <Reveal>
              <div className="mb-12 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9792b]">
                  Our Focus Areas
                </p>
                <h2 className="mt-3 text-3xl font-bold text-[#173b3d] sm:text-4xl">
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
  className="py-12 sm:py-14"
>
                      <div className="grid gap-8 lg:grid-cols-[90px_1fr] lg:gap-10">
                        <div className="flex items-start justify-between lg:block">
                          <span className="text-3xl font-bold text-[#d9792b]">
                            {item.number}
                          </span>
                          <Icon
                            className="h-7 w-7 text-[#d9792b] lg:mt-8"
                            strokeWidth={1.7}
                          />
                        </div>

                        <div>
                          <h3 className="max-w-4xl text-2xl font-bold leading-tight text-[#173b3d] sm:text-3xl">
                            {item.title}
                          </h3>

                          {"subtitle" in item && item.subtitle ? (
                            <p className="mt-2 text-sm font-semibold text-[#d9792b]">
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
                                  className="border-l-2 border-[#d9792b]/50 pl-5"
                                >
                                  <p className="font-bold text-[#173b3d]">
                                    {column.title}
                                  </p>
                                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#d9792b]">
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
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9792b]" />
                                  <span>{point}</span>
                                </div>
                              ))}
                            </div>
                          ) : null}

                          {"stat" in item && item.stat ? (
                            <div className="mt-9 inline-flex items-center gap-5 border border-[#d9792b]/30 bg-[#fdf7f0] px-6 py-5">
                              <div className="text-3xl font-bold text-[#173b3d]">
                                {item.stat}
                              </div>
                              <div className="max-w-xs text-sm leading-6 text-slate-600">
                                {item.statText}
                              </div>
                            </div>
                          ) : null}

                          {"noteTitle" in item && item.noteTitle ? (
                            <div className="mt-9 border-l-2 border-[#d9792b] pl-5">
                              <p className="font-bold text-[#173b3d]">
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
        <section className="bg-[#173b3d]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <Reveal>
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f0a15d]">
                  Be Part of the Road Ahead
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Together, we can build a more compassionate, inclusive and
                  age-friendly society.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-white/70">
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
                    className="border border-white/15 bg-white/[0.04] p-6"
                  >
                    <span className="text-sm font-bold text-[#f0a15d]">
                      0{index + 1}
                    </span>
                    <p className="mt-4 text-sm leading-7 text-white/75">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-16 border-t border-white/15 pt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f0a15d]">
                  How You Can Partner With Us
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Support a Project",
                    "Corporate Partnerships",
                    "Volunteer",
                    "Support Smriti Gram",
                    "Research & Academic Collaboration",
                    "Fund a Training Programme",
                  ].map((item) => (
                    <a
                      key={item}
                      href="/get-involved"
                      className="group flex items-center justify-between border border-white/15 px-5 py-4 text-sm font-medium text-white transition hover:border-[#f0a15d]"
                    >
                      {item}
                      <ArrowRight className="h-4 w-4 text-[#f0a15d] transition group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>

                <p className="mt-10 max-w-2xl text-xl font-semibold leading-8 text-white">
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
