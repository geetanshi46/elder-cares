/* eslint-disable prettier/prettier */
import {
  Brain,
  HeartHandshake,
  Activity,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import dementiaDayCareImage from "@/assets/dementia-day-care.webp";

const SERVICES = [
  {
    icon: Brain,
    title: "DEMENTIA AND MEDICAL CARE",
    hash: "dementia-care",
    body: "Caring for a loved one living with dementia can be emotionally and physically demanding. Families often experience stress, sleep deprivation and caregiver burnout. We provide a comprehensive continuum of care and support services for persons living with dementia and their families, ensuring dignity, safety, and understanding at every stage.",
    highlight: "Currently we run 3 Memory Clinics, 3 Day Care Centres, 3 Residential Care Facilities and an online Dementia Risk Reduction Programme.",
  },
  {
    icon: HeartHandshake,
    title: "CARE FOR MARGINALIZED ELDERS",
    hash: "marginalized",
    body: "5 Day Care Centres & Hiriyarawadies, 2 Homes for Homeless Elders providing safe shelter and dignified living, and a free Geriatric Clinic ensuring access to essential care services for underserved elders.",
  },
  {
    icon: ShieldCheck,
    title: "PREVENTION OF ELDER ABUSE",
    hash: "elder-protection",
    body: "Providing timely assistance and protection for elders in distress, addressing issues of abuse, neglect, harassment, exploitation, and ill-treatment with sensitivity and urgency.",
  },
  {
    icon: Briefcase,
    title: "EMPOWERMENT AND LIVELIHOOD",
    hash: "empowerment-livelihood",
    body: "Creating opportunities for meaningful engagement and income generation for older persons through second careers, skill development, digital literacy, and cyber safety programmes that foster independence and confidence.",
  },
  {
    icon: Activity,
    title: "SUPPORTING OLD AGE HOMES",
    hash: "old-age-homes",
    body: "Active ageing programmes implemented across 28 old age homes, promoting physical health, cognitive engagement, emotional well-being, and social inclusion.",
  },
  {
    icon: GraduationCap,
    title: "TRAINING AND CAPACITY BUILDING",
    hash: "capacity-building",
    body: "Designated as a Regional Resource and Training Centre by the Government of India, we build the capacity of NGOs engaged in elder care. We offer training for bedside assistants, family caregivers, dementia care professionals, and life-saving skills to strengthen the care ecosystem.",
  },
  {
    icon: Megaphone,
    title: "AWARENESS AND ADVOCACY",
    hash: "awareness",
    body: "Protecting the rights, dignity, and inclusion of older persons and individuals living with dementia through sustained policy advocacy, community engagement, and the creation of age-inclusive societies.",
  },
];

const FEATURED = SERVICES[0];
const SUPPORTING = SERVICES.slice(1);

export function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#FFF4DF]
        py-14
        sm:py-16
        lg:py-28
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
          ========================================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#ED6439]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-[45%] h-96 w-96 rounded-full bg-[#E85A3F]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#ED6439]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            SECTION HEADING
            ========================================================= */}

        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-[3px] w-10 shrink-0 rounded-full bg-[#ED6439] sm:w-12" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#E85A3F]
                  sm:text-sm
                  sm:tracking-[0.18em]
                  lg:text-lg
                  lg:tracking-[0.22em]
                "
              >
                Our Services & Work
              </span>
            </div>

            <h2
              className="
                max-w-4xl
                font-display
                text-[1.55rem]
                font-extrabold
                leading-[1.12]
                text-ink
                sm:text-3xl
                lg:text-[2.75rem]
                lg:leading-[1.08]
              "
            >
              <span
                className="
                  block
                  whitespace-normal
                  text-[#ED6439]
                  lg:whitespace-nowrap
                "
              >
                Transforming Ageing. Advancing Dementia Care. Enriching Lives.
              </span>
            </h2>
          </div>
        </Reveal>

        {/* =========================================================
            FEATURED SERVICE — DEMENTIA CARE
            ========================================================= */}

        <Reveal delay={100} className="mt-10 sm:mt-12 lg:mt-14">
          <Link
            to="/services"
            hash={FEATURED.hash}
            className="
              group
              relative
              flex
              flex-col
              overflow-hidden
              rounded-none
              border
              border-[#E85A3F]/15
              bg-white
              shadow-[0_25px_70px_-20px_rgba(190,70,20,0.22)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_35px_90px_-20px_rgba(190,70,20,0.30)]
              lg:min-h-[420px]
              lg:flex-row
            "
          >
            {/* =====================================================
                IMAGE
                ===================================================== */}

            <div
  className="
    relative
    w-full
    shrink-0
    overflow-hidden
    aspect-[4/3]
    sm:aspect-[16/10]
    lg:aspect-auto
    lg:min-h-full
    lg:w-[60%]
  "
>
  <img
    src={dementiaDayCareImage}
    alt="Dementia Day Care at Nightingales Medical Trust"
    loading="lazy"
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-[72%_center]
      transition-transform
      duration-700
      ease-out
      group-hover:scale-105
    "
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#E85A3F]/15 via-transparent to-[#ED6439]/10" />

  <span
    className="
      absolute
      left-4
      top-4
      grid
      h-14
      w-14
      place-items-center
      rounded-2xl
      bg-gradient-to-br
      from-[#E85A3F]
      to-[#ED6439]
      text-white
      shadow-[0_10px_30px_rgba(232,90,63,0.35)]
      transition-all
      duration-500
      group-hover:scale-110
      group-hover:rotate-3
      sm:left-6
      sm:top-6
      sm:h-16
      sm:w-16
    "
  >
    <FEATURED.icon
      className="h-7 w-7 sm:h-8 sm:w-8"
      strokeWidth={1.7}
    />
  </span>
</div>

            {/* =====================================================
                CONTENT
                ===================================================== */}

            <div
              className="
                relative
                flex
                flex-1
                flex-col
                justify-center
                p-6
                sm:p-8
                lg:p-14
              "
            >
              {/* Small accent */}
              <div className="mb-4 h-1 w-14 rounded-full bg-[#ED6439] sm:mb-5 sm:w-16" />

              <h3
                className="
                  font-display
                  text-2xl
                  font-extrabold
                  leading-tight
                  text-[#ED6439]
                  sm:text-3xl
                  lg:text-[2.2rem]
                "
              >
                {FEATURED.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-[14px]
                  leading-relaxed
                  text-muted-foreground
                  sm:mt-5
                  sm:text-[15.5px]
                "
              >
                {FEATURED.body}
              </p>

              {FEATURED.highlight && (
                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-[14px]
                    font-bold
                    leading-relaxed
                    text-[#1A1A1A]
                    sm:text-[15px]
                  "
                >
                  {FEATURED.highlight}
                </p>
              )}

              <span
                className="
                  relative
                  mt-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-[#E85A3F]
                  transition-colors
                  duration-300
                  group-hover:text-[#ED6439]
                  sm:mt-8
                "
              >
                Learn more

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  strokeWidth={2.3}
                />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* =========================================================
            SUPPORTING SERVICES
            ========================================================= */}

        <div
          className="
            mt-6
            grid
            gap-4
            sm:mt-8
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
          "
        >
          {SUPPORTING.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 100}
            >
          <Link
  to={`/services#${service.hash}` as "/services"}
  className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  border
                  border-[#E85A3F]/10
                  bg-white
                  p-6
                  shadow-[0_12px_35px_-15px_rgba(190,70,20,0.18)]
                  transition-all
                  duration-400
                  hover:-translate-y-2
                  hover:border-[#E85A3F]/25
                  hover:shadow-[0_20px_45px_-15px_rgba(190,70,20,0.25)]
                  sm:p-7
                  lg:p-8
                "
              >
                {/* TOP COLOR BAR */}
                <span
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    origin-left
                    scale-x-40
                    bg-[#ED6439]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                {/* Soft hover glow */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-[#ED6439]/15
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* ICON */}
                <span
                  className="
                    relative
                    grid
                    h-14
                    w-14
                    shrink-0
                    place-items-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#FFF0E6]
                    to-[#FFE2C7]
                    text-[#ED6439]
                    shadow-[0_8px_20px_rgba(232,90,63,0.15)]
                    transition-all
                    duration-400
                    group-hover:scale-110
                    group-hover:bg-gradient-to-br
                    group-hover:from-[#E85A3F]
                    group-hover:to-[#ED6439]
                    group-hover:text-white
                    sm:h-16
                    sm:w-16
                  "
                >
                  <service.icon
                    className="h-7 w-7 sm:h-8 sm:w-8"
                    strokeWidth={1.7}
                  />
                </span>

                {/* TITLE */}
                <h3
                  className="
                    relative
                    mt-5
                    font-display
                    text-base
                    font-extrabold
                    leading-snug
                    text-[#ED6439]
                    transition-colors
                    duration-300
                    group-hover:text-[#E85A3F]
                    sm:mt-6
                    sm:text-lg
                  "
                >
                  {service.title}
                </h3>

                {/* BODY */}
                <p
                  className="
                    relative
                    mt-3
                    flex-1
                    text-[14px]
                    leading-relaxed
                    text-muted-foreground
                    sm:text-[14.5px]
                  "
                >
                  {service.body}
                </p>

                {/* LEARN MORE */}
                <span
                  className="
                    relative
                    mt-5
                    inline-flex
                    items-center
                    gap-1.5
                    text-[13px]
                    font-bold
                    text-[#E85A3F]
                    transition-colors
                    duration-300
                    group-hover:text-[#ED6439]
                    sm:mt-6
                  "
                >
                  Learn more

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                    strokeWidth={2.2}
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}