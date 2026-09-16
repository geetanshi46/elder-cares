import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/founders")({
  component: FoundersPage,
});

const trustees = [
  {
    name: "Mr. Pankaj C. Lakhani",
    role: "Trustee",
    image:
      "https://www.nightingaleseldercare.com/assets/images/pankaj-lakhani-152x160.png",
    bio: "Mr. Pankaj C. Lakhani is the Managing Director of the Bangalore Soft Drinks Private Limited and the Director of the Saurashtra Bottling Private Limited. He also functions as a Trustee on the boards of several Non-profits.",
  },
  {
    name: "Mr. Amarnath Kamath",
    role: "Trustee",
    image:
      "https://www.nightingaleseldercare.com/assets/images/amarnath-kamath-146x160.png",
    bio: "Mr. Amarnath Kamath is a practicing Chartered Accountant and Management Consultant. He has been in the profession for over 44 years.",
    extra:
      "He moved to Bangalore in 1972 and started his practice as a first generation practitioner. He has now built up a fine practice and has, besides several prominent citizens of Bangalore, a large number of corporates, banks and financial institutions as clients of his firm, Amarnath Kamath & Associates.",
  },
  {
    name: "Ms. Indra Prem Menon",
    role: "Trustee",
    image:
      "https://www.nightingaleseldercare.com/assets/images/indira-menon-145x160.png",
    bio: "Mrs. Indira Menon is a person full of energy, enthusiasm and dynamism. She aims at perfection in all she does and does not compromise on the high standards she sets for herself or others.",
    extra:
      "Mrs. Menon was earlier known to be the youngest President of The Bangalore Chamber of Industry and Commerce, Bangalore, Karnataka. She is currently the President and CEO of Lakshmanan Isola Private Limited, and is engaged in managing all aspects of the operations of the Company. Further, she is active on the Board of Directors of several companies in various fields like IT, Hospitality, Finance and Films, to name a few.",
    quote:
      "I rarely regret anything I have ever done, but I always regret the things that I have not done",
  },
  {
    name: "Mr. Basant Poddar",
    role: "Trustee",
    image:
      "https://www.nightingaleseldercare.com/assets/images/poddar-144x144.png",
    bio: "Mr. Basant Poddar is the Managing Director of Mineral Enterprises Ltd (MEL). Mineral Enterprises Limited is a scientific mining company with 6 decades of experience focusing on Mining, Logistics, Infrastructure development and Renewable Energy.",
    extra:
      "He is also the Vice President of Federation of Indian Mineral Industries, an apex body [founded in 1966] and has keen interest in Community Development.",
  },
  {
    name: "Mr. Sudhakar Rao",
    role: "Trustee",
    image:
      "https://www.nightingaleseldercare.com/assets/images/rao-150x160.png",
    bio: "Mr. Sudhakar Rao is an IAS Officer of the Karnataka Cadre (1973 batch) and retired as the Chief Secretary of Karnataka in September 2009. He has held several key positions in both the State and Central Governments.",
    extra:
      "Following an illustrious career in the Government, upon retirement Mr. Rao served as a Member of the Public Enterprises Selection Board, and thereafter has been/is an Independent Director on the Boards of several public limited companies.",
    quote:
      "Mr. Rao is closely associated with several non-profit organizations and is presently the Chairman of Public Affairs Foundation, Common Purpose (India Chapter), CherYsh-India and the Advisory Committees of the National Gallery of Modern Art, Bangalore and the Bangalore School of Music, besides being Director / Trustee of several others, such as CMCA, Bengaluru, The Teacher Foundation and the Public Affairs Centre.",
  },
  {
    name: "Mr. Manoj Shah",
    role: "Trustee",
    image:
      "https://www.nightingaleseldercare.com/assets/images/mike-shah-131x135.jpg",
    bio: "Mr. Manoj Shah has been a highly visible Business Executive in the global Information Technology industry. He has been in the industry for 45 years and is the founder Managing Director of Digital India, an active nationwide network to provide high quality business development services to chief executives in Info tech industry around the globe.",
    extra:
      "Mr. Shah is currently the Chairman of Nightingale Empowerment Foundation, an NGO working for the well-being of Senior Citizens in Bangalore.",
  },
];

function FoundersPage() {
  return (
    <SiteLayout>
      <main className="w-full overflow-x-hidden bg-white">

        {/* ======================================================
            HERO
        ====================================================== */}

        <section className="relative w-full overflow-hidden bg-[#E15925]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ED6439]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#F6A36E]/10 blur-3xl" />

          <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

            <Reveal>
              <div className="w-full max-w-4xl">

                <div className="mb-5 flex flex-wrap items-center gap-3 sm:mb-7">
                  <span className="h-px w-8 shrink-0 bg-white sm:w-10" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-xs sm:tracking-[0.2em]">
                    Our Founders
                  </span>
                </div>

                <h1 className="max-w-4xl break-words font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  The people who imagined
                  <span className="block text-white">
                    ageing with dignity.
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70 sm:mt-7 sm:text-lg sm:leading-8">
                  Two people. One conviction. A movement that began in a
                  garage and grew into a comprehensive approach to eldercare.
                </p>

              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-col items-start gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">

                <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
                  <span className="text-sm font-semibold text-white">
                    Est. 1998
                  </span>
                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
                  <span className="text-sm font-medium text-white/65">
                    Nightingales Medical Trust
                  </span>
                </div>

              </div>
            </Reveal>

          </div>
        </section>


        {/* ======================================================
            THE BEGINNING
        ====================================================== */}

        <section className="w-full bg-[#FFF7EC]">
          <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

            <div className="grid w-full gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10">

              <Reveal>
                <div className="lg:sticky lg:top-28">

                  <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#ED6439]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#ED6439] sm:text-xs sm:tracking-[0.16em]">
                      How it began
                    </span>
                  </div>

                  <div className="mt-6 sm:mt-7">
                    <span className="font-display text-6xl font-bold leading-none text-[#ED6439] sm:text-8xl">
                      1998
                    </span>
                  </div>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-[#526574] sm:mt-5">
                    A humble beginning that would become a movement for
                    ageing with dignity.
                  </p>

                </div>
              </Reveal>


              <Reveal delay={100}>
                <article className="w-full rounded-[1.5rem] border border-[#E15925]/8 bg-white p-5 shadow-[0_25px_70px_-45px_rgba(38,55,70,0.35)] sm:rounded-[2rem] sm:p-10 lg:p-12">

                  <HeartHandshake
                    className="h-8 w-8 text-[#ED6439] sm:h-9 sm:w-9"
                    strokeWidth={1.6}
                  />

                  <div className="mt-6 space-y-5 text-sm leading-7 text-[#526574] sm:mt-8 sm:space-y-6 sm:text-lg sm:leading-8">

                    <p>
                      The founders of Nightingales Medical Trust (NMT) began
                      their humble journey from a garage in Sadashivnagar,
                      Bangalore. They started with an enterprise — The
                      Nightingales Home Health Services — a pioneering service
                      back then.
                    </p>

                    <p>
                      While interacting with the beneficiaries of home health
                      care, it was realised that apart from health issues,
                      elders also had to deal with loneliness, emotional
                      issues and financial insecurities.
                    </p>

                    <p>
                      This was the brain child of two people who yearned to
                      make a difference in eldercare —
                      <strong className="font-bold text-[#E15925]">
                        {" "}Dr Radha S Murthy and Mr S Premkumar Raja.
                      </strong>
                    </p>

                    <p>
                      They felt that, if necessary facilities to cater to
                      physical, emotional, financial and social needs of elders
                      could be created, it could help elders age with dignity.
                      Thus, Nightingales Medical Trust was founded as a
                      non-profit aimed towards age care in 1998 to alleviate
                      the problems faced by the elderly.
                    </p>

                  </div>

                </article>
              </Reveal>

            </div>

          </div>
        </section>


        {/* ======================================================
            FOUNDERS
        ====================================================== */}

        <section className="w-full bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

            <Reveal>
              <div className="w-full max-w-2xl">

                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ED6439] sm:text-xs sm:tracking-[0.18em]">
                  The Founders
                </p>

                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[#E15925] sm:text-4xl lg:text-5xl">
                  Two journeys. One shared belief.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#526574] sm:mt-5 sm:text-base">
                  Their belief in humane, personalised and comprehensive
                  eldercare continues to shape the work of Nightingales
                  Medical Trust.
                </p>

              </div>
            </Reveal>


            <div className="mt-8 grid w-full gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">

              {/* ==================================================
                  DR RADHA
              ================================================== */}

              <Reveal>
                <article className="group w-full overflow-hidden rounded-[1.5rem] border border-[#E15925]/10 bg-[#FFF7EC] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-45px_rgba(38,55,70,0.45)] sm:rounded-[2rem]">

                  <div className="relative w-full overflow-hidden">
                    <img
                      src="https://nightingaleseldercare.com/assets/images/dsc-7302-1046x698.jpeg"
                      alt="Dr Radha S Murthy"
                      className="block aspect-[3/2] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 backdrop-blur-sm sm:left-5 sm:top-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#ED6439] sm:text-xs sm:tracking-[0.14em]">
                        Founder
                      </span>
                    </div>
                  </div>


                  <div className="p-5 sm:p-9">

                    <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#ED6439] sm:text-xs sm:tracking-[0.15em]">
                      Co-Founder & Managing Trustee
                    </p>

                    <h3 className="mt-2 break-words font-display text-2xl font-bold text-[#E15925] sm:text-3xl">
                      Dr Radha S Murthy
                    </h3>

                    <div className="my-5 h-px w-14 bg-[#ED6439]/40 sm:my-6" />

                    <p className="text-sm leading-7 text-[#526574] sm:text-base">
                      With a brilliant academic career and over thirty years
                      of medical experience, Dr Radha Murthy has established
                      herself as an eminent doctor who believes in humane and
                      personalized care.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#526574] sm:text-base">
                      She spends time with patients; showing concern,
                      listening to them and sharing their emotions and
                      burdens.
                    </p>

                  </div>

                </article>
              </Reveal>


              {/* ==================================================
                  PREMKUMAR RAJA
              ================================================== */}

              <Reveal delay={100}>
                <article className="group w-full overflow-hidden rounded-[1.5rem] border border-[#E15925]/10 bg-white shadow-[0_20px_70px_-45px_rgba(38,55,70,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-45px_rgba(38,55,70,0.5)] sm:rounded-[2rem]">

                  <div className="relative w-full overflow-hidden">

                    <img
                      src="https://nightingaleseldercare.com/assets/images/founder-mr-raja-1046x698.jpeg"
                      alt="S Premkumar Raja"
                      className="block aspect-[3/2] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute right-4 top-4 rounded-full bg-white/95 px-4 py-2 shadow-sm backdrop-blur-sm sm:right-5 sm:top-5 sm:px-5 sm:py-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#ED6439] sm:text-xs sm:tracking-[0.14em]">
                        Founder
                      </span>
                    </div>

                  </div>


                  <div className="p-5 sm:p-9">

                    <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#ED6439] sm:text-xs sm:tracking-[0.15em]">
                      Co-Founder & Secretary
                    </p>

                    <h3 className="mt-2 break-words font-display text-2xl font-bold text-[#E15925] sm:text-3xl">
                     Mr  S Premkumar Raja
                    </h3>

                    <div className="my-5 h-px w-14 bg-[#ED6439]/40 sm:my-6" />

                    <p className="text-sm leading-7 text-[#526574] sm:text-base">
                      With two Masters Degrees in Social Sciences and over 30
                      years of experience as a Community Welfare and
                      Healthcare Administrator, Mr Raja has planned and
                      successfully implemented several innovative social and
                      healthcare projects in various parts of India.
                    </p>

                  </div>

                </article>
              </Reveal>

            </div>

          </div>
        </section>


        {/* ======================================================
    BOARD OF TRUSTEES
====================================================== */}

<section className="w-full bg-[#FFF7EC]">
  <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

    {/* SECTION INTRO */}
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">

        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ED6439] sm:text-xs sm:tracking-[0.2em]">
          Board of Trustees
        </p>

        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[#E15925] sm:text-4xl lg:text-5xl">
          The people guiding the journey.
        </h2>

        <p className="mt-5 text-sm leading-7 text-[#526574] sm:text-base sm:leading-8">
          NMT is supported by a diverse group of professionals and
          community leaders whose experience and commitment continue to
          strengthen the Trust's work in eldercare.
        </p>

      </div>
    </Reveal>


    {/* TRUSTEES */}
    <div className="mt-16 sm:mt-20 lg:mt-28">

      {trustees.map((trustee, index) => {
        const imageLeft = index % 2 === 0;

        return (
          <Reveal key={trustee.name} delay={index * 80}>

            <article
              className={`
                grid items-center gap-10 border-t border-[#E15925]/10
                py-12 sm:gap-14 sm:py-16
                lg:grid-cols-2 lg:gap-20 lg:py-20
                ${index === trustees.length - 1 ? "border-b" : ""}
              `}
            >

              {/* IMAGE */}
              <div
                className={`
                  ${imageLeft ? "lg:order-1" : "lg:order-2"}
                  flex justify-center
                `}
              >
                <div className="relative flex h-[280px] w-full max-w-[360px] items-center justify-center sm:h-[340px] sm:max-w-[420px]">

                  {/* Decorative shape */}
                  <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ED6439]/8 sm:h-[270px] sm:w-[270px]" />

                  <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ED6439]/20 sm:h-[290px] sm:w-[290px]" />

                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    loading="lazy"
                    className="relative z-10 h-full w-auto max-w-[85%] object-contain"
                  />

                </div>
              </div>


              {/* CONTENT */}
              <div
                className={`
                  ${imageLeft ? "lg:order-2" : "lg:order-1"}
                  max-w-2xl
                `}
              >

                <div className="mb-4 flex items-center gap-3">

                  <span className="h-px w-8 bg-[#ED6439]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ED6439] sm:text-xs sm:tracking-[0.2em]">
                    {trustee.role}
                  </span>

                </div>


                <h3 className="font-display text-3xl font-bold leading-tight text-[#E15925] sm:text-4xl">
                  {trustee.name}
                </h3>


                <div className="my-6 h-px w-14 bg-[#ED6439]/40" />


                <div className="space-y-5 text-sm leading-7 text-[#526574] sm:text-base sm:leading-8">

                  <p>
                    {trustee.bio}
                  </p>

                  {trustee.extra && (
                    <p>
                      {trustee.extra}
                    </p>
                  )}

                  {trustee.name === "Indra Prem Menon" &&
                    trustee.quote && (
                      <blockquote className="mt-6 border-l-2 border-[#ED6439] pl-5 font-serif text-base italic leading-7 text-[#E15925] sm:text-lg">
                        “{trustee.quote}”
                      </blockquote>
                    )}

                  {trustee.name === "Sudhakar Rao" &&
                    trustee.quote && (
                      <p>
                        {trustee.quote}
                      </p>
                    )}

                </div>

              </div>

            </article>

          </Reveal>
        );
      })}

    </div>

  </div>
</section>


        {/* ======================================================
            CLOSING
        ====================================================== */}

        <section className="w-full bg-[#E15925]">
          <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

            <Reveal>
              <div className="relative w-full overflow-hidden rounded-[1.5rem] bg-[#ED6439] px-5 py-7 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14">

                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-white/10" />

                <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8">

                  <div className="w-full max-w-2xl">

                    <div className="flex items-center gap-3">
                      <Sparkles
                        className="h-5 w-5 shrink-0 text-white"
                        strokeWidth={1.8}
                      />

                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80 sm:text-xs sm:tracking-[0.16em]">
                        The journey continues
                      </span>
                    </div>

                    <h2 className="mt-4 break-words font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                      From a garage in Bengaluru to a movement for ageing
                      with dignity.
                    </h2>

                  </div>


                  <Link
                    to="/about"
                    className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#E15925] transition-all duration-300 hover:gap-4 hover:bg-[#FFF7EC]"
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

      </main>
    </SiteLayout>
  );
}