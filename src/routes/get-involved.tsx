import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  HeartHandshake,
  HandCoins,
  Users,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Laptop,
  Activity,
  Stethoscope,
  Home,
  PhoneCall,
  Gift,
  Megaphone,
  X,
  Mail,
  UtensilsCrossed,
  Target,
  Car,
  Microscope,
  Paintbrush,
  FileCheck2,
  PackageCheck,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import getInvolvedHeroImage from "../assets/get-involved/GetInvolvedBanner.png";

import activeAgeingImage from "../assets/get-involved/project-1.jpg";
import digitalLiteracyImage from "../assets/get-involved/project-2.jpg";
import lifesaversClubsImage from "../assets/get-involved/project-3.jpg";
import destituteHomesImage from "../assets/get-involved/project-4.jpg";
import hiriyaravadiImage from "../assets/get-involved/hiriyaravadi.jpg";
import eldersHelplineImage from "../assets/our-services/elders-helpline.png";
import job60Image1 from "../assets/our-services/Job 60+.png";
import smritiGramImage from "../assets/get-involved/smriti-gram.jpg";
import autoDriversImage from "../assets/our-services/lifesaving-skills.jpeg";
import researchImage from "../assets/our-services/researchInnovation.png";
import mobileOutreachImage from "../assets/our-services/free-geriatric-clinic.webp";

const title = "Get Involved — Corporate Partnerships | NMT";
const description =
  "Partner with Nightingales Medical Trust to create lasting impact for elders and those with dementia through CSR partnerships, employee engagement and long-term collaborations.";

export const Route = createFileRoute("/get-involved")({
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
  component: GetInvolvedPage,
});

// ==========================================
// 1. WHY PARTNER WITH NMT DATA
// ==========================================
const whyPartnerPillars = [
  {
    title: "Over two decades of experience in elder and dementia care",
    icon: Target,
  },
  {
    title: "Proven, scalable programs with measurable outcomes",
    icon: Activity,
  },
  {
    title: "Opportunities for employee sensitization on ageing, dementia, and caregiving",
    icon: Users,
  },
  {
    title: "Strong governance and transparent impact reporting",
    icon: ShieldCheck,
  },
  {
    title: "NMT is eligible for CSR funding under the Companies Act, 2013.",
    icon: Building2,
  },
];

// ==========================================
// 2. CAUSES YOU CAN SUPPORT DATA
// ==========================================
const causes = [
  { title: "Dementia Care", icon: Activity },
  { title: "Health & Wellness", icon: Stethoscope },
  { title: "Nutritional Support", icon: UtensilsCrossed },
  { title: "Education & Awareness", icon: GraduationCap },
  { title: "Livelihood & Skill Development", icon: Briefcase },
  { title: "Addressing Social Isolation", icon: HeartHandshake },
  { title: "Safety & Protection of Elders", icon: ShieldCheck },
];

// ==========================================
// 3. ADOPT A PROJECT DATA
// ==========================================
type Project = {
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  image?: string | null;
  intro: string;
  paragraphs?: string[];
  reachTitle?: string;
  reach?: string[];
  servicesTitle?: string;
  services?: string[];
};

const projects: Project[] = [
  {
    title: "Promoting Well-Being of Elders in Old Age Homes (Active Ageing Program)",
    shortTitle: "Mobile Active Ageing Program",
    icon: Activity,
    image: activeAgeingImage,
    intro:
      "Bengaluru has over 150 old age homes, many offering only basic facilities. Elders need continuous physical, cognitive, emotional, and social engagement to age with dignity.",
    paragraphs: [
      "Since 2018, our Mobile Active Ageing Program delivers free, holistic well-being services directly to old age homes.",
      "Your support brings movement, purpose, and joy to elders who need it the most.",
    ],
    reachTitle: "Current Reach",
    reach: [
      "28 old age homes",
      "650+ elders annually",
      "2-hour sessions, three times a week",
    ],
    servicesTitle: "Services Include",
    services: [
      "Cognitive stimulation & group activities",
      "Physical exercises & physiotherapy",
      "Social engagement",
      "Medical consultations (psychiatry, physician support)",
      "Capacity building of old age home staff",
    ],
  },
  {
    title: "Digital Literacy & Cyber Safety for Elders",
    shortTitle: "Digital Literacy & Cyber Safety",
    icon: Laptop,
    image: digitalLiteracyImage,
    intro:
      "Digital inclusion enables seniors to access healthcare, manage finances, stay connected, and remain independent. At the same time, cyber fraud poses a growing threat.",
    paragraphs: [
      "Through structured training programs, we equip elders with basic digital skills, online safety awareness and fraud prevention strategies.",
    ],
    reachTitle: "Annual Impact",
    reach: ["1,200 elders empowered to live safer, more independent digital lives."],
  },
  {
    title: "Lifesavers Clubs in Schools (CPR Awareness)",
    shortTitle: "Lifesavers Clubs in Schools",
    icon: HeartHandshake,
    image: lifesaversClubsImage,
    intro:
      "To build a generation prepared to save lives, NMT proposes Lifesavers Clubs in schools, providing CPR awareness and hands-on training by certified professionals.",
    paragraphs: [
      "This initiative aligns with our vision of making Bengaluru the CPR Capital of India.",
    ],
    reachTitle: "Impact",
    reach: [
      "Trained high-school students capable of responding to emergencies",
      "Increased survival chances during cardiac arrest",
      "Culture of preparedness and social responsibility",
    ],
  },
  {
    title: "Destitute Homes for Homeless Elderly",
    shortTitle: "Destitute Homes for Homeless Elderly",
    icon: Home,
    image: destituteHomesImage,
    intro:
      "Support for destitute and abandoned homeless elderly through NMT's care homes.",
  },
  {
    title: "Hiriyaravadis",
    shortTitle: "Hiriyaravadis",
    icon: Users,
    image: hiriyaravadiImage,
    intro:
      "Day care & activity centres for marginalised elders living in urban slums.",
  },
  {
    title: "Elders Helpline for Elders in Distress",
    shortTitle: "Elders Helpline",
    icon: PhoneCall,
    image: eldersHelplineImage,
    intro: "Helpline for elders in distress.",
  },
  {
    title: "Job 60+ : Employment and Skilling for Needy Elderly",
    shortTitle: "Job 60+",
    icon: Briefcase,
    image: job60Image1,
    intro: "Employment and skilling for needy elderly.",
  },
  {
    title: "Training of Auto Drivers in Lifesaving Skills",
    shortTitle: "Training of Auto Drivers in Lifesaving Skills",
    icon: Car,
    image: autoDriversImage,
    intro: "Proposal available on request.",
  },
  {
    title: "Research Department",
    shortTitle: "Research Department",
    icon: Microscope,
    image: researchImage,
    intro: "Proposal available on request.",
  },
  {
    title: "Mobile Outreach Project",
    shortTitle: "Mobile Outreach Project",
    icon: Stethoscope,
    image: mobileOutreachImage,
    intro: "Proposal available on request.",
  },
];

// ==========================================
// 4. CORPORATE DONATIONS: SMRITI GRAM ITEMS (flat list, as given)
// ==========================================
const SMRITI_GRAM_DONATION_ITEMS = [
  "Tele-medicine Unit",
  "Activity & Therapy Areas",
  "Rehabilitation Unit",
  "Alternate Therapy Unit (Art, Music, Ayurveda, etc.)",
  "Solar Power System",
  "Effluent Treatment Plant",
  "Mechanised Stainless Steel Kitchen & Dining",
  "Laundry Unit",
  "Therapeutic Landscape",
  "Audio-Visual Equipment",
  "Medical Equipments",
  "Safety and Surveillance Equipment",
  "Ambulance",
  "Office furniture",
  "Hospital cots",
  "Elder-friendly patient chairs with safety belts",
  "Storage cupboards",
  "IT & Audio visual equipments",
  "Electrical Equipments",
  "Landscaping & Sensory Garden",
];

// ==========================================
// 5. CORPORATE VOLUNTEERING MODULES (names only, as given)
// ==========================================
const corporateVolunteeringItems = [
  { title: "Recreational activities & outings with elders", icon: HeartHandshake },
  { title: "Awareness & communication campaigns", icon: Megaphone },
  { title: "Governance & strategy support", icon: ShieldCheck },
  { title: "Livelihood and income-generation initiatives", icon: Briefcase },
  { title: "Skill building & training", icon: GraduationCap },
  { title: "Technology and digital tool development", icon: Laptop },
  { title: "Fundraising support", icon: Gift },
  { title: "Beautification & facility enhancement", icon: Paintbrush },
  { title: "Digital literacy training", icon: Laptop },
  { title: "Documentation & impact reporting", icon: FileCheck2 },
  { title: "In-kind donations", icon: PackageCheck },
];

// ==========================================
// 6. EVENT SPONSORSHIP OBSERVANCES (names only, as given)
// ==========================================
const observanceEvents = [
  "International Day of Older Persons",
  "World Elder Abuse Awareness Day",
  "World Alzheimer's Day",
  "Senior Citizen Job Fairs",
  "Digital Literacy & Cyber Safety Programs",
];

const CSR_NAV = [
  { id: "why-partner", label: "Why Partner?", icon: Target },
  { id: "causes", label: "Causes You Can Support", icon: Target },
  { id: "partnership-options", label: "1. Adopt a Project", icon: HeartHandshake },
  { id: "corporate-donations", label: "2. Corporate Donations", icon: HandCoins },
  { id: "event-sponsorship", label: "3. Event Sponsorship", icon: Megaphone },
  { id: "payroll-giving", label: "4. Payroll Giving", icon: Gift },
  { id: "corporate-volunteering", label: "5. Employee Volunteering", icon: Users },
  { id: "contact-csr", label: "Connect with CSR", icon: Mail },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17232B]/75 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-white text-[#263746] shadow-md transition-colors hover:bg-[#ED6439] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative bg-[#FAF6F0] lg:sticky lg:top-0 lg:self-start">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover sm:h-96 lg:h-[620px]"
              />
            ) : (
              <div className="flex h-72 items-center justify-center bg-[#FFF4DF] sm:h-96 lg:h-[620px]">
                <Icon className="h-16 w-16 text-[#ED6439]/40" />
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ED6439] text-white shadow-md shadow-[#ED6439]/20">
                <Icon className="h-5 w-5" />
              </span>
            </div>

            <h2
              id="project-modal-title"
              className="mt-4 font-display text-2xl font-bold leading-tight text-[#263746] sm:text-3xl"
            >
              {project.title}
            </h2>

            <div className="mt-4 h-1 w-12 bg-[#ED6439]" />

            <p className="mt-5 text-[15px] font-medium leading-relaxed text-[#263746]">
              {project.intro}
            </p>

            {project.paragraphs?.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-[14px] leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}

            {project.reach && project.reach.length > 0 && (
              <div className="mt-6 rounded-2xl border border-[#ED6439]/15 bg-[#FFF8EE] p-5">
                <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.12em] text-[#263746]">
                  <Target className="h-4 w-4 text-[#ED6439]" />
                  {project.reachTitle || "Reach"}
                </h3>

                <ul className="mt-3 space-y-2">
                  {project.reach.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#526574]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.services && project.services.length > 0 && (
              <div className="mt-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[#263746]">
                  {project.servicesTitle || "Services Include"}
                </h3>

                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2 rounded-xl border border-border bg-[#FAF6F0] p-2.5 text-[13px] text-[#526574]"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 border-t border-border pt-6">
              <a
                href={`mailto:rm@nightingaleseldercare.com?subject=CSR%20Partnership%20Enquiry:%20${encodeURIComponent(project.shortTitle)}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ED6439] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#ED6439]/25 transition-all hover:bg-[#d95730] sm:w-auto"
              >
                Enquire About Supporting This Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetInvolvedPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <SiteLayout>
      {/* ======================================================
          HERO — full-bleed image banner (no rounded corners, edge-to-edge)
          ====================================================== */}
      <section className="relative w-full">
        <Reveal>
          <div className="relative h-[460px] w-full sm:h-[520px] lg:h-[600px]">
            {/* Full-width banner image */}
            <img
              src={getInvolvedHeroImage}
              alt="Nightingales Medical Trust corporate partnerships"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            {/* Light gradient overlay — only enough for text contrast, image stays clear */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#17232B]/70 via-[#17232B]/25 to-transparent" />

            {/* Content overlaid on image, left side */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 sm:px-8 lg:px-10">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF9A78]">
                <Link to="/" className="transition hover:text-white">Home</Link>
                <span>/</span>
                <span className="text-white">Get Involved</span>
              </div>

              <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#ED6439] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md">
                <Building2 className="h-3.5 w-3.5" />
                Corporate Partnerships
              </span>

             <h1 className="mt-5 max-w-5xl font-display text-[1.8rem] font-extrabold capitalize leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.2rem] lg:text-[2.7rem]">
  Partner with Us to Create Lasting Impact for Elders and Those with Dementia
</h1>

              <div className="mt-6 max-w-5xl space-y-4 text-base font-medium leading-relaxed text-white/90 sm:text-lg">
              <p>
  At Nightingales Medical Trust (NMT), we believe meaningful social change happens when individuals, corporates, and communities come together. We actively collaborate with corporates, government bodies, NGOs, and academic institutions to improve the quality of life of elders, especially those living with dementia and those from marginalized communities.
</p>

<p className="font-semibold text-white">
  We invite corporates to engage with us through CSR partnerships, employee engagement, and long-term collaborations that create measurable social impact.
</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ======================================================
          NAVIGATIONAL SUB-BAR
          ====================================================== */}
      <section className="sticky top-0 z-30 border-b border-border bg-[#FFF8EE]/95 shadow-xs backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-x-auto px-4 py-3 sm:px-6">
          <span className="hidden shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-[#ED6439] md:block">
            Quick Jump:
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {CSR_NAV.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/80 bg-white px-3.5 py-1.5 text-xs font-bold text-[#263746] shadow-2xs transition-all hover:border-[#ED6439] hover:bg-[#ED6439] hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          MAIN BODY LAYOUT
          ====================================================== */}
      <main className="bg-[#FFFDF9]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-10 lg:py-20">
          {/* STICKY DESKTOP ASIDE */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-6">
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                <div className="bg-[#263746] p-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF9A78]">Navigation</p>
                  <p className="mt-1 font-display text-lg font-bold">Corporate Partnerships</p>
                </div>
                <nav className="p-2">
                  {CSR_NAV.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold text-[#526574] transition hover:bg-[#FFF4DF] hover:text-[#263746]"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[#ED6439]/10 text-[10px] font-bold text-[#ED6439] group-hover:bg-[#ED6439] group-hover:text-white">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <Icon className="h-3.5 w-3.5 shrink-0 text-[#ED6439]" />
                        <span className="truncate">{item.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="min-w-0 space-y-16 sm:space-y-24">
            {/* ======================================================
                1. WHY PARTNER WITH NMT?
                ====================================================== */}
            <section id="why-partner" className="scroll-mt-24">
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold text-[#263746] sm:text-4xl">
                  Why Partner with NMT?
                </h2>
                <div className="mt-4 h-1 w-12 bg-[#ED6439]" />
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {whyPartnerPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <Reveal key={pillar.title} delay={idx * 50} className="h-full">
                      <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:border-[#ED6439]/40 hover:shadow-md">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ED6439]/10 text-[#ED6439]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="font-display text-sm font-bold leading-snug text-[#263746]">
                          {pillar.title}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </section>

            {/* ======================================================
                2. CAUSES YOU CAN SUPPORT
                ====================================================== */}
            <section id="causes" className="scroll-mt-24">
              <Reveal>
                <div className="rounded-3xl border border-[#ED6439]/15 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
                  <h2 className="font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                    Causes You Can Support
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    Your organization can choose to support one or more of the following focus areas:
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {causes.map((c) => {
                      const Icon = c.icon;
                      return (
                        <div
                          key={c.title}
                          className="flex items-center gap-3 rounded-2xl border border-border/80 bg-[#FAF6F0] p-5 transition-all hover:border-[#ED6439]/40 hover:bg-white hover:shadow-md"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#ED6439] text-white">
                            <Icon className="h-4 w-4" />
                          </span>
                          <h3 className="font-display text-sm font-bold text-[#263746]">
                            {c.title}
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ======================================================
                PARTNERSHIP OPTIONS
                ====================================================== */}
            <div className="border-t border-border/70 pt-4">
              <h2 className="mt-1 font-display text-3xl font-extrabold text-[#263746] sm:text-4xl">
                Partnership Options
              </h2>
            </div>

            {/* ======================================================
                OPTION 1: ADOPT A PROJECT
                ====================================================== */}
            <section id="partnership-options" className="scroll-mt-24">
              <Reveal>
                <h3 className="font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                  1. Adopt a Project
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-[#526574]">
                  Support one or more of our need-based flagship programs:
                </p>
                <div className="mt-4 h-1 w-12 bg-[#ED6439]" />
              </Reveal>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <Reveal key={project.title} delay={(index % 3) * 60} className="h-full">
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ED6439]/40 hover:shadow-xl"
                      >
                        <div className="relative h-48 w-full overflow-hidden bg-[#FAF6F0]">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center bg-[#FFF4DF]">
                              <Icon className="h-12 w-12 text-[#ED6439]/40" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>

                        <div className="flex flex-1 flex-col p-5 sm:p-6">
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#ED6439]/10 text-[#ED6439]">
                            <Icon className="h-4 w-4" />
                          </span>

                          <h4 className="mt-3 font-display text-lg font-bold leading-snug text-[#263746] transition-colors group-hover:text-[#ED6439]">
                            {project.shortTitle}
                          </h4>

                          <p className="mt-2.5 flex-1 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
                            {project.intro}
                          </p>

                          <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-3.5">
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ED6439]">
                              View Details
                              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </section>

            {/* ======================================================
                OPTION 2: CORPORATE DONATIONS & SMRITI GRAM
                ====================================================== */}
            <section id="corporate-donations" className="scroll-mt-24">
              <Reveal>
                <h3 className="font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                  2. Corporate Donations
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Corporates may choose to contribute to a specific cause or infrastructure requirement aligned with their CSR priorities.
                </p>
                <div className="mt-4 h-1 w-12 bg-[#ED6439]" />
              </Reveal>

              {/* SMRITI GRAM FEATURE BANNER */}
              <div className="mt-8 overflow-hidden rounded-3xl bg-[#17232B] text-white shadow-xl">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="p-7 sm:p-10">
                    <h4 className="font-display text-2xl font-bold sm:text-3xl">
                      Smriti Gram – A National Model for Dementia Care
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                      NMT is establishing Smriti Gram, a 300-bed comprehensive dementia care ecosystem, including 100 beds exclusively for marginalized elders.
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF9A78]">Project Status:</p>
                      <ul className="mt-3 space-y-2 text-xs text-white/90 sm:text-sm">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                          <span>Land acquired near Doddaballapur (1 hour from Bengaluru)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                          <span>Phase 1 (100 beds + Training Academy): Operational by September 2026</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                          <span>Phase 2 (additional 200 beds): Completion by December 2028</span>
                        </li>
                      </ul>
                    </div>

                    <p className="mt-4 text-xs italic text-[#FF9A78]/90">
                      Each contribution directly enhances quality of care, safety, sustainability, and dignity.
                    </p>
                  </div>

                  <div className="relative min-h-[300px] bg-black/20 lg:min-h-full">
                    <img
                      src={smritiGramImage}
                      alt="Nightingales Smriti Gram Dementia Village"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17232B] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#17232B] lg:via-transparent" />
                  </div>
                </div>
              </div>

              {/* DONATION OPPORTUNITIES AT SMRITI GRAM — FLAT LIST, AS GIVEN */}
              <div className="mt-12">
                <h4 className="font-display text-xl font-bold text-[#263746] sm:text-2xl">
                  Donation Opportunities at Smriti Gram:
                </h4>

                <div className="mt-6 flex flex-wrap gap-2">
                  {SMRITI_GRAM_DONATION_ITEMS.map((item) => (
                    <a
                      key={item}
                      href={`mailto:rm@nightingaleseldercare.com?subject=Sponsor%20Smriti%20Gram%20Item:%20${encodeURIComponent(item)}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-[#263746] shadow-2xs transition-colors hover:border-[#ED6439] hover:bg-[#ED6439] hover:text-white"
                    >
                      <span>{item}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* ======================================================
                OPTION 3: EVENT SPONSORSHIP & PARTICIPATION
                ====================================================== */}
            <section id="event-sponsorship" className="scroll-mt-24">
              <Reveal>
                <div className="rounded-3xl border border-[#ED6439]/20 bg-[#FFF8EE] p-6 sm:p-8 lg:p-10">
                  <h3 className="font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                    3. Event Sponsorship & Participation
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Partner with us for national and international observances such as:
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {observanceEvents.map((evt) => (
                      <span
                        key={evt}
                        className="inline-flex items-center rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-[#263746]"
                      >
                        {evt}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-sm text-muted-foreground">
                    Opportunities include event sponsorship, employee volunteering, and brand visibility.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* ======================================================
                OPTION 4: PAYROLL GIVING
                ====================================================== */}
            <section id="payroll-giving" className="scroll-mt-24">
              <Reveal>
                <div className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8 lg:p-10">
                  <h3 className="font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                    4. Payroll Giving
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#263746] sm:text-base">
                    Enable your employees to support elder care and dementia care through monthly salary contributions toward NMT programs—an easy, consistent way to create long-term impact.
                  </p>

                  <a
                    href="mailto:rm@nightingaleseldercare.com?subject=Setup%20Payroll%20Giving"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ED6439] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#ED6439]/20 transition-all hover:bg-[#d95730]"
                  >
                    Setup Payroll Giving with NMT <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Reveal>
            </section>

            {/* ======================================================
                OPTION 5: CORPORATE VOLUNTEERING & EMPLOYEE ENGAGEMENT
                ====================================================== */}
            <section id="corporate-volunteering" className="scroll-mt-24">
              <Reveal>
                <h3 className="font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                  5. Corporate Volunteering & Employee Engagement
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We offer structured volunteering opportunities where employees can contribute their time, skills, and expertise, including:
                </p>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {corporateVolunteeringItems.map((mod, idx) => {
                  const Icon = mod.icon;
                  return (
                    <Reveal key={mod.title} delay={(idx % 3) * 50} className="h-full">
                      <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-[#ED6439]/40 hover:shadow-md">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#ED6439]/10 text-[#ED6439]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="font-display text-sm font-bold leading-snug text-[#263746]">
                          {mod.title}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </section>

            {/* ======================================================
                CONNECT WITH CSR DESK
                ====================================================== */}
            <section id="contact-csr" className="scroll-mt-24">
              <div className="rounded-3xl border border-[#ED6439]/20 bg-[#FAF6F0] p-6 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#263746] sm:text-3xl">
                      Let's Build a Compassionate Future for Elders.
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Partner with NMT to create meaningful, measurable, and lasting impact.
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-sm text-[#263746]">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#ED6439]/10 text-[#ED6439]">
                        <Mail className="h-4 w-4" />
                      </span>
                      <a href="mailto:rm@nightingaleseldercare.com" className="font-semibold hover:text-[#ED6439]">
                        rm@nightingaleseldercare.com
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                    <h4 className="font-display text-base font-bold text-[#263746]">
                      Initiate a CSR Discussion
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      For more details, please contact us.
                    </p>

                    <a
                      href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Partnership%20Discussion"
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ED6439] py-3 text-xs font-bold text-white shadow-md shadow-[#ED6439]/20 transition-all hover:bg-[#d95730]"
                    >
                      <Mail className="h-4 w-4" />
                      Email CSR Team
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </SiteLayout>
  );
}