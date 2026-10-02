import { useState } from "react";

import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import job60Poster from "@/assets/new&events/job-60-poster.jpeg";

const CALENDAR_EVENTS = [
  {
    date: "2026-09-21",
    title: "World Alzheimer's Day — Memory Walk, Bengaluru",
    place: "Cubbon Park, Bengaluru",
    poster: null,
  },
  {
    date: "2026-10-08",
    title: "Family Caregiver Training — Batch 24",
    place: "NMT Training Centre, Jayanagar",
    poster: null,
  },
  {
    date: "2026-10-11",
    title: "Nightingales Jobs 60+",
    place: "Nightingales Medical Trust",
    poster: job60Poster,
  },
  {
    date: "2026-11-01",
    title: "Smriti Gram Open Day",
    place: "Smriti Gram Campus, Karnataka",
    poster: null,
  },
];
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
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPoster, setShowPoster] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(
    new Date(2026, 8, 1)
  );


    const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  const getEventForDate = (day: number) => {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    return CALENDAR_EVENTS.find((event) => event.date === dateKey);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const goToThisMonth = () => {
    const today = new Date();

    setCurrentMonth(
      new Date(today.getFullYear(), today.getMonth(), 1)
    );
  };

  return (
    <>
      {/* ============================================================
          EVENTS SECTION
          ============================================================ */}

      <section
        id="events"
        className="
          relative
          overflow-hidden
          border-y
          border-[#ED6439]/10
          bg-[#FFF7EF]
          py-16
          sm:py-20
          lg:py-24
        "
      >
      <div
  className="
    pointer-events-none
    absolute
    -left-32
    top-10
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
    -right-32
    bottom-0
    h-96
    w-96
    rounded-full
    bg-[#E8A22F]/5
    blur-3xl
  "
/>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ========================================================
              HEADER
              ======================================================== */}

          <Reveal>
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#ED6439]/15
                    bg-white
                    px-4
                    py-2
                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[0.18em]
                    text-[#ED6439]
                    shadow-[0_8px_25px_rgba(70,45,10,0.06)]
                  "
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Upcoming Events
                </span>

                <h2
                  className="
                    mt-5
                    max-w-2xl
                    font-display
                    text-3xl
                    font-extrabold
                    leading-tight
                    text-[#263746]
                    sm:text-4xl
                    lg:text-[3rem]
                  "
                >
                  Come stand with our elders.
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-12 rounded-full bg-[#ED6439]" />
                  <span className="h-1 w-5 rounded-full bg-[#E8A22F]" />
                  <span className="h-1 w-2 rounded-full bg-[#ED6439]/40" />
                </div>
              </div>

              {/* ====================================================
                  VIEW FULL CALENDAR BUTTON
                  ==================================================== */}

              <button
                type="button"
                onClick={() => setShowCalendar(true)}
                className="
                  group
                  inline-flex
                  w-fit
                  shrink-0
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#ED6439]/20
                  bg-white
                  px-5
                  py-3.5
                  text-[13.5px]
                  font-bold
                  text-[#263746]
                  shadow-[0_10px_30px_-15px_rgba(70,45,10,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#ED6439]
                  hover:bg-[#ED6439]
                  hover:text-white
                  hover:shadow-[0_15px_35px_-15px_rgba(237,100,57,0.35)]
                  sm:px-6
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
              </button>

            </div>
          </Reveal>

          {/* ========================================================
              EVENT CARDS
              ======================================================== */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:mt-12
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={i * 100}>
                <article
                  className="
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#ED6439]/10
                    bg-white
                    shadow-[0_15px_45px_-25px_rgba(70,45,10,0.28)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#ED6439]/25
                    hover:shadow-[0_25px_55px_-22px_rgba(70,45,10,0.3)]
                  "
                >
                  {/* Top accent */}
                  <div
                    className="
                      h-1
                      w-full
                      bg-gradient-to-r
                      from-[#ED6439]
                      via-[#E8A22F]
                      to-[#ED6439]
                    "
                  />

                  <div className="flex flex-1 flex-col p-5 sm:p-6">

                    {/* ==================================================
                        DATE + TITLE
                        ================================================== */}

                    <div className="flex items-start gap-4">

                      {/* Date block */}
                      <div
                        className="
                          relative
                          grid
                          h-[72px]
                          w-[64px]
                          shrink-0
                          place-content-center
                          overflow-hidden
                          rounded-xl
                          bg-[#ED6439]
                          text-center
                          text-white
                          shadow-[0_10px_22px_rgba(237,100,57,0.2)]
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      >
                        <span className="absolute inset-x-0 top-0 h-1 bg-white/30" />

                        <span className="font-display text-2xl font-extrabold leading-none">
                          {e.day}
                        </span>

                        <span
                          className="
                            mt-1
                            text-[10px]
                            font-extrabold
                            uppercase
                            tracking-[0.18em]
                            text-white/90
                          "
                        >
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
                            text-[#263746]
                            transition-colors
                            duration-300
                            group-hover:text-[#ED6439]
                          "
                        >
                          {e.title}
                        </h3>
                      </div>

                    </div>

                    {/* ==================================================
                        DIVIDER
                        ================================================== */}

                    <div
                      className="
                        my-5
                        h-px
                        bg-[#17232B]/10
                      "
                    />

                    {/* ==================================================
                        DESCRIPTION
                        ================================================== */}

                    <p
                      className="
                        flex-1
                        text-[14px]
                        leading-[1.75]
                        text-[#526574]
                      "
                    >
                      {e.body}
                    </p>

                    {/* ==================================================
                        EVENT INFORMATION
                        ================================================== */}

                    <div className="mt-6 space-y-3">

                      {/* Location */}
                      <div className="flex items-start gap-3">
                        <span
                          className="
                            grid
                            h-8
                            w-8
                            shrink-0
                            place-items-center
                            rounded-lg
                            bg-[#FFF1E9]
                            text-[#ED6439]
                          "
                        >
                          <MapPin
                            className="h-3.5 w-3.5"
                            strokeWidth={2}
                          />
                        </span>

                        <p
                          className="
                            pt-1
                            text-[12.5px]
                            font-semibold
                            leading-5
                            text-[#526574]
                          "
                        >
                          {e.place}
                        </p>
                      </div>

                      {/* Date */}
                      <div className="flex items-start gap-3">
                        <span
                          className="
                            grid
                            h-8
                            w-8
                            shrink-0
                            place-items-center
                            rounded-lg
                            bg-[#FFF6DF]
                            text-[#C87500]
                          "
                        >
                          <CalendarDays
                            className="h-3.5 w-3.5"
                            strokeWidth={2}
                          />
                        </span>

                        <p
                          className="
                            pt-1
                            text-[12.5px]
                            font-semibold
                            leading-5
                            text-[#526574]
                          "
                        >
                          {e.date}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Bottom hover accent */}
                  <div
                    className="
                      h-1
                      w-0
                      bg-gradient-to-r
                      from-[#ED6439]
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

      {/* ============================================================
    FULL CALENDAR MODAL
    ============================================================ */}

{showCalendar && (
  <div
    className="fixed inset-0 z-[200] flex items-center justify-center bg-[#17232B]/70 p-3 backdrop-blur-sm sm:p-6"
    role="dialog"
    aria-modal="true"
    aria-label="Upcoming events calendar"
    onClick={() => setShowCalendar(false)}
  >
    <div
      className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:rounded-3xl"
      onClick={(event) => event.stopPropagation()}
    >

      {/* ========================================================
          CALENDAR HEADER
          ======================================================== */}

      <div className="flex items-center justify-between border-b border-[#17232B]/10 bg-white px-4 py-4 sm:px-6">

        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#ED6439] text-white">
            <CalendarDays className="h-5 w-5" />
          </div>

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#ED6439]">
              Events Calendar
            </p>

            <h3 className="mt-0.5 font-display text-lg font-extrabold text-[#263746] sm:text-xl">
              Upcoming Events
            </h3>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowCalendar(false)}
          aria-label="Close calendar"
          className="grid h-9 w-9 place-items-center rounded-full bg-[#F5F5F5] text-[#526574] transition-all duration-300 hover:bg-[#ED6439] hover:text-white"
        >
          <X className="h-4 w-4" strokeWidth={2.2} />
        </button>

      </div>

      {/* ========================================================
          CALENDAR TOOLBAR
          ======================================================== */}

      <div className="flex items-center justify-between border-b border-[#17232B]/10 px-4 py-4 sm:px-6">

        <button
          type="button"
          onClick={goToThisMonth}
          className="rounded-md border border-[#17232B]/10 bg-white px-3 py-2 text-sm font-semibold text-[#4F81E8] transition hover:border-[#4F81E8]/30 hover:bg-[#F7F9FF]"
        >
          This month
        </button>

        <div className="flex items-center gap-2 sm:gap-4">

          <button
            type="button"
            onClick={goToPreviousMonth}
            aria-label="Previous month"
            className="grid h-9 w-9 place-items-center rounded-full text-[#526574] transition hover:bg-[#FFF1E9] hover:text-[#ED6439]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={goToNextMonth}
            aria-label="Next month"
            className="grid h-9 w-9 place-items-center rounded-full text-[#526574] transition hover:bg-[#FFF1E9] hover:text-[#ED6439]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <span className="min-w-[90px] text-sm font-semibold text-[#263746] sm:min-w-[110px]">
            {monthName}
          </span>

        </div>

      </div>

      {/* ========================================================
          CALENDAR
          ======================================================== */}

      <div className="overflow-auto p-3 sm:p-5">

        <div className="min-w-[650px] overflow-hidden rounded-xl border border-[#17232B]/10">

          {/* WEEK DAYS */}

          <div className="grid grid-cols-7 border-b border-[#17232B]/10 bg-[#FAFAFA]">

            {[
              "SUN",
              "MON",
              "TUE",
              "WED",
              "THU",
              "FRI",
              "SAT",
            ].map((day) => (
              <div
                key={day}
                className="px-2 py-3 text-center text-[11px] font-extrabold text-[#263746]"
              >
                {day}
              </div>
            ))}

          </div>

          {/* CALENDAR CELLS */}

          <div className="grid grid-cols-7">

            {calendarDays.map((day, index) => {

              const event =
                day !== null ? getEventForDate(day) : null;

              const isToday =
                day !== null &&
                new Date().getFullYear() === year &&
                new Date().getMonth() === month &&
                new Date().getDate() === day;

              return (
                <div
                  key={`${year}-${month}-${index}`}
                  className="min-h-[95px] border-b border-r border-[#17232B]/10 bg-white p-1.5 sm:min-h-[110px] sm:p-2"
                >

                  {day !== null && (
                    <div className="flex h-full flex-col">

                      {/* DATE NUMBER */}

                      <div className="flex justify-end">

                        <span
                          className={`grid h-7 w-7 place-items-center rounded-md text-xs font-bold ${
                            isToday
                              ? "bg-[#4F81E8] text-white"
                              : "text-[#526574]"
                          }`}
                        >
                          {day}
                        </span>

                      </div>

                      {/* EVENT */}

                      {event && (
                        <button
                          type="button"
                          onClick={() => {
                            if (event.poster) {
                              setShowPoster(true);
                              setShowCalendar(false);
                            }
                          }}
                          className={`mt-2 w-full rounded-md border-l-4 border-[#ED6439] bg-[#FFF4EA] p-2 text-left transition-all ${
                            event.poster
                              ? "cursor-pointer hover:bg-[#FFE8DA] hover:shadow-sm"
                              : "cursor-default"
                          }`}
                        >

                          <p className="line-clamp-3 text-[10px] font-extrabold leading-4 text-[#263746] sm:text-[11px]">
                            {event.title}
                          </p>

                          {event.poster && (
                            <span className="mt-1 block text-[9px] font-bold text-[#ED6439]">
                              View poster →
                            </span>
                          )}

                        </button>
                      )}

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* ========================================================
          CALENDAR FOOTER
          ======================================================== */}

      <div className="border-t border-[#17232B]/10 bg-[#FAFAFA] px-4 py-3 sm:px-6">

        <div className="flex items-center gap-2 text-xs font-semibold text-[#526574]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ED6439]" />
          Click an event to view its details or poster.
        </div>

      </div>

    </div>
  </div>
)}

{/* ============================================================
    JOBS 60+ POSTER MODAL
    ============================================================ */}

{showPoster && (
  <div
    className="fixed inset-0 z-[220] flex items-center justify-center bg-[#17232B]/75 p-4 backdrop-blur-sm sm:p-6"
    role="dialog"
    aria-modal="true"
    aria-label="Nightingales Jobs 60+ poster"
    onClick={() => setShowPoster(false)}
  >
    <div
      className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:rounded-3xl"
      onClick={(event) => event.stopPropagation()}
    >

      {/* HEADER */}

      <div className="flex items-center justify-between border-b border-[#ED6439]/10 bg-[#FFF7EF] px-5 py-4 sm:px-6">

        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ED6439]">
            Sunday · 11 October 2026
          </p>

          <h3 className="mt-1 font-display text-lg font-extrabold text-[#263746] sm:text-xl">
            Nightingales Jobs 60+
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setShowPoster(false)}
          aria-label="Close poster"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#526574] shadow-sm transition-all duration-300 hover:bg-[#ED6439] hover:text-white"
        >
          <X className="h-4 w-4" strokeWidth={2.2} />
        </button>

      </div>

      {/* POSTER */}

      <div className="overflow-y-auto bg-[#F8F5F1] p-4 sm:p-6">

        <div className="flex justify-center">

          <img
            src={job60Poster}
            alt="Nightingales Jobs 60+ event poster"
            className="block h-auto w-full max-w-[380px] rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
          />

        </div>

      </div>

      {/* CLOSE */}

      <div className="border-t border-[#ED6439]/10 bg-white px-5 py-4 sm:px-6">

        <button
          type="button"
          onClick={() => setShowPoster(false)}
          className="w-full rounded-full bg-[#ED6439] px-5 py-3 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(237,100,57,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D95732]"
        >
          Close
        </button>

      </div>

    </div>
  </div>
)}
    </>
  );
}