import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function Newsletter() {
  // const [done, setDone] = useState(false);

  return (
    <section
      aria-label="Newsletter"
      className="
        relative
        overflow-hidden
        border-y
        border-[#E8A22F]/30
        bg-[#FFF4DF]
        py-16
        lg:py-20
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-28
          top-1/2
          h-80
          w-80
          -translate-y-1/2
          rounded-full
          bg-[#E8A22F]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-28
          top-0
          h-80
          w-80
          rounded-full
          bg-[#E97C3A]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="
              group
              relative
              overflow-hidden
              border
              border-[#C75F29]
              bg-[#ED6439]
              p-8
              shadow-[0_25px_70px_-20px_rgba(190,91,35,0.38)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_32px_85px_-20px_rgba(190,91,35,0.46)]
              sm:p-12
              lg:grid
              lg:grid-cols-[1.2fr_1fr]
              lg:items-center
              lg:gap-10
            "
          >
            {/* =================================================
                INNER BORDER
                ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-3
                border
                border-white/25
              "
            />

            {/* =================================================
                DECORATIVE GLOWS
                ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -left-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-white/10
                blur-3xl
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -right-20
                h-64
                w-64
                rounded-full
                bg-[#B84E24]/25
                blur-3xl
              "
            />

            {/* =================================================
                LEFT CONTENT
                ================================================= */}

            <div className="relative z-10">
              {/* Mail icon */}

              <span
                className="
                  grid
                  h-12
                  w-12
                  place-items-center
                  border
                  border-white/40
                  bg-white/15
                  text-white
                  shadow-[0_10px_25px_rgba(0,0,0,0.10)]
                  backdrop-blur-sm
                "
              >
                <Mail
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </span>

              <h2
  className="
    mt-6
    font-display
    text-2xl
    font-extrabold
    leading-tight
    text-white
    sm:text-3xl
  "
>
  NewsLetter
</h2>

              {/* Accent */}

              <div
                className="
                  mt-4
                  h-[3px]
                  w-14
                  bg-white
                "
              />

              <p
                className="
                  mt-4
                  max-w-md
                  text-[15px]
                  leading-relaxed
                  text-white/90
                "
              >
                Practical caregiving guidance, new research and stories from
                our centres. No noise, no fundraising spam.
              </p>
            </div>

            {/* =================================================
                FORM
                ================================================= */}

           <form
  action="https://formsubmit.co/contact@nightingaleseldercare.com"
  method="POST"
  className="
    relative
    z-10
    mt-8
    grid
    gap-3
    lg:mt-0
  "
>
  <input
    type="hidden"
    name="_subject"
    value="New Newsletter Subscription - Nightingales Medical Trust"
  />

  <input
    type="hidden"
    name="_template"
    value="table"
  />

  <input
    type="hidden"
    name="_captcha"
    value="true"
  />

  <label
    htmlFor="newsletter-email"
    className="sr-only"
  >
    Email address
  </label>

  <input
    id="newsletter-email"
    name="email"
    type="email"
    required
    placeholder="you@example.com"
    className="
      w-full
      border
      border-white/40
      bg-white
      px-5
      py-4
      text-[15px]
      text-ink
      outline-none
      shadow-[0_8px_25px_rgba(0,0,0,0.10)]
      transition-all
      duration-300
      placeholder:text-muted-foreground
      focus:border-white
      focus:ring-2
      focus:ring-white/30
    "
  />

  <button
    type="submit"
    className="
      group/cta
      inline-flex
      items-center
      justify-center
      gap-2
      border
      border-white
      bg-white
      px-6
      py-4
      text-[15px]
      font-bold
      text-black
      shadow-[0_12px_28px_rgba(0,0,0,0.16)]
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-white
      hover:shadow-[0_16px_35px_rgba(0,0,0,0.22)]
    "
  >
    Subscribe

    <ArrowRight
      className="
        h-4
        w-4
        text-black
        transition-transform
        duration-300
        group-hover/cta:translate-x-1
      "
      strokeWidth={2}
    />
  </button>

  <p
    aria-live="polite"
    className="
      text-center
      text-xs
      font-medium
      text-white/80
    "
  >
    We never share your email.
  </p>
</form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}