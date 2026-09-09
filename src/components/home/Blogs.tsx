import { ArrowUpRight, CalendarDays } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { Reveal } from "@/components/site/Reveal";

const POSTS = [
  {
    image: blog1,
    tag: "Wellbeing",
    date: "12 July 2026",
    title:
      "Ten minutes of movement: why gentle exercise slows cognitive decline",
    read: "5 min read",
  },
  {
    image: blog2,
    tag: "Caregiving",
    date: "28 June 2026",
    title:
      "The caregiver's guide to burnout — and how to ask for help early",
    read: "7 min read",
  },
  {
    image: blog3,
    tag: "Community",
    date: "09 June 2026",
    title:
      "What we learned from 1,000 free memory screenings in rural Karnataka",
    read: "6 min read",
  },
];

export function Blogs() {
  return (
    <section
      id="blogs"
      className="
        relative
        overflow-hidden
        border-y
        border-[#E8A22F]/35
        bg-[#ED6439]
        py-20
        lg:py-28
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND GLOWS
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-24
          h-96
          w-96
          rounded-full
          bg-white/30
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/3
          h-96
          w-96
          rounded-full
          bg-[#E97C3A]/15
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/3
          h-72
          w-72
          rounded-full
          bg-[#E8A22F]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <Reveal className="grid gap-6 sm:flex sm:items-end sm:justify-between">
          <div>
            <span
              className="
                inline-flex
                items-center
                border
                border-[#E8A22F]/40
                bg-white/55
                px-4
                py-2
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#B86F00]
                shadow-[0_8px_22px_rgba(184,111,0,0.08)]
                backdrop-blur-sm
              "
            >
              Latest from the journal
            </span>

            <h2
              className="
                mt-6
                max-w-xl
                font-display
                text-3xl
                font-extrabold
                leading-tight
                text-white
                text-ink
                sm:text-4xl
                lg:text-[2.9rem]
              "
            >
              Knowledge that helps families{" "}
              <span className="text-white">
                cope better.
              </span>
            </h2>

            {/* Accent divider */}

            <div className="mt-6 flex items-center gap-3">
              <span
                className="
                  h-[2px]
                  w-14
                  bg-gradient-to-r
                  from-[#E85A3F]
                  to-[#E8A22F]
                "
              />

              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#E8A22F]
                  shadow-[0_0_14px_rgba(232,162,47,0.45)]
                "
              />
            </div>
          </div>

          {/* View all button */}

          <a
            href="#blogs"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              border
              border-[#C87500]/30
              bg-white/80
              px-5
              py-3
              text-sm
              font-semibold
              text-ink
              shadow-[0_10px_25px_rgba(160,95,20,0.10)]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#C87500]/55
              hover:bg-white
              hover:text-[#B86F00]
              hover:shadow-[0_14px_30px_rgba(160,95,20,0.16)]
            "
          >
            View all articles

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
              strokeWidth={2}
            />
          </a>
        </Reveal>

        {/* =====================================================
            BLOG CARDS
            ===================================================== */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 120}>
              <article
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  border
                  border-[#D88A35]/30
                  bg-white/95
                  shadow-[0_20px_55px_-20px_rgba(140,80,20,0.24)]
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#E8A22F]/55
                  hover:shadow-[0_30px_70px_-20px_rgba(140,80,20,0.30)]
                "
              >
                {/* Top accent */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    z-10
                    h-[3px]
                    bg-gradient-to-r
                    from-[#E85A3F]
                    via-[#E8A22F]
                    to-[#E85A3F]
                  "
                />

                {/* =================================================
                    IMAGE
                    ================================================= */}

                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="
                      h-56
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Image overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/25
                      via-transparent
                      to-transparent
                      opacity-60
                      transition-opacity
                      duration-500
                      group-hover:opacity-40
                    "
                  />

                  {/* Category badge */}

                  <span
                    className="
                      absolute
                      bottom-4
                      left-4
                      border
                      border-white/50
                      bg-white/90
                      px-3
                      py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#B86F00]
                      shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                      backdrop-blur-sm
                    "
                  >
                    {post.tag}
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                    ================================================= */}

                <div className="flex flex-1 flex-col p-7">

                  {/* Date */}

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-muted-foreground
                    "
                  >
                    <CalendarDays
                      className="h-3.5 w-3.5 text-[#D88900]"
                      strokeWidth={1.8}
                    />

                    {post.date}
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-4
                      font-display
                      text-lg
                      font-bold
                      leading-snug
                      text-ink
                    "
                  >
                    <a
                      href="#blogs"
                      className="
                        transition-colors
                        duration-300
                        hover:text-[#C87500]
                      "
                    >
                      {post.title}
                    </a>
                  </h3>

                  {/* Bottom */}

                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#E8A22F]/20
                      pt-5
                      mt-6
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-medium
                        text-muted-foreground
                      "
                    >
                      {post.read}
                    </p>

                    <span
                      className="
                        grid
                        h-9
                        w-9
                        place-items-center
                        border
                        border-[#E8A22F]/25
                        bg-[#FFF3D8]
                        text-[#C87500]
                        transition-all
                        duration-300
                        group-hover:bg-[#E8A22F]
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}