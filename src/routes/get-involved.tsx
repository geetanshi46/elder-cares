import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  HeartHandshake,
  HandCoins,
  Users,
  Sparkles,
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
import smritiImage from "@/assets/smriti-gram.webp";
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
    title: "Destitute homes for homeless elderly",
    shortTitle: "Destitute homes for homeless elderly",
    icon: Home,
    image: destituteHomesImage,
    intro: `Background\n\nMany individuals with no financial security and social support become dependent on already burdened families, leading to intergenerational conflict, neglect, and in extreme cases, abandonment. Deserted elderly live on streets without adequate food, shelter, medical care or social support.\n\nOur intervention\n\nDestitute home for Homeless and Abandoned elderly—a transit home and Care Centre which offers a critical safety net—providing immediate shelter, nutrition, medical attention, and emotional support for elderly. Admissions of the elderly in crisis happen through the police.\n\nLocation\n\nBengaluru\n\nSupport sought\n\nTo cover nutrition, shelter, healthcare and shelter maintenance costs\n\nOutcomes\n\n· Improved health & nutrition of elders\n· Improves safety & well-being of elders\n· Healthy & active ageing of elders\n\nOur beneficiaries\n\n125 homeless and deserted elderly (100 Elderly Women and 25 Elderly Men housed at Sandhya Suraksha and Sandhya Kirana Homes respectively)`,
  },
  {
    title: "Hiriyaravadis for the Elderly",
    shortTitle: "Hiriyaravadis for the Elderly",
    icon: Users,
    image: hiriyaravadiImage,
    intro: `Background\n\nThe marginalized elderly dwelling in urban slums face extreme poverty, hunger, poor sanitation, inadequate healthcare, limited social support and difficult living conditions. All these contribute to a life of hardship, isolation, and deteriorating health for elderly.\n\nOur intervention\n\n‘Hiriyaravadi’ – Day Care & Activity Centres for marginalized elders living in urban slums, providing a safe space for elders, providing support in nutrition, health and medical care, linking to government services and, empowerment through income-generation activities.\n\nLocations\n\nUrban and Peri-urban settlements of Bengaluru\n\nSupport sought\n\nFor operational expenses, income generation activities, healthcare services, and nutrition for one year.\n\nOutcomes\n\n· Improved health and nutrition of elders\n· Healthy and active ageing of elders\n· Improved safety & well-being of elders\n· Social inclusion of elders\n\nOur beneficiaries\n\n180 marginalized elders where each centre will support 30 elders.`,
  },
  {
    title: "Elders Helpline – Helpline for Elders in Distress",
    shortTitle: "Elders Helpline – Helpline for Elders in Distress",
    icon: PhoneCall,
    image: eldersHelplineImage,
    intro: `Background\n\nWith rising cases of elder abuse, neglect, isolation, and financial exploitation, senior citizens often have no one to reach out during distress. Any are unaware of the rights of elderly and services available.\n\nOur intervention\n\nElderline 1090: a joint initiative of Nightingales Medical Trust & Bengaluru City Police, Elderline is a helpline offering immediate assistance, counseling, legal aid, rescue support, safety, dignity, and timely intervention for vulnerable senior citizens.\n\nLocations\n\nBengaluru city\n\nSupport sought\n\nTo cover costs of operating helpline, legal assistance, counseling to distressed elders.\n\nOutcomes\n\n· Improved safety and security of elders\n· Enhanced access to justice to elders.\n\nOur beneficiaries\n\n15000 to 18000 elders in a year. 1500 calls and walk-ins per month.`,
  },
  {
    title: "Jobs 60+: Employment and Skilling for Needy Elderly",
    shortTitle: "Jobs 60+: Employment and Skilling for Needy Elderly",
    icon: Briefcase,
    image: job60Image1,
    intro: `Background\n\nAs life expectancy rises and traditional family support structures decline, many elderly find themselves in need of continued income and purposeful engagement after retirement. Post-retirement employment helps them attain economic independence, self-esteem and mental well-being.\n\nOur intervention\n\nPost-retirement employment through job portal, job fairs, employment bureau and skilling viz. computer skills training, digital literacy and cyber safety skills training.\n\nLocation\n\nBengaluru\n\nSupport sought\n\nTo cover costs of job placement facilities, annual job fairs, conducting digital literacy, computer skills training, and cyber safety training programs\n\nOutcomes\n\n· Financial security & economic independence for elders\n· Improved self-esteem for elders\n\nOur beneficiaries\n\n300 elders with jobs\n\n600 elders trained in digital literacy and cyber safety`,
  },
  {
    title: "Active ageing in old age homes",
    shortTitle: "Active ageing in old age homes",
    icon: Activity,
    image: activeAgeingImage,
    intro: `Background\n\nMany of the old age homes focus primarily on food and shelter but there is a pressing need for incorporating active ageing services to enhance the physical, mental and social well-being of the residents. Such meaningful activities aim to facilitate continuous learning and social integration.\n\nOur interventions\n\nTrained active ageing facilitators conduct physical activity, cognitive engagement, and sessions on social interaction and emotional well-being for elders in old age homes. Our mobile units with exercise equipment and activity materials cover old age homes in North and South Bengaluru.\n\nLocations\n\nIn and around Bengaluru.\n\nSupport sought\n\nTo cover costs of active ageing facilitators, assessment costs, travel, health camps and active ageing kits provided to the old age homes.\n\nOutcomes\n\n· Healthy and active ageing of elders in old age homes\n· Improved health and well-being of elders living in old age homes\n\nOur beneficiaries\n\n30 to 32 old age homes in Bengaluru\n\n600+ elders in old age homes`,
  },
  {
    title: "Smriti Gram – India’s Largest Dementia Care Village",
    shortTitle: "Smriti Gram – India’s Largest Dementia Care Village",
    icon: HeartHandshake,
    image: smritiGramImage,
    intro: `Background\n\nWith no known cure for dementia and the situation rapidly escalating where it is estimated that around 8.8 million elders are affected by dementia in India, the challenges are many. Family caregivers burnout, high costs attached to caregiving, availability and affordability of home caregivers, and scarcity of specialized and quality dementia care centres are some of them\n\nOur intervention\n\nA 5-acre Dementia Care Village situated in Doddaballapur, Bengaluru Rural District to provide affordable and high-quality dementia care to 300 persons living with dementia and 100 beds earmarked for marginalized elders with dementia. A state-of-the-art training centre will train 1000 individuals in geriatric and dementia care every year.\n\nLocations\n\nBengaluru, Karnataka, and other states in southern India\n\nSupport sought\n\nTo cover costs of medical equipment and facilities\n\nOutcomes\n\n· Improved quality of dementia care\n· Reduction of progression of dementia\n· Improved health, nutrition, and well-being of elders with dementia\n· Strengthened capacity of caregivers in dementia care.\n\nOur beneficiaries\n\n300 elders with dementia, of which 100 are marginalized elders\n\n1000 caregivers`,
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
  { id: "donate", label: "Donate", icon: HeartHandshake },
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#E15925]/75 p-3 backdrop-blur-md sm:p-6"
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
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-white text-[#E15925] shadow-md transition-colors hover:bg-[#ED6439] hover:text-white"
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
              className="mt-4 font-display text-2xl font-bold leading-tight text-[#E15925] sm:text-3xl"
            >
              {project.title}
            </h2>

            <div className="mt-4 h-1 w-12 bg-[#ED6439]" />

            <p className="mt-5 text-[15px] font-medium leading-relaxed text-[#E15925]">
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
                <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.12em] text-[#E15925]">
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
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[#E15925]">
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
  const [monthly, setMonthly] = useState(true);
  const [amount, setAmount] = useState("");

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
    HERO — fully responsive full-bleed banner
====================================================== */}
<section className="relative w-full overflow-hidden">
  <Reveal>
    <div
      className="
        relative w-full
        min-h-[620px]
        sm:min-h-[600px]
        md:h-[560px] md:min-h-0
        lg:h-[600px] lg:min-h-0
      "
    >
      {/* Full-width banner image */}
      <img
        src={getInvolvedHeroImage}
        alt="Nightingales Medical Trust corporate partnerships"
        className="
          absolute inset-0
          h-full w-full
          object-cover object-top
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E15925]/20 via-[#E15925]/5 to-transparent" />

      {/* Content */}
      <div
        className="
          relative z-10 mx-auto flex min-h-[620px] w-full
          max-w-7xl flex-col justify-center
          px-5 py-10
          sm:min-h-[600px] sm:px-8 sm:py-10
          md:h-full md:min-h-0 md:px-10 md:py-10
          lg:px-10 lg:py-12
        "
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF9A78]">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>

          <span>/</span>

          <span className="text-white">Get Involved</span>
        </div>

        {/* Badge */}
        <span
          className="
            mt-4 inline-flex w-fit items-center gap-1.5
            rounded-full bg-[#ED6439]
            px-4 py-1.5
            text-[10px] font-bold uppercase
            tracking-[0.14em] text-white shadow-md
            sm:text-xs
          "
        >
          <Building2 className="h-3.5 w-3.5" />
          Corporate Partnerships
        </span>

        {/* Heading */}
        <h1
          className="
            mt-4 w-full max-w-5xl
            font-display font-extrabold
            capitalize leading-[1.08]
            tracking-[-0.03em] text-white
            text-[1.8rem]
            sm:mt-5 sm:text-[2.2rem]
            md:text-[2.6rem]
            lg:text-[2.7rem]
          "
        >
          Partner with Us to Create Lasting Impact for Elders and Those with
          Dementia
        </h1>

        {/* Text */}
        {/* <div
          className="
            mt-5 w-full max-w-5xl
            space-y-4
            text-sm font-medium
            leading-6 text-white/90
            sm:mt-6 sm:text-base sm:leading-7
            md:text-lg
            lg:text-lg
          "
        >
          <p>
            At Nightingales Medical Trust (NMT), we believe meaningful social
            change happens when individuals, corporates, and communities come
            together. We actively collaborate with corporates, government
            bodies, NGOs, and academic institutions to improve the quality of
            life of elders, especially those living with dementia and those
            from marginalized communities.
          </p>

          <p className="font-semibold text-white">
            We invite corporates to engage with us through CSR partnerships,
            employee engagement, and long-term collaborations that create
            measurable social impact.
          </p>
        </div> */}
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
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/80 bg-white px-3.5 py-1.5 text-xs font-bold text-[#E15925] shadow-2xs transition-all hover:border-[#ED6439] hover:bg-[#ED6439] hover:text-white"
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
    CORPORATE PARTNERSHIPS INTRODUCTION
====================================================== */}
<section className="w-full bg-[#FFF8EE] py-14 sm:py-18 lg:py-20">
  <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
    <Reveal>
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E15925] sm:text-sm">
          Why Collaborate with NMT
        </p>

        <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-[#E15925] sm:text-4xl lg:text-5xl">
          Together, We Can Create Meaningful Social Impact
        </h2>

        <div className="mx-auto mt-5 h-1 w-16 bg-[#F29000]" />

        <div className="mt-6 space-y-4 text-sm font-medium leading-7 text-[#526574] sm:text-base sm:leading-8 lg:text-lg">
          <p>
            At Nightingales Medical Trust (NMT), we believe meaningful social
            change happens when individuals, corporates, and communities come
            together. We actively collaborate with corporates, government
            bodies, NGOs, and academic institutions to improve the quality of
            life of elders, especially those living with dementia and those
            from marginalized communities.
          </p>

          <p className="font-semibold text-[#E15925]">
            We invite corporates to engage with us through CSR partnerships,
            employee engagement, and long-term collaborations that create
            measurable social impact.
          </p>
        </div>
      </div>
    </Reveal>
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
                <div className="bg-[#E15925] p-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Navigation</p>
                  <p className="mt-1 font-display text-lg font-bold">Corporate Partnerships</p>
                </div>
                <nav className="p-2">
                  {CSR_NAV.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold text-[#526574] transition hover:bg-[#FFF4DF] hover:text-[#E15925]"
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
                <h2 className="font-display text-2xl font-extrabold text-[#E15925] sm:text-4xl">
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
                        <p className="font-display text-sm font-bold leading-snug text-[#E15925]">
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
                  <h2 className="font-display text-2xl font-extrabold text-[#E15925] sm:text-3xl">
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
                          <h3 className="font-display text-sm font-bold text-[#E15925]">
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
              <h2 className="mt-1 font-display text-3xl font-extrabold text-[#E15925] sm:text-4xl">
                Partnership Options
              </h2>
            </div>

            {/* ======================================================
                OPTION 1: ADOPT A PROJECT
                ====================================================== */}
            <section id="partnership-options" className="scroll-mt-24">
              <Reveal>
                <h3 className="font-display text-2xl font-extrabold text-[#E15925] sm:text-3xl">
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

                          <h4 className="mt-3 font-display text-lg font-bold leading-snug text-[#E15925] transition-colors group-hover:text-[#ED6439]">
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
                <h3 className="font-display text-2xl font-extrabold text-[#E15925] sm:text-3xl">
                  2. Corporate Donations
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Corporates may choose to contribute to a specific cause or infrastructure requirement aligned with their CSR priorities.
                </p>
                <div className="mt-4 h-1 w-12 bg-[#ED6439]" />
              </Reveal>

              {/* SMRITI GRAM FEATURE BANNER */}
              <div className="mt-8 overflow-hidden rounded-3xl bg-[#E15925] text-white shadow-xl">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="p-7 sm:p-10">
                    <h4 className="font-display text-2xl font-bold sm:text-3xl">
                      Smriti Gram – A National Model for Dementia Care
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                      NMT is establishing Smriti Gram, a 300-bed comprehensive dementia care ecosystem, including 100 beds exclusively for marginalized elders.
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">Project Status:</p>
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

                    <p className="mt-4 text-xs italic text-white/90">
                      Each contribution directly enhances quality of care, safety, sustainability, and dignity.
                    </p>
                  </div>

                  <div className="relative min-h-[300px] bg-black/20 lg:min-h-full">
                    <img
                      src={smritiImage}
                      alt="Nightingales Smriti Gram Dementia Village"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#E15925] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#E15925] lg:via-transparent" />
                  </div>
                </div>
              </div>

              {/* DONATION OPPORTUNITIES AT SMRITI GRAM — FLAT LIST, AS GIVEN */}
              <div className="mt-12">
                <h4 className="font-display text-xl font-bold text-[#E15925] sm:text-2xl">
                  Donation Opportunities at Smriti Gram:
                </h4>

                <div className="mt-6 flex flex-wrap gap-2">
                  {SMRITI_GRAM_DONATION_ITEMS.map((item) => (
                    <a
                      key={item}
                      href={`mailto:rm@nightingaleseldercare.com?subject=Sponsor%20Smriti%20Gram%20Item:%20${encodeURIComponent(item)}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-[#E15925] shadow-2xs transition-colors hover:border-[#ED6439] hover:bg-[#ED6439] hover:text-white"
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
                  <h3 className="font-display text-2xl font-extrabold text-[#E15925] sm:text-3xl">
                    3. Event Sponsorship & Participation
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Partner with us for national and international observances such as:
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {observanceEvents.map((evt) => (
                      <span
                        key={evt}
                        className="inline-flex items-center rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-[#E15925]"
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
                  <h3 className="font-display text-2xl font-extrabold text-[#E15925] sm:text-3xl">
                    4. Payroll Giving
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#E15925] sm:text-base">
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
                <h3 className="font-display text-2xl font-extrabold text-[#E15925] sm:text-3xl">
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
                        <p className="font-display text-sm font-bold leading-snug text-[#E15925]">
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
                    <h3 className="font-display text-2xl font-bold text-[#E15925] sm:text-3xl">
                      Let's Build a Compassionate Future for Elders.
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Partner with NMT to create meaningful, measurable, and lasting impact.
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-sm text-[#E15925]">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#ED6439]/10 text-[#ED6439]">
                        <Mail className="h-4 w-4" />
                      </span>
                      <a href="mailto:rm@nightingaleseldercare.com" className="font-semibold hover:text-[#ED6439]">
                        rm@nightingaleseldercare.com
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                    <h4 className="font-display text-base font-bold text-[#E15925]">
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


              {/* ======================================================
                DONATE
                ====================================================== */}
            <section id="donate" className="scroll-mt-24">
              <Reveal>
                <div className="mt-2 grid grid-cols-1 gap-6">
                  <div
                    className="
                      group relative h-full overflow-hidden
                      border border-white/10 bg-[#E15925]
                      p-8
                      shadow-[0_30px_75px_-18px_rgba(23,35,43,0.55),0_10px_30px_rgba(237,100,57,0.18)]
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-[#ED6439]/35
                      hover:shadow-[0_38px_90px_-18px_rgba(23,35,43,0.62),0_15px_38px_rgba(237,100,57,0.28)]
                      sm:p-8 lg:p-9
                    "
                  >
                    {/* Left accent */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#14212B]" />

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-[#14212B]/80" />

                    {/* Glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#14212B]/15 blur-3xl" />

                    <div className="relative">
                      {/* Label */}
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                        <Sparkles className="h-4 w-4" />
                        Support our work
                      </span>

                      {/* Heading */}
                      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                        Make A Meaningful{" "}
                        <span className="text-[#14212B]">Difference.</span>
                      </h2>

                      {/* Description */}
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                        Support ongoing and new initiatives that improve the
                        lives of elders, strengthen dementia care, and build a
                        more compassionate future.
                      </p>

                      {/* Frequency selector */}
                      <div
                        role="group"
                        aria-label="Donation frequency"
                        className="mt-5 inline-flex rounded-full border border-white/15 bg-white/10 p-1"
                      >
                        {[
                          { label: "Monthly", value: true },
                          { label: "One time", value: false },
                        ].map((opt) => (
                          <button
                            key={opt.label}
                            type="button"
                            aria-pressed={monthly === opt.value}
                            onClick={() => setMonthly(opt.value)}
                            className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                              monthly === opt.value
                                ? "bg-[#14212B] text-white shadow-[0_5px_18px_rgba(20,33,43,0.28)]"
                                : "text-white/70 hover:text-white"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>

                      {/* Amount */}
                      <div className="mt-5 max-w-sm">
                        <label
                          htmlFor="donation-amount"
                          className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-white/80"
                        >
                          Donation amount
                        </label>

                        <div className="flex items-center rounded-xl border border-white/15 bg-white px-4 py-3">
                          <span className="font-display text-lg font-bold text-[#14212B]">
                            ₹
                          </span>

                          <input
                            id="donation-amount"
                            inputMode="numeric"
                            value={amount}
                            onChange={(e) =>
                              setAmount(e.target.value.replace(/\D/g, ""))
                            }
                            placeholder="Enter amount"
                            className="ml-2 w-full bg-transparent text-sm font-semibold text-[#14212B] outline-none placeholder:text-[#526574]/50"
                          />
                        </div>
                      </div>

                      {/* Donate button */}
                      <button
                        type="button"
                        onClick={() => {
                          const subject = monthly
                            ? "Monthly Donation Enquiry"
                            : "One-Time Donation Enquiry";

                          const body = `Hello Nightingales Medical Trust,

I would like to make a ${
                            monthly ? "monthly" : "one-time"
                          } donation${
                            amount
                              ? ` of ₹${Number(amount).toLocaleString("en-IN")}`
                              : ""
                          }.

Please share the payment details/instructions.

Thank you.`;

                          window.location.href = `mailto:rm@nightingaleseldercare.com?subject=${encodeURIComponent(
                            subject
                          )}&body=${encodeURIComponent(body)}`;
                        }}
                        className="mt-4 flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-[#14212B] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#1d2d3a] hover:shadow-xl"
                      >
                        <HeartHandshake className="h-4 w-4" />
                        Donate
                        {amount
                          ? ` ₹${Number(amount).toLocaleString("en-IN")}`
                          : ""}
                        {monthly ? " monthly" : " now"}
                      </button>
                    </div>
                  </div>

                  {/* TRUST / LEGAL STRIP */}
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-soft">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#ED6439]" />

                    <p className="text-xs leading-relaxed text-[#526574]">
                      Donations to Nightingales Medical Trust are exempt under
                      Section 80G, subject to applicable conditions. NMT is
                      eligible for CSR partnerships and operates as an NPO.
                    </p>
                  </div>
                </div>
              </Reveal>
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