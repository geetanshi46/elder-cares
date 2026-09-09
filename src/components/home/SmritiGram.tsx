import { useState } from "react";
import { PlayCircle, ArrowUpRight, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import smritiImage from "@/assets/smriti-gram.webp";
import { Reveal } from "@/components/site/Reveal";

export function SmritiGram() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#FFF8F2] py-16 sm:py-20 lg:py-24">

      {/* =========================================================
          BACKGROUND DECORATION
          ========================================================= */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#F5A623]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#ED6439]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            SECTION INTRO
            ========================================================= */}
        <Reveal>
          <div className="mb-10 text-center sm:mb-12">

            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#ED6439]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#ED6439]">
                Featured Project
              </span>

              <span className="h-[3px] w-10 rounded-full bg-[#F5A623]" />
            </div>

            <h2 className="font-display text-3xl font-extrabold leading-tight text-[#24333B] sm:text-4xl lg:text-5xl">
              Nightingales{" "}
              <span className="text-[#ED6439]">
                Smriti Gram
              </span>
            </h2>

          </div>
        </Reveal>


        {/* =========================================================
            MAIN SMRITI GRAM CARD
            ========================================================= */}
        <Reveal delay={100}>

          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-[#ED6439]/10
              bg-white
              shadow-[0_25px_70px_-30px_rgba(80,50,30,0.28)]
            "
          >

            {/* TOP ACCENT */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#ED6439] via-[#F5A623] to-[#ED6439]" />


            <div className="grid lg:grid-cols-[1.05fr_1fr]">

              {/* =====================================================
                  IMAGE
                  ===================================================== */}
              <div
                className="
                  relative
                  flex
                  min-h-[300px]
                  items-center
                  justify-center
                  overflow-hidden
                  bg-[#F5F1EC]
                  sm:min-h-[400px]
                  lg:min-h-[560px]
                "
              >

                <img
                  src={smritiImage}
                  alt="Nightingales Smriti Gram"
                  width={1600}
                  height={1008}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-contain
                    object-center
                  "
                />

              </div>


              {/* =====================================================
                  CONTENT
                  ===================================================== */}
              <div
                className="
                  flex
                  flex-col
                  justify-center
                  px-6
                  py-10
                  sm:px-10
                  sm:py-12
                  lg:px-14
                  lg:py-16
                  xl:px-16
                "
              >

                {/* EYEBROW */}
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#ED6439]
                    sm:text-sm
                  "
                >
                  A New Model for Dementia Care
                </span>


                {/* HEADING */}
                <h3
                  className="
                    mt-3
                    font-display
                    text-4xl
                    font-extrabold
                    leading-[1.02]
                    text-[#24333B]
                    sm:text-5xl
                    lg:text-[3.4rem]
                  "
                >
                  NIGHTINGALES{" "}
                  <span className="block text-[#ED6439]">
                    SMRITI GRAM
                  </span>
                </h3>


                {/* DIVIDER */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-[3px] w-12 rounded-full bg-[#ED6439]" />

                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5A623]" />

                  <span className="h-px w-16 bg-[#ED6439]/20" />
                </div>


                {/* DESCRIPTION */}
                <div
                  className="
                    mt-7
                    space-y-5
                    text-[15px]
                    leading-[1.8]
                    text-[#52636D]
                    sm:text-[15.5px]
                  "
                >

                  <p>
                    A national model for dementia care, Smriti Gram is being
                    developed near Doddaballapur, one hour drive from Yelhanka,
                    Bengaluru. Drawing on nearly three decades of experience,
                    the first phase, expected to be operational by October
                    2026, will include a 100-bed residential dementia care
                    facility exclusively for economically marginalized
                    individuals, along with a training academy and a research
                    and innovation hub.
                  </p>

                  <p>
                    Nightingales Smriti Gram will pioneer the integration of
                    evidence-based Indian systems of medicine with modern
                    allopathic care to explore holistic approaches that enhance
                    the quality of dementia care.
                  </p>

                </div>


                {/* LEARN MORE */}
                <div className="mt-8">

                  <Link
                    to="/smriti-gram"
                    className="
                      group/learn
                      inline-flex
                      items-center
                      gap-2
                      rounded-sm
                      bg-[#ED6439]
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_10px_25px_rgba(237,100,57,0.22)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#D9532E]
                      hover:shadow-[0_15px_35px_rgba(237,100,57,0.3)]
                    "
                  >
                    Learn More

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover/learn:translate-x-0.5
                        group-hover/learn:-translate-y-0.5
                      "
                      strokeWidth={2.3}
                    />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </Reveal>


        {/* =========================================================
            SHORT VIDEO SECTION
            ========================================================= */}
        <Reveal delay={200}>

          <div
            className="
              mt-8
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
                py-8
                sm:px-10
                sm:py-9
                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:px-12
              "
            >

              {/* =====================================================
                  VIDEO TEXT
                  ===================================================== */}
              <div className="min-w-0">

                <div className="mb-2 flex items-center gap-3">
                  <span className="h-[2px] w-8 rounded-full bg-[#ED6439]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED6439]">
                    Short Video
                  </span>
                </div>

                <h3
                  className="
                    font-display
                    text-2xl
                    font-extrabold
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


              {/* =====================================================
                  VIDEO THUMBNAIL CARD
                  ===================================================== */}
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

    </section>
  );
}