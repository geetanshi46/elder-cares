import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, HeartHandshake } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/leadership")({
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <SiteLayout>
      {/* ======================================================
          LEADERSHIP HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#263746]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED6439]">
              Leadership
            </p>

            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              People who lead with purpose.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Meet the people behind Nightingales Medical Trust and the
              dedicated professionals who help turn its vision into action.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======================================================
          LEADERSHIP OPTIONS
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="grid gap-6 md:grid-cols-2">

            {/* FOUNDERS */}
            <Reveal>
              <Link
                to="/founders"
                className="group block h-full rounded-[1.75rem] border border-[#263746]/10 bg-[#FFF7EC] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-35px_rgba(38,55,70,0.45)] sm:p-9 lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#ED6439] shadow-sm">
                    <HeartHandshake
                      className="h-7 w-7"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ED6439] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>

                <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                  Leadership
                </p>

                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#263746]">
                  Founders
                </h2>

                <p className="mt-4 max-w-lg text-base leading-8 text-[#526574]">
                  Discover the vision and journey of the people who founded
                  Nightingales Medical Trust and shaped its commitment to
                  dignified eldercare.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#263746]">
                  Meet the Founders
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>

            {/* EXECUTIVE COMMITTEE */}
            <Reveal delay={100}>
              <Link to="/executive-committee"
                className="group block h-full rounded-[1.75rem] border border-[#263746]/10 bg-white p-7 shadow-[0_20px_60px_-40px_rgba(38,55,70,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-35px_rgba(38,55,70,0.45)] sm:p-9 lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF7EC] text-[#ED6439]">
                    <Users
                      className="h-7 w-7"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#263746] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>

                <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                  Leadership
                </p>

                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#263746]">
                  Executive Committee
                </h2>

                <p className="mt-4 max-w-lg text-base leading-8 text-[#526574]">
                  Meet the experienced and committed professionals who guide
                  the organisation's work and help turn its vision into
                  meaningful action.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#263746]">
                  Meet the Executive Committee
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>

          </div>
        </div>
      </section>
    </SiteLayout>
  );
}