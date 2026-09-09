import heroImage1 from "@/assets/heroImage1.webp";
import heroImage2 from "@/assets/heroImage2.webp";
import heroImage3 from "@/assets/heroImage3.webp";
import heroImage4 from "@/assets/heroImage4.webp";

import aboutImage from "@/assets/aboutImage.webp";

import { ArrowUpRight, HeartHandshake } from "lucide-react";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    src: heroImage1,
    alt: "Nightingales Medical Trust — elder care",
  },
  {
    src: heroImage2,
    alt: "Nightingales Medical Trust — elder care",
  },
  {
    src: heroImage3,
    alt: "Nightingales Medical Trust — elder care",
  },
  {
    src: heroImage4,
    alt: "Nightingales Medical Trust — elder care",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="w-full bg-background">

     {/* =========================================================
          HERO BANNER
          ========================================================= */}
<div
  className="
    relative
    w-full
    overflow-hidden
    bg-[#d98b68]

    /* MOBILE */
    min-h-[520px]

    /* TABLET */
    sm:min-h-[500px]

    /* DESKTOP — ORIGINAL HEIGHTS */
    md:h-[510px]
    md:min-h-0
    lg:h-[520px]
    xl:h-[560px]
  "
>

  {/* =========================================================
      BACKGROUND PHOTO SLIDER
      ========================================================= */}
  {heroSlides.map((slide, index) => (
    <div
      key={slide.src}
      className={`
        absolute
        inset-0
        overflow-hidden
        transition-opacity
        duration-700

        ${
          index === activeSlide
            ? "z-[1] opacity-100"
            : "z-0 opacity-0"
        }
      `}
    >
      <img
        src={slide.src}
        alt={slide.alt}
        width={2076}
        height={758}
        className="
  absolute
  left-0
  top-0
  h-full
  w-full

  /* MOBILE — show the complete photo without cropping */
  object-contain
  object-center

  /* TABLET */
  sm:object-contain
  sm:object-center

  /* DESKTOP — keep original behaviour */
  md:object-contain
  md:object-center

  transition-transform
  duration-700
"
      />
    </div>
  ))}

 

  {/* =========================================================
      BOTTOM DARK GRADIENT
      ========================================================= */}
  {/* <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      z-[2]
      h-3/4
      bg-gradient-to-t
      from-black/45
      via-black/10
      to-transparent
    "
  /> */}

  {/* =========================================================
      PREVIOUS ARROW
      ========================================================= */}
  <button
    type="button"
    aria-label="Previous slide"
    onClick={() =>
      setActiveSlide(
        (current) =>
          (current - 1 + heroSlides.length) % heroSlides.length
      )
    }
    className="
      absolute
      left-3
      top-1/2
      z-30
      flex
      h-9
      w-9
      -translate-y-1/2
      items-center
      justify-center
      rounded-full
      border
      border-white/40
      bg-black/25
      text-2xl
      leading-none
      text-white
      backdrop-blur-sm
      transition-all
      duration-300
      hover:bg-black/50

      sm:left-6
      sm:h-10
      sm:w-10
    "
  >
    ‹
  </button>

  {/* =========================================================
      NEXT ARROW
      ========================================================= */}
  <button
    type="button"
    aria-label="Next slide"
    onClick={() =>
      setActiveSlide(
        (current) => (current + 1) % heroSlides.length
      )
    }
    className="
      absolute
      right-3
      top-1/2
      z-30
      flex
      h-9
      w-9
      -translate-y-1/2
      items-center
      justify-center
      rounded-full
      border
      border-white/40
      bg-black/25
      text-2xl
      leading-none
      text-white
      backdrop-blur-sm
      transition-all
      duration-300
      hover:bg-black/50

      sm:right-6
      sm:h-10
      sm:w-10
    "
  >
    ›
  </button>

  {/* =========================================================
      SLIDE DOTS
      ========================================================= */}
  <div
    className="
      absolute
      bottom-4
      left-1/2
      z-30
      flex
      -translate-x-1/2
      items-center
      gap-2

      sm:bottom-5
    "
  >
    {heroSlides.map((_, index) => (
      <button
        key={index}
        type="button"
        aria-label={`Go to slide ${index + 1}`}
        aria-current={index === activeSlide ? "true" : undefined}
        onClick={() => setActiveSlide(index)}
        className={`
          h-2.5
          rounded-full
          transition-all
          duration-300

          ${
            index === activeSlide
              ? "w-7 bg-white"
              : "w-2.5 bg-white/55 hover:bg-white/85"
          }
        `}
      />
    ))}
  </div>

 {/* =========================================================
    HERO HIGHLIGHTS
    ========================================================= */}
<div
  className="
    absolute
    inset-x-0
    top-4
    z-20
    flex
    flex-col
    gap-3
    px-4

    sm:top-7
    sm:px-8

    md:flex-row
    md:items-start
    md:justify-between
    md:gap-4
    md:px-10

    lg:top-10
    lg:px-16

    xl:top-12
    xl:px-20
  "
>
  {/* =========================================================
      LEFT — 25+ YEARS OF SERVICE
      ========================================================= */}
  <div
    className="
      flex
      w-fit
      items-center
      gap-2.5
      rounded-2xl
      border
      border-white/30
      bg-white/90
      px-3
      py-2.5
      shadow-[0_12px_30px_rgba(0,0,0,0.18)]
      backdrop-blur-md

      sm:gap-3
      sm:px-5
      sm:py-3.5
    "
  >
    <span
      className="
        flex
        h-8
        w-8
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#ED6439]
        text-[11px]
        font-extrabold
        text-white

        sm:h-10
        sm:w-10
        sm:text-sm
      "
    >
      25+
    </span>

    <div>
      <p
        className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-[#ED6439]

          sm:text-[11px]
          sm:tracking-[0.14em]
        "
      >
        Years of
      </p>

      <p
        className="
          text-[13px]
          font-extrabold
          leading-tight
          text-[#24333B]

          sm:text-[15px]
        "
      >
        Service
      </p>
    </div>
  </div>

  {/* =========================================================
      RIGHT — 24 HOUR HELPLINE
      ========================================================= */}
  <div
    className="
      flex
      w-fit
      items-center
      gap-2.5
      self-end
      rounded-2xl
      border
      border-white/30
      bg-white/90
      px-3
      py-2.5
      text-right
      shadow-[0_12px_30px_rgba(0,0,0,0.18)]
      backdrop-blur-md

      sm:gap-3
      sm:px-5
      sm:py-3.5

      md:self-auto
    "
  >
    <div>
      <p
        className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-[#ED6439]

          sm:text-[11px]
          sm:tracking-[0.14em]
        "
      >
        24 Hour Helpline
      </p>

      <a
  href="tel:08042426565"
  className="
    block
    text-[13px]
    font-extrabold
    leading-tight
    text-[#24333B]
    underline-offset-2
    transition-colors
    hover:text-[#ED6439]

    sm:text-[15px]
  "
  aria-label="Call 24 Hour Helpline at 080 42426565"
>
  080 42426565
</a>
    </div>

    <span
      className="
        flex
        h-8
        w-8
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#ED6439]
        text-[11px]
        font-extrabold
        text-white

        sm:h-10
        sm:w-10
        sm:text-sm
      "
    >
      24
    </span>
  </div>
</div>

  {/* =========================================================
      BANNER TEXT
      ========================================================= */}
  <div
    className="
      absolute
      inset-x-0
      bottom-0
      z-20
      px-4
      pb-9

      sm:px-8
      sm:pb-11

      md:px-10
      md:pb-12

      lg:px-16
      lg:pb-14
    "
  >

    <div
      className="
        flex
        max-w-5xl
        items-start
        gap-3

        sm:gap-5
      "
    >

      <span
        className="
          mt-1
          h-[82px]
          w-[3px]
          shrink-0
          rounded-full
          bg-[#ED6439]

          sm:h-[105px]
          sm:w-1

          lg:h-[118px]
        "
      />

      <p
        className="
          max-w-4xl
          font-display
          text-[1rem]
          font-extrabold
          leading-[1.18]
          tracking-[-0.01em]
          text-white
          drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]

          sm:text-[1.17rem]

          md:text-[1.65rem]

          lg:text-[2.18rem]
          lg:leading-[1.18]
        "
      >
        A Not-For-Profit Organisation Dedicated To The Well-being Of{" "}
        <span className="text-[#FFFFFF]">
          Older Persons And Those With Dementia.
        </span>
      </p>

    </div>
  </div>

</div>

      {/* =========================================================
          NIGHTINGALES MEDICAL TRUST SECTION
          ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-dawn py-16 sm:py-20 lg:py-28">

        {/* Decorative warm glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-warm opacity-10 blur-3xl" />

        {/* Decorative violet glow */}
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-gradient-violet opacity-10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">

          {/* =====================================================
              LEFT — NIGHTINGALES MEDICAL TRUST
              ===================================================== */}
          <div className="animate-fade-up">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-[#E85A3F] to-[#F5A623]" />

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#E85A3F] sm:text-base sm:tracking-[0.2em] lg:text-lg lg:tracking-[0.22em]">
                About Nightingales Medical Trust
              </span>
            </div>

            {/* HEADING */}
            <h2 className="font-display font-extrabold leading-[1.1] text-ink">
              <span className="block text-[2rem] leading-[1.15] sm:whitespace-nowrap sm:text-[2.4rem] lg:text-[2.8rem]">
                Compassionate and Innovative
              </span>

              <span className="mt-1 block text-[1.7rem] leading-[1.15] text-[#ED6439] sm:text-[2rem] lg:text-[2.4rem]">
                Age Care Solutions
              </span>
            </h2>

          {/* =================================================
      INTRO CONTENT
      ================================================= */}
<div className="mt-8 max-w-2xl space-y-6 border-l-2 border-[#E85A3F]/15 pl-6 text-base leading-relaxed text-muted-foreground sm:text-[16px]">

  <p>
    Established in 1998, Nightingales Medical Trust (NMT) is one of
    India's leading not-for-profit organisations committed to
    enhancing the quality of life of older persons and people with
    dementia.
  </p>

  <p>
    For over two decades, NMT has pioneered innovative, holistic,
    and person-centred models of care that promote healthy, active,
    dignified and meaningful ageing. Our comprehensive approach
    addresses not only the physical health needs of older persons
    but also their emotional, psychological, social, and economic
    well-being, serving elders across all socio-economic
    backgrounds.
  </p>

  {/* CLIENT REQUESTED PARAGRAPH */}
  <p>
    Through a wide spectrum of services including dementia care,
    active ageing initiatives, residential care, day care, programmes
    for the marginalized, helplines, livelihood programmes, caregiver
    training, capacity building and advocacy, we strive to empower
    older persons to live with dignity, independence, and purpose.
  </p>

  <p>
    As we look ahead, our commitment is to develop scalable,
    compassionate and affordable models of age care that can serve
    as national benchmarks, influence public policies, strengthen
    communities and help shape a global transformation in how
    ageing is experienced with dignity and compassion.
  </p>

  {/* =================================================
      CLIENT REQUESTED ACTION BUTTONS
      ================================================= */}
  <div className="flex flex-wrap items-center gap-3.5 pt-3">

    {/* EXPLORE SERVICES */}
    <a
      href="/services"
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ED6439] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(237,100,57,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ED6439] hover:shadow-[0_14px_36px_rgba(237,100,57,0.42)]"
    >
      Explore Services

      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2.2}
      />
    </a>

    {/* DONATE */}
<a
  href="/get-involved#donate"
  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ED6439] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(237,100,57,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ED6439] hover:shadow-[0_14px_36px_rgba(237,100,57,0.42)]"
>
  Donate

  <ArrowUpRight
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    strokeWidth={2.2}
  />
</a>

    {/* GET IN TOUCH */}
    <a
      href="/contact"
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ED6439] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(237,100,57,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ED6439] hover:shadow-[0_14px_36px_rgba(237,100,57,0.42)]"
    >
      Get in Touch

      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2.2}
      />
    </a>

  </div>

</div>

          </div>

          {/* =====================================================
              RIGHT — EXISTING IMAGE
              ===================================================== */}
          <div className="relative -translate-y-4 animate-fade-up [animation-delay:150ms]">

            <div className="overflow-hidden shadow-[0_12px_35px_rgba(232,90,63,0.28)]">

              <img
                src={aboutImage}
                alt="Nightingales Medical Trust elder care"
                width={1600}
                height={1000}
                className="
                  h-auto
                  max-h-[560px]
                  w-full
                  object-contain
                  object-center
                "
              />

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          TEXT SHINE ANIMATION
          ========================================================= */}
      <style>{`
        @keyframes shine {
          0% {
            background-position: 0% center;
          }

          100% {
            background-position: 200% center;
          }
        }
      `}</style>

    </section>
  );
}