import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  Newspaper,
  ArrowUpRight,
  X,
  ZoomIn,
  Eye,
  Sparkles,
    FileText,
  Image as ImageIcon,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, CardGrid, InfoCard } from "@/components/site/Section";
import { Events } from "@/components/home/Events";
import { Newsletter } from "@/components/home/Newsletter";
import { Reveal } from "@/components/site/Reveal";
import {
  pressArticles,
  pressClippings,
  type PressClipping,
} from "@/data/pressArticles";
import newsEventsBanner from "@/assets/new&events/news-events-banner.webp";

// Recent events cards with real visuals from print media & activities
import clippingDeccanHerald2018 from "@/assets/new&events/deccan-herald-600x856.jpg.jpeg";
import clippingDeccanHerald2024 from "@/assets/new&events/IMG-20250829-WA0005.jpg.jpeg";
import clippingHinduJobs60 from "@/assets/new&events/all-work-no-rest-800x1058.jpg.jpeg";

const title = "News & Events — Media Gallery and Press Room | NMT";
const description =
  "Upcoming events, archival newspaper clippings, caregiver training batches and press coverage from Nightingales Medical Trust.";

export const Route = createFileRoute("/news-events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsEventsPage,
});

const CATEGORIES = [
  "All",
  "Helplines & Abuse",
  "Dementia Care",
  "Senior Livelihood",
  "Destitute Care",
  "Advocacy & CSR",
] as const;

function NewsEventsPage() {
  const [selectedClipping, setSelectedClipping] = useState<PressClipping | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Lock body scroll when lightbox modal is open
  useEffect(() => {
    if (selectedClipping) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedClipping]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedClipping(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredClippings =
    activeCategory === "All"
      ? pressClippings
      : pressClippings.filter((c) => c.category === activeCategory);

  return (
    <SiteLayout>
      {/* ======================================================
    NEWS & EVENTS HERO BANNER
    ====================================================== */}
<section className="w-full bg-[#FBF6EC]">
  <div className="relative w-full overflow-hidden">
    <img
      src={newsEventsBanner}
      alt="News & Events"
      className="
        block
        h-[320px]
        w-full
        object-cover
        object-center
        sm:h-[400px]
        lg:h-[500px]
      "
    />

    {/* VERY LIGHT OVERLAY */}
    <div className="pointer-events-none absolute inset-0 bg-white/10" />

    {/* HERO HEADING */}
    <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
      <h1
        className="
          font-display
          text-4xl
          font-extrabold
          tracking-[-0.03em]
          text-[#263746]
          drop-shadow-[0_2px_10px_rgba(255,255,255,0.65)]
          sm:text-5xl
          lg:text-6xl
        "
      >
        News & Events
      </h1>
    </div>
  </div>

  {/* CLEAN GAP BEFORE NEXT SECTION */}
  <div className="h-8 bg-[#FBF6EC] sm:h-10 lg:h-12" />
</section>

      <Events />

      {/* ======================================================
          RECENT EVENTS WITH PHOTO HIGHLIGHTS
          ====================================================== */}
    <section className="w-full bg-[#FBF6EC]">
  <div className="relative w-full overflow-hidden">
    <img
      src={newsEventsBanner}
      alt="News & Events"
      className="
        block
        h-auto
        w-full
        object-contain
      "
    />

    {/* VERY LIGHT OVERLAY */}
    <div className="pointer-events-none absolute inset-0 bg-white/10" />

    {/* HERO HEADING */}
    <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
      <h1
        className="
          font-display
          text-3xl
          font-extrabold
          tracking-[-0.03em]
          text-[#263746]
          drop-shadow-[0_2px_10px_rgba(255,255,255,0.7)]
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
      >
        News & Events
      </h1>
    </div>
  </div>

  {/* GAP BEFORE NEXT SECTION */}
  <div className="h-8 sm:h-10 lg:h-12" />
</section>

    {/* ============================================================
    APPEAL FOR MUSICAL INSTRUMENTS
    ============================================================ */}

<section className="relative overflow-hidden bg-[#FFF4EA] py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* SECTION HEADER */}
    <Reveal>
      <div className="mb-10 text-center sm:mb-12">
        <span className="inline-flex items-center rounded-full bg-[#ED6439] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_8px_20px_rgba(237,100,57,0.2)]">
          Appeal
        </span>

        <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-[#263746] sm:text-4xl lg:text-[2.7rem]">
          APPEAL FOR MUSICAL INSTRUMENTS
        </h2>

        <div className="mx-auto mt-5 h-1 w-16 bg-[#ED6439]" />
      </div>
    </Reveal>

    {/* ========================================================
        SINGLE FULL-WIDTH APPEAL CARD
        ======================================================== */}

    <Reveal>
      <article className="w-full overflow-hidden border border-[#ED6439]/15 bg-white shadow-[0_20px_60px_-25px_rgba(70,45,10,0.18)]">

        {/* TOP ORANGE STRIP */}
        <div className="flex items-center justify-between bg-[#ED6439] px-6 py-5 sm:px-8 lg:px-10">
          <p className="text-sm font-extrabold text-white sm:text-base">
            11th September 2026
          </p>

          <FileText className="h-5 w-5 text-white sm:h-6 sm:w-6" />
        </div>

        {/* APPEAL CONTENT */}
        <div className="p-6 sm:p-8 lg:p-10 xl:p-12">

          <h3 className="font-display text-xl font-extrabold leading-tight text-[#ED6439] sm:text-2xl lg:text-3xl">
            *APPEAL FOR MUSICAL INSTRUMENTS*
          </h3>

          <p className="mt-5 font-semibold leading-relaxed text-[#263746]">
            _Donations for Nightingales Smriti Gram – India’s First Integrated
            Dementia Care Village, Doddaballapur_
          </p>

          <div className="mt-7 space-y-5 text-[14px] leading-[1.8] text-muted-foreground sm:text-[14.5px]">

            <p>
              Dear Sir / Madam,
            </p>

            <p>
              Warm greetings to you.
            </p>

            <p>
              Nightingales Medical Trust (NMT) is an NGO dedicated to improving
              the lives of older persons through compassionate and innovative
              age care services. We reach thousands of elders through a range
              of need-based programmes every month
              .
            </p>

            <p>
              We are happy to share that Nightingales Smriti Gram – India’s
              First Integrated Dementia Care Village, near Doddaballapur, is
              nearing completion. Located just 36 km from Yelahanka, Smriti
              Gram is being developed as a national model of compassionate,
              person-centred and integrated dementia care.
            </p>

            <p>
              The first phase, expected to become operational in September -
              October 2026, will include a 100-bed residential dementia care
              facility offering completely free care to economically
              marginalized persons living with dementia, along with a Training
              Academy and Research & Innovation Hub.
            </p>

            <p>
              We firmly believe that financial circumstances should never
              determine the quality of dementia care a person receives.
            </p>

            <p className="font-extrabold text-[#ED6439]">
              *Help us bring music to Smriti Gram*
            </p>

            <p>
              As part of our efforts to create a warm, stimulating and
              therapeutic environment, we are setting up a Music Therapy Room
              at Smriti Gram. Music can evoke memories, encourage
              self-expression, reduce anxiety and bring joy and meaningful
              engagement to people living with dementia.
            </p>

            <p>
              We are therefore seeking musical instruments in good working
              condition, such as:
            </p>

            <p className="font-bold text-[#263746]">
              Keyboards • Harmoniums • Tablas • Dholaks • Maracas • Tambourines
              • Flutes • Guitars • Violins • and other suitable instruments.
            </p>

            <p>
              If you have instruments that are no longer in use, we would be
              grateful if you would consider donating them to Smriti Gram.
            </p>

            <p>
              We invite you to be part of this meaningful initiative and help
              us create a place where every memory matters.
            </p>

            <p>
              Thank you.
            </p>

            <div className="pt-3">
              <p>
                Warm regards,
              </p>

              <p className="mt-3 font-bold text-[#263746]">
                S Premkumar Raja
              </p>

              <p>
                Secretary and Co-founder
              </p>
            </div>

          </div>

          {/* ====================================================
              DOWNLOAD CTA — SAME CARD
              ==================================================== */}

          <div className="mt-10 border-t border-[#ED6439]/15 pt-7 sm:mt-12 sm:pt-8">
            <div className="flex flex-col gap-5 rounded-2xl bg-[#FFF4EA] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#ED6439] text-white">
                  <FileText className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-black text-[#263746]">
                    Appeal Document
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                    Download the complete appeal letter as a PDF.
                  </p>
                </div>
              </div>

              <a
                href="/documents/appeal-for-musical-instruments.pdf"
                download="Nightingales-Smriti-Gram-Appeal-for-Musical-Instruments.pdf"
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#ED6439] px-7 py-4 text-sm font-black text-white shadow-[0_10px_25px_rgba(237,100,57,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D95732] sm:w-auto"
              >
                <FileText className="h-5 w-5" />
                Download Appeal PDF
                <ArrowUpRight className="h-4 w-4" />
              </a>

            </div>
          </div>

        </div>
      </article>
    </Reveal>

  </div>
</section>


      {/* ======================================================
          NEW SECTION: PRINT MEDIA & NEWSPAPER CLIPPINGS GALLERY
          ====================================================== */}
      <Section
        id="press-clippings"
        eyebrow="Print media & archival clippings"
        title="NMT in the Headlines: Archival Press Gallery"
      >
        <div className="max-w-3xl">
          <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
            Original print coverage documenting Nightingales Medical Trust's pioneering initiatives in dementia care, elder abuse prevention, destitute elder rescue, and active ageing across India's leading national dailies.
          </p>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`rounded-full px-4 py-2 text-[12.5px] font-bold transition-all duration-200 ${
                  active
                    ? "bg-[#ED6439] text-white shadow-md shadow-[#ED6439]/20"
                    : "border border-border bg-card text-[#263746]/80 hover:border-[#ED6439]/40 hover:bg-sand"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* CLIPPINGS GRID */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredClippings.map((clipping, idx) => (
            <Reveal key={clipping.id} delay={(idx % 4) * 60}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#ED6439]/15 bg-white shadow-[0_10px_30px_rgba(70,45,10,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ED6439]/40 hover:shadow-[0_20px_45px_-12px_rgba(237,100,57,0.18)]">
                {/* CLIPPING IMAGE CONTAINER */}
                <div
                  onClick={() => setSelectedClipping(clipping)}
                  className="relative aspect-[3/4] w-full cursor-pointer overflow-hidden bg-[#FAF6F0]"
                >
                  <img
                    src={clipping.image}
                    alt={clipping.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ED6439] shadow-lg">
                      <ZoomIn className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      Click to Enlarge Scan
                    </span>
                  </div>

                  {/* PUBLICATION BADGE ON TOP */}
                  <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#263746] shadow-sm backdrop-blur-sm">
                      <Newspaper className="h-3 w-3 text-[#ED6439]" />
                      {clipping.publication}
                    </span>
                  </div>

                  {/* DATE BADGE BOTTOM */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] font-medium tracking-wide text-white/80">
                      {clipping.date}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#ED6439]">
                    {clipping.category}
                  </span>

                  <h4 className="mt-2 font-display text-[16px] font-bold leading-snug text-[#263746] transition-colors group-hover:text-[#ED6439]">
                    {clipping.title}
                  </h4>

                  <p className="mt-2.5 flex-1 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
                    {clipping.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/60 pt-3.5">
                    <button
                      type="button"
                      onClick={() => setSelectedClipping(clipping)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#ED6439]/10 px-3 py-1.5 text-xs font-bold text-[#ED6439] transition-colors hover:bg-[#ED6439] hover:text-white"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View Scan
                    </button>

                    {clipping.relatedSlug && (
                      <a
                        href={`/news-events/${clipping.relatedSlug}`}
                        className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-[#263746] transition-colors hover:border-[#ED6439] hover:text-[#ED6439]"
                      >
                        Read Story
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ======================================================
          TRAINING CALENDAR SECTION
          ====================================================== */}
      <Section eyebrow="Training calendar" title="Programmes we run through the year." tone="sand">
        <div className="overflow-x-auto rounded-[1.75rem] border border-border bg-card shadow-soft">
          <table className="w-full min-w-[640px] text-left text-[14.5px]">
            <thead className="bg-sand text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <tr>
                <th className="px-6 py-4">Programme</th>
                <th className="px-6 py-4">Typical duration</th>
                <th className="px-6 py-4">Mode</th>
                <th className="px-6 py-4">Run by</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              {[
                ["Bedside Assistant Course", "3 months", "In person", "NMT"],
                [
                  "Dementia & Geriatric Care Training",
                  "Batch-based",
                  "Hybrid",
                  "Nightingale Empowerment Foundation",
                ],
                ["Family Caregiver Training", "2 days", "In person", "NMT"],
                [
                  "Lifesaving Services (CPR & First Aid)",
                  "1 day",
                  "In person",
                  "Nightingale Empowerment Foundation",
                ],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className="px-6 py-4 font-semibold text-ink">{row[0]}</td>
                  <td className="px-6 py-4">{row[1]}</td>
                  <td className="px-6 py-4">{row[2]}</td>
                  <td className="px-6 py-4">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-[13px] text-muted-foreground">
          Exact upcoming batch dates will be added once shared by the client — write to
          training@nightingaleseldercare.com to ask about the next intake.
        </p>
      </Section>

      {/* ======================================================
          PRESS RELEASES & ARTICLES WITH IMAGE THUMBNAILS
          ====================================================== */}
      <Section eyebrow="Press releases" title="From the press room.">
        <CardGrid cols={3}>
          <InfoCard
            icon={Newspaper}
            title="NMT in the News"
            body="Coverage of Nightingales Medical Trust in national and regional press."
          />
          <InfoCard
            icon={Newspaper}
            title="Press Statements"
            delay={100}
            body="Official statements and announcements from the Trust."
          />
          <InfoCard
            icon={Newspaper}
            title="Media Enquiries"
            delay={200}
            body="Journalists can reach our communications team at contact@nightingaleseldercare.com."
          />
        </CardGrid>

        <div className="mt-14">
          <h3 className="text-[22px] font-semibold text-ink">Latest Coverage</h3>
          <p className="mt-2 text-[14.5px] text-muted-foreground">
            A selection of press coverage on NMT's work in elder and dementia care over the years.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pressArticles.map((article, i) => (
              <a
                key={article.slug}
                href={`/news-events/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#ED6439]/40 hover:shadow-lg sm:p-7"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* IF ARTICLE HAS A NEWSPAPER CLIPPING IMAGE, SHOW PREVIEW */}
                {article.image && (
                  <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl bg-[#FAF6F0] border border-border/50">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#263746] shadow-sm backdrop-blur-sm">
                      <ImageIcon className="h-3 w-3 text-[#ED6439]" />
                      Original Newspaper Clipping
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-primary">
                  <Newspaper className="h-4 w-4" />
                  <span>{article.publication}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground normal-case tracking-normal">
                    {article.date}
                  </span>
                </div>

                <h4 className="mt-3 text-[18px] font-semibold leading-snug text-ink transition-colors group-hover:text-[#ED6439]">
                  {article.title}
                </h4>

                {article.byline && (
                  <p className="mt-1 text-[12.5px] text-muted-foreground">
                    By {article.byline}
                  </p>
                )}

                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-[13.5px] font-semibold text-primary">
                  Read full article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ======================================================
          LIGHTBOX MODAL FOR FULL-SIZE NEWSPAPER CLIPPINGS
          ====================================================== */}
      {selectedClipping && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
          onClick={() => setSelectedClipping(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-border bg-sand px-5 py-4 sm:px-6">
              <div className="min-w-0 pr-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ED6439]">
                  <Newspaper className="h-3.5 w-3.5" />
                  <span>{selectedClipping.publication}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground font-medium normal-case tracking-normal">
                    {selectedClipping.date}
                  </span>
                </div>
                <h3 className="mt-1 truncate font-display text-base font-bold text-[#263746] sm:text-lg">
                  {selectedClipping.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedClipping(null)}
                aria-label="Close modal"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#263746] shadow-sm transition-colors hover:bg-[#ED6439] hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* MODAL IMAGE DISPLAY (SCROLLABLE FOR HIGH RES SCANS) */}
            <div className="relative flex-1 overflow-y-auto bg-[#1a202c]/5 p-4 sm:p-6 text-center">
              <img
                src={selectedClipping.image}
                alt={selectedClipping.title}
                className="mx-auto max-h-[68vh] w-auto rounded-lg object-contain shadow-md"
              />
            </div>

            {/* MODAL FOOTER */}
            <div className="flex flex-col gap-3 border-t border-border bg-white px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-xs text-muted-foreground sm:text-sm sm:max-w-xl">
                {selectedClipping.summary}
              </p>

              <div className="flex items-center gap-2">
                {selectedClipping.relatedSlug && (
                  <a
                    href={`/news-events/${selectedClipping.relatedSlug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#ED6439] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#d95730]"
                  >
                    Read Article Story
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedClipping(null)}
                  className="rounded-lg border border-border px-3.5 py-2 text-xs font-semibold text-[#263746] hover:bg-sand"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Newsletter />
    </SiteLayout>
  );
}