import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

import internationalResearch from "@/assets/recognitions/international-research-award.webp";
import vayoshreshtha from "@/assets/recognitions/vayoshreshtha-samman.webp";
import iahsa from "@/assets/recognitions/iahsa-excellence.webp";
import rajyotsava from "@/assets/recognitions/rajyotsava-prashasthi.webp";
import nammaBengaluru from "@/assets/recognitions/nammabengaluru-award.webp";
import paulHarris from "@/assets/recognitions/paul-harris-fellowship.webp";
import rotaryPioneer from "@/assets/recognitions/rotary-pioneer-award.webp";
import ipsAward from "@/assets/recognitions/ips-kc-award.webp";
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

export function Recognitions() {
  const recognitionSliderRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);

const scroll = (direction: "left" | "right") => {
  const slider = recognitionSliderRef.current;

  if (!slider) return;

  // Pause auto-scroll temporarily
  isPausedRef.current = true;

  const scrollAmount = 380;

  slider.scrollTo({
    left:
      slider.scrollLeft +
      (direction === "right" ? scrollAmount : -scrollAmount),
    behavior: "smooth",
  });

  // Resume auto-scroll after manual scrolling
  window.setTimeout(() => {
    isPausedRef.current = false;
  }, 1500);
};

useEffect(() => {
  const slider = recognitionSliderRef.current;

  if (!slider) return;

  let animationFrame: number;
  let isPaused = false;

  const speed = 1.6;

  const animate = () => {
    if (!isPaused && !isPausedRef.current) {
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
      id="recognitions"
      className="relative overflow-hidden bg-[#ED6439] py-16 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          SECTION HEADER
          ===================================================== */}
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
  Our work in elder care, dementia care and community service has been
  recognized by institutions and organizations across India and internationally.
</p>

          
        </div>
      </div>

      {/* =====================================================
          CAROUSEL
          ===================================================== */}
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
          ref={recognitionSliderRef}
          className="
            flex
            gap-5
            overflow-x-auto
            px-[calc((100vw-285px)/2)]
            pb-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:gap-6
            sm:px-[calc((100vw-310px)/2)]

            lg:px-[max(5rem,calc((100vw-1280px)/2))]
          "
        >
          {[...RECOGNITIONS, ...RECOGNITIONS].map((recognition, index) => (
            <article
              key={`${recognition.title}-${index}`}
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
                  className="
                    max-h-full
                    max-w-full
                    object-contain
                  "
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