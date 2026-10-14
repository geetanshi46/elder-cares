import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ExternalLink,
  HeartHandshake,
  ShieldCheck,
  Clock3,
  Award,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SiteLayout } from "@/components/site/SiteLayout";
import individualVolunteeringImage from "@/assets/individual-volunteering.jpg";


const volunteeringOpportunities = [
  {
    project: "Awareness and Advocacy Programs and Events",
    address: "—",
    opportunities: `Volunteering at public awareness programmes:
• Elder Abuse Awareness Day - 15th June
• World Alzheimer’s Day – 21st Sept
• Job Fairs for elders
• Conferences and Workshops
• Awareness programmes for age care and dementia care
• Facilitating Dementia Friends Programs
• Creating posters, promotional photography and videography
• Assisting in health camps and memory screening`,
  },
  {
    project: `Elders Helpline 1090 – Basaveshwaranagar

Helpline services for elders in distress
Counselling for elderly`,
    address: `First Floor of Basaveshwara Nagar Police Station, 1st Cross, West of Chord Road, 1st Stage,
Basaveshwara Nagar,
Bengaluru 560 079`,
    opportunities: `• Assisting in receiving calls and visitors and providing relevant information
• Data entry of calls and other data
• Organizing awareness programs about Elder abuse and rights of elderly
• Assisting in registering of complaints received
• Translating case notes from Kannada to English`,
  },
  {
    project: `ETCM – Nightingales Dementia Care Centre

Residential care centre for elderly and Persons with Dementia`,
    address: `F Ward, ETCM Hospital,
Bangarpet Road,
Kolar 563 101`,
    opportunities: `• Monitoring residents and spending time with them
• Organising therapeutic activities
• Arranging cultural and music sessions and other enriching activities for residents and care staff
• Updation and analysis of patient records
• Support in the beautification of the centre`,
  },
  {
    project: `National Helpline for Senior Citizens
(Elderline) 14567`,
    address: `No 337, 2nd Cross,
1st Block, RT Nagar,
Bangalore 560 032`,
    opportunities: `• Assisting in registering complaints
• Organizing awareness programs about Elder abuse and rights of elderly
• Translating case notes from Kannada to English
• Team-building and stress-relief sessions for staff
• Data entry and updation of data`,
  },
  {
    project: `Nightingales Centre for Ageing and Alzheimer’s - Kasturinagar

A comprehensive care centre for elders suffering from Dementia and other disorders.`,
    address: `No. 8P6, 3rd A Cross,
East of NGEF layout, Kasturinagar, Banaswadi,
Bangalore 560 043`,
    opportunities: `Interacting with residents, spending time with them and monitoring them
Documentation – Updating files and records, filing, data entry
Tailoring and repairing torn clothes and sheets, helping in stitching tags to residents' belongings
folding clothes, bed linen and curtains
Arrangement and cleaning of wardrobes
Organizing therapeutic activities like pet therapy, music therapy, doll therapy and art activities
Organizing indoor and outdoor activities under guidance
De-stressing activities for staff
Arranging cultural and musical sessions for residents and care staff
Helping in repairs and maintenance of facilities`,
  },
  {
    project: `Nightingales Day Care for Elderly and Dementia - Jayanagar

Day Care Centre for Elderly
Mobile Active Ageing Programme - South Bangalore
Online Active Ageing Programme`,
    address: `2nd Floor, No 190,
Rashtriya Vidyalaya Rd, 2nd Block, Jayanagar,
Bengaluru 560 004`,
    opportunities: `• Assisting in physical, cognitive and socialization activities
• Organizing therapeutic activities for elders with Dementia
• Helping to organize beneficial sessions for elders and promoting day care
• Assisting in Mobile Active Ageing programme at old age homes
• Updation and analysis of patient files
• Organizing art, craft and music sessions for seniors
• Support in beautifying the centre
• Planning a fun day out for day care members under supervision`,
  },
  {
    project: `Nightingales Jobs 60+

Job facilitation centre for elders
Free Online Job Portal for Elderly
Skills training - Basic Computers, Advanced Computers and Use of Smartphones`,
    address: `No 337, 2nd Cross,
1st Block, RT Nagar,
Bangalore 560 032`,
    opportunities: `• Digital literacy training for elders to prepare them for post-retirement employment
• Assisting in Job fairs and Employment camps conducted periodically
• Reaching out to prospective Employers who are willing to provide jobs for seniors
• Data management
• Social media promotions`,
  },
  {
    project: `Nightingales Sandhya Kirana - Shanthinagar

Day care centre for marginalized elders
Home for Destitute Elderly Men
Outreach Program
Free Geriatric Clinic`,
    address: `O Shangassey Road, Akkithimanahalli, Richmond Town,
Bangalore 560 025`,
    opportunities: `• Spending time with elders making income-generation products like newspaper covers, candles, gift bags, etc.
• Exploring marketing options for sale of products made by elders
• Organizing a fun day for the elders - games, sports, etc.
• Organizing outings for elders to movies or picnic spots
• Conducting recreational activities, health talks and Yoga sessions
• Teaching to make new income generation products
• Beautification of the premises`,
  },
  {
    project: `Nightingales Trust Dementia Day Care Centre - RT Nagar
Day Care Centre for Elderly and Persons with Dementia`,
    address: `No 337, 2nd Cross,
1st Block, RT Nagar,
Bangalore 560 032`,
    opportunities: `• Organising therapeutic and Cognitive activities for elders
• Organising art, craft and music sessions for seniors
• Planning a fun a day out under the guidance of staff
• Support in beautification of the centre
• Updation and analysis of patient files`,
  },
  {
    project: `Nightingales Trust Tanya Mathias Mathias Eldercare Centre - Kothanur
Care Centre for elderly women with dementia and special needs`,
    address: `No 6, Sonam Layout,
Doddagubbi Rd,
Near Nandini farm,
Kothanur post,
Bangalore 560 077`,
    opportunities: `• Monitoring residents and spending time with persons with Dementia
• Organising therapeutic activities such as pet therapy, doll therapy and art activites
• Updating files and records
• Organising indoor and outdoor activities under guidance
• Arranging cultural and music sessions for residents and care staff
• Assisting in other enriching activities
• Support in the beautification of the premises through gardening, etc.`,
  },
  {
    project: `Sandhya Suraksha
Home for destitute elderly women`,
    address: `No 53, 10th cross,
Anepalya, Gajendranagar,
Shanthinagar,
Bangalore 560 030`,
    opportunities: `• Spending time with elders and organizing fun activities for elders
• Teaching hands-on skills which can help keep them engaged
• Counselling residents and conducting health talks
• Organizing outings for elders to movies or picnic spots`,
  },
  {
    project: `Skill-based Internship`,
    address: `No. 8P6, 3rd A Cross,
East of NGEF layout,
Kasturinagar, Banaswadi,
Bangalore 560 043`,
    opportunities: `• Developing communication material and collaterals for social media
• Translation of communication material into local languages
• Helping in data collection and compilation for research studies
• Photography of Trust activities
• Making short video films of our activities
• Organizing and taking sessions in training programmes on age care, dementia care, first aid (honorarium based)
• Resource mobilization`,
  },
  {
    project: `Training & Research`,
    address: `No. 8P6, 3rd A Cross,
East of NGEF layout,
Kasturinagar, Banaswadi,
Bangalore 560 043`,
    opportunities: `• Data collection, entry and creating a registry
• Analysis and writing up research notes
• Research literature search and write up
• Assisting in profiling and database management
• Designing and implementing small scale surveys
• Content creation`,
  },
];

const faqs = [
  {
    question: "How do I become a Volunteer?",
    answer:
      "All that is required is your interest in serving Senior Citizens. You can volunteer at various levels based on your interest and areas of expertise. To volunteer, contact us at the details given below.",
  },
  {
    question: "What is the commitment required",
    answer:
      "All that we need from our volunteers is their time, love and compassion for elders and a minimum of 2 hours every week.",
  },
  {
    question: "What do I get?",
    answer:
      "A certificate of appreciation is presented to the volunteer on completion of the hours promised. Volunteers are also recognised during annual events of the Trust. Along with these we guarantee you satisfaction of body, mind & soul and a lot of life lessons.",
  },
];

export default function Individual() {
  const [showFullTable, setShowFullTable] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const visibleOpportunities = showFullTable
    ? volunteeringOpportunities
    : volunteeringOpportunities.slice(0, 3);

  return (
     <SiteLayout>
    <main className="w-full bg-[#FBF6EC] text-[#263746]">
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="relative w-full overflow-hidden bg-[#E15925]">
        <div className="flex min-h-[220px] items-center justify-center px-5 py-12 sm:min-h-[250px] sm:px-8 sm:py-14 lg:min-h-[290px]">
          <Reveal>
            <h1 className="max-w-5xl text-center font-display text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
              VOLUNTEERING: INDIVIDUALS / SMALL GROUPS
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          WHY VOLUNTEER
      ================================================== */}
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <Reveal>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
              Why Volunteer at NMT?
            </span>

            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-[#263746] sm:text-4xl">
              Why Volunteer at NMT?
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {/* 01 */}
          <Reveal className="h-full">
            <article className="group flex h-full flex-col border border-[#E8DED0] bg-white p-6 shadow-[0_14px_35px_rgba(23,35,43,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ED6439]/40 hover:shadow-[0_20px_45px_rgba(23,35,43,0.11)] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-black text-[#ED6439]/30">
                  01.
                </span>

                <ShieldCheck className="h-6 w-6 text-[#ED6439]" strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 font-display text-xl font-extrabold leading-tight text-[#263746]">
                We are <span className="text-[#E15925]">Dependable:</span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#526574] sm:text-[15px]">
                We are a well-established NGO working in the field of aged care
                since 1998. Our programmes are well monitored and our
                stakeholders – the elderly directly benefiting from our
                services - are an integral part of our monitoring team,
                ensuring that our services meet their needs.
              </p>
            </article>
          </Reveal>

          {/* 02 */}
          <Reveal className="h-full" delay={80}>
            <article className="group flex h-full flex-col border border-[#E8DED0] bg-white p-6 shadow-[0_14px_35px_rgba(23,35,43,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ED6439]/40 hover:shadow-[0_20px_45px_rgba(23,35,43,0.11)] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-black text-[#ED6439]/30">
                  02.
                </span>

                <HeartHandshake className="h-6 w-6 text-[#ED6439]" strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 font-display text-xl font-extrabold leading-tight text-[#263746]">
                We <span className="text-[#E15925]">Appreciate</span> your
                association:
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#526574] sm:text-[15px]">
                Volunteers are duly acknowledged and appreciated.
              </p>
            </article>
          </Reveal>

          {/* 03 */}
          <Reveal className="h-full" delay={160}>
            <article className="group flex h-full flex-col border border-[#E8DED0] bg-white p-6 shadow-[0_14px_35px_rgba(23,35,43,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ED6439]/40 hover:shadow-[0_20px_45px_rgba(23,35,43,0.11)] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-black text-[#ED6439]/30">
                  03.
                </span>

                <Award className="h-6 w-6 text-[#ED6439]" strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 font-display text-xl font-extrabold leading-tight text-[#263746]">
                We are <span className="text-[#E15925]">Authorised:</span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#526574] sm:text-[15px]">
                We are covered under the amendments made to Schedule VII of the
                Companies Act 2013 vide notification dated Feb 27th 2014. We
                have all government permissions and documents.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ==================================================
          VOLUNTEERING OPPORTUNITIES
      ================================================== */}
      <section className="w-full bg-[#F4EBDD]">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                  Get involved
                </span>

                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-[#263746] sm:text-4xl">
                  Volunteering Opportunities
                </h2>
              </div>

              {/* <p className="max-w-md text-sm leading-relaxed text-[#526574]">
                Explore the different ways you can contribute your time,
                skills and compassion.
              </p> */}
            </div>
          </Reveal>

          {/* Desktop Table */}
          <div className="hidden overflow-hidden border border-[#E15925]/25 bg-white shadow-[0_18px_45px_rgba(23,35,43,0.08)] md:block">
            <div className="grid grid-cols-[1.05fr_0.85fr_1.35fr] bg-[#17232B] text-white">
              <div className="px-5 py-4 text-sm font-extrabold uppercase tracking-[0.08em]">
                Project
              </div>
              <div className="px-5 py-4 text-sm font-extrabold uppercase tracking-[0.08em]">
                Address
              </div>
              <div className="px-5 py-4 text-sm font-extrabold uppercase tracking-[0.08em]">
                Opportunities
              </div>
            </div>

            <div>
              {visibleOpportunities.map((item, index) => (
                <Reveal key={`${item.project}-${index}`} delay={(index % 3) * 40}>
                  <div className="group grid grid-cols-[1.05fr_0.85fr_1.35fr] border-t border-[#E8DED0] bg-white transition-colors duration-300 hover:bg-[#17232B]">
                    <div className="px-5 py-5">
                      <p className="whitespace-pre-line text-sm font-extrabold leading-relaxed text-[#E15925] transition-colors duration-300 group-hover:text-white">
                        {item.project}
                      </p>
                    </div>

                    <div className="px-5 py-5">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-[#526574] transition-colors duration-300 group-hover:text-white/85">
                        {item.address}
                      </p>
                    </div>

                    <div className="px-5 py-5">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-[#526574] transition-colors duration-300 group-hover:text-white/85">
                        {item.opportunities}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-4 md:hidden">
            {visibleOpportunities.map((item, index) => (
              <Reveal key={`${item.project}-mobile-${index}`}>
                <article className="group border border-[#E8DED0] bg-white p-5 shadow-[0_12px_30px_rgba(23,35,43,0.06)] transition-colors duration-300 hover:bg-[#17232B]">
                  <h3 className="whitespace-pre-line font-display text-base font-extrabold leading-relaxed text-[#E15925] group-hover:text-white">
                    {item.project}
                  </h3>

                  <div className="mt-5">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ED6439] group-hover:text-[#ED6439]">
                      Address
                    </p>

                    <p className="whitespace-pre-line text-sm leading-relaxed text-[#526574] group-hover:text-white/85">
                      {item.address}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ED6439]">
                      Opportunities
                    </p>

                    <p className="whitespace-pre-line text-sm leading-relaxed text-[#526574] group-hover:text-white/85">
                      {item.opportunities}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* View Full Table */}
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() => setShowFullTable((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#E15925] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(225,89,37,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C94B1E] hover:shadow-[0_14px_30px_rgba(225,89,37,0.28)]"
            >
              {showFullTable ? "Show Less" : "View Full Table"}

              {showFullTable ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          FAQ
      ================================================== */}
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* FAQ */}
          <Reveal>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                Frequently asked questions
              </span>

              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-[#263746] sm:text-4xl">
                Volunteering FAQs
              </h2>

              <div className="mt-7 space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className={`overflow-hidden border transition-all duration-300 ${
                        isOpen
                          ? "border-[#ED6439]/40 bg-white shadow-[0_12px_30px_rgba(23,35,43,0.07)]"
                          : "border-[#E8DED0] bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-sm font-extrabold text-[#263746] sm:text-base">
                          {faq.question}
                        </span>

                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 shrink-0 text-[#ED6439]" />
                        ) : (
                          <ChevronDown className="h-5 w-5 shrink-0 text-[#526574]" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="border-t border-[#E8DED0] px-5 pb-5 pt-4 sm:px-6">
                          <p className="text-sm leading-relaxed text-[#526574] sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Image Space Reserved */}
          <Reveal delay={120} className="hidden lg:block">
  <div className="h-full min-h-[420px] overflow-hidden rounded-2xl">
    <img
      src={individualVolunteeringImage}
      alt="Individual volunteering with elders"
      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
    />
  </div>
</Reveal>
        </div>
      </section>

      {/* ==================================================
          TESTIMONIALS
      ================================================== */}
      <section className="w-full bg-[#17232B]">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                Volunteer voices
              </span>

              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                Fulfilling Experience
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* Testimonial 1 */}
            <Reveal className="h-full">
              <article className="flex h-full flex-col border border-[#E15925] bg-[#E15925] p-6 shadow-[0_14px_35px_rgba(225,89,37,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(225,89,37,0.25)] sm:p-8">
                <div className="mb-5 text-4xl font-serif leading-none text-white">
                  “
                </div>

                <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                  Fulfilling Experience
                </h3>

                <br />

                <p className="flex-1 text-sm leading-relaxed text-white/80 sm:text-base">
                  NMT invited me to volunteer at their Malleswaram Elders
                  Enrichment Centre when it was set up in 1999. The enrichment
                  centre concept was new and so was the emphasis on attracting
                  volunteers. NMT has always been ahead of its time, identifying
                  emerging needs in eldercare, especially in the economically
                  weaker sections, designing and implementing solutions. These
                  go on to become models for emulation thanks to NMT's exemplary
                  social commitment, innovative spirit and high standards of
                  integrity. My association with NMT gives me hope that we can
                  become a truly empathetic and compassionate society.
                </p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-display font-extrabold text-white">
                    Kala Sundar
                  </p>
                  <p className="mt-1 text-sm text-white/55">
                    Regular volunteer at NMT
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Testimonial 2 */}
            <Reveal className="h-full" delay={100}>
              <article className="flex h-full flex-col border border-[#E8DED0] bg-white p-6 shadow-[0_14px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)] sm:p-8">
                <div className="mb-5 text-4xl font-serif leading-none text-[#E15925]">
  “
</div>

                <h3 className="font-display text-xl font-extrabold text-[#263746] sm:text-2xl">
  A warm home for elders...
</h3>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-[#526574] sm:text-base">
                  I have been visitng Sandhya Suraksha over the last few months
                  and I find myself coming back regularly. The residents, all
                  of who come extremely disturbed backgrounds, are very well
                  cared for by the dedicated staff. From medical attention to
                  emotional support, from recuperation to rehabilitation, no
                  stone is left unturned to ensure the highest standard of
                  attention and care to each and every individual. The staff go
                  beyond 'just another job' to really looking after the
                  residents as family. Despite the troubles that each resident
                  has overcome, they live together as happy friends and family.
                  Most importantly the facilities are impeccably clean and
                  hygenic. I am grateful for having been welcomed into the
                  Sandhya Suraksha family and look forward to participating more
                  wholeheartedly in my personal capacity in their beautiful
                  endeavour.
                </p>

                <div className="mt-7 border-t border-[#E8DED0] pt-5">
                  <p className="font-display font-extrabold text-[#263746]">
  Mahita Nagaraj
</p>
           <p className="mt-1 text-sm text-[#526574]">
  Volunteered at Sandhya Suraksha
</p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <Reveal>
          <div className="relative overflow-hidden bg-[#E15925] px-6 py-10 shadow-[0_25px_60px_rgba(23,35,43,0.14)] sm:px-10 sm:py-12 lg:px-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#17232B]/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                  Get involved
                </p>

                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                  Ready to join the team?
                </h2>

                <p className="mt-2 text-sm text-white/80 sm:text-base">
                  Fill our form now...
                </p>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScgw-IiV3jbOUVHRS57reqYJDav8c0Jaw8WogWJ0l4s2eGt-Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#17232B] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#263746] hover:shadow-xl"
              >
                Fill our form
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
    </SiteLayout>
  );
}
export const Route = createFileRoute("/individual")({
  component: Individual,
});