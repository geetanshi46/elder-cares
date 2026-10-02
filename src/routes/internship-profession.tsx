import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/internship-profession")({
  component: InternshipProfession,
});

type ProfessionCategory = {
  category: string;
  title: string;
  eligibleDegrees?: string[];
  objectives?: string[];
  responsibilities?: string[];
  locations: string[];
};

const PROFESSIONS: ProfessionCategory[] = [
  {
    category: "Category 1",
    title: "Psychology",
    eligibleDegrees: [
      "B.Sc Psychology",
      "M.Sc Psychology / Clinical Psychology",
      "MSW (Master of Social Work)",
      "BSW (Bachelor of Social Work)",
    ],
    objectives: [
      "Enhance residents' emotional and mental well-being through evidence-based interventions.",
      "Provide individualized psychological support tailored to residents’ cognitive and emotional needs.",
      "Document and evaluate outcomes for continuous improvement.",
    ],
    responsibilities: [
      "Support care planning and personalized intervention.",
      "Facilitate therapeutic and recreational activities.",
      "Assist in caregiver training.",
      "Engage in planning de-stressing activities for staff.",
      "Engage in one-on-one interaction with residents.",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Tanya Mathias Elder Care Centre, Kothanur, Bengaluru",
      "Nightingales Trust Dementia Day Care Centre, RT Nagar, Bengaluru",
      "Nightingales Trust Dementia Day Care Centre, Jayanagar, Bengaluru",
      "Nightingales Dementia Care Centre - ETCM Hospital, Kolar",
      "Mobile Active Ageing - North, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
    ],
  },

  {
    category: "Category 2",
    title: "Catering / Nutritional Studies",
    eligibleDegrees: [
      "B.Sc in Nutrition & Dietetics",
      "M.Sc in Clinical Nutrition",
      "B.Sc in Food Science & Nutrition",
      "M.Sc in Food Service Management",
      "Diploma in Catering Technology",
      "PG Diploma in Dietetics / Nutrition",
    ],
    objectives: [
      "Gain experience in Clinical Nutrition for Elderly and Persons with Dementia, Alzheimer's and related conditions",
      "Assist in providing a balanced diet for different client groups.",
      "Promote healthy eating habits.",
      "Align diet with medical and age-specific needs.",
    ],
    responsibilities: [
      "Evaluate current menus and suggest nutritional enhancements.",
      "Conduct diet-related awareness sessions for residents and caregivers.",
      "Nutritional education",
      "Assist kitchen staff with menu planning and portion control.",
      "Assist in Monitoring dietary compliance.",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Tanya Mathias Elder Care Centre, Kothanur, Bengaluru",
      "Nightingales sandhya Suraksha, Anepalya, Bengaluru",
    ],
  },

  {
    category: "Category 3",
    title: "Physiotherapy",
    eligibleDegrees: [
      "BPT (Bachelor of Physiotherapy)",
      "MPT (Master of Physiotherapy)",
    ],
    objectives: [
      "Gain experience in Physical therapy for Elders and Persons with Dementia, Alzheimer's and related conditions",
      "Aid in reducing the risk of falls and physical decline.",
      "Aid in the improvement of mobility and quality of life of Elderly",
      "Provide consistent therapy support across programs.",
    ],
    responsibilities: [
      "Support physiotherapists during sessions.",
      "Assist in the exercise routines for residents and day care clients as per the schedule",
      "Assist in documenting therapy progress",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Tanya Mathias Elder Care Centre, Kothanur, Bengaluru",
      "Nightingales Trust Dementia Day Care Centre, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
      "Nightingales Dementia Care Centre - ETCM Hospital, Kolar",
      "Mobile Active Ageing - North, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
      "Nightingales sandhya Suraksha, Anepalya, Bengaluru",
      "Nightingales Sandhya Kirana, Shanti Nagar, Bengaluru",
    ],
  },

  {
    category: "Category 4",
    title: "Social Work",
    eligibleDegrees: [
      "Bachelor of Social Work (BSW)",
      "Master of Social Work (MSW)",
    ],
    objectives: [
      "Enhance residents' emotional and mental well-being through evidence-based interventions.",
      "Strengthen community engagement and service delivery through casework and advocacy.",
      "support evidence-based program development",
    ],
    responsibilities: [
      "Documentation and support care planning",
      "participate in community service programes",
      "Engage in resource mapping and connect residents or families",
      "Support staff through de-stressing workshops and well-being sessions.",
      "Facilitate group sessions and community-building activities with a social focus.",
      "Engage in our community based programes",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Tanya Mathias Elder Care Centre, Kothanur, Bengaluru",
      "Nightingales Dementia Care Centre - ETCM Hospital, Kolar",
      "Mobile Active Ageing - North, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
      "Nightingales sandhya Suraksha, Anepalya, Bengaluru",
      "Nightingales Sandhya Kirana, Shanti Nagar, Bengaluru",
      "Nightingales Jobs60+",
      "Hiriyaravadi (DJ Halli, Vannarper, Rajendra Nagar)",
    ],
  },

  {
    category: "Category 5",
    title: "Dental Science",
    eligibleDegrees: [
      "Bachelor of Dental Surgery (BDS)",
      "Master of Dental Surgery (MDS)",
    ],
    objectives: [
      "Gain clinical experience in Dental care of Elderly and Persons with Dementia, Alzheimer's and related conditions",
      "Aid in Improving Oral hygiene standards.",
      "Increase accessibility to preventive dental care.",
      "Raise awareness about dental health in the community.",
    ],
    responsibilities: [
      "Organize and assist in dental screening and hygiene camps.",
      "Deliver training on oral hygiene for clients and caregivers.",
      "Assess and recommend oral health protocols.",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Tanya Mathias Elder Care Centre, Kothanur, Bengaluru",
      "Nightingales Dementia Care Centre - ETCM Hospital, Kolar",
      "Mobile Active Ageing - North, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
      "Nightingales sandhya Suraksha, Anepalya, Bengaluru",
      "Nightingales Sandhya Kirana, Shanti Nagar, Bengaluru",
      "Hiriyaravadi (DJ Halli, Vannarper, Rajendra Nagar)",
      "Nightingales Trust Dementia Day Care Centre, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
    ],
  },

  {
    category: "Category 6",
    title: "Nursing",
    eligibleDegrees: [
      "General Nursing and Midwifery (GNM)",
      "Bachelor of Science in Nursing (B.Sc. Nursing)",
      "Post Basic B.Sc. Nursing",
      "Master of Science in Nursing (M.Sc. Nursing)",
    ],
    objectives: [
      "Strengthen nursing support systems.",
      "Enhance clinical skills through hands-on practice.",
      "Bridge nursing gaps during peak hours.",
    ],
    responsibilities: [
      "Support daily nursing care and hygiene routines.",
      "Participate in health checks and medical assessments.",
      "Help conduct caregiver and staff training.",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Tanya Mathias Elder Care Centre, Kothanur, Bengaluru",
      "Nightingales Dementia Care Centre - ETCM Hospital, Kolar",
      "Mobile Active Ageing - North, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
      "Nightingales sandhya Suraksha, Anepalya, Bengaluru",
      "Nightingales Sandhya Kirana, Shanti Nagar, Bengaluru",
      "Nightingales Trust Dementia Day Care Centre, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
    ],
  },

  {
    category: "Category 7",
    title: "Pharmacy Students",
    eligibleDegrees: [
      "Diploma in Pharmacy (D. Pharm)",
      "Master of Pharmacy (M. Pharm)",
      "Bachelor of Pharmacy (B. Pharm)",
      "Pharm.D (Doctor of Pharmacy)",
    ],
    objectives: [
      "Aid in dispensing accurate and safe medication to Elders and Persons with Dementia, Alzheimer's and related conditions",
      "Reduce dispensing errors",
    ],
    responsibilities: [
      "Streamline medicine storage and dispensing systems.",
      "Verify prescriptions and suggest improvements in medication management.",
      "Educate staff and caregivers on medicine usage and side effects.",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Tanya Mathias Elder Care Centre, Kothanur, Bengaluru",
      "Nightingales Dementia Care Centre - ETCM Hospital, Kolar",
      "Mobile Active Ageing - North, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
      "Nightingales sandhya Suraksha, Anepalya, Bengaluru",
      "Nightingales Sandhya Kirana, Shanti Nagar, Bengaluru",
    ],
  },

  {
    category: "Category 8",
    title: "Law",
    eligibleDegrees: [
      "LLB (Bachelor of Laws)",
      "BA LLB / BBA LLB / BCom LLB",
      "LLM (Master of Laws)",
    ],
    objectives: [
      "To gain experience in providing legal services to Elderly",
      "To understand the working of Elder Helpline",
      "Enhance legal services and advocacy.",
      "Support compliance and transparency.",
      "Empower elders with legal awareness.",
    ],
    responsibilities: [
      "Review ongoing and past legal cases at Helplines.",
      "Support in Drafting and revising client-related agreements.",
      "Conduct awareness sessions on elder law, rights, and protections.",
    ],
    locations: [
      "1090 Elders Help Line",
      "National Helpline for Senior Citizens",
    ],
  },

  {
    category: "Category 9",
    title: "Architecture & Design",
    eligibleDegrees: [
      "B.Arch – Bachelor of Architecture",
      "M.Arch – Master of Architecture",
      "B.Des – Bachelor of Design (with specialization in Interior Design, Universal Design, or Spatial Design)",
      "M.Des – Master of Design (Interior Design / Universal Design / Spatial Design)",
    ],
    objectives: [
      "Promote safety and comfort through thoughtful design.",
      "Assist in making environments dementia- and disability-friendly.",
      "Align infrastructure with geriatric care best practices",
    ],
    responsibilities: [
      "Assess existing facility layouts for elder-friendliness.",
      "Design senior-safe furniture and fixtures.",
      "Recommend improvements for lighting, signage, and accessibility.",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Smriti Gram Dementia Village",
    ],
  },

  {
    category: "Category 10",
    title: "Management Studies / HR",
    eligibleDegrees: [
      "BBA / BBM /Bcom– Bachelor of Business Administration / Bachelor of Business Management",
      "MSc - HRDM",
      "MBA / PGDM – Master of Business Administration / Post Graduate Diploma in Management (with specialization in HR, Operations, or Healthcare Management)",
      "MA in HRM / MSW-HRDM – Master’s in Human Resource Management or Social Work with HR specialization",
    ],
    objectives: [
      "To understand the working of Elder Care Home",
      "Aid in Improving operational efficiency and staff satisfaction.",
      "Support outreach efforts.",
    ],
    responsibilities: [
      "Analyze HR data to suggest attrition reduction strategies.",
      "Assist in planning volunteer recruitment, training, and retention strategies.",
    ],
    locations: [
      "NMT - Head Office - HR Department, Kasturi Nagar, Bengaluru",
      "Jobs 60+, RT Nagar, Bengaluru",
      "NMT - Head Office - Admin, Kasturi Nagar, Bengaluru",
    ],
  },

  {
    category: "Category 11",
    title: "ACCOUNTS & FINANCE",
    eligibleDegrees: [
      "Bachelor of Commerce (B.Com)",
      "Master of Commerce (M.Com)",
      "Bachelor of Business Administration – Finance (BBA – Finance)",
      "Master of Business Administration – Finance (MBA – Finance)",
      "Chartered Accountancy (CA) – Articleship/Internship",
      "Diploma in Financial Accounting",
      "Certified Management Accountant (CMA) – Students",
    ],
    objectives: [
      "To provide hands-on experience in the financial functioning of a non-profit organization.",
      "To support financial transparency and efficiency in project and organizational accounts.",
    ],
    responsibilities: [
      "Ensure proper filing and record-keeping of financial documents.",
      "Maintain data entry in accounting software",
      "Assist in preparation and maintenance of day-to-day accounts",
    ],
    locations: [
      "NMT - Head Office - Accounts & Finance, Kasturi Nagar, Bengaluru",
    ],
  },

  {
    category: "Category 12",
    title: "Media / Communication",
    eligibleDegrees: [
      "BA / MA in Journalism and Mass Communication",
      "BA / MA in Media Studies",
      "BA / MA in Visual Communication",
      "Bachelor of Design (B.Des) – Communication Design",
      "BSc / MSc in Electronic Media",
      "Diploma in Multimedia & Graphic Design",
      "MBA – Media Management / Communicatio",
    ],
    objectives: [
      "Enhance the visibility of the organization and its programs.",
      "Build awareness around ageing, elder rights, and caregiving.",
      "Improve outreach to potential donors, volunteers, and partner institutions.",
      "Create a professional and consistent communication identity.",
      "Document impact stories that support advocacy and fundraising efforts.",
    ],
    responsibilities: [
      "Develop engaging content for print, digital, and social media platforms (e.g., newsletters, posters, brochures, social posts).",
      "Document events, activities, and client stories through writing, photography, and video.",
      "Support awareness campaigns on elder care, dementia, mental health, etc.",
      "Design communication materials for outreach, fundraising, and volunteer mobilization.",
      "Assist in managing social media channels and updating website content.",
      "Develop internal communication tools (e.g., staff updates, impact reports).",
    ],
    locations: [
      "NMT - Head Office - Communication & Media, Kasturi Nagar, Bengaluru",
    ],
  },

  {
    category: "Category 13",
    title: "Engineering & Technology",
    eligibleDegrees: [
      "Bachelor of Technology / Engineering (B.Tech / B.E) – Computer Science, Information Technology, Electronics & Communication",
      "Master of Technology (M.Tech) – Relevant Specializations",
      "BSc / MSc in Computer Science / IT",
      "Diploma in Computer Applications / IT",
      "Bachelor of Computer Applications (BCA) / Master of Computer Applications (MCA)",
      "Students pursuing certifications in Web/App Development, AI, Cybersecurity, or Data Science",
    ],
    objectives: [
      "Integrate technology for efficient service delivery.",
      "Enable remote care and monitoring.",
      "Promote digital transformation in elder care.",
    ],
    responsibilities: [
      "Develop or enhance platforms for telemedicine and remote consultations.",
      "Improve database and record management systems.",
      "Support digital literacy training for staff.",
    ],
    locations: [
      "NMT - Head Office - IT & Communication, Kasturi Nagar, Bengaluru",
    ],
  },

  {
    category: "Category 14",
    title: "Medicine / Doctors",
    eligibleDegrees: [
      "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
      "Postgraduate students in Community Medicine / Geriatrics / Public Health",
      "Bachelor of Science (BSc) – Medical / Allied Health Sciences",
    ],
    objectives: [
      "Enhance clinical exposure and empathy.",
      "Improve medical screening and early diagnosis.",
      "Support preventive health initiatives.",
    ],
    responsibilities: [
      "Assist doctors during medical rounds and check-ups.",
      "Help organize health camps in the community – Along with DIA & NMT Camps",
      "Participate in medical training and awareness sessions - NLS",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Tanya Mathias Elder Care Centre, Kothanur, Bengaluru",
      "Nightingales Dementia Care Centre - ETCM Hospital, Kolar",
      "Mobile Active Ageing - North, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
      "Nightingales sandhya Suraksha, Anepalya, Bengaluru",
      "Nightingales Sandhya Kirana, Shanti Nagar, Bengaluru",
      "Nightingales Trust Dementia Day Care Centre, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
    ],
  },

  {
    category: "Category 15",
    title: "Speech Therapy",
    eligibleDegrees: [
      "Bachelor in Audiology and Speech-Language Pathology (BASLP)",
      "Master in Audiology and Speech-Language Pathology (MASLP)",
      "BSc / MSc in Speech & Hearing",
      "Diploma in Speech Therapy / Communication Disorders",
      "Students pursuing clinical practicum in Speech-Language Pathology",
    ],
    objectives: [
      "Assist speech-language pathologists in conducting speech and language assessments.",
      "Help implement individual or group therapy sessions for clients with communication or swallowing difficulties (under supervision).",
      "Observe and document client progress and therapy outcomes.",
      "Support in developing communication aids and tools (e.g., picture boards, cue cards).",
      "Conduct awareness sessions for caregivers on communication techniques and feeding safety.",
      "Assist with therapy-based activities in day care and residential settings.",
    ],
    responsibilities: [
      "Improve communication, speech clarity, and swallowing safety for clients, especially older adults and those with neurological or cognitive conditions.",
      "Enhance the quality of speech-language services provided through structured intern support.",
      "Educate caregivers and staff on effective communication strategies.",
      "Create low-cost, practical tools for ongoing client use.",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Tanya Mathias Elder Care Centre, Kothanur, Bengaluru",
      "Nightingales Dementia Care Centre - ETCM Hospital, Kolar",
      "Mobile Active Ageing - North, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
      "Nightingales sandhya Suraksha, Anepalya, Bengaluru",
      "Nightingales Sandhya Kirana, Shanti Nagar, Bengaluru",
      "Nightingales Trust Dementia Day Care Centre, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
    ],
  },

  {
    category: "Category 16",
    title: "Yoga Instructor",
    eligibleDegrees: [
      "Bachelor / Master in Yoga Science or Yoga Therapy (BSc / MSc in Yoga)",
      "Diploma / Certificate in Yoga and Naturopathy",
      "Certified Yoga Instructor (Recognized by Ministry of AYUSH or equivalent bodies)",
      "PG Diploma in Yoga Therapy",
      "Students pursuing yoga teaching or wellness coaching programs",
    ],
    objectives: [
      "Enhance physical and mental well-being of older adults and caregivers.",
      "Promote regular movement, relaxation, and mindfulness in care settings.",
      "Build sustainable, inclusive wellness practices within the organization.",
      "Reduce stress and improve morale among staff through structured yoga interventions",
    ],
    responsibilities: [
      "Conduct regular yoga sessions for residents, day care clients, caregivers, and staff.",
      "Customize yoga routines based on the age, mobility, and health conditions of participants (e.g., chair yoga for seniors, breathing techniques).",
      "Support therapeutic goals—such as improving balance, flexibility, pain relief, and stress management.",
      "Document participation and feedback; suggest improvements.",
      "Train staff and caregivers in simple yoga practices to integrate into daily routines.",
      "Assist in organizing yoga awareness events (e.g., International Yoga Day).",
    ],
    locations: [
      "Nightingales Centre for Ageing & Alzheimer's, Kasturi Nagar, Bengaluru",
      "Nightingales Trust Tanya Mathias Elder Care Centre, Kothanur, Bengaluru",
      "Nightingales Dementia Care Centre - ETCM Hospital, Kolar",
      "Mobile Active Ageing - North, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
      "Nightingales sandhya Suraksha, Anepalya, Bengaluru",
      "Nightingales Sandhya Kirana, Shanti Nagar, Bengaluru",
      "Nightingales Trust Dementia Day Care Centre, RT Nagar, Bengaluru",
      "Mobile Active Ageing - South, Jayanagar, Bengaluru",
    ],
  },

  {
    category: "Category 17",
    title: "Volunteer Recruitment for Disaster Response Initiatives",
    objectives: [
      "We are building a dedicated team of trained volunteers to support our disaster response",
      "Build a trained and responsive volunteer force for emergency situations.",
      "Ensure timely and efficient care for seniors and others during natural disasters.",
      "Minimize chaos through structured, community-based disaster response.",
      "Promote resilience and recovery within affected communities.",
    ],
    responsibilities: [
      "Support evacuation and care of vulnerable seniors during emergencies.",
      "Help with emergency medical and hygiene support under supervision.",
      "Provide emotional support and basic psychosocial aid to affected individuals.",
      "Coordinate logistics and assist field teams.",
    ],
    locations: ["Based on requirement"],
  },

  {
    category: "Category 18",
    title: "Marketing",
    eligibleDegrees: [
      "Bachelor / Master of Commerce (B.Com / M.Com) – Marketing Elective",
      "BA / MA in Mass Communication / Public Relations",
      "BSc / MSc in Marketing / Digital Marketing",
      "PG Diploma in Marketing / Advertising / Digital Communication",
      "Students pursuing certifications in Social Media Marketing, SEO, or Branding",
    ],
    objectives: [
      "Build awareness and visibility of elder care programs and services.",
      "Improve stakeholder engagement through strategic outreach.",
      "Support fundraising, and donor communication.",
      "Strengthen the brand image of the organization in the community and online.",
    ],
    responsibilities: [
      "Assist in creating marketing strategies for elder care initiatives and campaigns.",
      "Conduct market research and analysis to guide outreach.",
      "Support branding and promotional activities (online/offline).",
      "Help draft and edit newsletters, donor reports, and brochures.",
      "Assist in organizing and promoting events, workshops, and fundraising drives.",
      "Coordinate with design and media teams to ensure brand consistency.",
    ],
    locations: ["NMT - Head Office, Kasturi Nagar, Bengaluru"],
  },
];

const TESTIMONIALS = [
  {
    title: "Great learning experience...",
    text: `You step into NMT's Active Ageing and Dementia Day Care Centre and you find yourself in a better world. A world filled with love, compassion, innocence and care. The center is very organized, the staff are very kind and professional. In the active aging centre one gets to meet people with plethora of experience in life. People with dementia are taken care very well in the day care centre. The methods used in the sessions are scientifically proven. As an intern, it was a great learning experience in many aspects (both academics & life) and I am thankful for the same.`,
    name: "Manoj DA",
    role: "Was intern at the Active Ageing and Day Care Centre. From the MBA dept of the Christ Institute of Management",
  },
  {
    title: "A fresh outlook to life...",
    text: `I am extremely glad to have interned at a place that serves the aged and aims at enhancing their well-being. My experience at NMT gave me a new perspective and direction for my future. We had the fortune to interact with the residents one-on-one, be a part of their activities, consult experts, seek guidance from supervisors, conduct workshops and learn to take assessments and case histories. The best experience, however, was my bonding with the residents. NMT has helped me have a fresh outlook in my life; it has taught me to empathize with people, identify my strengths and weaknesses and has been a beautiful experience to cherish forever. I am more than happy to have been a part of NMT.`,
    name: "Pallavi Roy",
    role: "Was intern at the Nightingales Centre for Ageing and Alzheimer's",
  },
  {
    title: "Great place to Intern",
    text: `I am studying at the Ramaiah Institute of Business Studies. I did my Internship for 21 days at Nightingales Jobs 60+. The work I did here included finding jobs for senior citizens, giving them different opportunities in the job field and also helping in making videos for promotional activities. My experience here was great since we had a chance to help people looking for jobs and to see a smile on their faces. The staff were supportive and guided us during the internship and were also very friendly and kind. It was a new experience working here in this organization. Thank you Nightingale Empowerment Foundation.`,
    name: "Jithin Santhosh",
    role: "Joined Nightingales Jobs 60+ as intern for 3 weeks",
  },
  {
    title: "Changed my life...",
    text: `Though I had never been to Sandhya Surkasha before, I chose to do my internship here as it had a very positive reputation. Working at SS has changed my life on a personal and professional level. Taking care of these elders is not easy, but seeing the staff handle the challenging tasks efforlessly is truly motivating. Many of the elders have had traumatic experiences which are unimaginable, but the Centre gives them a comfortable and warm atmosphere and gives them a home, a sense of community and brings them so much joy. I hope to be able to contribute in the future as well.`,
    name: "Aftab Shabhnam",
    role: "Was intern at Nightingales Jobs 60+",
  },
];

function InternshipProfession() {
  const [showAll, setShowAll] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const visibleProfessions = showAll
    ? PROFESSIONS
    : PROFESSIONS.slice(0, 6);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
    );
  };

  const previousTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

  const testimonial = TESTIMONIALS[activeTestimonial];

  return (
    <SiteLayout>
      <div className="bg-[#FBF6EC]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#E15925]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <Reveal>
              <div className="max-w-4xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Internship Opportunities
                </p>

                <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Internship Based on Profession
                </h1>

                <div className="mt-6 h-1 w-16 bg-white" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROFESSION TABLE */}
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E15925]">
              Explore Opportunities
            </p>

            <h2 className="mt-3 font-display text-3xl font-extrabold text-[#E15925] sm:text-4xl">
              Internship Opportunities by Profession
            </h2>

            <div className="mt-4 h-1 w-12 bg-[#ED6439]" />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#E8DED0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="overflow-x-auto">
                <table className="min-w-[1100px] w-full border-collapse">
                  <thead>
                    <tr className="bg-[#17232B] text-left text-sm text-white">
                      <th className="w-[18%] px-5 py-5 font-bold">
                        Category
                      </th>
                      <th className="w-[42%] px-5 py-5 font-bold">
                        Details
                      </th>
                      <th className="w-[40%] px-5 py-5 font-bold">
                        Location / Notes
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {visibleProfessions.map((profession, index) => (
                      <tr
                        key={profession.category}
                        className={
                          index % 2 === 0
                            ? "bg-white"
                            : "bg-[#FFF8EE]"
                        }
                      >
                        <td className="border-t border-[#E8DED0] px-5 py-6 align-top">
                          <div className="font-display text-lg font-extrabold text-[#E15925]">
                            {profession.category}
                          </div>

                          <div className="mt-2 font-semibold leading-6 text-[#263746]">
                            {profession.title}
                          </div>
                        </td>

                        <td className="border-t border-[#E8DED0] px-5 py-6 align-top">
                          <div className="space-y-6">
                            {profession.eligibleDegrees &&
                              profession.eligibleDegrees.length > 0 && (
                                <div>
                                  <h4 className="font-bold text-[#17232B]">
                                    Eligible Degrees
                                  </h4>

                                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#526574]">
                                    {profession.eligibleDegrees.map(
                                      (item) => (
                                        <li key={item}>{item}</li>
                                      ),
                                    )}
                                  </ul>
                                </div>
                              )}

                            {profession.objectives &&
                              profession.objectives.length > 0 && (
                                <div>
                                  <h4 className="font-bold text-[#17232B]">
                                    Objectives
                                  </h4>

                                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#526574]">
                                    {profession.objectives.map((item) => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                            {profession.responsibilities &&
                              profession.responsibilities.length > 0 && (
                                <div>
                                  <h4 className="font-bold text-[#17232B]">
                                    Roles & Responsibilities
                                  </h4>

                                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#526574]">
                                    {profession.responsibilities.map(
                                      (item) => (
                                        <li key={item}>{item}</li>
                                      ),
                                    )}
                                  </ul>
                                </div>
                              )}
                          </div>
                        </td>

                        <td className="border-t border-[#E8DED0] px-5 py-6 align-top">
                          <div className="space-y-2 text-sm leading-6 text-[#526574]">
                            {profession.locations.map((location, locationIndex) => (
                              <div
                                key={`${profession.category}-${locationIndex}`}
                                className="flex gap-2"
                              >
                                <span className="shrink-0 font-bold text-[#E15925]">
                                  {locationIndex + 1}.
                                </span>
                                <span>{location}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* READ MORE / LESS */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full bg-[#E15925] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c94d1f] hover:shadow-lg"
            >
              {showAll ? (
                <>
                  Read Less
                  <ArrowUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Read More
                  <ArrowDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E15925]">
              Intern Experiences
            </p>

            <h2 className="mt-3 font-display text-2xl font-extrabold text-[#E15925] sm:text-4xl">
              What Our Interns Say
            </h2>

            <div className="mt-4 h-1 w-12 bg-[#ED6439]" />
          </Reveal>

          <div className="relative mt-8">
            <div className="mx-auto max-w-4xl">
              <article
                className={`flex min-h-[390px] flex-col rounded-3xl p-6 shadow-[0_14px_35px_rgba(0,0,0,0.10)] transition-all duration-300 sm:min-h-[350px] sm:p-9 lg:p-10 ${
                  activeTestimonial === 0
                    ? "border border-[#ED6439] bg-[#E15925] text-white"
                    : "border border-[#E8DED0] bg-white text-[#263746]"
                }`}
              >
                <h3
                  className={`font-display text-xl font-extrabold sm:text-2xl ${
                    activeTestimonial === 0
                      ? "text-white"
                      : "text-[#E15925]"
                  }`}
                >
                  {testimonial.title}
                </h3>

                <p
                  className={`mt-5 flex-1 text-sm leading-7 sm:text-base sm:leading-8 ${
                    activeTestimonial === 0
                      ? "text-white/90"
                      : "text-[#526574]"
                  }`}
                >
                  {testimonial.text}
                </p>

                <div
                  className={`mt-6 border-t pt-4 ${
                    activeTestimonial === 0
                      ? "border-white/20"
                      : "border-[#E8DED0]"
                  }`}
                >
                  <p
                    className={`font-bold ${
                      activeTestimonial === 0
                        ? "text-white"
                        : "text-[#17232B]"
                    }`}
                  >
                    {testimonial.name}
                  </p>

                  <p
                    className={`mt-1 text-sm leading-6 ${
                      activeTestimonial === 0
                        ? "text-white/75"
                        : "text-[#526574]"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </article>
            </div>

            {/* PREVIOUS */}
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={previousTestimonial}
              className="absolute left-0 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#E8DED0] bg-white text-[#E15925] shadow-md transition-all hover:bg-[#E15925] hover:text-white sm:h-11 sm:w-11"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* NEXT */}
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 grid h-10 w-10 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#E8DED0] bg-white text-[#E15925] shadow-md transition-all hover:bg-[#E15925] hover:text-white sm:h-11 sm:w-11"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* DOTS */}
            <div className="mt-6 flex justify-center gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? "w-8 bg-[#E15925]"
                      : "w-2.5 bg-[#E15925]/25 hover:bg-[#E15925]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#17232B]">
          <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                Start Your Journey
              </p>

              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Ready to begin your internship at one of NMT's projects?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                Fill up our application form...
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScgw-IiV3jbOUVHRS57reqYJDav8c0Jaw8WogWJ0l4s2eGt-Q/viewform"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#E15925] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ED6439] hover:shadow-xl"
              >
                Apply Now
              </a>
            </Reveal>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}