import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, Newspaper, BookOpen, Images } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, CardGrid, InfoCard, StatRow, DownloadList } from "@/components/site/Section";
import { Testimonials } from "@/components/home/Testimonials";
import { Blogs } from "@/components/home/Blogs";

const title = "Impact & Resources — Reports, Stories, Videos & Media | NMT";
const description =
  "Our impact in numbers and stories, plus annual reports, brochures, newsletters, research publications, videos, press releases and the NMT blog.";

export const Route = createFileRoute("/impact")({
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
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Impact & resources"
        title="Impact & Resources"
        intro="What decades of care add up to — and every report, story, video and publication behind those numbers."
      />

      <Section eyebrow="Our impact" title="The numbers behind the care." tone="sand">
        <StatRow
          stats={[
            { k: "5,047", v: "Persons with dementia helped" },
            { k: "3,42,338", v: "Elders in distress assisted" },
            { k: "5,217", v: "Senior citizens placed in jobs" },
            { k: "800+", v: "Elders benefiting every day, 50% marginalised" },
          ]}
        />
      </Section>

      <Section eyebrow="Stories & case studies" title="Behind every number, a person.">
        <CardGrid cols={3}>
          {[
            {
              title: "Case study — Early diagnosis",
              body: "How a memory clinic screening at 62 gave one family eight more good years together.",
            },
            {
              title: "Case study — Sandhya Kirana",
              body: "Restoring pension, medicines and dignity to elders living alone in a Bengaluru slum.",
            },
            {
              title: "Case study — Helpline 1090",
              body: "An abuse intervention that reunited an elder with safe housing and legal protection.",
            },
          ].map((s, i) => (
            <InfoCard key={s.title} icon={BookOpen} title={s.title} body={s.body} delay={i * 100} />
          ))}
        </CardGrid>
      </Section>

      <Testimonials />

      <Section
        eyebrow="Publications"
        title="Annual reports, brochures, newsletters & research"
        tone="sand"
      >
        <DownloadList
          files={[
            {
              name: "Latest Newsletter",
              meta: "PDF",
              href: "https://nightingaleseldercare.com/assets/files/Newsletter_December_final.pdf",
            },
            {
              name: "Organisation Brochure",
              meta: "PDF — all NMT programmes",
              href: "https://nightingaleseldercare.com/assets/files/NMT-Brochure.pdf",
            },
            { name: "Smriti Gram Brochure", meta: "PDF · coming soon" },
            { name: "Annual Report", meta: "PDF · coming soon" },
            { name: "Research: Dementia prevalence in urban Karnataka", meta: "PDF · coming soon" },
            { name: "Research: Caregiver burden study", meta: "PDF · coming soon" },
          ]}
        />
      </Section>

      <Section eyebrow="Videos" title="Watch our work.">
        <CardGrid cols={4}>
          {["Awareness Videos", "Training Videos", "The NMT Story", "Smriti Gram Film"].map(
            (v, i) => (
              <InfoCard
                key={v}
                icon={PlayCircle}
                title={v}
                body="Video placeholder — final films will be embedded once shared."
                delay={(i % 4) * 90}
              />
            ),
          )}
        </CardGrid>
      </Section>

      <Section eyebrow="Media centre" title="Press releases, coverage & photo gallery" tone="sand">
        <CardGrid cols={3}>
          <InfoCard
            icon={Newspaper}
            title="Press Releases"
            items={[
              "Smriti Gram phase 2 milestone",
              "World Alzheimer's Month campaign",
              "Helpline 14567 expansion",
            ]}
          />
          <InfoCard
            icon={Newspaper}
            title="Media Coverage"
            delay={100}
            items={[
              "National dailies on dementia care",
              "Television features on Smriti Gram",
              "Radio and podcast interviews",
            ]}
          />
          <InfoCard
            icon={Images}
            title="Photo Gallery"
            delay={200}
            body="Images from centres, camps, training batches and events. Final photographs to be supplied by the client."
          />
        </CardGrid>
      </Section>

      <Blogs />
    </SiteLayout>
  );
}
