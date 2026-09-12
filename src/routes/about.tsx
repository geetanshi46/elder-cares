/* eslint-disable prettier/prettier */

import { createFileRoute, Link } from "@tanstack/react-router";

import { useEffect, useRef, type ReactNode } from "react";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileText,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

import aboutHeroImage from "../assets/about/about-hero.png";

import internationalResearch from "@/assets/recognitions/international-research-award.webp";
import vayoshreshtha from "@/assets/recognitions/vayoshreshtha-samman.webp";
import iahsa from "@/assets/recognitions/iahsa-excellence.webp";
import rajyotsava from "@/assets/recognitions/rajyotsava-prashasthi.webp";
import nammaBengaluru from "@/assets/recognitions/nammabengaluru-award.webp";
import paulHarris from "@/assets/recognitions/paul-harris-fellowship.webp";
import rotaryPioneer from "@/assets/recognitions/rotary-pioneer-award.webp";
import ipsAward from "@/assets/recognitions/ips-kc-award.webp";

import { Partners } from "@/components/home/Partners";

const title =
  "About Nightingales Medical Trust — Compassionate Care. Innovative Ageing.";

const description =
  "Nightingales Medical Trust is a professionally managed not-for-profit organisation building practical, holistic and family-centred solutions across ageing and dementia care.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});



/* ============================================================
   CLIENT CONTENT — synced with the NMT "About Us" source copy
   ============================================================ */

const JOURNEY = [
  {
    year: "1998",
    title: "Nightingales Medical Trust established",
    body: "Nightingales Medical Trust established as a not-for-profit organisation dedicated to age care.",
  },
  {
    year: "1999",
    title: "Nightingales Elders Enrichment Centre established in Malleshwaram.",
    body: "",
  },
  {
    year: "2000",
    title: "Nightingales Lifesaving Services",
    body: "",
  },
  {
    year: "2002",
    title: "Elders Helpline launched",
    body: "Elders Helpline launched in association with Bengaluru City Police - the first of its kind in the country to help elders in distress and combat elder abuse",
  },
  {
    year: "2003",
    title: "Received the Karnataka Rajyotsava Award for outstanding social service.",
    body: "",
  },
  {
    year: "2004",
    title: "Nightingales Sandhya Kirana established as a Day Care Centre for economically disadvantaged older persons.",
    body: "",
  },
  {
    year: "2006",
    title: "Dementia Day Care services introduced to support persons with dementia and provide respite to family caregivers.",
    body: "",
  },
  {
    year: "2008",
    title: "International collaboration with Alzheimer's Australia for technical support. NMT's work received the Vayoshreshtha Samman, National Award.",
    body: "",
  },
  {
    year: "2010",
    title: "Nightingales Centre for Ageing and Alzheimer's established as a specialised residential dementia-care facility.",
    body: "",
  },
  {
    year: "2011",
    title: "Received an International Research Award for a promising intervention for people with dementia and their carers. NMT was also designated as a Regional Resource and Training Centre in Age Care, by the government of India.",
    body: "",
  },
  {
    year: "2011",
    title: "Nightingales Jobs 60+ was established to promote employment opportunities for financially insecure elders",
    body: "",
  },
  {
    year: "2014",
    title: "ETCM – Nightingales Trust Dementia Residential Care Centre established in Kolar using telemedicine solutions and bringing down cost by 30%",
    body: "NMT also expanded its work in dementia risk reduction and active ageing.",
  },
  {
    year: "2017–2018",
    title: "Expansion of Dementia Day Care services and establishment of additional elder-care initiatives.",
    body: "",
  },
  {
    year: "2019",
    title: "Strengthened training and advocacy initiatives",
    body: "",
  },
  {
    year: "2021",
    title: "NMT was recognised to coordinate the National Helpline for Senior Citizens in Karnataka.",
    body: "",
  },
  {
    year: "2022",
    title: "NMT established it's first Hiriyarawadi to help marginalized elders in a city slum",
    body: "NMT launched Mobile Active Ageing program in 28 old age homes",
  },
  {
    year: "2023",
    title: "NMT completed 25 years of service. It also received the IPS-KC Distinguished Service Award for exemplary service in the field of mental health.",
    body: "",
  },
  {
    year: "2024–2026",
    title: "NMT continued to expand its dementia-care, active ageing, community support, training, technology and advocacy initiatives while developing Nightingales Smriti Gram – Dementia Care, Learning & Research, a new integrated model of dementia care.",
    body: "",
  },
];

const VALUES = [
  {
    title: "Dignity",
    body: "We respect every older person as an individual with inherent worth, rights and choices.",
  },
  {
    title: "Compassion",
    body: "We respond to vulnerability with empathy, patience and understanding.",
  },
  {
    title: "Person-centredness",
    body: "We design care around the individual — not simply the condition or diagnosis.",
  },
  {
    title: "Inclusion",
    body: "We believe that every elder deserves access to care, support and opportunities irrespective of socio-economic circumstances.",
  },
  {
    title: "Integrity",
    body: "We act with honesty, accountability and transparency in everything we do.",
  },
  {
    title: "Innovation",
    body: "We continuously seek better, more effective and sustainable solutions to emerging challenges in ageing and dementia care.",
  },
  {
    title: "Professionalism",
    body: "We combine compassion with knowledge, competence, systems and evidence-informed practice.",
  },
  {
    title: "Partnership",
    body: "We believe lasting change is possible when families, communities, government, institutions, professionals and organisations work together.",
  },
  {
    title: "Respect for independence",
    body: "We encourage older persons to remain active participants in decisions affecting their lives.",
  },
];

const RECOGNITIONS = [
  {
    image: internationalResearch,
    title: "International Research Award 2011",
    description:
      "For 'Most promising intervention for people with dementia and their carers' by Foundation Mederic Alzheimer and Alzheimer's Disease International.",
  },
  {
    image: vayoshreshtha,
    title: "Vayoshreshtha Samman - National Award 2008",
    description:
      "For Institutional Service conferred by the Ministry of Social Justice and Empowerment, Government of India.",
  },
  {
    image: iahsa,
    title: "IAHSA Excellence in Ageing Services Award 2006",
    description:
      "Citation of Honor by International Association of Homes & Services for the Ageing.",
  },
  {
    image: rajyotsava,
    title: "Rajyotsava Prashasthi 2003",
    description:
      "The second highest civilian honor of Karnataka State from the Hon. Chief Minister, Government of Karnataka.",
  },
  {
    image: nammaBengaluru,
    title: "Namma Bengaluru Award 2010",
    description: "For outstanding contribution to Bangalore city.",
  },
  {
    image: paulHarris,
    title: "Paul Harris Fellowship 2005",
    description: "Rotary Foundation for our work in Elderly and Dementia care.",
  },
  {
    image: rotaryPioneer,
    title: "Rotary Pioneer Award 2019",
    description: "Presented by Rotary Club - Bangalore Downtown.",
  },
  {
    image: ipsAward,
    title: "IPS-KC Distinguished Service Award 2023",
    description: "By the Karnataka Chapter of the Indian Psychiatric Society.",
  },
];

const PARTNERSHIPS = [
  {
    icon: Landmark,
    title: "Government",
    body: "Ministries, Karnataka Government, police, BBMP and public institutions.",
  },
  {
    icon: HeartHandshake,
    title: "Healthcare & academia",
    body: "Hospitals, medical colleges, research institutions and professional bodies.",
  },
  {
    icon: Users,
    title: "National & international",
    body: "Dementia organisations, networks and technical partners.",
  },
  {
    icon: ShieldCheck,
    title: "Corporate & philanthropic",
    body: "CSR partners, foundations, philanthropic institutions and donors.",
  },
];

const CHALLENGES = [
  "Chronic health conditions & disability",
  "Dementia & cognitive decline",
  "Loneliness & social isolation",
  "Elder abuse & neglect",
  "Financial insecurity",
  "Loss of employment & livelihood",
  "Changing family structures",
  "Lack of appropriate care & support",
  "Difficulty accessing reliable information & services",
];

const REPORT_ITEMS = [
  "Programmes",
  "Impact",
  "Financial performance",
  "Partnerships",
  "Achievements",
  "Future priorities",
];

const STATUTORY_DOCUMENTS = [
  "Audited financial statements",
  "Trust Deed",
  "PAN",
  "Income Tax Registration",
  "80G",
  "FCRA",
  "CSR Registration",
  "Social Stock Exchange — BSE / NSE",
];

const annualReports = [
  { year: "2024-25", pdf: "https://nightingaleseldercare.com/assets/files/Annual_Report_2024_2025.pdf" },
  { year: "2022-23", pdf: "https://nightingaleseldercare.com/assets/files/Annual-report2022-2023.pdf" },
  { year: "2021-22", pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2021-22.pdf" },
  { year: "2020-21", pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2020-21.pdf" },
  { year: "2019-20", pdf:  "https://nightingaleseldercare.com/assets/files/2019-20-NMTAnnualReport.pdf"},
  { year: "2018-19", pdf:  "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2018-19FINAL1.pdf"},
  { year: "2017-18", pdf: "https://nightingaleseldercare.com/assets/files/ANNUAL-REPORTOFNMT2017-18.pdf" },
];

/* ============================================================
   DESIGN TOKENS (as classes/constants for reuse)
   ============================================================
   Ink (dark surface):     #14212B
   Ember (brand accent):   #ED6439
   Parchment (page bg):    #FBF6EC
   Slate (body text):      #4C5C68
   Heading:                #1B2A35
   ============================================================ */

/* ============================================================
   SHARED SECTION MARKER
   A section index + hairline rule + plain-case label — this
   page is read top to bottom as a sequence, so the numbering
   carries real meaning rather than decorating the heading.
   ============================================================ */

export function SectionMarker({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-lg font-extrabold tracking-wide text-[#ED6439]">
  {index}
</span>

      <span className="h-px flex-1 bg-[#E8DED2]" />

     <span className="text-lg font-bold tracking-wide text-[#ED6439]">
  {label}
</span>
    </div>
  );
}

function SectionHeading({
  title: heading,
  description: intro,
  tone = "light",
}: {
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mt-5 max-w-3xl">
      <h2
        className={`font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] ${
          tone === "dark" ? "text-white" : "text-[#1B2A35]"
        }`}
      >
        {heading}
      </h2>

      {intro && (
        <p
          className={`mt-5 text-[15px] leading-7 sm:text-base ${
            tone === "dark" ? "text-white/70" : "text-[#4C5C68]"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   RECOGNITION CAROUSEL — continuous marquee, never stops
   ============================================================ */

function RecognitionCarousel() {
  // Duplicate the list so the loop is seamless
  const loopItems = [...RECOGNITIONS, ...RECOGNITIONS];

  return (
    <section id="recognitions" className="relative overflow-hidden bg-[#ED6439] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-9 sm:mb-11">
          <SectionMarker index="06" label="Our achievements" />
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Recognitions & awards
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Our work in elder care, dementia care and community service has
            been recognized by institutions and organizations across India
            and internationally.
          </p>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max gap-5 sm:gap-6">
          {loopItems.map((recognition, i) => (
            <article
              key={`${recognition.title}-${i}`}
              className="flex min-w-[285px] max-w-[285px] flex-col overflow-hidden rounded-lg bg-white sm:min-w-[310px] sm:max-w-[310px] lg:min-w-[350px] lg:max-w-[350px]"
            >
              <div className="flex h-[175px] items-center justify-center bg-[#FBF6EC] px-6 py-5 sm:h-[185px]">
                <img
                  src={recognition.image}
                  alt={recognition.title}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col border-t border-[#1B2A35]/8 p-5 sm:p-6">
                <Award className="h-4 w-4 text-[#ED6439]" />
                <h3 className="mt-3 font-display text-lg font-bold leading-tight text-[#1B2A35] sm:text-xl">
                  {recognition.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1B2A35]/65">
                  {recognition.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

function AboutPage() {
  //  const [isAnnualReportsExpanded, setIsAnnualReportsExpanded] = useState(false);
  return (
    <SiteLayout>
      <main className="overflow-hidden bg-[#FBF6EC] text-[#1B2A35]">
        {/* ======================================================
            HERO — full-bleed banner, image never crops, badge + heading only
        ====================================================== */}
        <section id="about-overview" className="relative w-full overflow-hidden scroll-mt-24">
          <Reveal>
            <div
              className="
                relative w-full
                aspect-[4/5]
                sm:aspect-[16/9]
                md:aspect-[16/7]
                lg:aspect-[21/9]
                max-h-[560px]
                min-h-[380px]
                bg-[#14212B]
              "
            >
              {/* Full-width banner image */}
              <img
                src={aboutHeroImage}
                alt="Nightingales Medical Trust community"
                width={1920}
                height={1080}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover object-center
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#14212B]/70 via-[#14212B]/25 to-transparent" />

              {/* Content */}
              <div
                className="
                  relative z-10 mx-auto flex h-full w-full
                  max-w-12xl flex-col justify-center
                  px-5 py-6
                  sm:px-8 sm:py-8
                  md:px-10 md:py-10
                  lg:px-14 lg:py-12
                "
              >
                {/* Badge */}
                {/* <span
                  className="
                    inline-flex w-fit items-center
                    rounded-full bg-[#ED6439]
                    px-3.5 py-2
                    text-[10px] font-bold uppercase
                    tracking-[0.14em] text-white
                    sm:px-4 sm:text-[11px]
                  "
                >
                  About NMT since 1998
                </span> */}

                {/* Heading */}
                <h1
                  className="
                    mt-4 w-full max-w-6xl
                    font-display font-extrabold
                    capitalize leading-[1.08]
                    tracking-[-0.03em] text-white
                    text-[1.9rem]
                    sm:mt-5 sm:text-[2.4rem]
                    md:text-[3rem]
                    lg:text-[3.4rem]
                  "
                >
                  Compassionate and innovative{" "}
                  <span className="text-white">age care</span>{" "}
                  solutions
                </h1>
              </div>
            </div>
          </Reveal>
        </section>

       {/* ======================================================
    WHO WE ARE
====================================================== */}
<section id="who-we-are" className="bg-[#FBF6EC] scroll-mt-24">
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
    <Reveal>
      <SectionMarker index="01" label="Who We Are" />

      {/* <h2 className="mt-5 max-w-5xl font-display text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-[#ED6439] sm:text-4xl lg:text-[2.8rem]">
        Who We Are
      </h2> */}
    </Reveal>

    <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      {/* LEFT — MAIN CONTENT */}
      <Reveal>
        <div className="h-full rounded-2xl border border-[#1B2A35]/10 bg-white p-7 shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)] sm:p-9">
          <CompassIcon />

          <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#4C5C68] sm:text-base">
            <p>
              Nightingales Medical Trust (NMT) is a professionally managed
              not-for-profit organisation established in Bengaluru in 1998,
              dedicated to improving the lives of older persons and people
              living with dementia.
            </p>

            <p>
              For nearly three decades, NMT has been developing innovative,
              holistic, need-based and family-centred solutions across the
              continuum of ageing and dementia care.
            </p>

            <p>
              Our work spans dementia care, healthy and active ageing, social
              integration, prevention of elder abuse, livelihood and
              empowerment, community-based support, training, capacity
              building, public awareness and advocacy.
            </p>

            <p>
              Many of our initiatives have evolved into models that have been
              replicated in different parts of India and have contributed to
              shaping the way elder care and dementia care are understood and
              delivered.
            </p>
          </div>
        </div>
      </Reveal>

      {/* RIGHT — BELIEF */}
      <Reveal delay={80}>
        <div className="flex h-full flex-col justify-between rounded-2xl bg-[#ED6439] p-7 text-white shadow-[0_18px_50px_-20px_rgba(237,100,57,0.28)] sm:p-9">
          <div>
            <Target
              className="h-7 w-7 text-white"
              strokeWidth={1.7}
            />

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-white/80">
              Our Belief
            </p>

            <p className="mt-5 font-display text-2xl font-bold leading-[1.3] text-white sm:text-3xl">
              Our belief is simple:
            </p>

            <blockquote className="mt-6 border-l-2 border-white/50 pl-5 font-display text-xl font-semibold leading-[1.45] text-white sm:text-2xl">
            Every older person deserves to age with dignity, security,
              purpose and the opportunity to remain connected with family and
              society
            </blockquote>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>

       {/* ======================================================
    WHY WE EXIST
====================================================== */}
<section id="why-we-exist" className="bg-white scroll-mt-24">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

    <Reveal>
      <SectionMarker index="02" label="Why we exist" />

      <h2 className="mt-5 max-w-5xl font-display text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#ED6439] sm:text-4xl lg:text-[2.6rem]">
        Because Ageing Should Not Mean Losing Dignity, Independence or
        Belonging.
      </h2>

      <div className="mt-7 max-w-5xl space-y-5 text-[15px] leading-7 text-[#4C5C68] sm:text-base sm:leading-7">
        <p>
          India is ageing rapidly. At the same time, families are changing,
          traditional support systems are becoming weaker, and the needs of
          older persons are becoming increasingly complex.
        </p>

        <p>
          Loneliness, chronic illness, dementia, elder abuse, financial
          insecurity, social isolation and loss of livelihood can profoundly
          affect the quality of later life.
        </p>

        <p>
          Dementia presents an additional challenge. As the condition
          progresses, elders with dementia may require increasing levels of
          supervision, specialised care and support. Families often struggle
          to find affordable, professional and compassionate services.
        </p>

        <p>
          NMT was founded in response to these realities.
        </p>

        <p>
          We work to create practical, accessible and sustainable solutions
          that enable older persons to live with dignity and families to
          receive the support they need.
        </p>

        <p>
          Our work is particularly committed to ensuring that economic
          circumstances do not become a barrier to accessing essential care
          and support.
        </p>
      </div>
    </Reveal>

    {/* KEY THEMES */}
    <Reveal delay={100}>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Dignity",
          "Independence",
          "Belonging",
          "Compassionate Care",
          "Accessible Support",
          "Sustainable Solutions",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-[#FBF6EC] px-5 py-4"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#ED6439]" />
            <span className="text-sm font-bold text-[#1B2A35] sm:text-base">
              {item}
            </span>
          </div>
        ))}
      </div>
    </Reveal>

  </div>
</section>



      {/* ======================================================
    THE NEED FOR NMT
====================================================== */}
<section
  id="the-need-for-nmt"
  className="bg-[#FBF6EC] scroll-mt-24"
>
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

    <Reveal>
      <SectionMarker index="03" label="The Need for NMT" />

      <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

        {/* LEFT — INTRO */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
            THE NEED FOR NMT
          </p>

          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-[#1B2A35] sm:text-4xl lg:text-[2.7rem]">
            India Is Ageing. The Need for Age Care Is Growing.
          </h2>
        </div>

        {/* RIGHT — INTRODUCTION */}
        <div className="space-y-5">
          <p className="text-sm leading-7 text-[#4C5C68] sm:text-base">
            India's elderly population has grown dramatically over the past
            several decades and is expected to increase substantially in the
            coming years. At the same time, the availability of specialised
            services for older persons remains inadequate.
          </p>

          <p className="text-base font-bold text-[#1B2A35]">
            The challenges are not limited to healthcare.
          </p>
        </div>
      </div>
    </Reveal>

    {/* ==================================================
        CHALLENGES
    ================================================== */}
    <Reveal delay={80}>
      <div className="mt-10 rounded-2xl bg-white p-7 shadow-[0_18px_50px_-20px_rgba(70,45,10,0.12)] sm:p-9">

        <p className="text-sm font-bold text-[#1B2A35] sm:text-base">
          Older persons may face:
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Chronic health conditions and disability",
            "Dementia and cognitive decline",
            "Loneliness and social isolation",
            "Elder abuse and neglect",
            "Financial insecurity",
            "Loss of employment and livelihood",
            "Changing family structures",
            "Lack of appropriate care and support",
            "Difficulty accessing reliable information and services",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl bg-[#FBF6EC] px-4 py-3.5 text-sm font-medium leading-6 text-[#1B2A35]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>

    {/* ==================================================
        DEMENTIA CHALLENGES
    ================================================== */}
    <Reveal delay={120}>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

        <div className="rounded-2xl bg-[#ED6439] p-7 text-white sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/80">
            Dementia Care
          </p>

          <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg">
            People living with dementia and their families face an additional
            set of challenges, including delayed diagnosis, lack of awareness,
            shortage of trained caregivers, behavioural and psychological
            symptoms, caregiver stress and limited access to specialised
            residential and community-based care.
          </p>
        </div>

        <div className="flex items-center rounded-2xl bg-white p-7 text-[#ED6439] sm:p-9">
          <p className="font-display text-xl font-bold leading-[1.4] sm:text-2xl">
            This is where NMT seeks to make a difference.
          </p>
        </div>

      </div>
    </Reveal>

    {/* ==================================================
        NMT'S APPROACH
    ================================================== */}
    <Reveal delay={160}>
      <div className="mt-6 rounded-2xl border border-[#ED6439]/20 bg-white p-7 sm:p-9">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
              NMT's Approach
            </p>

            <p className="mt-4 text-base leading-7 text-[#4C5C68] sm:text-lg">
              We develop need-based solutions across the entire ageing and
              dementia-care continuum from prevention and early assessment to
              community support, day care, residential care, caregiver
              training, advocacy and research.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 lg:max-w-md lg:justify-end">
            {[
              "Prevention",
              "Early assessment",
              "Community support",
              "Day care",
              "Residential care",
              "Caregiver training",
              "Advocacy",
              "Research",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#FBF6EC] px-4 py-2.5 text-sm font-bold text-[#1B2A35]"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </Reveal>

  </div>
</section>



        {/* ======================================================
            OUR JOURNEY — vertical timeline
        ====================================================== */}
        <section id="our-journey" className="bg-[#FBF6EC] scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <SectionMarker index="03" label="Our journey" />
              <h3 className="mt-5 max-w-5xl font-display text-2xl font-bold leading-[1.12] tracking-[-0.025em] text-[#ED6439] sm:text-3xl lg:text-[2.2rem]">
  From a Garage to a Movement for Ageing with Dignity
</h3>
              <h2 className="mt-5 max-w-4xl font-display text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-[#1B2A35] sm:text-4xl lg:text-[2.6rem]">
                Nightingales' story began in a modest garage in
                Sadashivnagar, Bengaluru
              </h2>
            </Reveal>

            <Reveal delay={60}>
              <div className="mt-7 max-w-2xl space-y-4 text-sm leading-7 text-[#4C5C68] sm:text-[15px]">
                <p>
                  The founders, Dr Radha S Murthy and Mr S Premkumar Raja,
                  began by providing home healthcare through Nightingales
                  Home Health Services. As they interacted with older
                  persons and their families, they recognised that medical
                  care alone was not enough.
                </p>
                <p>
                  Many elders were also struggling with loneliness, emotional
                  distress, abuse, financial insecurity and social isolation.
                </p>
                <p>
                  This realisation led to the establishment of Nightingales
                  Medical Trust in 1998, with a vision of creating a more
                  comprehensive approach to ageing.
                </p>
              </div>
            </Reveal>

            <div className="mt-14">
              <Reveal>
                <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-[#1B2A35] sm:text-2xl">
                  Three decades of innovation
                </h3>
              </Reveal>

              <div className="relative mt-9">
                <div
                  className="
                    max-h-[520px]
                    overflow-y-auto
                    overscroll-contain
                    pr-3
                    scroll-smooth
                  "
                >
                  <div className="relative">
                    <div className="absolute bottom-2 left-[3px] top-2 w-px bg-[#1B2A35]/12 sm:left-[95px]" />

                    <div className="space-y-0">
                      {JOURNEY.map((item, index) => (
                        <Reveal key={`${item.year}-${index}`} delay={index * 12}>
                          <div className="relative grid grid-cols-1 gap-2 py-5 pl-6 sm:grid-cols-[95px_1fr] sm:gap-8 sm:pl-0">
                            <div className="relative sm:pr-8 sm:text-right">
                              <span className="absolute -left-[27px] top-1 h-2 w-2 rounded-full bg-[#ED6439] sm:-left-[5px]" />

                              <span className="font-display text-sm font-bold text-[#ED6439] sm:text-[15px]">
                                {item.year}
                              </span>
                            </div>

                            <div className="border-l border-[#1B2A35]/10 pl-6 sm:border-l-0 sm:pl-8">
                              <h4 className="max-w-2xl font-display text-[15px] font-bold leading-[1.35] text-[#1B2A35] sm:text-base">
                                {item.title}
                              </h4>

                              {item.body && (
                                <p className="mt-1.5 max-w-2xl text-[13px] leading-6 text-[#4C5C68] sm:text-[13.5px]">
                                  {item.body}
                                </p>
                              )}
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Reveal delay={100}>
              <div className="mt-10 border-t border-[#ED6439] pt-6">
                <p className="font-display text-lg font-bold italic leading-6 text-[#1B2A35]">
                  The journey continues.
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#4C5C68]">
                  From a small beginning in Bengaluru, NMT has grown into a
                  multi-dimensional organisation working across age care,
                  dementia care, social protection, empowerment, training and
                  advocacy.
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#4C5C68]">
                  Our next chapter is focused on building scalable models for
                  the future of ageing and dementia care.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ======================================================
            VISION / MISSION / VALUES
        ====================================================== */}
        <section id="vision" className="bg-white scroll-mt-24">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <Reveal>
              <SectionMarker index="04" label="Vision, mission & values" />
            </Reveal>

            <div className="mt-9 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <article className="flex h-full flex-col justify-between rounded-2xl bg-[#ED6439] p-7 text-white sm:p-9">
                  <Eye className="h-7 w-7 text-white" strokeWidth={1.6} />
                  <div className="mt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">
                      Our vision
                    </p>
                    <h3 className="mt-3 max-w-xl font-display text-2xl font-bold leading-[1.2] sm:text-3xl">
                      A society where elders are healthy, happy, empowered
                      and socially integrated.
                    </h3>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={80}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-[#1B2A35]/10 bg-[#FBF6EC] p-7 sm:p-9">
                  <Target className="h-7 w-7 text-[#ED6439]" strokeWidth={1.6} />
                  <div className="mt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                      Our mission
                    </p>
                    <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#4C5C68] sm:text-base">
                      To enhance the quality of life of elders through
                      innovative and appropriate community-based support
                      systems, comprehensive geriatric care with special
                      focus on dementia and active ageing, combating elder
                      abuse, enabling livelihoods, public education,
                      advocacy and capacity building.
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>

            <div className="mt-16">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                  Our values
                </p>
              </Reveal>

              <div className="mt-6 grid grid-cols-1 border-t border-[#1B2A35]/10 sm:grid-cols-2">
                {VALUES.map((value, index) => (
                  <Reveal key={value.title} delay={index * 40}>
                    <div className="flex items-start gap-4 border-b border-[#1B2A35]/10 py-5 pr-6 odd:sm:border-r odd:sm:pr-8 even:sm:pl-8">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#ED6439]" strokeWidth={2.5} />
                      <div>
                        <h4 className="font-display text-base font-bold text-[#1B2A35] sm:text-lg">
                          {value.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-6 text-[#4C5C68]">
                          {value.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* ======================================================
    PEOPLE & GOVERNANCE
====================================================== */}
<section id="governance" className="bg-[#FBF6EC] scroll-mt-24">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

    <Reveal>
      <SectionMarker index="05" label="People & governance" />

      <h2 className="mt-5 max-w-4xl font-display text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#1B2A35] sm:text-4xl lg:text-[2.6rem]">
        Responsible governance. People who turn vision into action.
      </h2>
    </Reveal>

    <div className="mt-11 grid gap-6 lg:grid-cols-2">

      {/* ==================================================
          BOARD OF TRUSTEES
      ================================================== */}
      <Reveal>
        <article className="flex h-full flex-col rounded-2xl bg-[#ED6439] p-7 text-white sm:p-9">

          <div className="flex items-start justify-between gap-4">
            <Landmark
              className="h-7 w-7 text-white"
              strokeWidth={1.7}
            />

            <span className="rounded-full border border-white/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/90">
              Board
            </span>
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-white/80">
            BOARD OF TRUSTEES
          </p>

          <h3 className="mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl">
            Responsible Governance. Independent Oversight. Shared Commitment.
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/85 sm:text-base">
            Nightingales Medical Trust is guided by a Board of Trustees
            comprising experienced professionals from diverse fields,
            bringing expertise in healthcare, administration, finance,
            business, public policy and social development.
          </p>

          <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
            The Board provides strategic direction and oversight, with major
            policy decisions resting with the Board.
          </p>

          <div className="mt-7">
            <p className="text-sm font-bold text-white">
              Our governance philosophy is based on:
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Accountability",
                "Transparency",
                "Ethical Governance",
                "Professional Oversight",
                "Long-term Sustainability",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/15 px-3.5 py-2 text-xs font-bold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 border-t border-white/25 pt-6">
            <h4 className="font-display text-xl font-bold sm:text-2xl">
              Meet our Board of Trustees
            </h4>

            <p className="mt-3 text-sm leading-6 text-white/75">
              [Board member profiles, photographs and designations ]
            </p>

            <p className="mt-5 text-sm leading-7 text-white/85 sm:text-base">
              The Board of Trustees provides strategic oversight and ensures
              that NMT remains true to its mission while maintaining high
              standards of governance and accountability.
            </p>
          </div>

          {/* EXISTING LINK — PRESERVED */}
          <div className="mt-auto pt-8">
            <Link
              to="/founders"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#ED6439] transition-colors duration-300 hover:bg-[#14212B] hover:text-white"
            >
              View Board of Trustees
              <ArrowUpRight
                className="h-4 w-4"
                strokeWidth={2.2}
              />
            </Link>
          </div>

        </article>
      </Reveal>

      {/* ==================================================
          LEADERSHIP TEAM
      ================================================== */}
      <Reveal delay={80}>
        <article className="flex h-full flex-col rounded-2xl bg-white p-7 text-[#1B2A35] shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)] sm:p-9">

          <div className="flex items-start justify-between gap-4">
            <Users
              className="h-7 w-7 text-[#ED6439]"
              strokeWidth={1.7}
            />

            <span className="rounded-full border border-[#1B2A35]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#4C5C68]">
              Leadership
            </span>
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
            LEADERSHIP TEAM
          </p>

          <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-[#1B2A35] sm:text-3xl">
            People Who Turn Vision into Action
          </h3>

          <p className="mt-5 text-sm leading-7 text-[#4C5C68] sm:text-base">
            NMT's work is driven by a committed team of professionals who
            bring expertise in medicine, dementia care, social work,
            programme management, finance, human resources, technology,
            communications, research and community development.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#4C5C68] sm:text-base">
            Our leadership team combines professional competence with a deep
            commitment to social impact.
          </p>

          <div className="mt-7">
            <p className="text-sm font-bold text-[#1B2A35]">
              Leadership
            </p>

            <div className="mt-4 space-y-4">

              <div className="rounded-xl bg-[#FBF6EC] p-5">
                <h4 className="font-display text-lg font-bold text-[#1B2A35] sm:text-xl">
                  Dr Radha S Murthy
                </h4>

                <p className="mt-1 text-sm font-bold text-[#ED6439]">
                  Co-Founder & Managing Trustee
                </p>

                <p className="mt-3 text-sm leading-7 text-[#4C5C68]">
                  A physician with more than three decades of experience,
                  Dr Radha Murthy has been instrumental in shaping NMT's
                  person-centred approach to elder and dementia care.
                </p>
              </div>

              <div className="rounded-xl bg-[#FBF6EC] p-5">
                <h4 className="font-display text-lg font-bold text-[#1B2A35] sm:text-xl">
                  S Premkumar Raja
                </h4>

                <p className="mt-1 text-sm font-bold text-[#ED6439]">
                  Co-Founder & Secretary
                </p>

                <p className="mt-3 text-sm leading-7 text-[#4C5C68]">
                  With postgraduate qualifications in social sciences and
                  40+ years experience in community welfare and healthcare
                  administration, Mr Raja has played a key role in
                  conceptualising and implementing NMT's innovative
                  programmes.
                </p>
              </div>

            </div>
          </div>

          <div className="mt-6 border-t border-[#1B2A35]/10 pt-5">
            <h4 className="font-display text-xl font-bold text-[#1B2A35] sm:text-2xl">
              Senior Leadership Team
            </h4>
          </div>

          {/* EXISTING LINK — PRESERVED */}
          <div className="mt-auto pt-8">
            <Link
              to="/executive-committee"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#ED6439] px-5 py-2.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#d95538]"
            >
              Meet the Executive Committee
              <ArrowUpRight
                className="h-4 w-4"
                strokeWidth={2.2}
              />
            </Link>
          </div>

        </article>
      </Reveal>

    </div>
  </div>
</section>

        {/* ======================================================
            RECOGNITION
        ====================================================== */}
        <section id="partners" className="scroll-mt-24">
  <RecognitionCarousel />
</section>

        {/* ======================================================
            PARTNERSHIPS
        ====================================================== */}
        <section id="partners" className="scroll-mt-24">
  <Partners />
</section>

       {/* ======================================================
    TRANSPARENCY
====================================================== */}
<section
  id="transparency"
  className="bg-[#14212B] text-white scroll-mt-24"
>
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
    <div className="max-w-3xl">
      <SectionMarker index="08" label="Transparency" />

      <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        Our work, our impact, our accountability.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
        We believe transparency builds trust. Explore our annual
        reports and financial documents to learn more about our
        work, impact and accountability.
      </p>
    </div>

    <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
      
     {/* ==================================================
    ANNUAL REPORTS
================================================== */}
<Reveal>
  <div className="flex h-full flex-col rounded-2xl bg-white p-7 text-[#1B2A35] sm:p-9">
    <div className="flex items-start justify-between gap-4">
      <FileText
        className="h-6 w-6 text-[#ED6439]"
        strokeWidth={1.8}
      />

      <span className="rounded-full border border-[#1B2A35]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#4C5C68]">
        7 reports
      </span>
    </div>

    <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
      ANNUAL REPORTS
    </p>

    <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-[#1B2A35] sm:text-3xl">
      Our Work. Our Impact. Our Accountability.
    </h3>

    <p className="mt-5 text-sm leading-7 text-[#4C5C68] sm:text-base">
      We believe that organisations working for social impact must be
      accountable to the people and institutions that support them.
    </p>

    <p className="mt-6 text-sm font-bold leading-6 text-[#1B2A35]">
      Our Annual Reports provide an overview of:
    </p>

    <ul className="mt-3 space-y-2">
      {[
        "Programmes and initiatives",
        "Impact and beneficiaries",
        "Organisational developments",
        "Financial performance",
        "Partnerships",
        "Key achievements",
        "Challenges and priorities for the future",
      ].map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-6 text-[#4C5C68]"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <div className="mt-6 flex flex-wrap gap-2.5">
      {annualReports.map((report) => (
        <a
          key={report.year}
          href={report.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-[#1B2A35]/12 bg-[#FBF6EC] px-4 py-2.5 text-sm font-bold text-[#1B2A35] transition-colors duration-300 hover:bg-[#ED6439] hover:text-white"
        >
          {report.year}

          <ArrowUpRight
            className="h-3.5 w-3.5 opacity-50"
            strokeWidth={2.2}
          />
        </a>
      ))}
    </div>

    {/* FULL CONTENT — ALWAYS VISIBLE */}
    <div className="mt-6 border-t border-[#1B2A35]/10 pt-6">
      <p className="text-sm leading-7 text-[#4C5C68] sm:text-base">
        Our latest published annual report describes NMT as a
        professionally managed not-for-profit working for elders and
        persons with dementia since 1998, with programmes spanning
        dementia care, active ageing, social integration, elder-abuse
        prevention, livelihoods, training, awareness and advocacy.
      </p>
    </div>
  </div>
</Reveal>

     {/* ==================================================
    FINANCIAL REPORTS
================================================== */}
<Reveal delay={80}>
  <Link
    to="/financial-reports"
    className="group flex h-full flex-col rounded-2xl bg-[#ED6439] p-7 text-white transition-colors duration-300 hover:bg-[#d95538] sm:p-9"
  >
    <div className="flex items-start justify-between gap-5">
      <ShieldCheck
        className="h-6 w-6 text-white"
        strokeWidth={1.7}
      />

      <ArrowUpRight
        className="h-5 w-5 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2}
      />
    </div>

    <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-white">
      FINANCIAL STATEMENTS
    </p>

    <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
      Transparency You Can Trust
    </h3>

    <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
      As a not-for-profit organisation, we recognise our responsibility to
      use every contribution entrusted to us with care, integrity and
      accountability.
    </p>

    <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
      NMT maintains transparent financial reporting and makes relevant
      financial and statutory documents available for public review.
    </p>

    {/* Financial Documents */}
    <div className="mt-7">
      <p className="text-sm font-bold text-white sm:text-base">
        Financial Documents
      </p>

      <p className="mt-4 text-sm font-bold text-white">
        Audited Financial Statements
      </p>

      <ul className="mt-3 space-y-2">
        {[
          "2025–26",
          "2024–25",
          "2023–24",
          "2022–23",
          "2021–22",
        ].map((year) => (
          <li
            key={year}
            className="flex items-center gap-3 text-sm leading-6 text-white/80"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
            <span>{year}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm font-bold text-white">
        Statutory & Registration Documents
      </p>

      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {[
          "Trust Deed",
          "PAN",
          "Income Tax Registration",
          "80G Certificate",
          "FCRA Registration",
          "CSR Registration",
          "Social Stock Exchange Registration – BSE",
          "Social Stock Exchange Registration – NSE",
        ].map((document) => (
          <li
            key={document}
            className="flex items-start gap-3 text-sm leading-6 text-white/80"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
            <span>{document}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Commitment */}
    <div className="mt-7 border-t border-white/25 pt-6">
      <p className="text-sm font-bold text-white sm:text-base">
        Our commitment to transparency
      </p>

      <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
        We believe that transparency is not simply a compliance requirement.
      </p>

      <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">
        It is a responsibility to our donors, partners, beneficiaries,
        employees and the community we serve.
      </p>
    </div>

    {/* KEEP BUTTON */}
    <div className="mt-auto pt-7">
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#ED6439] transition-colors duration-300 group-hover:bg-[#14212B] group-hover:text-white">
        View Financial Statements

        <ArrowUpRight
          className="h-4 w-4"
          strokeWidth={2.2}
        />
      </span>
    </div>
  </Link>
</Reveal>
    </div>
  </div>
</section>

        {/* ======================================================
            SETTING TRENDS IN AGE CARE
        ====================================================== */}
        <section className="bg-[#FBF6EC]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <SectionMarker index="09" label="Setting trends in age care" />
              <h2 className="mt-5 max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-[#1B2A35] sm:text-4xl lg:text-5xl">
                Setting trends in age care
              </h2>
              <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#4C5C68] sm:text-base sm:leading-8">
                For nearly three decades, NMT has sought to demonstrate that
                ageing can be approached differently.
              </p>
            </Reveal>

            <Reveal delay={70}>
  <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
    <div className="rounded-2xl bg-[#ED6439] p-7 text-white sm:p-9">
      <Sparkles
        className="h-6 w-6 text-white"
        strokeWidth={1.7}
      />

      <p className="mt-6 max-w-xl font-display text-xl font-bold leading-[1.4] sm:text-2xl">
        We have moved beyond the traditional model of care to develop
        solutions that combine:
      </p>
    </div>

    <div className="rounded-2xl border border-[#1B2A35]/10 bg-white p-6 sm:p-8">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {[
          "Care",
          "Community",
          "Prevention",
          "Empowerment",
          "Innovation",
          "Advocacy",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-lg bg-[#FBF6EC] px-3.5 py-3 text-sm font-bold text-[#1B2A35]"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
</Reveal>

            <Reveal delay={130}>
              <div className="mt-6 rounded-2xl border border-[#1B2A35]/10 bg-white p-6 sm:p-8 lg:p-9">
                <p className="max-w-4xl text-[15px] leading-7 text-[#4C5C68] sm:text-base sm:leading-8">
                  From dementia day care and specialised residential care to
                  elder helplines, active ageing, livelihood programmes,
                  caregiver training and Smriti Gram, our work is guided by
                  one enduring belief:
                </p>

                <p className="mt-6 max-w-3xl border-l-2 border-[#ED6439] pl-5 font-display text-xl font-bold leading-[1.4] text-[#1B2A35] sm:pl-6 sm:text-2xl">
                  Every elder deserves to age with dignity, purpose, security
                  and belonging.
                </p>

                <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#4C5C68] sm:text-base sm:leading-8">
                  And every family should have access to the knowledge, care
                  and support they need.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ======================================================
            FINAL CTA
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#1B2A35] sm:text-4xl lg:text-5xl">
                The journey continues.
              </h2>

              <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
                {["Care", "Community", "Prevention", "Empowerment", "Innovation", "Advocacy"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-[#1B2A35]/12 bg-[#FBF6EC] px-4 py-2.5 text-sm font-semibold text-[#1B2A35]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ED6439]" />
                      {item}
                    </span>
                  ),
                )}
              </div>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ED6439] px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#D95730]"
                >
                  Explore Our Programmes
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ED6439]/30 bg-white px-6 py-3.5 text-sm font-bold text-[#ED6439] transition-colors duration-300 hover:bg-[#FFF0E6]"
                >
                  Partner With Us
                </a>

                <a
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1B2A35]/15 px-6 py-3.5 text-sm font-bold text-[#1B2A35] transition-colors duration-300 hover:bg-[#FBF6EC]"
                >
                  Support Our Work
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

/* ============================================================
   SIMPLE ICON
   ============================================================ */

function CompassIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7 text-[#ED6439]"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
    </svg>
  );
}