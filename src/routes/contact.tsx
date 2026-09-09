import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Building2, Mail, MapPin, MessageCircle, PhoneCall, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, CardGrid } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const title = "Contact Nightingales Medical Trust — Centres, Helplines & Enquiries";
const description =
  "Reach Nightingales Medical Trust: head office address, centre locations, helpline numbers, WhatsApp, email and an online enquiry form.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact us"
        title="Contact Us"
        intro="Whether you need dementia care, want to volunteer or simply have a question — someone here will answer."
      />

      <Section eyebrow="Reach us" title="Head office, helplines and email." tone="sand">
        <CardGrid cols={4}>
          <ContactInfoCard
            icon={Building2}
            title="Head Office"
            body="Nightingales Medical Trust, 8P6, Kasturinagar, 3rd A Cross Rd, East of NGEF Layout, Banasawadi, Bengaluru, Karnataka 560043."
          />
          <ContactInfoCard
            icon={PhoneCall}
            title="Phone (24 hours)"
            delay={90}
            links={[
              { text: "+91 80 4242 6565", href: "tel:+918042426565" },
              { text: "Elders Helpline 1090", href: "tel:1090" },
              { text: "National Helpline 14567", href: "tel:14567" },
            ]}
          />
          <ContactInfoCard
            icon={MessageCircle}
            title="WhatsApp"
            delay={180}
            body="Message us on +91 80 4242 6565 for dementia care guidance, available every day."
          />
          <ContactInfoCard
            icon={Mail}
            title="Email"
            delay={270}
            links={[
              {
                text: "contact@nightingaleseldercare.com",
                href: "mailto:contact@nightingaleseldercare.com",
              },
              {
                text: "secretary@nightingaleseldercare.com",
                href: "mailto:secretary@nightingaleseldercare.com",
              },
            ]}
          />
        </CardGrid>
      </Section>

      <Section
        id="centres"
        eyebrow="Our centres"
        title="Care, protection and training centres across Bengaluru & Karnataka."
      >
        <CardGrid cols={3}>
          {[
            "Kasturinagar — NCAA residential dementia care & head office",
            "Kolar — ETCM Nightingales Trust Geriatric Unit",
            "Kothanur — Tanya Mathias Elder Care Centre",
            "Jayanagar — Day care for the elderly",
            "RT Nagar — Day care, Jobs 60+ & training",
            "Shanthinagar — Sandhya Kirana day care",
            "Anepalya — Sandhya Suraksha, home for destitute elderly women",
            "Richmond Town — SK Home, home for destitute elderly men",
            "Ali Asker Road — Elders Helpline 1090",
          ].map((c, i) => (
            <Reveal key={c} delay={(i % 3) * 90}>
              <article className="card-soft flex h-full items-start gap-3 p-6">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.8} />
                <span className="text-[14.5px] font-medium text-ink">{c}</span>
              </article>
            </Reveal>
          ))}
        </CardGrid>
      </Section>

      <Section eyebrow="Find us" title="On the map" tone="sand">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-lift">
            <iframe
              title="Nightingales Medical Trust head office location"
              src="https://www.google.com/maps?q=Kasturinagar,+Banasawadi,+Bengaluru,+Karnataka+560043&output=embed"
              loading="lazy"
              className="h-[380px] w-full border-0"
            />
          </div>
        </Reveal>
      </Section>

      <Section id="form" eyebrow="Write to us">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.6rem]">
              Send an enquiry.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
              Tell us how Nightingales Medical Trust can help, and our team will get back to you.
            </p>
          </Reveal>
          <Reveal className="min-w-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid min-w-0 gap-4 rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-10"
            >
              <Field label="Full name" id="name" />
              <Field label="Phone" id="phone" type="tel" />
              <Field label="Email" id="email" type="email" />
              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor="topic" className="text-[13px] font-semibold text-ink">
                  I am writing about
                </label>
                <select
                  id="topic"
                  className="min-w-0 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                >
                  {[
                    "Dementia care",
                    "Donation",
                    "Volunteering",
                    "Internship",
                    "CSR partnership",
                    "Something else",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="flex min-w-0 flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-[13px] font-semibold text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="min-w-0 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="Tell us how we can help…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:w-fit"
              >
                <Send className="h-4 w-4" strokeWidth={1.9} />
                {sent ? "Thank you — we'll be in touch" : "Send enquiry"}
              </button>
            </form>
          </Reveal>
        </div>
      </Section>
    </SiteLayout>
  );
}

function ContactInfoCard({
  icon: Icon,
  title,
  body,
  links,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  body?: string;
  links?: { text: string; href: string }[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="min-w-0">
      <article className="card-soft group relative h-full min-w-0 overflow-hidden p-7 lg:p-8">
        <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-warm opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
        <span className="relative grid w-fit place-items-center rounded-2xl bg-primary-soft p-3.5 text-primary-deep transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <h3 className="relative mt-6 font-display text-[19px] font-semibold leading-snug text-ink">
          {title}
        </h3>
        {body ? (
          <p className="relative mt-4 text-[15px] leading-[1.6] text-muted-foreground">{body}</p>
        ) : null}
        {links?.length ? (
          <div className="relative mt-4 space-y-3 text-[15px] leading-[1.6]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block min-w-0 text-muted-foreground [overflow-wrap:anywhere] transition-colors hover:text-primary-deep"
              >
                {link.text}
              </a>
            ))}
          </div>
        ) : null}
      </article>
    </Reveal>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={id} className="text-[13px] font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="min-w-0 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
