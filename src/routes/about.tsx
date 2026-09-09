import { createFileRoute, Link } from "@tanstack/react-router";

// import { useState, type ReactNode } from "react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  Eye,
  FileText,
  FileBarChart,
  ArrowUpRight,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

import aboutHeroImage from "../assets/about/about-hero.png";

import { Heart } from "lucide-react";

import { Recognitions } from "@/components/home/Recognitions";

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
   CLIENT CONTENT
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
    body: "Respect for worth, rights and choices.",
  },
  {
    title: "Compassion",
    body: "Empathy, patience and understanding.",
  },
  {
    title: "Person-centredness",
    body: "Care designed around the individual.",
  },
  {
    title: "Inclusion",
    body: "Access irrespective of socio-economic circumstances.",
  },
  {
    title: "Integrity",
    body: "Honesty, accountability and transparency.",
  },
  {
    title: "Innovation",
    body: "Better, effective and sustainable solutions.",
  },
  {
    title: "Professionalism",
    body: "Knowledge, competence and evidence.",
  },
  {
    title: "Partnership",
    body: "Families, communities and institutions together.",
  },
];

const RECOGNITIONS = [
  {
    image: internationalResearch,
    title: "International Research Award 2011",
    description:
      "For ‘Most promising intervention for people with dementia and their carers’ by Foundation Mederic Alzheimer and Alzheimer’s Disease International.",
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
    description:
      "For outstanding contribution to Bangalore city.",
  },
  {
    image: paulHarris,
    title: "Paul Harris Fellowship 2005",
    description:
      "Rotary Foundation for our work in Elderly and Dementia care.",
  },
  {
    image: rotaryPioneer,
    title: "Rotary Pioneer Award 2019",
    description:
      "Presented by Rotary Club - Bangalore Downtown.",
  },
  {
    image: ipsAward,
    title: "IPS-KC Distinguished Service Award 2023",
    description:
      "By the Karnataka Chapter of the Indian Psychiatric Society.",
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
  {
    year: "2017-18",
    pdf: "https://nightingaleseldercare.com/assets/files/ANNUAL-REPORTOFNMT2017-18.pdf",
  },
  {
    year: "2018-19",
    pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2018-19FINAL1.pdf",
  },
  {
    year: "2019-20",
    pdf: "https://nightingaleseldercare.com/assets/files/2019-20-NMTAnnualReport.pdf",
  },
  {
    year: "2020-21",
    pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2020-21.pdf",
  },
  {
    year: "2021-22",
    pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2021-22.pdf",
  },
  {
    year: "2022-23",
    pdf: "https://nightingaleseldercare.com/assets/files/Annual-report2022-2023.pdf",
  },
  {
    year: "2024-25",
    pdf: "https://nightingaleseldercare.com/assets/files/Annual_Report_2024_2025.pdf",
  },
];


/* ============================================================
   SMALL DESIGN HELPERS
   ============================================================ */

function Eyebrow({
  number,
  children,
}: {
  number?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      {number && (
        <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#ED6439]">
          {number}
        </span>
      )}

      <span className="h-px w-8 bg-[#ED6439]" />

      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
        {children}
      </span>
    </div>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  description: intro,
  centered = false,
}: {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Eyebrow number={number}>{eyebrow}</Eyebrow>

      <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[#263746] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {intro && (
        <p className="mt-6 text-[15px] leading-8 text-[#526574] sm:text-base">
          {intro}
        </p>
      )}
    </div>
  );
}

function OrangeIcon({
  children,
  large = false,
}: {
  children: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={[
        "grid shrink-0 place-items-center rounded-2xl bg-[#FFF0E6] text-[#ED6439]",
        large ? "h-16 w-16 rounded-[1.25rem]" : "h-12 w-12",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function OrangeLine() {
  return <div className="h-1 w-12 rounded-full bg-[#ED6439]" />;
}

/* ============================================================
   PAGE
   ============================================================ */

function RecognitionCarousel() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: direction === "right" ? 350 : -350,
      behavior: "smooth",
    });
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
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          slider.scrollBy({
            left: 350,
            behavior: "smooth",
          });
        }
      }, 3000);
    };

    const stopAutoScroll = () => {
      clearInterval(interval);
    };

    startAutoScroll();

    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

    slider.addEventListener("touchstart", stopAutoScroll, {
      passive: true,
    });

    slider.addEventListener("touchend", startAutoScroll, {
      passive: true,
    });

    return () => {
      clearInterval(interval);

      slider.removeEventListener("mouseenter", stopAutoScroll);
      slider.removeEventListener("mouseleave", startAutoScroll);

      slider.removeEventListener("touchstart", stopAutoScroll);
      slider.removeEventListener("touchend", startAutoScroll);
    };
  }, []);

  return (
    <section
      id="recognitions"
      className="relative overflow-hidden bg-[#ED6439] py-16 sm:py-20 lg:py-24"
    >
      {/* SECTION HEADER */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-9 sm:mb-11">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-white" />

            <span className="text-lg font-bold uppercase tracking-[0.2em] text-white sm:text-xl lg:text-2xl">
              Our Achievements
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Recognitions & Awards
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Our work in elder care, dementia care and community service has
            been recognized by institutions and organizations across India and
            internationally.
          </p>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="relative">
        {/* LEFT BUTTON */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous recognition"
          className="
            absolute
            left-2
            top-1/2
            z-20
            hidden
            h-11
            w-11
            -translate-y-1/2
            place-items-center
            rounded-full
            border
            border-black/10
            bg-white
            text-[#263746]
            shadow-sm
            transition-all
            duration-300
            hover:bg-[#ED6439]
            hover:text-white
            lg:grid
            xl:left-6
          "
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next recognition"
          className="
            absolute
            right-2
            top-1/2
            z-20
            hidden
            h-11
            w-11
            -translate-y-1/2
            place-items-center
            rounded-full
            border
            border-black/10
            bg-white
            text-[#263746]
            shadow-sm
            transition-all
            duration-300
            hover:bg-[#ED6439]
            hover:text-white
            lg:grid
            xl:right-6
          "
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex
            gap-5
            overflow-x-auto
            px-[calc((100vw-285px)/2)]
            pb-3
            scroll-smooth
            snap-x
            snap-mandatory
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:gap-6
            sm:px-[calc((100vw-310px)/2)]

            lg:px-[max(5rem,calc((100vw-1280px)/2))]
          "
        >
          {RECOGNITIONS.map((recognition) => (
            <article
              key={recognition.title}
              className="
                flex
                min-w-[285px]
                max-w-[285px]
                snap-start
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-black/[0.06]
                bg-white
                transition-transform
                duration-300
                hover:-translate-y-1
                sm:min-w-[310px]
                sm:max-w-[310px]
                lg:min-w-[350px]
                lg:max-w-[350px]
              "
            >
              {/* IMAGE */}
              <div
                className="
                  flex
                  h-[175px]
                  items-center
                  justify-center
                  bg-[#FAFAFA]
                  px-6
                  py-5
                  sm:h-[185px]
                "
              >
                <img
                  src={recognition.image}
                  alt={recognition.title}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="
                      grid
                      h-8
                      w-8
                      place-items-center
                      rounded-full
                      bg-[#FFF0E8]
                      text-[#ED6439]
                    "
                  >
                    <Award className="h-4 w-4" />
                  </span>

                  <span className="h-[2px] w-7 rounded-full bg-[#ED6439]" />
                </div>

                <h3
                  className="
                    font-display
                    text-lg
                    font-extrabold
                    leading-tight
                    text-[#263746]
                    sm:text-xl
                  "
                >
                  {recognition.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-[#263746]/70
                  "
                >
                  {recognition.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MOBILE BUTTONS */}
      <div className="mt-6 flex justify-center gap-3 lg:hidden">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous recognition"
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-full
            border
            border-black/10
            bg-white
            text-[#263746]
            shadow-sm
            transition-colors
            hover:bg-[#ED6439]
            hover:text-white
          "
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next recognition"
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-full
            border
            border-black/10
            bg-white
            text-[#263746]
            shadow-sm
            transition-colors
            hover:bg-[#ED6439]
            hover:text-white
          "
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

function AboutPage() {
  /* ============================================================
     JOURNEY CAROUSEL STATE
     ============================================================ */

  const JOURNEY_PER_PAGE = 3;

  const [journeyPage, setJourneyPage] = useState(0);

  const totalJourneyPages = Math.ceil(
    JOURNEY.length / JOURNEY_PER_PAGE,
  );

  const journeyStart = journeyPage * JOURNEY_PER_PAGE;

  const visibleJourney = JOURNEY.slice(
    journeyStart,
    journeyStart + JOURNEY_PER_PAGE,
  );

  const previousJourneyPage = () => {
    setJourneyPage((current) =>
      current === 0 ? totalJourneyPages - 1 : current - 1,
    );
  };

  const nextJourneyPage = () => {
    setJourneyPage((current) =>
      current === totalJourneyPages - 1 ? 0 : current + 1,
    );
  };

  return (
    <SiteLayout>
      <main className="overflow-hidden bg-[#FFFDF9] text-[#263746]">

    {/* ======================================================
    HERO — ABOUT NMT
====================================================== */}

<section className="relative overflow-hidden border-b border-[#ED6439]/15 bg-[#FFF8EF]">

  <div
    className="
      grid
      w-full
      grid-cols-1
      items-stretch
      lg:grid-cols-[0.85fr_1.15fr]
      lg:min-h-[460px]
      xl:min-h-[480px]
    "
  >

    {/* ==================================================
        LEFT — CONTENT
    ================================================== */}

    <div
      className="
        order-2
        flex
        items-center
        bg-[#FFF8EF]
        px-6
        py-10
        sm:px-10
        sm:py-12
        md:px-14
        md:py-14
        lg:order-1
        lg:px-12
        lg:py-12
        xl:px-16
      "
    >
      <Reveal>

        <div className="w-full max-w-[560px]">

          {/* TOP LABEL */}
          <div className="mb-4 flex items-center gap-3">

            <span
              className="
                h-[2px]
                w-8
                shrink-0
                bg-[#ED6439]
              "
            />

            <span
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-[#ED6439]
                sm:text-xs
              "
            >
              About NMT Since 1998
            </span>

          </div>


          {/* MAIN HEADING */}
          <h1
            className="
              max-w-[560px]
              font-display
              text-[2rem]
              font-bold
              leading-[1.05]
              tracking-[-0.035em]
              text-[#263746]
              sm:text-[2.35rem]
              md:text-[2.65rem]
              lg:text-[2.8rem]
              xl:text-[3.15rem]
            "
          >
            Compassionate and Innovative{" "}
            <span className="text-[#ED6439]">
              Age Care
            </span>{" "}
            Solutions
          </h1>

        </div>

      </Reveal>
    </div>


    {/* ==================================================
        RIGHT — BANNER PHOTO (END TO END)
    ================================================== */}

    <div
      className="
        order-1
        relative
        w-full
        overflow-hidden
        lg:order-2
        lg:min-h-[460px]
        xl:min-h-[480px]
      "
    >

      <img
        src={aboutHeroImage}
        alt="Nightingales Medical Trust community"
        width={1600}
        height={1200}
        className="
          block
          h-full
          min-h-[260px]
          w-full
          object-cover
          object-center
        "
      />

    </div>

  </div>

</section>

        {/* ======================================================
    WHO WE ARE
====================================================== */}

<section className="relative overflow-hidden bg-[#FFF7EC]">

  {/* Decorative background element */}
  <div
    className="
      pointer-events-none
      absolute
      -right-32
      top-10
      h-72
      w-72
      rounded-full
      bg-[#ED6439]/5
      blur-3xl
    "
  />

  <div
    className="
      relative
      mx-auto
      max-w-7xl
      px-4
      py-12
      sm:px-8
      sm:py-14
      lg:px-10
      lg:py-16
    "
  >

    {/* ==================================================
        SECTION HEADING
    ================================================== */}

    <Reveal>

      <div className="w-full max-w-5xl">

        {/* Who We Are */}
        <p
          className="
            flex
            items-center
            gap-3
            text-xs
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#ED6439]
          "
        >
          <span className="h-px w-10 bg-[#ED6439]" />
          Who We Are
        </p>


        {/* Main heading — now directly below Who We Are */}
        <h2
  className="
    w-full
    font-display
    text-3xl
    font-bold
    leading-tight
    tracking-[-0.025em]
    text-[#263746]
    sm:text-4xl
    lg:text-[3rem]
    xl:text-[3.2rem]
  "
>
  Nearly Three Decades of Building{" "}
  <span className="text-[#ED6439]">
    Better Ways to Age.
  </span>
</h2>

      </div>

    </Reveal>


    {/* ==================================================
        MAIN CONTENT
    ================================================== */}

    <div className="relative mt-9 sm:mt-10">

      {/* Connecting line */}
      <div
        className="
          pointer-events-none
          absolute
          left-8
          top-0
          hidden
          h-full
          w-px
          bg-[#ED6439]/15
          lg:block
        "
      />

      <div
        className="
          grid
          gap-6
          lg:grid-cols-2
          lg:gap-10
        "
      >

        {/* ==================================================
            FROM SERVICES TO CARE MODELS
        ================================================== */}

        <Reveal>

          <article className="relative lg:pl-16">

            {/* Number */}
            <div
              className="
                absolute
                left-0
                top-0
                hidden
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#ED6439]/20
                bg-[#FFF7EC]
                font-display
                text-base
                font-bold
                text-[#ED6439]
                lg:flex
              "
            >
              01
            </div>


            {/* Card */}
            <div
              className="
                rounded-[1.25rem]
                border
                border-[#263746]/10
                bg-white
                p-6
                shadow-[0_20px_60px_-45px_rgba(38,55,70,0.45)]
                sm:p-7
                lg:p-8
              "
            >

              {/* Card heading */}
              <div className="flex items-center gap-4">

                <OrangeIcon large>
                  <CompassIcon />
                </OrangeIcon>

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#ED6439]
                  "
                >
                  From services to care models
                </p>

              </div>


              {/* Card content */}
              <p
                className="
                  mt-5
                  text-[15px]
                  leading-7
                  text-[#526574]
                  sm:text-base
                  sm:leading-7
                "
              >
                NMT develops need-based solutions across dementia care,
                healthy and active ageing, social integration, elder-abuse
                prevention, livelihood and empowerment, community support,
                training, awareness and advocacy.
              </p>

            </div>

          </article>

        </Reveal>


        {/* ==================================================
            OUR PURPOSE
        ================================================== */}

        <Reveal delay={100}>

          <article className="relative lg:pl-16">

            {/* Number */}
            <div
              className="
                absolute
                left-0
                top-0
                hidden
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#ED6439]/20
                bg-[#FFF7EC]
                font-display
                text-base
                font-bold
                text-[#ED6439]
                lg:flex
              "
            >
              02
            </div>


            {/* Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[1.25rem]
                bg-[#263746]
                p-6
                text-white
                shadow-[0_25px_70px_-35px_rgba(38,55,70,0.6)]
                sm:p-7
                lg:p-8
              "
            >

              {/* Decorative circle */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  border
                  border-[#ED6439]/20
                "
              />


              <div className="relative">

                {/* Card heading */}
                <div className="flex items-center gap-4">

                  <OrangeIcon large>
                    <Target
                      className="h-7 w-7"
                      strokeWidth={1.7}
                    />
                  </OrangeIcon>

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#F6A36E]
                    "
                  >
                    Our purpose
                  </p>

                </div>


                {/* Purpose content */}
                <p
                  className="
                    mt-5
                    max-w-xl
                    font-display
                    text-xl
                    font-bold
                    leading-[1.3]
                    text-white
                    sm:text-2xl
                    lg:text-[1.65rem]
                  "
                >
                  Create practical, accessible and sustainable solutions so
                  older persons can live with dignity—
                  <span className="text-[#F6A36E]">
                    {" "}and families can access the support they need.
                  </span>
                </p>

              </div>

            </div>

          </article>

        </Reveal>

      </div>

    </div>

  </div>

</section>

     {/* ======================================================
    WHY WE EXIST
====================================================== */}

<section className="relative overflow-hidden bg-[#FFF7EC]">

  {/* Decorative background */}
  <div
    className="
      pointer-events-none
      absolute
      -left-32
      top-20
      h-64
      w-64
      rounded-full
      bg-[#ED6439]/5
      blur-3xl
    "
  />

  <div
    className="
      mx-auto
      max-w-7xl
      px-4
      py-12
      sm:px-8
      sm:py-14
      lg:px-10
      lg:py-16
    "
  >

    {/* ==================================================
        HEADER
    ================================================== */}

    <Reveal>
      <div>

        {/* Section label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#ED6439]" />

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
            Why We Exist
          </p>
        </div>

        {/* Heading */}
        <h2
  className="
    mt-4
    w-full
    font-display
    text-2xl
    font-bold
    leading-[1.15]
    tracking-[-0.035em]
    text-[#263746]
    sm:text-3xl
    md:text-4xl
    lg:text-[2.35rem]
    xl:text-[2.7rem]
  "
>
  Ageing Should Not Mean Losing{" "}
  <span className="text-[#ED6439]">
    Dignity, Independence or Belonging.
  </span>
</h2>

      </div>
    </Reveal>


    {/* ==================================================
        CHALLENGES — 3 COLUMN COMPACT GRID
    ================================================== */}

    <div
      className="
        mt-9
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        border-t
        border-[#263746]/10
      "
    >

      {CHALLENGES.map((challenge, index) => (
        <Reveal
          key={challenge}
          delay={index * 30}
        >
          <div
            className="
              group
              flex
              min-h-[62px]
              items-center
              gap-3
              border-b
              border-[#263746]/10
              px-2
              py-3
              transition-all
              duration-300
              hover:bg-white/60
              sm:px-3
              lg:border-r
              lg:px-4
              lg:last:border-r-0
            "
          >

            {/* Number */}
            <span
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                font-display
                text-[10px]
                font-bold
                text-[#ED6439]
                shadow-[0_4px_15px_-8px_rgba(38,55,70,0.4)]
                transition-all
                duration-300
                group-hover:bg-[#ED6439]
                group-hover:text-white
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Challenge text */}
            <p
              className="
                text-[12.5px]
                font-medium
                leading-5
                text-[#526574]
                transition-colors
                duration-300
                group-hover:text-[#263746]
                sm:text-[13px]
              "
            >
              {challenge}
            </p>

          </div>
        </Reveal>
      ))}

    </div>


    {/* ==================================================
        CLOSING STATEMENT
    ================================================== */}

    <Reveal delay={180}>
      <div
        className="
          mt-7
          flex
          flex-col
          gap-2
          border-t-2
          border-[#ED6439]
          pt-5
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >

        {/* <p
          className="
            max-w-3xl
            font-display
            text-base
            font-bold
            leading-6
            text-[#263746]
            sm:text-lg
          "
        >
          Every older person deserves the opportunity to age with dignity,
          security and purpose.
        </p>

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-[#ED6439]
          "
        >
          Our commitment
        </span> */}

      </div>
    </Reveal>

  </div>
</section>

        {/* ======================================================
    OUR JOURNEY
====================================================== */}

<section className="relative overflow-hidden bg-white">

  {/* Decorative background */}
  <div
    className="
      pointer-events-none
      absolute
      -right-32
      top-10
      h-80
      w-80
      rounded-full
      bg-[#ED6439]/5
      blur-3xl
    "
  />

  <div
    className="
      relative
      mx-auto
      max-w-7xl
      px-4
      py-14
      sm:px-8
      sm:py-16
      lg:px-10
      lg:py-20
    "
  >

    {/* ==================================================
        HEADER
    ================================================== */}

    <Reveal>
      <div className="w-full max-w-6xl">

        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#ED6439]" />

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
            Our Journey
          </p>
        </div>

        <h2
          className="
            mt-4
            w-full
            max-w-5xl
            font-display
            text-3xl
            font-bold
            leading-[1.08]
            tracking-[-0.025em]
            text-[#263746]
            sm:text-4xl
            lg:text-[42px]
          "
        >
          Nightingales' Story Began In A Modest Garage In Sadashivnagar, Bengaluru.
        </h2>

      </div>
    </Reveal>


   {/* ==================================================
    INTRODUCTION
================================================== */}

<Reveal delay={70}>
  <div
    className="
      mt-7
      max-w-6xl
      border-l-2
      border-[#ED6439]
      pl-5
      sm:pl-6
    "
  >

    <p className="text-sm leading-7 text-[#526574] sm:text-[15px]">
      Nightingales' story began in a modest garage in Sadashivnagar, Bengaluru.
    </p>

    <p className="mt-3 text-sm leading-7 text-[#526574] sm:text-[15px]">
      The founders, Dr Radha S Murthy and Mr S Premkumar Raja, began by
      providing home healthcare through Nightingales Home Health Services.
      As they interacted with older persons and their families, they
      recognised that medical care alone was not enough.
    </p>

    <p className="mt-3 text-sm leading-7 text-[#526574] sm:text-[15px]">
      Many elders were also struggling with:
    </p>

    <p className="mt-1 text-sm leading-7 text-[#526574] sm:text-[15px]">
      Loneliness. Emotional distress. abuse. Financial insecurity. Social isolation.
    </p>

    <p className="mt-3 text-sm leading-7 text-[#526574] sm:text-[15px]">
      This realisation led to the establishment of Nightingales Medical
      Trust in 1998, with a vision of creating a more comprehensive
      approach to ageing.
    </p>

  </div>
</Reveal>


    {/* ==================================================
        THREE DECADES
    ================================================== */}

    <Reveal delay={100}>
      <div className="mt-9">

        <div className="mb-4 flex items-center gap-4">

          <h3
            className="
              font-display
              text-xl
              font-bold
              tracking-[-0.02em]
              text-[#263746]
              sm:text-2xl
            "
          >
            Three decades of innovation
          </h3>

          <span className="h-px flex-1 bg-[#263746]/10" />

        </div>


        {/* ==================================================
            SCROLLABLE JOURNEY AREA
        ================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[1.25rem]
            border
            border-[#263746]/10
            bg-white
            shadow-[0_15px_50px_-40px_rgba(38,55,70,0.45)]
          "
        >

          {/* Scroll container */}
          <div
            className="
              max-h-[520px]
              overflow-y-auto
              overscroll-contain
              scroll-smooth
              scrollbar-thin
              scrollbar-track-[#FFF7EC]
              scrollbar-thumb-[#ED6439]/40
            "
          >

            <div className="min-w-0">

              {/* Table header - desktop */}
              <div
                className="
                  sticky
                  top-0
                  z-10
                  hidden
                  border-b
                  border-[#263746]/10
                  bg-[#FFF7EC]/95
                  backdrop-blur-sm
                  md:grid
                  md:grid-cols-[100px_1fr_1.55fr]
                  md:gap-6
                  md:px-6
                  md:py-3
                "
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                  Year
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                  Milestone
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                  Details
                </span>
              </div>


              {/* Journey rows */}
              <div className="divide-y divide-[#263746]/10">

                {JOURNEY.map((item, index) => (
                  <Reveal
                    key={`${item.year}-${index}`}
                    delay={index * 15}
                  >

                    <article
                      className="
                        relative
                        px-5
                        py-4
                        transition-colors
                        duration-200
                        hover:bg-[#FFF7EC]/45
                        md:grid
                        md:grid-cols-[100px_1fr_1.55fr]
                        md:items-start
                        md:gap-6
                        md:px-6
                        md:py-4
                      "
                    >

                      {/* Year */}
                      <div className="flex items-center gap-3 md:block">

                        <span
                          className="
                            font-display
                            text-sm
                            font-bold
                            tracking-[-0.01em]
                            text-[#ED6439]
                            md:text-[15px]
                          "
                        >
                          {item.year}
                        </span>

                      </div>


                      {/* Milestone */}
                      <div className="mt-2 md:mt-0">

                        <h4
                          className="
                            max-w-md
                            font-display
                            text-[15px]
                            font-bold
                            leading-[1.3]
                            tracking-[-0.01em]
                            text-[#263746]
                            sm:text-base
                          "
                        >
                          {item.title}
                        </h4>

                      </div>


                      {/* Details */}
                      <div className="mt-2 md:mt-0">

                        {item.body && (
                          <p
                            className="
                              text-xs
                              leading-5
                              text-[#526574]
                              sm:text-[13px]
                              sm:leading-6
                            "
                          >
                            {item.body}
                          </p>
                        )}

                      </div>

                    </article>

                  </Reveal>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </Reveal>







    {/* ==================================================
        JOURNEY CLOSING
    ================================================== */}

    <Reveal delay={150}>
      <div
        className="
          mt-6
          rounded-xl
          border
          border-[#ED6439]/10
          bg-[#FFF7EC]
          px-4
          py-5
          text-center
          sm:px-8
          sm:py-6
        "
      >

        <p
          className="
            font-display
            text-base
            font-bold
            italic
            leading-6
            text-[#263746]
            sm:text-lg
          "
        >
          The journey continues.
        </p>

        <p
          className="
            mx-auto
            mt-3
            max-w-4xl
            text-sm
            leading-6
            text-[#526574]
          "
        >
          From a small beginning in Bengaluru, NMT has grown into a
          multi-dimensional organisation working across age care, dementia
          care, social protection, empowerment, training and advocacy.
        </p>

        <p
          className="
            mx-auto
            mt-2
            max-w-4xl
            text-sm
            leading-6
            text-[#526574]
          "
        >
          Our next chapter is focused on building scalable models for the future
          of ageing and dementia care.
        </p>

      </div>
    </Reveal>

  </div>
</section>

    {/* ======================================================
    VISION / MISSION / VALUES
====================================================== */}

<section className="relative overflow-hidden bg-[#FFF7EC]">
  {/* Decorative background elements */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#ED6439]/[0.045] blur-2xl" />
  <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#123F35]/[0.05] blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

    {/* ==================================================
        SECTION HEADING
    ================================================== */}

    <Reveal>
      <div>
  <div className="mb-5 flex items-center gap-4">
    <span
      className="
        font-display
        text-2xl
        font-bold
        tracking-[-0.02em]
        text-[#263746]
        sm:text-3xl
        lg:text-4xl
      "
    >
      Vision, Mission & Values
    </span>

    <span className="h-px w-12 bg-[#ED6439]" />
  </div>
</div>
    </Reveal>


    {/* ==================================================
        VISION + MISSION
    ================================================== */}

    <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">

      {/* =========================
          VISION
      ========================= */}

      <Reveal>
        <article
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            bg-[#123F35]
            p-7
            text-white
            shadow-[0_25px_70px_-35px_rgba(18,63,53,0.65)]
            transition-all
            duration-500
            hover:-translate-y-1
            sm:p-8
            lg:p-9
          "
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#ED6439]/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />

          {/* Decorative ring */}
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full border border-white/10" />

          <div className="relative">

            {/* Icon */}
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/10 text-[#F6A36E] backdrop-blur-sm">
              <Eye
                className="h-7 w-7"
                strokeWidth={1.6}
              />
            </div>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F6A36E]">
              Our vision
            </p>

            <h3 className="mt-3 max-w-xl font-display text-2xl font-bold leading-[1.18] sm:text-3xl lg:text-[2rem]">
              A society where elders are healthy, happy, empowered and
              socially integrated.
            </h3>

          </div>
        </article>
      </Reveal>


      {/* =========================
          MISSION
      ========================= */}

      <Reveal delay={100}>
        <article
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-[#ED6439]/15
            bg-white
            p-7
            shadow-[0_25px_65px_-40px_rgba(38,55,70,0.45)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#ED6439]/30
            sm:p-8
            lg:p-9
          "
        >
          {/* Warm decorative shape */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ED6439]/[0.07] blur-2xl transition-transform duration-700 group-hover:scale-125" />

          <div className="relative">

            {/* Icon */}
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FFF0E6] text-[#ED6439]">
              <Target
                className="h-7 w-7"
                strokeWidth={1.6}
              />
            </div>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ED6439]">
              Our mission
            </p>

            <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#526574] sm:text-base sm:leading-7">
              Enhance quality of life through community support,
              geriatric and dementia care, active ageing, elder-abuse
              prevention, livelihoods, education, advocacy and capacity
              building.
            </p>

          </div>
        </article>
      </Reveal>

    </div>


    {/* ==================================================
        VALUES
    ================================================== */}

    <div className="mt-14">

      <Reveal>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ED6439]" />

          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ED6439]">
            Our values
          </p>
        </div>
      </Reveal>


      {/* Value Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {VALUES.map((value, index) => (
          <Reveal
            key={value.title}
            delay={index * 60}
          >
            <article
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#263746]/10
                bg-white
                p-6
                transition-all
                duration-400
                hover:-translate-y-1.5
                hover:border-[#ED6439]/25
                hover:shadow-[0_20px_55px_-30px_rgba(38,55,70,0.45)]
              "
            >

              {/* Top accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#ED6439] to-[#F6A36E] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-[#ED6439]/15 transition-colors duration-300 group-hover:text-[#ED6439]/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FFF7EC] text-xs font-bold text-[#ED6439] transition-all duration-300 group-hover:bg-[#ED6439] group-hover:text-white">
                  +
                </span>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h4 className="font-display text-lg font-bold leading-tight text-[#263746] sm:text-xl">
                  {value.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-[#526574]">
                  {value.body}
                </p>
              </div>

              {/* Bottom line */}
              <div className="mt-6 h-px w-10 bg-[#ED6439]/30 transition-all duration-300 group-hover:w-16 group-hover:bg-[#ED6439]" />

            </article>
          </Reveal>
        ))}

      </div>

    </div>

  </div>
</section>

      {/* ======================================================
    PEOPLE & GOVERNANCE
====================================================== */}

<section className="relative overflow-hidden bg-white">
  {/* Decorative background */}
  <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#ED6439]/5 blur-3xl" />
  <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#FFF7EC] blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

    {/* ==================================================
        SECTION HEADING
    ================================================== */}

    <Reveal>
      <div className="w-full max-w-full">

        <div className="mb-5 flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
            People & Governance
          </span>

          <span className="h-px w-12 bg-[#ED6439]" />
        </div>

      <h2
  className="
    font-display
    text-3xl
    font-bold
    leading-[1.08]
    tracking-[-0.035em]
    text-[#263746]
    sm:text-4xl
    lg:whitespace-nowrap
    lg:text-[2.75rem]
  "
>
  Responsible Governance. People Who Turn Vision into Action.
</h2>

      </div>
    </Reveal>


    {/* ==================================================
        FEATURE CARDS
    ================================================== */}

    <div className="mt-12 grid gap-6 lg:grid-cols-2">

      {/* ==================================================
          BOARD OF TRUSTEES
      ================================================== */}

      <Reveal>
        <article
          className="
            group
            relative
            flex
            min-h-[330px]
            sm:min-h-[390px]
            flex-col
            overflow-hidden
            rounded-[2rem]
            bg-[#263746]
            p-7
            text-white
            shadow-[0_25px_70px_-30px_rgba(38,55,70,0.45)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_35px_80px_-30px_rgba(38,55,70,0.55)]
            sm:p-9
            lg:p-10
          "
        >
          {/* Decorative circle */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-48
              w-48
              rounded-full
              border
              border-white/10
              transition-transform
              duration-700
              group-hover:scale-125
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-8
              -top-8
              h-32
              w-32
              rounded-full
              bg-[#ED6439]/15
              blur-2xl
            "
          />

          {/* Icon */}
          <div
            className="
              relative
              grid
              h-14
              w-14
              place-items-center
              rounded-2xl
              bg-[#ED6439]
              text-white
              shadow-[0_12px_30px_-8px_rgba(237,100,57,0.7)]
              transition-transform
              duration-500
              group-hover:scale-105
            "
          >
            <Landmark
              className="h-7 w-7"
              strokeWidth={1.7}
            />
          </div>

          {/* Content */}
          <div className="relative mt-auto pt-12">

            <div className="mb-3 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F6A36E]">
                01
              </span>

              <span className="h-px w-8 bg-[#ED6439]" />
            </div>

            <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
              Board of Trustees
            </h3>

            <p className="mt-4 w-full max-w-lg text-sm leading-7 text-white/65 sm:text-base">
              Experienced professionals providing strategic direction,
              governance and oversight across NMT's work in age care,
              healthcare and social development.
            </p>

            {/* Direct Board Page */}
            <Link
              to="/founders"
              className="
                mt-7
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-[#ED6439]
                px-5
                py-2.5
                text-sm
                font-bold
                text-white
                shadow-[0_10px_25px_-10px_rgba(237,100,63,0.7)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#d95538]
              "
            >
              View Board of Trustees

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
                strokeWidth={2.2}
              />
            </Link>

          </div>
        </article>
      </Reveal>


      {/* ==================================================
          EXECUTIVE COMMITTEE
      ================================================== */}

      <Reveal delay={100}>
        <article
          className="
            group
            relative
            flex
            min-h-[330px]
            sm:min-h-[390px]
            flex-col
            overflow-hidden
            rounded-[2rem]
            border
            border-[#ED6439]/15
            bg-[#FFF7EC]
            p-7
            shadow-[0_25px_70px_-35px_rgba(38,55,70,0.3)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#ED6439]/30
            hover:shadow-[0_35px_80px_-35px_rgba(38,55,70,0.4)]
            sm:p-9
            lg:p-10
          "
        >
          {/* Decorative shape */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-52
              w-52
              rounded-full
              border
              border-[#ED6439]/10
              transition-transform
              duration-700
              group-hover:scale-125
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-8
              top-8
              h-20
              w-20
              rounded-full
              bg-[#ED6439]/10
              blur-2xl
            "
          />

          {/* Icon */}
          <div
            className="
              relative
              grid
              h-14
              w-14
              place-items-center
              rounded-2xl
              bg-white
              text-[#ED6439]
              shadow-[0_12px_30px_-15px_rgba(38,55,70,0.35)]
              transition-transform
              duration-500
              group-hover:scale-105
            "
          >
            <Users
              className="h-7 w-7"
              strokeWidth={1.7}
            />
          </div>

          {/* Content */}
          <div className="relative mt-auto pt-12">

            <div className="mb-3 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                02
              </span>

              <span className="h-px w-8 bg-[#ED6439]" />
            </div>

            <h3 className="font-display text-2xl font-bold leading-tight text-[#263746] sm:text-3xl">
              Executive Committee
            </h3>

            <p className="mt-4 w-full max-w-lg text-sm leading-7 text-[#526574] sm:text-base">
              A multidisciplinary professional team working together to
              translate NMT's vision into meaningful programmes, services
              and impact.
            </p>

            {/* Direct Executive Committee Page */}
            <Link
              to="/executive-committee"
              className="
                mt-7
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-[#ED6439]
                px-5
                py-2.5
                text-sm
                font-bold
                text-white
                shadow-[0_10px_25px_-10px_rgba(237,100,63,0.7)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#d95538]
              "
            >
              Meet the Executive Committee

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
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

<RecognitionCarousel />

       {/* ======================================================
    PARTNERSHIPS
====================================================== */}

<Partners />

 {/* ======================================================
    TRANSPARENCY
====================================================== */}

<section className="bg-[#263746] text-white">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

    {/* ==================================================
        HEADER
    ================================================== */}

    <div className="w-full max-w-3xl">

      <Eyebrow>
        Transparency
      </Eyebrow>

      <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
        Our Work, Our Impact.
        <span className="text-[#F6A36E]"> Our Accountability.</span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
        We believe transparency builds trust. Explore our annual reports
        and financial documents to learn more about our work, impact and
        accountability.
      </p>

    </div>


    {/* ==================================================
        TRANSPARENCY LINKS
    ================================================== */}

    <div className="mt-12 grid gap-6 lg:grid-cols-2">


      {/* ==================================================
    ANNUAL REPORTS
================================================== */}

<Reveal>
  <div
    className="
      group
      relative
      h-full
      overflow-hidden
      rounded-[1.75rem]
      bg-white
      text-[#263746]
      shadow-[0_25px_60px_-30px_rgba(0,0,0,0.45)]
      transition-all
      duration-500
      hover:-translate-y-1
      hover:shadow-[0_30px_70px_-25px_rgba(237,100,57,0.25)]
    "
  >

    {/* ================================================
        VIBRANT TOP ACCENT
    ================================================= */}

    <div
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#ED6439]
        via-[#F47745]
        to-[#F6A36E]
        px-7
        py-7
        sm:px-9
        sm:py-8
      "
    >

      {/* Decorative circles */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-16
          h-40
          w-40
          rounded-full
          border
          border-white/20
          bg-white/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-10
          h-36
          w-36
          rounded-full
          bg-white/10
        "
      />

      <div className="relative flex items-start justify-between gap-4">

        {/* Icon */}

        <div
          className="
            grid
            h-12
            w-12
            shrink-0
            place-items-center
            rounded-2xl
            bg-white/20
            text-white
            ring-1
            ring-white/30
            backdrop-blur-sm
            transition-transform
            duration-500
            group-hover:scale-110
          "
        >
          <FileText
            className="h-6 w-6"
            strokeWidth={1.8}
          />
        </div>

        {/* Count */}

        <div
          className="
            rounded-full
            border
            border-white/25
            bg-white/15
            px-3.5
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-white
            backdrop-blur-sm
          "
        >
          7 Reports
        </div>

      </div>

      <div className="relative mt-6">

        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.18em]
            text-white/80
          "
        >
          Annual Reports
        </p>

        <h3
          className="
            mt-2
            font-display
            text-2xl
            font-bold
            leading-tight
            text-white
            sm:text-3xl
          "
        >
          Our work, year by year.
        </h3>

      </div>

    </div>


    {/* ================================================
        REPORT CONTENT
    ================================================= */}

    <div className="px-7 py-7 sm:px-9 sm:py-8">

      {/* <p
        className="
          max-w-xl
          text-sm
          leading-7
          text-[#526574]
          sm:text-base
        "
      >
        Explore our annual reports to see our programmes,
        impact, financial performance and achievements.
      </p> */}


      {/* ================================================
          YEAR BUTTONS
      ================================================= */}

      <div className="mt-6 flex flex-wrap gap-2.5">

        {annualReports.map((report) => (
          <a
            key={report.year}
            href={report.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/year
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-[#ED6439]/15
              bg-[#FFF5EE]
              px-4
              py-2.5
              text-sm
              font-bold
              text-[#263746]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#ED6439]
              hover:bg-[#ED6439]
              hover:text-white
              hover:shadow-[0_8px_20px_-8px_rgba(237,100,57,0.7)]
            "
          >
            {report.year}

            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                opacity-40
                transition-all
                duration-300
                group-hover/year:translate-x-0.5
                group-hover/year:-translate-y-0.5
                group-hover/year:opacity-100
              "
              strokeWidth={2.2}
            />
          </a>
        ))}

      </div>


      {/* ================================================
          BOTTOM INFO
      ================================================= */}

      <div
        className="
          mt-7
          flex
          items-center
          gap-3
          border-t
          border-[#263746]/10
          pt-5
          text-xs
          font-medium
          text-[#526574]
        "
      >

        <span
          className="
            h-2
            w-2
            rounded-full
            bg-[#ED6439]
          "
        />

        <span>
          Programmes · Impact · Partnerships · Achievements
        </span>

      </div>

    </div>

  </div>
</Reveal>


    {/* ==================================================
    FINANCIAL REPORTS
================================================== */}

<Reveal delay={100}>

  <Link
    to="/financial-reports"
    className="
      group
      block
      rounded-[1.75rem]
      border
      border-white/10
      bg-white/[0.06]
      p-7
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-white/20
      hover:bg-white/[0.09]
      hover:shadow-[0_25px_60px_-30px_rgba(0,0,0,0.4)]
      sm:p-9
    "
  >

    {/* TOP ROW */}
    <div className="flex items-start justify-between gap-5">

      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ED6439] text-white">
        <ShieldCheck
          className="h-5 w-5"
          strokeWidth={1.7}
        />
      </div>

      <ArrowUpRight
        className="
          h-5
          w-5
          text-[#F6A36E]/60
          transition-all
          duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-[#F6A36E]
        "
        strokeWidth={2}
      />

    </div>


    {/* CONTENT */}

    <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#F6A36E]">
      Financial Reports
    </p>

    <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
      Transparency you can trust
    </h3>

    <p className="mt-3 w-full max-w-lg text-sm leading-7 text-white/65 sm:text-base">
      Access our audited financial statements and statutory
      documents for a transparent view of our financial
      accountability.
    </p>


    {/* LINK */}

    <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F6A36E]">
      View Financial Reports

      <ArrowUpRight
        className="
          h-4
          w-4
          transition-transform
          duration-300
          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
        strokeWidth={2.2}
      />
    </div>

  </Link>

</Reveal>

    </div>

  </div>
</section>



{/* ======================================================
    SETTING TRENDS IN AGE CARE
====================================================== */}

<section className="relative overflow-hidden bg-[#FFF7EC]">
  {/* Decorative background elements */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#ED6439]/[0.05] blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#263746]/[0.04] blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
    <Reveal>
      <div className="max-w-6xl">
        {/* Eyebrow */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="h-px w-10 shrink-0 bg-[#ED6439]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ED6439] sm:text-xs">
            Setting Trends in Age Care
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-5xl font-display text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[#263746] sm:text-4xl lg:text-5xl">
          Setting Trends in{" "}
          <span className="text-[#ED6439]">Age Care</span>
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-4xl text-[15px] leading-7 text-[#526574] sm:text-base sm:leading-8">
          For nearly three decades, NMT has sought to demonstrate that ageing
          can be approached differently.
        </p>
      </div>
    </Reveal>

    <Reveal delay={80}>
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        {/* Left statement */}
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#263746] p-7 text-white shadow-[0_25px_70px_-35px_rgba(38,55,70,0.55)] sm:p-8 lg:p-9">
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#ED6439]/20" />

          <div className="relative">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#ED6439]/10 text-[#F6A36E]">
              <Sparkles className="h-6 w-6" strokeWidth={1.7} />
            </div>

            <p className="max-w-xl font-display text-xl font-bold leading-[1.35] sm:text-2xl lg:text-[1.7rem]">
              We have moved beyond the traditional model of care to develop
              solutions that combine:
            </p>
          </div>
        </div>

        {/* Care model */}
        <div className="rounded-[1.5rem] border border-[#263746]/10 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(38,55,70,0.45)] sm:p-8">
          <div className="flex flex-wrap gap-3">
            {[
              "Care",
              "Community",
              "Prevention",
              "Empowerment",
              "Innovation",
              "Advocacy",
            ].map((item, index) => (
              <div
                key={item}
                className="flex min-w-0 flex-1 basis-[calc(50%-0.375rem)] items-center gap-3 rounded-xl border border-[#ED6439]/15 bg-[#FFF7EC] px-4 py-4 sm:basis-[calc(33.333%-0.5rem)] lg:basis-[calc(50%-0.375rem)]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#ED6439] font-mono text-[10px] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-display text-sm font-bold text-[#263746] sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>

    <Reveal delay={140}>
      <div className="mt-8 rounded-[1.5rem] border border-[#ED6439]/15 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(38,55,70,0.35)] sm:p-8 lg:p-9">
        <p className="max-w-5xl text-[15px] leading-7 text-[#526574] sm:text-base sm:leading-8">
          From dementia day care and specialised residential care to elder
          helplines, active ageing, livelihood programmes, caregiver training
          and Smriti Gram, our work is guided by one enduring belief:
        </p>

        <div className="mt-7 border-l-2 border-[#ED6439] pl-5 sm:pl-6">
          <p className="max-w-4xl font-display text-xl font-bold leading-[1.4] text-[#263746] sm:text-2xl lg:text-[1.7rem]">
            Every elder deserves to age with dignity, purpose, security and
            belonging.
          </p>
        </div>

        <p className="mt-7 max-w-4xl text-[15px] leading-7 text-[#526574] sm:text-base sm:leading-8">
          And every family should have access to the knowledge, care and
          support they need.
        </p>
      </div>
    </Reveal>
  </div>
</section>

        {/* ======================================================
            FINAL CTA
        ====================================================== */}

        <section className="bg-[#FFF7EC]">

          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-8 sm:py-20 lg:py-24">

            <Reveal>

              {/* <Eyebrow>
                Setting Trends in Age Care
              </Eyebrow> */}

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.035em] text-[#263746] sm:text-4xl lg:text-5xl">
                The journey continues.
              </h2>

              <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">

                {[
                  "Care",
                  "Community",
                  "Prevention",
                  "Empowerment",
                  "Innovation",
                  "Advocacy",
                ].map((item, index) => (

                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-[#ED6439]/20 bg-white px-4 py-2.5 text-sm font-semibold text-[#263746]"
                  >

                    <span className="text-[#ED6439]">
                      {index < 5 ? "+" : ""}
                    </span>

                    {item}

                  </span>

                ))}

              </div>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ED6439] px-6 py-3.5 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#D95730]"
                >
                  Explore Our Programmes
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ED6439]/25 bg-white px-6 py-3.5 text-sm font-bold text-[#ED6439] transition-colors duration-300 hover:border-[#ED6439] hover:bg-[#FFF0E6]"
                >
                  Partner With Us
                </a>

                <a
                  href="/get-involved"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#263746]/15 px-6 py-3.5 text-sm font-bold text-[#263746] transition-colors duration-300 hover:border-[#263746]/30 hover:bg-white"
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
      className="h-7 w-7"
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