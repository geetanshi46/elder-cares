import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  FileText,
  Heart,
  Leaf,
  GraduationCap,
  Microscope,
  Users,
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
  PlayCircle,
  X,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, CardGrid, InfoCard } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import smritiImage from "@/assets/smriti-gram/smriti-gram-front.png";
import smritiGramImage from "../assets/smriti-gram/New-model.png";
import ServicesImage from "../assets/smriti-gram/Servicesandfacilities.png";
import { useState } from "react";

import residentialCareImage from "../assets/smriti-gram/residential-care.png";
import trainingAcademyImage from "../assets/smriti-gram/training-academy.png";
import researchHubImage from "../assets/smriti-gram/research-innovation.png";


const title =
  "Nightingales Smriti Gram — India's First Integrated Dementia Care Village | Nightingales Medical Trust";

const description =
  "Nightingales Smriti Gram is a pioneering dementia care village by Nightingales Medical Trust, bringing together residential dementia care, training, research, innovation and community engagement.";


/* ============================================================
   EXPANDABLE FACILITY CARD
============================================================ */

function ExpandableFacilityCard({
  image,
  imageAlt,
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  image: string;
  imageAlt: string;
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="
        group
        flex
        w-full
        flex-col
        overflow-hidden
        rounded-[1.5rem]
        border
        border-[#eadfd2]
        bg-white
        shadow-[0_8px_25px_rgba(38,55,70,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(38,55,70,0.11)]
        sm:rounded-[1.75rem]
      "
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#f4eee7] sm:aspect-[16/9]">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-700
            group-hover:scale-[1.03]
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#263746]/20 via-transparent to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6 sm:p-7 md:p-8">

        {/* ICON */}
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439] sm:h-12 sm:w-12">
          <Icon className="h-5 w-5" />
        </div>

        {/* EYEBROW */}
        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ED6439] sm:mt-7 sm:text-[11px]">
          {eyebrow}
        </p>

        {/* TITLE */}
        <h3 className="mt-2.5 font-display text-[1.4rem] font-bold leading-[1.2] text-[#263746] sm:text-2xl">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <div
          className={`
            relative
            mt-4
            overflow-hidden
            text-[14px]
            leading-6
            text-[#526574]
            transition-[max-height]
            duration-500
            ease-in-out
            sm:mt-5
            sm:text-[15px]
            sm:leading-7
            ${expanded ? "max-h-[1200px]" : "max-h-[145px]"}
          `}
        >
          <div className="space-y-3.5 sm:space-y-4">
            {children}
          </div>

          {!expanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>

        {/* READ MORE / LESS */}
        <div className="mt-5 sm:mt-6">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#ED6439]/25
              px-4
              py-2
              text-[11px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#ED6439]
              transition-all
              duration-200
              hover:border-[#ED6439]
              hover:bg-[#ED6439]
              hover:text-white
              active:scale-[0.98]
              sm:px-5
              sm:py-2.5
              sm:text-xs
            "
          >
            {expanded ? "READ LESS" : "READ MORE"}

            <span
              className={`text-base leading-none transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}


export const Route = createFileRoute("/smriti-gram")({
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
  component: SmritiGramPage,
});


function SmritiGramPage() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isAdmissionFormOpen, setIsAdmissionFormOpen] = useState(false);

  return (
    <SiteLayout>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#FFF8EF]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 md:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <Reveal>
            <div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                <span className="h-px w-9 bg-[#ED6439]" />
                Nightingales Smriti Gram
              </div>

           <h1 className="mt-6 max-w-4xl font-display text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-[#263746] sm:mt-7 sm:text-5xl lg:text-6xl">
  India's First
  <span className="block text-[#ED6439]">
    Integrated Dementia Care Village.
  </span>
</h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#526574] sm:text-lg sm:leading-8">
                Nightingales Smriti Gram is a pioneering initiative of
                Nightingales Medical Trust to create a new model of dementia
                care in India, where quality care, dignity, companionship,
                learning, innovation and research come together in one caring
                community.
              </p>

              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap">
                <Link
                  to="/get-involved"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ED6439] px-5 py-3.5 text-sm font-bold text-white sm:w-auto sm:px-6 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Support Smriti Gram
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#263746]/15 bg-white px-5 py-3.5 text-sm font-bold text-[#263746] sm:w-auto sm:px-6 transition-colors hover:border-[#ED6439]/40 hover:text-[#ED6439]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-[#ED6439]/15 shadow-[0_25px_70px_-35px_rgba(38,55,70,0.35)]">
                <img
                  src={smritiImage}
                  alt="Nightingales Smriti Gram"
                  width={1600}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 left-3 rounded-2xl border border-[#ED6439]/15 bg-white px-4 py-3 shadow-[0_15px_40px_-25px_rgba(38,55,70,0.4)] sm:left-8 sm:px-5 sm:py-4">
                <p className="text-xl font-bold text-[#ED6439] sm:text-2xl">5 acres</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#526574]">
                  Green campus
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


{/* =========================================================
    SHORT VIDEO SECTION
========================================================= */}

<section className="px-5 pb-8 pt-2 sm:px-8 sm:pb-10 lg:px-10">
  <div className="mx-auto w-full max-w-7xl">
    <Reveal delay={200}>
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-[#ED6439]/10
          bg-white
          shadow-[0_20px_55px_-30px_rgba(80,50,30,0.25)]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-6
            px-6
            py-7
            sm:px-10
            sm:py-8
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-12
          "
        >
          {/* VIDEO TEXT */}
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-[2px] w-8 shrink-0 rounded-full bg-[#ED6439]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED6439]">
                Short Video
              </span>
            </div>

            <h3
              className="
                font-display
                text-2xl
                font-extrabold
                leading-tight
                text-[#24333B]
                sm:text-3xl
              "
            >
              Discover Nightingales Smriti Gram
            </h3>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-relaxed
                text-[#66757E]
                sm:text-[15px]
              "
            >
              Take a closer look at our vision for a comprehensive model
              of dementia care.
            </p>
          </div>

          {/* VIDEO THUMBNAIL CARD */}
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            aria-label="Watch Smriti Gram short video"
            className="
              group/thumb
              relative
              h-[160px]
              w-full
              shrink-0
              cursor-pointer
              overflow-hidden
              rounded-2xl
              border
              border-[#ED6439]/25
              bg-black
              text-left
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#ED6439]/50
              hover:shadow-[0_15px_35px_rgba(237,100,57,0.25)]
              focus:outline-none
              focus:ring-2
              focus:ring-[#ED6439]/50
              sm:h-[180px]
              sm:w-[320px]
            "
          >
            <img
              src={smritiImage}
              alt="Watch Nightingales Smriti Gram Video"
              className="
                h-full
                w-full
                object-cover
                opacity-75
                transition-transform
                duration-500
                ease-out
                group-hover/thumb:scale-105
                group-hover/thumb:opacity-90
              "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 transition-colors group-hover/thumb:from-black/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4 text-center">
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#ED6439] text-white shadow-[0_4px_20px_rgba(237,100,57,0.6)] transition-transform duration-300 group-hover/thumb:scale-110">
                <PlayCircle className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <span className="rounded-full bg-black/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                Watch Short Video
              </span>
            </div>
          </button>
        </div>
      </div>
    </Reveal>
  </div>
</section>


      {/* ============================================================
          WHY SMRITI GRAM
      ============================================================ */}
      <Section
        eyebrow="Why Nightingales Smriti Gram"
        title="Why Nightingales Smriti Gram?"
        intro="Nightingales Smriti Gram was born from this need."
        tone="sand"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <div className="rounded-[2rem] border border-[#ED6439]/15 bg-white p-7 sm:p-9">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439]">
                <Heart className="h-5 w-5" />
              </div>

              <p className="mt-6 font-display text-2xl font-bold leading-tight text-[#263746] sm:text-3xl">
                Nightingales Smriti Gram was born from this need.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#FFF8EF] p-5">
                  <p className="text-3xl font-bold text-[#ED6439]">100</p>
                  <p className="mt-1 text-sm text-[#526574]">
                    beds in the first phase
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FFF8EF] p-5">
                  <p className="text-3xl font-bold text-[#ED6439]">300</p>
                  <p className="mt-1 text-sm text-[#526574]">
                    persons supported ultimately
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-[15.5px] leading-7 text-[#526574]">
              <p>
                For more than two decades, Nightingales Medical Trust has been
                providing dementia care and supporting families affected by
                dementia.
              </p>

              <p>
                During this journey, we have met many families from
                economically disadvantaged backgrounds who struggle to care for
                a loved one with dementia. Many cannot afford residential
                dementia care or trained caregivers. At the same time, most
                traditional old-age homes are not equipped to provide
                specialised dementia care.
              </p>

              <p>
                Families are often left with very few choices.
              </p>

              <p>
                As part of the first phase, NMT is establishing a 100-bed
                residential dementia care facility providing free care to
                elders from economically disadvantaged backgrounds who need it
                most.
              </p>

              <p>
                The campus will ultimately support 300 persons with dementia,
                with facilities designed to serve people from different
                economic backgrounds.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

    {/* ============================================================
    ABOUT SMRITI GRAM
============================================================ */}

<Section
  eyebrow="About Nightingales Smriti Gram"
  title="India’s First Integrated Dementia Care Village"
>
  <Reveal>
    <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

      {/* =========================
          CONTENT CARD
      ========================= */}
      <div
        className="
          relative overflow-hidden
          rounded-2xl
          border border-[#eadfd2]
          bg-white
          px-6 py-7
          shadow-[0_14px_40px_rgba(38,55,70,0.08)]
          sm:px-8 sm:py-9
          lg:px-10 lg:py-10
        "
      >
        {/* Decorative accent */}
        <div
          className="
            absolute left-0 top-0
            h-1 w-24
            bg-[#f15b38]
          "
        />

        <div className="relative">
          {/* Content */}
          <div
            className="
              space-y-5
              text-[15.5px]
              leading-7
              text-[#526574]
              sm:text-[16px]
            "
          >
            <p>
              Nightingales Smriti Gram is a pioneering initiative of
              Nightingales Medical Trust (NMT) to create a new model of
              dementia care in India, where quality care, dignity,
              companionship, learning, innovation and research come together
              in one caring community.
            </p>

            <p>
              Located near Doddaballapur, about an hour’s drive from
              Yelahanka, Bengaluru, Nightingales Smriti Gram is spread across
              a five-acre, green and thoughtfully designed campus.
            </p>

            <p>
              Nightingales Smriti Gram goes beyond the conventional model of
              institutional care.
            </p>

            <p>
              It is designed as a living, caring and learning community where
              persons with dementia can feel safe, respected and connected,
              while receiving care that supports their physical, emotional,
              cognitive and social wellbeing.
            </p>

            <p className="pt-2 font-semibold text-[#263746]">
              The model brings together:
            </p>

            <ul className="space-y-3 rounded-[1.5rem] bg-[#FFF8EF] p-5 sm:p-6">
              <li>Person-centred dementia care based on each person’s needs, abilities, preferences and life story.</li>
              <li>Nature-based and therapeutic environments with gardens, walking paths, safe outdoor spaces and activity areas.</li>
              <li>Holistic care that combines modern medical care with appropriate complementary and traditional approaches.</li>
              <li>Rehabilitation and meaningful activities that promote physical, cognitive, emotional and social wellbeing.</li>
              <li>Technology-enabled care to strengthen safety, monitoring, communication and continuity of care.</li>
              <li>Palliative and supportive care focused on comfort, dignity and quality of life.</li>
              <li>Family and community engagement to reduce loneliness and strengthen social connections.</li>
            </ul>
          </div>

          {/* Bottom accent */}
          <div className="mt-7 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f15b38]" />
            <span className="h-px flex-1 bg-[#eee3d8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#f15b38]" />
          </div>

        </div>
      </div>

      {/* =========================
    SMRITI GRAM IMAGE
========================= */}
<div
  className="
    relative
    min-h-[360px]
    overflow-hidden
    rounded-2xl
    border border-[#eadfd2]
    shadow-[0_18px_45px_rgba(38,55,70,0.12)]
    sm:min-h-[430px]
    lg:min-h-full
  "
>
  <img
    src={smritiGramImage}
    alt="Nightingales Smriti Gram"
    className="
      h-full
      w-full
      object-cover
      object-center
      transition-transform
      duration-700
      hover:scale-[1.02]
    "
  />

  {/* Decorative corner */}
  <div
    className="
      pointer-events-none
      absolute bottom-0 right-0
      h-16 w-16
      rounded-tl-[40px]
      bg-[#f15b38]/10
    "
  />
</div>

    </div>
  </Reveal>
</Section>

        {/* ============================================================
    THE MODEL BRINGS TOGETHER
============================================================ */}

<div className="mt-12 pb-16 sm:mt-16 sm:pb-24">
  <Reveal>
    <div className="mx-auto mb-8 max-w-[1400px] px-5 sm:mb-10 sm:px-8 lg:px-10">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <span className="h-px w-10 shrink-0 bg-[#ED6439]" />

        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439] sm:text-xs sm:tracking-[0.16em]">
          The model brings together
        </p>

        <span className="hidden h-px flex-1 bg-[#eadfd2] sm:block" />
      </div>
    </div>
  </Reveal>

  <Reveal>
  <div
    className="
      mx-auto
      grid
      w-full
      max-w-[1400px]
      grid-cols-1
      gap-4
      px-5
      sm:gap-5
      sm:px-8
      lg:grid-cols-4
      lg:gap-5
      lg:px-10
    "
  >
    {/* ==================================================
        ROW 1 — 4 CARDS
    ================================================== */}

    <InfoCard
      icon={Heart}
      title="Person-centred dementia care"
      body="Care based on each person’s needs, abilities, preferences and life story."
    />

    <InfoCard
      icon={Leaf}
      title="Nature-based and therapeutic environments"
      delay={60}
      body="Gardens, walking paths, safe outdoor spaces and activity areas."
    />

    <InfoCard
      icon={ShieldCheck}
      title="Holistic care"
      delay={120}
      body="Modern medical care with appropriate complementary and traditional approaches."
    />

    <InfoCard
      icon={Sparkles}
      title="Rehabilitation and meaningful activities"
      delay={180}
      body="Activities that promote physical, cognitive, emotional and social wellbeing."
    />

    {/* ==================================================
        ROW 2 — 3 CARDS CENTERED
    ================================================== */}

    <div className="lg:col-start-1">
      <InfoCard
        icon={Building2}
        title="Technology-enabled care"
        delay={240}
        body="Technology to strengthen safety, monitoring, communication and continuity of care."
      />
    </div>

    <InfoCard
      icon={Heart}
      title="Palliative and supportive care"
      delay={300}
      body="Care focused on comfort, dignity and quality of life."
    />

    <InfoCard
      icon={Users}
      title="Family and community engagement"
      delay={360}
      body="Reducing loneliness and strengthening social connections."
    />
  </div>
</Reveal>
</div>

      {/* ============================================================
          OUR VISION
      ============================================================ */}
      <section className="bg-[#263746]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439] sm:text-xs sm:tracking-[0.16em]">
                Our Vision
              </p>

              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:mt-5 sm:text-5xl">
                Quality dementia care should never depend on financial
                circumstances.
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                At Nightingales Medical Trust, we believe that financial
                circumstances should never determine whether a person can
                access quality dementia care.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Nightingales Smriti Gram is our effort to turn this belief into
                reality.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SERVICES AND FACILITIES
      ============================================================ */}
      <Section
        title="Services and Facilities"
        tone="sand"
      >
        {/* ========================================================
            INTRO
            ======================================================== */}
        <Reveal>
          <div className="w-full max-w-4xl">
            <p
              className="
                text-[15px]
                leading-7
                text-[#526574]
                sm:text-[15.5px]
                md:text-base
                md:leading-7
              "
            >
              Nightingales Smriti Gram is not only a place for providing
              dementia care. It is also envisioned as a centre for learning,
              innovation and research to help build the future of dementia care
              in India.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#526574] sm:text-[15.5px] md:text-base md:leading-7">
              The campus will bring together three important components:
            </p>
          </div>
        </Reveal>

        {/* ========================================================
            FEATURE IMAGE
            Responsive on mobile / tablet / desktop
            ======================================================== */}
        <Reveal delay={80}>
          <div className="mt-8 w-full sm:mt-10 md:mt-12">
            <div
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#eadfd2]
                bg-white
                p-1.5
                shadow-[0_14px_40px_rgba(38,55,70,0.10)]
                sm:rounded-[1.75rem]
                sm:p-2
                md:rounded-[2rem]
              "
            >
              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  rounded-[1.15rem]
                  bg-[#f4eee7]
                  aspect-[4/3]
                  sm:aspect-[16/9]
                  md:aspect-[16/8]
                  lg:aspect-[16/7]
                "
              >
                {/* Replace with your actual image */}
                <img
                  src={ServicesImage}
                  alt="Nightingales Smriti Gram"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.02]
                  "
                />

                {/* Soft overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#263746]/10
                    via-transparent
                    to-transparent
                  "
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* ========================================================
            SECTION DIVIDER
            ======================================================== */}
        <div className="mt-10 sm:mt-12 md:mt-14">
          <Reveal>
            <div className="flex w-full items-center gap-3 sm:gap-4">
              <span className="h-px w-7 shrink-0 bg-[#ED6439] sm:w-10" />

              <p
                className="
                  shrink-0
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#ED6439]
                  sm:text-[11px]
                  sm:tracking-[0.2em]
                "
              >
                What Smriti Gram brings together
              </p>

              <span className="h-px min-w-0 flex-1 bg-[#e5d8ca]" />
            </div>
          </Reveal>
        </div>

        {/* ========================================================
    FACILITY CARDS
    ======================================================== */}
<div className="mt-6 w-full sm:mt-8 md:mt-9">
  <div
    className="
      grid
      w-full
      grid-cols-1
      items-start
      gap-5
      sm:gap-6
      lg:grid-cols-3
    "
  >
    {/* ====================================================
        CARD 1 — RESIDENTIAL DEMENTIA CARE
        ==================================================== */}
    <Reveal>
      <article
        className="
          group
          flex
          w-full
          flex-col
          overflow-hidden
          rounded-[1.5rem]
          border
          border-[#eadfd2]
          bg-white
          shadow-[0_8px_25px_rgba(38,55,70,0.06)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_18px_40px_rgba(38,55,70,0.11)]
          sm:rounded-[1.75rem]
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            aspect-[16/10]
            w-full
            overflow-hidden
            bg-[#f4eee7]
            sm:aspect-[16/9]
          "
        >
          <img
            src={residentialCareImage}
            alt="Residential Dementia Care"
            loading="lazy"
            decoding="async"
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-700
              group-hover:scale-[1.03]
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#263746]/20 via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
        <div
          className="
            flex
            flex-1
            flex-col
            p-6
            sm:p-7
            md:p-8
          "
        >
          <div
            className="
              grid
              h-11
              w-11
              shrink-0
              place-items-center
              rounded-full
              bg-[#ED6439]/10
              text-[#ED6439]
              sm:h-12
              sm:w-12
            "
          >
            <Heart className="h-5 w-5" />
          </div>

          <p
            className="
              mt-6
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#ED6439]
              sm:mt-7
              sm:text-[11px]
            "
          >
            Residential Dementia Care
          </p>

          <h3
            className="
              mt-2.5
              font-display
              text-[1.4rem]
              font-bold
              leading-[1.2]
              text-[#263746]
              sm:text-2xl
            "
          >
            Specialised residential care.
          </h3>

          <p
            className="
              mt-4
              text-[14px]
              leading-6
              text-[#526574]
              sm:mt-5
              sm:text-[15px]
              sm:leading-7
            "
          >
            A specialised residential care facility providing
            person-centred, holistic and dignified care to persons
            living with dementia.
          </p>
        </div>
      </article>
    </Reveal>

    {/* ====================================================
        CARD 2 — TRAINING ACADEMY
        ==================================================== */}
    <Reveal delay={100}>
      <ExpandableFacilityCard
        image={trainingAcademyImage}
        imageAlt="Training Academy"
        icon={GraduationCap}
        eyebrow="Training Academy"
        title="Building the future care workforce."
      >
        <p>
          India faces a growing shortage of trained dementia and
          eldercare professionals.
        </p>

        <p>
          The Nightingales Smriti Gram Training Academy will provide
          practical, competency-based and technology-enabled
          training for caregivers, healthcare professionals,
          students and others interested in eldercare.
        </p>

        <p>
          The Academy will focus on building skills, improving the
          quality of care and creating new opportunities for people
          to build meaningful careers in dementia and eldercare.
        </p>
      </ExpandableFacilityCard>
    </Reveal>

    {/* ====================================================
        CARD 3 — RESEARCH & INNOVATION HUB
        ==================================================== */}
    <Reveal delay={200}>
      <ExpandableFacilityCard
        image={researchHubImage}
        imageAlt="Research and Innovation Hub"
        icon={Microscope}
        eyebrow="Research & Innovation Hub"
        title="Creating knowledge for better care."
      >
        <p>
          The Research & Innovation Hub will generate knowledge from
          real-world dementia care and explore better ways of
          supporting persons with dementia and their families.
        </p>

        <div className="pt-1">
          <p
            className="
              text-[12px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#263746]
              sm:text-[13px]
            "
          >
            Areas of focus
          </p>

          <ul
            className="
              mt-3
              space-y-2
              text-[13px]
              leading-5.5
              text-[#526574]
              sm:space-y-2.5
              sm:text-[14px]
              sm:leading-6
            "
          >
            <li className="flex gap-2.5">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
              <span>Dementia care models and outcomes</span>
            </li>

            <li className="flex gap-2.5">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
              <span>Caregiver support</span>
            </li>

            <li className="flex gap-2.5">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
              <span>Technology and AI-enabled solutions</span>
            </li>

            <li className="flex gap-2.5">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
              <span>Prevention and healthy ageing</span>
            </li>

            <li className="flex gap-2.5">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
              <span>Innovative and holistic approaches to care</span>
            </li>

            <li className="flex gap-2.5">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
              <span>Data and evidence-based practice</span>
            </li>
          </ul>
        </div>
      </ExpandableFacilityCard>
    </Reveal>
  </div>
</div>

        {/* ========================================================
            COLLABORATION NOTE
            ======================================================== */}
        <Reveal delay={200}>
          <div
            className="
              relative
              mt-5
              w-full
              overflow-hidden
              rounded-[1.5rem]
              border
              border-[#eadfd2]
              bg-white
              px-6
              py-6
              shadow-[0_8px_25px_rgba(38,55,70,0.05)]
              sm:mt-6
              sm:rounded-[1.75rem]
              sm:px-8
              sm:py-7
              md:px-9
              md:py-8
            "
          >
            <div
              className="
                absolute
                bottom-0
                left-0
                top-0
                w-1
                bg-[#ED6439]
              "
            />

            <p
              className="
                w-full
                max-w-5xl
                text-[14px]
                leading-6
                text-[#526574]
                sm:text-[15px]
                sm:leading-7
              "
            >
              The Hub will work with universities, research institutions,
              healthcare organisations, technology companies, government
              agencies and like-minded organisations in India and abroad.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ============================================================
          SUSTAINABLE CAMPUS
      ============================================================ */}
      <Section title="A Sustainable Campus">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div className="rounded-[2rem] bg-[#FFF1E4] p-8 sm:p-10">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[#ED6439] text-white">
                <Leaf className="h-6 w-6" />
              </div>

              <h3 className="mt-7 font-display text-3xl font-bold text-[#263746]">
                Environmental Sustainability
              </h3>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-[15.5px] leading-7 text-[#526574]">
              <p>
                Nightingales Smriti Gram is being developed with environmental
                sustainability in mind.
              </p>

              <p>
                The campus will incorporate solutions such as renewable energy,
                rainwater harvesting, efficient water management, natural
                light, green spaces and responsible use of resources.
              </p>

              <p>
                Our aim is to demonstrate that dementia care can be
                compassionate, inclusive, innovative and environmentally
                responsible.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============================================================
          COMMUNITY
      ============================================================ */}
      <Section
        title="Connecting with the Community"
        tone="sand"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-[#ED6439]/15 bg-white p-8">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439]">
                <Users className="h-5 w-5" />
              </div>

              <p className="mt-6 font-display text-2xl font-bold leading-tight text-[#263746] sm:text-3xl">
                Community Engagement
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-[15.5px] leading-7 text-[#526574]">
              <p>
                Nightingales Smriti Gram will engage with communities in and
                around the campus through outreach programmes, health support,
                active ageing initiatives, dementia awareness, training and
                capacity building.
              </p>

              <p>
                By connecting the campus with the wider community, we hope to
                reduce loneliness and social isolation and contribute to
                building a more dementia-friendly society.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============================================================
          PARTNER WITH US
      ============================================================ */}
      <Section
        id="partner"
        title="Partner With Us"
      >
        <Reveal>
          <p className="max-w-4xl text-[15.5px] leading-7 text-[#526574]">
            Building a new model of dementia care requires the participation of
            many people and organisations.
          </p>

          <p className="mt-5 max-w-4xl text-[15.5px] leading-7 text-[#526574]">
            We welcome donors, CSR partners, universities, research
            institutions, healthcare organisations, technology companies,
            government agencies, volunteers and like-minded organisations to
            work with us in areas such as:
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-9 flex flex-wrap gap-2">
            {[
              "Care",
              "Training",
              "Research",
              "Technology",
              "Innovation",
              "Community Outreach",
              "Knowledge Sharing",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#ED6439]/25 bg-[#FFF8EF] px-4 py-2 text-sm font-semibold text-[#ED6439]"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-4xl text-[15.5px] leading-7 text-[#526574]">
            Together, we can help reshape dementia care in India.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              to="/get-involved"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ED6439] px-5 py-3.5 text-sm font-bold text-white sm:w-auto sm:px-6"
            >
              Support Nightingales Smriti Gram
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#263746]/15 bg-white px-5 py-3.5 text-sm font-bold text-[#263746] sm:w-auto sm:px-6"
            >
              Collaborate With Us
            </Link>

            <Link
              to="/smriti-gram"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#263746]/15 bg-white px-5 py-3.5 text-sm font-bold text-[#263746] sm:w-auto sm:px-6"
            >
              Visit Smriti Gram
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ============================================================
          ADMISSION
      ============================================================ */}
      <section className="bg-[#FFF8EF]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <Reveal>
            <div className="max-w-4xl">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#263746] sm:text-5xl">
                Admission For Residential Care
              </h2>

              <p className="mt-6 text-[15.5px] leading-7 text-[#526574]">
                The first phase of Nightingales Smriti Gram includes a 100-bed
                facility providing free residential dementia care to elders
                from economically disadvantaged backgrounds.
              </p>

              <p className="mt-4 text-[15.5px] leading-7 text-[#526574]">
                Admission will be based on need, eligibility and availability
                of beds.
              </p>
            </div>
          </Reveal>

          {/* Admission Criteria */}
          <div className="mt-12">
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-[#263746] sm:text-3xl">
                Admission Criteria
              </h3>
            </Reveal>

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
              <AdmissionCard
                number="01"
                title="Confirmed dementia diagnosis"
                body="The person should have a confirmed diagnosis of dementia from a qualified psychiatrist, neurologist or geriatrician."
              />

              <AdmissionCard
                number="02"
                title="Economic need"
                body="Preference will be given to families who are economically disadvantaged and unable to afford residential dementia care."
              />

              <AdmissionCard
                number="03"
                title="Need for 24-hour care"
                body="The person should require round-the-clock care, supervision and support because of dementia."
              />

              <AdmissionCard
                number="04"
                title="Preference will be given to persons who"
                items={[
                  "Are neglected or at risk.",
                  "Have elderly, sick or physically unfit caregivers.",
                  "Belong to BPL families.",
                  "Have a monthly family income below ₹40,000.",
                ]}
              />

              <AdmissionCard
                number="05"
                title="Stage and medical condition"
                body="Preference will be given to persons with moderate-stage dementia and significant behavioural and psychological symptoms of dementia (BPSD) who are medically stable and do not require hospital-level intensive medical care."
              />
            </div>
          </div>

          {/* Documents */}
          <div className="mt-14">
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-[#263746] sm:text-3xl">
                Documents Required
              </h3>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 rounded-[2rem] border border-[#ED6439]/15 bg-white p-7 sm:p-9">
                <p className="text-[15px] leading-7 text-[#526574]">
                  The following documents should be submitted along with the application:
                </p>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    "Medical records and dementia diagnosis",
                    "Aadhaar Card",
                    "Ration Card",
                    "Age proof",
                    "Income proof",
                    "BPL Card, if applicable",
                    "Income Certificate issued by the Tahsildar/Revenue Officer",
                  ].map((document) => (
                    <div
                      key={document}
                      className="flex items-start gap-3 text-[14.5px] leading-6 text-[#526574]"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ED6439]" />
                      <span>{document}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Admission Process */}
          <div className="mt-14">
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-[#263746] sm:text-3xl">
                Admission Process
              </h3>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
                <ProcessCard
                  icon={FileText}
                  title="Application"
                  body="Submit the application along with the required documents."
                />

                <ProcessCard
                  icon={ClipboardCheck}
                  title="Committee Review"
                  body="Every application will be reviewed by the Nightingales Smriti Gram Admission Committee."
                />

                <ProcessCard
                  icon={ShieldCheck}
                  title="Final Decision"
                  body="The Committee will assess the person’s medical condition, care needs, family circumstances and financial situation. The final decision will be taken by the Committee in consultation with the management of Nightingales Medical Trust."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          GUIDING PRINCIPLE
      ============================================================ */}
      <Section
        title="Our Guiding Principle"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div className="space-y-5 text-[15.5px] leading-7 text-[#526574]">
              <p>
                Nightingales Smriti Gram is committed to providing free
                residential dementia care to persons from economically
                disadvantaged backgrounds who need it most.
              </p>

              <p>
                Every admission will be guided by fairness, compassion,
                transparency and dignity.
              </p>

              <p>
                At the same time, Nightingales Smriti Gram is a specialised
                dementia care facility and is not a general home for destitute
                or abandoned persons. The facility is designed specifically for
                persons who meet the admission criteria and require specialised
                dementia care.
              </p>

              <p>
                Before admission, a formal agreement will be entered into
                between Nightingales Medical Trust and the family or legal
                guardian. The agreement will clearly define the responsibilities
                of both the family/legal guardian and NMT.
              </p>

              <p>
                This process will help ensure that Smriti Gram remains a centre
                of quality, specialised and dignified dementia care.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] bg-[#263746] p-8 sm:p-10">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ED6439] text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <p className="mt-7 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Specialised care, guided by dignity.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-white/70">
                Smriti Gram is designed specifically for persons who meet the
                admission criteria and require specialised dementia care.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="bg-[#ED6439]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">
                Does Your Loved One Need Dementia Care?
              </p>

              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:mt-5 sm:text-5xl">
                Help your loved one access specialised dementia care.
              </h2>

              <p className="mt-6 max-w-3xl text-[15.5px] leading-7 text-white/85">
                If someone in your family is living with dementia and meets the
                above criteria, you can apply for admission to Smriti Gram.
              </p>

              <p className="mt-4 max-w-3xl text-[15.5px] leading-7 text-white/85">
                Please complete the application form and submit it to
                Nightingales Medical Trust along with the required documents.
              </p>

              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => setIsAdmissionFormOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#ED6439] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Apply for Admission
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsAdmissionFormOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  <FileText className="h-4 w-4" />
                  Click here to fill our form
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


        {isAdmissionFormOpen && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#263746]/70 p-3 backdrop-blur-sm sm:p-5"
    role="dialog"
    aria-modal="true"
    aria-labelledby="admission-form-title"
  >
    <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] bg-[#FFF8EF] shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:rounded-[2rem]">

      {/* FORM HEADER */}
      <div className="shrink-0 bg-[#ED6439] px-5 py-5 text-white sm:px-8 sm:py-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
              Nightingales Smriti Gram
            </p>
            <h2 id="admission-form-title" className="mt-2 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              Application for Admission
            </h2>
            <p className="mt-2 max-w-2xl text-xs leading-5 text-white/80 sm:text-sm">
              Please complete the application below. The form follows the admission application and criteria provided by Nightingales Medical Trust.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsAdmissionFormOpen(false)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Close application form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* SCROLLABLE FORM */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <form
          className="p-5 sm:p-7 lg:p-9"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const familyRows = [1, 2, 3, 4]
              .map((number) => {
                const name = data.get(`family${number}Name`);
                if (!name) return null;
                return `${number}. ${name} | Age: ${data.get(`family${number}Age`)} | Gender: ${data.get(`family${number}Gender`)} | Relationship: ${data.get(`family${number}Relationship`)} | Occupation: ${data.get(`family${number}Occupation`)} | Contact: ${data.get(`family${number}Contact`)}`;
              })
              .filter(Boolean)
              .join("\n");

            const reasons = data.getAll("admissionReasons").join(", ");
            const body = `
Nightingales Azim Premji Center for Dementia Care
Application for Admission

APPLICANT / GUARDIAN / NOMINATED REPRESENTATIVE
Name: ${data.get("applicantName")}
Father's / Spouse's Name: ${data.get("applicantFatherSpouse")}
Address: ${data.get("applicantAddress")}
Occupation: ${data.get("applicantOccupation")}
Phone: ${data.get("applicantPhone")}
Mobile: ${data.get("applicantMobile")}
Email: ${data.get("applicantEmail")}
PAN Number: ${data.get("applicantPan")}
Aadhar Number: ${data.get("applicantAadhar")}
Relationship to Proposed Resident: ${data.get("applicantRelationship")}

REASON(S) FOR ADMISSION
${reasons}
BPL Card Number: ${data.get("bplNumber")}
Annual Family Income: ${data.get("annualFamilyIncome")}

GUARANTOR
Name: ${data.get("guarantorName")}
Father's / Spouse's Name: ${data.get("guarantorFatherSpouse")}
Address: ${data.get("guarantorAddress")}
Occupation: ${data.get("guarantorOccupation")}
Phone: ${data.get("guarantorPhone")}
Mobile: ${data.get("guarantorMobile")}
Email: ${data.get("guarantorEmail")}
PAN Number: ${data.get("guarantorPan")}
Aadhar Number: ${data.get("guarantorAadhar")}
Relationship to Applicant: ${data.get("guarantorApplicantRelationship")}
Relationship to Proposed Resident: ${data.get("guarantorResidentRelationship")}

PATIENT / PROPOSED RESIDENT
Name: ${data.get("patientName")}
Father's / Spouse's Name: ${data.get("patientFatherSpouse")}
Temporary Address: ${data.get("patientTemporaryAddress")}
Permanent Address: ${data.get("patientPermanentAddress")}
Occupation: ${data.get("patientOccupation")}
Phone: ${data.get("patientPhone")}
Mobile: ${data.get("patientMobile")}
Email: ${data.get("patientEmail")}
PAN Number: ${data.get("patientPan")}
Aadhar Number: ${data.get("patientAadhar")}
BPL Card Number: ${data.get("patientBplNumber")}
Other BPL Card Members: ${data.get("otherBplMembers")}
Nationality: ${data.get("nationality")}
Religion: ${data.get("religion")}
Monthly Income / Pension: ${data.get("monthlyPension")}
Monthly Family Income: ${data.get("patientFamilyIncome")}
Income Certificate Number: ${data.get("incomeCertificateNumber")}
Income Certificate Issued Date: ${data.get("incomeCertificateDate")}
Income Certificate Issued By: ${data.get("incomeCertificateIssuedBy")}

FAMILY MEMBERS
${familyRows || "None entered"}

MEDICAL DETAILS
Age / Date of Birth: ${data.get("patientAgeDob")}
Gender: ${data.get("patientGender")}
Marital Status: ${data.get("maritalStatus")}
Diagnosis: ${data.get("diagnosis")}
Health Problems: ${data.get("healthProblems")}
Medicines Prescribed: ${data.get("medicines")}
Special Instructions: ${data.get("specialInstructions")}
Blood Group: ${data.get("bloodGroup")}
Allergic To: ${data.get("allergies")}
Family Physician: ${data.get("familyPhysician")}
Family Physician Contact: ${data.get("familyPhysicianContact")}
Preferable Date of Joining: ${data.get("joiningDate")}

DECLARATION
Applicant Declaration: ${data.get("applicantDeclaration")}
Guarantor Declaration: ${data.get("guarantorDeclaration")}

DOCUMENTS / FILES SELECTED
${["medicalRecords", "referralLetter", "aadhaarCard", "rationCard", "ageProof", "incomeProof", "bplCard", "ayushmanCard"].map((name) => {
              const file = data.get(name);
              return `${name}: ${file instanceof File && file.name ? file.name : "Not selected"}`;
            }).join("\n")}

Application submitted through the Nightingales Smriti Gram website.
    `.trim();

            window.location.href =
              `mailto:contact@nightingaleseldercare.com?subject=${encodeURIComponent(
                "Nightingales Smriti Gram - Admission Application"
              )}&body=${encodeURIComponent(body)}`;
          }}
        >

          {/* INTRO NOTE */}
          <div className="mb-7 rounded-2xl border border-[#ED6439]/15 bg-white p-5 sm:p-6">
            <div className="flex gap-3">
              <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439]">
                <ClipboardCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="font-bold text-[#263746]">Before you begin</p>
                <p className="mt-1 text-sm leading-6 text-[#526574]">
                  Please keep the patient’s medical, identity and income documents ready. Fields marked with * are required for submitting the application.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION HELPER */}
          <div className="space-y-8">

            {/* APPLICANT */}
            <FormSection title="1. Applicant / Guardian / Nominated Representative" subtitle="The person submitting the application on behalf of the proposed resident.">
              <FormField label="Name" name="applicantName" required />
              <FormField label="Father's / Spouse's Name" name="applicantFatherSpouse" />
              <FormField label="Occupation" name="applicantOccupation" />
              <FormField label="Phone" name="applicantPhone" type="tel" />
              <FormField label="Mobile" name="applicantMobile" type="tel" required />
              <FormField label="Email" name="applicantEmail" type="email" required />
              <FormField label="PAN Number" name="applicantPan" />
              <FormField label="Aadhar Number" name="applicantAadhar" />
              <FormField label="Relationship to Proposed Resident" name="applicantRelationship" required />
              <FormTextArea label="Address" name="applicantAddress" required className="sm:col-span-2" />
            </FormSection>

            {/* ADMISSION REASONS */}
            <FormSection title="2. Reason(s) for Admission" subtitle="Select all reasons that apply to the proposed resident.">
              <div className="sm:col-span-2 grid grid-cols-1 gap-3 md:grid-cols-2">
                {[
                  "Family is a BPL family and has a BPL Card",
                  "Total family income is less than Rupees 5 Lac Per Annum",
                  "No caregiver is available at home for continuous care",
                  "Family members are elderly, sick or physically unfit to take care",
                  "The proposed resident lives alone",
                  "The proposed resident is neglected or at risk of neglect",
                  "Significant behavioural and psychological symptoms are difficult for the family to manage",
                  "The proposed resident requires 24 hour care, supervision and support because of Dementia",
                ].map((reason) => (
                  <label key={reason} className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5DDD4] bg-[#FFF8EF] p-4 text-sm leading-6 text-[#526574] transition-colors hover:border-[#ED6439]/40">
                    <input type="checkbox" name="admissionReasons" value={reason} className="mt-1 h-4 w-4 accent-[#ED6439]" />
                    <span>{reason}</span>
                  </label>
                ))}
              </div>
              <FormField label="BPL Card Number" name="bplNumber" />
              <FormField label="Total Annual Family Income" name="annualFamilyIncome" />
            </FormSection>

            {/* GUARANTOR */}
            <FormSection title="3. Details of Guarantor" subtitle="Guarantor details required as part of the admission application.">
              <FormField label="Name" name="guarantorName" required />
              <FormField label="Father's / Spouse's Name" name="guarantorFatherSpouse" />
              <FormField label="Occupation" name="guarantorOccupation" />
              <FormField label="Phone" name="guarantorPhone" type="tel" />
              <FormField label="Mobile" name="guarantorMobile" type="tel" />
              <FormField label="Email" name="guarantorEmail" type="email" />
              <FormField label="PAN Number" name="guarantorPan" />
              <FormField label="Aadhar Number" name="guarantorAadhar" />
              <FormField label="Relationship to Applicant" name="guarantorApplicantRelationship" />
              <FormField label="Relationship to Proposed Resident" name="guarantorResidentRelationship" />
              <FormTextArea label="Address" name="guarantorAddress" required className="sm:col-span-2" />
            </FormSection>

            {/* PATIENT */}
            <FormSection title="4. Details of Patient / Proposed Resident" subtitle="Personal, family and financial information of the person seeking admission.">
              <FormField label="Name" name="patientName" required />
              <FormField label="Father's / Spouse's Name" name="patientFatherSpouse" />
              <FormField label="Occupation" name="patientOccupation" />
              <FormField label="Phone" name="patientPhone" type="tel" />
              <FormField label="Mobile" name="patientMobile" type="tel" />
              <FormField label="Email" name="patientEmail" type="email" />
              <FormField label="PAN Number" name="patientPan" />
              <FormField label="Aadhar Number" name="patientAadhar" />
              <FormField label="BPL Card Number" name="patientBplNumber" />
              <FormTextArea label="Names of Other Members in BPL Card" name="otherBplMembers" />
              <FormField label="Nationality" name="nationality" />
              <FormField label="Religion" name="religion" />
              <FormField label="Monthly Income / Pension (if any)" name="monthlyPension" />
              <FormField label="Monthly Income of the Family" name="patientFamilyIncome" required />
              <FormTextArea label="Temporary Address" name="patientTemporaryAddress" required className="sm:col-span-2" />
              <FormTextArea label="Permanent Address" name="patientPermanentAddress" required className="sm:col-span-2" />
            </FormSection>

            {/* FAMILY MEMBERS */}
            <FormSection title="5. Patient's Family Members" subtitle="Add family members including the applicant. You may leave unused rows blank.">
              <div className="sm:col-span-2 overflow-x-auto rounded-2xl border border-[#E5DDD4] bg-white">
                <div className="min-w-[760px]">
                  <div className="grid grid-cols-[38px_1.4fr_0.6fr_0.7fr_1fr_1fr_1.3fr] gap-2 border-b border-[#E5DDD4] bg-[#FFF8EF] px-4 py-3 text-[10px] font-black uppercase tracking-[0.08em] text-[#ED6439]">
                    <span>#</span><span>Name</span><span>Age</span><span>M/F</span><span>Relationship</span><span>Occupation</span><span>Address / Email / Phone</span>
                  </div>
                  {[1,2,3,4].map((number) => (
                    <div key={number} className="grid grid-cols-[38px_1.4fr_0.6fr_0.7fr_1fr_1fr_1.3fr] gap-2 border-b border-[#eee5dc] px-4 py-3 last:border-b-0">
                      <span className="pt-2 text-xs font-bold text-[#ED6439]">{number}</span>
                      <input name={`family${number}Name`} className="min-w-0 rounded-lg border border-[#D9D3CC] px-3 py-2 text-sm outline-none focus:border-[#ED6439]" />
                      <input name={`family${number}Age`} type="number" className="min-w-0 rounded-lg border border-[#D9D3CC] px-3 py-2 text-sm outline-none focus:border-[#ED6439]" />
                      <input name={`family${number}Gender`} className="min-w-0 rounded-lg border border-[#D9D3CC] px-3 py-2 text-sm outline-none focus:border-[#ED6439]" />
                      <input name={`family${number}Relationship`} className="min-w-0 rounded-lg border border-[#D9D3CC] px-3 py-2 text-sm outline-none focus:border-[#ED6439]" />
                      <input name={`family${number}Occupation`} className="min-w-0 rounded-lg border border-[#D9D3CC] px-3 py-2 text-sm outline-none focus:border-[#ED6439]" />
                      <input name={`family${number}Contact`} className="min-w-0 rounded-lg border border-[#D9D3CC] px-3 py-2 text-sm outline-none focus:border-[#ED6439]" />
                    </div>
                  ))}
                </div>
              </div>
            </FormSection>

            {/* MEDICAL */}
            <FormSection title="6. Medical Details of Patient" subtitle="Please provide the medical information requested in the application. Attach supporting reports where applicable.">
              <FormField label="Age / Date of Birth" name="patientAgeDob" required />
              <FormSelect label="Gender" name="patientGender" options={["Male", "Female", "Others"]} required />
              <FormSelect label="Marital Status" name="maritalStatus" options={["Married", "Unmarried", "Widow", "Widower", "Separated", "Divorced"]} />
              <FormField label="Diagnosis" name="diagnosis" required />
              <FormTextArea label="Health Problems, if any" name="healthProblems" className="sm:col-span-2" />
              <FormTextArea label="Medicines Prescribed and to be Administered" name="medicines" className="sm:col-span-2" />
              <FormTextArea label="Special Instructions, if any" name="specialInstructions" className="sm:col-span-2" />
              <FormField label="Blood Group" name="bloodGroup" />
              <FormField label="Allergic To" name="allergies" />
              <FormField label="Name of Family Physician" name="familyPhysician" />
              <FormField label="Contact Details of Family Physician" name="familyPhysicianContact" />
              <FormField label="Preferable Date of Joining" name="joiningDate" type="date" />
            </FormSection>

            {/* INCOME CERTIFICATE */}
            <FormSection title="7. Income Certificate Details" subtitle="Complete these fields if applicable, especially where a BPL card is not available.">
              <FormField label="Certificate Number" name="incomeCertificateNumber" />
              <FormField label="Issued Date" name="incomeCertificateDate" type="date" />
              <FormField label="Issued By" name="incomeCertificateIssuedBy" />
            </FormSection>

            {/* DOCUMENTS */}
            <FormSection title="8. Supporting Documents" subtitle="Select the documents you have ready. The admission criteria lists these documents as supporting records for the application.">
              <FileField label="Medical records and dementia diagnosis" name="medicalRecords" />
              <FileField label="Referral letter" name="referralLetter" />
              <FileField label="Aadhaar Card" name="aadhaarCard" />
              <FileField label="Ration Card" name="rationCard" />
              <FileField label="Age proof" name="ageProof" />
              <FileField label="Income proof" name="incomeProof" />
              <FileField label="BPL Card (if applicable)" name="bplCard" />
              <FileField label="Ayushman Bharat Card (if available)" name="ayushmanCard" />
            </FormSection>

            {/* DECLARATION */}
            <FormSection title="9. Declaration & Confirmation" subtitle="Please confirm that the information supplied is true and that you agree to the admission process and terms applicable to the centre.">
              <div className="sm:col-span-2 space-y-3">
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5DDD4] bg-white p-4 text-sm leading-6 text-[#526574]">
                  <input type="checkbox" name="applicantDeclaration" value="I confirm that the information provided is true and I agree to the admission process and terms." required className="mt-1 h-4 w-4 accent-[#ED6439]" />
                  <span>I confirm that the information provided is true and complete to the best of my knowledge, and I agree to the admission process and terms applicable to the centre.</span>
                </label>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5DDD4] bg-white p-4 text-sm leading-6 text-[#526574]">
                  <input type="checkbox" name="guarantorDeclaration" value="Guarantor agrees to the admission terms." className="mt-1 h-4 w-4 accent-[#ED6439]" />
                  <span>I confirm that the guarantor information provided above is correct and that the guarantor agrees to the applicable admission terms.</span>
                </label>
              </div>
            </FormSection>
          </div>

          {/* FORM FOOTER */}
          <div className="mt-9 rounded-2xl bg-[#263746] p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="font-bold text-white">Ready to submit your application?</p>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  Please review all details before submitting. Your application will be prepared for Nightingales Medical Trust.
                </p>
              </div>
              <button
                type="submit"
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#ED6439] px-7 py-4 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-[#D9532F] sm:w-auto"
              >
                Submit Application
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

{isVideoOpen && (
  <div
    className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-black/80
      p-4
      backdrop-blur-sm
      sm:p-6
    "
    role="dialog"
    aria-modal="true"
    aria-label="Smriti Gram video"
    onClick={() => setIsVideoOpen(false)}
  >
    <div
      className="
        relative
        w-full
        max-w-5xl
        overflow-hidden
        bg-black
        shadow-2xl
      "
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setIsVideoOpen(false)}
        aria-label="Close video"
        className="
          absolute
          right-3
          top-3
          z-10
          grid
          h-10
          w-10
          place-items-center
          rounded-full
          bg-black/60
          text-white
          backdrop-blur-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-black/80
          focus:outline-none
          focus:ring-2
          focus:ring-white/70
          sm:right-4
          sm:top-4
        "
      >
        <X className="h-5 w-5" strokeWidth={2.2} />
      </button>

      <video
        src="/videos/smriti-gram.mp4"
        controls
        autoPlay
        playsInline
        preload="metadata"
        className="
          block
          max-h-[85vh]
          w-full
          bg-black
          object-contain
        "
      />
    </div>
  </div>
)}

    </SiteLayout>
  );
}

/* ============================================================
   ADMISSION FORM HELPERS
============================================================ */

function FormSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-[1.5rem] border border-[#E5DDD4] bg-white shadow-[0_8px_25px_rgba(38,55,70,0.04)] sm:rounded-[1.75rem]">
      <div className="border-b border-[#eee5dc] bg-[#FFF8EF] px-5 py-5 sm:px-6">
        <h3 className="font-display text-xl font-bold text-[#263746] sm:text-2xl">{title}</h3>
        <p className="mt-1.5 text-xs leading-5 text-[#6B7280] sm:text-sm">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6">
        {children}
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#263746]">
        {label}{required && <span className="ml-1 text-[#ED6439]">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-[#D9D3CC] bg-white px-4 py-3 text-sm text-[#263746] outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
      />
    </label>
  );
}

function FormTextArea({
  label,
  name,
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold text-[#263746]">
        {label}{required && <span className="ml-1 text-[#ED6439]">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={3}
        className="w-full resize-y rounded-xl border border-[#D9D3CC] bg-white px-4 py-3 text-sm leading-6 text-[#263746] outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
      />
    </label>
  );
}

function FormSelect({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#263746]">
        {label}{required && <span className="ml-1 text-[#ED6439]">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl border border-[#D9D3CC] bg-white px-4 py-3 text-sm text-[#263746] outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function FileField({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#263746]">{label}</span>
      <input
        type="file"
        name={name}
        className="block w-full cursor-pointer rounded-xl border border-[#D9D3CC] bg-white px-3 py-2.5 text-xs text-[#526574] file:mr-3 file:rounded-lg file:border-0 file:bg-[#ED6439]/10 file:px-3 file:py-2 file:text-xs file:font-bold file:text-[#ED6439] hover:file:bg-[#ED6439]/15"
      />
    </label>
  );
}

/* ============================================================
   ADMISSION CARD
============================================================ */

function AdmissionCard({
  number,
  title,
  body,
  items,
}: {
  number: string;
  title: string;
  body?: string;
  items?: string[];
}) {
  return (
    <Reveal>
      <article className="h-full rounded-[1.75rem] border border-[#263746]/10 bg-white p-6 sm:p-7">
        <div className="flex items-start gap-3 sm:gap-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ED6439]/10 font-display text-sm font-bold text-[#ED6439]">
            {number}
          </span>

          <div>
            <h4 className="font-display text-lg font-bold text-[#263746]">
              {title}
            </h4>

            {body && (
              <p className="mt-3 text-[14.5px] leading-6 text-[#526574]">
                {body}
              </p>
            )}

            {items && (
              <ul className="mt-3 space-y-2 text-[14.5px] leading-6 text-[#526574]">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ============================================================
   PROCESS CARD
============================================================ */

function ProcessCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof FileText;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-[1.75rem] border border-[#263746]/10 bg-white p-6 sm:p-7">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439]">
        <Icon className="h-5 w-5" />
      </div>

      <h4 className="mt-6 font-display text-xl font-bold text-[#263746]">
        {title}
      </h4>

      <p className="mt-3 text-[14.5px] leading-6 text-[#526574]">{body}</p>
    </article>
  );
}