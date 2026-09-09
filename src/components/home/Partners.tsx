import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/site/Reveal";

import partner1 from "@/assets/partners/1.webp";
import partner2 from "@/assets/partners/2.webp";
import partner3 from "@/assets/partners/3.webp";
import partner4 from "@/assets/partners/4.webp";
import partner5 from "@/assets/partners/5.webp";
import partner6 from "@/assets/partners/6.webp";
import partner7 from "@/assets/partners/7.webp";
import partner8 from "@/assets/partners/8.webp";
import partner9 from "@/assets/partners/9.webp";
import partner10 from "@/assets/partners/10.webp";
import partner11 from "@/assets/partners/11.webp";
import partner12 from "@/assets/partners/12.webp";
import partner13 from "@/assets/partners/13.webp";
import partner14 from "@/assets/partners/14.webp";
import partner15 from "@/assets/partners/15.webp";
import partner16 from "@/assets/partners/16.webp";
import partner17 from "@/assets/partners/17.webp";
import partner18 from "@/assets/partners/18.webp";
import partner19 from "@/assets/partners/19.webp";

const PARTNERS = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
  partner15,
  partner16,
  partner17,
  partner18,
  partner19,
];

export function Partners() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollPartners = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollAmount = slider.clientWidth * 0.75;

    slider.scrollBy({
      left:
        direction === "right"
          ? scrollAmount
          : -scrollAmount,
      behavior: "smooth",
    });
  };

  /* =========================================================
     AUTO SCROLL
     ========================================================= */

  useEffect(() => {
  const slider = sliderRef.current;

  if (!slider) return;

  let animationFrame: number;
  let isPaused = false;

  const speed = 1.2;

  const animate = () => {
    if (!isPaused) {
      slider.scrollLeft += speed;

      const halfScrollWidth = slider.scrollWidth / 2;

      if (slider.scrollLeft >= halfScrollWidth) {
        slider.scrollLeft = 0;
      }
    }

    animationFrame = requestAnimationFrame(animate);
  };

  const pause = () => {
    isPaused = true;
  };

  const resume = () => {
    isPaused = false;
  };

  animationFrame = requestAnimationFrame(animate);

  slider.addEventListener("mouseenter", pause);
  slider.addEventListener("mouseleave", resume);
  slider.addEventListener("touchstart", pause, { passive: true });
  slider.addEventListener("touchend", resume, { passive: true });

  return () => {
    cancelAnimationFrame(animationFrame);

    slider.removeEventListener("mouseenter", pause);
    slider.removeEventListener("mouseleave", resume);
    slider.removeEventListener("touchstart", pause);
    slider.removeEventListener("touchend", resume);
  };
}, []);

  return (
    <section
      aria-label="Our partners"
      className="
        relative
        overflow-hidden
        border-y
        border-[#ED6439]/10
        bg-[#FFF8F1]
        py-16
        sm:py-20
        lg:py-24
      "
    >

      {/* =====================================================
          SOFT BACKGROUND DECORATION
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-[#ED6439]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-80
          w-80
          rounded-full
          bg-[#F5A623]/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
            ===================================================== */}

        <Reveal className="mx-auto max-w-4xl text-center">

          {/* SMALL HEADING */}

          <div className="mb-5 flex items-center justify-center gap-3">

            <span
              className="
                h-[3px]
                w-10
                rounded-full
                bg-[#ED6439]
                sm:w-12
              "
            />

            <span
  className="
    text-base
    font-bold
    uppercase
    tracking-[0.2em]
    text-[#ED6439]
    sm:text-lg
    lg:text-xl
  "
>
  Our Partners
</span>

            <span
              className="
                h-[3px]
                w-10
                rounded-full
                bg-[#ED6439]
                sm:w-12
              "
            />

          </div>


          {/* MAIN HEADING */}

          <h2
            className="
              font-display
              text-3xl
              font-extrabold
              leading-tight
              text-ink
              sm:text-4xl
              lg:text-[3rem]
            "
          >
            Stronger Together,{" "}
            <span className="text-[#ED6439]">
              Making a Difference
            </span>
          </h2>


          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-4xl
              text-[15px]
              leading-relaxed
              text-muted-foreground
              sm:text-base
              lg:text-[17px]
            "
          >
            As a not-for-profit organization, Nightingales Medical Trust
            depends on the support of like-minded and socially conscious
            individuals, corporates and groups of people to assist us in
            our work in the care of the aged and persons with Dementia.
          </p>

        </Reveal>


        {/* =====================================================
    PARTNER LOGOS
    ===================================================== */}

<Reveal
  delay={120}
  className="
    relative
    left-1/2
    mt-12
    w-screen
    -translate-x-1/2
    sm:mt-14
    lg:mt-16
  "
>
  <div
  className="
    relative
    w-full
    overflow-hidden
    rounded-3xl
    border
    border-[#ED6439]/10
    bg-white
    p-5
    shadow-[0_20px_55px_rgba(0,0,0,0.07)]
    sm:p-7
    lg:p-9
  "
>

    {/* TOP ACCENT */}
    <div
      className="
        absolute
        left-1/2
        top-0
        h-[3px]
        w-20
        -translate-x-1/2
        rounded-b-full
        bg-[#ED6439]
        sm:w-24
      "
    />

    {/* LEFT ARROW */}
    <button
      type="button"
      onClick={() => scrollPartners("left")}
      aria-label="Previous partners"
      className="
        absolute
        left-3
        top-1/2
        z-20
        grid
        h-10
        w-10
        -translate-y-1/2
        place-items-center
        rounded-full
        border
        border-[#ED6439]/15
        bg-white
        text-[#ED6439]
        shadow-[0_8px_22px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:bg-[#ED6439]
        hover:text-white
        sm:left-5
      "
    >
      <ChevronLeft
        className="h-5 w-5"
        strokeWidth={2.2}
      />
    </button>

    {/* RIGHT ARROW */}
    <button
      type="button"
      onClick={() => scrollPartners("right")}
      aria-label="Next partners"
      className="
        absolute
        right-3
        top-1/2
        z-20
        grid
        h-10
        w-10
        -translate-y-1/2
        place-items-center
        rounded-full
        border
        border-[#ED6439]/15
        bg-white
        text-[#ED6439]
        shadow-[0_8px_22px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:bg-[#ED6439]
        hover:text-white
        sm:right-5
      "
    >
      <ChevronRight
        className="h-5 w-5"
        strokeWidth={2.2}
      />
    </button>

    {/* HORIZONTAL SCROLL AREA */}
    <div
      ref={sliderRef}
      className="
        flex
        gap-4
        overflow-x-auto
        scroll-smooth
        px-10
        py-5
        [scrollbar-width:none]
        sm:gap-5
        sm:px-12
        lg:gap-6
        [&::-webkit-scrollbar]:hidden
      "
    >
      {[...PARTNERS, ...PARTNERS].map((logo, index) => (
        <div
          key={`${index}-${logo}`}
          className="
            group
            flex
            h-32
            min-w-[170px]
            snap-start
            items-center
            justify-center
            rounded-2xl
            border
            border-[#E9E3DD]
            bg-white
            px-5
            py-4
            shadow-[0_6px_20px_rgba(0,0,0,0.04)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#ED6439]/25
            hover:shadow-[0_14px_30px_rgba(237,100,57,0.12)]
            sm:h-36
            sm:min-w-[205px]
            lg:h-40
            lg:min-w-[220px]
          "
        >
          <img
            src={logo}
            alt={`Nightingales Medical Trust partner ${index + 1}`}
            loading="lazy"
            className="
              max-h-[92px]
              max-w-[170px]
              object-contain
              opacity-90
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:opacity-100
            "
          />
        </div>
      ))}
    </div>

  </div>
</Reveal>

      </div>
    </section>
  );
}