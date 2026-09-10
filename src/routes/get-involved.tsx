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
  CalendarDays,
  Target,
  Car,
  Microscope,
  HeartPulse,
  Award,
  Paintbrush,
  FileCheck2,
  PackageCheck,
  Boxes,
  Layers,
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
import mobileOutreachImage from "../assets/our-services/free-geriatric-clinic.png";

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
    title: "Over Two Decades of Experience",
    desc: "Over two decades of pioneer grassroots experience in elder care, dementia management, and age-care advocacy across India since 1998.",
    icon: Award,
    stat: "26+ Yrs",
    sublabel: "Specialized Track Record",
  },
  {
    title: "Proven, Scalable Programs",
    desc: "Demonstrated, high-impact intervention models with transparent, measurable social outcomes across urban and marginalized communities.",
    icon: Target,
    stat: "100%",
    sublabel: "Measurable Outcomes",
  },
  {
    title: "Employee Sensitization",
    desc: "Opportunities for employee sensitization on ageing, dementia, and caregiving through immersive volunteering and interactive workshops.",
    icon: Users,
    stat: "Hands-on",
    sublabel: "Workplace Engagement",
  },
  {
    title: "Strong Governance & Reporting",
    desc: "Uncompromising financial governance, rigorous external audits, regular monitoring, and transparent impact documentation for your CSR board.",
    icon: ShieldCheck,
    stat: "Audit-Ready",
    sublabel: "Quarterly Utilization",
  },
  {
    title: "CSR & Tax Exemption Compliant",
    desc: "NMT is eligible for CSR funding under the Companies Act, 2013, with 80G (50% tax exemption), 12A, CSR-1, and FCRA certifications.",
    icon: Building2,
    stat: "Section 135",
    sublabel: "Companies Act Compliant",
  },
];

// ==========================================
// 2. CAUSES YOU CAN SUPPORT DATA
// ==========================================
const causes = [
  {
    title: "Dementia Care",
    desc: "Comprehensive day care, residential facilities, memory screening, and specialized palliative rehabilitation for seniors with dementia.",
    icon: Activity,
  },
  {
    title: "Health & Wellness",
    desc: "Holistic geriatric clinical care, mobile health vans, active physiotherapy, and mental health consultations for vulnerable seniors.",
    icon: Stethoscope,
  },
  {
    title: "Nutritional Support",
    desc: "Daily balanced meals, micronutrient support, and dry ration kits for impoverished, destitute, and bedridden elders.",
    icon: UtensilsCrossed,
  },
  {
    title: "Education & Awareness",
    desc: "Community dementia awareness drives, family caregiver education, and certified CPR life-saving training in schools and colleges.",
    icon: GraduationCap,
  },
  {
    title: "Livelihood & Skill Development",
    desc: "Jobs 60+ post-retirement employment facilitation, workplace computer skilling, and micro-enterprise opportunities for elders.",
    icon: Briefcase,
  },
  {
    title: "Addressing Social Isolation",
    desc: "Active ageing programs in old age homes, Hiriyaravadi community day centres, and intergenerational companion programs.",
    icon: HeartHandshake,
  },
  {
    title: "Safety & Protection of Elders",
    desc: "24/7 Elders Helpline (1090 & 14567), crisis rescue, family dispute mediation, and police-backed legal protection.",
    icon: ShieldCheck,
  },
];

// ==========================================
// 3. ADOPT A PROJECT DATA
// ==========================================
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
  reachTitle?: string;
  reach?: string[];
  impactTitle?: string;
  impact?: string[];
  servicesTitle?: string;
  services?: string[];
};

const projects: Project[] = [
  {
    title: "Promoting Well-Being of Elders in Old Age Homes (Active Ageing Program)",
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
    reachTitle: "Current Reach",
    reach: [
      "28 old age homes reached continuously",
      "650+ elders engaged annually",
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
    category: "Livelihood & Skilling",
    image: digitalLiteracyImage,
    metric: "1,200 Elders",
    metricLabel: "Empowered annually",
    intro:
      "Digital inclusion enables seniors to access healthcare, manage finances, stay connected, and remain independent. At the same time, cyber fraud poses a growing threat.",
    paragraphs: [
      "Through structured training programs, we equip elders with basic digital skills, online safety awareness and fraud prevention strategies.",
    ],
    impactTitle: "Annual Impact",
    impact: [
      "1,200 elders empowered to live safer, more independent digital lives.",
      "Over 45 structured workshops conducted across community centres and senior forums.",
      "Measurable decrease in elder financial fraud vulnerability.",
    ],
    servicesTitle: "Curriculum Covers",
    services: [
      "Smartphone & tablet navigation fundamentals",
      "Safe digital banking & UPI payment confidence",
      "Recognizing phishing, scam calls, and cyber fraud",
      "Accessing online healthcare & medicine ordering",
      "Connecting with children and peers via video calls",
    ],
  },
  {
    title: "Lifesavers Clubs in Schools (CPR Awareness)",
    shortTitle: "Lifesavers Clubs in Schools",
    icon: HeartPulse,
    category: "Life-Saving Skills",
    image: lifesaversClubsImage,
    metric: "10,000+ Students",
    metricLabel: "Trained in life-saving CPR",
    intro:
      "To build a generation prepared to save lives, NMT proposes Lifesavers Clubs in schools, providing CPR awareness and hands-on training by certified professionals.",
    paragraphs: [
      "Sudden cardiac arrest is a critical emergency where every second counts. Bystander CPR performed during the first few minutes can double or triple chances of survival.",
      "This initiative directly aligns with our vision of making Bengaluru the CPR Capital of India.",
    ],
    impactTitle: "Impact & Outcomes",
    impact: [
      "Trained high-school students capable of responding to emergencies",
      "Increased survival chances during cardiac arrest",
      "Culture of preparedness and social responsibility",
      "Creating life-saving ambassadors in every neighborhood",
    ],
    servicesTitle: "Program Deliverables",
    services: [
      "Hands-on mannequin chest compression simulation sessions",
      "Certified trainers conducting age-appropriate workshops",
      "Formation of active school-level Lifesavers Clubs",
      "School first-aid readiness and emergency protocols",
    ],
  },
  {
    title: "Destitute Homes for Homeless Elderly",
    shortTitle: "Destitute Homes for Homeless Elderly",
    icon: Home,
    category: "Marginalized Elders",
    image: destituteHomesImage,
    metric: "70+ Beds",
    metricLabel: "100% Free shelter & care",
    intro:
      "NMT supports 24/7 residential care for abandoned, destitute, and homeless senior citizens through dedicated shelters providing complete shelter, nutrition, and healthcare.",
    paragraphs: [
      "Our homes include Sandhya Suraksha (dedicated for homeless elderly women) and Sandhya Kirana / SK Home (for destitute elderly men).",
      "These shelters offer clean bedding, balanced nutrition, round-the-clock medical care, psychiatric support, and dignified end-of-life care.",
    ],
    impactTitle: "Impact Highlights",
    impact: [
      "Over 180 destitute elders rehabilitated and given dignified shelter",
      "Zero cost to residents — 100% funded through CSR and philanthropy",
      "Round-the-clock medical, psychiatric, and palliative nursing care",
      "Dignified last rites provided in accordance with personal beliefs",
    ],
    servicesTitle: "Core Facilities",
    services: [
      "24/7 sheltered living with clean beds and linen",
      "Three nutritious hot meals and refreshments daily",
      "Regular geriatrician and psychiatric consultations",
      "Specialized palliative care for bedridden residents",
      "Recreational activities, music, and prayer sessions",
    ],
  },
  {
    title: "Hiriyaravadis (Day Care & Activity Centres for Marginalised Elders Living in Urban Slums)",
    shortTitle: "Hiriyaravadi Day Care Centres",
    icon: Users,
    category: "Marginalized Communities",
    image: hiriyaravadiImage,
    metric: "5 Centres",
    metricLabel: "Active across Bengaluru slums",
    intro:
      "Hiriyaravadis provide accessible, neighborhood-level daytime care and recreation for economically vulnerable elders living in urban poor communities and slums.",
    paragraphs: [
      "Many seniors in marginalized families spend their days isolated or unsupervised while family members work. Hiriyaravadi provides a cheerful, safe sanctuary with hot meals, health checks, and joyful activities.",
    ],
    servicesTitle: "Services Include",
    services: [
      "Safe daytime shelter & warm peer interaction",
      "Nutritious midday meals and wholesome snacks",
      "Free health screening & geriatric clinics",
      "Income-generating handicrafts & training",
      "Outreach support & family counselling",
    ],
    impactTitle: "Key Impact",
    impact: [
      "Hundreds of elders relieved from day-long isolation and neglect",
      "Improved nutritional status and chronic disease monitoring",
      "Small supplemental income through paper bag and handicraft making",
    ],
  },
  {
    title: "Elders Helpline for Elders in Distress",
    shortTitle: "Elders Helpline 1090 & 14567",
    icon: PhoneCall,
    category: "Safety & Protection",
    image: eldersHelplineImage,
    metric: "2.7L+ Calls",
    metricLabel: "Calls answered since inception",
    intro:
      "Elders Helpline 1090 is a landmark joint initiative of Nightingales Medical Trust and Bengaluru City Police, providing immediate crisis rescue, dispute resolution, and legal protection.",
    paragraphs: [
      "Operating round-the-clock, the helpline handles cases of physical abuse, property grabbing, abandonment, financial cheating, and familial harassment.",
      "NMT also operates the National Helpline for Senior Citizens (Elder Line 14567) across Karnataka.",
    ],
    impactTitle: "Helpline Milestones",
    impact: [
      "Over 2,70,000 distress calls answered and guided",
      "9,000+ written complaints formally investigated and resolved",
      "Free legal advocacy, police mediation, and on-ground rescue",
    ],
    servicesTitle: "Support Interventions",
    services: [
      "Trained telephone counsellors & police liaison officers",
      "Field visits for domestic abuse dispute resolution",
      "Emergency rescue of abandoned seniors in crisis",
      "Free legal counseling and maintenance tribunal guidance",
    ],
  },
  {
    title: "Job 60+ : Employment and Skilling for Needy Elderly",
    shortTitle: "Job 60+ Senior Employment",
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
    impactTitle: "Program Milestones",
    impact: [
      "2,620+ seniors placed in meaningful employment",
      "Pioneered Senior Citizen Job Fairs across Karnataka",
      "Restored self-reliance, purpose, and self-esteem for needy elders",
    ],
    servicesTitle: "Services Offered",
    services: [
      "Dedicated job portal (nightingalesjobs60plus.com)",
      "Senior Citizen Job Fairs across Bengaluru",
      "Basic computer, digital tools, and office skilling",
      "Corporate employer sensitization on hiring elders",
      "Financial planning & post-retirement advisory",
    ],
  },
  {
    title: "Nightingales Smriti Gram - India’s Largest Dementia Care Village",
    shortTitle: "Nightingales Smriti Gram",
    icon: Building2,
    category: "Dementia Village",
    image: smritiGramImage,
    metric: "300 Beds",
    metricLabel: "National Dementia Campus",
    intro:
      "NMT is establishing Smriti Gram, a 300-bed comprehensive dementia care ecosystem, including 100 beds exclusively for marginalized elders, located near Doddaballapur.",
    paragraphs: [
      "Envisioned as a national model for person-centered dementia care, learning, and research, Smriti Gram combines residential cottages, sensory gardens, clinical wards, and an advanced training academy.",
      "Land has been acquired near Doddaballapur (1 hour from Bengaluru). Phase 1 (100 beds + Training Academy) is scheduled to be operational by September 2026.",
    ],
    impactTitle: "Project Timeline",
    impact: [
      "Land acquired near Doddaballapur (1 hour from Bengaluru)",
      "Phase 1 (100 beds + Training Academy): Operational by September 2026",
      "Phase 2 (additional 200 beds): Completion by December 2028",
      "100 beds dedicated to economically disadvantaged seniors at zero cost",
    ],
    servicesTitle: "Key Facilities",
    services: [
      "Person-centered dementia living cottages",
      "Sensory memory garden and therapeutic landscape",
      "Tele-medicine and specialized dementia rehabilitation",
      "National Dementia Training & Research Academy",
    ],
  },
  {
    title: "Training of Auto Drivers in Lifesaving Skills",
    shortTitle: "Auto Drivers Lifesaver Network",
    icon: Car,
    category: "Emergency First Responders",
    image: autoDriversImage,
    metric: "First Responders",
    metricLabel: "On-road emergency readiness",
    intro:
      "Equipping Bengaluru auto-rickshaw drivers with certified CPR and trauma first-aid skills, turning thousands of daily city drivers into immediate emergency first responders.",
    paragraphs: [
      "Auto drivers navigate the city continuously and are often the very first people to witness road accidents, sudden collapses, and medical emergencies.",
      "By equipping them with compression-only CPR, bleeding control, and patient stabilizing skills, we bridge critical golden hour minutes before an ambulance arrives.",
    ],
    impactTitle: "Anticipated Impact",
    impact: [
      "Immediate on-road medical stabilization during traffic emergencies",
      "Empowered driver workforce serving as community lifesavers",
      "Aligned with Bengaluru's mission as the CPR Capital of India",
    ],
    servicesTitle: "Curriculum & Kits",
    services: [
      "Hands-on CPR simulation and wound management training",
      "Distribution of basic first-responder medical kits",
      "Driver identification badges and emergency police helpline liaison",
    ],
  },
  {
    title: "Geriatric & Dementia Research Department",
    shortTitle: "Dementia & Geriatric Research",
    icon: Microscope,
    category: "Research & Policy",
    image: researchImage,
    metric: "Evidence-Based",
    metricLabel: "Academic & clinical studies",
    intro:
      "Advancing applied clinical, epidemiological, and operational research on dementia, cognitive decline, and scalable eldercare models in India.",
    paragraphs: [
      "Working in collaboration with academic institutes and healthcare experts, our research department conducts population surveys, tests non-pharmacological therapies, and publishes evidence-based recommendations.",
      "The findings directly shape public health guidelines and policy advocacy for India's rapidly growing senior population.",
    ],
    impactTitle: "Key Contributions",
    impact: [
      "Validated cognitive assessment screening tools in regional languages",
      "Epidemiological prevalence studies on urban and rural dementia",
      "Whitepapers on caregiver burnout and long-term care financing",
    ],
    servicesTitle: "Focus Areas",
    services: [
      "Cognitive screening methodology trials",
      "Nutritional and music therapy intervention assessments",
      "Family caregiver burden monitoring and support models",
    ],
  },
  {
    title: "Mobile Outreach & Screening Project",
    shortTitle: "Mobile Health Outreach",
    icon: Stethoscope,
    category: "Doorstep Healthcare",
    image: mobileOutreachImage,
    metric: "Doorstep Care",
    metricLabel: "Semi-urban & rural outreach",
    intro:
      "Delivering mobile geriatric medical vans, memory screening, and doorstep health consultations directly to vulnerable seniors in rural and peri-urban communities.",
    paragraphs: [
      "Mobility constraints and economic barriers prevent thousands of elderly from accessing hospital diagnostics. Our mobile outreach vans bring physicians, diagnostic tools, and essential medicines directly to their doorstep.",
    ],
    impactTitle: "Project Reach",
    impact: [
      "Doorstep health and memory screenings for rural elders",
      "Early diagnosis of cognitive decline, hypertension, and diabetes",
      "Zero cost primary healthcare and free monthly medication refills",
    ],
    servicesTitle: "Van Services",
    services: [
      "Point-of-care vital checks, ECG, and blood sugar tests",
      "Physician and geriatric nurse consultations",
      "Memory screening and family caregiver advisory",
      "Direct referral pathways to tertiary medical centers",
    ],
  },
];

// ==========================================
// 4. CORPORATE DONATIONS: SMRITI GRAM ITEMS
// ==========================================
const SMRITI_GRAM_DONATION_ITEMS = [
  { item: "Tele-medicine Unit", category: "Clinical & Therapeutic Units" },
  { item: "Activity & Therapy Areas", category: "Clinical & Therapeutic Units" },
  { item: "Rehabilitation Unit", category: "Clinical & Therapeutic Units" },
  { item: "Alternate Therapy Unit (Art, Music, Ayurveda, etc.)", category: "Clinical & Therapeutic Units" },
  { item: "Solar Power System", category: "Green Campus & Sustainable Energy" },
  { item: "Effluent Treatment Plant", category: "Green Campus & Sustainable Energy" },
  { item: "Mechanised Stainless Steel Kitchen & Dining", category: "Operational & Facility Units" },
  { item: "Laundry Unit", category: "Operational & Facility Units" },
  { item: "Therapeutic Landscape", category: "Green Campus & Sustainable Energy" },
  { item: "Audio-Visual Equipment", category: "Operational & Facility Units" },
  { item: "Medical Equipments", category: "Clinical & Therapeutic Units" },
  { item: "Safety and Surveillance Equipment", category: "Operational & Facility Units" },
  { item: "Ambulance", category: "Clinical & Therapeutic Units" },
  { item: "Office furniture", category: "Elder-Friendly Living & Fitments" },
  { item: "Hospital cots", category: "Elder-Friendly Living & Fitments" },
  { item: "Elder-friendly patient chairs with safety belts", category: "Elder-Friendly Living & Fitments" },
  { item: "Storage cupboards", category: "Elder-Friendly Living & Fitments" },
  { item: "IT & Audio visual equipments", category: "Operational & Facility Units" },
  { item: "Electrical Equipments", category: "Operational & Facility Units" },
  { item: "Landscaping & Sensory Garden", category: "Green Campus & Sustainable Energy" },
];

const DONATION_CATEGORIES_GROUPED = [
  {
    category: "Clinical & Therapeutic Units",
    icon: Stethoscope,
    items: [
      "Tele-medicine Unit",
      "Activity & Therapy Areas",
      "Rehabilitation Unit",
      "Alternate Therapy Unit (Art, Music, Ayurveda, etc.)",
      "Medical Equipments",
      "Ambulance",
    ],
  },
  {
    category: "Green Campus & Sustainability",
    icon: SunMedium,
    items: [
      "Solar Power System",
      "Effluent Treatment Plant (Zero-Discharge ETP)",
      "Therapeutic Landscape",
      "Landscaping & Sensory Garden",
    ],
  },
  {
    category: "Operational & Facility Infrastructure",
    icon: UtensilsCrossed,
    items: [
      "Mechanised Stainless Steel Kitchen & Dining",
      "Industrial Laundry Unit",
      "Safety and Surveillance Equipment",
      "Audio-Visual Equipment",
      "IT & Audio Visual Equipments",
      "Electrical Equipments & Backup",
    ],
  },
  {
    category: "Elder-Friendly Living & Fitments",
    icon: Bed,
    items: [
      "Hospital cots with safety side rails",
      "Elder-friendly patient chairs with safety belts",
      "Bedside Storage cupboards",
      "Office furniture & caregiver stations",
    ],
  },
];

// ==========================================
// 5. CORPORATE VOLUNTEERING MODULES
// ==========================================
const corporateVolunteeringItems = [
  {
    title: "Recreational Activities & Outings with Elders",
    icon: HeartHandshake,
    desc: "Organize picnics, festival celebrations, music, board games, and cheerful outings for seniors in our care homes.",
  },
  {
    title: "Awareness & Communication Campaigns",
    icon: Megaphone,
    desc: "Amplify voices on elder rights, dementia stigma reduction, and community eldercare through joint digital campaigns.",
  },
  {
    title: "Governance & Strategy Support",
    icon: ShieldCheck,
    desc: "Share senior leadership expertise in strategic planning, process excellence, legal compliance, and organizational advisory.",
  },
  {
    title: "Livelihood & Income-Generation Initiatives",
    icon: Briefcase,
    desc: "Mentor seniors in micro-enterprise skills, market access for handcrafted goods, and inclusive employment opportunities.",
  },
  {
    title: "Skill Building & Training",
    icon: GraduationCap,
    desc: "Conduct capability-building workshops for old age home staff, grassroots bedside caregivers, and administrative teams.",
  },
  {
    title: "Technology & Digital Tool Development",
    icon: Laptop,
    desc: "Collaborate with our tech teams to build elder-friendly portals, digital health monitors, and helpline software tools.",
  },
  {
    title: "Fundraising Support & Matching Grants",
    icon: Gift,
    desc: "Host internal corporate fundraising marathons, charity galas, and CSR matching gift challenges among employees.",
  },
  {
    title: "Beautification & Facility Enhancement",
    icon: Paintbrush,
    desc: "Spend a team day painting, landscaping sensory gardens, and refurbishing old age home living spaces for residents.",
  },
  {
    title: "Digital Literacy Training",
    icon: Laptop,
    desc: "One-on-one employee mentorship teaching seniors how to safely use smartphones, UPI banking, and digital health apps.",
  },
  {
    title: "Documentation & Impact Reporting",
    icon: FileCheck2,
    desc: "Help craft beneficiary impact stories, survey analyses, documentary videos, and annual CSR accomplishment briefs.",
  },
  {
    title: "In-Kind Donations",
    icon: PackageCheck,
    desc: "Sponsor essential nutrition, adult hygiene supplies, medical disposables, assistive wheelchairs, and hospital equipment.",
  },
];

// ==========================================
// 6. EVENT SPONSORSHIP OBSERVANCES
// ==========================================
const observanceEvents = [
  {
    title: "International Day of Older Persons",
    date: "October 1",
    desc: "City-wide celebration of senior citizens featuring intergenerational cultural meets, awards for resilient seniors, and public rallies.",
  },
  {
    title: "World Elder Abuse Awareness Day",
    date: "June 15",
    desc: "Joint public sensitization campaign with Bengaluru City Police and legal aid clinics to protect senior rights and prevent abuse.",
  },
  {
    title: "World Alzheimer’s Day & Month",
    date: "September (All Month)",
    desc: "High-impact memory walks, dementia screening camps, caregiver symposiums, and public memory awareness roadshows.",
  },
  {
    title: "Senior Citizen Job Fairs",
    date: "Bi-Annual",
    desc: "Jobs 60+ recruitment fairs pairing 500+ elderly candidates with forward-thinking corporate employers and SMEs.",
  },
  {
    title: "Digital Literacy & Cyber Safety Programs",
    date: "Year-Round",
    desc: "Grassroots workshops across community centers protecting senior citizens against cyber scams, phishing, and financial frauds.",
  },
];

const CSR_NAV = [
  { id: "why-partner", label: "Why Partner?", icon: Award },
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

            {/* Reach Section if available */}
            {project.reach && project.reach.length > 0 && (
              <div className="mt-6 rounded-2xl border border-[#ED6439]/15 bg-[#FFF8EE] p-5">
                <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.12em] text-[#263746]">
                  <Target className="h-4 w-4 text-[#ED6439]" />
                  {project.reachTitle || "Current Reach"}
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

            {/* Impact Section */}
            {project.impact && project.impact.length > 0 && (
              <div className="mt-6 rounded-2xl border border-[#ED6439]/15 bg-[#FFF8EE] p-5">
                <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.12em] text-[#263746]">
                  <Target className="h-4 w-4 text-[#ED6439]" />
                  {project.impactTitle || "Impact & Outcomes"}
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

            {/* Services Section */}
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
          HERO BANNER
          ====================================================== */}
      <section className="relative isolate min-h-[520px] w-full overflow-hidden bg-[#17232B] sm:min-h-[580px] lg:min-h-[620px]">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-35 mix-blend-luminosity"
          style={{ backgroundImage: `url(${getInvolvedHeroImage})` }}
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17232B] via-[#17232B]/90 to-[#ED6439]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17232B] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-5 py-16 sm:min-h-[580px] sm:px-8 lg:min-h-[620px] lg:px-10">
          <Reveal className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF9A78]">
              <Link to="/" className="transition hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Get Involved</span>
            </div>

            {/* Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ED6439] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md">
                <Building2 className="h-3.5 w-3.5" />
                Corporate Partnerships
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FF9A78]" />
                Eligible under Companies Act, 2013 | 80G & CSR-1
              </span>
            </div>

            {/* Main Heading as requested */}
            <h1 className="mt-5 font-display text-1xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-2xl lg:text-5xl">
              Partner with Us to Create Lasting Impact for Elders and Those with Dementia
            </h1>

            {/* Intro text as requested */}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/85 sm:text-lg sm:leading-8">
              <p>
                At Nightingales Medical Trust (NMT), we believe meaningful social change happens when individuals, corporates, and communities come together. We actively collaborate with corporates, government bodies, NGOs, and academic institutions to improve the quality of life of elders, especially those living with dementia and those from marginalized communities.
              </p>
      
              <p className="font-semibold text-white">
                We invite corporates to engage with us through CSR partnerships, employee engagement, and long-term collaborations that create measurable social impact.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#partnership-options"
                className="inline-flex items-center gap-2 rounded-full bg-[#ED6439] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#ED6439]/30 transition hover:-translate-y-0.5 hover:bg-[#d95730]"
              >
                1. Adopt a Project
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#corporate-donations"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/20"
              >
                2. Smriti Gram Capex
              </a>

              <a
                href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Partnership%20Enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3.5 text-sm font-semibold text-white/90 transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                rm@nightingaleseldercare.com
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
              <p className="mt-1 text-xs text-white/70">Elders Helpline (1090 & 14567)</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-[#FF9A78] sm:text-3xl">300 Beds</p>
              <p className="mt-1 text-xs text-white/70">Smriti Gram Dementia Village</p>
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

              {/* TAX EXEMPTION & GOVERNANCE BADGE */}
              <div className="rounded-2xl border border-[#ED6439]/20 bg-[#FFF8EE] p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ED6439]">
                  <ShieldCheck className="h-4 w-4" />
                  CSR & Tax Compliance
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#526574]">
                  NMT is eligible for CSR funding under Section 135 of the Companies Act, 2013. Donations are entitled to 50% tax exemption under Section 80G. Valid 12A, CSR-1, and FCRA certified.
                </p>
                <div className="mt-4 border-t border-border/80 pt-3">
                  <a
                    href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Due%20Diligence%20Documents"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ED6439] hover:underline"
                  >
                    Request CSR Kit <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
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
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                  <Award className="h-3.5 w-3.5" />
                  Value Proposition
                </span>
                <h2 className="mt-3 font-display text-2xl font-extrabold text-[#263746] sm:text-4xl lg:text-5xl">
                  Why Partner with NMT?
                </h2>
                <div className="mt-4 h-1 w-12 bg-[#ED6439]" />

                <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  At Nightingales Medical Trust (NMT), we combine over two decades of grassroots elder and dementia care expertise with corporate governance rigor, transparent utilization reporting, and impactful employee engagement.
                </p>
              </Reveal>

              {/* 5 BULLET POINTS FROM USER PROMPT */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {whyPartnerPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <Reveal key={pillar.title} delay={idx * 50} className="h-full">
                      <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:border-[#ED6439]/40 hover:shadow-md">
                        <div className="flex items-center justify-between gap-2">
                          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ED6439]/10 text-[#ED6439]">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="rounded-full bg-[#FFF4DF] px-3 py-1 text-[11px] font-bold text-[#ED6439]">
                            {pillar.stat}
                          </span>
                        </div>

                        <h3 className="mt-4 font-display text-base font-bold text-[#263746]">
                          {pillar.title}
                        </h3>

                        <p className="mt-2.5 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                          {pillar.desc}
                        </p>

                        <div className="mt-4 border-t border-border/70 pt-2.5 text-[11px] font-semibold text-[#ED6439]">
                          {pillar.sublabel}
                        </div>
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
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#ED6439]">
                        <Target className="h-3.5 w-3.5" />
                        Focus Areas
                      </span>
                      <h2 className="mt-2 font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                        Causes You Can Support
                      </h2>
                      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                        Your organization can choose to support one or more of the following focus areas:
                      </p>
                    </div>

                    <a
                      href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Focus%20Area%20Inquiry"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#ED6439] px-4 py-2 text-xs font-bold text-white shadow-md shadow-[#ED6439]/20 transition-all hover:bg-[#d95730]"
                    >
                      Enquire for Focus Areas <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {causes.map((c, idx) => {
                      const Icon = c.icon;
                      return (
                        <div
                          key={c.title}
                          className="flex flex-col rounded-2xl border border-border/80 bg-[#FAF6F0] p-5 transition-all hover:-translate-y-1 hover:border-[#ED6439]/40 hover:bg-white hover:shadow-md"
                        >
                          <div className="flex items-center gap-3">
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#ED6439] text-white">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-[11px] font-bold text-[#ED6439]">
                              0{idx + 1}
                            </span>
                          </div>

                          <h3 className="mt-3.5 font-display text-base font-bold text-[#263746]">
                            {c.title}
                          </h3>

                          <p className="mt-2 flex-1 text-xs leading-relaxed text-[#526574]">
                            {c.desc}
                          </p>
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
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ED6439]">
                Collaboration Models
              </span>
              <h2 className="mt-1 font-display text-3xl font-extrabold text-[#263746] sm:text-4xl">
                Partnership Options
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We offer multiple structured pathways for corporate partners, from adopting flagship projects to sponsoring capital equipment, payroll giving, and employee volunteering.
              </p>
            </div>

            {/* ======================================================
                OPTION 1: ADOPT A PROJECT
                ====================================================== */}
            <section id="partnership-options" className="scroll-mt-24">
              <span id="adopt-a-project" className="relative -top-24 block" />
              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                      <HeartHandshake className="h-3.5 w-3.5" />
                      Option 01
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                      1. Adopt a Project
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold text-[#526574]">
                      Support one or more of our need-based flagship programs:
                    </p>
                  </div>
                  <p className="max-w-md text-xs text-muted-foreground sm:text-sm">
                    Click on any project to explore its full reach, service portfolio, measurable impact, and proposal details.
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

                          <h4 className="mt-3 font-display text-lg font-bold leading-snug text-[#263746] transition-colors group-hover:text-[#ED6439]">
                            {project.shortTitle}
                          </h4>

                          <p className="mt-2.5 flex-1 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
                            {project.intro}
                          </p>

                          <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-3.5">
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ED6439]">
                              View Reach & Impact
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
              <span id="donate" className="relative -top-24 block" />
              <span id="corporate" className="relative -top-24 block" />
              <Reveal>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                  <HandCoins className="h-3.5 w-3.5" />
                  Option 02
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
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
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ED6439] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                      A National Model for Dementia Care
                    </span>
                    <h4 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                      Smriti Gram – A National Model for Dementia Care
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                      NMT is establishing Smriti Gram, a 300-bed comprehensive dementia care ecosystem, including 100 beds exclusively for marginalized elders.
                    </p>

                    {/* PROJECT STATUS SECTION AS REQUESTED */}
                    <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF9A78]">Project Status:</p>
                      <ul className="mt-3 space-y-2 text-xs text-white/90 sm:text-sm">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                          <span><strong>Location:</strong> Land acquired near Doddaballapur (1 hour from Bengaluru)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                          <span><strong>Phase 1 (100 beds + Training Academy):</strong> Operational by September 2026</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED6439]" />
                          <span><strong>Phase 2 (additional 200 beds):</strong> Completion by December 2028</span>
                        </li>
                      </ul>
                    </div>

                    <p className="mt-4 text-xs italic text-[#FF9A78]/90">
                      Each contribution directly enhances quality of care, safety, sustainability, and dignity.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        to="/smriti-gram"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#263746] transition hover:bg-[#FF9A78]"
                      >
                        Explore Smriti Gram Masterplan
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href="mailto:rm@nightingaleseldercare.com?subject=Smriti%20Gram%20Donation%20Opportunities"
                        className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
                      >
                        Request Capex Proposal
                      </a>
                    </div>
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

              {/* DONATION OPPORTUNITIES AT SMRITI GRAM (EXACT COMPLETE LIST) */}
              <div className="mt-12">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                      Smriti Gram Giving Catalog
                    </span>
                    <h4 className="mt-1 font-display text-xl font-bold text-[#263746] sm:text-2xl">
                      Donation Opportunities at Smriti Gram:
                    </h4>
                  </div>
                  <p className="max-w-md text-xs text-muted-foreground">
                    Each contribution directly enhances quality of care, safety, sustainability, and dignity.
                  </p>
                </div>

                {/* Categorized Donation Opportunities */}
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {DONATION_CATEGORIES_GROUPED.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div
                        key={cat.category}
                        className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:border-[#ED6439]/30"
                      >
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ED6439]/10 text-[#ED6439]">
                              <Icon className="h-5 w-5" />
                            </span>
                            <h5 className="font-display text-base font-bold text-[#263746]">
                              {cat.category}
                            </h5>
                          </div>

                          <ul className="mt-4 space-y-2.5">
                            {cat.items.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-xs text-muted-foreground sm:text-[13px]">
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ED6439]" />
                                <span className="font-medium text-[#263746]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 border-t border-border/70 pt-3">
                          <a
                            href={`mailto:rm@nightingaleseldercare.com?subject=Enquiry%20to%20Sponsor%20Infrastructure:%20${encodeURIComponent(cat.category)}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ED6439] hover:underline"
                          >
                            Sponsor this Category <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Full 20-Item Pill Grid for Complete Clarity */}
                <div className="mt-8 rounded-2xl border border-[#ED6439]/20 bg-[#FAF6F0] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                    Complete List of Donation Items:
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Corporates can sponsor entire dedicated units or specific equipment packages:
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {SMRITI_GRAM_DONATION_ITEMS.map((itemObj) => (
                      <a
                        key={itemObj.item}
                        href={`mailto:rm@nightingaleseldercare.com?subject=Sponsor%20Smriti%20Gram%20Item:%20${encodeURIComponent(itemObj.item)}`}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-[#263746] shadow-2xs transition-colors hover:border-[#ED6439] hover:bg-[#ED6439] hover:text-white"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#ED6439]" />
                        <span>{itemObj.item}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ======================================================
                OPTION 3: EVENT SPONSORSHIP & PARTICIPATION
                ====================================================== */}
            <section id="event-sponsorship" className="scroll-mt-24">
              <Reveal>
                <div className="rounded-3xl border border-[#ED6439]/20 bg-[#FFF8EE] p-6 sm:p-8 lg:p-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#ED6439]">
                    <Megaphone className="h-4 w-4" />
                    Option 03
                  </span>

                  <h3 className="mt-2 font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                    3. Event Sponsorship & Participation
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Partner with us for national and international observances such as:
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {observanceEvents.map((evt) => (
                      <div key={evt.title} className="rounded-2xl border border-border bg-white p-5 shadow-2xs">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ED6439]/10 px-3 py-1 text-[11px] font-bold text-[#ED6439]">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {evt.date}
                        </span>
                        <h4 className="mt-3 font-display text-base font-bold text-[#263746]">{evt.title}</h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{evt.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-[#ED6439]/30 bg-white p-5">
                    <p className="font-display text-sm font-bold text-[#263746]">
                      Opportunities include event sponsorship, employee volunteering, and brand visibility.
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Co-brand community initiatives, mobilize corporate teams on the ground, and showcase your leadership in elder welfare.
                    </p>
                    <a
                      href="mailto:rm@nightingaleseldercare.com?subject=Event%20Sponsorship%20Enquiry"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#ED6439] hover:underline"
                    >
                      Enquire for Event Sponsorship Calendar <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ======================================================
                OPTION 4: PAYROLL GIVING
                ====================================================== */}
            <section id="payroll-giving" className="scroll-mt-24">
              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
                  <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                    <div className="flex flex-col justify-between bg-[#FAF6F0] p-6 sm:p-8 lg:p-10">
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                          <Gift className="h-4 w-4" />
                          Option 04
                        </span>
                        <h3 className="mt-3 font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                          4. Payroll Giving
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-[#263746] sm:text-base">
                          Enable your employees to support elder care and dementia care through monthly salary contributions toward NMT programs—an easy, consistent way to create long-term impact.
                        </p>
                      </div>

                      <div className="mt-6 border-t border-border pt-4 text-xs font-semibold text-[#ED6439]">
                        ✓ 100% Tax-Exempt Under Section 80G for Employees
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 lg:p-10">
                      <h4 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[#263746]">
                        Simple 3-Step Setup:
                      </h4>

                      <div className="mt-5 space-y-4">
                        {[
                          {
                            step: "01",
                            title: "Enroll Your Organization",
                            desc: "Our CSR desk coordinates with your HR/Payroll team and provides ready communication collateral for employees.",
                          },
                          {
                            step: "02",
                            title: "Voluntary Opt-In",
                            desc: "Employees choose their preferred monthly contribution (e.g. ₹200 / ₹500 / ₹1,000) directly from their monthly pay slip.",
                          },
                          {
                            step: "03",
                            title: "Transparent Impact & 80G Certificates",
                            desc: "Employees receive automated 80G tax exemption certificates and quarterly updates on the elders their funds support.",
                          },
                        ].map((s) => (
                          <div key={s.step} className="flex items-start gap-3.5">
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#ED6439] text-xs font-bold text-white shadow-xs">
                              {s.step}
                            </span>
                            <div>
                              <p className="text-sm font-bold text-[#263746]">{s.title}</p>
                              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <a
                        href="mailto:rm@nightingaleseldercare.com?subject=Setup%20Payroll%20Giving"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ED6439] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#ED6439]/20 transition-all hover:bg-[#d95730]"
                      >
                        Setup Payroll Giving with NMT <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ======================================================
                OPTION 5: CORPORATE VOLUNTEERING & EMPLOYEE ENGAGEMENT
                ====================================================== */}
            <section id="corporate-volunteering" className="scroll-mt-24">
              <span id="volunteer" className="relative -top-24 block" />
              <Reveal>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                    <Users className="h-3.5 w-3.5" />
                    Option 05
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-[#263746] sm:text-3xl">
                    5. Corporate Volunteering & Employee Engagement
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    We offer structured volunteering opportunities where employees can contribute their time, skills, and expertise, including:
                  </p>
                </div>
              </Reveal>

              {/* ALL 11 VOLUNTEERING MODULES FROM PROMPT */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {corporateVolunteeringItems.map((mod, idx) => {
                  const Icon = mod.icon;
                  return (
                    <Reveal key={mod.title} delay={(idx % 3) * 50} className="h-full">
                      <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-[#ED6439]/40 hover:shadow-md">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#ED6439]/10 text-[#ED6439]">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="text-[11px] font-bold text-[#ED6439]">
                            Module {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h4 className="mt-3.5 font-display text-sm font-bold leading-snug text-[#263746]">
                          {mod.title}
                        </h4>

                        <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                          {mod.desc}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-[#ED6439]/20 bg-[#FFF8EE] p-5 text-center sm:p-6">
                <p className="font-display text-base font-bold text-[#263746]">
                  Interested in organizing an employee volunteering day?
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Our team coordinates half-day and full-day customized volunteering drives across our centres.
                </p>
                <a
                  href="mailto:rm@nightingaleseldercare.com?subject=Corporate%20Volunteering%20Day%20Enquiry"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ED6439] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#ED6439]/20 transition-all hover:bg-[#d95730]"
                >
                  Schedule an Employee Volunteering Drive
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </section>

            {/* ======================================================
                CONNECT WITH CSR DESK
                ====================================================== */}
            <section id="contact-csr" className="scroll-mt-24">
              <span id="contact" className="relative -top-24 block" />
              <div className="rounded-3xl border border-[#ED6439]/20 bg-[#FAF6F0] p-6 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ED6439]">CSR Advisory Desk</span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-[#263746] sm:text-3xl">
                      Partner with NMT to Create Meaningful Impact
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Our CSR partnerships team works closely with your committee to match funding priorities with verified beneficiary outcomes. We provide detailed project documentation, financial budgets, and facilitate site visits.
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-[#263746]">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#ED6439]/10 text-[#ED6439]">
                          <Mail className="h-4 w-4" />
                        </span>
                        <a href="mailto:rm@nightingaleseldercare.com" className="font-semibold hover:text-[#ED6439]">
                          rm@nightingaleseldercare.com
                        </a>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-[#263746]">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#ED6439]/10 text-[#ED6439]">
                          <Phone className="h-4 w-4" />
                        </span>
                        <span>080 4242 6565 / +91 80 2354 8444</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                    <h4 className="font-display text-base font-bold text-[#263746]">
                      Initiate a CSR Discussion
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Email us directly with your company name, preferred cause, and tentative timelines.
                    </p>

                    <a
                      href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Partnership%20Discussion&body=Hello%20Nightingales%20CSR%20Team,%0A%0AWe%20are%20interested%20in%20exploring%20a%20CSR%20collaboration%20with%20NMT.%0A%0ACompany%20Name:%0AFocus%20Area%20of%20Interest:%0AContact%20Person:%0APhone%20Number:%0A"
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ED6439] py-3 text-xs font-bold text-white shadow-md shadow-[#ED6439]/20 transition-all hover:bg-[#d95730]"
                    >
                      <Mail className="h-4 w-4" />
                      Email CSR Team (rm@nightingaleseldercare.com)
                    </a>

                    <p className="mt-3 text-center text-[11px] text-muted-foreground">
                      Direct response from our CSR desk within 24–48 business hours
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ======================================================
          FINAL CALL TO ACTION (AS REQUESTED)
          ====================================================== */}
      <section className="relative overflow-hidden bg-[#17232B] py-16 sm:py-20 text-white">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#ED6439]/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <Sparkles className="mx-auto h-7 w-7 text-[#ED6439]" />
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let’s Build a Compassionate Future for Elders.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Partner with NMT to create meaningful, measurable, and lasting impact.
            </p>

            <p className="mt-2 text-xs text-white/60">
              For more details, please contact us at <a href="mailto:rm@nightingaleseldercare.com" className="text-[#FF9A78] underline">rm@nightingaleseldercare.com</a>
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:rm@nightingaleseldercare.com?subject=CSR%20Partnership%20Enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-[#ED6439] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#ED6439]/40 transition hover:-translate-y-0.5 hover:bg-[#d95730]"
              >
                Connect with CSR Desk
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#partnership-options"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Browse Projects
              </a>
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
