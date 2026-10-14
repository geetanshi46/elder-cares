import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Send,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";

const APPLY_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScgw-IiV3jbOUVHRS57reqYJDav8c0Jaw8WogWJ0l4s2eGt-Q/viewform";

type InternshipTable = {
  task: string;
  time: string;
};

type InternshipProject = {
  id: string;
  letter: string;
  title: string;
  description: string;
  eligibility: string;
  fee: string;
  vacancies?: string;
  address?: string;
  tasks: InternshipTable[];
};

const internshipProjects: InternshipProject[] = [
  {
    id: "kasturinagar",
    letter: "A",
    title:
      "Internship opportunities at Nightingales Centre for Ageing and Alzheimer's Kasturinagar",
    description:
      "Nightingales Centre for Ageing and Alzheimer's, Kasturinagar is a comprehensive care centre for elders suffering from Dementia and other disorders. The Centre provides residential care for 100 persons with dementia. A day care centre is also located on the premises.",
    eligibility:
      "Open to students of Psychology (BA, MA, MSc), Social Work, Physiotherapy, and Architecture",
    fee: "Rs 1,000.00",
    vacancies: "10",
    address:
      "No. 8P6, 3rd A Cross, East of NGEF layout, Kasturinagar, Banaswadi, Bangalore 560 043.",
    tasks: [
      {
        task: "Documenting Case Studies & Assessments",
        time: "10:00 am - 1:00 pm / 3:00 - 5:00 pm",
      },
      {
        task: "Assisting in Physical and Cognitive Activities, 1:1 Activities and CST",
        time: "10:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Board Games with Residents",
        time: "11:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Documentation – Updating files and records, filing, data entry",
        time: "10:00 am - 1:00 pm / 2:00 - 5:00 pm",
      },
      {
        task: "Individual / Group Activities",
        time: "10:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "De-stressing activities for st",
        time: "—",
      },
    ],
  },

  {
    id: "etcm-kolar",
    letter: "B",
    title:
      "Internship opportunities at Nightingales - ETCM Dementia Care Centre, Kolar",
    description:
      "Nightingales - ETCM Dementia Care Centre is a telemedicine-enabled residential care centre for elders suffering from Dementia and other disorders. The Centre provides care for 49 persons with dementia. Technology has been harnessed to reduce the cost of care.",
    eligibility:
      "Open to students of Psychology (BA, MA, MSc), Social Work, Nursing and Physiotherapy",
    fee: "Rs 1,000.00",
    vacancies: "10",
    address: "F Ward, ETCM Hospital, Bangarpet Road, Kolar 563 101.",
    tasks: [
      {
        task: "Documenting Case Studies & Assessments",
        time: "10:00 am - 1:00 pm / 2:00 - 5:00 pm",
      },
      {
        task: "Assisting in Physical and Cognitive Activities, 1:1 Activities and CST",
        time: "10:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Board Games with Residents",
        time: "11:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Documentation – Updating files and records, filing, data entry",
        time: "10:00 am - 1:00 pm / 2:00 - 5:00 pm",
      },
      {
        task: "Individual / Group Activities",
        time: "11:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "—",
      },
    ],
  },

  {
    id: "tanya-mathias",
    letter: "C",
    title:
      "Internship opportunities at Nightingales Trust - Tanya Mathias Elder Care Centre, Kothanur",
    description:
      "Nightingales Trust - Tanya Mathias Elder Care Centre is a telemedicine-enabled residential care centre for women with dementia and special needs. The Centre provides care for 25 women with dementia. Technology has been harnessed to reduce the cost of care.",
    eligibility:
      "Open to students of Psychology (BA, MA, MSc), Social Work, Nursing and Physiotherapy",
    fee: "Rs 1,000.00",
    vacancies: "5",
    address:
      "No 6, Sonam Layout, Doddagubbi Road, Near Nandini farm, Kothanur post, Bangalore 560 077.",
    tasks: [
      {
        task: "Documenting Case Studies & Assessments",
        time: "10:00 am - 2:00 pm / 3:00 - 5:00 pm",
      },
      {
        task: "Documentation – Updating files and records, filing, data entry",
        time: "10:00 am - 2:00 pm / 3:00 - 5:00 pm",
      },
      {
        task: "Assisting in Physical and Cognitive Activities, 1:1 Activities and Cognitive Stimulation Therapies",
        time: "10:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Board Games",
        time: "11:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Individual / Group Activities",
        time: "11:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Soft skill programs for Caregivers",
        time: "2:00 - 3:00 pm",
      },
      {
        task: "Preparing activity materials",
        time: "2:00 - 3:00 pm",
      },
      {
        task: "Helping feed residents at meal times",
        time: "Breakfast / Lunch / Snack / Dinner Times",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "—",
      },
    ],
  },

  {
    id: "jayanagar",
    letter: "D",
    title:
      "Internship opportunities at Nightingales Trust Day Care for Elderly and Dementia, Jayanagar",
    description:
      "This is a Day Care Centre for 50 Elderly and Persons with Dementia. This is also the hub for the Mobile Active Ageing Programme of South Bangalore and houses the studio for the Online Active Ageing Programme.",
    eligibility:
      "Open to students of Psychology (BA, MA, MSc), Social Work and Physiotherapy",
    fee: "Rs 1,000.00",
    vacancies: "6",
    address:
      "2nd Floor, No 190, Rashtriya Vidyalaya Rd, 2nd Block, Jayanagar, Bengaluru 560 004.",
    tasks: [
      {
        task: "Documenting Case Studies & Assessments",
        time: "10:00 am - 2:00 pm / 3:00 - 5:00 pm",
      },
      {
        task: "Conducting Cognitive and Physical Assessments",
        time: "10:00 am - 2:00 pm / 3:00 - 5:00 pm",
      },
      {
        task: "Assisting in Physical and Cognitive Activities, 1:1 Activities and CST for Day Care Members",
        time: "10:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Interacting with day care members, spending time with them and monitoring them",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Documenting Case Studies",
        time: "10:00 am - 2:00 pm / 3:00 - 5:00 pm",
      },
      {
        task: "Individual / Group Activities / Physiotherapy activities",
        time: "11:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "—",
      },
    ],
  },

  {
    id: "rt-nagar",
    letter: "E",
    title:
      "Internship opportunities at Nightingales Trust Dementia Day Care Centre, RT Nagar",
    description:
      "This is a Day Care Centre for Elderly and Persons with Dementia, providing respite from care for 25 persons with Dementia and their families.",
    eligibility:
      "Open to students of Psychology (BA, MA, MSc), Social Work and Physiotherapy",
    fee: "Rs 1,000.00",
    vacancies: "4",
    address: "No 337, 2nd Cross, 1st Block, RT Nagar, Bangalore 560 032.",
    tasks: [
      {
        task: "Conducting Cognitive and Physical Assessments",
        time: "10:00 am - 2:00 pm / 3:00 - 5:00 pm",
      },
      {
        task: "Help in making care plan, behavioural interventions",
        time: "10:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Interacting with day care members, spending time with them and monitoring them",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Updating files and records, filing, data entry",
        time: "10:00 am - 2:00 pm / 3:00 - 5:00 pm",
      },
      {
        task: "Individual / Group Activities / Physiotherapy activities",
        time: "11:00 am - 12:00 noon / 4:00 - 5:00 pm",
      },
      {
        task: "Decorations during festivals, events and celebrations",
        time: "During festivals, events & celebrations",
      },
      {
        task: "Help in conducting Dementia Awareness Programs",
        time: "10:00 am - 12:00 noon / 3:00 - 5:00 pm",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "—",
      },
    ],
  },

  {
    id: "sandhya-kirana",
    letter: "F",
    title:
      "Internship opportunities at Sandhya Kirana Home and Day Care Centre, Shanthinagar",
    description:
      "Nightingales Sandhya Kirana at Shanthinagar is a hub for programs among the marginalized elderly. There is a day care centre for 50 elderly from urban slums. There are also 2 hiriyaravadi centres with 25 daily attendees. NMT also runs a Home for 25 Destitute Elderly Men. There is a weekly free Geriatric Clinic at this location and our staff facilitate the outreach activities from here.",
    eligibility:
      "Open to students of Psychology (BA, MA, MSc), Social Work and Physiotherapy",
    fee: "Rs 1,000.00",
    vacancies: "4",
    address:
      "O Shangassey Road, Akkithimanahalli, Richmond Town, Bangalore 560 025.",
    tasks: [
      {
        task: "Interacting with day care members, spending time with them and monitoring them",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Spending time with elders making income-generation products like newspaper covers, candles, gift bags, etc.",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Helping in outreach activities, conducting of surveys",
        time: "11:00 am - 1:00 pm / 3:00 - 5:00 pm",
      },
      {
        task: "Assisting in outings, camps and awareness programs",
        time: "During such events",
      },
      {
        task: "Physiotherapy exercises and Yoga",
        time: "10:00 - 11:00 am / 4:00 - 5:00 pm",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "—",
      },
    ],
  },

  {
    id: "sandhya-suraksha",
    letter: "G",
    title:
      "Internship opportunities at Sandhya Suraksha Home for Destitute Elderly Women, Anepalya",
    description:
      "Sandhya Suraksha is a home for 100 homeless elderly women, rehabilitated from a life of loneliness on the streets.",
    eligibility:
      "Open to students of Psychology (BA, MA, MSc), Social Work and Physiotherapy",
    fee: "Rs 1,000.00",
    vacancies: "4",
    address:
      "No 53, 10th cross, Anepalya, Gajendranagar, Shanthinagar, Bangalore 560 030.",
    tasks: [
      {
        task: "Interacting with residents, spending time with them and monitoring them",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Spending time with elders with physical, cognitive and fun activities",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Conducting physiotherapy and Yoga sessions",
        time: "10:00 - 11:00 am / 4:00 - 5:00 pm",
      },
      {
        task: "Documentation – Updating files and records, filing, data entry",
        time: "2:00 - 4:00 pm",
      },
      {
        task: "Gardening and cleaning the premises",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Celebrating events and festivals",
        time: "During festivals / events",
      },
      {
        task: "Counselling residents and conducting health talks",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "—",
      },
    ],
  },

  {
    id: "jobs-60",
    letter: "H",
    title: "Internship opportunities at Nightingales Jobs 60+, RT Nagar",
    description:
      "Nightingales Jobs 60+ is a program offering Job facilitation for elderly job seekers post retirement. There is a free Online Job Portal for Elderly. The program also offers Skills training - Basic Computers, Advanced Computers and training in Digital Literacy and Cyber Safety for senior citizens.",
    eligibility:
      "Open to students of Social Work, Management, Arts and Commerce",
    fee: "Rs 1,000.00",
    vacancies: "2",
    address: "No 337, 2nd Cross, 1st Block, RT Nagar, Bangalore 560 032.",
    tasks: [
      {
        task: "Updating files and records, filing, data entry",
        time: "10:00 am - 1:00 pm / 2:00 - 5:00 pm",
      },
      {
        task: "Assisting during training programs, job fairs and events",
        time: "During Events",
      },
      {
        task: "Combing through job boards, linkedin, FB jobs and newspaper to identify jobs elderly can do",
        time: "10:00 am - 1:00 pm / 2:00 - 5:00 pm",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "—",
      },
    ],
  },

  {
    id: "elders-helpline",
    letter: "I",
    title: "Internship opportunities at Elders Helpline 1090",
    description:
      "The Elders Helpline 1090 propagates Nightingales Medical Trust’s vision of ensuring a life of dignity and security to all elders by combating harassment and abuse and since its inception it has handled over 2.5 Lakh calls.",
    eligibility: "Open to students of Social Work, Arts and Law",
    fee: "Rs 1,000.00",
    vacancies: "3",
    address:
      "Office of the Commissioner of Police, No. 1, Infantry Road, Bangalore 560001.",
    tasks: [
      {
        task: "Assisting in counselling of senior citizens",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Initial documentation of case history (Law students)",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "—",
      },
    ],
  },

  {
    id: "mobile-active-ageing",
    letter: "J",
    title: "Internship opportunities at our Mobile Active Ageing Program",
    description:
      "The Mobile Active Ageing Program helps improve the quality of life of residents at Old Age Homes in Bangalore by conducting the Active Ageing Program for the residents free of cost. There are two program wings - one in North Bangalore and one in South Bangalore.",
    eligibility:
      "Open to students of Psychology (BA, MA, MSc), Social Work and Physiotherapy",
    fee: "Rs 1,000.00",
    tasks: [
      {
        task: "Cognitive and Physical Assessments",
        time: "10:00 am - 1:00 pm / 2:00 - 5:00 pm",
      },
      {
        task: "Counselling and Physiotherapy Sessions",
        time: "10:00 am - 1:00 pm / 2:00 - 5:00 pm",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "—",
      },
    ],
  },

  {
    id: "head-office",
    letter: "K",
    title: "Internship opportunities at NMT Head Office at Kasturinagar",
    description:
      "The Head Office houses the Training, Accounts, HR, IT and Communications departments.",
    eligibility:
      "Open to students of Management, Communications, Journalism, IT and Commerce",
    fee: "Rs 1,000.00",
    address:
      "8P6, 3rd A Cross, Kasturinagar, Banaswadi, Bengaluru 560 043.",
    tasks: [
      {
        task: "Social media work – creating content and creatives",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Creating reels, videos and short clips of activities (local travel required)",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Marketing of our activities",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Website improvement – suggestions, coding and graphic design",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Content Writing for Newsletter and Brochures",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Helping with inventory checking and servicing of systems",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Documenting stories of human interest and testimonials from beneficiaries (local travel required)",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Databasing – Sorting out and verifying old contacts, follow up and reminders",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Creating Training Tools and Presentations",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Technology tools for training, MIS development",
        time: "—",
      },
    ],
  },

  {
    id: "dementia-india-alliance",
    letter: "L",
    title: "Internship opportunities at Dementia India Alliance",
    description:
      "Dementia India Alliance (DIA) is a non-profit family carer-centered national organization established under the Societies Act, with a primary focus on supporting family caregivers and fostering a dementia-inclusive society. DIA stands at the forefront of the fight against dementia, aiming to improve the overall well-being of affected individuals through compassionate care and support. Nightingales Medical Trust is one of the founding members of DIA.",
    eligibility:
      "Open to students of Psychology, Social Work, Communications, Journalism and Commerce",
    fee: "Rs 1,000.00",
    address:
      "8P6, 3rd A Cross, Kasturinagar, Banaswadi, Bengaluru 560 043.",
    tasks: [
      {
        task: "Databasing – Creating and cleaning database of service providers",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Database of educational institutions for DemChamps Program",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Creating a list of clinicians for Demclinic",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Identifying and sending emails to institutions engaged in age care for membership or affiliates",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Sending promotional and engagement mailers",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Creating Newsletters, brochure and handouts",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Helping with videos for training and social media",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Engaging members who have agreed to help",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Helping in weekly support groups and awareness sessions",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Creating content for LinkedIn, Twitter, Instagram, Facebook and other social media platforms",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Research and analysis of existing data",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Preparing Presentations for various forums with infographics",
        time: "10:00 am - 5:00 pm",
      },
      {
        task: "Any other task(s) assigned by the Trust as per the need",
        time: "—",
      },
    ],
  },
];

const internshipNav = [
  { id: "internship-benefits", label: "Why Intern at NMT?" },
  { id: "internship-information", label: "Internship Information" },
  ...internshipProjects.map((project) => ({
    id: project.id,
    label: `${project.letter}. ${project.title.replace(
      "Internship opportunities at ",
      "",
    )}`,
  })),
  { id: "testimonials", label: "Testimonials" },
  { id: "apply", label: "Apply Now" },
];

function InternshipProject({
  project,
}: {
  project: InternshipProject;
}) {
  return (
    <section id={project.id} className="scroll-mt-24">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
          <div className="border-b border-border bg-[#FFF8EE] p-6 sm:p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ED6439] font-display text-lg font-extrabold text-white">
                {project.letter}
              </span>

              <div>
                <h2 className="font-display text-2xl font-extrabold leading-tight text-[#E15925] sm:text-3xl">
                  {project.title}
                </h2>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-[#526574] sm:text-base sm:leading-8">
              {project.description}
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-white p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ED6439]">
                  <GraduationCap className="h-4 w-4" />
                  Open to
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#526574]">
                  {project.eligibility}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ED6439]">
                  <BriefcaseBusiness className="h-4 w-4" />
                  Internship Fee
                </div>
                <p className="mt-2 text-sm font-semibold text-[#263746]">
                  {project.fee}
                </p>
              </div>

              {project.vacancies && (
                <div className="rounded-2xl border border-border bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ED6439]">
                    <CheckCircle2 className="h-4 w-4" />
                    Vacancies
                  </div>
                  <p className="mt-2 text-sm font-semibold text-[#263746]">
                    {project.vacancies}
                  </p>
                </div>
              )}

              {project.address && (
                <div className="rounded-2xl border border-border bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ED6439]">
                    <MapPin className="h-4 w-4" />
                    Address
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#526574]">
                    {project.address}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-8">
            <div className="mb-5">
              <h3 className="font-display text-xl font-extrabold text-[#E15925] sm:text-2xl">
                Internship Tasks
              </h3>
              <div className="mt-3 h-1 w-12 bg-[#ED6439]" />
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#17232B] text-white">
                    <th className="w-20 px-4 py-4 text-xs font-bold uppercase tracking-[0.12em]">
                      Sl.No
                    </th>
                    <th className="px-4 py-4 text-xs font-bold uppercase tracking-[0.12em]">
                      Internship Tasks
                    </th>
                    <th className="w-[280px] px-4 py-4 text-xs font-bold uppercase tracking-[0.12em]">
                      Suitable Time
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {project.tasks.map((task, index) => (
                    <tr
                      key={`${project.id}-${index}`}
                      className="border-t border-border transition-colors hover:bg-[#17232B] hover:text-white"
                    >
                      <td className="px-4 py-4 text-sm font-bold text-[#ED6439]">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4 text-sm leading-relaxed">
                        {task.task}
                      </td>
                      <td className="px-4 py-4 text-sm leading-relaxed">
                        <span className="inline-flex items-start gap-2">
                          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#ED6439]" />
                          {task.time}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function InternshipProjects() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
  return (
    <SiteLayout>
      <div className="w-full bg-[#FBF6EC] text-[#263746]">
        {/* ======================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#E15925]">
          <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:min-h-[340px] lg:px-10">
            <Reveal>
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="mt-1 h-20 w-1 shrink-0 rounded-full bg-white sm:h-24" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
                    Get Involved • Internship
                  </p>

                  <h1 className="mt-3 max-w-5xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Internship Based on Projects
                  </h1>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ======================================================
            APPLY CTA — IMMEDIATELY AFTER HERO
        ====================================================== */}
        <section className="bg-[#FFF8EE] px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#17232B] p-6 text-white shadow-soft sm:flex-row sm:items-center sm:p-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ED6439]">
                    Internship Application
                  </p>
                  <h2 className="mt-2 font-display text-xl font-extrabold sm:text-2xl">
                    Ready to apply for an internship?
                  </h2>
                </div>

                <a
                  href={APPLY_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#ED6439] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d95730]"
                >
                  Click Here to Apply Now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ======================================================
            QUICK NAVIGATION
        ====================================================== */}
        <section className="sticky top-0 z-30 border-b border-border bg-[#FFF8EE]/95 shadow-xs backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-3 sm:px-6">
            <span className="hidden shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-[#ED6439] md:block">
              Quick Jump:
            </span>

            <div className="flex items-center gap-2">
              {internshipNav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex shrink-0 items-center rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-bold text-[#E15925] shadow-2xs transition-all hover:border-[#ED6439] hover:bg-[#ED6439] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            INTRO / BENEFITS
        ====================================================== */}
        <main className="bg-[#FFFDF9]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <div className="space-y-16 sm:space-y-24">
              <section id="internship-benefits" className="scroll-mt-24">
                <Reveal>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E15925]">
                    The internship at NMT will
                  </p>

                  <h2 className="mt-3 font-display text-2xl font-extrabold text-[#E15925] sm:text-4xl">
                    What You Will Gain
                  </h2>

                  <div className="mt-4 h-1 w-12 bg-[#ED6439]" />
                </Reveal>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {[
                    "Provide an opportunity for students to put into practice and deepen their knowledge of issues related to aged care and dementia care",
                    "Provide a platform to develop a more grounded understanding of dementia and age care in an Indian context",
                    "Provide exposure for interns to take action for the rights of senior citizens in their daily lives",
                    "Enable them to transform into committed volunteers for dementia and age care after the internship program",
                  ].map((item, index) => (
                    <Reveal key={item} delay={index * 70} className="h-full">
                      <div className="flex h-full gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#ED6439]/40 hover:shadow-md">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ED6439] text-sm font-bold text-white">
                          {index + 1}
                        </span>

                        <p className="text-sm leading-7 text-[#526574] sm:text-base">
                          {item}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>

              {/* ======================================================
                  INTERNSHIP INFORMATION
              ====================================================== */}
              <section id="internship-information" className="scroll-mt-24">
                <Reveal>
                  <div className="rounded-3xl border border-[#ED6439]/15 bg-[#FFF8EE] p-6 sm:p-8 lg:p-10">
                    <h2 className="font-display text-2xl font-extrabold text-[#E15925] sm:text-3xl">
                      Internship Information
                    </h2>

                    <div className="mt-5 space-y-5 text-sm leading-7 text-[#526574] sm:text-base sm:leading-8">
                      <p>
                        Internship programs are designed to offer exposure to
                        students and working professionals from varied academic
                        and professional backgrounds. The internship depends on
                        both the interest and skill areas of the individuals as
                        well as requirements of NMT.
                      </p>

                      <p className="font-semibold text-[#E15925]">
                        This is an intensive engagement and no stipend is
                        offered. Incidental costs pertaining to the assignment
                        may be covered.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </section>

              {/* ======================================================
                  A-L PROJECTS
              ====================================================== */}
              <div className="space-y-12 sm:space-y-16">
                {internshipProjects.map((project) => (
                  <InternshipProject
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>

              {/* ======================================================
    TESTIMONIALS
====================================================== */}
<section id="testimonials" className="scroll-mt-24">
  <Reveal>
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E15925]">
      Intern Experiences
    </p>

    <h2 className="mt-3 font-display text-2xl font-extrabold text-[#E15925] sm:text-4xl">
      What Our Interns Say
    </h2>

    <div className="mt-4 h-1 w-12 bg-[#ED6439]" />
  </Reveal>

  {/* TESTIMONIAL CAROUSEL */}
  <div className="relative mt-8">
    <div className="overflow-hidden">
      <div className="mx-auto max-w-4xl">
        {activeTestimonial === 0 && (
          <Reveal>
            <article className="flex min-h-[380px] flex-col rounded-3xl border border-[#ED6439] bg-[#E15925] p-6 text-white shadow-[0_14px_35px_rgba(225,89,37,0.18)] sm:min-h-[340px] sm:p-9 lg:p-10">
              <h3 className="font-display text-xl font-extrabold sm:text-2xl">
                A fresh outlook to life...
              </h3>

              <p className="mt-5 flex-1 text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                I am extremely glad to have interned at a place that serves the
                aged and aims at enhancing their well-being. My experience at
                NMT gave me a new perspective and direction for my future. We
                had the fortune to interact with the residents one-on-one, be a
                part of their activities, consult experts, seek guidance from
                supervisors, conduct workshops and learn to take assessments and
                case histories. The best experience, however, was my bonding
                with the residents. NMT has helped me have a fresh outlook in my
                life; it has taught me to empathize with people, identify my
                strengths and weaknesses and has been a beautiful experience to
                cherish forever. I am more than happy to have been a part of
                NMT.
              </p>

              <div className="mt-6 border-t border-white/20 pt-4">
                <p className="font-bold">Pallavi Roy</p>
              </div>
            </article>
          </Reveal>
        )}

        {activeTestimonial === 1 && (
          <Reveal>
            <article className="flex min-h-[380px] flex-col rounded-3xl border border-[#E8DED0] bg-white p-6 shadow-[0_14px_35px_rgba(0,0,0,0.10)] sm:min-h-[340px] sm:p-9 lg:p-10">
              <h3 className="font-display text-xl font-extrabold text-[#E15925] sm:text-2xl">
                Changed my life...
              </h3>

              <p className="mt-5 flex-1 text-sm leading-7 text-[#526574] sm:text-base sm:leading-8">
                Though I had never been to Sandhya Surkasha before, I chose to
                do my internship here as it had a very positive reputation.
                Working at SS has changed my life on a personal and professional
                level. Taking care of these elders is not easy, but seeing the
                staff handle the challenging tasks efforlessly is truly
                motivating. Many of the elders have had traumatic experiences
                which are unimaginable, but the Centre gives them a comfortable
                and warm atmosphere and gives them a home, a sense of community
                and brings them so much joy. I hope to be able to contribute in
                the future as well.
              </p>

              <div className="mt-6 border-t border-[#E8DED0] pt-4">
                <p className="font-bold text-[#263746]">Aftab Shabhnam</p>
                <p className="mt-1 text-xs text-[#526574]">
                  Was intern at Nightingales Jobs 60+
                </p>
              </div>
            </article>
          </Reveal>
        )}

        {activeTestimonial === 2 && (
          <Reveal>
            <article className="flex min-h-[380px] flex-col rounded-3xl border border-[#E8DED0] bg-white p-6 shadow-[0_14px_35px_rgba(0,0,0,0.10)] sm:min-h-[340px] sm:p-9 lg:p-10">
              <h3 className="font-display text-xl font-extrabold text-[#E15925] sm:text-2xl">
                Great place to Intern
              </h3>

              <p className="mt-5 flex-1 text-sm leading-7 text-[#526574] sm:text-base sm:leading-8">
                I am studying at the Ramaiah Institute of Business Studies. I
                did my Internship for 21 days at Nightingales Jobs 60+. The work
                I did here included finding jobs for senior citizens, giving
                them different opportunities in the job field and also helping
                in making videos for promotional activities. My experience here
                was great since we had a chance to help people looking for jobs
                and to see a smile on their faces. The staff were supportive and
                guided us during the internship and were also very friendly and
                kind. It was a new experience working here in this organization.
                Thank you Nightingale Empowerment Foundation.
              </p>

              <div className="mt-6 border-t border-[#E8DED0] pt-4">
                <p className="font-bold text-[#263746]">Jithin Santhosh</p>
                <p className="mt-1 text-xs text-[#526574]">
                  Joined Nightingales Jobs 60+ as intern for 3 weeks
                </p>
              </div>
            </article>
          </Reveal>
        )}

        {activeTestimonial === 3 && (
          <Reveal>
            <article className="flex min-h-[380px] flex-col rounded-3xl border border-[#E8DED0] bg-white p-6 shadow-[0_14px_35px_rgba(0,0,0,0.10)] sm:min-h-[340px] sm:p-9 lg:p-10">
              <h3 className="font-display text-xl font-extrabold text-[#E15925] sm:text-2xl">
                Great learning experience...
              </h3>

              <p className="mt-5 flex-1 text-sm leading-7 text-[#526574] sm:text-base sm:leading-8">
                You step into NMT&apos;s Active Ageing and Dementia Day Care
                Centre and you find yourself in a better world. A world filled
                with love, compassion, innocence and care. The center is very
                organized, the staff are very kind and professional. In the
                active aging centre one gets to meet people with plethora of
                experience in life. People with dementia are taken care very
                well in the day care centre. The methods used in the sessions
                are scientifically proven. As an intern, it was a great learning
                experience in many aspects (both academics & life) and I am
                thankful for the same.
              </p>

              <div className="mt-6 border-t border-[#E8DED0] pt-4">
                <p className="font-bold text-[#263746]">Manoj DA</p>
                <p className="mt-1 text-xs text-[#526574]">
                  Was intern at the Active Ageing and Day Care Centre. From the
                  MBA dept of the Christ Institute of Management
                </p>
              </div>
            </article>
          </Reveal>
        )}
      </div>
    </div>

    {/* ARROWS */}
    <button
      type="button"
      aria-label="Previous testimonial"
      onClick={() =>
        setActiveTestimonial((prev) =>
          prev === 0 ? 3 : prev - 1,
        )
      }
      className="absolute left-0 top-1/2 grid h-10 w-10 -translate-y-1/2 -translate-x-1/2 place-items-center rounded-full border border-border bg-white text-[#E15925] shadow-md transition-all hover:bg-[#E15925] hover:text-white sm:h-11 sm:w-11"
    >
      ←
    </button>

    <button
      type="button"
      aria-label="Next testimonial"
      onClick={() =>
        setActiveTestimonial((prev) =>
          prev === 3 ? 0 : prev + 1,
        )
      }
      className="absolute right-0 top-1/2 grid h-10 w-10 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-border bg-white text-[#E15925] shadow-md transition-all hover:bg-[#E15925] hover:text-white sm:h-11 sm:w-11"
    >
      →
    </button>

    {/* DOTS */}
    <div className="mt-6 flex justify-center gap-2">
      {[0, 1, 2, 3].map((index) => (
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

              {/* ======================================================
                  FINAL CTA
              ====================================================== */}
              <section id="apply" className="scroll-mt-24">
                <Reveal>
                  <div className="rounded-3xl bg-[#E15925] p-7 text-white shadow-xl sm:p-10 lg:p-12">
                    <div className="mx-auto max-w-3xl text-center">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                        Internship Application
                      </p>

                      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                        Ready to begin your internship at one of NMT&apos;s
                        projects?
                      </h2>

                      <p className="mt-4 text-sm text-white/85 sm:text-base">
                        Fill up our application form...
                      </p>

                      <a
                        href={APPLY_FORM}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#17232B] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243643]"
                      >
                        <Send className="h-4 w-4" />
                        Fill the Form
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </section>
            </div>
          </div>
        </main>
      </div>
    </SiteLayout>
  );
}

export const Route = createFileRoute("/internship-projects")({
  component: InternshipProjects,
});