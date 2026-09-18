import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  PlayCircle,
  Newspaper,
  BookOpen,
  Images,
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  FileText,
  HeartHandshake,
  Users,
  GraduationCap,
  Megaphone,
  BriefcaseBusiness,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, CardGrid, InfoCard, DownloadList } from "@/components/site/Section";
import { Blogs } from "@/components/home/Blogs";
import { Reveal } from "@/components/site/Reveal";

// ============================================================
// IMPACT IMAGES
// ============================================================
import impactBanner from "@/assets/impact/impact-banner.webp";
import impactMedia from "@/assets/impact/impact-media.webp";
import impactStory from "@/assets/impact/impact-story.webp";

// ============================================================
// PAGE META
// ============================================================

const title = "Our Impact — Stories, Reports, Videos & Media | NMT";

const description =
  "Discover the impact of Nightingales Medical Trust through its work in dementia care, eldercare, active ageing, livelihood, training, outreach, stories, publications, videos and media.";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImpactPage,
});

// ============================================================
// ANIMATED NUMBER
// ============================================================

function AnimatedNumber({
  value,
  duration = 1400,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const match = value.replace(/,/g, "").match(/^(\d+)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] ?? "";

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1,
      );

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);

      setDisplayValue(
        current.toLocaleString("en-IN") + suffix,
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(
          target.toLocaleString("en-IN") + suffix,
        );
      }
    };

    requestAnimationFrame(animate);
  }, [started, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

// ============================================================
// STAT CARD
// ============================================================

function ImpactStat({
  value,
  label,
  delay = 0,
  dark = false,
}: {
  value: string;
  label: string;
  delay?: number;
  dark?: boolean;
}) {

  useEffect(() => {
  const slider = document.getElementById(
    "impact-testimonials-slider"
  );

  if (!slider) return;

  const autoScroll = window.setInterval(() => {
    const maxScrollLeft =
      slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScrollLeft - 5) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: Math.min(slider.clientWidth * 0.82, 420),
        behavior: "smooth",
      });
    }
  }, 3500);

  return () => {
    window.clearInterval(autoScroll);
  };
}, []);

  return (
    <Reveal delay={delay}>
      <div
        className={`group h-full rounded-[1.6rem] border p-6 transition-all duration-500 hover:-translate-y-1.5 ${
          dark
            ? "border-white/15 bg-white text-[#263746] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]"
            : "border-[#ED6439]/15 bg-white shadow-[0_18px_45px_-25px_rgba(38,55,70,0.18)] hover:border-[#ED6439]/35"
        }`}
      >
        <div className="font-display text-3xl font-extrabold tracking-tight text-[#ED6439] sm:text-4xl">
          <AnimatedNumber value={value} />
        </div>

        <div
          className={`mt-3 text-sm font-semibold leading-6 ${
            dark ? "text-[#526574]" : "text-[#526574]"
          }`}
        >
          {label}
        </div>
      </div>
    </Reveal>
  );
}

// ============================================================
// VIDEO DATA
// ============================================================

const impactVideos = [
  {
    title: "NMT Family Stories",
    category: "NMT Story",
    src: "/videos/nmt-family-stories.mp4",
    poster: impactStory,
  },
{
  title: "Awareness",
  category: "Awareness Videos",
  src: "/videos/nmt-awareness.mp4",
  poster: impactBanner,
},
  {
    title: "Jobs 60+ Mini Job Fair",
    category: "Senior Livelihood",
    src: "/videos/jobs60-mini-job-fair.mp4",
    poster: impactMedia,
  },
  {
    title: "NMT CSR",
    category: "CSR & Partnerships",
    src: "/videos/nmt-csr.mp4",
    poster: impactBanner,
  },
  {
    title: "Impact Stories — Volunteers Day",
    category: "Volunteer / Interns Stories",
    src: "/videos/01-impact-stories-volunteers-day.mp4",
    poster: impactStory,
  },
];

// ============================================================
// STORIES
// ============================================================

const changeStories = [
  {
    title: "Dementia & Medical Care",
    body: "Compassionate dementia and eldercare services that support persons with dementia and their families.",
    icon: HeartHandshake,
  },
  {
    title: "Active Ageing & Social Integration",
    body: "Programmes that encourage participation, connection, activity and dignity in later life.",
    icon: Users,
  },
  {
    title: "Programs for Marginalized Elders",
    body: "Need-based support for elders from vulnerable and economically disadvantaged backgrounds.",
    icon: HeartHandshake,
  },
  {
    title: "Empowerment & Livelihood",
    body: "Creating opportunities for elders to remain active, independent and financially engaged.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Staff & Interns",
    body: "Building the people and skills required to strengthen eldercare services.",
    icon: GraduationCap,
  },
  {
    title: "Volunteers & Donors",
    body: "People and partners who contribute time, resources and support to NMT's work.",
    icon: Users,
  },
];

// ============================================================
// TESTIMONIAL DATA
// ============================================================

const impactTestimonials = [
  {
    quote:
      "We were skeptical at first when we decided to bring our mother to Nightingales Centre for Ageing and Alzheimer’s but as soon as my sister and I stepped into the institution and talked to the doctors, we felt assured that this was the right place. We finally had someone who could explain to us the nature of the disease, provide the medicines that will help soothe my mother, and provide individual care without having to impose on her space and freedom. Setting a routine in an expanded, yet controlled environment, we found, was critical. As the months went by, we felt her grow calmer, more relaxed and more vocal. Only at NCAA, were we able to understand the unique problems that came with dementia and we finally felt that she was able to get the help that she required. My mother has been here for over 7 years now. Even though her physical faculties have reduced considerably, we are very sure that the best place that she could be taken care of is in NCAA. And we are grateful every day to all of the staff who take such loving care of my mother.",
    title: "Best care for my mother...",
    author:
      "Vanaja Nair - Daughter of one of our residents at Nightingales Centre for Ageing & Alzheimer’s",
  },
  {
    quote:
      "My mother is a long term resident of ETCM - Nightingles Dementia Care Centre at Kolar for the last 3 years. I am very happy with the level and quality of care that is provided to my mother. The carers are well-trained and are caring and deligent. Nurses are very attentive to all the needs of the patients. The incharge is knowledgeable and proactive in managing patients' needs and services. She manages the facility efficiently providing a very supportive and caring environment.",
    title: "Excellent quality of care...",
    author:
      "Ruma Ray - Daughter of one of our residents at ETCM – Nightingales Dementia Care Centre",
  },
  {
    quote:
      "My mother has greatly benefitted from the program conducted by the Red Cross - Nightingales Trust Dementia Care Centre. She is involved in many creative activities on a daily basis like drawing, puzzle solving, cooking and Physiotherapy at the Centre. I have seen a drastic change in her health and activity since she has been enrolled. She seems to be mentally happier, and physically active. She truly has a great time with the volunteers and staff there. I would like to thank the team for this wonderful improvement in my mother’s life.",
    title: "Drastic change in mother's health",
    author:
      "Nizar Ali - Son of Mrs Habeeba Begum, a member of the Dementia Day Care Centre.",
  },
  {
    quote:
      "We were worried to leave our aged mother alone at home when we had to go out for work. After a long search NMT seemed to be the best place in terms of facility and care. So having trusted we have placed her in these safe hands. We are now at peace. They keep her busy with activities so that she doesn’t feel left alone. The care shown towards her is very heart warming. It’s amazing to see how she’s become calm and more alert and is getting more involved in daily activities like reading newspaper and helping us in folding the clothes. We are immensely grateful for the staff for taking care of my mother so patiently and keeping her in safe hands...",
    title: "Great place for my mother...",
    author:
      "Rangini - Daughter of Kalavathi, member of our Day Care Centre",
  },
  {
    quote:
      "My aunt is a changed person after she started coming to Nightingales Trust Dementia Day Care Centre. She looks forward to going to the Centre everyday. NMT has been a blessing too for us, her caregivers. While we are at work we are at peace knowing that she is safe and sound under your care. We are truly thankful and grateful for the wonderful effort each one of you is putting in, for making the lives of dementia patients more meaningful and in turn helping the caregivers breathe easier. A big thank you.",
    title: "We are at peace…",
    author:
      "Family carers of Mrs. Shambhavi, one of our Day Care Members",
  },
  {
    quote:
      "About 8 years, we noticed a change in my father. My mother was the first to point it out. He sometimes wasn’t sure where he was and he forgot things. He being the head of the family and independent we relied on him for everything. It was very difficult for him and all of us to accept his condition His doctor referred us to your organization. At the beginning stage he was very reluctant to come to the Centre but as the days went by he enjoys doing activities and physiotherapy that you provide. He enjoys interacting with people and doing group activities. He even teaches the staff or other residents in the organization about Pranic healing. He is always happy and cheerful when he comes to the Centre. My father’s doctor was particular that he goes for walks. He is given sufficient exercise at the Centre. It is much safer than going for walks on the streets. We are very grateful that you provide caring transportation and we don’t have to worry about his safety. I hope you continue to help him and other patients in the best possible way.",
    title: "Father looks forward to the Centre...",
    author:
      "Son of one of the members of our Centre",
  },
  {
    quote:
      "I am impressed by Nightingales Medical Trust in their professionalism and in understanding the specific needs of my father. My father is taken care with love and affection.Every time he comes back home he is very happy and looks forward to go to the Centre again. We see how he enjoys doing the activities in the center and has started writing again. I am very happy with the service Nightingales Medical Trust is providing and the staff here are always co-operative. Keep up the good work",
    title: "Impressed by the care...",
    author: "Son of one of our members",
  },
];

// ============================================================
// MAIN PAGE
// ============================================================

function ImpactPage() {
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof impactVideos)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedVideo) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () =>
      window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <SiteLayout>
     {/* ======================================================
    HERO
    ====================================================== */}

<section
  id="impact"
  className="relative isolate w-full overflow-hidden bg-[#263746]"
>
  <div className="relative w-full">
    <img
      src={impactBanner}
      alt="Our Impact"
      className="block h-auto w-full object-cover object-center"
    />

    {/* Very light overlay — image remains clearly visible */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#E15925]/30 via-[#E15925]/10 to-transparent" />

    {/* Hero Content */}
    <div className="absolute inset-0 z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
      <Reveal>
        <h1 className="font-display text-5xl font-black tracking-[-0.045em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.3)] sm:text-6xl lg:text-8xl">
  Impact
</h1>
      </Reveal>
    </div>
  </div>
</section>

      {/* ======================================================
          OUR IMPACT — LONG TERM NUMBERS
          ====================================================== */}

      <section
        id="numbers"
        className="scroll-mt-24 bg-[#FBF6EC] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
              <span className="h-px w-12 bg-[#ED6439]" />
              <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base">
                Our Impact
              </span>
            </div>

            <h2 className="mt-5 max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-[-0.035em] text-[#263746] sm:text-4xl lg:text-5xl">
              The Numbers Behind The Care.
            </h2>

            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#526574] sm:text-base">
              Since 1998, Nightingales Medical Trust has worked across
              dementia care, eldercare, active ageing, livelihoods,
              training, outreach and advocacy.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ImpactStat
              value="3.36L+"
              label="Elders impacted"
              delay={0}
            />

            <ImpactStat
              value="47000+"
              label="Counseling Sessions to Assist Elders in Distress"
              delay={80}
            />

            <ImpactStat
              value="2000+"
              label="Elders with Dementia served"
              delay={160}
            />

            <ImpactStat
              value="6000+"
              label="Marginalized Elders Assisted"
              delay={240}
            />

            <ImpactStat
              value="11"
              label="Job Fairs for Elders"
              delay={320}
            />

            <ImpactStat
              value="200+"
              label="Computer and Digital Literacy Programs"
              delay={400}
            />

            <ImpactStat
              value="4000+"
              label="Employment Opportunities created for Elders"
              delay={480}
            />

            <ImpactStat
              value="80000+"
              label="People Trained in Lifesaving Skills"
              delay={560}
            />

            <ImpactStat
              value="5000+"
              label="Caregivers Trained"
              delay={640}
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          2025-26 IMPACT
          ====================================================== */}

      <section
        id="annual-impact"
        className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
              <span className="h-px w-12 bg-[#ED6439]" />
              <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base">
                During 2025-26
              </span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ImpactStat value="38633" label="Elders served" delay={0} />

            <ImpactStat
              value="498"
              label="Persons with dementia supported with residential and day care services"
              delay={80}
            />

            <ImpactStat
              value="145+"
              label="destitute elders served"
              delay={160}
            />

            <ImpactStat
              value="161"
              label="marginalized elders supported through Hiriyarawadies"
              delay={240}
            />

            <ImpactStat
              value="13159"
              label="Actionable helpline calls handled"
              delay={320}
            />

            <ImpactStat
              value="241"
              label="Seniors placed in employment"
              delay={400}
            />

            <ImpactStat
              value="654"
              label="elders reached through Mobile Active Ageing in 28 Old Age Homes"
              delay={480}
            />

            <ImpactStat
              value="2510+"
              label="People trained in care & lifesaving skills"
              delay={560}
            />

            <ImpactStat
              value="1647"
              label="volunteers and interns engaged"
              delay={640}
            />

            <ImpactStat
              value="36"
              label="corporate organisations partnered with NMT"
              delay={720}
            />
          </div>

          <Reveal delay={780}>
            <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#ED6439] px-6 py-8 text-center shadow-[0_25px_70px_-30px_rgba(237,100,57,0.45)] sm:px-10 sm:py-10">
              <p className="font-display text-xl font-black uppercase tracking-wide text-white sm:text-2xl lg:text-3xl">
                EVERY DAY 800+ OLDER PERSONS FROM ALL SOCIAL AND ECONOMIC
                BACKGROUNDS
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================
          IMPACT OF NMT
          ====================================================== */}

      <section
        id="impact-of-nmt"
        className="scroll-mt-24 bg-[#FBF6EC] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
              <span className="h-px w-12 bg-[#ED6439]" />
              <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base">
                Impact of NMT
              </span>
            </div>

            <h2 className="mt-5 max-w-5xl font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.035em] text-[#263746] sm:text-4xl lg:text-5xl">
              We are transforming the lives of elders and their families through compassionate, accessible dementia and elder care services that restore purpose and dignity.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <Reveal>
              <div className="h-full overflow-hidden rounded-[2rem] border border-[#ED6439]/15 bg-white shadow-[0_25px_65px_-30px_rgba(38,55,70,0.2)]">
                <img
  src={impactMedia}
  alt="Nightingales Medical Trust eldercare services"
  className="h-full min-h-[360px] w-full object-cover"
  loading="lazy"
/>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-[2rem] border border-[#263746]/10 bg-white p-7 shadow-[0_25px_65px_-30px_rgba(38,55,70,0.16)] sm:p-9 lg:p-10">
                <p className="text-[15px] leading-7 text-[#526574] sm:text-base sm:leading-8">
                  Nightingales Medical Trust, a leading eldercare
                  organization in India has had a lasting impact on the
                  quality of life of elders, particularly persons with
                  dementia in India, going beyond the boundaries of age,
                  gender, special needs, livelihoods, and economic status.
                  Its work addresses the most urgent demographic shifts in
                  the country – that of growth of the elderly population in
                  India and the growth and detection of dementia in elders.
                </p>
              </div>
            </Reveal>
          </div>

          {/* OUTREACH */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <article className="h-full overflow-hidden rounded-[2rem] border border-[#ED6439]/15 bg-white shadow-[0_20px_55px_-28px_rgba(38,55,70,0.2)]">
                <div className="h-64 overflow-hidden sm:h-80">
                  <img
  src={impactStory}
  alt="NMT outreach"
  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
  loading="lazy"
/>
                </div>

                <div className="p-7 sm:p-9">
                  {/* <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439]">
                    Outreach
                  </p> */}

                  <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-[#263746] sm:text-3xl">
                    Personalization of Eldercare and Addressing a Wide
                    Gamut of Issues
                  </h3>

                  <p className="mt-5 text-[15px] leading-7 text-[#526574] sm:text-base sm:leading-8">
                    NMT has personalized eldercare through caregiver
                    training services, dementia residential and day-care
                    centers, residential facilities such as Smriti Gram,
                    elder abuse helplines, and jobs for those 60+ to cater
                    to every need of the elderly. This has structured and
                    widened its impact across every channel of eldercare.
                    The efforts that have gone into these separate
                    initiatives are proof of the glorious vision of the
                    people at the helm of Nightingales Medical Trust and
                    the people in the various teams who have tirelessly
                    contributed to the impact the organization creates.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="h-full overflow-hidden rounded-[2rem] border border-[#ED6439]/15 bg-white shadow-[0_20px_55px_-28px_rgba(38,55,70,0.2)]">
                <div className="h-64 overflow-hidden sm:h-80">
                  <img
  src={impactMedia}
  alt="NMT training and awareness activities"
  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
  loading="lazy"
/>
                </div>

                <div className="p-7 sm:p-9">
                  {/* <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439]">
                    Training Centre
                  </p> */}

                  <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-[#263746] sm:text-3xl">
                    Advocacy Awareness Campaigns that Have Stood the Test
                    of Time and Place
                  </h3>

                  <p className="mt-5 text-[15px] leading-7 text-[#526574] sm:text-base sm:leading-8">
                    The Trust’s advocacy and awareness initiatives have
                    particularly created a shift in public perception. By
                    normalizing conversations around aging and dementia,
                    NMT has contributed to reducing stigma and encouraging
                    very early diagnosis and intervention. Through
                    collaborations with community stakeholders, hospitals
                    and policymakers, it has extended its reach even
                    beyond Karnataka to Kerala and the Lakshadweep (with
                    its RRTC initiative).
                  </p>
                </div>
              </article>
            </Reveal>
          </div>

          {/* SUSTAINABILITY */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[2rem] border border-[#ED6439]/15 bg-white p-7 shadow-[0_20px_55px_-28px_rgba(38,55,70,0.18)] sm:p-9 lg:p-10">
                {/* <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439]">
                  Outreach
                </p> */}

                <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-[#263746] sm:text-3xl">
                  Sustainability is Another Key Marker in NMT’s Vision for
                  Growth
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-[#526574] sm:text-base sm:leading-8">
                  This is another key dimension of impact. By training
                  caregivers, nurses, social workers, and community
                  volunteers, NMT strengthens the broader healthcare
                  system rather than only functioning as a care service
                  partner and provider. If this ensures sustainability for
                  its dementia care services, the mobile active ageing
                  program does the same for its active ageing initiatives
                  transforming ordinary daycare centers into caregivers par
                  excellence.
                </p>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="h-full rounded-[2rem] border border-[#ED6439]/15 bg-white p-7 shadow-[0_20px_55px_-28px_rgba(38,55,70,0.18)] sm:p-9 lg:p-10">
                {/* <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439]">
                  Training Centre
                </p> */}

                <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-[#263746] sm:text-3xl">
                  Towards a Better Society
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-[#526574] sm:text-base sm:leading-8">
                  NMT’s impact extends beyond direct beneficiaries to
                  families, professionals, and policymakers, contributing
                  meaningfully to a more age-inclusive society and building
                  a society where every elder feels cared for and respected.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================
          STORIES OF CHANGE
          ====================================================== */}

      <section
        id="stories"
        className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
              <span className="h-px w-12 bg-[#ED6439]" />
              <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base">
                Stories of Change
              </span>
            </div>

            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-[-0.035em] text-[#263746] sm:text-4xl lg:text-5xl">
              we have tounched many lives
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#526574] sm:text-base">
              Read about some of these here.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {changeStories.map((story, index) => {
              const Icon = story.icon;

              return (
                <Reveal key={story.title} delay={index * 80}>
                  <article className="group h-full rounded-[1.75rem] border border-[#ED6439]/15 bg-white p-6 shadow-[0_16px_45px_-25px_rgba(38,55,70,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#ED6439]/35 hover:shadow-[0_25px_55px_-25px_rgba(237,100,57,0.2)] sm:p-7">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ED6439]/10 text-[#ED6439] transition-all duration-500 group-hover:bg-[#ED6439] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 font-display text-xl font-extrabold leading-tight text-[#263746] transition-colors group-hover:text-[#ED6439]">
                      {story.title}
                    </h3>

                    <p className="mt-3 text-[14.5px] leading-7 text-[#526574]">
                      {story.body}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-[#ED6439]/30 transition-all duration-500 group-hover:w-16 group-hover:bg-[#ED6439]" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          EXISTING CASE STUDIES
          ====================================================== */}

      <Section
        id="case-studies"
        eyebrow="Stories & case studies"
        title="Behind every number, a person."
        tone="sand"
      >
        <CardGrid cols={3}>
          {[
            {
              title: "Case study — Early diagnosis",
              body: "How a memory clinic screening at 62 gave one family eight more good years together.",
            },
            {
              title: "Case study — Sandhya Kirana",
              body: "Restoring pension, medicines and dignity to elders living alone in a Bengaluru slum.",
            },
            {
              title: "Case study — Helpline 1090",
              body: "An abuse intervention that reunited an elder with safe housing and legal protection.",
            },
          ].map((s, i) => (
            <InfoCard
              key={s.title}
              icon={BookOpen}
              title={s.title}
              body={s.body}
              delay={i * 100}
            />
          ))}
        </CardGrid>
      </Section>

<section
  id="testimonials"
  className="scroll-mt-24 bg-[#FBF6EC] py-16 sm:py-20 lg:py-24"
>
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* ======================================================
        SECTION HEADING
        ====================================================== */}

    <Reveal>
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
        <span className="h-px w-12 bg-[#ED6439]" />
        <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base">
          Testimonials
        </span>
      </div>

      <h2 className="mt-5 font-display text-3xl font-extrabold tracking-[-0.035em] text-[#263746] sm:text-4xl lg:text-5xl">
        Voices from families we care for.
      </h2>
    </Reveal>

    {/* ======================================================
        TESTIMONIAL CAROUSEL
        ====================================================== */}

    <div className="relative mt-10">

      {/* DESKTOP LEFT ARROW */}
      <button
        type="button"
        onClick={() => {
          const slider = document.getElementById(
            "impact-testimonials-slider",
          );

          if (slider) {
            slider.scrollBy({
              left: -Math.min(slider.clientWidth * 0.82, 420),
              behavior: "smooth",
            });
          }
        }}
        aria-label="Previous testimonial"
        className="
          absolute left-0 top-1/2 z-30 hidden
          h-11 w-11 -translate-y-1/2
          -translate-x-1/2
          place-items-center rounded-full
          border border-[#ED6439]/20
          bg-white text-[#ED6439]
          shadow-[0_8px_25px_rgba(237,100,57,0.18)]
          transition-all duration-300
          hover:bg-[#ED6439] hover:text-white
          lg:grid
        "
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* DESKTOP RIGHT ARROW */}
      <button
        type="button"
        onClick={() => {
          const slider = document.getElementById(
            "impact-testimonials-slider",
          );

          if (slider) {
            slider.scrollBy({
              left: Math.min(slider.clientWidth * 0.82, 420),
              behavior: "smooth",
            });
          }
        }}
        aria-label="Next testimonial"
        className="
          absolute right-0 top-1/2 z-30 hidden
          h-11 w-11 -translate-y-1/2
          translate-x-1/2
          place-items-center rounded-full
          border border-[#ED6439]/20
          bg-white text-[#ED6439]
          shadow-[0_8px_25px_rgba(237,100,57,0.18)]
          transition-all duration-300
          hover:bg-[#ED6439] hover:text-white
          lg:grid
        "
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* ======================================================
          SLIDER
          ====================================================== */}

      <div
        id="impact-testimonials-slider"
        className="
          flex gap-5
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          pb-3
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          sm:gap-6
        "
      >
        {impactTestimonials.map((item, index) => (
          <Reveal
            key={`${item.title}-${index}`}
            delay={index * 60}
            className="
              min-w-[88%]
              snap-start
              sm:min-w-[520px]
              lg:min-w-[calc((100%-48px)/3)]
            "
          >
            <article
              className="
                group relative flex h-[450px] flex-col
                overflow-hidden rounded-[1.75rem]
                border border-[#ED6439]/20
                bg-white p-6
                shadow-[0_20px_55px_-18px_rgba(38,55,70,0.20)]
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[#ED6439]/45
                hover:shadow-[0_30px_70px_-18px_rgba(237,100,57,0.28)]
                sm:h-[460px] sm:p-7
              "
            >

              {/* TOP ACCENT */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[#ED6439]" />

              {/* DECORATIVE GLOW */}
              <div
                className="
                  pointer-events-none absolute
                  -right-16 -top-16 h-36 w-36
                  rounded-full bg-[#ED6439]/10
                  blur-3xl
                  transition-transform duration-700
                  group-hover:scale-125
                "
              />

              {/* QUOTE ICON */}
              <div className="relative flex items-center justify-between">
                <div
                  className="
                    grid h-12 w-12 place-items-center
                    rounded-full bg-[#ED6439]
                    text-white
                    shadow-[0_10px_24px_rgba(237,100,57,0.25)]
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                >
                  <Quote className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <span className="font-serif text-4xl font-bold leading-none text-[#ED6439]/15">
                  “
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="
                  relative mt-5
                  font-display text-lg font-extrabold
                  leading-tight text-[#263746]
                  sm:text-xl
                "
              >
                {item.title}
              </h3>

              {/* TESTIMONIAL TEXT */}
              <blockquote
                className="
                  relative mt-4 flex-1
                  overflow-y-auto pr-2
                  font-serif text-[14px]
                  italic leading-[1.65]
                  text-[#526574]
                  sm:text-[14.5px]
                  [scrollbar-color:#ED6439_transparent]
                  [scrollbar-width:thin]
                "
              >
                “{item.quote}”
              </blockquote>

              {/* DIVIDER */}
              <div className="mt-5 h-px w-full shrink-0 bg-[#ED6439]/30" />

              {/* AUTHOR */}
              <div className="mt-5 flex min-w-0 shrink-0 items-center gap-3">
                <div
                  className="
                    grid h-11 w-11 shrink-0
                    place-items-center rounded-full
                    bg-[#ED6439]
                    font-display text-sm font-extrabold
                    text-white
                    shadow-[0_8px_20px_rgba(237,100,57,0.25)]
                  "
                >
                  {item.author
                    .split(" - ")[0]
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#263746]">
                    {item.author.split(" - ")[0]}
                  </p>

                  {item.author.includes(" - ") && (
                    <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-[#526574]">
                      {item.author.split(" - ").slice(1).join(" - ")}
                    </p>
                  )}
                </div>
              </div>

              {/* HOVER ACCENT */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-[3px] w-0
                  bg-[#ED6439]
                  transition-all duration-500
                  group-hover:w-full
                "
              />

            </article>
          </Reveal>
        ))}
      </div>

      {/* MOBILE ARROWS */}
      <div className="mt-6 flex justify-center gap-3 lg:hidden">

        <button
          type="button"
          onClick={() => {
            const slider = document.getElementById(
              "impact-testimonials-slider",
            );

            if (slider) {
              slider.scrollBy({
                left: -Math.min(slider.clientWidth * 0.82, 420),
                behavior: "smooth",
              });
            }
          }}
          aria-label="Previous testimonial"
          className="
            grid h-10 w-10 place-items-center
            rounded-full border border-[#ED6439]/20
            bg-white text-[#ED6439]
            shadow-sm transition-colors
            hover:bg-[#ED6439] hover:text-white
          "
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => {
            const slider = document.getElementById(
              "impact-testimonials-slider",
            );

            if (slider) {
              slider.scrollBy({
                left: Math.min(slider.clientWidth * 0.82, 420),
                behavior: "smooth",
              });
            }
          }}
          aria-label="Next testimonial"
          className="
            grid h-10 w-10 place-items-center
            rounded-full border border-[#ED6439]/20
            bg-white text-[#ED6439]
            shadow-sm transition-colors
            hover:bg-[#ED6439] hover:text-white
          "
        >
          <ChevronRight className="h-5 w-5" />
        </button>

      </div>

    </div>
  </div>
</section>


      {/* ======================================================
          PUBLICATIONS
          ====================================================== */}

      <Section
        id="publications"
        eyebrow="Publications"
        title="Annual reports, brochures, newsletters & research"
        tone="sand"
      >
        <DownloadList
          files={[
            {
              name: "Latest Newsletter",
              meta: "PDF",
              href: "https://nightingaleseldercare.com/assets/files/Newsletter_December_final.pdf",
            },
            {
              name: "Organisation Brochure",
              meta: "PDF — all NMT programmes",
              href: "https://nightingaleseldercare.com/assets/files/NMT-Brochure.pdf",
            },
            {
              name: "Smriti Gram Brochure",
              meta: "PDF · coming soon",
            },
            {
              name: "Annual Report",
              meta: "PDF · coming soon",
            },
            {
              name: "Research: Dementia prevalence in urban Karnataka",
              meta: "PDF · coming soon",
            },
            {
              name: "Research: Caregiver burden study",
              meta: "PDF · coming soon",
            },
          ]}
        />
      </Section>

     {/* ======================================================
    VIDEOS
    ====================================================== */}

<section
  id="videos"
  className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
>
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
    <Reveal>
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#ED6439]" />
        <span className="h-px w-12 bg-[#ED6439]" />
        <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ED6439] sm:text-base">
          Videos
        </span>
      </div>

      <h2 className="mt-5 font-display text-3xl font-extrabold tracking-[-0.035em] text-[#263746] sm:text-4xl lg:text-5xl">
        Watch our work.
      </h2>
    </Reveal>

    <div className="relative mt-10">
      {/* DESKTOP LEFT ARROW */}
      <button
        type="button"
        onClick={() => {
          const slider = document.getElementById("impact-videos-slider");
          if (slider) {
            slider.scrollBy({
              left: -Math.min(slider.clientWidth * 0.82, 420),
              behavior: "smooth",
            });
          }
        }}
        aria-label="Previous video"
        className="
          absolute left-0 top-1/2 z-30 hidden
          h-11 w-11 -translate-y-1/2 -translate-x-1/2
          place-items-center rounded-full
          border border-[#ED6439]/20
          bg-white text-[#ED6439]
          shadow-[0_8px_25px_rgba(237,100,57,0.18)]
          transition-all duration-300
          hover:bg-[#ED6439] hover:text-white
          lg:grid
        "
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* DESKTOP RIGHT ARROW */}
      <button
        type="button"
        onClick={() => {
          const slider = document.getElementById("impact-videos-slider");
          if (slider) {
            slider.scrollBy({
              left: Math.min(slider.clientWidth * 0.82, 420),
              behavior: "smooth",
            });
          }
        }}
        aria-label="Next video"
        className="
          absolute right-0 top-1/2 z-30 hidden
          h-11 w-11 -translate-y-1/2 translate-x-1/2
          place-items-center rounded-full
          border border-[#ED6439]/20
          bg-white text-[#ED6439]
          shadow-[0_8px_25px_rgba(237,100,57,0.18)]
          transition-all duration-300
          hover:bg-[#ED6439] hover:text-white
          lg:grid
        "
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* SLIDER */}
      <div
        id="impact-videos-slider"
        className="
          flex gap-5
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          pb-3
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          sm:gap-6
        "
      >
        {impactVideos.map((video, index) => (
          <Reveal
            key={video.title}
            delay={(index % 4) * 90}
            className="
              min-w-[88%]
              snap-start
              sm:min-w-[380px]
              lg:min-w-[calc((100%-48px)/3)]
            "
          >
            <article className="group h-full overflow-hidden rounded-[1.6rem] border border-[#ED6439]/15 bg-white shadow-[0_18px_45px_-25px_rgba(38,55,70,0.2)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#ED6439]/35 hover:shadow-[0_25px_55px_-25px_rgba(237,100,57,0.25)]">
              <button
                type="button"
                onClick={() => setSelectedVideo(video)}
                className="relative block aspect-video w-full overflow-hidden bg-[#263746] text-left"
                aria-label={`Play ${video.title}`}
              >
                <img
                  src={video.poster}
                  alt={`${video.title} video thumbnail`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#ED6439] text-white shadow-[0_12px_35px_rgba(237,100,57,0.35)] transition-all duration-300 group-hover:scale-110">
                    <PlayCircle className="h-7 w-7" />
                  </span>
                </div>
              </button>

              <div className="p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#ED6439]">
                  {video.category}
                </p>

                <h3 className="mt-2 font-display text-lg font-extrabold leading-tight text-[#263746] transition-colors group-hover:text-[#ED6439]">
                  {video.title}
                </h3>

                <button
                  type="button"
                  onClick={() => setSelectedVideo(video)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#ED6439]"
                >
                  Watch video
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* MOBILE ARROWS */}
      <div className="mt-6 flex justify-center gap-3 lg:hidden">
        <button
          type="button"
          onClick={() => {
            const slider = document.getElementById("impact-videos-slider");
            if (slider) {
              slider.scrollBy({
                left: -Math.min(slider.clientWidth * 0.82, 420),
                behavior: "smooth",
              });
            }
          }}
          aria-label="Previous video"
          className="
            grid h-10 w-10 place-items-center
            rounded-full border border-[#ED6439]/20
            bg-white text-[#ED6439]
            shadow-sm transition-colors
            hover:bg-[#ED6439] hover:text-white
          "
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => {
            const slider = document.getElementById("impact-videos-slider");
            if (slider) {
              slider.scrollBy({
                left: Math.min(slider.clientWidth * 0.82, 420),
                behavior: "smooth",
              });
            }
          }}
          aria-label="Next video"
          className="
            grid h-10 w-10 place-items-center
            rounded-full border border-[#ED6439]/20
            bg-white text-[#ED6439]
            shadow-sm transition-colors
            hover:bg-[#ED6439] hover:text-white
          "
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</section>

      {/* ======================================================
          MEDIA CENTRE
          ====================================================== */}

      <Section
        id="media-centre"
        eyebrow="Media centre"
        title="Press releases, coverage & photo gallery"
        tone="sand"
      >
        <CardGrid cols={3}>
          <InfoCard
            icon={Newspaper}
            title="Press Releases"
            items={[
              "Smriti Gram phase 2 milestone",
              "World Alzheimer's Month campaign",
              "Helpline 14567 expansion",
            ]}
          />

          <InfoCard
            icon={Newspaper}
            title="Media Coverage"
            delay={100}
            items={[
              "National dailies on dementia care",
              "Television features on Smriti Gram",
              "Radio and podcast interviews",
            ]}
          />

          <InfoCard
            icon={Images}
            title="Photo Gallery"
            delay={200}
            body="Images from centres, camps, training batches and events."
          />
        </CardGrid>

       
      </Section>

      {/* ======================================================
          BLOG
          ====================================================== */}

      <section id="blog" className="scroll-mt-24">
        <Blogs />
      </section>

      {/* ======================================================
          VIDEO MODAL
          ====================================================== */}

      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-black shadow-2xl sm:rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full bg-white text-[#263746] shadow-lg transition-all hover:bg-[#ED6439] hover:text-white sm:right-4 sm:top-4"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full bg-black">
            <video
  key={selectedVideo.src}
  src={selectedVideo.src}
  poster={selectedVideo.poster}
  controls
  autoPlay
  playsInline
  className="h-full w-full object-contain"
/>
            </div>

            <div className="bg-white px-5 py-5 sm:px-7 sm:py-6">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ED6439]">
                {selectedVideo.category}
              </p>

              <h3 className="mt-2 font-display text-xl font-extrabold text-[#263746] sm:text-2xl">
                {selectedVideo.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}