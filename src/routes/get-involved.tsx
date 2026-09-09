import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
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
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import getInvolvedHeroImage from "../assets/get-involved/GetInvolvedBanner.png";

// import job60Image1 from "@/assets/our-services/Job 60+.png";
// import job60Image2 from "@/assets/projects/job60/Job 60+ Computer training.jpg";
// import job60Image3 from "@/assets/projects/job60/Job 60+ mela.jpg";
// import job60Image4 from "@/assets/projects/job60/Job60+ (3).JPG.jpeg";
// import job60Image5 from "@/assets/projects/job60/Job60+ Mela'.jpg";

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

const causes = [
  "Dementia Care",
  "Health & Wellness",
  "Nutritional Support",
  "Education & Awareness",
  "Livelihood & Skill Development",
  "Addressing Social Isolation",
  "Safety & Protection of Elders",
];

const smritiDonations = [
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

const volunteerAreas = [
  "Recreational activities & outings with elders",
  "Awareness & communication campaigns",
  "Governance & strategy support",
  "Livelihood and income-generation initiatives",
  "Skill building & training",
  "Technology and digital tool development",
  "Fundraising support",
  "Beautification & facility enhancement",
  "Digital literacy training",
  "Documentation & impact reporting",
  "In-kind donations",
];

type Project = {
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  category: string;
  image?: string | null;
  images?: string[];
  intro: string;
  paragraphs?: string[];
  impactTitle?: string;
  impact?: string[];
  servicesTitle?: string;
  services?: string[];
};

const projects: Project[] = [
  {
    title:
      "Promoting Well-Being of Elders in Old Age Homes — Active Ageing Program",
    shortTitle: "Active Ageing Program",
    icon: Activity,
    category: "Active Ageing",
    image: activeAgeingImage,
    intro:
      "Bengaluru has over 150 old age homes, many offering only basic facilities. Elders need continuous physical, cognitive, emotional, and social engagement to age with dignity.",
    paragraphs: [
      "Since 2018, our Mobile Active Ageing Program delivers free, holistic well-being services directly to old age homes.",
      "Your support brings movement, purpose, and joy to elders who need it the most.",
    ],
    impactTitle: "Current Reach",
    impact: [
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
    category: "Livelihood & Empowerment",
    image: digitalLiteracyImage,
    intro:
      "Digital inclusion enables seniors to access healthcare, manage finances, stay connected, and remain independent. At the same time, cyber fraud poses a growing threat.",
    paragraphs: [
      "Through structured training programs, we equip elders with basic digital skills, online safety awareness and fraud prevention strategies.",
    ],
    impactTitle: "Annual Impact",
    impact: [
      "1,200 elders empowered to live safer, more independent digital lives.",
    ],
  },

  {
    title: "Lifesavers Clubs in Schools — CPR Awareness",
    shortTitle: "Lifesavers Clubs",
    icon: ShieldCheck,
    category: "Training & Capacity Building",
    image: lifesaversClubsImage,
    intro:
      "To build a generation prepared to save lives, NMT proposes Lifesavers Clubs in schools, providing CPR awareness and hands-on training by certified professionals.",
    impactTitle: "Impact",
    impact: [
      "Trained high-school students capable of responding to emergencies",
      "Increased survival chances during cardiac arrest",
      "Culture of preparedness and social responsibility",
    ],
    paragraphs: [
      "This initiative aligns with our vision of making Bengaluru the CPR Capital of India.",
    ],
  },

  {
    title: "Destitute Homes for Homeless Elderly",
    shortTitle: "Destitute Homes",
    icon: Home,
    category: "Programs for Marginalized Elders",
    image: destituteHomesImage,
    intro:
      "NMT supports residential care for economically disadvantaged and destitute elders through dedicated homes and support services.",
    paragraphs: [
      "The existing NMT programs include Sandhya Suraksha, a home for destitute elderly women, and SK Home, a home for destitute elderly men.",
      "These initiatives provide elders with a safe and supportive place to live.",
    ],
  },

  {
    title: "Hiriyaravadi — Day Care & Activity Centres",
    shortTitle: "Hiriyaravadi",
    icon: Users,
    category: "Programs for Marginalized Elders",
    image: hiriyaravadiImage,
    intro:
      "Hiriyaravadi centres provide community-based support for marginalized elders living in urban communities.",
    paragraphs: [
      "NMT's existing work includes Hiriyaravadi centres in Bengaluru, alongside day-care and outreach activities for elders from economically disadvantaged communities.",
      "The model brings elders together for social interaction, meaningful activities and community-based support.",
    ],
    servicesTitle: "Activities & Support",
    services: [
      "Day care and social interaction",
      "Community-building activities",
      "Income-generation activities",
      "Outreach support",
      "Geriatric care and support",
    ],
  },

  {
    title: "Elders Helpline for Elders in Distress",
    shortTitle: "Elders Helpline",
    icon: PhoneCall,
    category: "Prevention of Elder Abuse",
    image: eldersHelplineImage,
    intro:
      "Elders Helpline 1090 is an NMT initiative addressing the needs of elders in distress and supporting them in situations involving abuse, neglect and vulnerability.",
    paragraphs: [
      "NMT established Elders Helpline 1090 as a dedicated support service for elders in distress. The existing NMT network also includes the National Helpline for Senior Citizens — Elder Line 14567.",
    ],
  },

  {
    title: "Jobs 60+ — Employment & Skilling for Needy Elders",
    shortTitle: "Jobs 60+",
    icon: Briefcase,
    category: "Livelihood & Empowerment",
    image: job60Image1,
    // images: [
    //   job60Image1,
    //   job60Image2,
    //   job60Image3,
    //   job60Image4,
    //   job60Image5,
    // ],
    intro:
      "Nightingales Jobs 60+ is a program offering job facilitation for elderly job seekers after retirement.",
    paragraphs: [
      "The program includes a free online job portal for elderly job seekers and supports seniors in finding suitable employment opportunities.",
      "The program also offers skills training including basic computers, advanced computers, digital literacy and cyber safety for senior citizens.",
    ],
    servicesTitle: "Support Includes",
    services: [
      "Job facilitation",
      "Employment opportunities for elderly job seekers",
      "Basic computer training",
      "Advanced computer training",
      "Digital literacy",
      "Cyber safety training",
    ],
  },

  {
    title: "Nightingales Smriti Gram — India's Largest Dementia Care Village",
    shortTitle: "Nightingales Smriti Gram",
    icon: Building2,
    category: "Dementia Care",
    image: smritiGramImage,
    intro:
      "Nightingales Smriti Gram is a pioneering initiative of Nightingales Medical Trust to create a new model of dementia care in India.",
    paragraphs: [
      "The project brings together quality care, dignity, companionship, learning, innovation and research in one caring community.",
      "The first phase includes a 100-bed residential dementia care facility providing free care to elders from economically disadvantaged backgrounds. The campus will ultimately support 300 persons with dementia.",
    ],
    servicesTitle: "Ways to Support",
    services: [
      "Tele-medicine Unit",
      "Activity & Therapy Areas",
      "Rehabilitation Unit",
      "Alternate Therapy Unit",
      "Solar Power System",
      "Therapeutic Landscape",
      "Medical Equipment",
      "Safety and Surveillance Equipment",
      "Ambulance",
      "Landscaping & Sensory Garden",
    ],
  },

  {
    title: "Dementia & Geriatric Care Training",
    shortTitle: "Dementia & Geriatric Care Training",
    icon: GraduationCap,
    category: "Training & Capacity Building",
    image: dementiaTrainingImage,
    intro:
      "NMT's training initiatives build knowledge and practical skills in dementia care, geriatric care and eldercare.",
    paragraphs: [
      "The existing NMT program includes Dementia and Geriatric Care Training and the Regional Resource and Training Centre for Age Care.",
      "Training and capacity building help strengthen the quality of care available to elders and persons living with dementia.",
    ],
  },

  {
    title: "Nightingales Lifesaving Services",
    shortTitle: "Nightingales Lifesaving Services",
    icon: Stethoscope,
    category: "Training & Capacity Building",
    image: lifesavingServicesImage,
    intro:
      "Nightingales Lifesaving Services is an NMT initiative focused on training carers, families and others in lifesaving skills.",
    paragraphs: [
      "The program forms part of NMT's wider training and capacity-building work and supports communities to be better prepared for emergencies.",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex min-w-0 items-start gap-3 text-[15px] leading-relaxed text-muted-foreground"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
          <span className="min-w-0 break-words">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContentCard({
  icon: Icon,
  title,
  children,
  className = "",
}: {
  icon: LucideIcon;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`h-full ${className}`}>
      <article className="group relative h-full overflow-hidden border border-[#ED6439]/15 bg-white p-5 shadow-[0_18px_50px_-20px_rgba(70,45,10,0.16)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ED6439]/35 hover:shadow-[0_28px_65px_-20px_rgba(237,100,57,0.22)] sm:p-7">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#ED6439]" />

        <div className="relative">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ED6439] text-white shadow-[0_10px_25px_rgba(237,100,57,0.25)] sm:h-12 sm:w-12">
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </span>

          {title && (
            <h3 className="mt-5 break-words font-display text-xl font-extrabold leading-tight text-[#263746] sm:text-2xl">
              {title}
            </h3>
          )}

          {title && <div className="mt-3 h-1 w-10 rounded-full bg-[#ED6439]" />}

          <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-muted-foreground sm:text-[15px]">
            {children}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function PhotoPlaceholder({ title }: { title: string }) {
  return (
    <div className="relative flex h-56 w-full items-center justify-center overflow-hidden bg-[#FFF4DF] sm:h-64">
      <div className="absolute inset-0 border border-dashed border-[#ED6439]/25" />

      <div className="relative px-6 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439]">
          <Sparkles className="h-5 w-5" />
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#263746]/70">
          Photo Space
        </p>

        <p className="mt-1 text-xs text-[#526574]/70">
          {title}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const Icon = project.icon;

  return (
    <Reveal delay={index * 60} className="h-full">
      <button
        type="button"
        onClick={onOpen}
        className="group flex h-full w-full flex-col overflow-hidden border border-[#263746]/10 bg-white text-left shadow-[0_18px_50px_-25px_rgba(38,55,70,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ED6439]/35 hover:shadow-[0_25px_60px_-25px_rgba(237,100,57,0.25)]"
      >
        <div className="relative overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <PhotoPlaceholder title="Client photograph can be added here" />
          )}

          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#ED6439] shadow-sm">
            Project {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ED6439] text-white">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </span>

            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#ED6439] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ED6439]">
            {project.category}
          </p>

          <h3 className="mt-2 font-display text-xl font-extrabold leading-tight text-[#263746] sm:text-[22px]">
            {project.shortTitle}
          </h3>

          <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-[#526574]">
            {project.intro}
          </p>

          <span className="mt-auto pt-6 text-sm font-bold text-[#ED6439]">
            Explore project
            <span className="ml-2">→</span>
          </span>
        </div>
      </button>
    </Reveal>
  );
}

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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17232B]/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto bg-[#FFF8EE] shadow-2xl"
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
          <div className="relative bg-[#FFF4DF] lg:sticky lg:top-0 lg:self-start">
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
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#17232B]/65 px-3 py-2 backdrop-blur-sm">
                    {projectImages.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        type="button"
                        onClick={() => setActiveImage(imageIndex)}
                        aria-label={`Show project image ${imageIndex + 1}`}
                        aria-current={activeImage === imageIndex}
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
              <div className="h-72 sm:h-96 lg:h-[620px]">
                <PhotoPlaceholder title="Project photograph can be added here" />
              </div>
            )}
          </div>

          <div className="p-6 sm:p-9 lg:p-12">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ED6439] text-white">
                <Icon className="h-5 w-5" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                {project.category}
              </span>
            </div>

            <h2
              id="project-modal-title"
              className="mt-6 break-words font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[#263746] sm:text-4xl"
            >
              {project.title}
            </h2>

            <div className="mt-5 h-1 w-12 bg-[#ED6439]" />

            <p className="mt-7 text-[16px] font-medium leading-7 text-[#263746]">
              {project.intro}
            </p>

            {project.paragraphs?.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 text-[15px] leading-7 text-[#526574]"
              >
                {paragraph}
              </p>
            ))}

            {project.impact && project.impact.length > 0 && (
              <div className="mt-8 border border-[#ED6439]/15 bg-white p-5 sm:p-6">
                <h3 className="font-display text-lg font-extrabold text-[#263746]">
                  {project.impactTitle}
                </h3>

                <ul className="mt-4 space-y-3">
                  {project.impact.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[#526574]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.services && project.services.length > 0 && (
              <div className="mt-8">
                <h3 className="font-display text-lg font-extrabold text-[#263746]">
                  {project.servicesTitle}
                </h3>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="flex min-w-0 items-start gap-3 border border-[#263746]/10 bg-white p-3.5 text-sm leading-5 text-[#526574]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                      <span className="break-words">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-9 border-t border-[#263746]/10 pt-7">
              <p className="text-sm leading-6 text-[#526574]">
                Partner with NMT to support this project and create meaningful,
                measurable and lasting impact.
              </p>

              <a
                href="mailto:rm@nightingaleseldercare.com"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[#ED6439] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Enquire About This Project
                <ArrowUpRight className="ml-2 h-4 w-4" />
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

  const siteMap = [
    { id: "donate", number: "01", label: "Donate", icon: HandCoins, items: ["Online Donation", "Monthly Giving", "In Memory Giving"] },
    { id: "volunteer", number: "02", label: "Volunteer", icon: Users, items: ["Volunteer Opportunities", "Apply Online"] },
    { id: "internship", number: "03", label: "Internship", icon: GraduationCap, items: ["Internship Areas", "Problem Statements", "Apply Online"] },
    { id: "careers", number: "04", label: "Careers", icon: Briefcase, items: ["Current Openings", "Apply"] },
    { id: "csr-partnerships", number: "05", label: "CSR Partnerships", icon: Building2, items: ["CSR Opportunities", "Partner with Us"] },
    { id: "research", number: "06", label: "Research Collaboration", icon: Sparkles, items: ["Medical Colleges & Universities", "Researchers", "International Partners"] },
  ];

  const activeMapSections = [
    { id: "csr-partnerships", label: "CSR Partnerships", icon: Building2 },
    { id: "partnership-options", label: "Adopt a Project", icon: HeartHandshake },
    { id: "corporate-donations", label: "Corporate Donations", icon: HandCoins },
    { id: "event-sponsorship", label: "Event Sponsorship", icon: Megaphone },
    { id: "payroll-giving", label: "Payroll Giving", icon: Gift },
    { id: "corporate-volunteering", label: "Employee Engagement", icon: Users },
  ];

  return (
    <SiteLayout>
      {/* HERO */}
    <section className="relative isolate w-full overflow-hidden bg-[#D7663A]">
  {/* HERO IMAGE */}
<div
  className="
    relative
    min-h-[520px]
    w-full
    overflow-hidden
    sm:min-h-[540px]
    md:min-h-[400px]
    lg:min-h-[440px]
    xl:min-h-[460px]
  "
>
  {/* HERO BACKGROUND IMAGE */}
  <div
    className="
      absolute
      inset-0
      bg-cover
      bg-top
      bg-no-repeat
    "
    style={{
      backgroundImage: `url(${getInvolvedHeroImage})`,
    }}
  />

  {/* NMT ORANGE OVERLAY */}
  {/* <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-[#ED6439]/35
    "
  /> */}

  {/* Extra subtle orange depth on left */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-r
      from-[#B84A2B]/40
      via-[#B84A2B]/15
      to-transparent
    "
  />

  {/* CONTENT */}
  <div className="relative z-10">
    <div
      className="
        mx-auto
        flex
        min-h-[520px]
        w-full
        max-w-7xl
        items-end
        px-5
        pb-7
        sm:min-h-[540px]
        sm:px-8
        sm:pb-10
        md:min-h-[400px]
        lg:min-h-[440px]
        lg:px-10
        lg:pb-14
        xl:min-h-[460px]
        xl:px-12
      "
    >
      <Reveal className="max-w-4xl">

        {/* Breadcrumb */}
        <Link
          to="/"
          className="
            mb-3
            inline-flex
            items-center
            gap-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-white/85
            transition
            hover:text-white
            sm:mb-5
            sm:text-xs
          "
        >
          Home
          <span className="text-[#FF9A78]">/</span>
          Get Involved
        </Link>

        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#FF9A78] sm:w-10" />
        </div>

        {/* Heading */}
        <h1
          className="
            mt-3
            font-display
            text-[2rem]
            font-extrabold
            leading-[1.02]
            tracking-[-0.035em]
            text-white
            sm:mt-4
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
          "
        >
          Get Involved.
          <br />
          <span className="text-[#FFF8EE]">
            Corporate Partnerships
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-3
            max-w-2xl
            text-xs
            leading-5
            text-white
            sm:mt-4
            sm:text-sm
            sm:leading-6
            md:text-base
            md:leading-7
            lg:text-lg
            lg:leading-8
          "
        >
          Partner with Us to Create Lasting Impact for Elders and Those with
          Dementia
        </p>

      </Reveal>
    </div>
  </div>
</div>

  {/* Bottom orange accent */}
  <div className="absolute bottom-0 left-0 h-1 w-full bg-[#ED6439]" />
</section>

      {/* SITE MAP */}
      <section className="border-b border-[#263746]/10 bg-[#FFF8EE]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="mb-5 flex items-end justify-between gap-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ED6439] sm:text-xs">Explore</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">Get Involved Map</h2>
            </div>
            <p className="hidden max-w-md text-right text-sm leading-6 text-[#526574] lg:block">Choose how you would like to contribute to NMT's work.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {siteMap.map((item) => {
              const Icon = item.icon;
              const available = item.id === "csr-partnerships";
              return (
                <a key={item.id} href={available ? "#csr-partnerships" : "#get-involved-contact"} className={`group flex min-h-[94px] flex-col justify-between border p-4 transition-all duration-300 ${available ? "border-[#ED6439]/35 bg-white shadow-[0_14px_35px_-25px_rgba(237,100,57,0.5)] hover:-translate-y-0.5 hover:border-[#ED6439]" : "border-[#263746]/10 bg-white/70 hover:border-[#263746]/25"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${available ? "bg-[#ED6439] text-white" : "bg-[#263746]/7 text-[#526574]"}`}><Icon className="h-4 w-4" /></span>
                    <span className="text-[10px] font-bold tracking-[0.12em] text-[#526574]/55">{item.number}</span>
                  </div>
                  <div className="mt-4">
                    <p className="font-display text-sm font-extrabold text-[#263746]">{item.label}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#ED6439]">{available ? "Explore below" : "Connect with us"}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="bg-[#FFFDF9]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 lg:px-10 lg:py-20">
          {/* STICKY MAP */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="overflow-hidden border border-[#263746]/10 bg-white shadow-[0_18px_50px_-30px_rgba(38,55,70,0.35)]">
              <div className="border-b border-[#263746]/10 bg-[#263746] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF9A78]">On this page</p>
                <p className="mt-1 font-display text-xl font-extrabold text-white">CSR Partnerships</p>
              </div>
              <nav className="p-2">
                {activeMapSections.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.id} href={`#${item.id}`} className="group flex items-center gap-3 px-3 py-3 text-sm font-semibold text-[#526574] transition hover:bg-[#FFF4DF] hover:text-[#263746]">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#ED6439]/8 text-[9px] font-bold text-[#ED6439] group-hover:bg-[#ED6439] group-hover:text-white">{String(index + 1).padStart(2, "0")}</span>
                      <Icon className="h-4 w-4 shrink-0 text-[#ED6439]" />
                      <span className="min-w-0">{item.label}</span>
                    </a>
                  );
                })}
              </nav>
              <div className="m-3 border-t border-[#263746]/10 p-3">
                <a href="mailto:rm@nightingaleseldercare.com" className="flex items-center gap-2 text-xs font-bold text-[#ED6439] hover:underline">Partner with NMT <ArrowUpRight className="h-3.5 w-3.5" /></a>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-16 sm:space-y-20">
            {/* CSR INTRO */}
            <section id="csr-partnerships" className="scroll-mt-28">
              <Reveal>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ED6439] sm:text-xs">05 / CSR Partnerships</p>
                <h2 className="mt-3 max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[#263746] sm:text-4xl lg:text-5xl">Partner with Us to Create Lasting Impact for Elders and Those with Dementia</h2>
                <div className="mt-5 h-1 w-12 bg-[#ED6439]" />
                <div className="mt-7 max-w-4xl space-y-5 text-[15px] leading-7 text-[#526574] sm:text-base sm:leading-8">
                  <p>At Nightingales Medical Trust (NMT), we believe meaningful social change happens when individuals, corporates, and communities come together. We actively collaborate with corporates, government bodies, NGOs, and academic institutions to improve the quality of life of elders, especially those living with dementia and those from marginalized communities.</p>
                  <p>Corporate partnerships play a vital role in strengthening elder care and dementia services in India. Through CSR support, employee volunteering, and collaborative initiatives, corporates help us deliver need-based interventions while fulfilling their social responsibility goals.</p>
                  <p>We invite corporates to engage with us through CSR partnerships, employee engagement, and long-term collaborations that create measurable social impact.</p>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <ContentCard icon={Building2} title="Why Partner with NMT?">
                  <BulletList items={["Over two decades of experience in elder and dementia care", "Proven, scalable programs with measurable outcomes", "Opportunities for employee sensitization on ageing, dementia, and caregiving", "Strong governance and transparent impact reporting", "NMT is eligible for CSR funding under the Companies Act, 2013."]} />
                </ContentCard>
                <ContentCard icon={HeartHandshake} title="Causes You Can Support">
                  <p>Your organization can choose to support one or more of the following focus areas:</p>
                  <BulletList items={causes} />
                </ContentCard>
              </div>
            </section>

            {/* PARTNERSHIP OPTIONS */}
            <section id="partnership-options" className="scroll-mt-28">
              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ED6439] sm:text-xs">CSR Opportunities</p>
                    <h2 className="mt-2 font-display text-3xl font-extrabold text-[#263746] sm:text-4xl">Adopt a Project</h2>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-[#526574]">Support one or more of our need-based flagship programs.</p>
                </div>
              </Reveal>
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpen={() => setSelectedProject(project)} />)}
              </div>
            </section>

            {/* DONATIONS */}
            <section id="corporate-donations" className="scroll-mt-28">
              <Reveal>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ED6439] sm:text-xs">CSR Opportunities</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-[#263746] sm:text-4xl">Corporate Donations</h2>
              </Reveal>
              <div className="mt-7 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="bg-[#263746] p-6 text-white sm:p-8">
                  <HandCoins className="h-8 w-8 text-[#FF9A78]" />
                  <h3 className="mt-6 font-display text-2xl font-extrabold">Smriti Gram — A National Model for Dementia Care</h3>
                  <p className="mt-5 text-sm leading-7 text-white/70">NMT is establishing Smriti Gram, a 300-bed comprehensive dementia care ecosystem, including 100 beds exclusively for marginalized elders.</p>
                  <div className="mt-7 border-t border-white/10 pt-6 text-sm leading-7 text-white/70">
                    <p><strong className="text-white">Project Status:</strong></p>
                    <p className="mt-2">Land acquired near Doddaballapur (1 hour from Bengaluru)</p>
                    <p>Phase 1 (100 beds + Training Academy): Operational by September 2026</p>
                    <p>Phase 2 (additional 200 beds): Completion by December 2028</p>
                  </div>
                </div>
                <div className="border border-[#263746]/10 bg-white p-6 sm:p-8">
                  <p className="font-display text-xl font-extrabold text-[#263746]">Donation Opportunities</p>
                  <BulletList items={smritiDonations} />
                  <p className="mt-7 border-t border-[#263746]/10 pt-5 text-sm leading-6 text-[#526574]">Each contribution directly enhances quality of care, safety, sustainability, and dignity.</p>
                </div>
              </div>
            </section>

            {/* EVENT */}
            <section id="event-sponsorship" className="scroll-mt-28">
              <ContentCard icon={Megaphone} title="Event Sponsorship & Participation">
                <p>Partner with us for national and international observances such as:</p>
                <BulletList items={["International Day of Older Persons", "World Elder Abuse Awareness Day", "World Alzheimer’s Day", "Senior Citizen Job Fairs", "Digital Literacy & Cyber Safety Programs"]} />
                <p>Opportunities include event sponsorship, employee volunteering, and brand visibility.</p>
              </ContentCard>
            </section>

            {/* PAYROLL */}
            <section id="payroll-giving" className="scroll-mt-28">
              <div className="grid gap-5 md:grid-cols-[0.3fr_1fr]">
                <div className="flex items-center gap-4 border border-[#ED6439]/15 bg-[#FFF4DF] p-5 sm:p-7">
                  <Gift className="h-7 w-7 shrink-0 text-[#ED6439]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ED6439]">Giving</p>
                </div>
                <ContentCard icon={Gift} title="Payroll Giving">
                  <p>Enable your employees to support elder care and dementia care through monthly salary contributions toward NMT programs—an easy, consistent way to create long-term impact.</p>
                </ContentCard>
              </div>
            </section>

            {/* VOLUNTEERING */}
            <section id="corporate-volunteering" className="scroll-mt-28">
              <ContentCard icon={Users} title="Corporate Volunteering & Employee Engagement">
                <p>We offer structured volunteering opportunities where employees can contribute their time, skills, and expertise, including:</p>
                <BulletList items={volunteerAreas} />
              </ContentCard>
            </section>

            {/* SITEMAP CONNECTOR */}
            <section id="get-involved-contact" className="scroll-mt-28 border-t border-[#263746]/10 pt-10">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {siteMap.map((item) => <div key={item.id} className="border border-[#263746]/10 bg-white p-5"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ED6439]">{item.number}</p><h3 className="mt-2 font-display text-lg font-extrabold text-[#263746]">{item.label}</h3><p className="mt-2 text-xs leading-5 text-[#526574]">Connect with NMT to explore this opportunity.</p></div>)}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#17232B] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Reveal>
            <Sparkles className="mx-auto h-7 w-7 text-[#ED6439]" />
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">Let’s Build a Compassionate Future for Elders.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">Partner with NMT to create meaningful, measurable, and lasting impact.</p>
            <a href="mailto:rm@nightingaleseldercare.com" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#ED6439] px-7 py-4 text-sm font-bold text-white shadow-[0_15px_35px_-12px_rgba(237,100,57,0.7)] transition hover:-translate-y-0.5 hover:bg-[#f1734c]">Contact Us <ArrowUpRight className="ml-2 h-4 w-4" /></a>
            <br />
            <a
  href="mailto:rm@nightingaleseldercare.com"
  className="mt-5 inline-block text-sm text-white/45 underline underline-offset-4 transition hover:text-white"
>
  rm@nightingaleseldercare.com
</a>
          </Reveal>
        </div>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </SiteLayout>
  );
}

