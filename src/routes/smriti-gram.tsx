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
              <div className="overflow-hidden rounded-[2rem] border border-[#ED6439]/15 bg-white p-3 shadow-[0_25px_70px_-35px_rgba(38,55,70,0.35)]">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src={smritiImage}
                    alt="Nightingales Smriti Gram"
                    width={1600}
                    height={1200}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 left-3 rounded-2xl sm:left-8 border border-[#ED6439]/15 bg-white px-4 py-3 shadow-[0_15px_40px_-25px_rgba(38,55,70,0.4)] sm:px-5 sm:py-4 sm:left-8">
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

          {/* VIDEO BUTTON */}
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            aria-label="Watch Smriti Gram short video"
            className="
              group/video
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              rounded-xl
              border
              border-[#ED6439]/20
              bg-[#FFF3E8]
              px-5
              py-3
              text-sm
              font-bold
              text-[#C2410C]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#ED6439]/40
              hover:bg-[#FFE9D5]
              hover:shadow-[0_12px_30px_rgba(232,90,63,0.15)]
              focus:outline-none
              focus:ring-2
              focus:ring-[#ED6439]/40
              focus:ring-offset-2
              sm:px-6
              sm:py-3.5
            "
          >
            <span
              className="
                grid
                h-10
                w-10
                shrink-0
                place-items-center
                rounded-full
                bg-[#ED6439]
                text-white
                shadow-[0_5px_15px_rgba(237,100,57,0.22)]
                transition-transform
                duration-300
                group-hover/video:scale-110
              "
            >
              <PlayCircle className="h-5 w-5" strokeWidth={2} />
            </span>

            <span>Watch Short Video</span>

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover/video:translate-x-0.5
                group-hover/video:-translate-y-0.5
              "
              strokeWidth={2.2}
            />
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
  title="Why Nightingales Smriti Gram? Nightingales Smriti Gram was born from this need."
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
  title="A New Model of Dementia Care in India."
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

          {/* Small section label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#f15b38]" />
            <span
              className="
                text-[11px] font-bold uppercase
                tracking-[0.18em]
                text-[#f15b38]
              "
            >
              A Caring Community
            </span>
          </div>

          {/* Sub heading */}
          <p
            className="
              font-display
              text-[24px]
              font-bold
              leading-[1.2]
              text-[#263746]
              sm:text-[28px]
              lg:text-[30px]
            "
          >
            India’s First Integrated Dementia Care Village.
          </p>

          {/* Content */}
          <div
            className="
              mt-6
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
    bg-white
    shadow-[0_18px_45px_rgba(38,55,70,0.12)]
    sm:min-h-[430px]
    lg:min-h-full
  "
>
  <div className="absolute inset-3 overflow-hidden rounded-xl">
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
  </div>

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
        eyebrow="Services and Facilities"
        title="A place for care, learning, innovation and research."
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
      <Section eyebrow="A Sustainable Campus" title="Care that respects its environment.">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div className="rounded-[2rem] bg-[#FFF1E4] p-8 sm:p-10">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[#ED6439] text-white">
                <Leaf className="h-6 w-6" />
              </div>

              <h3 className="mt-7 font-display text-3xl font-bold text-[#263746]">
                Compassionate, inclusive, innovative and environmentally
                responsible.
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
        eyebrow="Connecting with the Community"
        title="Dementia care should not be isolated from society."
        tone="sand"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-[#ED6439]/15 bg-white p-8">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439]">
                <Users className="h-5 w-5" />
              </div>

              <p className="mt-6 font-display text-2xl font-bold leading-tight text-[#263746] sm:text-3xl">
                Building a more dementia-friendly society.
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
        eyebrow="Partner With Us"
        title="Together, we can reshape dementia care in India."
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
            work with us.
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
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439] sm:text-xs sm:tracking-[0.16em]">
                Admission For Residential Care
              </p>

              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#263746] sm:mt-5 sm:text-5xl">
                Free residential dementia care for elders who need it most.
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
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
        eyebrow="Our Guiding Principle"
        title="Fairness, compassion, transparency and dignity."
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
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#ED6439] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Apply for Admission
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="/application-form.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  <FileText className="h-4 w-4" />
                  Download Application Form
                </a>

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


{/* =========================================================
    VIDEO MODAL
========================================================= */}

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