import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

// Committee member images
import SwatiImage from "@/assets/executives/Swati.webp";
import RajImage from "@/assets/executives/raj.webp";
import SinghImage from "@/assets/executives/Singh.png";
import UrmilaImage from "@/assets/executives/Urmila.jpg";
import KhizraImage from "@/assets/executives/khizra.png";
import EdwardImage from "@/assets/executives/Edward.jpg";
import SatishImage from "@/assets/executives/satish.jpg";
import accountsManagerImage from "@/assets/executives/accounts-manager.webp";
import seniorPsychiatristImage from "@/assets/executives/senior-psychiatrist.png";


function UrmilaBio({ bio }: { bio: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full">
      <div
        className={`text-[15px] leading-7 text-[#526574] sm:text-[17px] sm:leading-[1.9] ${
          expanded ? "" : "max-h-[360px] overflow-hidden"
        }`}
      >
        {bio}
      </div>

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mt-5 text-sm font-bold text-[#ED6439] transition-colors duration-300 hover:text-[#E15925]"
      >
        {expanded ? "Read less ↑" : "Read more →"}
      </button>
    </div>
  );
}


function ExpandableBio({ bio }: { bio: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex h-full w-full flex-col">
      <div
        className={`text-[15px] leading-7 text-[#526574] sm:text-[17px] sm:leading-[1.9] ${
          expanded ? "" : "max-h-[360px] overflow-hidden"
        }`}
      >
        {bio}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-5 self-start text-sm font-bold text-[#ED6439] transition-colors duration-300 hover:text-[#E15925]"
      >
        {expanded ? "Read less ↑" : "Read more →"}
      </button>
    </div>
  );
}


const committeeMembers = [
  {
    name: "Swati Bhandary",
    role: "Associate Director",
    image: SwatiImage,
    bio: (
      <>
        Swati Bhandary holds a Master’s degree in Social Work from the Tata
        Institute of Social Sciences and brings over 27 years of extensive
        experience in the social sector. After dedicating seven years to the
        field of child welfare, she joined Nightingales Medical Trust in 2006.
        Through her dedication and leadership, she has steadily risen to her
        current position as <strong>Associate Director.</strong> Passionate
        about age care, Swati oversees the Trust’s various elder care projects
        and is a strong advocate for the welfare and rights of the elderly. Her
        key responsibilities include strategic planning, resource
        mobilization, and government liaison. A firm believer in teamwork, she
        has mentored and guided many team members over the years, fostering a
        culture of collaboration and professional growth. Working closely with
        the management team, she plays a pivotal role in driving the
        organization’s mission and long-term goals.
      </>
    ),
  },

  {
    name: "Raj Kumar Narang",
    role: "Advisor",
    image: RajImage,
    bio: (
      <>
        An alumnus of the Senior Management Program at IIM Calcutta, Raj Kumar
        Narang brings 46 years of rich experience as an{" "}
        <strong>Advisor,</strong> spanning banking branch operations,
        regulatory reporting for UK, European, and Indian banking regulators,
        as well as finance and credit management.
      </>
    ),
  },

  {
    name: "Colonel BK Singh",
    role: "Deputy Director – Administration and HR",
    image: SinghImage,
    bio: (
      <>
        Colonel BK Singh an Army Officer with a degree in BE (Civil), PG
        Diploma in Personal Management, HR and Finance has served in the Indian
        Army for more than 30 years wherein was involved handling various
        Operations, Peace keeping force, VIP Security, heading anti-terrorism
        and Bomb disposal squads. Also was involved in execution and
        maintenance of Civil Engineering Projects for the Army. Post retirement
        worked as Head Facilities and Projects wherein headed the Facilities,
        Security and the Construction Projects for AMC Group of Institutions.
        Presently employed as the <strong>Deputy Director</strong> -
        Administration and HR and responsible for handling Administration, HR,
        IT, Facilities, Procurement, and Construction Projects for NMT.
      </>
    ),
  },

  {
    name: "Urmila Chanam",
    role: "Deputy Director",
    image: UrmilaImage,
    bio: (
      <>
        A social impact professional and <strong>Deputy Director</strong> with
        17 years’ experience working with the government, United Nations
        organizations, international and national donor agency funded
        projects, non-governmental organizations, diverse communities, and the
        media in India, south-east Asia and Africa in the field of agriculture,
        rural development, WASH and sexual reproductive health, HIV/AIDS
        program, and women empowerment.

        <br />
        <br />

        Urmila Chanam’s expertise and contribution have been in the area of
        advocacy, liasioning, collaboration and multi-stakeholder engagement,
        designing and implementation of social behavior change campaigns,
        strategy and ideation, program design and implementation, leading
        outreach and feasibility studies, training, community mobilization and
        knowledge management.

        <br />
        <br />

        A recipient of Amelia Earhart Women Have Wings Courage Awards, Women
        Economic Forum Awards, UNFPA National Laadli Awards, and World Pulse
        Spirit Awards for Sisterhood, her professional highlights include
        training 20,200 adolescent girls and women in different countries,
        contributing recommendations based on field experience to national
        consultations, conducting a pan India survey, being part of the content
        and design group that developed training manuals which have been
        translated in many languages and used across the world, and for
        integrating the “Leave No One Behind” principle of the SDGs in her
        work.

        <br />
        <br />

        An Anthropologist by education and Gold Medalist from Manipur
        University, she holds a diploma in Social Behavior Change Communication
        from John Hopkins through the virtual learning program, and Citizen
        Journalism and Digital Storytelling from World Pulse.
      </>
    ),
  },

  {
    name: "Dr. Khizra Usmani",
    role: "Deputy Director",
    image: KhizraImage,
    bio: (
      <>
        Dr. Khizra Usmani, <strong>Deputy Director</strong>, leads dementia
        care projects prioritizing health and wellbeing. Her projects encompass
        residential facilities and daycare centers, also emphasizing risk
        reduction and active aging strategies. With over 2 decades of clinical
        experience, she transitioned into age care, focusing on palliative care
        and dementia. She advocates for equitable health opportunities across
        the lifespan, promoting dignity and quality of life for elderly
        individuals.
      </>
    ),
  },

  {
    name: "Elpied Edward Aranha",
    role: "Manager HR",
    image: EdwardImage,
    bio: (
      <>
        Elpied Edward Aranha serves as a member of the Executive Committee of
        Nightingales Medical Trust. He has over 32 years of experience in the
        areas of Accounts, Audit and Human Resource. Over the years, he has been
        involved in ensuring transparency in financial operations,
        implementing effective internal controls and fostering HR practices
        that align with the organization’s mission and vision.

        <br />
        <br />

        As <strong>Manager HR</strong>, his focus is on strengthening
        governance, accountability and operational efficiency, to ensure the
        resources are utilised responsibly and all remain motivated to serve our
        beneficiaries, the senior citizens, with dedication and compassion.
      </>
    ),
  },

  {
    name: "Satish Gangadhar Honavar",
    role: "Head of Accounts and Finance",
    image: SatishImage,
    bio: (
      <>
        <strong>Head of Accounts and Finance</strong> with 39 years of diverse
        experience, including over 30+ years in senior leadership roles within
        the corporate sector - primarily in multinational organizations. His
        professional journey has been largely within the manufacturing
        industry, with key expertise in Indirect Taxation, MIS, Costing,
        Budgeting, and Team Training.
      </>
    ),
  },


  {
    name: "Dr. Vijetha Daas",
    role: "Senior Consultant Psychiatrist",
    image: accountsManagerImage,
    bio: (
      <>
        <strong>Senior consultant psychiatrist</strong> graduated from Nimhans. Has vast experience in medical practices and holistic approach towards patient care. Was trainer of trainer (TOT) to medical doctors and paramedical staff in mental health and awareness in DMHP. Now into dementia care and residential practices. Good administrator, dedicated, assertive and with leadership qualities.
      </>
    ),
  },

  {
    name: "Mr. Subramanian Narayan",
    role: "Manager, Accounts and Finance",
    image: seniorPsychiatristImage,
    bio: (
      <>
        <strong>Manager, Accounts and Finance</strong> with over 30 years of experience in senior roles at international manufacturing, services and audit organizations. Areas primarily worked in include treasury, banking, budgeting, cost and management accounting and team development.
      </>
    ),
  },


];


export const Route = createFileRoute("/executive-committee")({
  component: ExecutiveCommittee,
});


function ExecutiveCommittee() {
  return (
    <SiteLayout>
      <div className="min-h-screen overflow-hidden bg-white">

        {/* ======================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#E15925]">
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#ED6439]/20 blur-3xl sm:h-72 sm:w-72" />

          <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#F6A36E]/10 blur-3xl sm:h-80 sm:w-80" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
            <Reveal>
              <div className="max-w-4xl">

                <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-7">
                  <span className="h-px w-8 bg-[#ED6439] sm:w-10" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F6A36E] sm:text-xs sm:tracking-[0.2em]">
                    Nightingales Medical Trust
                  </span>
                </div>

                <h1 className="font-display text-[2.6rem] font-bold leading-[1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  The people who lead
                  <span className="block text-white">
                    our mission forward.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/70 sm:mt-7 sm:text-lg sm:leading-8">
                  Our dedicated staff are leaving their mark on the world.
                  They are led by a group of experienced and committed
                  professionals who form the Executive Committee.
                </p>

              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-col items-start gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">

                <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
                  <span className="text-sm font-semibold text-white">
                    7 Members
                  </span>
                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
                  <span className="text-sm font-medium text-white/65">
                    Executive Committee
                  </span>
                </div>

              </div>
            </Reveal>
          </div>
        </section>


        {/* ======================================================
            INTRO
        ====================================================== */}

        <section className="bg-[#FFF7EC]">
          <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20 lg:px-10 lg:py-24">

            <Reveal>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">

                <span className="h-2 w-2 shrink-0 rounded-full bg-[#ED6439]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439] sm:text-xs sm:tracking-[0.16em]">
                  Leadership Team
                </span>

              </div>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#526574] sm:mt-7 sm:text-xl sm:leading-9">
                Our dedicated staff are leaving their mark on the world! They
                are led by a group of experienced and committed professionals
                who form the Executive Committee.
              </p>
            </Reveal>

          </div>
        </section>


        {/* ======================================================
            COMMITTEE MEMBERS
        ====================================================== */}

        <section>
          {committeeMembers.map((member, index) => {
            const isReversed = index % 2 !== 0;
            const isCream = index % 2 !== 0;

            return (
              <section
                key={member.name}
                className={
                  isCream
                    ? "bg-[#FFF7EC] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
                    : "bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
                }
              >
                <Reveal>

                  <div
                    className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-8 sm:gap-10 lg:gap-16 ${
                      isReversed
                        ? "lg:flex-row-reverse"
                        : "lg:flex-row"
                    }`}
                  >

                    {/* ==================================================
                        IMAGE
                        Badge removed completely
                    ================================================== */}

                    <div className="w-full shrink-0 lg:w-[46%]">

                      <div
                        className="
                          group
                          relative
                          w-full
                          overflow-hidden
                          rounded-[1.5rem]
                          border
                          border-[#E15925]/10
                          bg-neutral-100
                          shadow-[0_20px_70px_-45px_rgba(38,55,70,0.35)]
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:shadow-[0_30px_80px_-45px_rgba(38,55,70,0.5)]
                          sm:rounded-[2rem]
                        "
                      >

                        <img
                          src={member.image}
                          alt={member.name}
                          className="
                            block
                            h-auto
                            max-h-[600px]
                            min-h-[260px]
                            w-full
                            object-contain
                            object-center
                            transition-transform
                            duration-700
                            group-hover:scale-[1.02]
                          "
                        />

                      </div>

                    </div>


                    {/* ==================================================
                        CONTENT
                    ================================================== */}

                    <div className="w-full lg:w-[54%]">
                      <div className="w-full max-w-2xl">

                        {member.name !== member.role ? (
                          <>
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439] sm:text-xs sm:tracking-[0.15em]">
                              {member.role}
                            </p>
                            <h2 className="mt-2 break-words font-display text-[2rem] font-bold leading-tight text-[#E15925] sm:text-4xl lg:text-[42px]">
                              {member.name}
                            </h2>
                          </>
                        ) : (
                          <h2 className="mt-2 break-words font-display text-[2rem] font-bold leading-tight text-[#E15925] sm:text-4xl lg:text-[42px]">
                            {member.role}
                          </h2>
                        )}

                        <div className="my-5 h-px w-14 bg-[#ED6439]/40 sm:my-6" />

                        {member.name === "Urmila Chanam" ? (
                          <UrmilaBio bio={member.bio} />
                        ) : (
                          <div className="text-[15px] leading-7 text-[#526574] sm:text-[17px] sm:leading-[1.9]">
                            {member.bio}
                          </div>
                        )}

                      </div>
                    </div>

                  </div>

                </Reveal>
              </section>
            );
          })}
        </section>


        {/* ======================================================
            CLOSING
        ====================================================== */}

        <section className="bg-[#E15925]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

            <Reveal>
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#ED6439] px-6 py-9 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14">

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[24px] border-white/10 sm:h-48 sm:w-48 sm:border-[30px]" />

                <div className="relative flex flex-col gap-7 sm:gap-8 md:flex-row md:items-center md:justify-between">

                  <div className="max-w-2xl">

                    <div className="flex items-start gap-3 sm:items-center">

                      <Sparkles
                        className="mt-0.5 h-5 w-5 shrink-0 text-white sm:mt-0"
                        strokeWidth={1.8}
                      />

                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/80 sm:text-xs sm:tracking-[0.16em]">
                        Together, we make a difference
                      </span>

                    </div>

                    <h2 className="mt-4 font-display text-xl font-bold leading-tight text-white sm:text-3xl">
                      Guided by experience, compassion and commitment, our
                      team advances the mission of Nightingales Medical Trust.
                    </h2>

                  </div>

                  <Link
                    to="/about"
                    className="
                      group
                      inline-flex
                      w-full
                      shrink-0
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-white
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-[#E15925]
                      transition-all
                      duration-300
                      hover:gap-4
                      hover:bg-[#FFF7EC]
                      sm:w-auto
                    "
                  >
                    Back to About

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </Link>

                </div>

              </div>
            </Reveal>

          </div>
        </section>

      </div>
    </SiteLayout>
  );
}