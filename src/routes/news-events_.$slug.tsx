import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Newspaper,
  ZoomIn,
  X,
  Image as ImageIcon,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Newsletter } from "@/components/home/Newsletter";
import { pressArticles } from "@/data/pressArticles";

export const Route = createFileRoute("/news-events_/$slug")({
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const [showImageModal, setShowImageModal] = useState(false);

  const article = pressArticles.find((item) => item.slug === slug);
  const otherArticles = pressArticles.filter((item) => item.slug !== slug).slice(0, 4);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showImageModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showImageModal]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowImageModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

                {article.image && (
                  <>
                    <span className="hidden h-1 w-1 rounded-full bg-[#263746]/30 sm:block" />
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ED6439]/15 px-3 py-1 text-[11px] font-bold text-[#ED6439]">
                      <ImageIcon className="h-3 w-3" />
                      Original Newspaper Clipping Available
                    </span>
                  </>
                )}
              </div>

              {/* Accent line */}
              <div className="mt-7 h-1 w-14 rounded-full bg-[#ED6439] sm:w-16" />

              {/* Title */}
              <h1 className="mt-7 max-w-4xl text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#263746] sm:text-[46px] lg:text-[56px]">
                {article.title}
              </h1>

              {/* Byline */}
              {article.byline && (
                <div className="mt-6 flex items-center gap-3">
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

        {/* ARTICLE CONTENT & MEDIA SIDEBAR */}
        <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-16">
            {/* MAIN ARTICLE CONTENT */}
            <article className="space-y-8">
              {/* SUMMARY CARD */}
              <div className="rounded-[2rem] border border-border bg-card p-7 shadow-soft sm:p-9 lg:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                  Executive Summary
                </p>

                <p className="mt-4 text-xl font-medium leading-relaxed text-[#263746] sm:text-[22px]">
                  {article.summary}
                </p>
              </div>

              {/* ORIGINAL NEWSPAPER CLIPPING EMBED (IF PRESENT) */}
              {article.image && (
                <div className="overflow-hidden rounded-[2rem] border border-[#ED6439]/20 bg-white p-6 shadow-soft sm:p-8">
                  <div className="flex items-center justify-between gap-4 border-b border-border/80 pb-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                        <Newspaper className="h-4 w-4" />
                        Original Newspaper Scan
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-[#263746]">
                        Published in {article.publication}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowImageModal(true)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#ED6439] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#d95730] hover:shadow-md"
                    >
                      <ZoomIn className="h-4 w-4" />
                      Enlarge Scan
                    </button>
                  </div>

                  <div
                    onClick={() => setShowImageModal(true)}
                    className="group relative mt-6 cursor-pointer overflow-hidden rounded-xl bg-[#FAF6F0] border border-border/60 text-center"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="mx-auto max-h-[520px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#ED6439] shadow-lg">
                        <ZoomIn className="h-4 w-4" />
                        Click to View High-Resolution Scan
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    Original article clipping preserved from {article.publication} archival records ({article.date}).
                  </p>
                </div>
              )}

              {/* ARTICLE FULL TEXT */}
              <div className="rounded-[2rem] border border-border bg-card p-7 shadow-soft sm:p-9 lg:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                  Full Story & Transcribed Coverage
                </p>

                <div className="mt-6 divide-y divide-border/60 space-y-4 text-[15.5px] leading-[1.9] text-muted-foreground sm:text-[16.5px]">
                  {article.content
                    .split("\n\n")
                    .filter((p) => p.trim().length > 0)
                    .map((paragraph, idx) => (
                      <p key={idx} className="pt-4 first:pt-0">
                        {paragraph.trim()}
                      </p>
                    ))}
                </div>

                <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
                  Source: Published by <span className="font-semibold text-ink">{article.publication}</span> on {article.date}. Preserved in Nightingales Medical Trust press archive.
                </div>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              {/* PRESS ROOM INFO */}
              <div className="rounded-[1.75rem] border border-border bg-sand p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                  Press Room
                </p>

                <h2 className="mt-3 text-xl font-bold leading-snug text-ink">
                  NMT in the Media
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Read more coverage about Nightingales Medical Trust, eldercare, dementia care, helpline interventions, and active ageing across Bengaluru.
                </p>

                <Link
                  to="/news-events"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-[#d95730]"
                >
                  View all press clippings & news
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* OTHER RECENT ARTICLES */}
              <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#ED6439]">
                  Related Press Stories
                </p>

                <div className="mt-4 space-y-4">
                  {otherArticles.map((other) => (
                    <a
                      key={other.slug}
                      href={`/news-events/${other.slug}`}
                      className="group block border-b border-border/60 pb-3.5 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                        <span>{other.publication}</span>
                        <span>·</span>
                        <span>{other.date}</span>
                      </div>
                      <h4 className="mt-1 line-clamp-2 text-[13.5px] font-bold leading-snug text-[#263746] transition-colors group-hover:text-[#ED6439]">
                        {other.title}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* LIGHTBOX MODAL FOR ARTICLE SCAN */}
        {showImageModal && article.image && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
            onClick={() => setShowImageModal(false)}
          >
            <div
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-border bg-sand px-5 py-4 sm:px-6">
                <div className="min-w-0 pr-4">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ED6439]">
                    {article.publication} · {article.date}
                  </span>
                  <h3 className="mt-1 truncate font-display text-base font-bold text-[#263746] sm:text-lg">
                    {article.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setShowImageModal(false)}
                  aria-label="Close modal"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#263746] shadow-sm transition-colors hover:bg-[#ED6439] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative flex-1 overflow-y-auto bg-[#1a202c]/5 p-4 sm:p-6 text-center">
                <img
                  src={article.image}
                  alt={article.title}
                  className="mx-auto max-h-[70vh] w-auto rounded-lg object-contain shadow-md"
                />
              </div>

              <div className="flex items-center justify-between border-t border-border bg-white px-5 py-3.5 sm:px-6">
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Original press clipping archive
                </p>
                <button
                  type="button"
                  onClick={() => setShowImageModal(false)}
                  className="rounded-lg border border-border px-4 py-2 text-xs font-semibold text-[#263746] hover:bg-sand"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <Newsletter />
      </main>
    </SiteLayout>
  );
}