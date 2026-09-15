import { Reveal } from "@/components/site/Reveal";
import {
  ArrowUpRight,
  Users,
  HeartHandshake,
  Brain,
  Briefcase,
  Monitor,
  GraduationCap,
  PhoneCall,
  HandHeart,
} from "lucide-react";

import impactImage from "@/assets/impact-image.webp";

export function Impact() {
  return (
    <section
      id="impact"
      aria-label="Our Impact"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#fff8ef]
        via-[#fff3e5]
        to-[#fffaf5]
        pt-20
pb-8
lg:pt-28
lg:pb-12
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
          ========================================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F5A623]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-[#E85A3F]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#F5A623]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            SECTION HEADING
            ========================================================= */}

        <Reveal>
          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[4px] w-16 rounded-full bg-gradient-to-r from-[#E85A3F] to-[#F5A623] sm:w-20" />

<span className="text-base font-bold uppercase tracking-[0.22em] text-[#E85A3F] sm:text-lg lg:text-xl">
  Our Impact
</span>
            </div>

            <h2
              className="
                font-display
                text-3xl
                font-extrabold
                leading-[1.08]
                text-ink
                sm:text-4xl
                lg:text-[3.3rem]
              "
            >
              Making a Difference{" "}
             <span className="text-[#ED6439]">
  Since 1998
</span>
            </h2>

          </div>
        </Reveal>


        {/* =========================================================
            MAIN IMPACT CARD
            ========================================================= */}

        <Reveal delay={100} className="mt-12">

          <div
            className="
              relative
              overflow-hidden
              bg-[#E15925]
              shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)]
            "
          >

            {/* Decorative glows */}

            <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#E85A3F]/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#F5A623]/15 blur-3xl" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E85A3F]/5 blur-[100px]" />

            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">

              {/* =====================================================
                  LEFT — LIFETIME IMPACT
              ===================================================== */}

              <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

                <div className="mb-8 flex items-center gap-3">
                  <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-[#E85A3F] to-[#F5A623]" />

                  <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                    Lifetime Impact
                  </h3>
                </div>


                {/* IMPACT STATS */}

                <div className="grid gap-4 sm:grid-cols-2">

                  {/* 1 */}
                  <ImpactStat
                    icon={Users}
                    number="3.36 Lakh+"
                    text="Elders impacted"
                  />

                  {/* 2 */}
                  <ImpactStat
                    icon={PhoneCall}
                    number="47000+"
                    text="Counseling Sessions to Assist Elders in Distress"
                  />

                  {/* 3 */}
                  <ImpactStat
                    icon={Brain}
                    number="2000+"
                    text="Elders with Dementia served"
                  />

                  {/* 4 */}
                  <ImpactStat
                    icon={HandHeart}
                    number="6000+"
                    text="Marginalized Elders Assisted"
                  />

                  {/* 5 */}
                  <ImpactStat
                    icon={Briefcase}
                    number="11"
                    text="Job Fairs for Elders"
                  />

                  {/* 6 */}
                  <ImpactStat
                    icon={Monitor}
                    number="200+"
                    text="Computer and Digital Literacy Programs"
                  />

                  {/* 7 */}
                  <ImpactStat
                    icon={Briefcase}
                    number="4000+"
                    text="Employment Opportunities created for Elders"
                  />

                  {/* 8 */}
                  <ImpactStat
                    icon={GraduationCap}
                    number="80,000+"
                    text="People Trained in Lifesaving Skills"
                  />

                  {/* 9 */}
                  <ImpactStat
                    icon={HeartHandshake}
                    number="5000+"
                    text="Caregivers Trained"
                  />

                  <ImpactStat
                    icon={Users}
                    number="8000+"
                    text="Volunteer and Interns engaged"
                  />

                  <ImpactStat
                    icon={HeartHandshake}
                    number="60+"
                    text="Corporate Organisations partnered"
                  />

                </div>

              </div>


              {/* =====================================================
                  RIGHT — IMPACT IMAGE
              ===================================================== */}

              <div className="relative min-h-[360px] lg:min-h-full">
<img
  src={impactImage}
  alt="Nightingales Medical Trust impact"
  width={1600}
  height={1000}
  className="
    absolute inset-0
    h-full w-full
    object-cover
    object-[55%_30%]
    sm:object-[55%_35%]
    md:object-[55%_40%]
    lg:object-[55%_center]
  "
/>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#E15925]/70 via-[#E15925]/15 to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#E15925]/45 via-transparent to-transparent" />

              </div>

            </div>
          </div>

        </Reveal>





        {/* =========================================================
            EVERY DAY STATEMENT
        ========================================================= */}

       <Reveal delay={200} className="mt-8">
  <div
    className="
      relative
      overflow-hidden
      bg-[#ED6439]
      px-7
      py-10
      text-center
      shadow-[0_20px_50px_-15px_rgba(237,100,57,0.35)]
      sm:px-12
      sm:py-12
    "
  >
    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

    <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-black/10 blur-3xl" />

    <div className="relative">
      <p
        className="
          font-display
          text-xl
          font-extrabold
          leading-tight
          text-white
          sm:text-2xl
          lg:text-[2rem]
        "
      >
        EVERY DAY 800+ OLDER PERSONS FROM ALL SOCIAL AND ECONOMIC
        BACKGROUNDS BENEFIT
      </p>
    </div>
  </div>
</Reveal>


       

      </div>
    </section>
  );
}


/* =========================================================
   LIFETIME IMPACT STAT
   ========================================================= */

function ImpactStat({
  icon: Icon,
  number,
  text,
}: {
  icon: typeof Users;
  number: string;
  text: string;
}) {
  return (
    <div
      className="
        group/stat
        flex
        items-start
        gap-4
        border
        border-white/10
        bg-white/[0.05]
        p-5
        transition-all
        duration-300
        hover:border-[#ED6439]/30
        hover:bg-white/[0.08]
      "
    >
      <div
        className="
          grid
          h-11
          w-11
          shrink-0
          place-items-center
          bg-[#ED6439]
          text-white
          shadow-[0_8px_20px_rgba(237,100,57,0.25)]
          transition-transform
          duration-300
          group-hover/stat:scale-110
        "
      >
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>

      <div>
        <div
          className="
            font-display
            text-2xl
            font-extrabold
            leading-none
            text-white
          "
        >
          {number}
        </div>

        <p className="mt-2 text-[13px] leading-snug text-white/70">
          {text}
        </p>
      </div>
    </div>
  );
}


/* =========================================================
   CURRENT YEAR STAT
   ========================================================= */

function CurrentStat({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div
      className="
        group/stat
        relative
        border
        border-[#E85A3F]/10
        bg-[#fffaf5]
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#E85A3F]/25
        hover:bg-white
        hover:shadow-[0_12px_30px_-15px_rgba(232,90,63,0.3)]
      "
    >

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          bg-gradient-to-b
          from-[#E85A3F]
          to-[#F5A623]
          opacity-70
          transition-opacity
          group-hover/stat:opacity-100
        "
      />

      <div
        className="
          font-display
          text-2xl
          font-extrabold
          leading-none
          text-[#D94B28]
          sm:text-[1.75rem]
        "
      >
        {number}
      </div>

      <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
        {text}
      </p>

    </div>
  );
}