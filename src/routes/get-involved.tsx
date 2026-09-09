import { useState, useEffect, type ReactNode } from "react";
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
  Sparkles,
  ArrowUpRight,
  Laptop,
  Activity,
  Stethoscope,
  Home,
  PhoneCall,
  Gift,
  Megaphone,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Mail,
  Phone,
  SunMedium,
  UtensilsCrossed,
  Bed,
  // FileText,
  CalendarDays,
  Target,
  // Clock,
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
import dementiaTrainingImage from "../assets/our-services/free-geriatric-clinic.png";
import lifesavingServicesImage from "../assets/our-services/lifesaving-skills.webp";

const title = "Get Involved — CSR & Corporate Partnerships | NMT";
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

const causes = [
  { title: "Dementia Care & Rehabilitation", desc: "Day care, residential facilities, and community memory screening." },
  { title: "Prevention of Elder Abuse", desc: "Toll-free helplines, legal aid, mediation, and safety protection." },
  { title: "Destitute & Homeless Elder Care", desc: "Shelter, food, healthcare, and dignified end-of-life care." },
  { title: "Livelihood & Economic Independence", desc: "Jobs 60+ facilitation, computer skilling, and micro-enterprises." },
  { title: "Digital Literacy & Cyber Safety", desc: "Empowering seniors to bank safely, avoid fraud, and stay connected." },
  { title: "Supporting Old Age Homes", desc: "Bringing active ageing, clinical care, and mental health directly to homes." },
  { title: "Lifesaving & CPR Training", desc: "Building a culture of first aid in schools, workplaces, and communities." },
];

const donationCategories = [
  {
    category: "Clinical & Therapeutic Units",
    icon: Stethoscope,
    items: [
      "Tele-medicine Consultation Unit",
      "Rehabilitation & Physiotherapy Centre",
      "Alternate Therapy Wing (Art, Music & Yoga)",
      "Sensory & Memory Stimulation Garden",
      "Emergency Medical Equipment",
    ],
  },
  {
    category: "Green Campus & Sustainable Energy",
    icon: SunMedium,
    items: [
      "Solar Power & Renewable Energy System",
      "Zero-Discharge Effluent Treatment Plant (ETP)",
      "Therapeutic Landscaping & Green Walkways",
      "Rainwater Harvesting System",
    ],
  },
  {
    category: "Operational & Facility Units",
    icon: UtensilsCrossed,
    items: [
      "Mechanised Stainless Steel Commercial Kitchen",
      "Central Hygienic Dining Hall",
      "Industrial Laundry & Sanitation Unit",
      "Fully Equipped Basic Life Support Ambulance",
      "Campus Surveillance & Safety Systems",
    ],
  },
  {
    category: "Elder-Friendly Living & Interior Fitments",
    icon: Bed,
    items: [
      "Specialised Hospital Cots with Safety Rails",
      "Elder-Friendly Patient Chairs with Harness Belts",
      "Bedside Storage & Lockable Cupboards",
      "Smart Interactive Audio-Visual Systems",
      "Nursing Station & Caregiver Infrastructure",
    ],
  },
];

const volunteerModules = [
  {
    title: "Day of Joy & Recreation",
    icon: HeartHandshake,
    desc: "Engage directly with elderly residents in art, music, storytelling, festivals, and games at our day care centres.",
  },
  {
    title: "Digital Mentorship for Seniors",
    icon: Laptop,
    desc: "Teach seniors how to use smartphones, UPI apps, and digital healthcare while warning them of cyber scams.",
  },
  {
    title: "Pro-Bono Professional Skills",
    icon: Briefcase,
    desc: "Contribute organizational expertise in technology, governance, legal advisory, communications, and strategy.",
  },
  {
    title: "Employee CPR & First-Aid Drives",
    icon: ShieldCheck,
    desc: "Host certified lifesaving workshops for your teams while sponsoring training for underprivileged students.",
  },
];

type Project = {
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  category: string;
  image?: string | null;
  images?: string[];
  intro: string;
  metric?: string;
  metricLabel?: string;
  paragraphs?: string[];
  impactTitle?: string;
  impact?: string[];
  servicesTitle?: string;
  services?: string[];
};

const projects: Project[] = [
  {
    title: "Promoting Well-Being of Elders in Old Age Homes — Active Ageing Program",
    shortTitle: "Mobile Active Ageing Program",
    icon: Activity,
    category: "Active Ageing",
    image: activeAgeingImage,
    metric: "28 Homes",
    metricLabel: "Covered across Bengaluru",
    intro:
      "Bengaluru has over 150 old age homes, many offering only basic facilities. Elders need continuous physical, cognitive, emotional, and social engagement to age with dignity.",
    paragraphs: [
      "Since 2018, our Mobile Active Ageing Program delivers free, holistic well-being services directly to old age homes.",
      "Your support brings movement, purpose, and joy to elders who need it the most.",
    ],
    impactTitle: "Current Reach & Results",
    impact: [
      "28 old age homes reached continuously",
      "650+ elders engaged annually",
      "2-hour sessions, three times a week",
    ],
    servicesTitle: "Services Provided",
    services: [
      "Cognitive stimulation & memory games",
      "Physical exercises & geriatric physiotherapy",
      "Social interaction & emotional counselling",
      "Medical consultations (psychiatry & physician)",
      "Capacity building of old age home staff",
    ],
  },
  {
    title: "Digital Literacy & Cyber Safety for Elders",
    shortTitle: "Digital Literacy & Cyber Safety",
    icon: Laptop,
    category: "Livelihood & Skilling",
    image: digitalLiteracyImage,
    metric: "1,200+",
    metricLabel: "Seniors empowered annually",
    intro:
      "Digital inclusion enables seniors to access healthcare, manage finances, stay connected, and remain independent. At the same time, cyber fraud poses a growing threat.",
    paragraphs: [
      "Through structured hands-on workshops, we equip elders with fundamental smartphone skills, safe online banking, and cyber fraud prevention strategies.",
    ],
    impactTitle: "Annual Impact",
    impact: [
      "1,200+ elders empowered to live safer, more independent digital lives.",
      "Over 45 workshops conducted across urban community centres.",
    ],
    servicesTitle: "Curriculum Covers",
    services: [
      "Smartphone fundamentals & navigation",
      "Safe digital payments & UPI awareness",
      "Recognizing phishing & scam calls",
      "Connecting with family via video calls",
      "Online medicine & grocery ordering",
    ],
  },
  {
    title: "Lifesavers Clubs in Schools — CPR Awareness",
    shortTitle: "Lifesavers Clubs in Schools",
    icon: ShieldCheck,
    category: "Training & Capacity",
    image: lifesaversClubsImage,
    metric: "10,000+",
    metricLabel: "Students trained in CPR",
    intro:
      "To build a generation prepared to save lives, NMT proposes Lifesavers Clubs in schools, providing CPR awareness and hands-on training by certified healthcare professionals.",
    paragraphs: [
      "Sudden cardiac arrest is a leading cause of preventable death. By equipping young students with compression-only CPR skills, we create resilient, life-saving communities.",
      "This initiative directly aligns with our vision of making Bengaluru the CPR Capital of India.",
    ],
    impactTitle: "Impact & Outcomes",
    impact: [
      "Trained high-school students capable of responding to sudden emergencies",
      "Dramatically increased survival chances during out-of-hospital cardiac arrests",
      "Instilling a lifelong culture of emergency preparedness and social duty",
    ],
    servicesTitle: "Program Deliverables",
    services: [
      "Hands-on mannequin simulation sessions",
      "Certification for participating students",
      "Emergency response protocols & first aid kits",
      "Annual refresher drills",
    ],
  },
  {
    title: "Destitute Homes for Homeless Elderly",
    shortTitle: "Destitute Elder Care Shelters",
    icon: Home,
    category: "Marginalized Elders",
    image: destituteHomesImage,
    metric: "70+ Beds",
    metricLabel: "Full shelter & medical care",
    intro:
      "NMT supports 24/7 residential care for abandoned, destitute, and homeless senior citizens through dedicated shelters providing complete shelter, nutrition, and healthcare.",
    paragraphs: [
      "Our homes include Sandhya Suraksha (dedicated for homeless elderly women) and Sandhya Kirana / SK Home (for destitute elderly men).",
      "These shelters offer clean bedding, balanced nutrition, round-the-clock medical care, psychiatric support, and dignified end-of-life care.",
    ],
    impactTitle: "Shelter Highlights",
    impact: [
      "Over 180 destitute elders rehabilitated and reconnected with families",
      "Zero cost to residents — 100% funded through philanthropy and CSR",
      "Integrated palliative, nursing, and dementia-specialized support",
    ],
  },
  {
    title: "Hiriyaravadi — Community Day Care & Activity Centres",
    shortTitle: "Hiriyaravadi Day Care Centres",
    icon: Users,
    category: "Marginalized Elders",
    image: hiriyaravadiImage,
    metric: "5 Centres",
    metricLabel: "Active across Bengaluru",
    intro:
      "Hiriyaravadi centres provide accessible, neighborhood-level daytime care and recreation for economically vulnerable elders living in urban slums and settlements.",
    paragraphs: [
      "Many seniors in marginalized families spend their days isolated or unsupervised while family members work. Hiriyaravadi provides a cheerful, safe sanctuary with hot meals, health checks, and joyful activities.",
    ],
    servicesTitle: "Core Offerings",
    services: [
      "Safe daytime shelter & peer interaction",
      "Nutritious midday meals & snacks",
      "Free health screening & geriatric clinics",
      "Income-generating handicrafts & training",
      "Outreach support & family counselling",
    ],
  },
  {
    title: "Elders Helpline for Elders in Distress",
    shortTitle: "Elders Helpline 1090 & 14567",
    icon: PhoneCall,
    category: "Protection & Legal Aid",
    image: eldersHelplineImage,
    metric: "2.7L+ Calls",
    metricLabel: "Handled since inception",
    intro:
      "Elders Helpline 1090 is a landmark joint initiative of Nightingales Medical Trust and Bengaluru City Police, providing immediate crisis rescue, dispute resolution, and legal protection.",
    paragraphs: [
      "Operating round-the-clock, the helpline handles cases of physical abuse, property grabbing, abandonment, financial cheating, and familial harassment.",
      "The network also operates the National Helpline for Senior Citizens (Elder Line 14567).",
    ],
    impactTitle: "Helpline Milestones",
    impact: [
      "Over 2,70,000 distress calls answered",
      "9,000+ written complaints investigated and resolved",
      "Free legal advocacy, police mediation, and emergency rescue",
    ],
  },
  {
    title: "Jobs 60+ — Employment & Skilling for Needy Elders",
    shortTitle: "Jobs 60+ Employment Portal",
    icon: Briefcase,
    category: "Livelihood & Skilling",
    image: job60Image1,
    metric: "2,620+",
    metricLabel: "Senior citizens placed",
    intro:
      "Jobs 60+ is India's dedicated employment facilitation platform for senior citizens seeking financial independence and purposeful second careers.",
    paragraphs: [
      "The program pairs verified elderly job seekers with corporate and SME employers offering respectful roles in administration, accounting, supervision, front desk, and advisory.",
      "Pre-placement computer skilling and interview preparation are provided free of charge.",
    ],
    servicesTitle: "Services Offered",
    services: [
      "Free job portal (nightingalesjobs60plus.com)",
      "Senior Citizen Job Fairs across Bengaluru",
      "Computer & digital office skilling",
      "Employer sensitization on hiring elders",
      "Financial planning & post-retirement advisory",
    ],
  },
  {
    title: "Nightingales Smriti Gram — India's Integrated Dementia Village",
    shortTitle: "Nightingales Smriti Gram",
    icon: Building2,
    category: "Dementia Care",
    image: smritiGramImage,
    metric: "300 Beds",
    metricLabel: "Planned landmark campus",
    intro:
      "Smriti Gram is Nightingales Medical Trust's flagship initiative near Doddaballapur, Bengaluru Rural — envisioned as a national model for person-centered dementia care, learning, and research.",
    paragraphs: [
      "The campus integrates therapeutic nature-based living, medical clinics, sensory gardens, training academies, and advanced research facilities.",
      "The first phase includes a 100-bed facility exclusively for elders from economically disadvantaged communities, alongside a state-of-the-art Dementia Training Academy.",
    ],
    servicesTitle: "Capital Sponsorship Avenues",
    services: [
      "Residential cottages & nursing wings",
      "Tele-medicine consultation unit",
      "Alternate therapy centre (art, music, yoga)",
      "Solar power & renewable energy infrastructure",
      "Sensory memory garden & walking circuits",
    ],
  },
  {
    title: "Dementia & Geriatric Care Training Academy",
    shortTitle: "Dementia Training Academy",
    icon: GraduationCap,
    category: "Training & Capacity",
    image: dementiaTrainingImage,
    metric: "5,000+",
    metricLabel: "Caregivers & nurses trained",
    intro:
      "Building a skilled healthcare workforce equipped with specialized knowledge in geriatric care, dementia management, and compassionate bedside assistance.",
    paragraphs: [
      "Recognized by the Ministry of Social Justice and Empowerment as a Regional Resource and Training Centre (RRTC) for Age Care.",
      "Courses range from vocational certificates for youth seeking healthcare employment to hands-on workshops for family caregivers.",
    ],
  },
  {
    title: "Nightingales Lifesaving Services",
    shortTitle: "Lifesaving & Emergency Services",
    icon: Stethoscope,
    category: "Training & Capacity",
    image: lifesavingServicesImage,
    metric: "100%",
    metricLabel: "Hands-on certified training",
    intro:
      "Empowering citizens, workplaces, and caregivers with CPR, basic life support, and first-aid skills to act swiftly during medical emergencies.",
    paragraphs: [
      "Every year, thousands of cardiac arrest victims die before reaching hospital. Our certified trainers conduct life-saving simulations in corporate offices, schools, and apartment complexes.",
    ],
  },
];

const CSR_NAV = [
  { id: "csr-partnerships", label: "Why Partner?", icon: Building2 },
  { id: "partnership-options", label: "Adopt a Project", icon: HeartHandshake },
  { id: "corporate-donations", label: "Capex & Smriti Gram", icon: HandCoins },
  { id: "event-sponsorship", label: "Event Sponsorship", icon: Megaphone },
  { id: "payroll-giving", label: "Payroll Giving", icon: Gift },
  { id: "corporate-volunteering", label: "Employee Volunteering", icon: Users },
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
  const [activeImage, setActiveImage] = useState(0);

  const projectImages =
    project.images && project.images.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : [];

  const hasMultipleImages = projectImages.length > 1;

  const showPreviousImage = () => {
    if (!hasMultipleImages) return;
    setActiveImage((current) =>
      current === 0 ? projectImages.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    if (!hasMultipleImages) return;
    setActiveImage((current) => (current + 1) % projectImages.length);
  };

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
            {projectImages.length > 0 ? (
              <div className="relative">
                <img
                  src={projectImages[activeImage]}
                  alt={`${project.title} — image ${activeImage + 1}`}
                  className="h-72 w-full object-cover sm:h-96 lg:h-[620px]"
                />

                {hasMultipleImages && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      aria-label="Previous project image"
                      className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[#263746] shadow-lg transition-all hover:scale-105 hover:bg-[#ED6439] hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={showNextImage}
                      aria-label="Next project image"
                      className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[#263746] shadow-lg transition-all hover:scale-105 hover:bg-[#ED6439] hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {hasMultipleImages && (
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#17232B]/75 px-3 py-2 backdrop-blur-sm">
                    {projectImages.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        type="button"
                        onClick={() => setActiveImage(imageIndex)}
                        aria-label={`Show project image ${imageIndex + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeImage === imageIndex
                            ? "w-6 bg-[#ED6439]"
                            : "w-2 bg-white/75 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
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

              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ED6439]">
                {project.category}
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

            {project.impact && project.impact.length > 0 && (
              <div className="mt-6 rounded-2xl border border-[#ED6439]/15 bg-[#FFF8EE] p-5">
                <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.12em] text-[#263746]">
                  <Target className="h-4 w-4 text-[#ED6439]" />
                  {project.impactTitle || "Key Impact"}
                </h3>

                <ul className="mt-3 space-y-2">
                  {project.impact.map((item) => (
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
                  {project.servicesTitle || "Services Included"}
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
                href="mailto:rm@nightingaleseldercare.com?subject=Enquiry%20Regarding%20CSR%20Partnership"
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
          HERO BANNER
          ====================================================== */}
      <section className="relative isolate min-h-[500px] w-full overflow-hidden bg-[#17232B] sm:min-h-[540px] lg:min-h-[580px]">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: `url(${getInvolvedHeroImage})` }}
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17232B] via-[#17232B]/85 to-[#ED6439]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17232B] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl flex-col justify-center px-5 py-16 sm:min-h-[540px] sm:px-8 lg:min-h-[580px] lg:px-10">
          <Reveal className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF9A78]">
              <Link to="/" className="transition hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Get Involved</span>
            </div>

            {/* Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ED6439] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-md">
                <Building2 className="h-3.5 w-3.5" />
                CSR & Corporate Partnerships
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
                <Building2 className="h-3.5 w-3.5 text-[#FF9A78]" />
                80G, 12A & CSR-1 Certified
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Partner with Us to Build a Compassionate World for Elders.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg sm:leading-8">
              Collaborate with Nightingales Medical Trust to deliver transformative healthcare, dignity, and protection for vulnerable elders and persons living with dementia.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#partnership-options"
                className="inline-flex items-center gap-2 rounded-full bg-[#ED6439] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#ED6439]/30 transition hover:-translate-y-0.5 hover:bg-[#d95730]"
              >
                Explore Projects to Adopt
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#corporate-donations"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/20"
              >
                Capex & Smriti Gram
              </a>

              <a
                href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Partnership%20Enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3.5 text-sm font-semibold text-white/80 transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Quick Enquiry
              </a>
            </div>
          </Reveal>

          {/* Impact Snapshot Ticker */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4">
            <div>
              <p className="font-display text-2xl font-extrabold text-[#FF9A78] sm:text-3xl">26+ Yrs</p>
              <p className="mt-1 text-xs text-white/70">Elder & Dementia Care Legacy</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-[#FF9A78] sm:text-3xl">28 Homes</p>
              <p className="mt-1 text-xs text-white/70">Active Ageing Supported</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-[#FF9A78] sm:text-3xl">2.7L+ Calls</p>
              <p className="mt-1 text-xs text-white/70">1090 Elders Helpline Handled</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-[#FF9A78] sm:text-3xl">300 Beds</p>
              <p className="mt-1 text-xs text-white/70">Smriti Gram Dementia Campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          NAVIGATIONAL SUB-BAR
          ====================================================== */}
      <section className="sticky top-0 z-30 border-b border-border bg-[#FFF8EE]/95 shadow-xs backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-x-auto px-4 py-3 sm:px-6">
          <span className="hidden shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-[#ED6439] md:block">
            CSR Navigation:
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
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF9A78]">CSR Navigation</p>
                  <p className="mt-1 font-display text-lg font-bold">Partner With Us</p>
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

              {/* TAX EXEMPTION & GOVERNANCE BADGE */}
              <div className="rounded-2xl border border-[#ED6439]/20 bg-[#FFF8EE] p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ED6439]">
                  <ShieldCheck className="h-4 w-4" />
                  Tax Exemption & Compliance
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#526574]">
                  All donations to NMT are eligible for 50% tax exemption under Section 80G of the Income Tax Act. NMT is fully registered under CSR-1 and FCRA.
                </p>
                <div className="mt-4 border-t border-border/80 pt-3">
                  <a
                    href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Due%20Diligence%20Documents"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ED6439] hover:underline"
                  >
                    Request CSR Documents <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="min-w-0 space-y-16 sm:space-y-24">
            {/* 1. WHY PARTNER WITH NMT */}
            <section id="csr-partnerships" className="scroll-mt-24">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                  <Building2 className="h-3.5 w-3.5" />
                  CSR Partnership Ecosystem
                </span>
                <h2 className="mt-3 font-display text-2xl font-extrabold text-[#263746] sm:text-4xl lg:text-5xl">
                  Why Leading Corporates Partner with Nightingales
                </h2>
                <div className="mt-4 h-1 w-12 bg-[#ED6439]" />

                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  At Nightingales Medical Trust (NMT), we combine nearly three decades of grassroots healthcare excellence with corporate governance rigor. We deliver high-impact, transparent, and scalable elder care programs that fulfill your CSR statutory mandates while measurably improving vulnerable lives.
                </p>
              </Reveal>

              {/* 3 VALUE PILLARS */}
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                <Reveal delay={0}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:border-[#ED6439]/30 hover:shadow-md">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ED6439] text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-[#263746]">
                      Transparent Governance
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Rigorous financial audits, CSR-1 registration, automated impact tracking, and tailored quarterly utilization reports for your board.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:border-[#ED6439]/30 hover:shadow-md">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ED6439] text-white">
                      <Target className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-[#263746]">
                      Measurable Social Return (SROI)
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Direct tracking of beneficiary outcomes — from clinical cognitive stability in dementia patients to emergency calls answered and elders rescued.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:border-[#ED6439]/30 hover:shadow-md">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ED6439] text-white">
                      <Users className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-[#263746]">
                      Employee Sensitization
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Engage your workforce through volunteering, dementia empathy workshops, and certified lifesaving CPR drives in your corporate campuses.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* CAUSES TO SUPPORT */}
              <div className="mt-12 rounded-3xl border border-[#ED6439]/15 bg-white p-6 shadow-soft sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">Focus Areas</span>
                    <h3 className="mt-1 font-display text-xl font-bold text-[#263746] sm:text-2xl">Causes Your CSR Fund Can Champion</h3>
                  </div>
                  <a
                    href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Focus%20Area%20Inquiry"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#ED6439]/10 px-4 py-2 text-xs font-bold text-[#ED6439] hover:bg-[#ED6439] hover:text-white transition-colors"
                  >
                    Select a Cause <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {causes.map((c) => (
                    <div key={c.title} className="rounded-2xl border border-border/80 bg-[#FAF6F0] p-4 transition-all hover:border-[#ED6439]/30">
                      <p className="font-display text-sm font-bold text-[#263746]">{c.title}</p>
                      <p className="mt-1.5 text-xs text-muted-foreground">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. ADOPT A PROJECT CARDS */}
            <section id="partnership-options" className="scroll-mt-24">
              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                      <HeartHandshake className="h-3.5 w-3.5" />
                      Flagship Projects
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-extrabold text-[#263746] sm:text-4xl">
                      Adopt a Need-Based Project
                    </h2>
                  </div>
                  <p className="max-w-md text-xs text-muted-foreground sm:text-sm">
                    Select a project to co-brand, fund annually, or sponsor capital equipment for direct beneficiary reach.
                  </p>
                </div>
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
                        {/* PROJECT IMAGE */}
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439] shadow-xs backdrop-blur-sm">
                            Project {String(index + 1).padStart(2, "0")}
                          </span>

                          {project.metric && (
                            <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                              <div>
                                <span className="font-display text-lg font-bold leading-none">{project.metric}</span>
                                <span className="ml-1.5 text-[11px] text-white/80">{project.metricLabel}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* CONTENT */}
                        <div className="flex flex-1 flex-col p-5 sm:p-6">
                          <div className="flex items-center gap-2">
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#ED6439]/10 text-[#ED6439]">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                              {project.category}
                            </span>
                          </div>

                          <h3 className="mt-3 font-display text-lg font-bold leading-snug text-[#263746] transition-colors group-hover:text-[#ED6439]">
                            {project.shortTitle}
                          </h3>

                          <p className="mt-2.5 flex-1 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
                            {project.intro}
                          </p>

                          <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-3.5">
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ED6439]">
                              View Impact & Details
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

            {/* 3. CORPORATE DONATIONS & SMRITI GRAM */}
            <section id="corporate-donations" className="scroll-mt-24">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                  <HandCoins className="h-3.5 w-3.5" />
                  Capital Grants & Infrastructure
                </span>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-[#263746] sm:text-4xl">
                  Sponsor India's Model Dementia Village: Smriti Gram
                </h2>
                <div className="mt-4 h-1 w-12 bg-[#ED6439]" />
              </Reveal>

              {/* SMRITI GRAM FEATURE BANNER */}
              <div className="mt-8 overflow-hidden rounded-3xl bg-[#17232B] text-white shadow-xl">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-7 sm:p-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ED6439] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                      Flagship Capital Campaign
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                      Nightingales Smriti Gram
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                      A 300-bed integrated dementia care village near Doddaballapur, Bengaluru Rural. Phase 1 provides 100 beds dedicated to elders from economically marginalized families at zero cost, along with an advanced Dementia Training & Research Academy.
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                      <div>
                        <p className="text-xs text-[#FF9A78] font-bold uppercase tracking-[0.1em]">Phase 1 (100 Beds)</p>
                        <p className="mt-1 font-display text-lg font-bold">Operational Sept 2026</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#FF9A78] font-bold uppercase tracking-[0.1em]">Phase 2 (200 Beds)</p>
                        <p className="mt-1 font-display text-lg font-bold">Target Dec 2028</p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        to="/smriti-gram"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#263746] transition hover:bg-[#FF9A78]"
                      >
                        Explore Smriti Gram Masterplan
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href="mailto:rm@nightingaleseldercare.com?subject=Smriti%20Gram%20Capex%20Sponsorship"
                        className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
                      >
                        Request Capex Kit
                      </a>
                    </div>
                  </div>

                  <div className="relative min-h-[300px] bg-black/20 lg:min-h-full">
                    <img
                      src={smritiGramImage}
                      alt="Nightingales Smriti Gram"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17232B] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#17232B] lg:via-transparent" />
                  </div>
                </div>
              </div>

              {/* STRUCTURED DONATION UNITS */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-bold text-[#263746]">
                  Key Infrastructure & Equipment Sponsorship Opportunities
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                  Corporates can sponsor entire dedicated units with naming rights, donor plaques, and comprehensive compliance reporting.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {donationCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div
                        key={cat.category}
                        className="rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:border-[#ED6439]/30"
                      >
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ED6439]/10 text-[#ED6439]">
                            <Icon className="h-5 w-5" />
                          </span>
                          <h4 className="font-display text-base font-bold text-[#263746]">
                            {cat.category}
                          </h4>
                        </div>

                        <ul className="mt-4 space-y-2.5">
                          {cat.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-xs text-muted-foreground sm:text-[13px]">
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ED6439]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 4. EVENT SPONSORSHIP & OBSERVANCES */}
            <section id="event-sponsorship" className="scroll-mt-24">
              <Reveal>
                <div className="rounded-3xl border border-[#ED6439]/20 bg-[#FFF8EE] p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#ED6439]">
                    <Megaphone className="h-4 w-4" />
                    Community Visibility
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-bold text-[#263746]">
                    Annual Event Sponsorship & Public Campaigns
                  </h3>

                  <p className="mt-2 max-w-2xl text-xs text-muted-foreground sm:text-sm">
                    Align your brand with high-visibility national and international awareness days. Opportunities include title sponsorship, media roadshows, and volunteer mobilizations.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { title: "World Alzheimer’s Month", date: "Every September", desc: "Memory walks, free cognitive camps, and symposia across Bengaluru." },
                      { title: "World Elder Abuse Awareness Day", date: "June 15", desc: "Public awareness roadshows with Bengaluru Traffic Police & senior rallies." },
                      { title: "International Day of Older Persons", date: "October 01", desc: "Celebratory intergenerational sports, cultural events, and awards." },
                      { title: "Senior Citizens Job Fairs", date: "Bi-Annual", desc: "Jobs 60+ recruitment drives connecting 500+ seniors with employers." },
                      { title: "Digital Safety Camps in Communities", date: "Year-Round", desc: "Neighborhood fraud prevention drives for vulnerable retirees." },
                      { title: "CPR Life-Savers Inter-School Meet", date: "Quarterly", desc: "Emergency simulation competitions building lifesaver networks." },
                    ].map((evt) => (
                      <div key={evt.title} className="rounded-xl border border-border bg-white p-4 shadow-2xs">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#ED6439]">
                          <CalendarDays className="h-3 w-3" />
                          {evt.date}
                        </span>
                        <h4 className="mt-1.5 font-display text-sm font-bold text-[#263746]">{evt.title}</h4>
                        <p className="mt-1 text-xs text-muted-foreground">{evt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 5. PAYROLL GIVING */}
            <section id="payroll-giving" className="scroll-mt-24">
              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
                  <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                    <div className="flex flex-col justify-between bg-[#FAF6F0] p-6 sm:p-8">
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                          <Gift className="h-4 w-4" />
                          Micro-Philanthropy
                        </span>
                        <h3 className="mt-3 font-display text-2xl font-bold text-[#263746]">
                          Corporate Payroll Giving
                        </h3>
                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          Empower your employees to contribute as little as ₹100 or ₹500 every month directly from their salary, providing dependable recurring nutrition and medication for destitute elders.
                        </p>
                      </div>

                      <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-[#263746]">
                        100% Tax-Exempt Under 80G for Employees
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h4 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[#263746]">
                        How It Works:
                      </h4>

                      <div className="mt-4 space-y-4">
                        {[
                          { step: "01", title: "Enroll Your Organization", desc: "Our CSR desk integrates with your HR/Payroll team with ready employee collateral." },
                          { step: "02", title: "Voluntary Opt-In", desc: "Employees choose their monthly donation amount (e.g. ₹250 / ₹500 / ₹1,000)." },
                          { step: "03", title: "Transparent Impact Updates", desc: "Every contributor receives a quarterly impact digest and automated 80G tax certificates." },
                        ].map((s) => (
                          <div key={s.step} className="flex items-start gap-3">
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#ED6439] text-xs font-bold text-white">
                              {s.step}
                            </span>
                            <div>
                              <p className="text-sm font-bold text-[#263746]">{s.title}</p>
                              <p className="text-xs text-muted-foreground">{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <a
                        href="mailto:rm@nightingaleseldercare.com?subject=Payroll%20Giving%20Setup%20Enquiry"
                        className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#ED6439] hover:underline"
                      >
                        Setup Payroll Giving for Your Company <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* 6. EMPLOYEE VOLUNTEERING */}
            <section id="corporate-volunteering" className="scroll-mt-24">
              <Reveal>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                    <Users className="h-3.5 w-3.5" />
                    Hands-on Engagement
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                    Structured Corporate Volunteering Modules
                  </h2>
                  <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                    Build empathy, purpose, and team bonding through meaningful volunteer experiences.
                  </p>
                </div>
              </Reveal>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {volunteerModules.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <div
                      key={mod.title}
                      className="rounded-2xl border border-border bg-white p-5 shadow-soft transition-all hover:border-[#ED6439]/30 hover:shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#ED6439]/10 text-[#ED6439]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h4 className="font-display text-sm font-bold text-[#263746]">{mod.title}</h4>
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                        {mod.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 7. CONNECT WITH CSR DESK */}
            <section id="contact-csr" className="scroll-mt-24">
              <div className="rounded-3xl border border-[#ED6439]/20 bg-[#FAF6F0] p-6 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ED6439]">Direct CSR Contact</span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-[#263746] sm:text-3xl">
                      Ready to Explore a Partnership?
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Our CSR advisory desk works with your committee to match funding requirements with verified beneficiary outcomes. We provide full documentation, project proposals, and site visits.
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-[#263746]">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#ED6439]/10 text-[#ED6439]">
                          <Mail className="h-4 w-4" />
                        </span>
                        <span>rm@nightingaleseldercare.com</span>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-[#263746]">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#ED6439]/10 text-[#ED6439]">
                          <Phone className="h-4 w-4" />
                        </span>
                        <span>080 4242 6565 / +91 80 2354 8444</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                    <h4 className="font-display text-base font-bold text-[#263746]">
                      Request a CSR Discussion
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Reach out directly via email with your company name and focus area.
                    </p>

                    <a
                      href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Partnership%20Discussion&body=Hello%20Nightingales%20Team,%0A%0AWe%20are%20interested%20in%20exploring%20a%20CSR%20collaboration%20with%20NMT.%0A%0ACompany%20Name:%0AFocus%20Area:%0APhone:%0A"
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ED6439] py-3 text-xs font-bold text-white shadow-md shadow-[#ED6439]/20 transition-all hover:bg-[#d95730]"
                    >
                      <Mail className="h-4 w-4" />
                      Email CSR Team Now
                    </a>

                    <p className="mt-3 text-center text-[11px] text-muted-foreground">
                      Response within 24–48 business hours
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ======================================================
          FINAL CALL TO ACTION
          ====================================================== */}
      <section className="relative overflow-hidden bg-[#17232B] py-16 sm:py-20 text-white">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#ED6439]/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <Sparkles className="mx-auto h-7 w-7 text-[#ED6439]" />
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let’s Build a Compassionate Future for Elders.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Together with our corporate partners, we ensure that every senior citizen lives with dignity, medical care, and community companionship.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Partnership"
                className="inline-flex items-center gap-2 rounded-full bg-[#ED6439] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#ED6439]/40 transition hover:-translate-y-0.5 hover:bg-[#d95730]"
              >
                Contact CSR Desk
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Individual Donations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </SiteLayout>
  );
}
