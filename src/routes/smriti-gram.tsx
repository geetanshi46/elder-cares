import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Heart,
  Leaf,
  PlayCircle,
  Microscope,
  Users,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import smritiImage from "@/assets/smriti-gram/smriti-gram-front.webp";
import smritiGramImage from "../assets/smriti-gram/New-model.webp";
import ServicesImage from "../assets/smriti-gram/Servicesandfacilities.png";
import residentialCareImage from "../assets/smriti-gram/residential-care.png";
import trainingAcademyImage from "../assets/smriti-gram/training-academy.png";
import researchHubImage from "../assets/smriti-gram/research-innovation.png";
import smritiGramBanner from "../assets/smriti-gram/smriti-gram-banner.webp";
import sustainableCampusImage from "../assets/smriti-gram/smriti-gram-sustainable-campus.webp";
import communityImage from "../assets/smriti-gram/smriti-gram-community.webp";

const title =
  "Nightingales Smriti Gram — India's First Integrated Dementia Care Village | Nightingales Medical Trust";

const description =
  "Nightingales Smriti Gram is a pioneering dementia care village by Nightingales Medical Trust, bringing together residential dementia care, training, research, innovation and community engagement.";

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
  const [smritiGramPopup, setSmritiGramPopup] = useState(false);
  const [collaborationPopup, setCollaborationPopup] = useState(false);
  const [visitPopup, setVisitPopup] = useState(false);
  const [isAdmissionFormOpen, setIsAdmissionFormOpen] = useState(false);
  const [formLang, setFormLang] = useState<FormLang>("en");
  const t = formTranslations[formLang];

  const closeAdmissionForm = () => {
    setIsAdmissionFormOpen(false);
    setFormLang("en");
  };

  const [expandedFacility, setExpandedFacility] = useState<number | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showResearchModal, setShowResearchModal] = useState(false);
  const [showTrainingAcademyModal, setShowTrainingAcademyModal] =
  useState(false);
  const [isGuidingPrincipleExpanded, setIsGuidingPrincipleExpanded] =
  useState(false);
  const [showGuidingPrincipleModal, setShowGuidingPrincipleModal] =
  useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  return (
    <SiteLayout>
    {/* HERO */}
<section
  id="smriti-gram"
  className="relative w-full overflow-hidden scroll-mt-24"
>
  <div className="relative min-h-[520px] w-full sm:min-h-[580px] lg:min-h-[650px]">
    {/* BANNER IMAGE */}
    <img
      src={smritiGramBanner}
      alt="Nightingales Smriti Gram"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    {/* LIGHT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#E15925]/15 via-[#E15925]/5 to-transparent" />

    {/* CENTERED CONTENT */}
    <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-7xl items-center justify-center px-5 py-12 sm:min-h-[580px] sm:px-8 sm:py-16 lg:min-h-[650px] lg:px-10 lg:py-20">
      <Reveal>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-sm">
            <span className="h-px w-9 bg-[#ED6439]" />
            {/* Nightingales Smriti Gram */}
            <span className="h-px w-9 bg-[#ED6439]" />
          </p>

          <h1 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Nightingales Smriti Gram
          </h1>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#ED6439]" />

          <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href="#why-smriti-gram"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ED6439] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(237,100,57,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9532F] sm:w-auto"
            >
              Why Smriti Gram
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsAdmissionFormOpen(true)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/50 bg-white/95 px-6 py-3.5 text-sm font-bold text-[#263746] shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#ED6439] sm:w-auto"
            >
              Apply for Admission
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>

     {/* WHY SMRITI GRAM */}
<section
  id="why-smriti-gram"
  className="scroll-mt-24 bg-[#FBF6EC]"
>
  <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
    <div className="flex items-center gap-3">
  <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
  <span className="h-px w-12 bg-[#ED6439]" />
  <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base lg:text-lg">
    Why Nightingales Smriti Gram
  </span>
</div>

    <div className="mt-10 space-y-7">
      {/* FULL-WIDTH IMAGE */}
<Reveal>
  <div className="group relative overflow-hidden rounded-[2rem] border border-[#ED6439]/15 bg-white p-1.5 shadow-[0_25px_70px_-30px_rgba(38,55,70,0.25)]">
    <div className="relative h-[380px] overflow-hidden rounded-[1.6rem] sm:h-[480px] lg:h-[600px]">
      <img
        src={smritiImage}
        alt="Nightingales Smriti Gram"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#E15925]/15 via-transparent to-transparent" />

      <div className="absolute bottom-4 left-4 rounded-2xl border border-white/40 bg-white/95 px-4 py-3 shadow-[0_15px_40px_-20px_rgba(38,55,70,0.4)] backdrop-blur-sm sm:bottom-6 sm:left-6 sm:px-5 sm:py-3.5">
        <p className="font-display text-2xl font-extrabold leading-none text-[#ED6439] sm:text-3xl">
          100-bed
        </p>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#526574] sm:text-xs">
          Residential dementia care facility
        </p>
      </div>
    </div>
  </div>
</Reveal>

      {/* FULL-WIDTH CONTENT CARD */}
<Reveal delay={100}>
  <div className="overflow-hidden rounded-[2rem] border border-[#263746]/10 bg-white shadow-[0_25px_65px_-30px_rgba(38,55,70,0.2)]">
    {/* CARD HEADER */}
    <div className="border-b border-[#263746]/10 px-7 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-11">
      <Reveal delay={140}>
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ED6439]" />
          <span className="h-px w-10 bg-[#ED6439]" />
          {/* <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-xs">
            Why Nightingales Smriti Gram
          </span> */}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <h3 className="mt-5 max-w-5xl font-display text-2xl font-extrabold leading-[1.15] tracking-[-0.025em] text-[#263746] sm:text-3xl lg:text-[2.35rem]">
          Nightingales Smriti Gram was born from this need.
        </h3>
      </Reveal>
    </div>

    {/* CONTENT */}
    <div className="px-7 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-6xl space-y-6 text-[15px] leading-7 text-[#526574] sm:text-[15.5px] sm:leading-7">
        <Reveal delay={260}>
          <p>
            For more than two decades, Nightingales Medical Trust has been
            providing dementia care and supporting families affected by
            dementia.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <p>
            During this journey, we have met many families from economically
            disadvantaged backgrounds who struggle to care for a loved one
            with dementia. Many cannot afford residential dementia care or
            trained caregivers. At the same time, most traditional old-age
            homes are not equipped to provide specialised dementia care.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="relative overflow-hidden rounded-2xl border border-[#ED6439]/15 bg-[#FFF8EF] p-5 sm:p-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#ED6439]" />

            <p className="pl-3 text-[15px] font-semibold leading-7 text-[#263746] sm:text-base">
              Families are often left with very few choices.
            </p>
          </div>
        </Reveal>

        <Reveal delay={440}>
          <p>
            As part of the first phase, NMT is establishing a{" "}
            <strong className="font-extrabold text-[#ED6439]">
              100-bed residential dementia care facility
            </strong>{" "}
            providing free care to elders from economically disadvantaged
            backgrounds who need it most.
          </p>
        </Reveal>

        <Reveal delay={500}>
          <p>
            The campus will ultimately support{" "}
            <strong className="font-extrabold text-[#ED6439]">
              300 persons with dementia
            </strong>
            , with facilities designed to serve people from different
            economic backgrounds.
          </p>
        </Reveal>
      </div>

      {/* KEY USP STRIP */}
      <div className="mt-10 grid gap-4 border-t border-[#263746]/10 pt-8 sm:grid-cols-2">
        <Reveal delay={560}>
          <div className="group rounded-2xl border border-[#ED6439]/15 bg-[#FFF8EF] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ED6439]/35 hover:shadow-[0_18px_40px_-22px_rgba(237,100,57,0.35)] sm:p-6">
            <div className="flex items-end gap-2">
              <span className="font-display text-3xl font-extrabold leading-none text-[#ED6439] transition-transform duration-500 group-hover:scale-105 sm:text-4xl">
                100
              </span>
              <span className="pb-0.5 text-sm font-bold text-[#ED6439]">
                beds
              </span>
            </div>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#526574] sm:text-sm">
              First phase for marginalized elders
            </p>
          </div>
        </Reveal>

        <Reveal delay={620}>
          <div className="group rounded-2xl border border-[#ED6439]/15 bg-[#FFF8EF] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#ED6439]/35 hover:shadow-[0_18px_40px_-22px_rgba(237,100,57,0.35)] sm:p-6">
            <div className="flex items-end gap-2">
              <span className="font-display text-3xl font-extrabold leading-none text-[#ED6439] transition-transform duration-500 group-hover:scale-105 sm:text-4xl">
                300
              </span>
              <span className="pb-0.5 text-sm font-bold text-[#ED6439]">
                persons
              </span>
            </div>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#526574] sm:text-sm">
              Ultimately supported
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</Reveal>
    </div>
  </div>
</section>


{/* SHORT VIDEO SECTION */}
{/* =========================================================
    SHORT VIDEO SECTION
    ========================================================= */}
<section className="scroll-mt-24 bg-[#FBF6EC]">
  <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
    <Reveal delay={200}>
      <div
        className="
          overflow-hidden
          rounded-[2rem]
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
            py-8
            sm:px-10
            sm:py-9
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-12
          "
        >
          {/* VIDEO TEXT */}
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#ED6439]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED6439]">
                Short Video
              </span>
            </div>

            <h3 className="font-display text-2xl font-extrabold text-[#24333B] sm:text-3xl">
              Discover Nightingales Smriti Gram
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#66757E] sm:text-[15px]">
              Take a closer look at our vision for a comprehensive model
              of dementia care.
            </p>
          </div>

          {/* VIDEO THUMBNAIL */}
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

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
        !rounded-none
      "
      onClick={(event) => event.stopPropagation()}
      style={{ borderRadius: 0 }}
    >

      {/* CLOSE BUTTON */}
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

      {/* VIDEO */}
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
          object-contain
          bg-black
          !rounded-none
        "
        style={{
          borderRadius: 0,
        }}
      />

    </div>
  </div>
)}

      {/* ABOUT */}
<section id="about-smriti-gram" className="scroll-mt-24 bg-white">
  <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
    {/* SECTION EYEBROW */}
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
      <span className="h-px w-12 bg-[#ED6439]" />
      <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base lg:text-lg">
        About Nightingales Smriti Gram
      </span>
    </div>

    <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1fr_1fr]">
    {/* CONTENT */}
<Reveal>
  <div className="h-full rounded-[2rem] border border-[#263746]/10 bg-[#FBF6EC] p-7 shadow-[0_20px_55px_-30px_rgba(38,55,70,0.16)] sm:p-9 lg:p-10">
    <div className="space-y-5 text-[15px] leading-7 text-[#526574] sm:text-[15.5px] sm:leading-7">
      <p>
        Nightingales Smriti Gram is a pioneering initiative of
        Nightingales Medical Trust (NMT) to create a new model of
        dementia care in India, where quality care, dignity,
        companionship, learning, innovation and research come together
        in one caring community.
      </p>

      <p>
        Located near Doddaballapur, about an hour’s drive from Yelahanka,
        Bengaluru, Nightingales Smriti Gram is spread across a five-acre,
        green and thoughtfully designed campus.
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

    {/* READ MORE */}
    <button
      type="button"
      onClick={() => setShowAboutModal(true)}
      className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#ED6439]/25 bg-white px-5 py-2.5 text-sm font-bold text-[#ED6439] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ED6439] hover:bg-[#ED6439] hover:text-white"
    >
      Read More
      <ArrowRight className="h-4 w-4" />
    </button>
  </div>
</Reveal>

{/* ABOUT / SMRITI GRAM MODEL MODAL */}
{showAboutModal && (
  <div
    className="fixed inset-0 z-[999] flex items-center justify-center bg-[#17232B]/70 px-4 py-6 backdrop-blur-sm"
    onClick={() => setShowAboutModal(false)}
  >
    <div
      className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#FFFDF9] p-6 shadow-2xl sm:p-8"
      onClick={(event) => event.stopPropagation()}
    >
      {/* CLOSE ICON */}
      <button
        type="button"
        onClick={() => setShowAboutModal(false)}
        className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#FFF0E8] text-[#ED6439] transition hover:bg-[#ED6439] hover:text-white"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {/* HEADER */}
      <div className="pr-12">
        <span className="mb-3 inline-flex rounded-full bg-[#FFF0E8] px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-[#ED6439]">
          NIGHTINGALES SMRITI GRAM
        </span>

        <h3 className="font-display text-2xl font-extrabold leading-tight text-[#263746] sm:text-3xl">
          The Smriti Gram Model
        </h3>

        <div className="mt-4 h-1 w-12 rounded-full bg-[#ED6439]" />
      </div>

      {/* FULL CONTENT */}
      <div className="mt-6 space-y-5 text-sm leading-7 text-[#526574] sm:text-base">
        <p>
          Nightingales Smriti Gram is a pioneering initiative of
          Nightingales Medical Trust (NMT) to create a new model of
          dementia care in India, where quality care, dignity,
          companionship, learning, innovation and research come together
          in one caring community.
        </p>

        <p>
          Located near Doddaballapur, about an hour’s drive from Yelahanka,
          Bengaluru, Nightingales Smriti Gram is spread across a five-acre,
          green and thoughtfully designed campus.
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

        <p className="font-bold text-[#263746]">
          The model brings together:
        </p>

        <ul className="space-y-3">
          <Bullet>
            <>
              <span className="font-bold text-[#ED6439]">
                Person-centred dementia care
              </span>{" "}
              based on each person’s needs, abilities, preferences and life
              story.
            </>
          </Bullet>

          <Bullet>
            <>
              <span className="font-bold text-[#ED6439]">
                Nature-based and therapeutic environments
              </span>{" "}
              with gardens, walking paths, safe outdoor spaces and activity
              areas.
            </>
          </Bullet>

          <Bullet>
            <>
              <span className="font-bold text-[#ED6439]">
                Holistic care
              </span>{" "}
              that combines modern medical care with appropriate
              complementary and traditional approaches.
            </>
          </Bullet>

          <Bullet>
            <>
              <span className="font-bold text-[#ED6439]">
                Rehabilitation and meaningful activities
              </span>{" "}
              that promote physical, cognitive, emotional and social
              wellbeing.
            </>
          </Bullet>

          <Bullet>
            <>
              <span className="font-bold text-[#ED6439]">
                Technology-enabled care
              </span>{" "}
              to strengthen safety, monitoring, communication and continuity
              of care.
            </>
          </Bullet>

          <Bullet>
            <>
              <span className="font-bold text-[#ED6439]">
                Palliative and supportive care
              </span>{" "}
              focused on comfort, dignity and quality of life.
            </>
          </Bullet>

          <Bullet>
            <>
              <span className="font-bold text-[#ED6439]">
                Family and community engagement
              </span>{" "}
              to reduce loneliness and strengthen social connections.
            </>
          </Bullet>
        </ul>
      </div>

      {/* CLOSE BUTTON */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={() => setShowAboutModal(false)}
          className="rounded-full bg-[#263746] px-6 py-2.5 text-xs font-bold tracking-wide text-white transition hover:bg-[#17232B]"
        >
          CLOSE
        </button>
      </div>
    </div>
  </div>
)}

      {/* IMAGE */}
      <Reveal delay={100}>
        <div className="relative h-full min-h-[360px] overflow-hidden rounded-[2rem] border border-[#ED6439]/15 bg-[#F4EEE7] shadow-[0_25px_60px_-30px_rgba(38,55,70,0.3)] sm:min-h-[460px] lg:min-h-full">
          <img
            src={smritiGramImage}
            alt="Nightingales Smriti Gram campus"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#E15925]/20 via-transparent to-transparent" />
        </div>
      </Reveal>
    </div>
  </div>
</section>

      {/* VISION */}
<section
  id="vision"
  className="scroll-mt-24 overflow-hidden bg-[#ED6439]"
>
  <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
    <Reveal>
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#ED6439] px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        {/* DECORATIVE ELEMENT */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full border border-white/10" />

        <div className="relative z-10">
          {/* EYEBROW */}
          <Reveal delay={80}>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="h-px w-12 bg-white/70" />
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-white sm:text-base">
                Our Vision
              </span>
            </div>
          </Reveal>

          {/* CONTENT */}
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            {/* MAIN VISION */}
            <Reveal delay={140}>
              <h2 className="max-w-4xl font-display text-2xl font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                At Nightingales Medical Trust, we believe that financial
                circumstances should never determine whether a person can
                access quality dementia care.
              </h2>
            </Reveal>

            {/* SUPPORTING CARD */}
            <Reveal delay={220}>
              <div className="group rounded-[2rem] border border-white/60 bg-white p-7 shadow-[0_25px_60px_-25px_rgba(38,55,70,0.3)] transition-all duration-500 hover:-translate-y-1 sm:p-9">
                <span className="block h-1 w-12 rounded-full bg-[#ED6439]" />

                <p className="mt-6 font-display text-lg font-bold leading-7 text-[#263746] sm:text-xl sm:leading-8">
                  Financial constraints should never be a barrier to quality dementia care
                </p>

                <div className="mt-7 h-px w-full bg-[#263746]/10" />

                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#ED6439]">
                  Our Commitment
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Reveal>
  </div>
</section>

      {/* SERVICES & FACILITIES */}
<section
  id="services-facilities"
  className="scroll-mt-24 bg-[#FBF6EC]"
>
  <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">

    {/* SECTION INTRO */}
    <Reveal>
      <div className="max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
          <span className="h-px w-12 bg-[#ED6439]" />

          <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#ED6439] sm:text-base">
            Services and Facilities
          </span>
        </div>

        <div className="mt-7 space-y-5 text-base leading-7 text-[#526574] sm:text-[17px] sm:leading-8">
          <p>
            Nightingales Smriti Gram is not only a place for providing
            dementia care. It is also envisioned as a centre for learning,
            innovation and research to help build the future of dementia care
            in India.
          </p>

          <p>
            The campus will bring together three important components:
          </p>
        </div>
      </div>
    </Reveal>

    {/* CAMPUS IMAGE */}
    <Reveal delay={80}>
      <div className="group mt-10 overflow-hidden rounded-[2rem] border border-[#ED6439]/15 bg-white p-1.5 shadow-[0_25px_70px_-30px_rgba(38,55,70,0.25)]">
        <div className="overflow-hidden rounded-[1.6rem]">
          <img
            src={ServicesImage}
            alt="Services and facilities at Nightingales Smriti Gram"
            className="aspect-[16/8] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </Reveal>

   {/* THREE COMPONENTS */}
<div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">

  {/* 01 — RESIDENTIAL CARE */}
  <Reveal delay={100} className="h-full">
    <article className="flex h-full min-h-[300px] flex-col overflow-hidden rounded-[2rem] border border-[#ED6439]/15 bg-white shadow-[0_20px_55px_-30px_rgba(38,55,70,0.2)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ED6439]/30 hover:shadow-[0_28px_65px_-30px_rgba(237,100,57,0.25)]">

      <div className="flex items-center justify-between border-b border-[#263746]/10 px-6 py-5 sm:px-7">
        <span className="font-display text-3xl font-extrabold text-[#ED6439]">
          01
        </span>

        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFF1EA] text-[#ED6439]">
          <Heart className="h-5 w-5" strokeWidth={1.8} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-extrabold leading-tight text-[#263746] sm:text-2xl">
          Residential Dementia Care
        </h3>

        <p className="mt-5 text-[15px] leading-7 text-[#526574] sm:text-base">
          A specialised residential care facility providing
          person-centred, holistic and dignified care to persons living
          with dementia.
        </p>
      </div>
    </article>
  </Reveal>


  {/* 02 — TRAINING ACADEMY */}
  <Reveal delay={180} className="h-full">
    <article className="flex h-full min-h-[300px] flex-col overflow-hidden rounded-[2rem] border border-[#ED6439]/15 bg-white shadow-[0_20px_55px_-30px_rgba(38,55,70,0.2)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ED6439]/30 hover:shadow-[0_28px_65px_-30px_rgba(237,100,57,0.25)]">

      <div className="flex items-center justify-between border-b border-[#263746]/10 px-6 py-5 sm:px-7">
        <span className="font-display text-3xl font-extrabold text-[#ED6439]">
          02
        </span>

        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFF1EA] text-[#ED6439]">
          <GraduationCap className="h-5 w-5" strokeWidth={1.8} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-extrabold leading-tight text-[#263746] sm:text-2xl">
          Training Academy
        </h3>

        <p className="mt-5 text-[15px] leading-7 text-[#526574] sm:text-base">
          India faces a growing shortage of trained dementia and
          eldercare professionals.
        </p>

        <button
          type="button"
          onClick={() => setShowTrainingAcademyModal(true)}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-extrabold text-[#ED6439] transition-colors hover:text-[#D9532F]"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  </Reveal>


{showTrainingAcademyModal && (
  <div
    className="fixed inset-0 z-[999] flex items-center justify-center bg-[#17232B]/70 px-4 py-6 backdrop-blur-sm"
    onClick={() => setShowTrainingAcademyModal(false)}
  >
    <div
      className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#FFFDF9] p-6 shadow-2xl sm:p-8"
      onClick={(event) => event.stopPropagation()}
    >
      {/* Close */}
      <button
        type="button"
        onClick={() => setShowTrainingAcademyModal(false)}
        className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#FFF0E8] text-[#ED6439] transition hover:bg-[#ED6439] hover:text-white"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Header */}
      <div className="pr-12">
        <span className="mb-3 inline-flex rounded-full bg-[#FFF0E8] px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-[#ED6439]">
          SMRITI GRAM
        </span>

        <h3 className="font-display text-2xl font-extrabold leading-tight text-[#263746] sm:text-3xl">
          Training Academy
        </h3>

        <div className="mt-4 h-1 w-12 rounded-full bg-[#ED6439]" />
      </div>

      {/* Content */}
      <div className="mt-6 space-y-5 text-sm leading-7 text-[#526574] sm:text-base">
        <p>
          India faces a growing shortage of trained dementia and eldercare
          professionals.
        </p>

        <p>
          The Nightingales Smriti Gram Training Academy will provide
          practical, competency-based and technology-enabled training for
          caregivers, healthcare professionals, students and others
          interested in eldercare.
        </p>

        <p>
          The Academy will focus on building skills, improving the quality
          of care and creating new opportunities for people to build
          meaningful careers in dementia and eldercare.
        </p>
      </div>

      {/* Close Button */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={() => setShowTrainingAcademyModal(false)}
          className="rounded-full bg-[#263746] px-6 py-2.5 text-xs font-bold tracking-wide text-white transition hover:bg-[#17232B]"
        >
          CLOSE
        </button>
      </div>
    </div>
  </div>
)}



  {/* 03 — RESEARCH & INNOVATION HUB */}
  <Reveal delay={260} className="h-full">
    <article className="flex h-full min-h-[300px] flex-col overflow-hidden rounded-[2rem] border border-[#ED6439]/15 bg-white shadow-[0_20px_55px_-30px_rgba(38,55,70,0.2)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ED6439]/30 hover:shadow-[0_28px_65px_-30px_rgba(237,100,57,0.25)]">

      <div className="flex items-center justify-between border-b border-[#263746]/10 px-6 py-5 sm:px-7">
        <span className="font-display text-3xl font-extrabold text-[#ED6439]">
          03
        </span>

        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFF1EA] text-[#ED6439]">
          <Microscope className="h-5 w-5" strokeWidth={1.8} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-extrabold leading-tight text-[#263746] sm:text-2xl">
          Research & Innovation Hub
        </h3>

        <p className="mt-5 line-clamp-3 text-[15px] leading-7 text-[#526574] sm:text-base">
          The Research & Innovation Hub will generate knowledge from
          real-world dementia care and explore better ways of supporting
          persons with dementia and their families.
        </p>

        <button
  type="button"
  onClick={() => setShowResearchModal(true)}
  className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-extrabold text-[#ED6439] transition-colors hover:text-[#D9532F]"
>
  Read More
  <ArrowRight className="h-4 w-4" />
</button>
      </div>
    </article>
  </Reveal>


{showResearchModal && (
  <div
    className="fixed inset-0 z-[999] flex items-center justify-center bg-[#17232B]/70 px-4 py-6 backdrop-blur-sm"
    onClick={() => setShowResearchModal(false)}
  >
    <div
      className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#FFFDF9] p-6 shadow-2xl sm:p-8"
      onClick={(event) => event.stopPropagation()}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={() => setShowResearchModal(false)}
        className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#FFF0E8] text-[#ED6439] transition hover:bg-[#ED6439] hover:text-white"
        aria-label="Close Research & Innovation Hub popup"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Header */}
      <div className="pr-12">
        <span className="mb-3 inline-flex rounded-full bg-[#FFF0E8] px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-[#ED6439]">
          SMRITI GRAM
        </span>

        <h3 className="font-display text-2xl font-extrabold leading-tight text-[#263746] sm:text-3xl">
          Research & Innovation Hub
        </h3>

        <div className="mt-4 h-1 w-12 rounded-full bg-[#ED6439]" />
      </div>

      {/* Full Content */}
      <div className="mt-6 text-sm leading-7 text-[#526574] sm:text-base">
        <p>
          The Research & Innovation Hub will generate knowledge from
          real-world dementia care and explore better ways of supporting
          persons with dementia and their families.
        </p>

        <p className="mt-5 font-bold text-[#263746]">
          It will focus on areas such as:
        </p>

        <div className="mt-4 space-y-2.5">
          {researchItems.map((item) => (
            <div
              key={item}
              className="flex gap-2 text-[15px] leading-6"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-5">
          The Hub will work with universities, research institutions,
          healthcare organisations, technology companies, government
          agencies and like-minded organisations in India and abroad.
        </p>
      </div>

      {/* Close */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={() => setShowResearchModal(false)}
          className="rounded-full bg-[#263746] px-6 py-2.5 text-xs font-bold tracking-wide text-white transition hover:bg-[#17232B]"
        >
          CLOSE
        </button>
      </div>
    </div>
  </div>
)}



</div>
  </div>
</section>

     {/* SUSTAINABLE CAMPUS */}
<section
  id="sustainable-campus"
  className="scroll-mt-24 bg-white"
>
  <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">

    <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

      {/* IMAGE */}
      <Reveal>
        <div className="group relative h-full min-h-[340px] overflow-hidden rounded-[2.25rem] border border-[#ED6439]/15 bg-[#FFF1E4] shadow-[0_25px_70px_-30px_rgba(38,55,70,0.25)] sm:min-h-[440px] lg:min-h-[520px]">

          <img
            src={sustainableCampusImage}
            alt="Nightingales Smriti Gram sustainable green campus"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />

          {/* VERY LIGHT IMAGE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#E15925]/25 via-transparent to-transparent" />

          {/* IMAGE BADGE */}
          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/50 bg-white/95 px-5 py-4 shadow-[0_18px_40px_-20px_rgba(38,55,70,0.4)] backdrop-blur-sm sm:bottom-7 sm:left-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ED6439]">
              Sustainable Campus
            </p>
            <p className="mt-1 text-sm font-semibold text-[#263746]">
              Designed with nature in mind
            </p>
          </div>
        </div>
      </Reveal>

      {/* CONTENT */}
      <Reveal delay={100}>
        <div className="flex h-full flex-col justify-center rounded-[2.25rem] border border-[#263746]/10 bg-[#FBF6EC] p-7 shadow-[0_20px_55px_-30px_rgba(38,55,70,0.16)] sm:p-9 lg:p-11">

          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
            <span className="h-px w-12 bg-[#ED6439]" />

            <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base">
              A Sustainable Campus
            </span>
          </div>

          <h2 className="mt-6 max-w-2xl font-display text-2xl font-extrabold leading-[1.15] tracking-[-0.025em] text-[#263746] sm:text-3xl lg:text-[2.45rem]">
            A Sustainable Campus
          </h2>

          <div className="mt-7 h-px w-full bg-[#263746]/10" />

          {/* CONTENT */}
          <div className="mt-7 space-y-5 text-[15.5px] leading-7 text-[#526574] sm:text-base sm:leading-8">

            <p>
              Nightingales Smriti Gram is being developed with environmental
              sustainability in mind.
            </p>

            <p>
              The campus will incorporate solutions such as{" "}
              <strong className="font-extrabold text-[#ED6439]">
                renewable energy, rainwater harvesting, efficient water
                management, natural light, green spaces
              </strong>{" "}
              and responsible use of resources.
            </p>

            <p>
              Our aim is to demonstrate that dementia care can be{" "}
              <strong className="font-extrabold text-[#ED6439]">
                compassionate, inclusive, innovative and environmentally
                responsible.
              </strong>
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[#263746]/10 pt-7 sm:grid-cols-3">

            <div className="rounded-2xl border border-[#ED6439]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#ED6439]/25 hover:shadow-[0_15px_35px_-20px_rgba(237,100,57,0.3)]">
              <p className="text-sm font-extrabold text-[#ED6439]">
                Renewable
              </p>
              <p className="mt-1 text-xs font-semibold leading-5 text-[#526574]">
                Energy
              </p>
            </div>

            <div className="rounded-2xl border border-[#ED6439]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#ED6439]/25 hover:shadow-[0_15px_35px_-20px_rgba(237,100,57,0.3)]">
              <p className="text-sm font-extrabold text-[#ED6439]">
                Water
              </p>
              <p className="mt-1 text-xs font-semibold leading-5 text-[#526574]">
                Responsible Management
              </p>
            </div>

            <div className="rounded-2xl border border-[#ED6439]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#ED6439]/25 hover:shadow-[0_15px_35px_-20px_rgba(237,100,57,0.3)]">
              <p className="text-sm font-extrabold text-[#ED6439]">
                Green
              </p>
              <p className="mt-1 text-xs font-semibold leading-5 text-[#526574]">
                Spaces
              </p>
            </div>

          </div>
        </div>
      </Reveal>

    </div>
  </div>
</section>

     {/* COMMUNITY */}
<section
  id="community"
  className="scroll-mt-24 bg-[#FBF6EC]"
>
  <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">

    {/* SECTION INTRO */}
    <Reveal>
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
        <span className="h-px w-12 bg-[#ED6439]" />

        <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base">
          Connecting with the Community
        </span>
      </div>
    </Reveal>

    {/* FULL-WIDTH IMAGE */}
    <Reveal delay={80}>
      <div className="group relative mt-8 overflow-hidden rounded-[2.25rem] border border-[#ED6439]/15 bg-white p-1.5 shadow-[0_25px_70px_-30px_rgba(38,55,70,0.25)]">
        <div className="relative overflow-hidden rounded-[1.75rem]">
          <img
            src={communityImage}
            alt="Nightingales Smriti Gram community"
            className="block h-auto min-h-[260px] w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] sm:min-h-[340px] lg:min-h-[430px]"
          />

          {/* VERY LIGHT OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#E15925]/10 via-transparent to-transparent" />

          {/* IMAGE LABEL */}
          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/40 bg-white/95 px-5 py-3 shadow-[0_15px_40px_-20px_rgba(38,55,70,0.4)] backdrop-blur-sm sm:bottom-7 sm:left-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#ED6439]">
              Community
            </p>
            <p className="mt-1 text-sm font-semibold text-[#263746]">
              Connecting care with society
            </p>
          </div>
        </div>
      </div>
    </Reveal>

    {/* FULL-WIDTH CONTENT CARD */}
    <Reveal delay={160}>
      <div className="mt-8 rounded-[2.25rem] border border-[#263746]/10 bg-white p-7 shadow-[0_20px_55px_-30px_rgba(38,55,70,0.18)] sm:p-9 lg:p-12">

        {/* CARD HEADER */}
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
          <span className="h-px w-12 bg-[#ED6439]" />

          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-sm">
            Our Community Approach
          </span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">

          {/* LEFT */}
          <div>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FFF1EA] text-[#ED6439]">
              <Users
                className="h-6 w-6"
                strokeWidth={1.8}
              />
            </div>

            <h2 className="mt-6 max-w-xl font-display text-2xl font-extrabold leading-[1.15] tracking-[-0.025em] text-[#263746] sm:text-3xl lg:text-[2.4rem]">
              Connecting with the Community
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#ED6439]" />

            <div className="mt-7 rounded-2xl bg-[#FFF8EF] p-5 sm:p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#ED6439]">
                Our Aim
              </p>

              <p className="mt-2 font-display text-lg font-bold leading-7 text-[#263746] sm:text-xl">
                Building a more dementia-friendly society.
              </p>
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="space-y-6 text-[15.5px] leading-7 text-[#526574] sm:text-base sm:leading-8">

            <div className="rounded-2xl border-l-4 border-[#ED6439] bg-[#FFF8EF] p-5 sm:p-6">
              <p className="font-bold text-[#263746]">
                Dementia care should not be isolated from society.
              </p>
            </div>

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
        </div>
      </div>
    </Reveal>

  </div>
</section>

     {/* PARTNER */}
<section id="partner" className="scroll-mt-24 bg-white">
  <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
    <Reveal>
      <div className="relative overflow-hidden rounded-[2.25rem] bg-[#ED6439] p-7 text-white shadow-[0_30px_80px_-35px_rgba(237,100,57,0.5)] sm:p-10 lg:p-14">

        {/* DECORATIVE ELEMENTS */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/10" />

        <div className="relative z-10">

          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-px w-12 bg-white/60" />
            <span className="text-lg font-extrabold uppercase tracking-[0.18em] text-white sm:text-xl lg:text-2xl">
  Partner With Us
</span>
          </div>

          {/* SINGLE HEADING */}
          {/* <h2 className="mt-5 max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-white sm:text-4xl lg:text-[3.2rem]">
            Partner With Us
          </h2> */}

          <div className="mt-6 h-1 w-16 rounded-full bg-white/80" />

          {/* INTRO CONTENT */}
          <div className="mt-7 max-w-4xl space-y-5 text-[15px] leading-7 text-white/90 sm:text-base sm:leading-8">
            <p>
              Building a new model of dementia care requires the participation
              of many people and organisations.
            </p>

            <p>
              We welcome donors, CSR partners, universities, research
              institutions, healthcare organisations, technology companies,
              government agencies, volunteers and like-minded organisations to
              work with us in areas such as:
            </p>
          </div>

          {/* PARTNERSHIP AREAS */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {partnerItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#ED6439]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CLOSING */}
          <p className="mt-8 max-w-4xl text-[15px] font-semibold leading-7 text-white sm:text-base sm:leading-8">
            Together, we can help reshape dementia care in India.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
  type="button"
  onClick={() => setSmritiGramPopup(true)}
  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#ED6439] shadow-[0_12px_30px_-12px_rgba(38,55,70,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF8EF]"
>
  Support Nightingales Smriti Gram
  <ArrowRight className="h-4 w-4" />
</button>

{smritiGramPopup &&
  createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onClick={() => setSmritiGramPopup(false)}
    >
      <div
        className="relative w-full max-w-lg max-h-[calc(100vh-48px)] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:max-h-[calc(100vh-64px)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setSmritiGramPopup(false)}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5] text-xl text-[#252525] transition hover:bg-[#FFF0EA]"
          aria-label="Close"
        >
          ×
        </button>

        {/* Heading */}
        <div className="pr-10">
          <h3 className="font-display text-2xl font-bold text-[#E15925]">
            Support Nightingales Smriti Gram
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Share your details and our team will get in touch with you.
          </p>
        </div>

       {/* Form */}
<form
  action="https://formsubmit.co/contact@nightingaleseldercare.com"
  method="POST"
  className="mt-6 space-y-4"
>
  {/* FormSubmit Settings */}
  <input
    type="hidden"
    name="_subject"
    value="New Smriti Gram Support Enquiry"
  />

  <input
    type="hidden"
    name="_template"
    value="table"
  />

  {/* Full Name */}
  <div>
    <label
      htmlFor="smriti-name"
      className="mb-1.5 block text-sm font-semibold text-[#252525]"
    >
      Full Name
    </label>

    <input
      id="smriti-name"
      type="text"
      name="name"
      required
      placeholder="Enter your full name"
      className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
    />
  </div>

  {/* Email */}
  <div>
    <label
      htmlFor="smriti-email"
      className="mb-1.5 block text-sm font-semibold text-[#252525]"
    >
      Email Address
    </label>

    <input
      id="smriti-email"
      type="email"
      name="email"
      required
      placeholder="you@example.com"
      className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
    />
  </div>

  {/* Phone */}
  <div>
    <label
      htmlFor="smriti-phone"
      className="mb-1.5 block text-sm font-semibold text-[#252525]"
    >
      Phone Number
    </label>

    <input
      id="smriti-phone"
      type="tel"
      name="phone"
      required
      placeholder="Enter your phone number"
      className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
    />
  </div>

  {/* Message */}
  <div>
    <label
      htmlFor="smriti-message"
      className="mb-1.5 block text-sm font-semibold text-[#252525]"
    >
      Message
    </label>

    <textarea
      id="smriti-message"
      name="message"
      rows={3}
      maxLength={500}
      placeholder="Tell us how you would like to support."
      className="w-full resize-none rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
    />

    <p className="mt-1 text-right text-[11px] text-muted-foreground">
      Maximum 500 characters
    </p>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ED6439] py-3.5 text-sm font-bold text-white shadow-md shadow-[#ED6439]/20 transition hover:bg-[#d95730]"
  >
    Submit Interest
    <ArrowRight className="h-4 w-4" />
  </button>
</form>
      </div>
    </div>,
    document.body
  )}

            <button
  type="button"
  onClick={() => setCollaborationPopup(true)}
  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
>
  Collaborate With Us
</button>

{collaborationPopup &&
  createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onClick={() => setCollaborationPopup(false)}
    >
      <div
        className="relative w-full max-w-lg max-h-[calc(100vh-48px)] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:max-h-[calc(100vh-64px)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setCollaborationPopup(false)}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5] text-xl text-[#252525] transition hover:bg-[#FFF0EA]"
          aria-label="Close"
        >
          ×
        </button>

        {/* Heading */}
        <div className="pr-10">
          <h3 className="font-display text-2xl font-bold text-[#E15925]">
            Collaborate With Us
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Share your details and our team will get in touch to explore
            opportunities for collaboration.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formsubmit.co/contact@nightingaleseldercare.com"
          method="POST"
          className="mt-6 space-y-4"
        >
          {/* FormSubmit Settings */}
          <input
            type="hidden"
            name="_subject"
            value="New Collaboration Enquiry - Nightingales Medical Trust"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          {/* Full Name */}
          <div>
            <label
              htmlFor="collab-name"
              className="mb-1.5 block text-sm font-semibold text-[#252525]"
            >
              Full Name
            </label>

            <input
              id="collab-name"
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="collab-email"
              className="mb-1.5 block text-sm font-semibold text-[#252525]"
            >
              Email Address
            </label>

            <input
              id="collab-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="collab-phone"
              className="mb-1.5 block text-sm font-semibold text-[#252525]"
            >
              Phone Number
            </label>

            <input
              id="collab-phone"
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
            />
          </div>

          {/* Collaboration Type */}
          <div>
            <label
              htmlFor="collab-type"
              className="mb-1.5 block text-sm font-semibold text-[#252525]"
            >
              Area of Collaboration
            </label>

            <select
              id="collab-type"
              name="collaboration_type"
              required
              defaultValue=""
              className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="CSR Partnership">CSR Partnership</option>
              <option value="Research & Academic Collaboration">
                Research & Academic Collaboration
              </option>
              <option value="Healthcare Collaboration">
                Healthcare Collaboration
              </option>
              <option value="Technology & Innovation">
                Technology & Innovation
              </option>
              <option value="Community Outreach">
                Community Outreach
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="collab-message"
              className="mb-1.5 block text-sm font-semibold text-[#252525]"
            >
              Message
            </label>

            <textarea
              id="collab-message"
              name="message"
              rows={3}
              maxLength={500}
              placeholder="Please share a brief note about your collaboration."
              className="w-full resize-none rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
            />

            <p className="mt-1 text-right text-[11px] text-muted-foreground">
              Maximum 500 characters
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ED6439] py-3.5 text-sm font-bold text-white shadow-md shadow-[#ED6439]/20 transition hover:bg-[#d95730]"
          >
            Submit Collaboration Enquiry
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>,
    document.body
  )}

            <button
  type="button"
  onClick={() => setVisitPopup(true)}
  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
>
  Visit Smriti Gram
</button>

{visitPopup &&
  createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onClick={() => setVisitPopup(false)}
    >
      <div
        className="relative w-full max-w-lg max-h-[calc(100vh-48px)] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:max-h-[calc(100vh-64px)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setVisitPopup(false)}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5] text-xl text-[#252525] transition hover:bg-[#FFF0EA]"
          aria-label="Close"
        >
          ×
        </button>

        {/* Heading */}
        <div className="pr-10">
          <h3 className="font-display text-2xl font-bold text-[#E15925]">
            Visit Nightingales Smriti Gram
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Please share your details and preferred visit date. Our team will
            get in touch with you to confirm your visit.
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formsubmit.co/contact@nightingaleseldercare.com"
          method="POST"
          className="mt-6 space-y-4"
        >
          {/* FormSubmit Settings */}
          <input
            type="hidden"
            name="_subject"
            value="New Smriti Gram Visit Request"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          {/* Full Name */}
          <div>
            <label
              htmlFor="visit-name"
              className="mb-1.5 block text-sm font-semibold text-[#252525]"
            >
              Full Name
            </label>

            <input
              id="visit-name"
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="visit-email"
              className="mb-1.5 block text-sm font-semibold text-[#252525]"
            >
              Email Address
            </label>

            <input
              id="visit-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="visit-phone"
              className="mb-1.5 block text-sm font-semibold text-[#252525]"
            >
              Phone Number
            </label>

            <input
              id="visit-phone"
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
            />
          </div>

          {/* Visit Date */}
          <div>
            <label
              htmlFor="visit-date"
              className="mb-1.5 block text-sm font-semibold text-[#252525]"
            >
              Preferred Visit Date
            </label>

            <input
              id="visit-date"
              type="date"
              name="visit_date"
              min={new Date().toISOString().split("T")[0]}
              required
              className="w-full rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm text-[#252525] outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
            />
          </div>

          {/* Additional Message */}
          <div>
            <label
              htmlFor="visit-message"
              className="mb-1.5 block text-sm font-semibold text-[#252525]"
            >
              Additional Information
            </label>

            <textarea
              id="visit-message"
              name="message"
              rows={3}
              maxLength={500}
              placeholder="Any additional details you'd like to share."
              className="w-full resize-none rounded-xl border border-[#ED6439]/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
            />

            <p className="mt-1 text-right text-[11px] text-muted-foreground">
              Maximum 500 characters
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ED6439] py-3.5 text-sm font-bold text-white shadow-md shadow-[#ED6439]/20 transition hover:bg-[#d95730]"
          >
            Request a Visit
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>,
    document.body
  )}
          </div>

        </div>
      </div>
    </Reveal>
  </div>
</section>

     {/* ADMISSION */}
<section
  id="admission"
  className="scroll-mt-24 bg-[#FFF8EF]"
>
  <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">

    {/* INTRO */}
    <Reveal>
      <div className="max-w-5xl">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
          <span className="h-px w-12 bg-[#ED6439]" />

        <span className="text-xl font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-xl lg:text-2xl">
  Admission For Residential Care
</span>
        </div>

        {/* <h2 className="mt-6 max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-[#263746] sm:text-4xl lg:text-[3rem]">
          Admission For Residential Care
        </h2> */}

        <div className="mt-7 max-w-4xl space-y-5 text-base leading-7 text-[#526574] sm:text-[17px] sm:leading-8">
          <p>
            The first phase of Nightingales Smriti Gram includes a 100-bed
            facility providing free residential dementia care to elders from
            economically disadvantaged backgrounds.
          </p>

          <p className="font-semibold text-[#263746]">
            Admission will be based on need, eligibility and availability of
            beds.
          </p>
        </div>
      </div>
    </Reveal>

    {/* ADMISSION CRITERIA */}
    <div id="admission-criteria" className="mt-14 scroll-mt-24">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
          <span className="h-px w-10 bg-[#ED6439]" />

          <span className="text-xl font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-xl lg:text-2xl">
  Admission Criteria
</span>
        </div>

        {/* <h3 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.025em] text-[#263746] sm:text-3xl">
          Admission Criteria
        </h3> */}
      </Reveal>

      <div className="mt-7 grid items-stretch gap-5 md:grid-cols-2">
        <Reveal delay={80}>
          <AdmissionCard
            number="1"
            title="Confirmed dementia diagnosis:"
            body="The person should have a confirmed diagnosis of dementia from a qualified psychiatrist, neurologist or geriatrician."
          />
        </Reveal>

        <Reveal delay={140}>
          <AdmissionCard
            number="2"
            title="Economic need:"
            body="Preference will be given to families who are economically disadvantaged and unable to afford residential dementia care."
          />
        </Reveal>

        <Reveal delay={200}>
          <AdmissionCard
            number="3"
            title="Need for 24-hour care:"
            body="The person should require round-the-clock care, supervision and support because of dementia."
          />
        </Reveal>

        <Reveal delay={260}>
          <AdmissionCard
            number="4"
            title="Preference will be given to persons who:"
            items={[
              "Are neglected or at risk.",
              "Have elderly, sick or physically unfit caregivers.",
              "Belong to BPL families.",
              "Have a monthly family income below ₹40,000.",
            ]}
          />
        </Reveal>

        <Reveal delay={320}>
          <div className="md:col-span-2">
            <AdmissionCard
              number="5"
              title="Stage and medical condition:"
              body="Preference will be given to persons with moderate-stage dementia and significant behavioural and psychological symptoms of dementia (BPSD) who are medically stable and do not require hospital-level intensive medical care."
            />
          </div>
        </Reveal>
      </div>
    </div>

    {/* DOCUMENTS */}
    <div id="documents-required" className="mt-16 scroll-mt-24">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
          <span className="h-px w-10 bg-[#ED6439]" />

          <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base">
            Documents Required
          </span>
        </div>

        <h3 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.025em] text-[#263746] sm:text-3xl">
          Documents Required
        </h3>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-7 overflow-hidden rounded-[2rem] border border-[#263746]/10 bg-white shadow-[0_20px_55px_-30px_rgba(38,55,70,0.18)]">
          <div className="border-b border-[#263746]/10 bg-[#FBF6EC] px-6 py-5 sm:px-8">
            <p className="text-[15px] font-semibold leading-7 text-[#526574] sm:text-base">
              The following documents should be submitted along with the
              application:
            </p>
          </div>

          <div className="grid gap-px bg-[#263746]/10 sm:grid-cols-2">
            {documentItems.map((item, index) => (
              <Reveal key={item} delay={120 + index * 60}>
                <div className="flex h-full items-start gap-3 bg-white px-6 py-5 transition-colors duration-300 hover:bg-[#FFF8EF] sm:px-7">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ED6439]" />
                  </span>

                  <span className="text-[15px] font-semibold leading-6 text-[#526574]">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </div>

    {/* ADMISSION PROCESS */}
    <div id="admission-process" className="mt-16 scroll-mt-24">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
          <span className="h-px w-10 bg-[#ED6439]" />

          <span className="text-xl font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-xl lg:text-2xl">
  Admission Process
</span>
        </div>

        {/* <h3 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.025em] text-[#263746] sm:text-3xl">
          Admission Process
        </h3> */}
      </Reveal>

      <Reveal delay={100}>
        <div className="relative mt-7 overflow-hidden rounded-[2rem] bg-[#ED6439] p-7 text-white shadow-[0_25px_65px_-30px_rgba(237,100,57,0.45)] sm:p-9 lg:p-11">
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-16 -left-8 h-36 w-36 rounded-full border border-white/10" />

          <div className="relative z-10 max-w-5xl space-y-5 text-[15.5px] leading-7 text-white/95 sm:text-base sm:leading-8">
            <p>
              Every application will be reviewed by the Nightingales Smriti
              Gram Admission Committee.
            </p>

            <p>
              The Committee will assess the person’s medical condition, care
              needs, family circumstances and financial situation. The final
              decision will be taken by the Committee in consultation with the
              management of Nightingales Medical Trust.
            </p>
          </div>
        </div>
      </Reveal>
    </div>

  </div>
</section>

     {/* GUIDING PRINCIPLE */}
<section id="guiding-principle" className="scroll-mt-24 bg-white">
  <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
    
    {/* Section Heading */}
    <Reveal>
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
        <span className="h-px w-12 bg-[#ED6439]" />
        <span className="text-xl font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-xl lg:text-2xl">
          Our Guiding Principle
        </span>
      </div>
    </Reveal>

    {/* Content */}
    <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      
      {/* Image */}
      <Reveal>
        <div className="group relative h-full min-h-[360px] overflow-hidden rounded-[2rem] bg-[#F4EEE7] shadow-[0_18px_50px_rgba(38,55,70,0.08)]">
          <img
            src={residentialCareImage}
            alt="Specialised residential dementia care"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Very light overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#E15925]/20 via-transparent to-transparent" />
        </div>
      </Reveal>

      {/* Content Card */}
      <Reveal delay={100}>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#263746]/10 bg-[#FBF6EC] p-7 shadow-[0_18px_50px_rgba(38,55,70,0.06)] sm:p-9 lg:p-10">
          
          {/* Decorative accent */}
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-[#ED6439]/8" />

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              {/* <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ED6439] text-sm font-bold text-white">
                01
              </span> */}

              <span className="text-base font-bold uppercase tracking-[0.16em] text-[#ED6439]">
  A commitment to dignity
</span>
            </div>

            <div
              className={`space-y-5 text-[15.5px] leading-7 text-[#526574] sm:text-base ${
                isGuidingPrincipleExpanded
                  ? ""
                  : "max-h-[330px] overflow-hidden"
              }`}
            >
              <p>
                Nightingales Smriti Gram is committed to providing free residential dementia care to persons from economically disadvantaged backgrounds who need it most.
              </p>

              <p>
                Every admission will be guided by fairness, compassion, transparency and dignity.
              </p>

              <p>
                At the same time, Nightingales Smriti Gram is a specialised dementia care facility and is not a general home for destitute or abandoned persons. The facility is designed specifically for persons who meet the admission criteria and require specialised dementia care.
              </p>

              <p>
                Before admission, a formal agreement will be entered into between Nightingales Medical Trust and the family or legal guardian. The agreement will clearly define the responsibilities of both the family/legal guardian and NMT.
              </p>

              <p>
                This process will help ensure that Smriti Gram remains a centre of quality, specialised and dignified dementia care.
              </p>
            </div>

            {/* Read More / Less */}
           <button
  type="button"
  onClick={() => setShowGuidingPrincipleModal(true)}
  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ED6439] px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
>
  Read More
  <ArrowRight className="h-4 w-4" />
</button>
          </div>
        </div>
      </Reveal>


      {showGuidingPrincipleModal && (
  <div
    className="fixed inset-0 z-[999] flex items-center justify-center bg-[#17232B]/70 px-4 py-6 backdrop-blur-sm"
    onClick={() => setShowGuidingPrincipleModal(false)}
  >
    <div
      className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#FFFDF9] p-6 shadow-2xl sm:p-8"
      onClick={(event) => event.stopPropagation()}
    >
      {/* Close */}
      <button
        type="button"
        onClick={() => setShowGuidingPrincipleModal(false)}
        className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#FFF0E8] text-[#ED6439] transition hover:bg-[#ED6439] hover:text-white"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Header */}
      <div className="pr-12">
        <span className="mb-3 inline-flex rounded-full bg-[#FFF0E8] px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-[#ED6439]">
          SMRITI GRAM
        </span>

        <h3 className="font-display text-2xl font-extrabold leading-tight text-[#263746] sm:text-3xl">
          A commitment to dignity
        </h3>

        <div className="mt-4 h-1 w-12 rounded-full bg-[#ED6439]" />
      </div>

      {/* Full Content */}
      <div className="mt-6 space-y-5 text-sm leading-7 text-[#526574] sm:text-base">
        <p>
          Nightingales Smriti Gram is committed to providing free residential
          dementia care to persons from economically disadvantaged backgrounds
          who need it most.
        </p>

        <p>
          Every admission will be guided by fairness, compassion, transparency
          and dignity.
        </p>

        <p>
          At the same time, Nightingales Smriti Gram is a specialised dementia
          care facility and is not a general home for destitute or abandoned
          persons. The facility is designed specifically for persons who meet
          the admission criteria and require specialised dementia care.
        </p>

        <p>
          Before admission, a formal agreement will be entered into between
          Nightingales Medical Trust and the family or legal guardian. The
          agreement will clearly define the responsibilities of both the
          family/legal guardian and NMT.
        </p>

        <p>
          This process will help ensure that Smriti Gram remains a centre of
          quality, specialised and dignified dementia care.
        </p>
      </div>

      {/* Close */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={() => setShowGuidingPrincipleModal(false)}
          className="rounded-full bg-[#263746] px-6 py-2.5 text-xs font-bold tracking-wide text-white transition hover:bg-[#17232B]"
        >
          CLOSE
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  </div>
</section>

    {/* FINAL CTA */}
<section id="apply-admission" className="scroll-mt-24 bg-[#ED6439]">
  <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-24">
    <Reveal>
      <div className="mx-auto max-w-5xl text-center">
        
        {/* Single Heading */}
        <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          Does Your Loved One Need Dementia Care?
        </h2>

        {/* Content */}
        <div className="mx-auto mt-7 max-w-4xl space-y-5 text-[15.5px] leading-7 text-white/90 sm:text-base lg:text-lg lg:leading-8">
          <p>
            If someone in your family is living with dementia and meets the
            above criteria, you can apply for admission to Smriti Gram.
          </p>

          <p>
            Please complete the application form and submit it to Nightingales
            Medical Trust along with the required documents.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => setIsAdmissionFormOpen(true)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#ED6439] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
          >
            Apply for Admission
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* <button
            type="button"
            onClick={() => setIsAdmissionFormOpen(true)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
          >
            <FileText className="h-4 w-4" />
            Click here to fill our form
          </button> */}

          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
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
        <div className="flex items-start justify-between gap-3 sm:gap-5">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
              {t.brand}
            </p>
            <h2 id="admission-form-title" className="mt-2 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              {t.formTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-xs leading-5 text-white/80 sm:text-sm">
              {t.formSubtitle}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* LANGUAGE TOGGLE */}
            <div
              className="inline-flex items-center rounded-full bg-white/15 p-0.5 sm:p-1"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setFormLang("en")}
                aria-pressed={formLang === "en"}
                className={`rounded-full px-2.5 py-1.5 text-[11px] font-extrabold transition-colors sm:px-3.5 sm:text-xs ${
                  formLang === "en"
                    ? "bg-white text-[#ED6439] shadow-sm"
                    : "text-white hover:bg-white/15"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setFormLang("kn")}
                aria-pressed={formLang === "kn"}
                className={`rounded-full px-2.5 py-1.5 text-[11px] font-extrabold transition-colors sm:px-3.5 sm:text-xs ${
                  formLang === "kn"
                    ? "bg-white text-[#ED6439] shadow-sm"
                    : "text-white hover:bg-white/15"
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>

            <button
              type="button"
              onClick={closeAdmissionForm}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label={t.closeForm}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
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
                <p className="font-bold text-[#263746]">{t.beforeTitle}</p>
                <p className="mt-1 text-sm leading-6 text-[#526574]">
                  {t.beforeBody}
                </p>
              </div>
            </div>
          </div>

          {/* SECTION HELPER */}
          <div className="space-y-8">

            {/* APPLICANT */}
            <FormSection title={t.s1.title} subtitle={t.s1.subtitle}>
              <FormField label={t.f.name} name="applicantName" required />
              <FormField label={t.f.fatherSpouse} name="applicantFatherSpouse" />
              <FormField label={t.f.occupation} name="applicantOccupation" />
              <FormField label={t.f.phone} name="applicantPhone" type="tel" />
              <FormField label={t.f.mobile} name="applicantMobile" type="tel" required />
              <FormField label={t.f.email} name="applicantEmail" type="email" required />
              <FormField label={t.f.pan} name="applicantPan" />
              <FormField label={t.f.aadhar} name="applicantAadhar" />
              <FormField label={t.f.relToResident} name="applicantRelationship" required />
              <FormTextArea label={t.f.address} name="applicantAddress" required className="sm:col-span-2" />
            </FormSection>

            {/* ADMISSION REASONS */}
            <FormSection title={t.s2.title} subtitle={t.s2.subtitle}>
              <div className="sm:col-span-2 grid grid-cols-1 gap-3 md:grid-cols-2">
                {reasonValues.map((reasonValue, index) => (
                  <label key={reasonValue} className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5DDD4] bg-[#FFF8EF] p-4 text-sm leading-6 text-[#526574] transition-colors hover:border-[#ED6439]/40">
                    <input type="checkbox" name="admissionReasons" value={reasonValue} className="mt-1 h-4 w-4 shrink-0 accent-[#ED6439]" />
                    <span>{t.reasons[index]}</span>
                  </label>
                ))}
              </div>
              <FormField label={t.f.bplNumber} name="bplNumber" />
              <FormField label={t.f.annualIncome} name="annualFamilyIncome" />
            </FormSection>

            {/* GUARANTOR */}
            <FormSection title={t.s3.title} subtitle={t.s3.subtitle}>
              <FormField label={t.f.name} name="guarantorName" required />
              <FormField label={t.f.fatherSpouse} name="guarantorFatherSpouse" />
              <FormField label={t.f.occupation} name="guarantorOccupation" />
              <FormField label={t.f.phone} name="guarantorPhone" type="tel" />
              <FormField label={t.f.mobile} name="guarantorMobile" type="tel" />
              <FormField label={t.f.email} name="guarantorEmail" type="email" />
              <FormField label={t.f.pan} name="guarantorPan" />
              <FormField label={t.f.aadhar} name="guarantorAadhar" />
              <FormField label={t.f.relToApplicant} name="guarantorApplicantRelationship" />
              <FormField label={t.f.relToResident} name="guarantorResidentRelationship" />
              <FormTextArea label={t.f.address} name="guarantorAddress" required className="sm:col-span-2" />
            </FormSection>

            {/* PATIENT */}
            <FormSection title={t.s4.title} subtitle={t.s4.subtitle}>
              <FormField label={t.f.name} name="patientName" required />
              <FormField label={t.f.fatherSpouse} name="patientFatherSpouse" />
              <FormField label={t.f.occupation} name="patientOccupation" />
              <FormField label={t.f.phone} name="patientPhone" type="tel" />
              <FormField label={t.f.mobile} name="patientMobile" type="tel" />
              <FormField label={t.f.email} name="patientEmail" type="email" />
              <FormField label={t.f.pan} name="patientPan" />
              <FormField label={t.f.aadhar} name="patientAadhar" />
              <FormField label={t.f.bplNumber} name="patientBplNumber" />
              <FormTextArea label={t.f.otherBpl} name="otherBplMembers" />
              <FormField label={t.f.nationality} name="nationality" />
              <FormField label={t.f.religion} name="religion" />
              <FormField label={t.f.monthlyPension} name="monthlyPension" />
              <FormField label={t.f.monthlyFamilyIncome} name="patientFamilyIncome" required />
              <FormTextArea label={t.f.tempAddress} name="patientTemporaryAddress" required className="sm:col-span-2" />
              <FormTextArea label={t.f.permAddress} name="patientPermanentAddress" required className="sm:col-span-2" />
            </FormSection>

            {/* FAMILY MEMBERS */}
            <FormSection title={t.s5.title} subtitle={t.s5.subtitle}>
              <div className="sm:col-span-2 overflow-x-auto rounded-2xl border border-[#E5DDD4] bg-white">
                <div className="min-w-[760px]">
                  <div className="grid grid-cols-[38px_1.4fr_0.6fr_0.7fr_1fr_1fr_1.3fr] gap-2 border-b border-[#E5DDD4] bg-[#FFF8EF] px-4 py-3 text-[10px] font-black uppercase tracking-[0.08em] text-[#ED6439]">
                    {t.familyHeaders.map((header, index) => (
                      <span key={index}>{header}</span>
                    ))}
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
            <FormSection title={t.s6.title} subtitle={t.s6.subtitle}>
              <FormField label={t.f.ageDob} name="patientAgeDob" required />
              <FormSelect
                label={t.f.gender}
                name="patientGender"
                placeholder={t.select}
                options={genderValues.map((value, index) => ({ value, label: t.genderOptions[index] }))}
                required
              />
              <FormSelect
                label={t.f.maritalStatus}
                name="maritalStatus"
                placeholder={t.select}
                options={maritalValues.map((value, index) => ({ value, label: t.maritalOptions[index] }))}
              />
              <FormField label={t.f.diagnosis} name="diagnosis" required />
              <FormTextArea label={t.f.healthProblems} name="healthProblems" className="sm:col-span-2" />
              <FormTextArea label={t.f.medicines} name="medicines" className="sm:col-span-2" />
              <FormTextArea label={t.f.specialInstructions} name="specialInstructions" className="sm:col-span-2" />
              <FormField label={t.f.bloodGroup} name="bloodGroup" />
              <FormField label={t.f.allergies} name="allergies" />
              <FormField label={t.f.familyPhysician} name="familyPhysician" />
              <FormField label={t.f.familyPhysicianContact} name="familyPhysicianContact" />
              <FormField label={t.f.joiningDate} name="joiningDate" type="date" />
            </FormSection>

            {/* INCOME CERTIFICATE */}
            <FormSection title={t.s7.title} subtitle={t.s7.subtitle}>
              <FormField label={t.f.certNumber} name="incomeCertificateNumber" />
              <FormField label={t.f.issuedDate} name="incomeCertificateDate" type="date" />
              <FormField label={t.f.issuedBy} name="incomeCertificateIssuedBy" />
            </FormSection>

            {/* DOCUMENTS */}
            <FormSection title={t.s8.title} subtitle={t.s8.subtitle}>
              <FileField label={t.docs.medicalRecords} name="medicalRecords" />
              <FileField label={t.docs.referralLetter} name="referralLetter" />
              <FileField label={t.docs.aadhaarCard} name="aadhaarCard" />
              <FileField label={t.docs.rationCard} name="rationCard" />
              <FileField label={t.docs.ageProof} name="ageProof" />
              <FileField label={t.docs.incomeProof} name="incomeProof" />
              <FileField label={t.docs.bplCard} name="bplCard" />
              <FileField label={t.docs.ayushmanCard} name="ayushmanCard" />
            </FormSection>

            {/* DECLARATION */}
            <FormSection title={t.s9.title} subtitle={t.s9.subtitle}>
              <div className="sm:col-span-2 space-y-3">
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5DDD4] bg-white p-4 text-sm leading-6 text-[#526574]">
                  <input type="checkbox" name="applicantDeclaration" value="I confirm that the information provided is true and I agree to the admission process and terms." required className="mt-1 h-4 w-4 shrink-0 accent-[#ED6439]" />
                  <span>{t.declarationApplicant}</span>
                </label>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5DDD4] bg-white p-4 text-sm leading-6 text-[#526574]">
                  <input type="checkbox" name="guarantorDeclaration" value="Guarantor agrees to the admission terms." className="mt-1 h-4 w-4 shrink-0 accent-[#ED6439]" />
                  <span>{t.declarationGuarantor}</span>
                </label>
              </div>
            </FormSection>
          </div>

          {/* FORM FOOTER */}
          <div className="mt-9 rounded-2xl bg-[#263746] p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="font-bold text-white">{t.footerTitle}</p>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  {t.footerBody}
                </p>
              </div>
              <button
                type="submit"
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#ED6439] px-7 py-4 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-[#D9532F] sm:w-auto"
              >
                {t.submit}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)}
    </SiteLayout>
  );
}
const aboutModelItems = [
  "Person-centred dementia care based on each person’s needs, abilities, preferences and life story.",
  "Nature-based and therapeutic environments with gardens, walking paths, safe outdoor spaces and activity areas.",
  "Holistic care that combines modern medical care with appropriate complementary and traditional approaches.",
  "Rehabilitation and meaningful activities that promote physical, cognitive, emotional and social wellbeing.",
  "Technology-enabled care to strengthen safety, monitoring, communication and continuity of care.",
  "Palliative and supportive care focused on comfort, dignity and quality of life.",
  "Family and community engagement to reduce loneliness and strengthen social connections.",
];

const researchItems = [
  "Dementia care models and outcomes",
  "Caregiver support",
  "Technology and AI-enabled solutions",
  "Prevention and healthy ageing",
  "Innovative and holistic approaches to care",
  "Data and evidence-based practice",
];

const partnerItems = ["Care", "Training", "Research", "Technology", "Innovation", "Community Outreach", "Knowledge Sharing"];

const documentItems = [
  "Medical records and dementia diagnosis",
  "Aadhaar Card",
  "Ration Card",
  "Age proof",
  "Income proof",
  "BPL Card, if applicable",
  "Income Certificate issued by thex Tahsildar/Revenue Officer",
];

/* ============================================================
   ADMISSION FORM — LANGUAGE DATA (English / Kannada)
   NOTE: Submitted values (checkbox values, gender, marital
   status) always stay in English so the email body is English.
============================================================ */

type FormLang = "en" | "kn";

const reasonValues = [
  "Family is a BPL family and has a BPL Card",
  "Total family income is less than Rupees 5 Lac Per Annum",
  "No caregiver is available at home for continuous care",
  "Family members are elderly, sick or physically unfit to take care",
  "The proposed resident lives alone",
  "The proposed resident is neglected or at risk of neglect",
  "Significant behavioural and psychological symptoms are difficult for the family to manage",
  "The proposed resident requires 24 hour care, supervision and support because of Dementia",
];

const genderValues = ["Male", "Female", "Others"];

const maritalValues = ["Married", "Unmarried", "Widow", "Widower", "Separated", "Divorced"];

const formTranslations = {
  en: {
    brand: "Nightingales Smriti Gram",
    formTitle: "Application for Admission",
    formSubtitle: "Please complete the application below with the required details.",
    closeForm: "Close application form",
    beforeTitle: "Before you begin",
    beforeBody:
      "Please keep the patient’s medical, identity and income documents ready. Fields marked with * are required for submitting the application.",
    select: "Select",
    s1: {
      title: "1. Applicant / Guardian / Nominated Representative",
      subtitle: "The person submitting the application on behalf of the proposed resident.",
    },
    s2: {
      title: "2. Reason(s) for Admission",
      subtitle: "Select all reasons that apply to the proposed resident.",
    },
    s3: {
      title: "3. Details of Guarantor",
      subtitle: "Guarantor details required as part of the admission application.",
    },
    s4: {
      title: "4. Details of Patient / Proposed Resident",
      subtitle: "Personal, family and financial information of the person seeking admission.",
    },
    s5: {
      title: "5. Patient's Family Members",
      subtitle: "Add family members including the applicant. You may leave unused rows blank.",
    },
    s6: {
      title: "6. Medical Details of Patient",
      subtitle:
        "Please provide the medical information requested in the application. Attach supporting reports where applicable.",
    },
    s7: {
      title: "7. Income Certificate Details",
      subtitle: "Complete these fields if applicable, especially where a BPL card is not available.",
    },
    s8: {
      title: "8. Supporting Documents",
      subtitle:
        "Select the documents you have ready. The admission criteria lists these documents as supporting records for the application.",
    },
    s9: {
      title: "9. Declaration & Confirmation",
      subtitle:
        "Please confirm that the information supplied is true and that you agree to the admission process and terms applicable to the centre.",
    },
    f: {
      name: "Name",
      fatherSpouse: "Father's / Spouse's Name",
      occupation: "Occupation",
      phone: "Phone",
      mobile: "Mobile",
      email: "Email",
      pan: "PAN Number",
      aadhar: "Aadhar Number",
      relToResident: "Relationship to Proposed Resident",
      relToApplicant: "Relationship to Applicant",
      address: "Address",
      bplNumber: "BPL Card Number",
      annualIncome: "Total Annual Family Income",
      otherBpl: "Names of Other Members in BPL Card",
      nationality: "Nationality",
      religion: "Religion",
      monthlyPension: "Monthly Income / Pension (if any)",
      monthlyFamilyIncome: "Monthly Income of the Family",
      tempAddress: "Temporary Address",
      permAddress: "Permanent Address",
      ageDob: "Age / Date of Birth",
      gender: "Gender",
      maritalStatus: "Marital Status",
      diagnosis: "Diagnosis",
      healthProblems: "Health Problems, if any",
      medicines: "Medicines Prescribed and to be Administered",
      specialInstructions: "Special Instructions, if any",
      bloodGroup: "Blood Group",
      allergies: "Allergic To",
      familyPhysician: "Name of Family Physician",
      familyPhysicianContact: "Contact Details of Family Physician",
      joiningDate: "Preferable Date of Joining",
      certNumber: "Certificate Number",
      issuedDate: "Issued Date",
      issuedBy: "Issued By",
    },
    reasons: reasonValues,
    familyHeaders: ["#", "Name", "Age", "M/F", "Relationship", "Occupation", "Address / Email / Phone"],
    genderOptions: ["Male", "Female", "Others"],
    maritalOptions: ["Married", "Unmarried", "Widow", "Widower", "Separated", "Divorced"],
    docs: {
      medicalRecords: "Medical records and dementia diagnosis",
      referralLetter: "Referral letter",
      aadhaarCard: "Aadhaar Card",
      rationCard: "Ration Card",
      ageProof: "Age proof",
      incomeProof: "Income proof",
      bplCard: "BPL Card (if applicable)",
      ayushmanCard: "Ayushman Bharat Card (if available)",
    },
    declarationApplicant:
      "I confirm that the information provided is true and complete to the best of my knowledge, and I agree to the admission process and terms applicable to the centre.",
    declarationGuarantor:
      "I confirm that the guarantor information provided above is correct and that the guarantor agrees to the applicable admission terms.",
    footerTitle: "Ready to submit your application?",
    footerBody:
      "Please review all details before submitting. Your application will be prepared for Nightingales Medical Trust.",
    submit: "Submit Application",
  },
  kn: {
    brand: "ನೈಟಿಂಗೇಲ್ಸ್ ಸ್ಮೃತಿ ಗ್ರಾಮ",
    formTitle: "ಪ್ರವೇಶಕ್ಕಾಗಿ ಅರ್ಜಿ",
    formSubtitle: "ದಯವಿಟ್ಟು ಅಗತ್ಯ ವಿವರಗಳೊಂದಿಗೆ ಕೆಳಗಿನ ಅರ್ಜಿಯನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
    closeForm: "ಅರ್ಜಿ ನಮೂನೆಯನ್ನು ಮುಚ್ಚಿ",
    beforeTitle: "ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು",
    beforeBody:
      "ದಯವಿಟ್ಟು ರೋಗಿಯ ವೈದ್ಯಕೀಯ, ಗುರುತು ಮತ್ತು ಆದಾಯ ದಾಖಲೆಗಳನ್ನು ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ. * ಗುರುತಿರುವ ಕ್ಷೇತ್ರಗಳು ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಕಡ್ಡಾಯ.",
    select: "ಆಯ್ಕೆಮಾಡಿ",
    s1: {
      title: "1. ಅರ್ಜಿದಾರ / ಪಾಲಕ / ನಾಮನಿರ್ದೇಶಿತ ಪ್ರತಿನಿಧಿ",
      subtitle: "ಪ್ರಸ್ತಾವಿತ ನಿವಾಸಿಯ ಪರವಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸುತ್ತಿರುವ ವ್ಯಕ್ತಿ.",
    },
    s2: {
      title: "2. ಪ್ರವೇಶಕ್ಕೆ ಕಾರಣ(ಗಳು)",
      subtitle: "ಪ್ರಸ್ತಾವಿತ ನಿವಾಸಿಗೆ ಅನ್ವಯವಾಗುವ ಎಲ್ಲಾ ಕಾರಣಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    },
    s3: {
      title: "3. ಖಾತರಿದಾರರ ವಿವರಗಳು",
      subtitle: "ಪ್ರವೇಶ ಅರ್ಜಿಯ ಭಾಗವಾಗಿ ಖಾತರಿದಾರರ ವಿವರಗಳು ಅಗತ್ಯ.",
    },
    s4: {
      title: "4. ರೋಗಿ / ಪ್ರಸ್ತಾವಿತ ನಿವಾಸಿಯ ವಿವರಗಳು",
      subtitle: "ಪ್ರವೇಶ ಬಯಸುತ್ತಿರುವ ವ್ಯಕ್ತಿಯ ವೈಯಕ್ತಿಕ, ಕುಟುಂಬ ಮತ್ತು ಆರ್ಥಿಕ ಮಾಹಿತಿ.",
    },
    s5: {
      title: "5. ರೋಗಿಯ ಕುಟುಂಬ ಸದಸ್ಯರು",
      subtitle: "ಅರ್ಜಿದಾರರನ್ನು ಒಳಗೊಂಡಂತೆ ಕುಟುಂಬ ಸದಸ್ಯರನ್ನು ಸೇರಿಸಿ. ಬಳಸದ ಸಾಲುಗಳನ್ನು ಖಾಲಿ ಬಿಡಬಹುದು.",
    },
    s6: {
      title: "6. ರೋಗಿಯ ವೈದ್ಯಕೀಯ ವಿವರಗಳು",
      subtitle:
        "ಅರ್ಜಿಯಲ್ಲಿ ಕೇಳಲಾದ ವೈದ್ಯಕೀಯ ಮಾಹಿತಿಯನ್ನು ನೀಡಿ. ಅನ್ವಯವಾದರೆ ಸಹಾಯಕ ವರದಿಗಳನ್ನು ಲಗತ್ತಿಸಿ.",
    },
    s7: {
      title: "7. ಆದಾಯ ಪ್ರಮಾಣಪತ್ರದ ವಿವರಗಳು",
      subtitle: "ಅನ್ವಯವಾದರೆ, ವಿಶೇಷವಾಗಿ BPL ಕಾರ್ಡ್ ಇಲ್ಲದಿದ್ದರೆ, ಈ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
    },
    s8: {
      title: "8. ಸಹಾಯಕ ದಾಖಲೆಗಳು",
      subtitle:
        "ನಿಮ್ಮ ಬಳಿ ಸಿದ್ಧವಿರುವ ದಾಖಲೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಪ್ರವೇಶ ಮಾನದಂಡದಲ್ಲಿ ಈ ದಾಖಲೆಗಳನ್ನು ಅರ್ಜಿಗೆ ಸಹಾಯಕ ದಾಖಲೆಗಳಾಗಿ ಪಟ್ಟಿ ಮಾಡಲಾಗಿದೆ.",
    },
    s9: {
      title: "9. ಘೋಷಣೆ ಮತ್ತು ದೃಢೀಕರಣ",
      subtitle:
        "ನೀಡಿರುವ ಮಾಹಿತಿ ಸತ್ಯವಾಗಿದೆ ಮತ್ತು ಕೇಂದ್ರಕ್ಕೆ ಅನ್ವಯವಾಗುವ ಪ್ರವೇಶ ಪ್ರಕ್ರಿಯೆ ಹಾಗೂ ನಿಯಮಗಳಿಗೆ ನೀವು ಒಪ್ಪುತ್ತೀರಿ ಎಂದು ದೃಢೀಕರಿಸಿ.",
    },
    f: {
      name: "ಹೆಸರು",
      fatherSpouse: "ತಂದೆ / ಪತಿ / ಪತ್ನಿಯ ಹೆಸರು",
      occupation: "ವೃತ್ತಿ",
      phone: "ದೂರವಾಣಿ",
      mobile: "ಮೊಬೈಲ್",
      email: "ಇಮೇಲ್",
      pan: "ಪ್ಯಾನ್ ಸಂಖ್ಯೆ",
      aadhar: "ಆಧಾರ್ ಸಂಖ್ಯೆ",
      relToResident: "ಪ್ರಸ್ತಾವಿತ ನಿವಾಸಿಯೊಂದಿಗಿನ ಸಂಬಂಧ",
      relToApplicant: "ಅರ್ಜಿದಾರರೊಂದಿಗಿನ ಸಂಬಂಧ",
      address: "ವಿಳಾಸ",
      bplNumber: "BPL ಕಾರ್ಡ್ ಸಂಖ್ಯೆ",
      annualIncome: "ಕುಟುಂಬದ ಒಟ್ಟು ವಾರ್ಷಿಕ ಆದಾಯ",
      otherBpl: "BPL ಕಾರ್ಡ್‌ನಲ್ಲಿರುವ ಇತರ ಸದಸ್ಯರ ಹೆಸರುಗಳು",
      nationality: "ರಾಷ್ಟ್ರೀಯತೆ",
      religion: "ಧರ್ಮ",
      monthlyPension: "ಮಾಸಿಕ ಆದಾಯ / ಪಿಂಚಣಿ (ಇದ್ದರೆ)",
      monthlyFamilyIncome: "ಕುಟುಂಬದ ಮಾಸಿಕ ಆದಾಯ",
      tempAddress: "ತಾತ್ಕಾಲಿಕ ವಿಳಾಸ",
      permAddress: "ಶಾಶ್ವತ ವಿಳಾಸ",
      ageDob: "ವಯಸ್ಸು / ಜನ್ಮ ದಿನಾಂಕ",
      gender: "ಲಿಂಗ",
      maritalStatus: "ವೈವಾಹಿಕ ಸ್ಥಿತಿ",
      diagnosis: "ರೋಗನಿರ್ಣಯ",
      healthProblems: "ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳು, ಇದ್ದರೆ",
      medicines: "ಸೂಚಿಸಲಾದ ಮತ್ತು ನೀಡಬೇಕಾದ ಔಷಧಿಗಳು",
      specialInstructions: "ವಿಶೇಷ ಸೂಚನೆಗಳು, ಇದ್ದರೆ",
      bloodGroup: "ರಕ್ತದ ಗುಂಪು",
      allergies: "ಅಲರ್ಜಿ ಇರುವ ವಸ್ತುಗಳು",
      familyPhysician: "ಕುಟುಂಬ ವೈದ್ಯರ ಹೆಸರು",
      familyPhysicianContact: "ಕುಟುಂಬ ವೈದ್ಯರ ಸಂಪರ್ಕ ವಿವರಗಳು",
      joiningDate: "ಸೇರಲು ಇಚ್ಛಿಸುವ ದಿನಾಂಕ",
      certNumber: "ಪ್ರಮಾಣಪತ್ರ ಸಂಖ್ಯೆ",
      issuedDate: "ನೀಡಿದ ದಿನಾಂಕ",
      issuedBy: "ನೀಡಿದವರು",
    },
    reasons: [
      "ಕುಟುಂಬವು BPL ಕುಟುಂಬವಾಗಿದ್ದು BPL ಕಾರ್ಡ್ ಹೊಂದಿದೆ",
      "ಕುಟುಂಬದ ಒಟ್ಟು ಆದಾಯ ವಾರ್ಷಿಕ ₹5 ಲಕ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ",
      "ನಿರಂತರ ಆರೈಕೆಗಾಗಿ ಮನೆಯಲ್ಲಿ ಆರೈಕೆದಾರರು ಲಭ್ಯವಿಲ್ಲ",
      "ಕುಟುಂಬ ಸದಸ್ಯರು ವೃದ್ಧರು, ಅನಾರೋಗ್ಯದಲ್ಲಿರುವವರು ಅಥವಾ ಆರೈಕೆ ಮಾಡಲು ದೈಹಿಕವಾಗಿ ಅಸಮರ್ಥರು",
      "ಪ್ರಸ್ತಾವಿತ ನಿವಾಸಿ ಒಂಟಿಯಾಗಿ ವಾಸಿಸುತ್ತಿದ್ದಾರೆ",
      "ಪ್ರಸ್ತಾವಿತ ನಿವಾಸಿಯನ್ನು ನಿರ್ಲಕ್ಷಿಸಲಾಗಿದೆ ಅಥವಾ ನಿರ್ಲಕ್ಷ್ಯದ ಅಪಾಯದಲ್ಲಿದ್ದಾರೆ",
      "ಗಮನಾರ್ಹ ವರ್ತನೆ ಮತ್ತು ಮಾನಸಿಕ ಲಕ್ಷಣಗಳನ್ನು ಕುಟುಂಬಕ್ಕೆ ನಿಭಾಯಿಸಲು ಕಷ್ಟವಾಗಿದೆ",
      "ಬುದ್ಧಿಮಾಂದ್ಯತೆ (ಡಿಮೆನ್ಷಿಯಾ) ಕಾರಣ ಪ್ರಸ್ತಾವಿತ ನಿವಾಸಿಗೆ 24 ಗಂಟೆಗಳ ಆರೈಕೆ, ಮೇಲ್ವಿಚಾರಣೆ ಮತ್ತು ಬೆಂಬಲ ಅಗತ್ಯವಿದೆ",
    ],
    familyHeaders: ["#", "ಹೆಸರು", "ವಯಸ್ಸು", "ಪು/ಮ", "ಸಂಬಂಧ", "ವೃತ್ತಿ", "ವಿಳಾಸ / ಇಮೇಲ್ / ಫೋನ್"],
    genderOptions: ["ಪುರುಷ", "ಮಹಿಳೆ", "ಇತರೆ"],
    maritalOptions: ["ವಿವಾಹಿತ", "ಅವಿವಾಹಿತ", "ವಿಧವೆ", "ವಿಧುರ", "ಬೇರ್ಪಟ್ಟವರು", "ವಿಚ್ಛೇದಿತ"],
    docs: {
      medicalRecords: "ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳು ಮತ್ತು ಬುದ್ಧಿಮಾಂದ್ಯತೆಯ ರೋಗನಿರ್ಣಯ",
      referralLetter: "ಶಿಫಾರಸು ಪತ್ರ",
      aadhaarCard: "ಆಧಾರ್ ಕಾರ್ಡ್",
      rationCard: "ಪಡಿತರ ಚೀಟಿ",
      ageProof: "ವಯಸ್ಸಿನ ಪುರಾವೆ",
      incomeProof: "ಆದಾಯದ ಪುರಾವೆ",
      bplCard: "BPL ಕಾರ್ಡ್ (ಅನ್ವಯವಾದರೆ)",
      ayushmanCard: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಕಾರ್ಡ್ (ಇದ್ದರೆ)",
    },
    declarationApplicant:
      "ನೀಡಿರುವ ಮಾಹಿತಿಯು ನನ್ನ ಜ್ಞಾನದ ಮಟ್ಟಿಗೆ ಸತ್ಯ ಮತ್ತು ಸಂಪೂರ್ಣವಾಗಿದೆ ಎಂದು ನಾನು ದೃಢೀಕರಿಸುತ್ತೇನೆ ಮತ್ತು ಕೇಂದ್ರಕ್ಕೆ ಅನ್ವಯವಾಗುವ ಪ್ರವೇಶ ಪ್ರಕ್ರಿಯೆ ಹಾಗೂ ನಿಯಮಗಳಿಗೆ ಒಪ್ಪುತ್ತೇನೆ.",
    declarationGuarantor:
      "ಮೇಲೆ ನೀಡಿರುವ ಖಾತರಿದಾರರ ಮಾಹಿತಿ ಸರಿಯಾಗಿದೆ ಮತ್ತು ಖಾತರಿದಾರರು ಅನ್ವಯವಾಗುವ ಪ್ರವೇಶ ನಿಯಮಗಳಿಗೆ ಒಪ್ಪುತ್ತಾರೆ ಎಂದು ನಾನು ದೃಢೀಕರಿಸುತ್ತೇನೆ.",
    footerTitle: "ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    footerBody:
      "ಸಲ್ಲಿಸುವ ಮೊದಲು ದಯವಿಟ್ಟು ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ. ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ನೈಟಿಂಗೇಲ್ಸ್ ಮೆಡಿಕಲ್ ಟ್ರಸ್ಟ್‌ಗಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾಗುವುದು.",
    submit: "ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
  },
};

function SectionHeading({ eyebrow, title, compact = false }: { eyebrow: string; title: string; compact?: boolean }) {
  return (
    <Reveal>
      <div className={compact ? "max-w-4xl" : "max-w-5xl"}>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ED6439]">{eyebrow}</p>
        <h2 className={`mt-3 font-display font-extrabold leading-[1.08] tracking-[-0.03em] text-[#263746] ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl lg:text-[3rem]"}`}>{title}</h2>
      </div>
    </Reveal>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return <div className="rounded-2xl bg-white/12 p-4"><p className="text-2xl font-extrabold">{value}</p><p className="mt-1 text-xs font-bold uppercase tracking-wide text-white/70">{label}</p></div>;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ED6439]" /><span>{children}</span></li>;
}

function FacilityCard({ number, icon: Icon, title, children }: { number: string; icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <article className="h-full overflow-hidden rounded-[2rem] border border-[#263746]/10 bg-white shadow-[0_18px_50px_-25px_rgba(38,55,70,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_-25px_rgba(237,100,57,0.22)]">
        <div className="flex items-center justify-between border-b border-[#263746]/8 bg-[#FFF8EF] px-6 py-5">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439]"><Icon className="h-5 w-5" /></div>
          <span className="font-display text-sm font-extrabold tracking-[0.12em] text-[#ED6439]">{number}</span>
        </div>
        <div className="p-6 sm:p-7">
          <h3 className="font-display text-xl font-extrabold leading-tight text-[#263746] sm:text-2xl">{title}</h3>
          <div className="mt-5 text-[14.5px] leading-6 text-[#526574] sm:text-[15px] sm:leading-7">{children}</div>
        </div>
      </article>
    </Reveal>
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
  placeholder = "Select",
  required = false,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  placeholder?: string;
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
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
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