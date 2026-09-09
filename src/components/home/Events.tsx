import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const EVENTS = [
  {
    date: "21 September 2026",
    day: "21",
    month: "Sep",
    title: "World Alzheimer's Day — Memory Walk, Bengaluru",
    place: "Cubbon Park, Bengaluru",
    body: "A community walk, free memory screenings and a caregiver meet to mark World Alzheimer's Day.",
  },
  {
    date: "08 October 2026",
    day: "08",
    month: "Oct",
    title: "Family Caregiver Training — Batch 24",
    place: "NMT Training Centre, Jayanagar",
    body: "A two-day certified workshop for families caring for a person living with dementia at home.",
  },
  {
    date: "01 November 2026",
    day: "01",
    month: "Nov",
    title: "Smriti Gram Open Day",
    place: "Smriti Gram Campus, Karnataka",
    body: "Guided walkthrough of India's first dementia village for donors, partners and researchers.",
  },
];

export function Events() {
  return (
    <section
      id="events"
      className="
  relative
  overflow-hidden
  border-y
  border-white/70
  bg-[#ED6439]
  py-20
  lg:py-28
"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-80
          w-80
          rounded-full
          bg-[#E8A22F]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-80
          w-80
          rounded-full
          bg-[#E85A3F]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span
  className="
    inline-flex
    items-center
    gap-2
    border
    border-white/80
    bg-white
    px-4
    py-2
    text-[11px]
    font-bold
    uppercase
    tracking-[0.18em]
    text-[#C87500]
    shadow-[0_8px_24px_rgba(120,70,20,0.12)]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:border-white
    hover:shadow-[0_12px_28px_rgba(120,70,20,0.16)]
  "
>
              <Sparkles
                className="h-3.5 w-3.5"
                strokeWidth={2}
              />
              Upcoming Events
            </span>

            <h2
              className="
                mt-6
                max-w-2xl
                font-display
                text-3xl
                font-extrabold
                leading-tight
                text-ink
                text-white
                sm:text-4xl
                lg:text-[3.1rem]
              "
            >
              Come stand with{" "}
              <span className="text-white">
                our elders.
              </span>
            </h2>

            <div className="mt-5 flex items-center gap-3">
  <span className="h-[2px] w-12 bg-[#ED6439]" />
  <span className="h-2.5 w-2.5 rounded-full bg-[#ED6439]" />
  <span className="h-[2px] w-12 bg-[#ED6439]" />
</div>
          </div>

          <Link
            to="/news-events"
            className="
              group
              inline-flex
              items-center
              gap-2
              border
              border-[#E8A22F]/30
              bg-white/80
              px-5
              py-3
              text-[13.5px]
              font-semibold
              text-ink
              shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#E8A22F]/60
              hover:bg-[#E8A22F]/10
              hover:text-[#C87500]
              hover:shadow-[0_15px_35px_-12px_rgba(232,162,47,0.25)]
            "
          >
            View full calendar

            <ArrowUpRight
              className="
                h-4 w-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
              strokeWidth={2}
            />
          </Link>
        </Reveal>

        {/* =====================================================
            EVENT CARDS
            ===================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 110}>
              <article
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  border
                  border-[#E8A22F]/15
                  bg-white/90
                  p-6
                  shadow-[0_18px_50px_-18px_rgba(0,0,0,0.16)]
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#E8A22F]/35
                  hover:shadow-[0_30px_65px_-18px_rgba(232,162,47,0.24)]
                  sm:p-7
                "
              >
                {/* Top accent */}
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-[3px]
                    bg-gradient-to-r
                    from-[#E85A3F]
                    via-[#E8A22F]
                    to-[#E85A3F]
                  "
                />

                {/* Corner glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-[#E8A22F]/10
                    blur-3xl
                    transition-transform
                    duration-700
                    group-hover:scale-125
                  "
                />

                {/* Date + title */}
                <div className="relative flex items-start gap-5">

                  {/* Date block */}
                  <div
                    className="
                      relative
                      grid
                      h-[76px]
                      w-[68px]
                      shrink-0
                      place-content-center
                      overflow-hidden
                      bg-gradient-to-br
                      from-[#E85A3F]
                      to-[#E8A22F]
                      text-center
                      text-white
                      shadow-[0_12px_25px_rgba(232,90,63,0.22)]
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  >
                    <span className="absolute inset-x-0 top-0 h-1 bg-white/30" />

                    <span className="font-display text-2xl font-extrabold leading-none">
                      {e.day}
                    </span>

                    <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
                      {e.month}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="min-w-0 pt-1">
                    <h3
                      className="
                        font-display
                        text-[17px]
                        font-extrabold
                        leading-snug
                        text-ink
                        transition-colors
                        duration-300
                        group-hover:text-[#C87500]
                      "
                    >
                      {e.title}
                    </h3>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative mt-6 h-px bg-gradient-to-r from-[#E8A22F]/30 via-border to-transparent" />

                {/* Body */}
                <p
                  className="
                    relative
                    mt-5
                    flex-1
                    text-[14px]
                    leading-[1.75]
                    text-muted-foreground
                  "
                >
                  {e.body}
                </p>

                {/* Metadata */}
                <div className="relative mt-6 space-y-2.5">
                  <p
                    className="
                      flex
                      items-center
                      gap-2
                      text-[12.5px]
                      font-medium
                      text-muted-foreground
                    "
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center bg-[#E8A22F]/10 text-[#C87500]">
                      <MapPin
                        className="h-3.5 w-3.5"
                        strokeWidth={1.9}
                      />
                    </span>

                    {e.place}
                  </p>

                  <p
                    className="
                      flex
                      items-center
                      gap-2
                      text-[12.5px]
                      font-medium
                      text-muted-foreground
                    "
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center bg-[#E85A3F]/10 text-[#D94E34]">
                      <CalendarDays
                        className="h-3.5 w-3.5"
                        strokeWidth={1.9}
                      />
                    </span>

                    {e.date}
                  </p>
                </div>

                {/* Bottom hover accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-gradient-to-r
                    from-[#E85A3F]
                    to-[#E8A22F]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}