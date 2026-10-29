import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Brain,
  Home,
  Leaf,
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  Plus,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { AccessibilityWidget } from "@/components/site/AccessibilityWidget";
import { Reveal } from "@/components/site/Reveal";

const services = [
  {
    number: "01",
    title: "Memory Clinic",
    description:
      "Support for older adults experiencing memory concerns, with assessment and guidance for families.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Residential Care",
    description:
      "Care and support for persons living with dementia, Parkinson's, stroke-related conditions and other care needs.",
    icon: Home,
  },
  {
    number: "03",
    title: "Day Care Centre",
    description:
      "A supportive daytime environment designed around engagement, activities and individual care needs.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Dementia & Caregiver Training",
    description:
      "Information and guidance to help families and caregivers better understand dementia and caregiving.",
    icon: HeartHandshake,
  },
];

const faqs = [
  {
    question: "What services are offered at NCAA?",
    answer:
      "The previous website lists a memory clinic, residential care, a day care centre, and dementia and caregiver training. Please confirm the current services with the organisation.",
  },
  {
    question: "What is the admission process?",
    answer:
      "Contact the centre to discuss the person's care needs, assessment requirements, availability and admission procedure.",
  },
  {
    question: "What kind of rooms are available?",
    answer:
      "Please contact the centre directly for current room options, facilities and charges.",
  },
  {
    question: "What are the requirements for admission?",
    answer:
      "The requirements may depend on the person's medical history and care needs. The centre can explain the current documentation and assessment process.",
  },
  {
    question: "What is the daily routine for residents?",
    answer:
      "Ask the centre about its current daily schedule, activities, meals and individual care arrangements.",
  },
  {
    question: "Who can be admitted to NCAA?",
    answer:
      "The previous website mentions support for people living with dementia, Parkinson's, stroke and other conditions. Confirm eligibility directly with the centre.",
  },
];

const H2 =
  "font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.9rem]";
const BODY = "text-[15.5px] leading-relaxed text-muted-foreground sm:text-base";

function NcaaPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <AccessibilityWidget />

      <main id="main">
        {/* ================= HERO ================= */}
        <section className="relative isolate overflow-hidden bg-ink py-24 text-background sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-gradient-warm opacity-25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-gradient-violet opacity-30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:26px_26px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <span className="section-eyebrow">NIGHTINGALES MEDICAL TRUST</span>

              <div className="mt-6 flex items-start gap-4 sm:gap-5">
                <span className="mt-1 h-[88px] w-1 shrink-0 rounded-full bg-gradient-to-b from-[#F5A623] to-[#E85A3F] sm:h-[120px] sm:w-1.5 lg:h-[150px]" />
                <h1 className="max-w-4xl font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4.2rem]">
                  Nightingales Centre for
                  <br />
                  <span className="bg-gradient-to-r from-[#F5A623] to-[#FF8A5B] bg-clip-text text-transparent">
                    Ageing &amp; Alzheimer&apos;s
                  </span>
                </h1>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-2xl text-[15.5px] leading-relaxed text-background/80 sm:text-[17px]">
                Dedicated support for older adults, people living with dementia,
                and the families who care for them.
              </p>

              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E85A3F] to-[#F5A623] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(232,90,63,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(232,90,63,0.45)]"
                >
                  Explore Our Services
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2.2}
                  />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A623]/70 hover:bg-white/15"
                >
                  Contact the Centre
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="relative overflow-hidden bg-gradient-dawn py-20 lg:py-28">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-warm opacity-10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-gradient-violet opacity-10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
            <Reveal>
              <div className="border-l-4 border-primary pl-5 sm:pl-6">
                <span className="section-eyebrow">ABOUT NCAA</span>
                <h2 className={`mt-6 ${H2}`}>
                  Ageing with dignity.
                  <br />
                  <span className="text-gradient-warm">Living with care.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-6 rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft sm:p-9">
                <p className={BODY}>
                  Nightingales Centre for Ageing &amp; Alzheimer&apos;s (NCAA) is
                  part of Nightingales Medical Trust. The centre&apos;s previous
                  website describes services for older adults and people with
                  age-related care needs.
                </p>

                <p className={BODY}>
                  Families can contact the centre to learn more about its
                  current services, assessment process and care arrangements.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section
          id="services"
          className="relative overflow-hidden bg-sand py-20 lg:py-28"
        >
          <div className="pointer-events-none absolute -left-28 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gradient-violet opacity-15 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="section-eyebrow mx-auto">OUR SERVICES</span>
              <h2 className={`mt-6 ${H2}`}>Support for every stage of care</h2>

              <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-primary/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
                <span className="h-px w-12 bg-primary/40" />
              </div>

              <p className={`mx-auto mt-8 max-w-2xl ${BODY}`}>
                Learn about the services listed on the previous NCAA website.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
              {services.map((service, i) => (
                <Reveal key={service.number} delay={(i % 2) * 110}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-9">
                    <span className="pointer-events-none absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#E85A3F] via-[#F5A623] to-[#7C3AED] transition-transform duration-500 group-hover:scale-x-100" />
                    <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-warm opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />

                    <div className="relative flex items-center justify-between">
                      <span
                        className="grid w-fit place-items-center rounded-2xl bg-primary-soft p-3.5 text-primary-deep transition-transform duration-300 group-hover:scale-105"
                        aria-hidden="true"
                      >
                        <service.icon className="h-6 w-6" strokeWidth={1.5} />
                      </span>

                      <span className="font-display text-base font-extrabold text-muted-foreground/40">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="relative mt-6 font-display text-lg font-bold text-ink sm:text-xl">
                      {service.title}
                    </h3>

                    <p className="relative mt-3 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      className="relative mt-6 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-primary-deep"
                    >
                      Learn more
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={2}
                      />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-background shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)] sm:px-12 lg:px-16 lg:py-16">
                <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-warm opacity-25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gradient-violet opacity-25 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:26px_26px]" />

                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                  <div className="max-w-2xl">
                    <span className="section-eyebrow">WE&apos;RE HERE TO HELP</span>
                    <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                      Looking for care or guidance?
                    </h2>
                    <p className="mt-5 text-[15.5px] leading-relaxed text-background/75 sm:text-[17px]">
                      Connect with the centre to discuss your family&apos;s
                      requirements and available care options.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E85A3F] to-[#F5A623] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(232,90,63,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(232,90,63,0.45)] sm:w-auto"
                  >
                    Get in Touch
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={2.2}
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section
          id="faqs"
          className="relative overflow-hidden bg-sand py-20 lg:py-28"
        >
          <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-gradient-violet opacity-10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <span className="section-eyebrow">FAQs</span>
              <h2 className={`mt-6 ${H2}`}>Frequently asked questions</h2>
              <p className={`mt-5 ${BODY}`}>
                Find answers to common questions about care, admission and the
                centre&apos;s services.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-300 open:border-primary/30 open:shadow-lift"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-[15px] font-bold leading-snug text-ink transition-colors duration-300 marker:hidden group-open:text-primary-deep [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-deep transition-all duration-300 group-open:rotate-45 group-open:bg-[#7C3AED] group-open:text-white">
                        <Plus className="h-4 w-4" strokeWidth={2.2} />
                      </span>
                    </summary>
                    <p className="px-6 pb-6 pr-14 text-[14.5px] leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="relative overflow-hidden bg-gradient-dawn py-20 lg:py-28"
        >
          <div className="pointer-events-none absolute -left-28 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="section-eyebrow mx-auto">CONTACT NCAA</span>
              <h2 className={`mt-6 ${H2}`}>Connect with our team</h2>

              <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-primary/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
                <span className="h-px w-12 bg-primary/40" />
              </div>

              <p className={`mx-auto mt-8 max-w-2xl ${BODY}`}>
                Please confirm the following contact details with the
                organisation before publishing.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <Reveal>
                <article className="group flex h-full min-w-0 flex-col items-start rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-8">
                  <span
                    className="grid w-fit place-items-center rounded-2xl bg-primary-soft p-3.5 text-primary-deep transition-transform duration-300 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <MapPin className="h-6 w-6" strokeWidth={1.5} />
                  </span>

                  <h3 className="mt-6 font-display text-lg font-bold text-ink">
                    Visit the Centre
                  </h3>

                  <p className="mt-3 flex-1 break-words text-[14.5px] leading-relaxed text-muted-foreground">
                    8P6, Kasturinagar, 3rd A Cross Road, Banasawadi, Bengaluru,
                    Karnataka 560043
                  </p>

                  <a
                    className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-deep"
                    href="https://www.google.com/maps/search/?api=1&query=8P6%2C%20Kasturinagar%2C%203rd%20A%20Cross%20Road%2C%20Banasawadi%2C%20Bengaluru%2C%20Karnataka%20560043"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Maps ↗
                  </a>
                </article>
              </Reveal>

              <Reveal delay={110}>
                <article className="group flex h-full min-w-0 flex-col items-start rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-8">
                  <span
                    className="grid w-fit place-items-center rounded-2xl bg-primary-soft p-3.5 text-primary-deep transition-transform duration-300 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <Phone className="h-6 w-6" strokeWidth={1.5} />
                  </span>

                  <h3 className="mt-6 font-display text-lg font-bold text-ink">
                    Call the Centre
                  </h3>

                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">
                    Contact the team for information about services, visiting
                    arrangements and admission enquiries.
                  </p>

                  <a
                    className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-deep"
                    href="tel:+918042426565"
                  >
                    +91 80 4242 6565
                  </a>
                </article>
              </Reveal>

              <Reveal delay={220} className="md:col-span-2 lg:col-span-1">
                <article className="group flex h-full min-w-0 flex-col items-start rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-8">
                  <span
                    className="grid w-fit place-items-center rounded-2xl bg-primary-soft p-3.5 text-primary-deep transition-transform duration-300 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <Mail className="h-6 w-6" strokeWidth={1.5} />
                  </span>

                  <h3 className="mt-6 font-display text-lg font-bold text-ink">
                    Email the Centre
                  </h3>

                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">
                    Send your enquiry to the email address used on the previous
                    website.
                  </p>

                  <a
                    className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-deep"
                    href="mailto:pro@nightingaleseldercare.com"
                  >
                    Send an email ↗
                  </a>
                </article>
              </Reveal>
            </div>

            <Reveal delay={150} className="mt-8">
              <div className="h-[280px] overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-lift sm:h-[340px] lg:h-[390px]">
                <iframe
                  className="block h-full w-full border-0"
                  title="Map of the NCAA address in Bengaluru"
                  src="https://maps.google.com/maps?q=8P6%2C%20Kasturinagar%2C%20Banasawadi%2C%20Bengaluru%20560043&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export const Route = createFileRoute("/ncaa")({
  head: () => ({
    meta: [
      {
        title: "Nightingales Centre for Ageing & Alzheimer's | NCAA",
      },
      {
        name: "description",
        content:
          "Learn about Nightingales Centre for Ageing & Alzheimer's, its listed care services, FAQs and contact information in Bengaluru.",
      },
      {
        property: "og:title",
        content: "Nightingales Centre for Ageing & Alzheimer's",
      },
      {
        property: "og:description",
        content:
          "Explore NCAA services and contact the centre for information about ageing and dementia care.",
      },
    ],
  }),
  component: NcaaPage,
});