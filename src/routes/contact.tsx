import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Send,
  ArrowUpRight,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const title =
  "Contact Nightingales Medical Trust — Centres, Helplines & Enquiries";

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

      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <PageHero
        eyebrow="Contact us"
        title="Contact Us"
        intro="Whether you need dementia care, want to volunteer or simply have a question — someone here will answer."
      />


      {/* ==================================================
          CONTACT — REACH US
      ================================================== */}

      <section className="w-full bg-[#E15925] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">

          <Reveal>

            <div className="mb-10 max-w-4xl sm:mb-14">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75 sm:text-sm">
                Reach us
              </p>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Head office, helplines and email.
              </h2>

              <div className="mt-5 h-1 w-16 bg-[#F29000]" />

            </div>

          </Reveal>


          {/* CONTACT CARDS */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

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
                {
                  text: "+91 80 4242 6565",
                  href: "tel:+918042426565",
                },
                {
                  text: "Elders Helpline 1090",
                  href: "tel:1090",
                },
                {
                  text: "National Helpline 14567",
                  href: "tel:14567",
                },
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

          </div>

        </div>

      </section>


      {/* ==================================================
          OUR CENTRES
      ================================================== */}

      <section className="w-full bg-[#FFF8EE] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">

          <Reveal>

            <div className="mb-10 max-w-4xl sm:mb-14">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E15925] sm:text-sm">
                Our centres
              </p>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#263746] sm:text-4xl lg:text-5xl">
                Care, protection and training centres across Bengaluru & Karnataka.
              </h2>

              <div className="mt-5 h-1 w-16 bg-[#F29000]" />

            </div>

          </Reveal>


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

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
            ].map((centre, index) => (

              <Reveal key={centre} delay={(index % 3) * 90}>

                <article
                  className="
                    group
                    flex
                    h-full
                    items-start
                    gap-4
                    border
                    border-[#E15925]/15
                    bg-white
                    p-6
                    shadow-[0_12px_35px_rgba(38,55,70,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#F29000]/60
                    hover:shadow-[0_18px_45px_rgba(38,55,70,0.12)]
                  "
                >

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      bg-[#FFF1D6]
                      text-[#F29000]
                      transition-colors
                      duration-300
                      group-hover:bg-[#F29000]
                      group-hover:text-white
                    "
                  >
                    <MapPin className="h-5 w-5" strokeWidth={1.8} />
                  </span>

                  <span className="pt-1 text-sm font-semibold leading-6 text-[#263746]">
                    {centre}
                  </span>

                </article>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          FIND US
      ================================================== */}

      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">

          <Reveal>

            <div className="mb-10 max-w-4xl sm:mb-12">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E15925] sm:text-sm">
                Find us
              </p>

              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#263746] sm:text-4xl lg:text-5xl">
                On the map
              </h2>

              <div className="mt-5 h-1 w-16 bg-[#F29000]" />

            </div>

          </Reveal>


          <Reveal>

            <div className="overflow-hidden border border-[#E15925]/15 bg-[#FFF8EE] p-2 shadow-[0_20px_60px_rgba(38,55,70,0.1)] sm:p-3">

              <iframe
                title="Nightingales Medical Trust head office location"
                src="https://www.google.com/maps?q=Kasturinagar,+Banasawadi,+Bengaluru,+Karnataka+560043&output=embed"
                loading="lazy"
                className="h-[320px] w-full border-0 sm:h-[420px] lg:h-[500px]"
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* ==================================================
          ENQUIRY FORM
      ================================================== */}

      <section
        id="form"
        className="w-full bg-[#FFF8EE] py-16 sm:py-20 lg:py-24"
      >

        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">

          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* LEFT CONTENT */}

            <Reveal>

              <div className="max-w-xl">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E15925] sm:text-sm">
                  Write to us
                </p>

                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#263746] sm:text-4xl lg:text-5xl">
                  Send an enquiry.
                </h2>

                <div className="mt-5 h-1 w-16 bg-[#F29000]" />

                <p className="mt-6 text-base leading-8 text-[#526574] sm:text-lg">
                  Tell us how Nightingales Medical Trust can help, and our team will get back to you.
                </p>

              </div>

            </Reveal>


            {/* FORM */}

            <Reveal delay={120}>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="
                  grid
                  min-w-0
                  gap-5
                  border
                  border-[#E15925]/15
                  bg-white
                  p-6
                  shadow-[0_20px_60px_rgba(38,55,70,0.08)]
                  sm:grid-cols-2
                  sm:p-8
                  lg:p-10
                "
              >

                <Field label="Full name" id="name" />

                <Field label="Phone" id="phone" type="tel" />

                <Field label="Email" id="email" type="email" />


                <div className="flex min-w-0 flex-col gap-2">

                  <label
                    htmlFor="topic"
                    className="text-sm font-bold text-[#263746]"
                  >
                    I am writing about
                  </label>

                  <select
                    id="topic"
                    className="
                      min-w-0
                      rounded-none
                      border
                      border-[#263746]/15
                      bg-[#FFFCF7]
                      px-4
                      py-3.5
                      text-sm
                      text-[#263746]
                      outline-none
                      transition-colors
                      focus:border-[#F29000]
                    "
                  >

                    {[
                      "Dementia care",
                      "Donation",
                      "Volunteering",
                      "Internship",
                      "CSR partnership",
                      "Something else",
                    ].map((option) => (
                      <option key={option}>{option}</option>
                    ))}

                  </select>

                </div>


                <div className="flex min-w-0 flex-col gap-2 sm:col-span-2">

                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-[#263746]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us how we can help…"
                    className="
                      min-w-0
                      resize-y
                      rounded-none
                      border
                      border-[#263746]/15
                      bg-[#FFFCF7]
                      px-4
                      py-3.5
                      text-sm
                      text-[#263746]
                      outline-none
                      transition-colors
                      focus:border-[#F29000]
                    "
                  />

                </div>


                <button
                  type="submit"
                  className="
                    inline-flex
                    w-fit
                    items-center
                    justify-center
                    gap-2
                    bg-[#E15925]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_25px_rgba(225,89,37,0.2)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#C94B1E]
                    hover:shadow-[0_15px_35px_rgba(225,89,37,0.3)]
                    sm:col-span-2
                  "
                >

                  <Send className="h-4 w-4" strokeWidth={1.9} />

                  {sent
                    ? "Thank you — we'll be in touch"
                    : "Send enquiry"}

                  <ArrowUpRight className="h-4 w-4" />

                </button>

              </form>

            </Reveal>

          </div>

        </div>

      </section>

    </SiteLayout>
  );
}


/* ==================================================
    CONTACT INFO CARD
================================================== */

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
  links?: {
    text: string;
    href: string;
  }[];
  delay?: number;
}) {

  return (

    <Reveal delay={delay} className="min-w-0">

      <article
        className="
          group
          relative
          flex
          h-full
          min-w-0
          flex-col
          overflow-hidden
          border
          border-white/40
          bg-white
          p-6
          shadow-[0_15px_40px_rgba(38,30,20,0.12)]
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-[0_22px_55px_rgba(38,30,20,0.2)]
          sm:p-7
          lg:p-8
        "
      >

        {/* ICON */}

        <span
          className="
            flex
            h-12
            w-12
            w-fit
            items-center
            justify-center
            bg-[#FFF1D6]
            text-[#F29000]
            transition-all
            duration-300
            group-hover:bg-[#F29000]
            group-hover:text-white
          "
        >

          <Icon className="h-6 w-6" strokeWidth={1.6} />

        </span>


        {/* TITLE */}

        <h3 className="mt-6 font-display text-xl font-extrabold leading-snug text-[#263746]">
          {title}
        </h3>


        {/* BODY */}

        {body ? (

          <p className="mt-4 text-sm leading-7 text-[#526574]">
            {body}
          </p>

        ) : null}


        {/* LINKS */}

        {links?.length ? (

          <div className="mt-5 space-y-3 text-sm leading-6">

            {links.map((link) => (

              <a
                key={link.href}
                href={link.href}
                className="
                  block
                  min-w-0
                  break-words
                  text-[#526574]
                  transition-colors
                  duration-300
                  hover:text-[#E15925]
                "
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


/* ==================================================
    FORM FIELD
================================================== */

function Field({
  label,
  id,
  type = "text",
}: {
  label: string;
  id: string;
  type?: string;
}) {

  return (

    <div className="flex min-w-0 flex-col gap-2">

      <label
        htmlFor={id}
        className="text-sm font-bold text-[#263746]"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        className="
          min-w-0
          rounded-none
          border
          border-[#263746]/15
          bg-[#FFFCF7]
          px-4
          py-3.5
          text-sm
          text-[#263746]
          outline-none
          transition-colors
          focus:border-[#F29000]
        "
      />

    </div>

  );
}