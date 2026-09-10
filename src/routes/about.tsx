/* eslint-disable prettier/prettier */

import { createFileRoute, Link } from "@tanstack/react-router";

import { useEffect, useRef, useState, type ReactNode } from "react";

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
   CLIENT CONTENT — unchanged
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
  { title: "Dignity", body: "Respect for worth, rights and choices." },
  { title: "Compassion", body: "Empathy, patience and understanding." },
  { title: "Person-centredness", body: "Care designed around the individual." },
  { title: "Inclusion", body: "Access irrespective of socio-economic circumstances." },
  { title: "Integrity", body: "Honesty, accountability and transparency." },
  { title: "Innovation", body: "Better, effective and sustainable solutions." },
  { title: "Professionalism", body: "Knowledge, competence and evidence." },
  { title: "Partnership", body: "Families, communities and institutions together." },
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
  "Loss of livelihood",
  "Changing family structures",
  "Limited access to care",
  "Difficulty finding reliable services",
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
  { year: "2017-18", pdf: "https://nightingaleseldercare.com/assets/files/ANNUAL-REPORTOFNMT2017-18.pdf" },
  { year: "2018-19", pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2018-19FINAL1.pdf" },
  { year: "2019-20", pdf: "https://nightingaleseldercare.com/assets/files/2019-20-NMTAnnualReport.pdf" },
  { year: "2020-21", pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2020-21.pdf" },
  { year: "2021-22", pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2021-22.pdf" },
  { year: "2022-23", pdf: "https://nightingaleseldercare.com/assets/files/Annual-report2022-2023.pdf" },
  { year: "2024-25", pdf: "https://nightingaleseldercare.com/assets/files/Annual_Report_2024_2025.pdf" },
];

/* ============================================================
   DESIGN TOKENS (as classes/constants for reuse)
   ============================================================
   Ink (dark surface):     #14212B
   Ember (brand accent):   #ED6439
   Moss (secondary dark):  #123F35
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

function SectionMarker({
  index,
  label,
  tone = "light",
}: {
  index: string;
  label: string;
  tone?: "light" | "dark";
}) {
  const ruleColor = tone === "dark" ? "bg-white/15" : "bg-[#1B2A35]/12";
  const labelColor = tone === "dark" ? "text-white/55" : "text-[#4C5C68]";

  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-sm font-bold text-[#ED6439]">
        {index}
      </span>
      <span className={`h-px flex-1 ${ruleColor}`} />
      <span className={`text-sm ${labelColor}`}>{label}</span>
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
   RECOGNITION CAROUSEL
   ============================================================ */

function RecognitionCarousel() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollBy({ left: direction === "right" ? 350 : -350, behavior: "smooth" });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let interval: ReturnType<typeof setInterval>;

    const startAutoScroll = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        if (slider.scrollLeft >= maxScroll - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 350, behavior: "smooth" });
        }
      }, 3000);
    };

    const stopAutoScroll = () => clearInterval(interval);

    startAutoScroll();
    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);
    slider.addEventListener("touchstart", stopAutoScroll, { passive: true });
    slider.addEventListener("touchend", startAutoScroll, { passive: true });

    return () => {
      clearInterval(interval);
      slider.removeEventListener("mouseenter", stopAutoScroll);
      slider.removeEventListener("mouseleave", startAutoScroll);
      slider.removeEventListener("touchstart", stopAutoScroll);
      slider.removeEventListener("touchend", startAutoScroll);
    };
  }, []);

  return (
    <section id="recognitions" className="relative overflow-hidden bg-[#ED6439] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-9 sm:mb-11">
          <SectionMarker index="06" label="Our achievements" tone="dark" />
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

      <div className="relative">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous recognition"
          className="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-[#1B2A35] shadow-sm transition-colors duration-300 hover:bg-[#14212B] hover:text-white lg:grid xl:left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next recognition"
          className="absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-[#1B2A35] shadow-sm transition-colors duration-300 hover:bg-[#14212B] hover:text-white lg:grid xl:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto px-[calc((100vw-285px)/2)] pb-3 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:px-[calc((100vw-310px)/2)] lg:px-[max(5rem,calc((100vw-1280px)/2))]"
        >
          {RECOGNITIONS.map((recognition) => (
            <article
              key={recognition.title}
              className="flex min-w-[285px] max-w-[285px] snap-start flex-col overflow-hidden rounded-lg bg-white sm:min-w-[310px] sm:max-w-[310px] lg:min-w-[350px] lg:max-w-[350px]"
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

      <div className="mt-6 flex justify-center gap-3 lg:hidden">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous recognition"
          className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#1B2A35] shadow-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next recognition"
          className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#1B2A35] shadow-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

function AboutPage() {
  return (
    <SiteLayout>
      <main className="overflow-hidden bg-[#FBF6EC] text-[#1B2A35]">
        {/* ======================================================
            HERO — dark capital-campaign-style banner
        ====================================================== */}
        <section className="bg-[#FBF6EC] pt-8 sm:px-6 sm:pt-10 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-12xl overflow-hidden rounded-[1rem] bg-[#14212B]">
              <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
                {/* LEFT — content */}
                <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 md:px-12 lg:px-14 lg:py-16">
                  <span className="inline-flex w-fit items-center rounded-full bg-[#ED6439] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                    About NMT since 1998
                  </span>

                  <h1 className="mt-6 max-w-lg font-display text-[2.1rem] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.5rem] md:text-[2.75rem] lg:text-[2.9rem]">
                    Compassionate and innovative{" "}
                    <span className="text-[#F6A36E]">age care</span>{" "}
                    solutions
                  </h1>

                  <div className="mt-8 h-px w-full max-w-md bg-white/12" />

                  <p className="mt-8 max-w-md text-sm leading-6 text-white/55">
                    Nightingales Medical Trust — a professionally managed
                    not-for-profit building practical, holistic and
                    family-centred solutions across ageing and dementia care.
                  </p>
                </div>

                {/* RIGHT — banner photo */}
                <div className="relative order-first h-[360px] w-full overflow-hidden lg:order-last lg:h-auto lg:min-h-[480px]">
                  <img
                    src={aboutHeroImage}
                    alt="Nightingales Medical Trust community"
                    width={1600}
                    height={1200}
                    className="block h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ======================================================
            WHO WE ARE
        ====================================================== */}
        <section className="bg-[#FBF6EC]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
            <Reveal>
              <SectionMarker index="01" label="Who we are" />
              <h2 className="mt-5 max-w-4xl font-display text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-[#1B2A35] sm:text-4xl lg:text-[2.9rem]">
                Nearly three decades of building better ways to age
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[#1B2A35]/10 bg-[#1B2A35]/10 lg:grid-cols-2">
              <Reveal>
                <div className="h-full bg-white p-7 sm:p-9">
                  <CompassIcon />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                    From services to care models
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-[#4C5C68] sm:text-base">
                    NMT develops need-based solutions across dementia care,
                    healthy and active ageing, social integration,
                    elder-abuse prevention, livelihood and empowerment,
                    community support, training, awareness and advocacy.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="h-full bg-[#123F35] p-7 text-white sm:p-9">
                  <Target className="h-7 w-7 text-[#F6A36E]" strokeWidth={1.7} />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#F6A36E]">
                    Our purpose
                  </p>
                  <p className="mt-4 max-w-xl font-display text-xl font-bold leading-[1.35] text-white sm:text-2xl">
                    Create practical, accessible and sustainable solutions so
                    older persons can live with dignity, and families can
                    access the support they need.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ======================================================
            WHY WE EXIST
        ====================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
            <Reveal>
              <SectionMarker index="02" label="Why we exist" />
              <h2 className="mt-5 max-w-3xl font-display text-2xl font-bold leading-[1.18] tracking-[-0.03em] text-[#1B2A35] sm:text-3xl md:text-4xl lg:text-[2.4rem]">
                Ageing should not mean losing dignity, independence or
                belonging
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-0 border-t border-[#1B2A35]/10 sm:grid-cols-3">
              {CHALLENGES.map((challenge, index) => (
                <Reveal key={challenge} delay={index * 25}>
                  <div className="flex items-start gap-3 border-b border-[#1B2A35]/10 py-4">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                    <p className="text-[13.5px] leading-6 text-[#4C5C68]">
                      {challenge}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            OUR JOURNEY — vertical timeline
        ====================================================== */}
        <section className="bg-[#FBF6EC]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <SectionMarker index="03" label="Our journey" />
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
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <Reveal>
              <SectionMarker index="04" label="Vision, mission & values" />
            </Reveal>

            <div className="mt-9 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <article className="flex h-full flex-col justify-between rounded-2xl bg-[#123F35] p-7 text-white sm:p-9">
                  <Eye className="h-7 w-7 text-[#F6A36E]" strokeWidth={1.6} />
                  <div className="mt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F6A36E]">
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
                      Enhance quality of life through community support,
                      geriatric and dementia care, active ageing, elder-abuse
                      prevention, livelihoods, education, advocacy and
                      capacity building.
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
        <section className="bg-[#FBF6EC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <Reveal>
              <SectionMarker index="05" label="People & governance" />
              <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#1B2A35] sm:text-4xl lg:text-[2.6rem]">
                Responsible governance. People who turn vision into action.
              </h2>
            </Reveal>

            <div className="mt-11 grid gap-5 lg:grid-cols-2">
              <Reveal>
                <article className="flex min-h-[300px] flex-col justify-between rounded-2xl bg-[#14212B] p-7 text-white sm:p-9">
                  <Landmark className="h-7 w-7 text-[#ED6439]" strokeWidth={1.7} />

                  <div className="mt-10">
                    <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                      Board of Trustees
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                      Experienced professionals providing strategic
                      direction, governance and oversight across NMT's work
                      in age care, healthcare and social development.
                    </p>

                    <Link
                      to="/founders"
                      className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#ED6439] px-5 py-2.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#d95538]"
                    >
                      View Board of Trustees
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                    </Link>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={80}>
                <article className="flex min-h-[300px] flex-col justify-between rounded-2xl border border-[#1B2A35]/10 bg-white p-7 sm:p-9">
                  <Users className="h-7 w-7 text-[#ED6439]" strokeWidth={1.7} />

                  <div className="mt-10">
                    <h3 className="font-display text-2xl font-bold leading-tight text-[#1B2A35] sm:text-3xl">
                      Executive Committee
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#4C5C68] sm:text-base">
                      A multidisciplinary professional team working together
                      to translate NMT's vision into meaningful programmes,
                      services and impact.
                    </p>

                    <Link
                      to="/executive-committee"
                      className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#ED6439] px-5 py-2.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#d95538]"
                    >
                      Meet the Executive Committee
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
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
        <RecognitionCarousel />

        {/* ======================================================
            PARTNERSHIPS
        ====================================================== */}
        <Partners />

        {/* ======================================================
            TRANSPARENCY
        ====================================================== */}
        <section className="bg-[#14212B] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <SectionMarker index="08" label="Transparency" tone="dark" />
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Our work, our impact, our accountability.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                We believe transparency builds trust. Explore our annual
                reports and financial documents to learn more about our
                work, impact and accountability.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl bg-white p-7 text-[#1B2A35] sm:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <FileText className="h-6 w-6 text-[#ED6439]" strokeWidth={1.8} />
                    <span className="rounded-full border border-[#1B2A35]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#4C5C68]">
                      7 reports
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                    Annual reports
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-[#1B2A35] sm:text-3xl">
                    Our work, year by year
                  </h3>

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
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-50" strokeWidth={2.2} />
                      </a>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-3 border-t border-[#1B2A35]/10 pt-5 text-xs font-medium text-[#4C5C68]">
                    <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
                    <span>Programmes · Impact · Partnerships · Achievements</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <Link
                  to="/financial-reports"
                  className="group block h-full rounded-2xl border border-white/12 bg-white/[0.05] p-7 transition-colors duration-300 hover:bg-white/[0.08] sm:p-9"
                >
                  <div className="flex items-start justify-between gap-5">
                    <ShieldCheck className="h-6 w-6 text-[#ED6439]" strokeWidth={1.7} />
                    <ArrowUpRight
                      className="h-5 w-5 text-[#F6A36E]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#F6A36E]">
                    Financial reports
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                    Transparency you can trust
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                    Access our audited financial statements and statutory
                    documents for a transparent view of our financial
                    accountability.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F6A36E]">
                    View Financial Reports
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
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
                <div className="rounded-2xl bg-[#14212B] p-7 text-white sm:p-9">
                  <Sparkles className="h-6 w-6 text-[#F6A36E]" strokeWidth={1.7} />
                  <p className="mt-6 max-w-xl font-display text-xl font-bold leading-[1.4] sm:text-2xl">
                    We have moved beyond the traditional model of care to
                    develop solutions that combine:
                  </p>
                </div>

                <div className="rounded-2xl border border-[#1B2A35]/10 bg-white p-6 sm:p-8">
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {["Care", "Community", "Prevention", "Empowerment", "Innovation", "Advocacy"].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-lg bg-[#FBF6EC] px-3.5 py-3 text-sm font-bold text-[#1B2A35]"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                          {item}
                        </div>
                      ),
                    )}
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