import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FileText } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/annual-reports")({
  component: RouteComponent,
});

const annualReports = [
  {
    year: "2017-18",
    pdf: "https://nightingaleseldercare.com/assets/files/ANNUAL-REPORTOFNMT2017-18.pdf",
  },
  {
    year: "2018-19",
    pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2018-19FINAL1.pdf",
  },
  {
    year: "2019-20",
    pdf: "https://nightingaleseldercare.com/assets/files/2019-20-NMTAnnualReport.pdf",
  },
  {
    year: "2020-21",
    pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2020-21.pdf",
  },
  {
    year: "2021-22",
    pdf: "https://nightingaleseldercare.com/assets/files/NMT-AnnualReport2021-22.pdf",
  },
  {
    year: "2022-23",
    pdf: "https://nightingaleseldercare.com/assets/files/Annual-report2022-2023.pdf",
  },
  {
    year: "2024-25",
    pdf: "https://nightingaleseldercare.com/assets/files/Annual_Report_2024_2025.pdf",
  },
];

function RouteComponent() {
  return (
    <SiteLayout>
    <main className="min-h-screen bg-white">

      {/* ==================================================
          HERO
      ================================================== */}
      <section className="relative overflow-hidden bg-[#263746]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#ED6439]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#FFF7EC]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="max-w-4xl">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#F6A36E]">
              Transparency & Governance
            </p>

            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Annual Reports
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Explore our Annual Reports to learn how Nightingales Medical
              Trust has been led to serve senior citizens of all backgrounds.
            </p>

          </div>
        </div>
      </section>

      {/* ==================================================
          INTRO
      ================================================== */}
      <section className="bg-[#FFF7EC]">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-18 lg:py-20">

          <p className="text-lg leading-9 text-[#526574] sm:text-xl">
            Nightingales Medical Trust operates in a very transparent manner.
            Here you can go through our Annual Reports to see the ways we have
            been led to serve senior citizens of all backgrounds.
          </p>

        </div>
      </section>

      {/* ==================================================
          REPORTS
      ================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

          {/* Section heading */}
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED6439]">
              Reports Archive
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold text-[#263746] sm:text-4xl">
              Our Annual Reports
            </h2>
          </div>

          {/* Report cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {annualReports.map((report, index) => (
              <article
                key={report.year}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#263746]/10
                  bg-white
                  p-7
                  shadow-[0_20px_60px_-35px_rgba(38,55,70,0.35)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#ED6439]/30
                  hover:shadow-[0_30px_70px_-35px_rgba(38,55,70,0.45)]
                  sm:p-8
                "
              >

                {/* Decorative circle */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-36
                    w-36
                    rounded-full
                    bg-[#FFF7EC]
                    transition-transform
                    duration-700
                    group-hover:scale-125
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    grid
                    h-14
                    w-14
                    place-items-center
                    rounded-2xl
                    bg-[#FFF0E6]
                    text-[#ED6439]
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                >
                  <FileText
                    className="h-7 w-7"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Content */}
                <div className="relative mt-10">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ED6439]">
                    Annual Report
                  </p>

                  <h3 className="mt-2 font-display text-3xl font-bold text-[#263746]">
                    {report.year}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#526574]">
                    Read the Annual Report for {report.year} and explore
                    NMT's work, programmes and impact.
                  </p>

                  {/* PDF Button */}
                  <a
                    href={report.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#ED6439]
                      px-5
                      py-2.5
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_10px_25px_-10px_rgba(237,100,63,0.7)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#d95538]
                    "
                  >
                    View Report

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                      strokeWidth={2.2}
                    />
                  </a>

                </div>

                {/* Card number */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-6
                    right-7
                    text-xs
                    font-bold
                    text-[#263746]/10
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
    </SiteLayout>
  );
}