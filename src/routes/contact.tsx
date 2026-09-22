import { useState } from "react";
import emailjs from "@emailjs/browser";
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
import contactHeroImage from "../assets/contact/contact-hero.webp";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import type { ReactNode } from "react";

const title =
  "Contact Nightingales Medical Trust — Centres, Helplines & Enquiries";

const description =
  "Reach Nightingales Medical Trust: head office address, centre locations, helpline numbers, WhatsApp, email and an online enquiry form.";

const WHATSAPP_NUMBER = "919035025438"; // +91 90350 25438, no + or spaces for wa.me
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const EMAILJS_SERVICE_ID = "service_j9tymph";
const EMAILJS_CONTACT_TEMPLATE_ID = "template_mp0i3mc";
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = "template_hgaw8ho";
const EMAILJS_PUBLIC_KEY = "T1bLrv0aySSP-mrpui5cf";

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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "Dementia care",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setSending(true);
  setSent(false);
  setError("");

  try {
    const formBody = new URLSearchParams();

    formBody.append("name", formData.name);
    formBody.append("email", formData.email);
    formBody.append("phone", formData.phone);
    formBody.append("writingAbout", formData.topic);
    formBody.append("message", formData.message);

    await fetch(
      "https://script.google.com/a/macros/nightingaleseldercare.com/s/AKfycbwY1-z5hG5_LOtCHwvBeFukuJnjl0nHvqJ7RJt0ToyizS-hR9CsEy-gqFKmtfTBzBxYMw/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      }
    );

    setSent(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      topic: "Dementia care",
      message: "",
    });

  } catch (err) {
    console.error("Form submission error:", err);
    setError("Something went wrong. Please try again.");
  } finally {
    setSending(false);
  }
};

  return (
    <SiteLayout>

      {/* ==================================================
    HERO SECTION
================================================== */}

<section className="relative isolate w-full overflow-hidden bg-[#263746]">
  <div className="relative h-[320px] w-full sm:h-[400px] lg:h-[480px]">
    {/* Hero Banner Image */}
    <img
      src={contactHeroImage}
      alt="Contact Nightingales Medical Trust"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    {/* Light Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#17232B]/55 via-[#17232B]/20 to-transparent" />

    {/* Hero Heading */}
    <div className="absolute inset-0 z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
      <Reveal>
        <h1 className="font-display text-5xl font-black tracking-[-0.045em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.3)] sm:text-6xl lg:text-8xl">
          Contact Us
        </h1>
      </Reveal>
    </div>
  </div>
</section>


      {/* ==================================================
          CONTACT — REACH US
          Divided info panel (not a card grid) so it reads
          differently from the Centres grid below.
      ================================================== */}

      <section className="w-full bg-[#FFFCF7] py-16 sm:py-20 lg:py-24">

        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">

          <Reveal>

            <div className="mb-10 max-w-4xl sm:mb-14">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E15925] sm:text-sm">
                Reach us
              </p>

              {/* <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#263746] sm:text-4xl lg:text-5xl">
                Head office, helplines and email.
              </h2> */}

              <div className="mt-5 h-1 w-16 bg-[#F29000]" />

            </div>

          </Reveal>


          {/* CONTACT INFO PANEL */}

          <Reveal delay={90}>

            <div
              className="
                grid
                grid-cols-1
                divide-y
                divide-[#263746]/10
                border
                border-[#263746]/10
                bg-white
                sm:grid-cols-2
                sm:divide-x
                sm:divide-y-0
                lg:grid-cols-4
              "
            >

              <ContactInfoCard
                icon={Building2}
                title="Head Office"
                body="Nightingales Medical Trust, 8P6, Kasturinagar, 3rd A Cross Rd, East of NGEF Layout, Banasawadi, Bengaluru, Karnataka 560043."
              />

              <ContactInfoCard
                icon={PhoneCall}
                title="Phone (24 hours)"
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
                body="Message us on +91 90350 25438 for dementia care guidance, available every day."
                href={WHATSAPP_LINK}
                cta="Chat on WhatsApp"
                highlight
              />

              <ContactInfoCard
                icon={Mail}
                title="Email"
                links={[
                  {
                    text: "contact@nightingaleseldercare.com",
                    href: "mailto:contact@nightingaleseldercare.com",
                  },
                  // {
                  //   text: "secretary@nightingaleseldercare.com",
                  //   href: "mailto:secretary@nightingaleseldercare.com",
                  // },
                ]}
              />

            </div>

          </Reveal>

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

              <div className="mt-5 h-1 w-16 bg-[#17232B]" />

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
                    hover:border-[#17232B]/60
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
                      text-[#17232B]
                      transition-colors
                      duration-300
                      group-hover:bg-[#17232B]
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

              <div className="mt-5 h-1 w-16 bg-[#17232B]" />

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
                  Send An Enquiry.
                </h2>
                <h5 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#263746] sm:text-4xl lg:text-5xl">
                  Request to call back
                </h5>
                <div className="mt-5 h-1 w-16 bg-[#17232B]" />

                <p className="mt-6 text-base leading-8 text-[#526574] sm:text-lg">
                  Tell us how Nightingales Medical Trust can help, and our team will get back to you.
                </p>

              </div>

            </Reveal>


            {/* FORM */}

            <Reveal delay={120}>

              <form
                onSubmit={handleSubmit}
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

                <Field
                  label="Full name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <Field
                  label="Phone"
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                />

                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />


                <div className="flex min-w-0 flex-col gap-2">

                  <label
                    htmlFor="topic"
                    className="text-sm font-bold text-[#263746]"
                  >
                    I am writing about
                  </label>

                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    required
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
                      "Other matters",
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
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
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
                  disabled={sending}
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

                  {sending
                    ? "Sending..."
                    : sent
                      ? "Thank you — we'll be in touch"
                      : "Send enquiry"}

                  <ArrowUpRight className="h-4 w-4" />

                </button>

                {error && (
                  <p className="text-sm font-medium text-red-600 sm:col-span-2">
                    {error}
                  </p>
                )}

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
    Renders as a plain block, or — when `href` is passed
    (WhatsApp) — as a fully clickable link that opens the
    chat directly. `highlight` gives it the coral CTA
    treatment instead of a plain white block.
================================================== */

function ContactInfoCard({
  icon: Icon,
  title,
  body,
  links,
  href,
  cta,
  highlight = false,
}: {
  icon: LucideIcon;
  title: string;
  body?: ReactNode;
  links?: {
    text: string;
    href: string;
  }[];
  href?: string;
  cta?: string;
  highlight?: boolean;
}) {

  const Wrapper = href ? "a" : "div";

  const wrapperProps = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${title} — opens in a new tab`,
      }
    : {};

  return (

    <Wrapper
      {...wrapperProps}
      className={`
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        p-8
        transition-colors
        duration-300
        ${highlight
          ? "bg-[#E15925] text-white hover:bg-[#C94B1E]"
          : "bg-white hover:bg-[#FFFCF7]"}
        ${href ? "cursor-pointer" : ""}
      `}
    >

      {/* ICON */}

      <span
        className={`
          flex
          h-12
          w-12
          w-fit
          items-center
          justify-center
          transition-colors
          duration-300
          ${highlight
            ? "bg-white/15 text-white"
            : "bg-[#FFF1D6] text-[#F29000] group-hover:bg-[#F29000] group-hover:text-white"}
        `}
      >

        <Icon className="h-6 w-6" strokeWidth={1.6} />

      </span>


      {/* TITLE */}

      <h3
        className={`
          mt-6
          font-display
          text-xl
          font-extrabold
          leading-snug
          ${highlight ? "text-white" : "text-[#263746]"}
        `}
      >
        {title}
        {href ? (
          <ArrowUpRight
            className={`
              ml-1
              inline-block
              h-4
              w-4
              align-top
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              ${highlight ? "text-white" : "text-[#E15925]"}
            `}
          />
        ) : null}
      </h3>


      {/* BODY */}

      {body ? (

        <p
          className={`
            mt-4
            text-sm
            leading-7
            ${highlight ? "text-white/90" : "text-[#526574]"}
          `}
        >
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
    onClick={(e) => e.stopPropagation()}
    className="block min-w-0 break-words text-[#526574] transition-colors duration-300 hover:text-[#E15925]"
  >
    {link.text}
  </a>
))}

         

        </div>

      ) : null}


      {/* CTA */}

      {cta ? (

        <span
          className="
            mt-6
            inline-flex
            w-fit
            items-center
            gap-2
            text-sm
            font-bold
            text-white
          "
        >
          {cta}
        </span>

      ) : null}

    </Wrapper>

  );
}


/* ==================================================
    FORM FIELD
================================================== */

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
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