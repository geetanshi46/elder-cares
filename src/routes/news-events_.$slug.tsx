import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CalendarDays, Newspaper } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Newsletter } from "@/components/home/Newsletter";
import { pressArticles } from "@/data/pressArticles";

export const Route = createFileRoute("/news-events_/$slug")({
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();

  const article = pressArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <SiteLayout>
        <main className="flex min-h-[70vh] items-center justify-center px-6 py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Press room
            </p>

            <h1 className="mt-3 text-4xl font-semibold text-ink">
              Article not found
            </h1>

            <p className="mt-4 text-muted-foreground">
              The article you're looking for could not be found.
            </p>

            <Link
              to="/news-events"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News & Events
            </Link>
          </div>
        </main>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <main>
       {/* ARTICLE HERO */}
<section className="relative overflow-hidden border-b border-border bg-sand">
  {/* Decorative elements */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#ED6439]/[0.07] sm:h-96 sm:w-96"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute bottom-0 right-[12%] hidden h-40 w-40 rounded-full border border-[#ED6439]/10 lg:block"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute bottom-12 left-[5%] hidden h-px w-24 bg-[#ED6439]/20 lg:block"
  />

  <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">
    {/* Back navigation */}
    <Link
      to="/news-events"
      className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#263746]/70 transition-colors hover:text-[#ED6439]"
    >
      <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
      Back to News & Events
    </Link>

    <div className="mt-10 max-w-5xl lg:mt-12">
      {/* Article metadata */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ED6439]">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ED6439]/10">
            <Newspaper className="h-3.5 w-3.5" />
          </span>

          {article.publication}
        </span>

        <span className="hidden h-1 w-1 rounded-full bg-[#263746]/30 sm:block" />

        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#263746]/65">
          <CalendarDays className="h-4 w-4" />
          {article.date}
        </span>
      </div>

      {/* Accent line */}
      <div className="mt-7 h-1 w-14 rounded-full bg-[#ED6439] sm:w-16" />

      {/* Title */}
      <h1 className="mt-7 max-w-4xl text-[42px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#263746] sm:text-[52px] lg:text-[68px]">
        {article.title}
      </h1>

      {/* Byline */}
      {article.byline && (
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px w-8 bg-[#263746]/20" />

          <p className="text-sm text-[#263746]/65">
            By{" "}
            <span className="font-semibold text-[#263746]">
              {article.byline}
            </span>
          </p>
        </div>
      )}
    </div>
  </div>
</section>

        {/* ARTICLE CONTENT */}
        <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,760px)_280px] lg:items-start lg:gap-20">
            
            {/* MAIN ARTICLE */}
            <article>
              <div className="rounded-[2rem] border border-border bg-card p-7 shadow-soft sm:p-10 lg:p-12">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                  Article overview
                </p>

                <div className="mt-6 space-y-6 text-[16px] leading-[1.9] text-muted-foreground sm:text-[17px]">
                  <p className="text-xl leading-relaxed text-ink sm:text-[22px]">
                    {article.summary}
                  </p>

                  <p>
                    This press coverage highlights the work of Nightingales
                    Medical Trust and its continued focus on supporting older
                    adults, strengthening community awareness and connecting
                    elders with appropriate support systems.
                  </p>

                  <p>
                    The original report was published by{" "}
                    <span className="font-semibold text-ink">
                      {article.publication}
                    </span>{" "}
                    and provides the full context surrounding the story.
                  </p>
                </div>

               
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[1.75rem] border border-border bg-sand p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                  Press room
                </p>

                <h2 className="mt-3 text-xl font-semibold leading-snug text-ink">
                  NMT in the news
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Read more coverage about Nightingales Medical Trust,
                  eldercare, dementia care and our work across Bengaluru.
                </p>

                <Link
                  to="/news-events"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  View all coverage
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <Newsletter />
      </main>
    </SiteLayout>
  );
}