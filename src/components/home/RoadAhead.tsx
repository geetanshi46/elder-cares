import { Compass, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const FOCUS_AREAS = [
  "Rural elder care",
  "More homes for homeless elders",
  "Expansion of dementia care services",
  "Strengthening support for marginalized elders",
  "Enhanced skill development and job placement initiatives for elders",
  "Research and Innovation hub",
];

export function RoadAhead() {
  return (
    <section
      id="road-ahead"
      className="
        relative
        overflow-hidden
        bg-[#FFF4D9]
        py-20
        lg:py-28
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
          ========================================================= */}

      {/* Soft golden glow — top left */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-24
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-[#E8A22F]/12
          blur-3xl
        "
      />

      {/* Soft orange glow — bottom right */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-[#E85A3F]/8
          blur-3xl
        "
      />

      {/* Center subtle glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#E8A22F]/7
          blur-3xl
        "
      />

      {/* =========================================================
          SECTION SEPARATOR
          ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-1
          bg-gradient-to-r
          from-transparent
          via-[#E8A22F]
          to-transparent
          opacity-70
        "
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HEADER
            ========================================================= */}

        <Reveal className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}

          {/* <span
            className="
              inline-flex
              items-center
              gap-2
              border
              border-[#E8A22F]/30
              bg-white/70
              px-4
              py-2
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#B66F00]
              shadow-[0_8px_25px_rgba(232,162,47,0.12)]
              backdrop-blur-sm
            "
          >
            <span
              className="
                grid
                h-6
                w-6
                place-items-center
                rounded-full
                bg-[#E8A22F]
                text-white
                shadow-[0_4px_12px_rgba(232,162,47,0.30)]
              "
            >
              <Compass
                className="h-3.5 w-3.5"
                strokeWidth={2.2}
              />
            </span>

            THE ROAD AHEAD
          </span> */}


          {/* Heading */}

          <h2
            className="
              mt-6
              font-display
              text-3xl
              font-extrabold
              leading-tight
              text-ink
              sm:text-4xl
              lg:text-[3.2rem]
            "
          >
            <span className="text-[#ED6439]">
              Road Ahead
            </span>
          </h2>


          {/* Golden divider */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">

            <span
              className="
                h-[2px]
                w-14
                bg-[#ED6439]
              "
            />

            <span
              className="
                h-3
                w-3
                rounded-full
                bg-[#E8A22F]
                shadow-[0_0_16px_rgba(232,162,47,0.45)]
              "
            />

            <span
              className="
                h-[2px]
                w-14
                bg-[#ED6439]
              "
            />

          </div>


          {/* CLIENT APPROVED CONTENT — UNCHANGED */}

          <p
  className="
    mx-auto
    mt-8
    max-w-2xl
    text-[15.5px]
    leading-relaxed
    text-muted-foreground
    sm:text-base
    sm:whitespace-nowrap
  "
>
  NMT continues to innovate and expand its services to meet India’s growing elder care needs.
</p>

        </Reveal>


        {/* =========================================================
            KEY FOCUS AREAS
            ========================================================= */}

        <Reveal delay={120} className="mt-14 lg:mt-16">

          <div className="mx-auto max-w-5xl">

            {/* Section heading */}

            <div className="mb-8 text-center">

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#B66F00]
                "
              >
                Looking Forward
              </span>

              <h3
                className="
                  mt-2
                  font-display
                  text-xl
                  font-bold
                  text-ink
                  sm:text-2xl
                "
              >
                Key Focus Areas
              </h3>

            </div>


            {/* =====================================================
                FOCUS AREA CARDS
                ===================================================== */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {FOCUS_AREAS.map((area, index) => (

                <div
                  key={area}
                  className="
                    group
                    relative
                    overflow-hidden
                    border
                    border-[#E8A22F]/20
                    bg-[#FFFDF7]
                    p-6
                    shadow-[0_15px_40px_-18px_rgba(150,95,10,0.20)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#E8A22F]/45
                    hover:bg-white
                    hover:shadow-[0_25px_55px_-18px_rgba(150,95,10,0.28)]
                  "
                >

                  {/* Golden top accent */}

                  <span
                    className="
                      absolute
                      inset-x-0
                      top-0
                      h-1
                      bg-[#ED6439]
                      opacity-80
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />


                  {/* Corner glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-32
                      w-32
                      rounded-full
                      bg-[#E8A22F]/15
                      opacity-0
                      blur-2xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />


                  <div className="relative flex items-start gap-4">

                    {/* Number */}

                    <span
                      className="
                        grid
                        h-12
                        w-12
                        shrink-0
                        place-items-center
                        bg-[#ED6439]
                        font-display
                        text-sm
                        font-extrabold
                        text-white
                        shadow-[0_8px_20px_rgba(232,162,47,0.30)]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-3
                      "
                    >
                      0{index + 1}
                    </span>


                    {/* Content */}

                    <div className="min-w-0 flex-1">

                      <p
                        className="
                          pt-1
                          text-[15px]
                          font-bold
                          leading-relaxed
                          text-ink
                          transition-colors
                          duration-300
                          group-hover:text-[#ED6439]
                        "
                      >
                        {area}
                      </p>


                      {/* Hover arrow */}

                      <span
                        className="
                          mt-3
                          inline-flex
                          items-center
                          gap-1
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-[#ED6439]/0
                          transition-all
                          duration-300
                          group-hover:text-[#ED6439]
                        "
                      >
                        Explore

                        <ArrowUpRight
                          className="
                            h-3.5
                            w-3.5
                            transition-transform
                            duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                          strokeWidth={2.2}
                        />
                      </span>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}
