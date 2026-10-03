import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function FinalCta() {
  return (
    <section
      aria-label="Support our work"
      className="
        relative
        overflow-hidden
        border-t
        border-[#ED6439]/20
        bg-background
        pb-24
        pt-20
        lg:pb-32
        lg:pt-24
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND GLOWS
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-[#ED6439]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-[#E85A3F]/[0.07]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-[#ED6439]/[0.08]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          {/* =================================================
              PREMIUM CONTENT WRAPPER
              ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              border
              border-[#ED6439]/25
              bg-white/80
              px-6
              py-12
              shadow-[0_25px_70px_-25px_rgba(237,100,57,0.16)]
              backdrop-blur-sm
              sm:px-10
              sm:py-14
              lg:px-16
              lg:py-16
            "
          >
            {/* Inner border */}

            <div
              className="
                pointer-events-none
                absolute
                inset-3
                border
                border-[#ED6439]/10
              "
            />

            {/* Decorative top accent */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-[3px]
                w-28
                -translate-x-1/2
                bg-gradient-to-r
                from-[#E85A3F]
                via-[#ED6439]
                to-[#E85A3F]
              "
            />

            {/* Decorative corner glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-[#ED6439]/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-20
                h-52
                w-52
                rounded-full
                bg-[#E85A3F]/[0.07]
                blur-3xl
              "
            />

            <div className="relative z-10">
              {/* =================================================
                  EYEBROW
                  ================================================= */}

             <span
  className="
    inline-flex
    items-center
    gap-2
    border
    border-[#ED6439]/30
    bg-[#FFF4DF]
    px-4
    py-2
    text-sm
    font-bold
    uppercase
    tracking-[0.18em]
    text-[#ED6439]
    shadow-[0_8px_22px_rgba(237,100,57,0.10)]
  "
>
  <Sparkles
    className="h-4 w-4"
    strokeWidth={2}
  />

  Join us
</span>

              {/* =================================================
                  HEADING
                  ================================================= */}

              <h2
                className="
                  mx-auto
                  mt-7
                  max-w-3xl
                  font-display
                  text-[2rem]
                  font-extrabold
                  leading-[1.1]
                  text-ink
                  sm:text-5xl
                  lg:text-[3.5rem]
                "
              >
                Together we can make
                <br className="hidden sm:block" /> ageing{" "}
                <span className="text-[#ED6439]">
  dignified
</span>
              </h2>

              {/* Accent divider */}

              <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                <span
                  className="
                    h-px
                    w-12
                    bg-gradient-to-r
                    from-transparent
                    to-[#E85A3F]/50
                    sm:w-16
                  "
                />

                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#ED6439]
                    shadow-[0_0_14px_rgba(237,100,57,0.45)]
                  "
                />

                <span
                  className="
                    h-px
                    w-12
                    bg-gradient-to-l
                    from-transparent
                    to-[#E85A3F]/50
                    sm:w-16
                  "
                />
              </div>

              {/* =================================================
                  DESCRIPTION
                  ================================================= */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-[15px]
                  leading-relaxed
                  text-muted-foreground
                  sm:text-[15.5px]
                "
              >
                One elder cared for today is one family that sleeps
                peacefully tonight. Stand with Nightingales Medical Trust.
              </p>

              {/* =================================================
                  CTA BUTTONS
                  ================================================= */}

              <div
                className="
                  mt-9
                  flex
                  flex-col
                  items-stretch
                  justify-center
                  gap-3
                  sm:flex-row
                  sm:items-center
                "
              >
                {/* Donate */}

                <a
                  href="#donate"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    border
                    border-[#ED6439]
                    bg-[#ED6439]
                    px-7
                    py-3.5
                    text-[15px]
                    font-semibold
                    text-white
                    shadow-[0_12px_28px_rgba(232,90,63,0.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_38px_rgba(232,90,63,0.32)]
                    sm:w-auto
                    sm:px-8
                    sm:py-4
                  "
                >
                  Donate Now

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                    strokeWidth={2}
                  />
                </a>

                {/* Volunteer */}

                <a
                  href="#apply"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    border
                    border-[#ED6439]/35
                    bg-white
                    px-7
                    py-3.5
                    text-[15px]
                    font-semibold
                    text-ink
                    shadow-[0_10px_25px_rgba(237,100,57,0.10)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#ED6439]/60
                    hover:text-[#ED6439]
                    hover:shadow-[0_16px_32px_rgba(237,100,57,0.15)]
                    sm:w-auto
                    sm:px-8
                    sm:py-4
                  "
                >
                  <HeartHandshake
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />

                  Volunteer with us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}