import dementiaImage from "@/assets/silent-crisis.webp";
import { Reveal } from "@/components/site/Reveal";

export function SilentCrisis() {
  return (
    <section
      id="crisis"
      className="relative overflow-hidden bg-sand py-20 lg:py-28"
    >
      {/* Subtle decorative background glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative">
          {/* Soft glow behind image */}
          <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-2xl" />

          <div className="group relative overflow-hidden rounded-[2.25rem] border border-border/50 shadow-[0_25px_65px_-15px_rgba(0,0,0,0.25)] transition-shadow duration-500 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.3)]">
            <img
              src={dementiaImage}
              alt="An elderly man sitting quietly by a window holding an old photograph"
              width={1200}
              height={1408}
              loading="lazy"
              className="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[540px]"
            />

            {/* Subtle warm gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-primary/10" />
          </div>

          {/* Small elegant accent frame */}
          <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2.25rem] border-2 border-primary/20 sm:-bottom-6 sm:-right-6" />
        </Reveal>

        <Reveal delay={120} className="lg:pl-4">
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.9rem]">
            The Silent Crisis
          </h2>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-primary to-accent" />
          </div>

          <p className="mt-7 text-[15.5px] leading-[1.9] text-muted-foreground sm:text-base">
            India is ageing rapidly, but the systems and support available to
            older persons are not keeping pace with their growing needs.
            Millions of elders face loneliness, neglect, financial insecurity,
            abuse, chronic health conditions, loss of independence and limited
            opportunities to remain socially and economically engaged. Dementia
            is emerging as a major and often invisible public health and social
            care challenge, affecting not only individuals but entire families.
            Many older persons, particularly those from vulnerable communities,
            struggle to access appropriate healthcare, safe living environments,
            trained caregivers, meaningful activities and dignified support.
            These challenges are no longer individual or family problems. They
            are national concerns requiring immediate coordinated action.
          </p>
        </Reveal>
      </div>
    </section>
  );
}