import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Newspaper, ArrowUpRight, Link } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, CardGrid, InfoCard } from "@/components/site/Section";
import { Events } from "@/components/home/Events";
import { Newsletter } from "@/components/home/Newsletter";
import { pressArticles } from "@/data/pressArticles";
const title = "News & Events — Training Calendar and Press Room | NMT";
const description =
  "Upcoming and recent Nightingales Medical Trust events, the caregiver training calendar and the latest press releases from our team.";

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


function NewsEventsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="News & events"
        title="News & Events"
        intro="Memory walks, training batches, open days and announcements — everything happening across our centres."
      />

      <Events />

      <Section eyebrow="Recent events" title="What we've been doing at our centres." tone="sand">
        <CardGrid cols={3}>
          {[
            {
              title: "Free memory screening camps",
              body: "Regular community screening camps held across our centres — details of the next one will be posted here.",
            },
            {
              title: "Caregiver support gatherings",
              body: "Peer-support sessions for family caregivers, held periodically at our day care centres.",
            },
            {
              title: "World Alzheimer's Month activities",
              body: "Awareness walks, talks and activities held across NMT centres every September.",
            },
          ].map((e, i) => (
            <InfoCard
              key={e.title}
              icon={CalendarDays}
              title={e.title}
              body={e.body}
              delay={i * 100}
            />
          ))}
        </CardGrid>
        {/* <p className="mt-6 text-[13px] text-muted-foreground">
          Photographs and write-ups from specific past events will be added once shared by the
          client.
        </p> */}
      </Section>

      <Section eyebrow="Training calendar" title="Programmes we run through the year.">
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

      <Section eyebrow="Press releases" title="From the press room." tone="sand">
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
  className="group flex flex-col rounded-[1.75rem] border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-md"
  style={{ animationDelay: `${i * 60}ms` }}
>
    <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-primary">
      <Newspaper className="h-4 w-4" />

      <span>{article.publication}</span>

      <span className="text-muted-foreground">·</span>

      <span className="text-muted-foreground normal-case tracking-normal">
        {article.date}
      </span>
    </div>

    <h4 className="mt-4 text-[18px] font-semibold leading-snug text-ink">
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

      <Newsletter />
    </SiteLayout>
  );
}