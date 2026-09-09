import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  FileCheck2,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/financial-reports")({
  component: RouteComponent,
});

const balanceSheets = [
  {
    year: "2019–20",
    pdf: "https://nightingaleseldercare.com/assets/files/Audited-FinancialStatementsFY2019-20.pdf",
  },
  {
    year: "2021–22",
    pdf: "https://nightingaleseldercare.com/assets/files/Audited-BalanceSheetNMT2021-22.pdf",
  },
  {
    year: "2022–23",
    pdf: "https://nightingaleseldercare.com/assets/files/NMT-consolidatedBalancesheetFY2022-23.pdf",
  },
  {
    year: "2023–24",
    pdf: "https://nightingaleseldercare.com/assets/files/NMT%20Annual%20Accounts%202023-24.pdf",
  },
  {
    year: "2024–25",
    pdf: "https://nightingaleseldercare.com/assets/files/Audited%20Financial%20Statements%20FY%202024-25%20(1).pdf",
  },
];

const fcraReports = [
  {
    year: "2022–23",
    pdf: "https://nightingaleseldercare.com/assets/files/FC4-2022-23.pdf",
  },
  {
    year: "2023–24",
    pdf: "https://nightingaleseldercare.com/assets/files/FCRA-FC42023-24.pdf",
  },
  {
    year: "2024–25",
    pdf: "https://nightingaleseldercare.com/assets/files/FCRA%20Annual_Report_FC_4_2024-25.pdf",
  },
];

const trustDocuments = [
  {
    title: "Trust Deed",
    description: "Original trust deed and rectification deed",
    icon: FileText,
    pdf: "https://nightingaleseldercare.com/assets/files/NMT-originalTrustdeedandrectificationdeeddated25theFeb2020.pdf",
  },
  {
    title: "PAN Card",
    description: "Nightingales Medical Trust PAN document",
    icon: FileCheck2,
    pdf: "https://nightingaleseldercare.com/assets/files/Trust_Pan_Card.pdf",
  },
  {
    title: "FCRA Certificate",
    description: "FCRA renewal certificate",
    icon: ShieldCheck,
    pdf: "https://nightingaleseldercare.com/assets/files/FCRA-Renewal-Certificate1.pdf",
  },
  {
    title: "12A Certificate",
    description: "12AB approval certificate",
    icon: Landmark,
    pdf: "https://nightingaleseldercare.com/assets/files/NMT-12ABApprovalAAATN2786NE20214.pdf",
  },
  {
    title: "80G Certificate",
    description: "80G approval certificate",
    icon: FileCheck2,
    pdf: "https://nightingaleseldercare.com/assets/files/NMT-80GApprovalAAATN2786NF20214.pdf",
  },
  {
    title: "CSR Registration",
    description: "CSR registration approval",
    icon: FileText,
    pdf: "https://nightingaleseldercare.com/assets/files/NMT_Approval-LetterforformCSR11.PDF",
  },
  {
    title: "BSE Social Stock Exchange Registration",
    description: "BSE Social Stock Exchange registration",
    icon: Landmark,
    pdf: "https://nightingaleseldercare.com/assets/files/BSE_Renewal.pdf",
  },
  {
    title: "NSE Social Stock Exchange Registration",
    description: "NSE Social Stock Exchange registration",
    icon: Landmark,
    pdf: "https://nightingaleseldercare.com/assets/files/SSE_LTC_20032026_102216.pdf",
  },
];

function RouteComponent() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#FDFCF9]">

        {/* ==================================================
            HERO
        ================================================== */}
        <section className="relative overflow-hidden bg-[#263746]">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#ED6439]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-white/5 blur-3xl" />

          <div className="pointer-events-none absolute right-[12%] top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="relative h-64 w-64">
              <div className="absolute right-0 top-0 h-48 w-48 rotate-12 rounded-[2.5rem] border border-white/10 bg-white/[0.03]" />
              <div className="absolute bottom-0 left-0 h-40 w-40 -rotate-12 rounded-[2rem] border border-[#ED6439]/20 bg-[#ED6439]/5" />

              <div className="absolute left-10 top-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <FileText className="h-9 w-9 text-[#F6A36E]" strokeWidth={1.4} />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
            <div className="max-w-3xl">

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#F6A36E]">
                Transparency & Governance
              </p>

              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Financial
                <span className="block text-[#F6A36E]">
                  Reports
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                Access our financial statements, FCRA reports and key trust
                documents as part of our commitment to transparency and
                accountable governance.
              </p>

            </div>
          </div>
        </section>

        {/* ==================================================
            INTRO
        ================================================== */}
        <section className="bg-[#FFF7EC]">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">

            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start md:gap-12">

              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#ED6439]/10 text-[#ED6439] md:flex">
                <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED6439]">
                  Financial Transparency
                </p>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-[#526574] sm:text-xl sm:leading-9">
                  Nightingales Medical Trust (NMT) operates in a very
                  transparent manner. Our Financial Reports reflect our
                  commitment to age care and dementia care without any
                  discrimination.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            BALANCE SHEETS
        ================================================== */}
        <section className="bg-[#FDFCF9]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ED6439]">
                  Financial Statements
                </p>

                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#263746] sm:text-4xl lg:text-5xl">
                  Balance Sheets
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#526574] md:text-right">
                Review our audited financial statements across the available
                financial years.
              </p>

            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#263746]/10 bg-white shadow-[0_25px_80px_-50px_rgba(38,55,70,0.45)]">

              {balanceSheets.map((report, index) => (
                <a
                  key={report.year}
                  href={report.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex items-center gap-5
                    border-b border-[#263746]/10
                    px-6 py-6
                    transition-all duration-300
                    last:border-b-0
                    hover:bg-[#FFF7EC]
                    sm:px-8 sm:py-7
                    lg:px-10
                  "
                >

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E6] text-xs font-bold text-[#ED6439]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                      Audited Financial Report
                    </p>

                    <h3 className="mt-1 font-display text-xl font-bold text-[#263746] sm:text-2xl">
                      {report.year}
                    </h3>
                  </div>

                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-full border border-[#263746]/10
                      text-[#263746]
                      transition-all duration-300
                      group-hover:border-[#ED6439]
                      group-hover:bg-[#ED6439]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </div>

                </a>
              ))}

            </div>

          </div>
        </section>

        {/* ==================================================
            FCRA REPORTS
        ================================================== */}
        <section className="bg-[#263746]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F6A36E]">
                Foreign Contribution
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                FCRA Reports
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
                View our available FCRA reports and related financial
                disclosures.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {fcraReports.map((report, index) => (
                <a
                  key={report.year}
                  href={report.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative overflow-hidden rounded-[1.75rem]
                    border border-white/10
                    bg-white/[0.06]
                    p-7
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-[#F6A36E]/30
                    hover:bg-white/[0.09]
                    sm:p-8
                  "
                >

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#ED6439]/10 transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.15em] text-white/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 group-hover:border-[#F6A36E] group-hover:bg-[#F6A36E] group-hover:text-[#263746]">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    <FileText
                      className="mt-10 h-8 w-8 text-[#F6A36E]"
                      strokeWidth={1.5}
                    />

                    <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F6A36E]">
                      FCRA Report
                    </p>

                    <h3 className="mt-2 font-display text-3xl font-bold text-white">
                      {report.year}
                    </h3>

                    <p className="mt-3 text-sm text-white/45">
                      View report
                    </p>

                  </div>

                </a>
              ))}

            </div>

          </div>
        </section>

        {/* ==================================================
            TRUST DOCUMENTS
        ================================================== */}
        <section className="bg-[#F4F7F8]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ED6439]">
                Organisation Documents
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#263746] sm:text-4xl lg:text-5xl">
                Trust Documents
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#526574]">
                Important documents and registrations relating to Nightingales
                Medical Trust.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {trustDocuments.map((document) => {
                const Icon = document.icon;

                return (
                  <a
                    key={document.title}
                    href={document.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group relative flex min-h-[230px]
                      flex-col overflow-hidden
                      rounded-[1.75rem]
                      border border-[#263746]/10
                      bg-white p-7
                      shadow-[0_20px_60px_-45px_rgba(38,55,70,0.5)]
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-[#ED6439]/25
                      hover:shadow-[0_30px_70px_-45px_rgba(38,55,70,0.55)]
                    "
                  >

                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#FFF7EC] transition-transform duration-700 group-hover:scale-125" />

                    <div className="relative flex items-start justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-[#ED6439]">
                        <Icon
                          className="h-6 w-6"
                          strokeWidth={1.6}
                        />
                      </div>

                      <ArrowUpRight
                        className="h-5 w-5 text-[#263746]/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ED6439]"
                        strokeWidth={2}
                      />

                    </div>

                    <div className="relative mt-auto pt-10">

                      <h3 className="font-display text-xl font-bold leading-tight text-[#263746]">
                        {document.title}
                      </h3>

                      <p className="mt-2 text-sm leading-5 text-[#526574]">
                        {document.description}
                      </p>

                    </div>

                  </a>
                );
              })}

            </div>

          </div>
        </section>

        {/* ==================================================
            BOTTOM CTA
        ================================================== */}
        <section className="bg-[#FFF7EC]">
          <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ED6439]">
              Transparency Matters
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold text-[#263746] sm:text-4xl">
              Open access to our financial information
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#526574]">
              Explore the reports and official documents above to learn more
              about NMT's financial transparency and governance.
            </p>

          </div>
        </section>

      </main>
    </SiteLayout>
  );
}