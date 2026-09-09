import { Reveal } from "@/components/site/Reveal";
import ageingImage from "@/assets/ageing-challenge.jpeg";

export function About() {
  return (
    <section
      id="about"
      className="relative mt-10 w-full overflow-hidden sm:mt-16 lg:mt-20"
    >
      {/* =========================================================
          PARALLAX IMAGE
          Mobile: normal scroll background (bg-fixed unsupported/janky on iOS)
          Tablet+: true fixed parallax background
          ========================================================= */}
      <div
        className="relative min-h-[620px] w-full bg-cover bg-center bg-scroll sm:h-[600px] sm:min-h-0 sm:bg-fixed lg:h-[680px]"
        style={{ backgroundImage: `url(${ageingImage})` }}
      >
        {/* VIBRANT ORANGE + VIOLET OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C2410C]/80 via-[#E85A3F]/40 to-[#7C3AED]/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/40 via-transparent to-transparent sm:w-2/3" />

        {/* subtle glow accents */}
        <div className="pointer-events-none absolute -left-24 top-10 hidden h-80 w-80 rounded-full bg-[#F5A623]/25 blur-3xl sm:block" />
        <div className="pointer-events-none absolute -right-20 bottom-0 hidden h-72 w-72 rounded-full bg-[#7C3AED]/20 blur-3xl sm:block" />

        {/* fine decorative grid texture for premium editorial feel */}
        <div
          className="pointer-events-none absolute inset-0 hidden opacity-[0.06] sm:block"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* top and bottom edge fade for a cleaner blend into surrounding sections */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/25 to-transparent sm:h-16" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/35 to-transparent sm:h-20" />

        {/* corner frame accents — small premium detail */}
        <div className="pointer-events-none absolute right-6 top-6 hidden h-14 w-14 border-r-2 border-t-2 border-white/25 sm:block lg:right-10 lg:top-8 lg:h-16 lg:w-16" />
        <div className="pointer-events-none absolute bottom-6 right-6 hidden h-14 w-14 border-b-2 border-r-2 border-[#F5A623]/40 sm:block lg:bottom-8 lg:right-10 lg:h-16 lg:w-16" />

        {/* =======================================================
            CONTENT
            ======================================================= */}
        <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-7xl flex-col justify-center px-4 py-8 xs:px-5 sm:min-h-0 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <Reveal>
            <div className="flex items-start gap-3 sm:gap-5">
              <span className="mt-1 h-12 w-1 shrink-0 rounded-full bg-[#ED6439] sm:h-[92px] sm:w-1.5" />

              <h2 className="font-display text-[1.55rem] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] xs:text-[1.8rem] sm:text-[2.9rem] lg:text-[3.6rem]">
                AGEING IN INDIA
                <br />
                <span className="text-[#ED6439]">
  A GROWING CHALLENGE
</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-5 max-w-[950px] sm:mt-9 lg:mt-11">
            <div className="space-y-3 border-l border-white/15 pl-4 text-[13px] font-medium leading-[1.6] text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] xs:text-[14px] sm:space-y-4 sm:pl-5 sm:text-[16px] sm:leading-[1.7] lg:text-[17px] lg:leading-[1.8]">
              <p>
                India is ageing rapidly, but the systems and support
                available to older persons are not keeping pace with their
                growing needs. Millions of elders face loneliness, neglect,
                financial insecurity, abuse, chronic health conditions, loss
                of independence and limited opportunities to remain socially
                and economically engaged.
              </p>

              <p>
                Dementia is emerging as a major, often overlooked, public
                health and social care challenge - affecting not only
                individuals, but entire families. Many older persons,
                particularly those from vulnerable communities, struggle to
                access appropriate healthcare, safe living environments,
                trained caregivers, meaningful activities and dignified
                support.
              </p>

              <p>
                These are no longer individual or family concerns. They are
                challenges that society must address together with
                compassion, innovation and a commitment to ensuring that
                every older person can age with dignity, security and
                purpose.
              </p>
            </div>
          </Reveal>

          {/* <div className="mt-6 sm:mt-auto sm:pt-8">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#F5A623] to-[#E85A3F] sm:w-14" />
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/80 sm:text-[10px] sm:tracking-[0.2em]">
                Dignity · Security · Purpose
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
              <span className="hidden text-[10px] font-medium tracking-wide text-white/50 sm:inline-block">
                Nightingales Medical Trust
              </span>
            </div>
          </div> */}
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}