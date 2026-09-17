import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useState, useRef, useEffect } from "react";
  import {
  Brain,
  HeartHandshake,
  ShieldCheck,
  PlayCircle,
  Briefcase,
  GraduationCap,
  Megaphone,
  FlaskConical,
  PhoneCall,
  Home,
  Users,
  ChevronLeft,
ChevronRight,
  Stethoscope,
  Smartphone,
  ShieldAlert,
  Activity,
  Building2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, CardGrid, InfoCard } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import careWithDignity from "../assets/our-services/Care with dignity.webp";
import riskReductionImage from "../assets/our-services/risk-reduction.webp";
import memoryclinicImage from "../assets/our-services/memory-clinic.webp";
import daycareImage from "../assets/our-services/day-care.webp";

import kasturinagarFacilityImage from "../assets/our-services/services (3).jpeg";
import kasturinagarElderImage from "../assets/our-services/services (4).jpeg";
import kolarFacilityImage from "../assets/our-services/services (1).jpeg";
import kolarElderImage from "../assets/our-services/services (2).jpeg";
import kothanurFacilityImage from "../assets/our-services/services (6).jpeg";
import kothanurElderImage from "../assets/our-services/services (5).jpeg";

import familyCaregiverTrainingImage from "../assets/our-services/family-caregiver-training.webp";

import dementiaFamilySupportImage from "../assets/our-services/DC- Dementia Family Support.webp";

import smritiGramImage from "@/assets/our-services/smriti-gram.webp";

import familyCaregiverTraining from "@/assets/our-services/SOCIALINTEGRATION.webp";

import sandhyaSurakshaImage from "@/assets/our-services/Sandhya Suraksha.png";

import sandhyaKiranaImage from "@/assets/our-services/sandhya-kirana-collage.webp";

import hiriyaravadiImage from "@/assets/our-services/hiriyaravadi.webp";

import elderProtectionImage from "@/assets/our-services/elder-protection.webp";
import eldersHelplineImage from "@/assets/our-services/elders-helpline.png";
import nationalHelplineImage from "@/assets/our-services/national-helpline.webp";

import nightingalesJobsImage from "@/assets/our-services/Job 60+.png";
import digitalLiteracyImage from "@/assets/our-services/Job 60+ Computer training.webp";
import cybersecurityAwarenessImage from "@/assets/our-services/Awareness.webp";

import supportingOldAgeHomesBanner from "@/assets/our-services/OldAgeHomesBanner.webp";
import mobileActiveAgeingImage from "@/assets/our-services/MAA.webp";
import rrtcImage from "@/assets/our-services/RRTC.png";
import capacityBuildingImage from "@/assets/our-services/MAA (5).webp";
  
import awarenessAdvocacyImage from "@/assets/our-services/Awareness & Advocacy.webp";
import researchInnovationImage from "@/assets/our-services/researchInnovation.webp";

import servicesHeroImage from "@/assets/our-services/Banner photo.webp";

import Compassionate from "@/assets/our-services/Compassionate.webp";

import bedsideAssistantImage from "@/assets/our-services/bedside-assistant.webp";

import dementiaCareImage from "@/assets/our-services/dementia-care.webp";

import familyCaregiverImage from "@/assets/our-services/family-caregiver.webp";

import lifesavingSkillsImage from "@/assets/our-services/lifesaving-skills.webp";

import studentInternshipsImage from "@/assets/our-services/student-internships.webp";


/* ============================================================
   TRAINING & CAPACITY BUILDING IMAGES
   ============================================================ */

import trainingCapacityBuildingBanner from "@/assets/our-services/training-capacity-building-banner.webp";

import freeGeriatricClinicImage from "@/assets/our-services/free-geriatric-clinic.webp";




const title =
  "Our Services — Dementia Care, Elder Protection & Training | NMT";

const description =
  "Explore Nightingales Medical Trust services and programmes for older persons, including dementia care, elder protection, empowerment, old age home support, training and capacity building.";

  

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
})


/* ============================================================
   IMAGE SHUFFLE COMPONENT (AUTOMATIC PHOTOS TRANSITION)
   ============================================================ */

function ImageShuffle({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full w-full">
      {images.map((imgSrc, idx) => (
        <img
          key={imgSrc}
          src={imgSrc}
          alt={`${alt} - ${idx === 0 ? "Facility" : "Activities"}`}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 block h-full w-full object-cover object-center transition-opacity duration-1000 ${
            idx === activeIdx ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 z-10 flex gap-1.5 rounded-full bg-black/40 px-2 py-1 backdrop-blur-xs">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              aria-label={`Photo ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIdx ? "w-4 bg-[#ED6439]" : "w-1.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   REUSABLE SERVICE CARD
   ============================================================ */

function ServiceCard({
   id,
  icon: Icon,
  title,
  titleClassName = "text-[#ED6439]",
  children,
  items,
  image,
  preview,
  details,
  delay = 0,
  cta = "READ MORE",
}: {
  id?: string;
  icon: typeof HeartHandshake;
  title: string;
  titleClassName?: string;
  children?: ReactNode;
  items?: string[];
  image?: string;
  preview?: ReactNode;
  details?: ReactNode;
  delay?: number;
  cta?: string;
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Reveal delay={delay} className="h-full min-w-0">
      <article
      id={id}
  className={`
    group
    relative
    flex
    h-full
    min-w-0
    flex-col
    overflow-hidden
    border
    border-[#ED6439]/15
    bg-white
    p-5
    shadow-[0_18px_50px_-20px_rgba(70,45,10,0.16)]
    transition-all
    duration-500
    hover:-translate-y-1.5
    hover:border-[#ED6439]/35
    hover:shadow-[0_28px_65px_-20px_rgba(237,100,57,0.22)]
    sm:p-6
    md:p-7
    
  `}
>
        {/* TOP ORANGE LINE */}
        <div className="absolute inset-x-0 top-0 z-10 h-1 bg-[#ED6439]" />

        {/* ==================================================
            CARD IMAGE
            ================================================== */}
       {image && (
  <div
    className="
      relative
      w-full
      aspect-[334.4/211.9]
      overflow-hidden
      bg-[#F7EBDD]
      shrink-0
    "
  >
    <img
      src={image}
      alt={title}
      loading="lazy"
      decoding="async"
      className="
        block
        h-full
        w-full
        object-cover
        object-center
        transition-transform
        duration-700
        ease-out
        group-hover:scale-[1.03]
      "
    />
  </div>
)}

        {/* ==================================================
            CARD CONTENT
            ================================================== */}
        <div className="relative flex h-full min-w-0 flex-col p-5 sm:p-6 md:p-7">

          {/* Decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-[#ED6439]/8
              blur-3xl
              transition-transform
              duration-700
              group-hover:scale-125
            "
          />

          <div className="relative flex h-full min-w-0 flex-col">

            {/* ICON */}
            <span
              className="
                grid
                h-11
                w-11
                shrink-0
                place-items-center
                rounded-xl
                bg-[#ED6439]
                text-white
                shadow-[0_10px_25px_rgba(237,100,57,0.25)]
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:rotate-2
                sm:h-12
                sm:w-12
              "
            >
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </span>

            {/* TITLE */}
            <h3
              className={`
                mt-5
                break-words
                font-display
                text-lg
                font-extrabold
                leading-[1.2]
                ${titleClassName}
                sm:text-xl
              `}
            >
              {title}
            </h3>

            {/* ORANGE UNDERLINE */}
            <span
              className="
                mt-3
                block
                h-1
                w-10
                shrink-0
                rounded-full
                bg-[#ED6439]
                transition-all
                duration-300
                group-hover:w-16
              "
            />

            {/* ==================================================
                PREVIEW CONTENT (ALWAYS VISIBLE)
                ================================================== */}
            {preview && (
              <div
                className="
                  mt-5
                  min-w-0
                  space-y-4
                  text-[14px]
                  leading-[1.75]
                  text-muted-foreground
                  sm:text-[14.5px]
                "
              >
                {preview}
              </div>
            )}

            {/* ==================================================
                OLD CHILDREN CONTENT
                ================================================== */}
            {children && !preview && (
              <div
                className="
                  mt-5
                  min-w-0
                  space-y-4
                  text-[14px]
                  leading-[1.75]
                  text-muted-foreground
                  sm:text-[14.5px]
                "
              >
                {children}
              </div>
            )}

            {/* ==================================================
                DETAILS — SHOWN AFTER READ MORE
                ================================================== */}
            {details && expanded && (
              <div
                className="
                  mt-5
                  min-w-0
                  space-y-4
                  text-[14px]
                  leading-[1.75]
                  text-muted-foreground
                  sm:text-[14.5px]
                "
              >
                {details}
              </div>
            )}

            {/* OLD ITEMS SUPPORT */}
            {items && !preview && !expanded && (
              <ul className="mt-5 space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-2.5
                      text-[13.5px]
                      leading-[1.7]
                      text-muted-foreground
                      sm:text-[14px]
                    "
                  >
                    <span
                      className="
                        mt-[8px]
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#ED6439]
                      "
                    />

                    <span className="min-w-0 break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* ==================================================
                READ MORE / READ LESS
                ================================================== */}
            {(preview || details) && (
              <div className="mt-auto pt-7">
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  className="
                    inline-flex
                    max-w-full
                    items-center
                    gap-2
                    border-0
                    bg-transparent
                    text-[12px]
                    font-bold
                    text-[#ED6439]
                    outline-none
                    transition-all
                    duration-300
                    hover:gap-3
                    focus:outline-none
                    focus-visible:outline-none
                    cursor-pointer
                    sm:text-[13px]
                  "
                >
                  <span>
                    {expanded ? "READ LESS" : cta}
                  </span>

                  <ArrowUpRight
                    className={`
                      h-4
                      w-4
                      shrink-0
                      transition-transform
                      duration-300
                      ${
                        expanded
                          ? "rotate-180"
                          : "group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      }
                    `}
                    strokeWidth={2.2}
                  />
                </button>
              </div>
            )}

            {/* ==================================================
                OLD CONTACT LINK — ONLY FOR CARDS WITHOUT DETAILS
                ================================================== */}
            {!preview && !details && (
              <div className="mt-auto pt-7">
                <Link
                  to="/contact"
                  className="
                    inline-flex
                    max-w-full
                    items-center
                    gap-2
                    text-[12px]
                    font-bold
                    text-[#ED6439]
                    transition-all
                    duration-300
                    hover:gap-3
                    sm:text-[13px]
                  "
                >
                  <span className="break-words">{cta}</span>

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      shrink-0
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-0.5
                    "
                    strokeWidth={2.2}
                  />
                </Link>
              </div>
            )}

          </div>
        </div>
      </article>
    </Reveal>
  )
}
/* ============================================================
   SIDE IMAGE
   ============================================================ */

function ServiceImage({
  src,
  alt,
  label,
  reverse = false,
}: {
  src: string;
  alt: string;
  label: string;
  reverse?: boolean;
}) {
  return (
    <Reveal className="mt-8 sm:mt-10 lg:mt-12">
      <div
        className="
          relative
          grid
          min-w-0
          overflow-hidden
          border
          border-[#ED6439]/15
          bg-white
          shadow-[0_25px_70px_-25px_rgba(70,45,10,0.20)]
          lg:grid-cols-[1.05fr_0.95fr]
        "
      >
        <div
          className={`
            group
            relative
            aspect-[16/10]
            min-h-0
            overflow-hidden
            sm:aspect-[16/9]
            lg:aspect-auto
            lg:min-h-[370px]
            ${reverse ? "lg:order-2" : "lg:order-1"}
          `}
        >
          <img
            src={src}
            alt={alt}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-contain
              object-center
              transition-transform
              duration-700
              group-hover:scale-[1.02]
            "
          />


        </div>

        <div
          className={`
            relative
            flex
            min-h-[150px]
            items-center
            bg-[#ED6439]
            px-5
            py-7
            sm:min-h-[180px]
            sm:px-7
            sm:py-9
            lg:min-h-0
            lg:px-12
            lg:py-10
            ${reverse ? "lg:order-1" : "lg:order-2"}
          `}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative min-w-0">
            <span
              className="
                inline-flex
                max-w-full
                flex-wrap
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/75
                sm:text-[11px]
                sm:tracking-[0.2em]
              "
            >
              <span className="h-[2px] w-6 shrink-0 bg-white sm:w-8" />
              <span className="break-words">{label}</span>
            </span>

            <div className="mt-4 h-[3px] w-12 bg-white sm:mt-5 sm:w-14" />
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ============================================================
   PHOTO PLACEHOLDER
   ============================================================ */

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative flex min-h-[250px] w-full items-center justify-center overflow-hidden bg-[#F7EBDD] sm:min-h-[320px] lg:min-h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(237,100,57,0.12),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(232,162,47,0.14),transparent_35%)]" />

      <div className="relative mx-5 flex min-h-[180px] w-[calc(100%-2.5rem)] items-center justify-center border-2 border-dashed border-[#ED6439]/30 px-5 text-center sm:mx-7 sm:min-h-[220px] sm:w-[calc(100%-3.5rem)]">
        <div>
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439]">
            <Sparkles className="h-5 w-5" />
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#263746]/70 sm:text-sm">
            Photo Space
          </p>

          <p className="mx-auto mt-2 max-w-xs text-[12px] leading-[1.6] text-[#263746]/55 sm:text-[13px]">
            {label}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   TRAINING & CAPACITY BUILDING CAROUSEL
   ============================================================ */

function TrainingCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const scrollCarousel = (direction: number) => {
    const container = carouselRef.current;

    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const styles = window.getComputedStyle(container)
    const gap = parseFloat(styles.columnGap || styles.gap || "0")

    container.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: "smooth",
    })
  }

  return (
    <Reveal className="mt-8 min-w-0 sm:mt-10">
      <div className="min-w-0">

        {/* ==================================================
            CAROUSEL HEADER
            ================================================== */}

        <div className="mb-5 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ED6439] sm:text-xs">
              Our Training Programmes
            </p>

            <span className="mt-2 block h-1 w-10 rounded-full bg-[#ED6439]" />
          </div>

          {/* DESKTOP / TABLET ARROWS */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous training programme"
              className="
                grid
                h-10
                w-10
                place-items-center
                border
                border-[#ED6439]/20
                bg-white
                text-[#ED6439]
                shadow-sm
                transition-all
                duration-300
                hover:border-[#ED6439]
                hover:bg-[#ED6439]
                hover:text-white
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Next training programme"
              className="
                grid
                h-10
                w-10
                place-items-center
                border
                border-[#ED6439]/20
                bg-white
                text-[#ED6439]
                shadow-sm
                transition-all
                duration-300
                hover:border-[#ED6439]
                hover:bg-[#ED6439]
                hover:text-white
              "
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>




    <div className="relative mt-8 min-w-0 sm:mt-10">
      {/* ==================================================
          CAROUSEL
          ================================================== */}

      <div
        ref={carouselRef}
        className="
          flex
          w-full
          min-w-0
          snap-x
          snap-mandatory
          gap-4
          overflow-x-auto
          overscroll-x-contain
          touch-pan-x
          scroll-smooth
          pb-4
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >

        {/* ==================================================
            1. BEDSIDE ASSISTANT TRAINING
            ================================================== */}

        <div
          className="
            flex
            min-w-0
            shrink-0
            basis-full
            snap-start
            sm:basis-[calc((100%-24px)/2)]
            lg:basis-[calc((100%-48px)/3)]
          "
        >
          <ServiceCard
          id="caregiver-training"
            icon={GraduationCap}
            title="Bedside Assistant Training Course"
            titleClassName="text-[#ED6439]"
            image={bedsideAssistantImage}
            cta="READ MORE"
            preview={
              <>
                <p className="font-bold text-[#ED6439]">
                  Creating Skilled and Compassionate Caregivers
                </p>

                <p>
                  NMT's Bedside Assistant Training Course prepares
                  individuals to provide safe and dignified care to older
                  persons and people requiring assistance with daily living.
                </p>

                <p className="font-semibold text-foreground">
                  The programme combines classroom learning with practical,
                  hands-on training.
                </p>
              </>
            }
            details={
              <>
                <p className="font-bold text-[#ED6439]">
                  The training covers areas such as:
                </p>

                <ul className="space-y-2.5">
                  {[
                    "Understanding ageing",
                    "Personal hygiene and personal care",
                    "Nutrition",
                    "Mobility and positioning",
                    "Physiotherapy and exercise",
                    "Medication and basic medical care",
                    "Fall prevention",
                    "Dementia care",
                    "Communication",
                    "First aid",
                    "Infection prevention",
                    "Safety and emergency response",
                    "Professional conduct and caregiver responsibilities",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-bold text-[#ED6439]">
                  Our larger goal
                </p>

                <p>
                  To build a skilled and respected elder-care workforce and
                  make caregiving a meaningful career.
                </p>
              </>
            }
          />
        </div>


        {/* ==================================================
            2. DEMENTIA CARE TRAINING
            ================================================== */}

        <div
          className="
            flex
            min-w-0
            shrink-0
            basis-full
            snap-start
            sm:basis-[calc((100%-24px)/2)]
            lg:basis-[calc((100%-48px)/3)]
          "
        >
          <ServiceCard
            icon={Brain}
            title="Dementia Care Training"
            titleClassName="text-[#ED6439]"
            image={dementiaCareImage}
            cta="READ MORE"
            preview={
              <>
                <p className="font-bold text-[#ED6439]">
                  Building Dementia-Friendly Communities
                </p>

                <p>
                  NMT conducts dementia-care training programmes for
                  caregivers, healthcare professionals, students,
                  organisations and community groups.
                </p>

                <p className="font-semibold text-foreground">
                  Training focuses on practical knowledge, communication,
                  person-centred care and caregiver well-being.
                </p>
              </>
            }
            details={
              <>
                <p className="font-bold text-[#ED6439]">
                  Training focuses on:
                </p>

                <ul className="space-y-2.5">
                  {[
                    "Understanding dementia",
                    "Communication",
                    "Person-centred care",
                    "Behavioural and psychological symptoms of dementia",
                    "Activities and cognitive stimulation",
                    "Personal care",
                    "Nutrition",
                    "Mobility and falls prevention",
                    "Managing challenging situations",
                    "Family support",
                    "Caregiver well-being",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            }
          />
        </div>


        {/* ==================================================
            3. FAMILY CAREGIVER TRAINING
            ================================================== */}

        <div
          className="
            flex
            min-w-0
            shrink-0
            basis-full
            snap-start
            sm:basis-[calc((100%-24px)/2)]
            lg:basis-[calc((100%-48px)/3)]
          "
        >
          <ServiceCard
            icon={HeartHandshake}
            title="Family Caregiver Training"
            titleClassName="text-[#ED6439]"
            image={familyCaregiverImage}
            cta="READ MORE"
            preview={
              <>
                <p>
                  Family members are often the primary caregivers for people
                  living with dementia.
                </p>

                <p>
                  Dementia caregiving requires knowledge, patience, practical
                  skills and understanding.
                </p>

                <p className="font-semibold text-foreground">
                  NMT's family caregiver training helps families provide
                  safer and more meaningful care.
                </p>
              </>
            }
            details={
              <>
                <p className="font-bold text-[#ED6439]">
                  NMT's family caregiver training helps families:
                </p>

                <ul className="space-y-2.5">
                  {[
                    "Understand dementia",
                    "Communicate more effectively",
                    "Manage behavioural changes",
                    "Provide safe personal care",
                    "Prevent falls and accidents",
                    "Support nutrition and mobility",
                    "Create meaningful daily routines",
                    "Manage caregiver stress",
                    "Know when professional help is required",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  Caring for the caregiver is also part of dementia care.
                </p>
              </>
            }
          />
        </div>


        {/* ==================================================
            4. LIFESAVING SKILLS TRAINING
            ================================================== */}

        <div
          className="
            flex
            min-w-0
            shrink-0
            basis-full
            snap-start
            sm:basis-[calc((100%-24px)/2)]
            lg:basis-[calc((100%-48px)/3)]
          "
        >
          <ServiceCard
            icon={ShieldCheck}
            title="Lifesaving Skills Training"
            titleClassName="text-[#ED6439]"
            image={lifesavingSkillsImage}
            cta="READ MORE"
            preview={
              <>
                <p>
                  Older persons are particularly vulnerable to falls,
                  cardiac emergencies and other sudden health events.
                </p>

                <p>
                  NMT provides basic lifesaving and emergency-response
                  training to caregivers, staff, students and others
                  interested in lifesaving.
                </p>
              </>
            }
            details={
              <>
                <p className="font-bold text-[#ED6439]">
                  Training includes:
                </p>

                <ul className="space-y-2.5">
                  {[
                    "Basic first aid",
                    "Recognition of medical emergencies",
                    "Cardiopulmonary resuscitation awareness",
                    "Response to falls",
                    "Choking emergencies",
                    "Basic emergency preparedness",
                    "When and how to seek professional medical help",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            }
          />
        </div>


        {/* ==================================================
            5. STUDENT INTERNSHIPS
            ================================================== */}

        <div
          className="
            flex
            min-w-0
            shrink-0
            basis-full
            snap-start
            sm:basis-[calc((100%-24px)/2)]
            lg:basis-[calc((100%-48px)/3)]
          "
        >
          <ServiceCard
            icon={HeartHandshake}
            title="Student Internships"
            titleClassName="text-[#ED6439]"
            image={studentInternshipsImage}
            cta="READ MORE"
            preview={
              <>
                <p>
                  NMT offers internship opportunities for students who want
                  practical exposure to elder care, dementia care, social work,
                  psychology, healthcare, community development, communications,
                  technology and related fields.
                </p>

                <p className="font-bold text-[#ED6439]">
                  We believe today's students can become tomorrow's leaders in age
                  care.
                </p>
              </>
            }
            details={
              <>
                <p className="font-bold text-[#ED6439]">
                  Interns gain experience through:
                </p>

                <ul className="space-y-2.5">
                  {[
                    "Field exposure",
                    "Community programmes",
                    "Dementia-care settings",
                    "Research and documentation",
                    "Awareness programmes",
                    "Programme support",
                    "Social-impact projects",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            }
          />
        </div>

      </div>
    </div>


        {/* ==================================================
            CAROUSEL HINT
            ================================================== */}

        <p className="mt-2 text-center text-[11px] text-muted-foreground sm:hidden">
          Swipe to explore more programmes
        </p>

      </div>
    </Reveal>
  )
}

/* ============================================================
   PAGE
   ============================================================ */

function ServicesPage() {
    const [sandhyaExpanded, setSandhyaExpanded] = useState(false)
    const [showEldersMore, setShowEldersMore] = useState(false);
    
  const [nationalHelplineExpanded, setNationalHelplineExpanded] =
  useState(false)
  return (
  <SiteLayout>
    <div className="w-full min-w-0 overflow-x-clip">
 {/* ======================================================
    OUR SERVICES — HERO BANNER
    ====================================================== */}

<section className="relative isolate w-full overflow-hidden border-b border-[#ED6439]/15">

  {/* Background Image — FULL WIDTH */}
  <div className="absolute inset-0 -z-20">
    <img
      src={servicesHeroImage}
      alt="Older persons participating in activities at Nightingales Medical Trust"
      className="block h-full w-full object-cover object-center"
    />
  </div>

  {/* High contrast overlay for text readability */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      -z-10
      bg-black/45
    "
  />

  {/* Bottom readability gradient */}
  <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      -z-10
      h-full
      bg-gradient-to-t
      from-black/75
      via-black/35
      to-transparent
    "
  />

  {/* Content */}
  <div
    className="
      relative
      flex
      min-h-[420px]
      w-full
      items-end
      px-5
      pb-10
      pt-16
      sm:px-8
      sm:pb-12
      sm:pt-20
      lg:px-10
      lg:pb-14
      lg:pt-24
    "
  >
    <div className="mx-auto w-full max-w-7xl">
      <Reveal>
        <div className="max-w-5xl">

          {/* Heading */}
          <h1
            className="
              max-w-4xl
              font-display
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Our Services
          </h1>
        </div>
      </Reveal>
    </div>
  </div>

</section>

      {/* ======================================================
          DEMENTIA AND MEDICAL CARE — CLIENT CONTENT
          ====================================================== */}
      <Section
        id="dementia-care"
        eyebrow="Dementia and Medical Care"
        title="Compassionate, Person-Centred Dementia & Medical Care Services"
        tone="sand"
      >
        <div className="relative space-y-12 overflow-hidden sm:space-y-16">

          {/* Premium background accents */}
          <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#ED6439]/8 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-[28rem] h-80 w-80 rounded-full bg-[#E8A22F]/10 blur-3xl" />

          {/* INTRO — DEMENTIA CARE */}
          <Reveal>
            <div className="relative mt-0 grid min-w-0 gap-7 sm:mt-0 sm:gap-9 lg:mt-0 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:gap-10">

              {/* LEFT — CONTENT */}
              <div className="relative z-10 min-w-0 rounded-[2px] border border-[#ED6439]/10 bg-white/65 p-5 shadow-[0_24px_70px_-35px_rgba(38,55,70,0.22)] backdrop-blur-[2px] sm:p-7 lg:p-8">

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[3px] w-10 bg-[#ED6439]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ED6439] sm:text-xs">
                    Understanding dementia care
                  </span>
                </div>

                <p className="text-[15px] leading-[1.85] text-[#46627A] sm:text-[16px]">
                  Dementia can change the life of the person living with it and the
                  lives of everyone who cares for them.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#46627A] sm:text-[16px]">
                  At Nightingales Medical Trust (NMT), we believe dementia care is
                  much more than managing symptoms. It is about preserving dignity,
                  promoting independence, maintaining quality of life and supporting
                  the entire family.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#46627A] sm:text-[16px]">
                  Since 2006, NMT has been pioneering professional and compassionate
                  dementia-care services. With nearly three decades of experience, we have
                  developed a comprehensive continuum of dementia care — from
                  dementia risk reduction and early assessment to day care,
                  residential care, caregiver training and family support.
                </p>

                <p className="mt-5 text-[15px] leading-[1.85] text-[#46627A] sm:text-[16px]">
                  Our approach combines professional medical care with cognitive
                  stimulation, meaningful activities, rehabilitation, psychosocial
                  support and other non-pharmacological approaches, within safe and
                  dementia-friendly environments.
                </p>
              </div>

              {/* RIGHT — IMAGE
                  IMPORTANT:
                  On desktop this wrapper stretches to exactly
                  the same height as the left content card.
              */}
              <div
  className="
    group
    relative
    z-10
    min-w-0
    overflow-hidden
    bg-transparent
    sm:min-h-[450px]
    lg:h-full
    lg:min-h-0
  "
>
  {/* Orange accent */}
  <div
    className="
      pointer-events-none
      absolute
      inset-y-0
      left-0
      z-20
      w-[3px]
      bg-[#ED6439]
      shadow-[0_0_24px_rgba(237,100,57,0.35)]
    "
  />

  <img
    src={Compassionate}
    alt="Care with dignity at Nightingales Medical Trust"
    loading="lazy"
    decoding="async"
    className="
      relative
      block
      h-auto
      w-full
      object-contain
      object-center
      shadow-[0_30px_80px_-25px_rgba(38,55,70,0.38)]
      transition-transform
      duration-700
      group-hover:scale-[1.025]

      lg:absolute
      lg:inset-0
      lg:h-full
      lg:w-full
      lg:object-cover
    "
  />



</div>

            </div>
          </Reveal>

          <Reveal>
            <div className="relative overflow-hidden bg-[#E15925] px-5 py-7 text-white shadow-[0_25px_60px_-25px_rgba(23,35,43,0.35)] sm:px-8 sm:py-9 md:px-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ED6439]/20 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
                  You don't have to face dementia alone
                </p>
                <p className="mt-4 max-w-4xl text-[15px] leading-[1.8] text-white/80 sm:text-[16px]">
                  Whether you are concerned about memory loss, caring for a loved
                  one at home, looking for daytime support or considering
                  residential care, NMT is here to walk with you at every stage.
                </p>
              </div>
            </div>
          </Reveal>

          {/* DEMENTIA CARE CONTINUUM */}
<Reveal>
  <div className="min-w-0">
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439] sm:text-sm">
      Our Dementia Care Continuum
    </p>

    <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-[#263746] sm:text-3xl md:text-4xl">
      Prevent. Detect. Support. Care. Empower.
    </h3>

    <p className="mt-4 max-w-4xl text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
      At NMT, dementia care begins well before a person requires
      residential care. We support individuals and families across the
      dementia journey.
    </p>
  </div>
</Reveal>

<div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {[
    {
      number: "01",
      step: "Reduce Risk",
      text: "Online Dementia Risk Reduction Programme",
      hash: "online-risk-reduction",
    },
    {
      number: "02",
      step: "Detect Early",
      text: "Memory Clinics & Cognitive Assessment",
      hash: "memory-clinics",
    },
    {
      number: "03",
      step: "Support Independence",
      text: "Dementia Day Care & Meaningful Engagement",
      hash: "day-care",
    },
    {
      number: "04",
      step: "Empower Families",
      text: "Caregiver Training & Family Support Groups",
      hash: "caregiver-training",
    },
    {
      number: "05",
      step: "Provide Continuing Care",
      text: "Specialised Residential Dementia Care",
      hash: "residential-care",
    },
    {
      number: "06",
      step: "Build the Future of Dementia Care",
      text: "Nightingales Smriti Gram – Dementia Care, Learning & Research",
      hash: "smriti-gram",
    },
  ].map(({ number, step, text, hash }, index) => (
    <Reveal key={step} delay={(index % 3) * 80}>
      <Link
        to="/services"
        hash={hash}
        className="group block h-full"
      >
        <div className="h-full border border-[#ED6439]/15 bg-white p-5 shadow-[0_16px_45px_-22px_rgba(70,45,10,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ED6439]/40 hover:shadow-[0_20px_50px_-20px_rgba(237,100,57,0.22)] sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="font-display text-lg font-extrabold text-[#ED6439]">
              {number}
            </span>

            <ArrowUpRight className="h-4 w-4 text-[#ED6439] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <span className="mt-3 block text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
            {step}
          </span>

          <p className="mt-3 font-display text-base font-extrabold leading-snug text-[#263746] sm:text-lg">
            {text}
          </p>
        </div>
      </Link>
    </Reveal>
  ))}
</div>

          {/* <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Reduce Risk", "Online Dementia Risk Reduction Programme"],
              ["Detect Early", "Memory Clinics & Cognitive Assessment"],
              ["Support Independence", "Dementia Day Care & Meaningful Engagement"],
              ["Empower Families", "Caregiver Training & Family Support Groups"],
              ["Provide Continuing Care", "Specialised Residential Dementia Care"],
              ["Build the Future of Dementia Care", "Nightingales Smriti Gram – Dementia Care, Learning & Research"],
            ].map(([step, text], index) => (
              <Reveal key={step} delay={(index % 3) * 80}>
                <div className="h-full border border-[#ED6439]/15 bg-white p-5 shadow-[0_16px_45px_-22px_rgba(70,45,10,0.18)] sm:p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                    {step}
                  </span>
                  <p className="mt-3 font-display text-base font-extrabold leading-snug text-[#263746] sm:text-lg">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div> */}

          <Reveal>
            <p className="font-display text-lg font-extrabold text-[#ED6439] sm:text-xl">
              One organisation. A complete continuum of dementia care.
            </p>
          </Reveal>

          {/* DEMENTIA PROGRAMMES */}
          <div className="space-y-8 sm:space-y-10">

            <Reveal>
              <h3 className="font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                Dementia Care Services
              </h3>
            </Reveal>

            {/* 1. ONLINE RISK REDUCTION */}
            <Reveal>
              <div
              id="online-risk-reduction"
              className="overflow-hidden border border-[#ED6439]/10 bg-white">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

                  <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#ED6439]/10">
                        <Brain className="h-5 w-5 text-[#ED6439]" />
                      </div>

                      {/* <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ED6439]">
                        Programme 01
                      </p> */}
                    </div>

                    <h3 className="max-w-2xl font-display text-2xl font-extrabold leading-tight text-[#ED6439] sm:text-3xl lg:text-[34px]">
                      Online Dementia Risk Reduction Programme
                    </h3>

                    <p className="mt-4 text-lg font-bold leading-relaxed text-[#263746] sm:text-xl">
                      Take Action Today for a Healthier Brain Tomorrow
                    </p>

                    <div className="mt-5 space-y-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      <p>
                        Dementia risk is influenced by a combination of factors,
                        including age, lifestyle, physical health, cognitive
                        activity and social engagement. While dementia cannot
                        always be prevented, addressing modifiable risk factors
                        and adopting healthier lifestyle habits may help support
                        brain health and reduce the risk of cognitive decline.
                      </p>

                      <p>
                        NMT's Online Dementia Risk Reduction Programme enables
                        individuals to take practical steps towards healthier
                        ageing, <strong className="font-black text-black">
  conveniently from home.
</strong>
                      </p>
                    </div>

                    <div className="mt-7">
                      <p className="mb-4 text-sm font-bold text-[#263746]">
                        Programme focus:
                      </p>

                      <ul className="grid gap-3 sm:grid-cols-2">
                        {[
                          "Physical activity and fitness",
                          "Cognitive stimulation and mental activity",
                          "Healthy lifestyle practices",
                          "Social engagement and meaningful relationships",
                          "Identification and management of dementia risk factors",
                          "Personalised guidance and goal setting",
                          "Regular follow-up and motivation",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-[13.5px] leading-[1.6] text-muted-foreground"
                          >
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 space-y-4 border-t border-[#263746]/10 pt-6 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      <p>
                        The programme combines assessment, education, guided
                        activities and ongoing support, helping participants
                        make sustainable changes rather than simply receiving
                        information.
                      </p>

                      <div>
                       <p className="mb-4 text-xl font-bold text-[#263746] sm:text-2xl">
  Who can benefit?
</p>

                        <p className="mb-4 text-[13.5px] leading-[1.6] text-muted-foreground sm:text-[15px]">
                          The programme is particularly suitable for:
                        </p>

                        <ul className="space-y-2.5">
                          {[
                            "Adults concerned about their memory or future dementia risk",
                            "People with a family history of dementia",
                            "Older persons who want to maintain cognitive and physical health",
                            "Individuals looking to adopt healthier ageing habits",
                            "People with subjective memory concerns who want to take proactive steps",
                            "Families looking for evidence-informed ways to support brain health",
                          ].map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-[13.5px] leading-[1.6] text-muted-foreground sm:text-[15px]"
                            >
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="mt-5 text-base font-bold leading-[1.7] text-[#263746] sm:text-lg">
                          Start caring for your brain health today.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="tel:08042426565"
                        className="inline-flex items-center justify-center gap-2 bg-[#ED6439] px-6 py-3 text-xs font-bold tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#d95730] hover:shadow-lg"
                      >
                        <PhoneCall className="h-4 w-4" />
                        JOIN THE PROGRAMME (CALL 080 - 4242 6565)
                      </a>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 border border-[#ED6439]/30 bg-white px-6 py-3 text-xs font-bold tracking-[0.12em] text-[#ED6439] transition-all duration-300 hover:bg-[#FFF4DF]"
                      >
                        ENQUIRE ONLINE
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                 <div className="relative min-h-[320px] overflow-hidden bg-[#F6F1EC] sm:min-h-[400px] lg:min-h-full">
  <img
    src={riskReductionImage}
    alt="Online Dementia Risk Reduction Programme at Nightingales Medical Trust"
    loading="lazy"
    decoding="async"
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-center
    "
  />
</div>

                </div>
              </div>
            </Reveal>

            {/* 2. MEMORY CLINICS */}
            <Reveal>
              <div 
              id="memory-clinics"
              className="overflow-hidden border border-[#ED6439]/15 bg-white shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">

                  <div className="relative min-h-[340px] overflow-hidden bg-[#F6F1EC] sm:min-h-[460px] lg:min-h-full">
                    <img
                      src={memoryclinicImage}
                      alt="Memory Clinic at Nightingales Medical Trust"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-5 sm:p-7 md:p-9">
                    <h4 className="font-display text-xl font-extrabold text-[#ED6439] sm:text-2xl">
                     Memory Clinics
                    </h4>

                    <p className="mt-2 text-lg font-bold text-[#263746] sm:text-xl">
                      Early Assessment. Early Understanding. Better Planning.
                    </p>

                    <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      Memory changes should never be ignored. Our Memory Clinics provide
                      professional assessment for people experiencing memory loss,
                      confusion, behavioural changes or difficulties in everyday functioning.
                    </p>

                    <p className="mt-4 font-semibold text-[#263746]">
                      NMT operates Memory Clinics at Bengaluru and Kolar:
                    </p>

                    <ul className="mt-3 space-y-2.5 text-[14px] leading-[1.7] text-muted-foreground">
                      <li>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Nightingales+Trust+Day+Care+for+Elderly+and+Dementia,+2nd+Floor,+No+190,+Rashtriya+Vidyalaya+Rd,+Jayanagar,+Bengaluru"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-[#ED6439] hover:underline"
                        >
                          Bengaluru – Jayanagar
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Nightingales+Centre+for+Ageing+%26+Alzheimer's,+8P6,+3rd+A+Cross,+Kasturinagar,+Banaswadi,+Bengaluru"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-[#ED6439] hover:underline"
                        >
                          Bengaluru – Kasturinagar
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>

                      </li>

                      <li>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Nightingales+Dementia+Care+Centre+%40+ETCM+Hospital,+F+Ward,+ETCM+Hospital,+Bangarpet+Road,+Kolar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-[#ED6439] hover:underline"
                        >
                          Kolar – ETCM Hospital
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </li>
                    </ul>

                    <p className="mt-5 font-semibold text-[#263746]">
                      Our Memory Clinics offer:
                    </p>

                    <ul className="mt-3 list-disc list-inside space-y-2.5 text-[14px] leading-[1.7] text-muted-foreground">
  <li>Comprehensive memory and cognitive assessments</li>
  <li>Clinical evaluation and expert consultation</li>
  <li>Identification of possible causes of memory problems</li>
  <li>Guidance on further investigations and care</li>
  <li>Advice on managing behavioural and functional changes</li>
  <li>Counselling and guidance for families</li>
  <li>Care planning and referral to appropriate NMT services</li>
</ul>

                    <p className="mt-5 text-[14px] leading-[1.8] font-bold text-[#263746] sm:text-[15px]">
                      Our goal is not simply to provide a diagnosis. We help families
                      understand what is happening and what they can do next.
                    </p>

                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#ED6439] sm:text-[13px]"
                    >
                      BOOK A MEMORY ASSESSMENT
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                </div>
              </div>
            </Reveal>

            {/* 3. DAY CARE */}
            <Reveal>
              <div id="day-care" className="overflow-hidden border border-[#ED6439]/15 bg-white shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">

                  <div className="p-5 sm:p-7 md:p-9 lg:order-1">
                    <h4 className="font-display text-xl font-extrabold text-[#ED6439] sm:text-2xl">
                      Dementia Day Care
                    </h4>

                    <p className="mt-2 text-lg font-bold text-[#263746] sm:text-xl">
                      Professional Care During the Day. Peace of Mind and Respite for the Family.
                    </p>

                    <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      Caring for a person with dementia at home can be challenging,
                      particularly when family members have work and other responsibilities.
                      NMT's Dementia Day Care Centres provide a <strong className="font-bold text-[#263746]">
  safe, stimulating and supportive environment during the day, while enabling the person to
  continue living with their family.
</strong>
                    </p>

                    <p className="mt-5 font-semibold text-[#263746]">
                      Our day-care centres are located in Bengaluru at:
                    </p>

                    <ul className="mt-3 space-y-2.5 text-[14px] leading-[1.7] text-muted-foreground">
                      <li>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Nightingales+Trust+Day+Care+for+Elderly+and+Dementia,+190+Rashtriya+Vidyalaya+Road,+2nd+Block,+Jayanagar,+Bengaluru,+Karnataka+560004"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-[#ED6439] hover:underline"
                        >
                          Jayanagar
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Nightingales+Trust+Dementia+Day+Care+Centre,+337+2nd+Cross,+1st+Block,+RT+Nagar,+Bengaluru,+Karnataka+560032"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-[#ED6439] hover:underline"
                        >
                          RT Nagar
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Nightingales+Centre+for+Ageing+%26+Alzheimer's,+8P6+3rd+A+Cross,+Kasturinagar,+Banaswadi,+Bengaluru,+Karnataka+560043"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-[#ED6439] hover:underline"
                        >
                          Kasturinagar
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </li>
                    </ul>

                    <p className="mt-5 font-semibold text-[#263746]">
                      What we provide:
                    </p>

                    <ul className="mt-3 space-y-2.5 text-[14px] leading-[1.7] text-muted-foreground">
                      <li>Individual assessment and personalised care plans</li>
                      <li>Supervision by trained caregivers</li>
                      <li>Support from qualified psychologists</li>
                      <li>Physical and cognitive activities</li>
                      <li>Social interaction and meaningful engagement</li>
                      <li>Exercise and therapeutic activities</li>
                      <li>Support with daily routines</li>
                      <li>A safe and dementia-friendly environment</li>
                    </ul>

                    <p className="mt-5 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      For families, it means: <br />
                      <strong className="font-bold text-[#263746]">
  Professional care for your loved one — and much-needed respite for you.
</strong>
                    </p>
                    <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      Day care can also help families provide structured support while enabling the person to continue living at home for as long as possible.
                    </p>

                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#ED6439] sm:text-[13px]"
                    >
                      ENQUIRE ABOUT DEMENTIA DAY CARE
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div
  className="
    relative
    min-w-0
    overflow-hidden
    bg-[#F6F1EC]
    lg:order-2
    sm:min-h-[460px]
    lg:min-h-full
  "
>
  <img
    src={daycareImage}
    alt="Dementia Day Care at Nightingales Medical Trust"
    loading="lazy"
    decoding="async"
    className="
      relative
      block
      h-auto
      w-full
      object-contain
      object-center

      lg:absolute
      lg:inset-0
      lg:h-full
      lg:w-full
      lg:object-cover
    "
  />
</div>

                </div>
              </div>
            </Reveal>

            {/* 4. RESIDENTIAL CARE */}
<Reveal>
  <div id="residential-care" className="min-w-0">

    {/* SECTION INTRO */}
    <div className="max-w-4xl min-w-0">
      <h4 className="font-display text-xl font-extrabold text-[#ED6439] sm:text-2xl">
        Specialised Residential Dementia Care
      </h4>

      <p className="mt-2 text-lg font-bold text-[#263746] sm:text-xl">
        When Your Loved One Needs Care Around the Clock, We Are There.
      </p>

      <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
        As dementia progresses, providing safe and continuous care at home
        can become increasingly difficult. NMT offers specialised residential
        dementia-care facilities providing <strong className="font-bold text-[#263746]">
  24-hour supervision, professional care, medical support and a secure, nurturing environment.
</strong>
      </p>
    </div>

    {/* ==================================================
        RESIDENTIAL CARE CENTRES
        ================================================== */}
    <div className="mt-7 flex min-w-0 gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">

      {[
        {
          name: "Nightingales Centre for Ageing and Alzheimer's – Kasturinagar",
          location: "Kasturinagar, Bengaluru",
          images: [kasturinagarFacilityImage, kasturinagarElderImage],
          usps: [
            "Multi-disciplinary team of doctors, psychiatrists, psychologists & nurses",
            "Conveniently located within city limits",
            "Registered under the Mental Healthcare Act, 2017",
          ],
          body: "Our 97-bed facility, established in 2010, provides specialised dementia care in an elder-friendly environment. A multidisciplinary team comprising psychiatrists, doctors, psychologists, physiotherapists, nurses and specially trained caregivers provides round-the-clock care. The facility also has a step-down ward to manage chronic and minor medical conditions, helping minimise avoidable hospitalisation.",
        },
        {
          name: "ETCM Nightingales Dementia Care Centre – Kolar",
          location: "Bangarpet Road, Kolar",
          images: [kolarFacilityImage, kolarElderImage],
          usps: [
            "Affordable residential care option",
            "An hour from KR Puram, Bengaluru",
            "Registered under the Mental Healthcare Act, 2017",
          ],
          body: "A 50-bed facility located within a missionary hospital campus, providing access to round-the-clock medical support. The centre offers specialised dementia care, care for elders with stroke and Parkinson's disease, palliative care, a safe elder-friendly environment and telemedicine-supported clinical oversight from NMT's specialist team.",
        },
        {
          name: "Nightingales Trust Tanya Mathias Centre – Kothanur",
          location: "Kothanur, Bengaluru",
          images: [kothanurFacilityImage, kothanurElderImage],
          usps: [
            "Exclusive for women",
            "Peaceful, homely environment",
            "Registered under the Mental Healthcare Act, 2017",
          ],
          body: "A 25-bed residential facility exclusively for women. The centre offers a peaceful, homely environment, two- and three-sharing rooms, specialised dementia care, care for elders with stroke and Parkinson's disease, palliative care and clinical oversight from NMT's specialist team through telemedicine.",
        },
      ].map((centre) => (
  <article
  key={centre.name}
  className="
  !flex
  !w-full
  !min-w-full
  !max-w-full
  !shrink-0
  !grow-0
  snap-start
  flex-col
  overflow-hidden
  rounded-2xl
  border
  border-[#ED6439]/15
  bg-white
  shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]

  sm:!w-[calc(50%-10px)]
  sm:!min-w-[calc(50%-10px)]
  sm:!max-w-[calc(50%-10px)]

  lg:!w-[calc(33.333%-13.333px)]
  lg:!min-w-[calc(33.333%-13.333px)]
  lg:!max-w-[calc(33.333%-13.333px)]
"
      >

          {/* ==================================================
              RESPONSIVE CARD IMAGE WITH LOCATION BADGE & SHUFFLE
              ================================================== */}
          <div
            className="
              relative
              w-full
              h-64
              sm:h-72
              overflow-hidden
              bg-[#F6F1EC]
            "
          >
            <ImageShuffle images={centre.images} alt={centre.name} />
            <div className="absolute bottom-3 left-3 z-10 rounded bg-[#E15925]/90 px-3 py-1.5 text-[11px] font-bold text-white shadow backdrop-blur-sm">
              📍 {centre.location}
            </div>
          </div>

          {/* ==================================================
              CARD CONTENT
              ================================================== */}
          <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">

            <h5
              className="
                break-words
                font-display
                text-lg
                font-extrabold
                leading-snug
                text-[#263746]
              "
            >
              {centre.name}
            </h5>

            <ul className="mt-3 space-y-1.5 border-y border-[#263746]/10 py-3 text-xs font-semibold text-[#ED6439]">
              {centre.usps.map((usp) => (
                <li key={usp} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                  <span>{usp}</span>
                </li>
              ))}
            </ul>

            <p
              className="
                mt-4
                break-words
                text-[13.5px]
                leading-[1.75]
                text-muted-foreground
                sm:text-[14px]
              "
            >
              {centre.body}
            </p>

          </div>
        </article>
      ))}

    </div>

    {/* ==================================================
        RESIDENTIAL-CARE PHILOSOPHY
        ================================================== */}
    <div
      className="
        mt-7
        min-w-0
        border
        border-[#ED6439]/15
        bg-white
        p-5
        sm:p-7
      "
    >
      <h5 className="font-display text-lg font-extrabold text-[#ED6439] sm:text-xl">
        Our residential-care philosophy
      </h5>

      <p className="mt-3 text-[15px] font-bold text-[#263746]">
        Residential care should never mean simply providing accommodation.
      </p>
      <p className="mt-3 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
        At NMT, we strive to create an environment where residents are:
      </p>

      <p className="mt-4 font-display text-lg font-extrabold text-[#ED6439]">
        Safe. Respected. Engaged. Comfortable. Cared for.
      </p>

      <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
        We focus on maintaining abilities, encouraging meaningful activity,
        managing behavioural and psychological symptoms compassionately, and
        preserving dignity at every stage.
      </p>

      <Link
        to="/contact"
        className="
          mt-5
          inline-flex
          max-w-full
          items-center
          gap-2
          text-[12px]
          font-bold
          text-[#ED6439]
          transition-all
          duration-300
          hover:gap-3
          sm:text-[13px]
        "
      >
        <span className="break-words">
          EXPLORE RESIDENTIAL DEMENTIA CARE
        </span>

        <ArrowUpRight
          className="h-4 w-4 shrink-0"
          strokeWidth={2.2}
        />
      </Link>
    </div>

  </div>
</Reveal>

            {/* 5. CAREGIVER TRAINING */}
            <ServiceCard
              icon={GraduationCap}
              title="Family Caregiver Training"
              cta="ENQUIRE ABOUT CAREGIVER TRAINING"
            >
              <div className="grid min-w-0 gap-6 sm:gap-8 lg:grid-cols-2 lg:items-start">

                <div className="flex w-full items-center justify-center overflow-hidden border border-[#ED6439]/15 bg-[#F8F5F0]">
  <img
    src={familyCaregiverTrainingImage}
    alt="Family Caregiver Training"
    loading="lazy"
    decoding="async"
    className="block h-auto w-full object-contain object-center"
  />
</div>

                <div>
                  <p className="text-base font-bold text-[#263746] sm:text-lg">
                    Knowledge Changes the Way We Care.
                  </p>

                  <p className="mt-3 text-[14px] leading-[1.75] text-muted-foreground">
                    Dementia caregiving requires more than good intentions. Families need
                    practical knowledge and skills to understand the condition, communicate
                    effectively and respond appropriately to changing needs.
                  </p>

                  <p className="mt-3 text-[14px] leading-[1.75] text-muted-foreground">
                    NMT's family caregiver training helps families provide safer and more meaningful care.
                    Training focuses on practical knowledge, communication, person-centred care and caregiver well-being.
                  </p>

                  <p className="mt-4 font-semibold text-[#263746]">
                    The training covers areas such as:
                  </p>

                  <ul className="mt-3 space-y-2 text-[13.5px] leading-[1.6] text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>Understanding dementia and stages of cognitive changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>Communication with a person living with dementia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>Managing behavioural and psychological changes with empathy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>Assistance with personal care and daily routines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>Nutrition, hydration and swallowing safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>Mobility support and fall prevention in the home</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>Medication management and coordinating medical care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>Meaningful activities and cognitive stimulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>Emotional support and caregiver stress management / self-care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>Palliative care considerations and long-term planning</span>
                    </li>
                  </ul>

                  <p className="mt-4 text-[13.5px] leading-[1.7] text-muted-foreground">
                    Our training combines classroom learning with practical, hands-on guidance, helping
                    caregivers become confident and competent.
                  </p>

                  <p className="mt-4 font-bold text-[#ED6439]">
                    Our aim: To make dementia caregiving safer, more informed and more humane.
                  </p>
                </div>
              </div>
            </ServiceCard>

            {/* 6. FAMILY SUPPORT GROUPS */}
            <Reveal>
              <div id="family-support-groups" className="border border-[#ED6439]/15 bg-white shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]">
                <div className="grid lg:grid-cols-2">

                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center gap-3">
                      <HeartHandshake className="h-7 w-7 text-[#ED6439]" />

                      <h4 className="font-display text-xl font-extrabold text-[#ED6439] sm:text-2xl">
                        Dementia Family Support Groups
                      </h4>
                    </div>

                    <p className="mt-5 text-lg font-bold text-[#263746] sm:text-xl">
                      You Need Support Too.
                    </p>

                    <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      Dementia can be isolating not only for the person living with the condition, but also for the family caregiver.
                    </p>

                    <p className="mt-4 text-[14px] leading-[1.8] font-bold text-[#263746] sm:text-[15px]">
                      NMT's support groups provide families with an opportunity to:
                    </p>

                    <ul className="mt-3 space-y-2.5 text-[14px] leading-[1.7] text-muted-foreground sm:text-[15px]">
                      {[
                        "Share experiences with others going through similar situations",
                        "Learn from dementia-care professionals",
                        "Discuss practical caregiving challenges",
                        "Understand behavioural and psychological changes",
                        "Learn coping strategies",
                        "Exchange useful resources and experiences",
                        "Find reassurance and emotional support",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      Sometimes, simply knowing that someone else understands can make a tremendous difference.
                    </p>

                    <p className="mt-5 font-semibold text-[#ED6439]">
                      You are not alone. There is a community that understands.
                    </p>

                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold text-[#ED6439] sm:text-[13px]"
                    >
                      JOIN A SUPPORT GROUP
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="flex items-center justify-center p-5 sm:p-6">
                    <img
                      src={dementiaFamilySupportImage}
                      alt="Dementia Family Support Group"
                      className="block h-auto w-full object-contain"
                    />
                  </div>

                </div>
              </div>
            </Reveal>

            {/* 8. SMRITI GRAM */}
            <Reveal>
              <div id="smriti-gram" className="overflow-hidden border border-[#ED6439]/15 bg-white shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                  <div className="h-full min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
                    <img
                      src={smritiGramImage}
                      alt="Nightingales Smriti Gram"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                    <h4 className="font-display text-xl font-extrabold text-[#ED6439] sm:text-2xl">
                      Nightingales Smriti Gram
                    </h4>

                    <p className="mt-2 text-lg font-bold text-[#263746] sm:text-xl">
                      A New Vision for Dementia Care in India
                    </p>

                    <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      Since 2006, NMT has been pioneering professional and compassionate dementia-care services. With nearly three decades of experience, we have developed a comprehensive continuum of dementia care — from dementia risk reduction and early assessment to day care, residential care, caregiver training and family support.
                    </p>

                    <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      Building on nearly three decades of experience, NMT is creating <strong className="font-black text-[#263746]">
  Nightingales Smriti Gram — Dementia Care, Learning & Research, near Doddaballapur, Bengaluru Rural District.
</strong>
                    </p>

                    <p className="mt-4 text-[14px] leading-[1.8] font-bold text-[#263746] sm:text-[15px]">
                      Envisioned as a landmark integrated dementia-care village, Smriti Gram will bring together:
                    </p>

                    <ul className="mt-3 space-y-2.5 text-[14px] leading-[1.7] text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                        <span>Person-centred dementia care</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                        <span>Nature-enriched living</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                        <span>Therapeutic outdoor spaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                        <span>Meaningful activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                        <span>Alternative and complementary therapies alongside modern medical care</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                        <span>Training and capacity building</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                        <span>Research and innovation</span>
                      </li>
                    </ul>

                    <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                      The planned campus will ultimately provide 300 beds, creating a new benchmark for dementia care in India. The first phase includes a 100-bed facility for elders from economically marginalised communities, along with a Training Academy.
                    </p>

                    <p className="mt-4 font-bold text-[#263746]">
                      Smriti Gram represents NMT's commitment to:
                    </p>

                    <p className="mt-1 font-semibold text-[#ED6439]">
                      Making quality dementia care accessible, compassionate and innovative.
                    </p>

                    <Link
                      to="/smriti-gram"
                      className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#ED6439] transition-all duration-300 hover:gap-3 sm:text-[13px]"
                    >
                      LEARN MORE ABOUT NIGHTINGALES SMRITI GRAM
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                </div>
              </div>
            </Reveal>

          </div>

          {/* OUR APPROACH */}
          <Reveal>
            <div className="border border-[#ED6439]/15 bg-white p-5 shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)] sm:p-7 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439] sm:text-sm">
                Our Approach to Dementia Care
              </p>

              <h3 className="mt-3 font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                Good dementia care should preserve personhood, not just manage symptoms.
              </h3>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["Dignity", "Every person deserves to be treated with respect, regardless of the stage of dementia."],
                  ["Individuality", "We understand the person's life story, preferences, abilities and needs."],
                  ["Independence", "We encourage people to do what they can for themselves, with appropriate support."],
                  ["Meaningful Engagement", "Activities are designed to promote physical, cognitive, emotional and social well-being."],
                  ["Family Partnership", "Families are an essential part of the care team."],
                  ["Holistic Care", "We address medical, psychological, functional, social and emotional needs."],
                ].map(([heading, body]) => (
                  <div key={heading} className="border border-[#ED6439]/10 p-5">
                    <h4 className="font-display font-extrabold text-[#263746]">
                      {heading}
                    </h4>

                    <p className="mt-2 text-[13.5px] leading-[1.75] text-muted-foreground sm:text-[14px]">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* WHY CHOOSE NMT */}
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">

              {/* PORTRAIT IMAGE */}
              <div
                className="
                  relative
                  min-w-0
                  overflow-hidden
                  bg-[#FFF4DF]
                  sm:min-h-[460px]
                  lg:min-h-[600px]
                "
              >
                <img
                  src={careWithDignity}
                  alt="Compassionate care at Nightingales Medical Trust"
                  loading="lazy"
                  decoding="async"
                  className="
                    relative
                    block
                    h-auto
                    min-h-0
                    w-full
                    object-contain
                    object-center

                    lg:absolute
                    lg:inset-0
                    lg:h-full
                    lg:w-full
                    lg:object-cover
                  "
                />


              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center lg:py-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439] sm:text-sm">
                  Why Choose Nightingales Medical Trust?
                </p>

                <h3 className="mt-3 max-w-xl font-display text-2xl font-extrabold leading-tight tracking-[-0.025em] text-[#263746] sm:text-3xl lg:text-[36px]">
                  Compassionate, Professional Care
                </h3>

                <p className="mt-4 max-w-2xl text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                  We believe that a diagnosis of dementia should never take away
                  a person's dignity, identity or right to be treated with respect.
                </p>

                <div className="mt-7 border-t border-[#263746]/10">
                  {[
                    [
                      "Nearly three decades of experience in age-care",
                      "Since 1998, NMT has been dedicated to improving the lives of elders and developing innovative solutions for dementia care.",
                    ],
                    [
                      "Comprehensive dementia-care ecosystem",
                      "From risk reduction and Memory Clinics to Day Care, Residential Care, Family Support and Caregiver Training, our services cover changing needs.",
                    ],
                    [
                      "Person-centred care",
                      "Every person with dementia is unique. We focus on each individual's abilities, preferences, life history, interests and changing needs - not merely the diagnosis.",
                    ],
                    [
                      "Multidisciplinary expertise",
                      "Our dementia-care teams bring together doctors, psychiatrists, psychologists, nurses, physiotherapists and specially trained caregivers to provide holistic care.",
                    ],
                    [
                      "Dementia-friendly environments",
                      "Our centres are designed for safety, familiarity, comfort and meaningful engagement while avoiding unnecessary restrictions.",
                    ],
                    [
                      "Emphasis on non-pharmacological care",
                      "Activities, cognitive stimulation, physical exercise, psychosocial interventions, meaningful engagement and other non-pharmacological approaches form an important part of our dementia-care philosophy.",
                    ],
                    [
                      "Supporting the whole family",
                      "Dementia affects the entire family. We equip caregivers with knowledge, practical skills and emotional support so they can make informed decisions and provide better care.",
                    ],
                  ].map(([heading, body], index) => (
                    <div
                      key={heading}
                      className="group border-b border-[#263746]/10 py-4 sm:py-5"
                    >
                      <div className="flex gap-4">
                        <span className="mt-0.5 shrink-0 font-display text-sm font-extrabold text-[#ED6439]/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0">
                          <h4 className="font-display text-[15px] font-extrabold leading-snug text-[#263746] transition-colors duration-300 group-hover:text-[#ED6439] sm:text-base">
                            {heading}
                          </h4>

                          <p className="mt-1.5 max-w-2xl text-[13px] leading-[1.7] text-muted-foreground sm:text-[13.5px]">
                            {body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* WHEN TO SEEK HELP */}
          <Reveal>
            <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439] sm:text-sm">
                  When Should You Seek Help?
                </p>

                <h3 className="mt-3 font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                  Don't wait until the situation becomes overwhelming.
                </h3>

                <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                  Early assessment can help families understand the condition and plan care better.
                </p>
                <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground sm:text-[15px]">
                  Consider seeking professional advice if your loved one is experiencing:
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Increasing forgetfulness that affects everyday life",
                  "Repeatedly asking the same questions",
                  "Difficulty managing familiar tasks",
                  "Confusion about time or place",
                  "Changes in personality or behaviour",
                  "Difficulty communicating",
                  "Problems with mobility or daily activities",
                  "Increasing dependence on family members",
                  "Wandering or safety concerns",
                  "Sleep disturbances or behavioural changes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border border-[#ED6439]/10 bg-white p-4 text-[13.5px] leading-[1.7] text-muted-foreground sm:text-[14px]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ED6439]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* FINAL DEMENTIA CTA */}
          <Reveal>
            <div className="relative overflow-hidden bg-[#E15925] px-5 py-8 text-white sm:px-8 sm:py-10 md:px-10">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#ED6439]/20 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
                  You Don't Have to Do This Alone
                </p>

                <p className="mt-4 max-w-4xl text-[15px] leading-[1.8] text-white/80 sm:text-[16px]">
                  Dementia is a journey and every family's journey is different.
                  Whether you are seeking an initial memory assessment, looking
                  for daytime support, need help managing care at home, or are
                  considering residential care, Nightingales Medical Trust can
                  help you find the right level of support.
                </p>

                <p className="mt-5 font-display text-lg font-extrabold text-white sm:text-xl">
                  Safe. Respected. Engaged. Comfortable. Well Cared For.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {[
                    "Book a Memory Assessment",
                    "Explore Day Care",
                    "Find Residential Care",
                    "Join a Family Support Group",
                    "Enquire About Caregiver Training",
                    "Join the Online Dementia Risk Reduction Programme",
                  ].map((cta) => (
                    <Link
                      key={cta}
                      to="/contact"
                      className="inline-flex w-full max-w-full items-center justify-center gap-2 bg-[#ED6439] px-4 py-3 text-center text-[11px] font-bold leading-snug text-white transition-all hover:-translate-y-0.5 hover:bg-[#d95730] sm:w-auto sm:px-5 sm:py-3 sm:text-xs"
                    >
                      <span>{cta}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </Section>
  {/* ======================================================
    CARE FOR MARGINALIZED ELDERS
    ====================================================== */}

<Section
  id="marginalized"
  eyebrow=""
  title="CARE FOR MARGINALIZED ELDERS"
>
  <Reveal className="w-full min-w-0">
  <div className="w-full">
    <p className="text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-[16px]">
      Economic hardship, social isolation and lack of family support can make
      later life particularly difficult.
    </p>

    <p className="mt-4 text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-[16px]">
      NMT works with vulnerable and marginalised older persons through a
      combination of residential care, community-based services, healthcare,
      companionship and social engagement.
    </p>

    <p className="mt-4 text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-[16px]">
      Our programmes seek not only to meet basic needs, but to restore dignity,
      belonging and quality of life.
    </p>
  </div>
</Reveal>

 {/* ======================================================
    FULL-WIDTH SINGLE COLLAGE BANNER
    ====================================================== */}

<Reveal className="mt-8 sm:mt-10">
  <div
    className="
      w-full
      overflow-hidden
      border
      border-[#ED6439]/15
      bg-white
      shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]
    "
  >
    <img
      src={familyCaregiverTraining}
      alt="Care and support for marginalised elders"
      className="
        block
        h-auto
        w-full
        object-contain
        object-center
      "
    />
  </div>
</Reveal>

  <div className="mt-8 grid min-w-0 gap-6 sm:mt-10 sm:gap-8">

 {/* ======================================================
    SANDHYA SURAKSHA
    ====================================================== */}

<Reveal>
  <div
    className="
      min-w-0
      overflow-hidden
      border
      border-[#ED6439]/15
      bg-white
      shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]
    "
  >
    <div className="grid min-w-0 lg:grid-cols-[1fr_1fr]">

     {/* ==================================================
    IMAGE
================================================== */}
<div
  className="
    relative
    w-full
    overflow-hidden
    bg-[#f8f5ef]
  "
>
  <img
    src={sandhyaSurakshaImage}
    alt="Sandhya Suraksha"
    className="
      block
      h-auto
      w-full
      object-contain
      object-center
    "
  />


</div>

      {/* ==================================================
          CONTENT
          ================================================== */}
      <div
        className="
          min-w-0
          p-6
          sm:p-8
          md:p-10
          lg:p-11
        "
      >

        {/* ICON */}
        <div
          className="
            mb-5
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#ED6439]
            text-white
            shadow-[0_10px_25px_-10px_rgba(237,100,57,0.6)]
          "
        >
          <Home className="h-5 w-5" />
        </div>

        {/* TITLE */}
        <h3
          className="
            font-display
            text-xl
            font-extrabold
            text-[#ED6439]
            sm:text-2xl
          "
        >
          Sandhya Suraksha
        </h3>

        <div className="mt-3 h-1 w-11 bg-[#ED6439]" />

        {/* ==================================================
            VISIBLE CONTENT
            ================================================== */}
        <div
          className="
            mt-6
            text-[14px]
            leading-[1.8]
            text-muted-foreground
            sm:text-[15px]
          "
        >
          <p>
            Sandhya Suraksha is a model home for{" "}
            <strong className="font-semibold text-foreground">
              homeless elderly women
            </strong>{" "}
            in Bengaluru. It was established in association with the Methodist
            Church of India. Located in an attractive ambience, this centre
            provides{" "}
            <strong className="font-semibold text-foreground">
              residential care and support for vulnerable and destitute older
              persons irrespective of caste, creed or religion
            </strong>{" "}
            who have limited or no family support.
          </p>

          <p className="mt-4">
            <strong className="font-semibold text-foreground">
              Equipped with 95 beds
            </strong>
            , this senior friendly home provides a safe and caring environment
            where residents receive:
          </p>

          <ul className="mt-4 space-y-2.5">
            {[
              "Accommodation and nutritious food",
              "Healthcare support",
              "Personal care",
              "Emotional and psychosocial support",
              "Recreational and social activities",
              "Opportunities for meaningful engagement",
              "Assistance in accessing government entitlements and other services",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ==================================================
            READ MORE
            ================================================== */}
        <details className="group mt-6">

          <summary
            className="
              flex
              cursor-pointer
              list-none
              items-center
              gap-2
              border-0
              bg-transparent
              text-[12px]
              font-bold
              text-[#ED6439]
              outline-none
              focus:outline-none
              focus-visible:outline-none
              select-none
              sm:text-[13px]
            "
          >
            <span className="group-open:hidden">
              READ MORE
            </span>

            <span className="hidden group-open:inline">
              READ LESS
            </span>

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-open:rotate-180
              "
            />
          </summary>

          {/* ==================================================
              EXPANDED CONTENT
              ONLY THIS SIDE GROWS
              ================================================== */}
          <div className="mt-6 border-t border-[#ED6439]/15 pt-6">

            <h4
              className="
                font-display
                text-lg
                font-extrabold
                text-[#263746]
                sm:text-xl
              "
            >
              WHO CAN BE ADMITTED?
            </h4>

            <p
              className="
                mt-4
                text-[13.5px]
                leading-[1.75]
                text-muted-foreground
                sm:text-[14.5px]
              "
            >
              This facility is open for elderly women above 60 years who are
              deserted by their families. Elderly women missing or
              accidentally separated from families can also use the facility
              as a transit or short stay home until contact is established
              with family.
            </p>

            <p className="mt-5 font-semibold text-[#263746]">
              All services provided here are free of cost.
            </p>

            <p
              className="
                mt-5
                text-[13.5px]
                leading-[1.75]
                text-muted-foreground
                sm:text-[14.5px]
              "
            >
              NMT depends on socially conscious persons and organisations to
              support the work done at Nightingales Sandhya Suraksha.
            </p>

            {/* VOLUNTEER */}
          <div
  id="volunteer"
  className="
    mt-6
    border-t
    border-[#ED6439]/15
    pt-5
    sm:mt-7
    sm:pt-6
    scroll-mt-24
  "
>
              <h4
                className="
                  font-display
                  text-base
                  font-extrabold
                  text-[#263746]
                  sm:text-lg
                "
              >
                Volunteer Your Time ....
              </h4>

              <p
                className="
                  mt-3
                  text-[13.5px]
                  leading-[1.75]
                  text-muted-foreground
                  sm:text-[14.5px]
                "
              >
                There are many opportunities you as an individual or a
                corporate team can touch the lives of the elders at this
                centre.
              </p>

              <Link
                to="/get-involved"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-bold
                  text-[#ED6439]
                  sm:text-[13px]
                "
              >
                READ MORE
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* DONATE */}
            <div
              className="
                mt-6
                border-t
                border-[#ED6439]/15
                pt-5
                sm:mt-7
                sm:pt-6
              "
            >
              <h4
                className="
                  font-display
                  text-base
                  font-extrabold
                  text-[#263746]
                  sm:text-lg
                "
              >
                Donate Your Resources
              </h4>

              <p
                className="
                  mt-3
                  text-[13.5px]
                  leading-[1.75]
                  text-muted-foreground
                  sm:text-[14.5px]
                "
              >
                Your contributions can help feed the elderly and organise
                medical camps for elders here.
              </p>

              {/* <Link
                to="/get-involved"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-bold
                  text-[#ED6439]
                  sm:text-[13px]
                "
              >
                READ MORE
                <ArrowUpRight className="h-4 w-4" />
              </Link> */}
            </div>

            {/* CONTACT */}
            <Link
              to="/contact"
              className="
                mt-6
                inline-flex
                max-w-full
                items-center
                justify-center
                gap-2
                bg-[#ED6439]
                px-5
                py-3
                text-center
                text-[12px]
                font-bold
                text-white
                transition-all
                hover:-translate-y-0.5
                hover:bg-[#d95730]
                sm:mt-7
                sm:text-[13px]
              "
            >
              CONTACT US
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </Link>

          </div>
        </details>

      </div>
    </div>
  </div>
</Reveal>

   {/* ======================================================
    SANDHYA KIRANA
    ====================================================== */}

<Reveal>
  <div
    className="
      min-w-0
      overflow-hidden
      border
      border-[#ED6439]/15
      bg-white
      shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]
    "
  >
    <div
      className="
        grid
        min-w-0
        lg:grid-cols-[1fr_1fr]
        lg:items-start
      "
    >

      {/* ==================================================
          LEFT — PORTRAIT IMAGE
          FIXED HEIGHT — DOES NOT GROW ON READ MORE
          ================================================== */}

      <div
        className="
          relative
          h-[380px]
          w-full
          self-start
          overflow-hidden
          bg-[#f8f5ef]
          sm:h-[520px]
          lg:h-[700px]
        "
      >
        <img
          src={sandhyaKiranaImage}
          alt="Sandhya Kirana"
          className="
            block
            h-full
            w-full
            object-cover
            object-center
          "
        />


      </div>


      {/* ==================================================
          RIGHT — CONTENT
          ONLY THIS SIDE GROWS
          ================================================== */}

      <div
        className="
          min-w-0
          p-6
          sm:p-8
          md:p-10
          lg:p-11
        "
      >

        {/* ==================================================
            ICON
            ================================================== */}

        <div
          className="
            mb-5
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#ED6439]
            text-white
            shadow-[0_10px_25px_-10px_rgba(237,100,57,0.6)]
          "
        >
          <HeartHandshake className="h-5 w-5" />
        </div>


        {/* ==================================================
            TITLE
            ================================================== */}

        <h3
          className="
            font-display
            text-xl
            font-extrabold
            text-[#ED6439]
            sm:text-2xl
          "
        >
          Sandhya Kirana
        </h3>

        <div className="mt-3 h-1 w-11 bg-[#ED6439]" />


        {/* ==================================================
            VISIBLE CONTENT
            ================================================== */}

        <div
          className="
            mt-6
            text-[14px]
            leading-[1.8]
            text-muted-foreground
            sm:text-[15px]
          "
        >

          <p>
            Sandhya Kirana provides day care to economically disadvantaged
            and socially vulnerable older persons, particularly those living
            in underserved communities. It's an initiative of Nightingales
            Medical Trust in{" "}
            <strong className="font-semibold text-foreground">
              collaboration with the Bruhat Bengaluru Mahanagara Palika (City
              Corporation)
            </strong>
            .
          </p>

          <p className="mt-4">
            <strong className="font-semibold text-foreground">
              Sandhya Kirana Home provides safe shelter and take care of Homeless
              Elderly Men irrespective of caste, creed or religion.
            </strong>
          </p>

          <p className="mt-4">
            This unique programme creates opportunities for older persons to
            come together, access essential services and participate in
            activities that promote physical, emotional and social
            well-being.
          </p>

        </div>


        {/* ==================================================
            SUPPORT INCLUDES — ALL IN ONE PLACE
            ================================================== */}

        <div className="mt-6">

          <h4
            className="
              font-display
              text-lg
              font-extrabold
              text-[#263746]
              sm:text-xl
            "
          >
            Support includes:
          </h4>

          <ul
            className="
              mt-4
              space-y-2.5
              text-[14px]
              leading-[1.7]
              text-muted-foreground
              sm:text-[15px]
            "
          >
            {[
              "Health and geriatric care",
              "Nutrition support",
              "Social interaction",
              "Income generation activities",
              "Recreation and meaningful activities",
              "Awareness on health and welfare schemes",
              "Counselling and emotional support",
              "Linkages to appropriate government and community services",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>


        {/* ==================================================
            READ MORE / READ LESS
            ================================================== */}

        <button
          type="button"
          onClick={() => setSandhyaExpanded((prev) => !prev)}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            border-0
            bg-transparent
            text-[12px]
            font-bold
            text-[#ED6439]
            outline-none
            transition-all
            duration-300
            hover:gap-3
            focus:outline-none
            focus-visible:outline-none
            cursor-pointer
            sm:text-[13px]
          "
        >
          <span>
            {sandhyaExpanded ? "READ LESS" : "READ MORE"}
          </span>

          <ArrowUpRight
            className={`
              h-4
              w-4
              shrink-0
              transition-transform
              duration-300
              ${sandhyaExpanded ? "rotate-180" : ""}
            `}
            strokeWidth={2.2}
          />
        </button>


        {/* ==================================================
            EXPANDED CONTENT
            ================================================== */}

        {sandhyaExpanded && (
          <div
            className="
              mt-6
              border-t
              border-[#ED6439]/15
              pt-6
            "
          >

            {/* ADDITIONAL INFORMATION */}
            <div>
              <p
                className="
                  text-[13.5px]
                  leading-[1.75]
                  text-muted-foreground
                  sm:text-[14.5px]
                "
              >
                Nightingales Sandhya Kirana currently has more than 50
                members and on an average 40 elders attend the day care
                activities on a daily basis.
              </p>

              <p
                className="
                  mt-5
                  font-semibold
                  text-[#263746]
                "
              >
                All services provided here are free of cost.
              </p>

              <p
                className="
                  mt-5
                  text-[13.5px]
                  leading-[1.75]
                  text-muted-foreground
                  sm:text-[14.5px]
                "
              >
                NMT depends on socially conscious persons and organisations
                to support the work done at Nightingales Sandhya Kirana.
              </p>
            </div>


            {/* VOLUNTEER */}
            <div
              className="
                mt-7
                border-t
                border-[#ED6439]/15
                pt-6
              "
            >
              <h4
                className="
                  font-display
                  text-base
                  font-extrabold
                  text-[#263746]
                  sm:text-lg
                "
              >
                Volunteer Your Time ....
              </h4>

              <p
                className="
                  mt-3
                  text-[13.5px]
                  leading-[1.75]
                  text-muted-foreground
                  sm:text-[14.5px]
                "
              >
                There are many opportunities you as an individual or a
                corporate team can touch the lives of the elders at this
                centre.
              </p>

              <Link
                to="/get-involved"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-bold
                  text-[#ED6439]
                  sm:text-[13px]
                "
              >
                READ MORE
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>


            {/* DONATE */}
            <div
              className="
                mt-7
                border-t
                border-[#ED6439]/15
                pt-6
              "
            >
              <h4
                className="
                  font-display
                  text-base
                  font-extrabold
                  text-[#263746]
                  sm:text-lg
                "
              >
                Donate Your Resources
              </h4>

              <p
                className="
                  mt-3
                  text-[13.5px]
                  leading-[1.75]
                  text-muted-foreground
                  sm:text-[14.5px]
                "
              >
                Your contributions can help feed the elderly and organise
                medical camps for elders here.
              </p>

              <Link
                to="/donate"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-bold
                  text-[#ED6439]
                  sm:text-[13px]
                "
              >
                READ MORE
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>

          </div>
        )}


{/* ==================================================
    CONTACT
    ================================================== */}

<Link
  to="/contact"
  className="
    mt-7
    inline-flex
    max-w-full
    items-center
    justify-center
    gap-2
    bg-[#ED6439]
    px-5
    py-3
    text-center
    text-[12px]
    font-bold
    text-white
    transition-all
    hover:-translate-y-0.5
    hover:bg-[#d95730]
    sm:text-[13px]
  "
>
  CONTACT US
  <ArrowUpRight className="h-4 w-4 shrink-0" />
</Link>

      </div>

    </div>
  </div>
</Reveal>

   {/* ======================================================
    HIRIYARAVADI
    ====================================================== */}

<Reveal>
  <div
    className="
      min-w-0
      overflow-hidden
      border
      border-[#ED6439]/15
      bg-white
      shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]
    "
  >
    <div className="grid min-w-0 lg:grid-cols-[1fr_1fr]">

      {/* ==================================================
          CONTENT — LEFT SIDE
          ================================================== */}
      <div
        className="
          min-w-0
          p-6
          sm:p-8
          md:p-10
          lg:p-11
        "
      >

        {/* ICON */}
        <div
          className="
            mb-5
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#ED6439]
            text-white
            shadow-[0_10px_25px_-10px_rgba(237,100,57,0.6)]
          "
        >
          <Users className="h-5 w-5" />
        </div>

        {/* TITLE */}
        <h3
          className="
            font-display
            text-xl
            font-extrabold
            text-[#ED6439]
            sm:text-2xl
          "
        >
          Hiriyaravadi
        </h3>

        <div className="mt-3 h-1 w-11 bg-[#ED6439]" />

        {/* ==================================================
            CONTENT
            ================================================== */}
        <div
          className="
            mt-6
            text-[14px]
            leading-[1.8]
            text-muted-foreground
            sm:text-[15px]
          "
        >
          <p>
            Many older persons living in disadvantaged communities are
            unable to access formal elder-care services.
          </p>

          <p className="mt-4">
            Through Hiriyaravadi, NMT brings community-based activities
            and support closer to where vulnerable elders live.
          </p>

          <p className="mt-4 font-medium text-foreground">
            The centres provide opportunities for:
          </p>

          <ul className="mt-4 space-y-2.5">
            {[
              "Social interaction",
              "Active ageing",
              "Recreation",
              "Health care",
              "Cognitive stimulation",
              "Income generation activities",
              "Community participation",
              "Nutritional support",
              "Access to government schemes and support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* ==================================================
              CENTRES
              ================================================== */}
          <div className="mt-6 border-t border-[#ED6439]/15 pt-6">

            <p className="font-semibold text-foreground">
              NMT runs five Hiriyaravadi centres at:
            </p>

            <ul className="mt-4 space-y-2.5">
              {[
                { name: "SK – Shantinagar", query: "Shantinagar, Bengaluru" },
                { name: "DJ Halli", query: "DJ Halli, Bengaluru" },
                { name: "Rajendra Nagar", query: "Rajendra Nagar, Bengaluru" },
                { name: "Vannarpet", query: "Vannarpet, Bengaluru" },
                { name: "Lingarajapuram", query: "Lingarajapuram, Bengaluru" },
              ].map((centre) => (
                <li key={centre.name} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centre.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-[#263746] transition-colors hover:text-[#ED6439]"
                  >
                    <span>{centre.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#ED6439]" />
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>

      </div>

      {/* ==================================================
          IMAGE — RIGHT SIDE
          DO NOT CHANGE THIS
          ================================================== */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-[#f8f5ef]
          lg:self-start
        "
      >
        <img
          src={hiriyaravadiImage}
          alt="Hiriyaravadi"
          className="
            block
            h-auto
            w-full
            object-contain
            object-center
          "
        />


      </div>

    </div>
  </div>
</Reveal>

 {/* ======================================================
    FREE GERIATRIC CLINIC
    ====================================================== */}

<Reveal className="mt-8 min-w-0 sm:mt-10">
  <div
    className="
      grid
      min-w-0
      overflow-hidden
      border
      border-[#ED6439]/20
      border-t-4
      border-t-[#ED6439]
      bg-white
      shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]
      lg:grid-cols-2
      lg:items-stretch
    "
  >

    {/* ==================================================
        IMAGE — LEFT — 50%
        ================================================== */}

    <div
      className="
        relative
        min-h-[320px]
        w-full
        overflow-hidden
        bg-[#f8f5ef]
        lg:min-h-0
      "
    >
      <img
        src={freeGeriatricClinicImage}
        alt="Free geriatric clinic"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />
    </div>


    {/* ==================================================
        CONTENT — RIGHT — 50%
        ================================================== */}

    <div
      className="
        flex
        min-w-0
        flex-col
        justify-center
        p-5
        sm:p-7
        md:p-9
      "
    >

      {/* TITLE */}
      <div className="flex items-start gap-4">

        <span
          className="
            grid
            h-12
            w-12
            shrink-0
            place-items-center
            bg-[#ED6439]
            text-white
            shadow-[0_10px_25px_rgba(237,100,57,0.22)]
          "
        >
          <Stethoscope
            className="h-6 w-6"
            strokeWidth={1.8}
          />
        </span>

        <div className="min-w-0">

          <h3
            className="
              break-words
              font-display
              text-xl
              font-extrabold
              leading-tight
              text-[#ED6439]
              sm:text-2xl
            "
          >
            Free Geriatric Clinic
          </h3>

          <span
            className="
              mt-3
              block
              h-1
              w-12
              bg-[#ED6439]
            "
          />

        </div>
      </div>


      {/* CONTENT */}
      <div
        className="
          mt-6
          space-y-4
          text-[14px]
          leading-[1.75]
          text-muted-foreground
          sm:text-[14.5px]
        "
      >

        <p>
          Older persons often live with multiple health conditions
          requiring regular monitoring and coordinated care.
        </p>

        <p>
          NMT's geriatric clinic provides accessible healthcare with a
          focus on the unique needs of older persons.
        </p>

        <p>Services include:</p>

        <ul className="space-y-2.5">

          <li className="flex items-start gap-2.5">
            <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
            <span>Comprehensive geriatric assessment</span>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
            <span>Screening and early identification of health concerns</span>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
            <span>Management of chronic conditions</span>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
            <span>Preventive healthcare</span>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
            <span>Health education</span>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
            <span>Referral and follow-up</span>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
            <span>Guidance to families and caregivers</span>
          </li>

        </ul>

        <p className="font-bold text-[#ED6439]">
          This geriatric clinic functions from the premises of
          Sandhya Kirana.
        </p>

      </div>

    </div>

  </div>
</Reveal>




    </div>
  </Section>





  {/* ======================================================
      PREVENTION OF ELDER ABUSE
      ====================================================== */}

 <Section
  id="elder-protection"
  title={<span className="text-[#ED6439]">Prevention of Elder Abuse</span>}
  tone="sand"
>

    {/* ==================================================
        FULL IMAGE BANNER
        ================================================== */}

    <Reveal className="w-full">
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-[#f8f5ef]
        "
      >
        <img
          src={elderProtectionImage}
          alt="Prevention of Elder Abuse"
          className="
            block
            h-auto
            min-h-[260px]
            w-full
            object-cover
            object-center
            sm:min-h-[320px]
            md:min-h-[400px]
          "
        />
      </div>
    </Reveal>


  {/* ==================================================
      INTRO CONTENT
      ================================================== */}

  <Reveal className="mt-8 max-w-5xl min-w-0 sm:mt-10">
    <p
      className="
        text-[14px]
        leading-[1.75]
        text-muted-foreground
        sm:text-[15px]
        md:text-[16px]
      "
    >
      Elder abuse can take many forms - physical, emotional, financial
      and psychological. Neglect, abandonment and exploitation can be
      equally devastating.
    </p>

    <p
      className="
        mt-4
        text-[14px]
        leading-[1.75]
        text-muted-foreground
        sm:text-[15px]
        md:text-[16px]
      "
    >
      NMT works to ensure that older persons have access to information,
      assistance, protection and appropriate support when they face
      abuse, neglect or vulnerability.
    </p>
  </Reveal>

<br />
 {/* ==================================================
    HELPLINE SECTIONS
    ================================================== */}

<div className="grid items-stretch gap-8 lg:grid-cols-2">

  {/* ==================================================
      ELDERS HELPLINE – 1090
      ================================================== */}

  <Reveal className="min-w-0 h-full">
    <div
      className="
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        border
        border-[#ED6439]/15
        bg-white
        shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]
      "
    >

      {/* IMAGE */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-[#f8f5ef]
        "
      >
        <img
          src={eldersHelplineImage}
          alt="Elders Helpline 1090"
          className="
            block
            h-[260px]
            w-full
            object-cover
            object-center
            sm:h-[300px]
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          p-6
          sm:p-8
          md:p-9
        "
      >

        {/* ICON */}
        <div
          className="
            mb-5
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#ED6439]
            text-white
            shadow-[0_10px_25px_-10px_rgba(237,100,57,0.6)]
          "
        >
          <PhoneCall className="h-5 w-5" />
        </div>

        {/* TITLE */}
        <h3
          className="
            font-display
            text-xl
            font-extrabold
            text-[#ED6439]
            sm:text-2xl
          "
        >
          Elders Helpline – 1090
        </h3>

        <div className="mt-3 h-1 w-11 bg-[#ED6439]" />

        {/* CONTENT */}
        <div
          className={`
            mt-6
            overflow-hidden
            text-[14px]
            leading-[1.8]
            text-muted-foreground
            transition-all
            duration-300
            sm:text-[15px]
            ${showEldersMore ? "max-h-none" : "max-h-[420px]"}
          `}
        >
          <p>
            It's a joint project of Bengaluru City Police and
            Nightingales Medical Trust. Established in 2002, the Elders
            Helpline provides assistance to older persons facing problems
            including abuse, neglect, exploitation, harassment, family
            disputes and other forms of vulnerability.
          </p>

          <p className="mt-4">
            <strong className="font-bold text-[#263746]">
              It's the first project in the country where an NGO and the law enforcing
              authorities joined together to address elder abuse.
            </strong>
          </p>

          <p className="mt-4">
            <strong className="font-bold text-[#263746]">
              Located at the premises of Bengaluru City Police
            </strong>
            , the Helpline acts as an important link between older persons,
            their families, social workers, police and other support
            systems.
          </p>

          <p className="mt-5 font-semibold text-foreground">
            The Helpline can help with:
          </p>

          <ul className="mt-4 space-y-2.5">
            {[
              "Elder abuse and neglect",
              "Family-related issues and conciliations",
              "Harassment and intimidation",
              "Financial exploitation",
              "Safety concerns",
              "Counselling and guidance",
              "Referral to appropriate services",
              "Police and institutional intervention where required",
              "Tracing of missing / straying elders",
              "Assess to government schemes and facilities",
              "Information on elder related services",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 font-bold text-foreground sm:text-[15px]">
            Elders can avail free legal advice with prior appointments.
          </p>

          <p className="mt-4">
            All the services rendered at the Elders Helpline are free of cost.
          </p>

          {/* DIAL 1090 */}
          <div className="mt-6 flex">
            <div className="inline-flex items-center gap-3 border border-[#ED6439]/30 bg-[#263746] px-5 py-3 shadow-md">
              <PhoneCall className="h-5 w-5 text-[#ED6439]" />
              <span className="font-display text-lg font-extrabold tracking-wide text-[#ED6439]">
                Dial 1090
              </span>
            </div>
          </div>
        </div>

        {/* READ MORE / READ LESS */}
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowEldersMore((previous) => !previous)}
            className="font-bold text-[#ED6439] underline underline-offset-4 transition-colors hover:text-[#d95730]"
          >
            {showEldersMore ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* CONTACT BUTTON */}
        <div className="mt-auto pt-6">
          <Link
            to="/contact"
            className="
              inline-flex
              max-w-full
              w-fit
              items-center
              justify-center
              gap-2
              bg-[#ED6439]
              px-4
              py-3
              text-center
              text-[12px]
              font-bold
              text-white
              transition-all
              hover:-translate-y-0.5
              hover:bg-[#d95730]
              sm:px-5
              sm:text-[13px]
            "
          >
            CONTACT US
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>

      </div>
    </div>
  </Reveal>


  {/* ==================================================
      NATIONAL HELPLINE – 14567
      ================================================== */}

  <Reveal className="min-w-0 h-full">
    <div
      className="
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        border
        border-[#ED6439]/15
        bg-white
        shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]
      "
    >

      {/* IMAGE */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-[#f8f5ef]
        "
      >
        <img
          src={nationalHelplineImage}
          alt="National Helpline for Senior Citizens"
          className="
            block
            h-[260px]
            w-full
            object-cover
            object-center
            sm:h-[300px]
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          p-6
          sm:p-8
          md:p-9
        "
      >

        {/* ICON */}
        <div
          className="
            mb-5
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#ED6439]
            text-white
            shadow-[0_10px_25px_-10px_rgba(237,100,57,0.6)]
          "
        >
          <ShieldCheck className="h-5 w-5" />
        </div>

        {/* TITLE */}
        <h3
          className="
            font-display
            text-xl
            font-extrabold
            text-[#ED6439]
            sm:text-2xl
          "
        >
          National Helpline for Senior Citizens – 14567
        </h3>

        <div className="mt-3 h-1 w-11 bg-[#ED6439]" />

        {/* CONTENT */}
        <div
          className="
            mt-6
            text-[14px]
            leading-[1.8]
            text-muted-foreground
            sm:text-[15px]
          "
        >
          <p>
            NMT has been implementing the Karnataka wing of the National
            Helpline for Senior Citizens (14567),{" "}
            <strong className="font-semibold text-foreground">
              an initiative of Ministry of Social Justice and Empowerment,
              Government of India
            </strong>
            , supporting older persons in accessing information,
            guidance, assistance and appropriate services.
          </p>

          <p className="mt-4 font-medium text-foreground">
            The Helpline provides support on issues including:
          </p>

          <ul className="mt-4 space-y-2.5">
            {[
              "Government schemes and entitlements",
              "Healthcare and care services",
              "Elder abuse",
              "Legal and social support",
              "Maintenance-related concerns",
              "Shelter and rehabilitation",
              "Emotional support",
              "Linkages to relevant agencies and services",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* DIAL 14567 */}
          {/* <div className="mt-6 flex">
            <div className="inline-flex items-center gap-3 border border-[#ED6439]/30 bg-[#263746] px-5 py-3 shadow-md">
              <PhoneCall className="h-5 w-5 text-[#ED6439]" />
              <span className="font-display text-lg font-extrabold tracking-wide text-[#ED6439]">
                Dial 14567
              </span>
            </div>
          </div> */}
        </div>

        {/* CONTACT BUTTON */}
        <div className="mt-auto pt-6">
          <Link
            to="/contact"
            className="
              inline-flex
              max-w-full
              w-fit
              items-center
              justify-center
              gap-2
              bg-[#ED6439]
              px-4
              py-3
              text-center
              text-[12px]
              font-bold
              text-white
              transition-all
              hover:-translate-y-0.5
              hover:bg-[#d95730]
              sm:px-5
              sm:text-[13px]
            "
          >
            CONTACT US
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>

      </div>
    </div>
  </Reveal>

</div>

</Section>

   {/* ======================================================
    EMPOWERMENT & LIVELIHOOD
    ====================================================== */}

<Section
  id="empowerment-livelihood"
  eyebrow=""
  title="EMPOWERMENT AND LIVELIHOOD"
  titleClassName="text-[#ED6439]"
>
  <Reveal className="max-w-4xl min-w-0">
    <p className="text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-[16px]">
      Many older persons want to continue working, learning,
      contributing and remaining financially independent and leading
      purposeful lives.
    </p>

    <p className="mt-4 text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-[16px]">
      NMT's empowerment programmes help older persons remain economically
      productive, digitally connected and socially engaged.
    </p>
  </Reveal>


  {/* ======================================================
      THREE EMPOWERMENT CARDS
      ====================================================== */}

  <div className="mt-8 min-w-0 sm:mt-10">
    <div className="grid min-w-0 items-start gap-6 lg:grid-cols-3 sm:gap-8">


      {/* ==================================================
          NIGHTINGALES JOBS 60+
          ================================================== */}

      <Reveal className="h-full min-w-0">
        <article
          className="
            group
            relative
            flex
            h-full
            min-w-0
            flex-col
            overflow-hidden
            border
            border-[#ED6439]/15
            bg-white
            shadow-[0_18px_50px_-20px_rgba(70,45,10,0.16)]
            transition-all
            duration-500
            hover:-translate-y-1.5
            hover:border-[#ED6439]/35
            hover:shadow-[0_28px_65px_-20px_rgba(237,100,57,0.22)]
          "
        >

          {/* TOP ORANGE LINE */}
          <div className="absolute inset-x-0 top-0 z-10 h-1 bg-[#ED6439]" />


          {/* IMAGE */}
          <div className="relative h-[250px] w-full shrink-0 overflow-hidden bg-[#f8f5ef] sm:h-[280px]">
            <img
              src={nightingalesJobsImage}
              alt="Nightingales Jobs 60+"
              className="
                block
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-[1.03]
              "
            />
          </div>


          {/* CONTENT */}
          <div className="relative flex h-full min-w-0 flex-col p-5 sm:p-6 md:p-7">

            {/* ICON */}
            <span
              className="
                grid
                h-11
                w-11
                shrink-0
                place-items-center
                rounded-xl
                bg-[#ED6439]
                text-white
                shadow-[0_10px_25px_rgba(237,100,57,0.25)]
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:rotate-2
                sm:h-12
                sm:w-12
              "
            >
              <Briefcase
                className="h-5 w-5"
                strokeWidth={1.8}
              />
            </span>


            {/* TITLE */}
            <h3
              className="
                mt-5
                break-words
                font-display
                text-lg
                font-extrabold
                leading-[1.2]
                text-[#ED6439]
                sm:text-xl
              "
            >
              Nightingales Jobs 60+
            </h3>

            <span
              className="
                mt-3
                block
                h-1
                w-10
                shrink-0
                rounded-full
                bg-[#ED6439]
                transition-all
                duration-300
                group-hover:w-16
              "
            />


            {/* VISIBLE CONTENT */}
            <div
              className="
                mt-5
                min-w-0
                space-y-4
                text-[14px]
                leading-[1.75]
                text-muted-foreground
                sm:text-[14.5px]
              "
            >
              <p>
                Nightingales Jobs 60+,{" "}
                <strong className="font-semibold text-foreground">
                  connects experienced older persons with employment and
                  livelihood opportunities.
                </strong>
              </p>

              <p>
                Launched in 2011,{" "}
                <strong className="font-semibold text-foreground">
                  the programme challenges the traditional perception
                </strong>{" "}
                that age is a barrier to employment and demonstrates that
                experience, reliability, knowledge, and commitment continue to
                have enormous value.
              </p>
            </div>


            {/* READ MORE / LESS */}
            <details className="group/details mt-5">

              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  gap-2
                  border-0
                  bg-transparent
                  text-[12px]
                  font-bold
                  text-[#ED6439]
                  outline-none
                  focus:outline-none
                  focus-visible:outline-none
                  select-none
                  sm:text-[13px]
                "
              >
                <span className="group-open/details:hidden">
                  READ MORE
                </span>

                <span className="hidden group-open/details:inline">
                  READ LESS
                </span>

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-open/details:rotate-180
                  "
                />
              </summary>


              {/* EXPANDED CONTENT */}
              <div
                className="
                  mt-5
                  border-t
                  border-[#ED6439]/15
                  pt-5
                "
              >

                <p>
                  Unlike in developed countries, where social security
                  systems take care the retired elderly, the resources in
                  India, both from the government and the private sectors
                  are very limited to provide senior citizens basic
                  benefits and economic security.
                </p>

                <p className="mt-4">
                  In India,{" "}
                  <strong className="font-semibold text-foreground">
                    only 11% of the retired employees get pension from the
                    government
                  </strong>{" "}
                  and the remaining 89% are forced to survive on their savings
                  which often get exhausted within a few years of retirement.
                </p>

                <p className="mt-4">
                  Thus, post-retirement, elders often end up depending on
                  their children or other family members. This lack of
                  economic independence further leads to distress within
                  the family, stealing dignity and independence from the
                  aged, leading to some form of elder abuse.
                </p>

                <p className="mt-4 font-bold text-[#ED6439]">
                  Therefore, this programme supports older job seekers
                  through:
                </p>

                <ul className="mt-4 space-y-2.5">
                  {[
                    "Job registration",
                    "Career guidance",
                    "Skill development",
                    "Employer connections",
                    "Job fairs",
                    "Placement support",
                    "Opportunities for flexible and part-time work",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4">
                  Our message is simple:
                </p>

                <p className="font-display text-lg font-extrabold text-[#ED6439]">
                  Age is not a barrier to contribution.
                </p>

              </div>
            </details>

            {/* EXTERNAL LINK BUTTON */}
            <div className="mt-auto pt-6">
              <a
                href="https://www.nightingalesjobs60plus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ED6439] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#d95730]"
              >
                <span>VISIT JOBS 60+</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </article>
      </Reveal>



      {/* ==================================================
          DIGITAL LITERACY FOR SENIOR CITIZENS
          ================================================== */}

      <Reveal className="h-full min-w-0">
        <article
          className="
            group
            relative
            flex
            h-full
            min-w-0
            flex-col
            overflow-hidden
            border
            border-[#ED6439]/15
            bg-white
            shadow-[0_18px_50px_-20px_rgba(70,45,10,0.16)]
            transition-all
            duration-500
            hover:-translate-y-1.5
            hover:border-[#ED6439]/35
            hover:shadow-[0_28px_65px_-20px_rgba(237,100,57,0.22)]
          "
        >

          <div className="absolute inset-x-0 top-0 z-10 h-1 bg-[#ED6439]" />


          {/* IMAGE */}
          <div className="relative h-[250px] w-full shrink-0 overflow-hidden bg-[#f8f5ef] sm:h-[280px]">
            <img
              src={digitalLiteracyImage}
              alt="Digital Literacy for Senior Citizens"
              className="
                block
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-[1.03]
              "
            />
          </div>


          {/* CONTENT */}
          <div className="relative flex h-full min-w-0 flex-col p-5 sm:p-6 md:p-7">

            {/* ICON */}
            <span
              className="
                grid
                h-11
                w-11
                shrink-0
                place-items-center
                rounded-xl
                bg-[#ED6439]
                text-white
                shadow-[0_10px_25px_rgba(237,100,57,0.25)]
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:rotate-2
                sm:h-12
                sm:w-12
              "
            >
              <Smartphone
                className="h-5 w-5"
                strokeWidth={1.8}
              />
            </span>


            {/* TITLE */}
            <h3
              className="
                mt-5
                break-words
                font-display
                text-lg
                font-extrabold
                leading-[1.2]
                text-[#ED6439]
                sm:text-xl
              "
            >
              Digital Literacy for Senior Citizens
            </h3>

            <span
              className="
                mt-3
                block
                h-1
                w-10
                shrink-0
                rounded-full
                bg-[#ED6439]
                transition-all
                duration-300
                group-hover:w-16
              "
            />


            {/* VISIBLE CONTENT */}
            <div
              className="
                mt-5
                min-w-0
                space-y-4
                text-[14px]
                leading-[1.75]
                text-muted-foreground
                sm:text-[14.5px]
              "
            >
              <p>
                Technology can transform the lives of older persons but
                only when they have the confidence and skills to use it
                safely.
              </p>

              <p>
                NMT's digital-literacy initiatives help older adults use
                technology for communication, information, healthcare,
                banking, services and social connection.
              </p>
            </div>


            {/* READ MORE / LESS */}
            <details className="group/details mt-5">

              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  gap-2
                  border-0
                  bg-transparent
                  text-[12px]
                  font-bold
                  text-[#ED6439]
                  outline-none
                  focus:outline-none
                  focus-visible:outline-none
                  select-none
                  sm:text-[13px]
                "
              >
                <span className="group-open/details:hidden">
                  READ MORE
                </span>

                <span className="hidden group-open/details:inline">
                  READ LESS
                </span>

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-open/details:rotate-180
                  "
                />
              </summary>


              {/* EXPANDED CONTENT */}
              <div
                className="
                  mt-5
                  border-t
                  border-[#ED6439]/15
                  pt-5
                "
              >

                <p className="font-bold text-[#ED6439]">Training may include:</p>

                <ul className="mt-4 space-y-2.5">
                  {[
                    "Smartphone use",
                    "WhatsApp and video calls",
                    "Digital payments",
                    "Online services",
                    "Accessing government services",
                    "Email and internet use",
                    "Online health resources",
                    "Basic digital safety",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </details>

          </div>
        </article>
      </Reveal>



      {/* ==================================================
          CYBERSECURITY AWARENESS FOR SENIORS
          ================================================== */}

      <Reveal className="h-full min-w-0">
        <article
          className="
            group
            relative
            flex
            h-full
            min-w-0
            flex-col
            overflow-hidden
            border
            border-[#ED6439]/15
            bg-white
            shadow-[0_18px_50px_-20px_rgba(70,45,10,0.16)]
            transition-all
            duration-500
            hover:-translate-y-1.5
            hover:border-[#ED6439]/35
            hover:shadow-[0_28px_65px_-20px_rgba(237,100,57,0.22)]
          "
        >

          <div className="absolute inset-x-0 top-0 z-10 h-1 bg-[#ED6439]" />


          {/* IMAGE */}
          <div className="relative h-[250px] w-full shrink-0 overflow-hidden bg-[#f8f5ef] sm:h-[280px]">
            <img
              src={cybersecurityAwarenessImage}
              alt="Cybersecurity Awareness for Seniors"
              className="
                block
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-[1.03]
              "
            />
          </div>


          {/* CONTENT */}
          <div className="relative flex h-full min-w-0 flex-col p-5 sm:p-6 md:p-7">

            {/* ICON */}
            <span
              className="
                grid
                h-11
                w-11
                shrink-0
                place-items-center
                rounded-xl
                bg-[#ED6439]
                text-white
                shadow-[0_10px_25px_rgba(237,100,57,0.25)]
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:rotate-2
                sm:h-12
                sm:w-12
              "
            >
              <ShieldAlert
                className="h-5 w-5"
                strokeWidth={1.8}
              />
            </span>


            {/* TITLE */}
            <h3
              className="
                mt-5
                break-words
                font-display
                text-lg
                font-extrabold
                leading-[1.2]
                text-[#ED6439]
                sm:text-xl
              "
            >
              Cybersecurity Awareness for Seniors
            </h3>

            <span
              className="
                mt-3
                block
                h-1
                w-10
                shrink-0
                rounded-full
                bg-[#ED6439]
                transition-all
                duration-300
                group-hover:w-16
              "
            />


            {/* VISIBLE CONTENT */}
            <div
              className="
                mt-5
                min-w-0
                space-y-4
                text-[14px]
                leading-[1.75]
                text-muted-foreground
                sm:text-[14.5px]
              "
            >
              <p>
                As more older persons use smartphones, online banking and
                digital services, they are increasingly exposed to cyber
                fraud and online scams.
              </p>

              <p>
                NMT's cybersecurity awareness initiatives help seniors
                understand common digital threats and protect themselves
                from financial and personal-data fraud.
              </p>
            </div>


            {/* READ MORE / LESS */}
            <details className="group/details mt-5">

              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  gap-2
                  border-0
                  bg-transparent
                  text-[12px]
                  font-bold
                  text-[#ED6439]
                  outline-none
                  focus:outline-none
                  focus-visible:outline-none
                  select-none
                  sm:text-[13px]
                "
              >
                <span className="group-open/details:hidden">
                  READ MORE
                </span>

                <span className="hidden group-open/details:inline">
                  READ LESS
                </span>

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-open/details:rotate-180
                  "
                />
              </summary>


              {/* EXPANDED CONTENT */}
              <div
                className="
                  mt-5
                  border-t
                  border-[#ED6439]/15
                  pt-5
                "
              >

                <p className="font-bold text-[#ED6439]">Topics include:</p>

                <ul className="mt-4 space-y-2.5">
                  {[
                    "Identifying online scams",
                    "Phishing and fraudulent messages",
                    "Safe use of digital payments",
                    "Protecting passwords and OTPs",
                    "Avoiding impersonation scams",
                    "Social-media safety",
                    "Recognising suspicious links and calls",
                    "What to do if fraud occurs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </details>

          </div>
        </article>
      </Reveal>

    </div>
  </div>


  {/* ======================================================
      EXISTING CONTACT DETAILS BOX
      ====================================================== */}

  <Reveal className="mt-8 sm:mt-10">
    <div
      className="
        relative
        min-w-0
        overflow-hidden
        bg-[#E15925]
        px-5
        py-7
        shadow-[0_25px_60px_-25px_rgba(23,35,43,0.45)]
        sm:px-8
        sm:py-8
        md:px-10
      "
    >
      <div
        className="
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-[#ED6439]/15
          blur-3xl
        "
      />

      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-display text-lg font-bold text-white">
              Connect With Nightingales Jobs 60+
            </p>
            <p className="mt-1 text-[13.5px] leading-[1.75] text-white/80 sm:text-[14.5px]">
              For registrations and corporate hiring partnerships, contact our team today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:08042426565"
              className="inline-flex items-center gap-2 bg-[#ED6439] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#d95730]"
            >
              <span>080 4242 6565</span>
            </a>
            <a
              href="mailto:jobs60plus@nightingaleseldercare.com"
              className="inline-flex items-center gap-2 bg-white/15 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/25"
            >
              <span>EMAIL: jobs60plus@nightingaleseldercare.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Reveal>

</Section>

     {/* ======================================================
    SUPPORTING OLD AGE HOMES
    ====================================================== */}

<Section 
  id="old-age-homes" 
  eyebrow="" 
  title={<span className="text-[#ED6439]">SUPPORTING OLD AGE HOMES</span>}
  tone="sand" 
>
  {/* INTRO */}
  <Reveal className="max-w-4xl min-w-0">
    <p className="text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-[16px]">
      India has thousands of old age homes serving older persons with
      varying levels of resources, infrastructure and professional
      capacity.
    </p>

    <p className="mt-4 text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-[16px]">
      NMT believes that{" "}
      <strong className="font-semibold text-foreground">
        improving elder care requires strengthening the entire care ecosystem
      </strong>{" "}
      not just individual institutions.
    </p>

    <p className="mt-4 text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-[16px]">
      We work with old age homes to improve the quality of care,
      strengthen staff capabilities, introduce active-ageing practices
      and improve governance and management systems.
    </p>
  </Reveal>


  {/* ======================================================
      FULL WIDTH BANNER IMAGE
      ====================================================== */}

  <Reveal className="mt-8 min-w-0 sm:mt-10">
    <div
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f8f5ef]
      "
    >
      <img
        src={supportingOldAgeHomesBanner}
        alt="Supporting old age homes"
        className="
          block
          h-auto
          w-full
          object-contain
          object-center
        "
      />
    </div>
  </Reveal>


  {/* ======================================================
      THREE SERVICE CARDS
      ====================================================== */}

  <div className="mt-8 min-w-0 sm:mt-10">
    <CardGrid cols={3}>

      {/* ==================================================
          MOBILE ACTIVE AGEING
          ================================================== */}

      <ServiceCard
        icon={Activity}
        title="Mobile Active Ageing"
        titleClassName="text-[#ED6439]"
        image={mobileActiveAgeingImage}
        cta="READ MORE"
        preview={
          <>
            <p>
              Through the Mobile Active Ageing (MAA) programme, NMT
              supports residents of old age homes through structured
              activities designed to promote physical, cognitive,
              emotional and social well-being.
            </p>

            <p>
              <strong className="font-semibold text-foreground">
                MAA currently reaches 28 old age homes.
              </strong>
            </p>
          </>
        }
        details={
          <>
            <p className="font-bold text-[#ED6439]">The programme includes:</p>

            <ul className="space-y-2.5">
              {[
                "Physical activity and exercise",
                "Cognitive stimulation",
                "Recreation",
                "Music and creative activities",
                "Social interaction",
                "Health awareness",
                "Meaningful engagement",
                "Active-ageing practices for residents",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="font-bold text-[#ED6439]">
              Our aim
            </p>

            <p>
              To ensure that living in an old age home does not mean
              giving up an active and meaningful life.
            </p>
          </>
        }
      />


      {/* ==================================================
          REGIONAL RESOURCE & TRAINING CENTRE
          ================================================== */}

      <ServiceCard
        icon={Building2}
        title="Regional Resource & Training Centre"
        titleClassName="text-[#ED6439]"
        image={rrtcImage}
        cta="READ MORE"
        preview={
          <>
            <p>
              NMT has been designated as a Regional Resource and
              Training Centre (RRTC) by the{" "}
              <strong className="font-semibold text-foreground">
                Ministry of Social Justice & Empowerment for Karnataka, Kerala &
                Lakshadweep
              </strong>
              .
            </p>

            <p className="font-bold text-[#ED6439]">
              The Centre serves as a resource for:
            </p>
          </>
        }
        details={
          <>
            <ul className="space-y-2.5">
              {[
                "Training and capacity building",
                "Development of training materials",
                "Knowledge sharing",
                "Technical support",
                "Good practices in elder care",
                "Awareness and advocacy",
                "Strengthening service providers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              The RRTC seeks to build a stronger and more professional
              elder-care ecosystem by sharing knowledge and supporting
              organisations working with older persons.
            </p>
          </>
        }
      />


      {/* ==================================================
          VAYO ALAMBANA TRUST
          ================================================== */}

      <ServiceCard
        icon={Home}
        title="Vayo Alambana – Old Age Home Capacity-Building Initiative"
        titleClassName="text-[#ED6439]"
        image={capacityBuildingImage}
        cta="READ MORE"
        preview={
          <>
            <p>
              NMT has undertaken a pilot capacity-building initiative
              involving five selected old age homes.
            </p>

            <p className="font-bold text-[#ED6439]">
              The programme takes a comprehensive approach to
              strengthening institutions through:
            </p>
          </>
        }
        details={
          <>
            <ul className="space-y-3">
              {[
                { title: "Infrastructure Assistance", desc: "Improving the physical environment and essential facilities for residents." },
                { title: "Staff Training", desc: "Building the knowledge and skills of caregivers and staff." },
                { title: "Active Ageing Programmes", desc: "Introducing structured activities that enhance residents' physical, cognitive, emotional and social well-being." },
                { title: "Governance & Management", desc: "Strengthening systems, policies, documentation, administration and management practices." },
                { title: "Free Accessible Medical Care", desc: "Ensuring regular health screening, elder-friendly clinical support and free accessible medical care for residents." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-2.5">
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                  <div>
                    <strong className="font-bold text-foreground">{item.title}: </strong>
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="font-bold text-[#ED6439]">
              The objective
            </p>

            <p>
              To demonstrate that strengthening the institution can
              transform the quality of life of the people it serves.
            </p>

            <p>
              The learnings from the pilot will help NMT develop a
              scalable model for capacity building of old age homes.
            </p>
          </>
        }
      />

    </CardGrid>
  </div>
</Section>

{/* ======================================================
    TRAINING & CAPACITY BUILDING
    ====================================================== */}

<Section
  id="capacity-building"
  eyebrow=""
  title="TRAINING AND CAPACITY BUILDING"
  titleClassName="text-[#ED6439]"
>
  {/* ==================================================
      INTRO
      ================================================== */}

 <Reveal className="max-w-6xl min-w-0">
  <p className="text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-[16px]">
    The quality of elder care depends greatly on the people providing
    it.
  </p>

  <p className="mt-4 text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-[16px]">
    NMT invests in training caregivers, family members, students,
    professionals and organisations so that older persons receive
    care that is safe, skilled, compassionate and person-centred.
  </p>
</Reveal>


  {/* ==================================================
      FULL WIDTH BANNER IMAGE
      ================================================== */}

  <Reveal className="mt-8 min-w-0 sm:mt-10 lg:mt-12">
    <div className="w-full overflow-hidden">
      <img
        src={trainingCapacityBuildingBanner}
        alt="Training and capacity building for elder care"
        className="
          block
          h-auto
          w-full
          object-contain
          object-center
        "
      />
    </div>
  </Reveal>


  {/* ==================================================
      TRAINING PROGRAMME CAROUSEL
      ================================================== */}

  <div className="mt-8 min-w-0 sm:mt-10">
    <TrainingCarousel />
  </div>

  {/* ==================================================
      GERIATRIC CARE TRAINING — VIDEO THUMBNAIL
      ================================================== */}
  <Reveal className="mt-8 min-w-0 sm:mt-10">
    <div className="flex flex-col sm:flex-row items-center gap-6 border border-[#ED6439]/20 bg-white p-5 sm:p-6 shadow-[0_12px_35px_-15px_rgba(70,45,10,0.12)]">
      <a
        href="https://youtu.be/go1GWETWmSM"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full sm:w-72 shrink-0 aspect-[16/9] overflow-hidden rounded-lg bg-black shadow-md"
        aria-label="Watch Geriatric Care Training video on YouTube"
      >
        <img
          src="/geriatric-care-training-thumbnail.webp"
          alt="Geriatric Care Training - Nightingales Medical Trust"
          className="block h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span
          className="
            absolute
            inset-0
            grid
            place-items-center
            bg-black/25
            transition-colors
            group-hover:bg-black/15
          "
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#ED6439] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            <PlayCircle className="h-6 w-6" strokeWidth={2} />
          </span>
        </span>
      </a>

      <div className="min-w-0 flex-1">
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ED6439]">
          Featured Video
        </span>
        <h4 className="mt-1 font-display text-lg font-bold text-[#263746] sm:text-xl">
          Geriatric Care Training Programme
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Watch how Nightingales Medical Trust trains professional caregivers and family members in compassionate, skilled, and person-centred elder care.
        </p>
        <a
          href="https://youtu.be/go1GWETWmSM"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#ED6439] transition-all hover:gap-3"
        >
          <span>WATCH ON YOUTUBE</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </Reveal>


  {/* ==================================================
      CONTACT CTA
      ================================================== */}

  <Reveal className="mt-8 sm:mt-10">
    <div
      className="
        relative
        min-w-0
        overflow-hidden
        bg-[#ED6439]
        px-5
        py-7
        text-center
        shadow-[0_20px_50px_-18px_rgba(237,100,57,0.35)]
        sm:px-8
        sm:py-8
        md:px-10
      "
    >
      <div
        className="
          absolute
          -left-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <div className="relative">
        <p
          className="
            break-words
            font-display
            text-lg
            font-extrabold
            leading-tight
            text-white
            sm:text-xl
            md:text-2xl
          "
        >
          Want more details about our training programs?
        </p>

        <Link
          to="/contact"
          className="
            mt-5
            inline-flex
            max-w-full
            items-center
            justify-center
            gap-2
            bg-white
            px-5
            py-3
            text-xs
            font-bold
            text-[#ED6439]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-lg
            sm:px-6
            sm:text-sm
          "
        >
          CONTACT US

          <ArrowUpRight className="h-4 w-4 shrink-0" />
        </Link>
      </div>
    </div>
  </Reveal>
</Section>


      {/* ======================================================
    AWARENESS & RESEARCH
    ====================================================== */}

<Section
  id="awareness"
  eyebrow="Awareness and Advocacy"
  title="Changing how India sees ageing."
  tone="sand"
>
  <div className="grid min-w-0 grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">

{/* ==================================================
    AWARENESS & ADVOCACY
    ================================================== */}

<Reveal className="w-full min-w-0">
  <div
    className="
      group
      flex
      w-full
      min-w-0
      flex-col
      overflow-hidden
      border
      border-[#ED6439]/15
      bg-white
      p-6
      shadow-[0_18px_50px_-20px_rgba(70,45,10,0.14)]
      transition-all
      duration-500
      hover:-translate-y-1
      sm:p-8
    "
  >

    {/* IMAGE */}
    <div
      className="
        relative
        w-full
        shrink-0
        overflow-hidden
        bg-[#f5f1e9]
        aspect-[4/3]
        sm:aspect-[16/10]
        lg:aspect-[16/9]
      "
    >
      <img
        src={awarenessAdvocacyImage}
        alt="Awareness and advocacy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
      />

      {/* ICON */}
      <div
        className="
          absolute
          bottom-4
          left-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#ED6439]
          text-white
          shadow-[0_10px_25px_-10px_rgba(237,100,57,0.8)]
          transition-transform
          duration-300
          group-hover:scale-105
          sm:bottom-5
          sm:left-6
          sm:h-14
          sm:w-14
        "
      >
        <Megaphone
          className="h-6 w-6 sm:h-7 sm:w-7 text-white"
          strokeWidth={2}
        />
      </div>
    </div>


    {/* CONTENT */}
    <div
      className="
        flex
        flex-1
        flex-col
        pt-6
        sm:pt-8
      "
    >

      <h3
        className="
          font-display
          text-2xl
          font-extrabold
          leading-tight
          text-[#ED6439]
          sm:text-3xl
          md:text-4xl
        "
      >
        Awareness and Advocacy
      </h3>

      <div className="mt-3 h-1 w-14 bg-[#ED6439]" />

      <ul
        className="
          mt-6
          space-y-3.5
          text-[15px]
          leading-[1.75]
          text-muted-foreground
          sm:mt-7
          sm:space-y-4
          sm:text-[16px]
        "
      >

        <li className="flex items-start gap-3">
          <span
            className="
              mt-[9px]
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[#ED6439]
            "
          />
          <span className="min-w-0 font-medium">
            Public campaigns and memory walks
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span
            className="
              mt-[9px]
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[#ED6439]
            "
          />
          <span className="min-w-0 font-medium">
            School and college outreach
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span
            className="
              mt-[9px]
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[#ED6439]
            "
          />
          <span className="min-w-0 font-medium">
            Media engagement on ageing issues
          </span>
        </li>

        <li className="flex items-start gap-3">
          <span
            className="
              mt-[9px]
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[#ED6439]
            "
          />
          <span className="min-w-0 font-medium">
            Policy advocacy with state and central bodies
          </span>
        </li>

      </ul>


      {/* BOTTOM ACCENT */}
      <div className="mt-8 border-t border-[#ED6439]/15 pt-5 sm:mt-auto sm:pt-6">
        <p
          className="
            text-xs
            font-bold
            uppercase
            leading-relaxed
            tracking-[0.14em]
            text-[#ED6439]
            sm:text-sm
          "
        >
          Creating awareness • Inspiring change
        </p>
      </div>

    </div>
  </div>
</Reveal>


   {/* ==================================================
    RESEARCH & INNOVATION
    ================================================== */}

<Reveal
  className="w-full min-w-0"
  delay={100}
>
  <div
    className="
      group
      flex
      w-full
      min-w-0
      flex-col
      overflow-hidden
      bg-white
      shadow-[0_18px_45px_-20px_rgba(38,55,70,0.28)]
      transition-all
      duration-500
      hover:-translate-y-1
      hover:shadow-[0_24px_55px_-20px_rgba(38,55,70,0.32)]
    "
  >

    {/* IMAGE */}
    <div
      className="
        relative
        h-[250px]
        w-full
        shrink-0
        overflow-hidden
        bg-[#f5f1e9]

        sm:h-[280px]
        lg:h-[300px]
      "
    >
      <img
        src={researchInnovationImage}
        alt="Research and innovation"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center

          scale-[1.22]

          transition-transform
          duration-700

          group-hover:scale-[1.28]

          sm:scale-[1.12]
          sm:group-hover:scale-[1.18]

          lg:scale-[1.08]
          lg:group-hover:scale-[1.13]
        "
      />

      {/* SUBTLE OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/30
          via-transparent
          to-transparent
          opacity-70
        "
      />

      {/* ICON */}
      <div
        className="
          absolute
          bottom-4
          left-4

          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full
          bg-[#ED6439]
          text-white

          shadow-[0_10px_25px_-10px_rgba(237,100,57,0.8)]

          transition-transform
          duration-300

          group-hover:scale-105

          sm:bottom-5
          sm:left-6
          sm:h-14
          sm:w-14
        "
      >
        <FlaskConical
          className="h-5 w-5 sm:h-6 sm:w-6"
          strokeWidth={2}
        />
      </div>
    </div>


    {/* CONTENT */}
    <div
      className="
        flex
        flex-1
        flex-col

        px-5
        pb-6
        pt-6

        sm:px-7
        sm:pb-8
        sm:pt-7
      "
    >

      <h3
        className="
          font-display
          text-xl
          font-extrabold
          leading-tight
          text-[#263746]

          sm:text-2xl
          md:text-[26px]
        "
      >
        Research & Innovation
      </h3>

      <div className="mt-3 h-1 w-12 bg-[#ED6439]" />


      {/* LIST */}
      <ul
        className="
          mt-5
          space-y-3

          text-[14px]
          leading-[1.6]
          text-muted-foreground

          sm:mt-6
          sm:space-y-4
          sm:text-[15px]
          sm:leading-[1.7]
        "
      >

        <li className="flex items-start gap-3">
          <span
            className="
              mt-[8px]
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[#ED6439]
            "
          />

          <span className="min-w-0">
            Community prevalence and field studies
          </span>
        </li>


        <li className="flex items-start gap-3">
          <span
            className="
              mt-[8px]
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[#ED6439]
            "
          />

          <span className="min-w-0">
            Clinical collaborations with medical colleges
          </span>
        </li>


        <li className="flex items-start gap-3">
          <span
            className="
              mt-[8px]
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[#ED6439]
            "
          />

          <span className="min-w-0">
            New models of low-cost dementia care
          </span>
        </li>


        <li className="flex items-start gap-3">
          <span
            className="
              mt-[8px]
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[#ED6439]
            "
          />

          <span className="min-w-0">
            Publications and knowledge sharing
          </span>
        </li>

      </ul>


      {/* BOTTOM ACCENT */}
      <div
        className="
          mt-6
          pt-5

          sm:mt-auto
          sm:pt-7
        "
      >
        <div className="h-px w-full bg-[#eee]" />

        <p
          className="
            mt-4
            text-[10px]
            font-bold
            uppercase
            leading-relaxed
            tracking-[0.12em]
            text-[#ED6439]

            sm:text-xs
            sm:tracking-[0.16em]
          "
        >
          Evidence • Innovation • Impact
        </p>
      </div>

    </div>
  </div>
</Reveal>

  </div>
</Section>

      {/* ======================================================
          FINAL CTA
          ====================================================== */}

      <section className="relative overflow-hidden bg-[#E15925] py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#ED6439]/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#ED6439]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span
              className="
                inline-flex
                max-w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/25
                bg-white/10
                px-3.5
                py-1.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-amber-100
                backdrop-blur-xs
                sm:text-xs
              "
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-amber-300" />
              Our Services
            </span>

            <h2
              className="
                mx-auto
                mt-5
                max-w-3xl
                break-words
                font-display
                text-2xl
                font-extrabold
                leading-[1.15]
                text-white
                sm:text-3xl
                md:text-4xl
              "
            >
              Supporting older persons with care, dignity and purpose.
            </h2>

            <div className="mt-7 sm:mt-8">
              <Link
                to="/contact"
                className="
                  inline-flex
                  max-w-full
                  items-center
                  justify-center
                  gap-2
                  bg-[#ED6439]
                  px-6
                  py-3
                  text-xs
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(237,100,57,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#d95730]
                  sm:px-7
                  sm:py-3.5
                  sm:text-sm
                "
              >
                CONTACT US
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
        </div>
  </SiteLayout>
  )
}