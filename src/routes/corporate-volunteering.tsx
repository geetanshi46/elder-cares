import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Send,
  Phone,
  HeartHandshake,
  ShieldCheck,
  Award,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import corporateVolunteeringImage from "@/assets/corporate-volunteering.jpg";


export const Route = createFileRoute("/corporate-volunteering")({
  component: CorporateVolunteering,
});

const volunteeringOpportunities = [
  "Organising fun day with elders – conduct games, fun activities and special lunch to bring joy in their lives.",
  "Working with elders – participate in income generation activities for the elders at Nightingales Sandhya Kirana – teach new skills and make products along with them to help them earn an income.",
  "Organising an outing for the residents to picnic spots, movies etc.",
  "Teaching computer and smartphone skills to elderly who are keen to learn.",
  "Conducting sessions for elders in our Online Active Ageing programme.",
  "Giving talks in your area of expertise for the elders at our online programs.",
  "Organizing and conducting health camps for elders, vocational skills training session for elders and other such events.",
  "Sponsoring and participating in public events like rallies, awareness walks etc. to create awareness on issues such as elder abuse, rights of elders, dementia etc.",
  "Providing opportunities to sensitize your employees on active ageing, dementia and age care issues and how to manage the needs of their ageing parents.",
];

const faqs = [
  {
    question: "How do I become a Volunteer?",
    answer:
      "All that is required is your interest in serving Senior Citizens. You can volunteer in various levels at Nightingales Medical Trust based on your interest and areas of expertise. To volunteer, contact us at the details given below.",
  },
  {
    question: "What is the commitment required",
    answer:
      "All that we need from our volunteers is their time, love and compassion for elders",
  },
  {
    question: "What do I get?",
    answer:
      "Volunteers are also recognized during annual events of the trust. Along with these we guarantee you satisfaction of body, mind & soul and lot of life lessons.",
  },
];

function CorporateVolunteering() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = "Corporate Volunteering Enquiry";

    const body = [
      "Corporate Volunteering Enquiry",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailto = `mailto:contact@nightingaleseldercare.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <SiteLayout>
      <div className="w-full bg-[#FBF6EC] text-[#263746]">
        {/* ==================================================
            HERO
        ================================================== */}
        <section className="w-full bg-[#E15925]">
          <div className="mx-auto flex min-h-[230px] w-full max-w-7xl items-center justify-center px-5 py-14 sm:min-h-[270px] sm:px-8 lg:min-h-[300px] lg:px-10">
            <Reveal>
              <div className="max-w-5xl text-center">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/75 sm:text-sm">
                  Corporate Volunteering
                </p>

                <h1 className="font-display text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  VOLUNTEERING
CORPORATE TEAM 
                </h1>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================================================
            VOLUNTEERING OPPORTUNITIES
        ================================================== */}
        <section className="w-full bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="mb-9 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                  Ways to contribute
                </p>

                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-[#263746] sm:text-4xl">
                  Corporate Volunteering Opportunities
                </h2>

                <div className="mt-4 h-1 w-14 bg-[#E15925]" />
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {volunteeringOpportunities.map((item, index) => (
                <Reveal
                  key={item}
                  className="h-full"
                  delay={(index % 3) * 50}
                >
                  <article className="group flex h-full flex-col border border-[#E8DED0] bg-[#FBF6EC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#17232B] hover:bg-[#17232B] hover:shadow-[0_18px_35px_rgba(23,35,43,0.12)] sm:p-7">
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E15925] text-xs font-black text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#E15925]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm font-semibold leading-relaxed text-[#526574] transition-colors duration-300 group-hover:text-white/90 sm:text-base">
                        {item}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            WHY VOLUNTEER
        ================================================== */}
        <section className="w-full bg-[#F4EBDD]">
          <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="mb-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                  Why NMT
                </p>

                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-[#263746] sm:text-4xl">
                  Why Volunteer at NMT?
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-3">
              {/* Dependable */}
              <Reveal className="h-full">
                <article className="flex h-full flex-col border border-[#E8DED0] bg-white p-6 shadow-[0_12px_30px_rgba(23,35,43,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E15925]/40 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.15em] text-[#E15925]">
                      01.
                    </span>
                    <HeartHandshake className="h-7 w-7 text-[#ED6439]" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-extrabold text-[#263746]">
                    We are <span className="text-[#E15925]">Dependable:</span>
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#526574]">
                    We are a well-established NGO working in the field of age
                    care since 1998. Our programmes are well monitored and our
                    stakeholders – the elderly directly benefiting from our
                    services, are an integral part of our monitoring team –
                    ensuring that our services meet their needs.
                  </p>
                </article>
              </Reveal>

              {/* Transparent */}
              <Reveal className="h-full" delay={80}>
                <article className="flex h-full flex-col border border-[#E8DED0] bg-white p-6 shadow-[0_12px_30px_rgba(23,35,43,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E15925]/40 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.15em] text-[#E15925]">
                      02.
                    </span>
                    <ShieldCheck className="h-7 w-7 text-[#ED6439]" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-extrabold text-[#263746]">
                    We are{" "}
                    <span className="text-[#E15925]">Transparent:</span>
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#526574]">
                    All donations will be reciprocated with a receipt for the
                    full value. Volunteers are duly acknowledged and
                    appreciated.
                  </p>
                </article>
              </Reveal>

              {/* Authorised */}
              <Reveal className="h-full" delay={160}>
                <article className="flex h-full flex-col border border-[#E8DED0] bg-white p-6 shadow-[0_12px_30px_rgba(23,35,43,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E15925]/40 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.15em] text-[#E15925]">
                      03.
                    </span>
                    <Award className="h-7 w-7 text-[#ED6439]" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-extrabold text-[#263746]">
                    We are{" "}
                    <span className="text-[#E15925]">Authorised:</span>
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#526574]">
                    We are covered under the amendments made to Schedule VII
                    of the Companies Act 2013 vide notification dated Feb 27th
                    2014. All donations to Nightingales Medical Trust are
                    eligible for 50% tax deduction under Sec 80G of the Income
                    Tax Act. We have FCRA registration and are eligible to
                    receive foreign funds.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==================================================
            FAQs + IMAGE SPACE
        ================================================== */}
        <section className="w-full bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              {/* IMAGE SPACE */}
              <Reveal>
  <div className="group min-h-[320px] w-full overflow-hidden lg:min-h-[500px]">
    <img
      src={corporateVolunteeringImage}
      alt="Corporate volunteering with elders"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>
</Reveal>

              {/* FAQ */}
              <Reveal delay={100}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                    Have questions?
                  </p>

                  <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-[#263746] sm:text-4xl">
                    Volunteering FAQs
                  </h2>

                  <div className="mt-5 h-1 w-14 bg-[#E15925]" />

                  <div className="mt-8 border-t border-[#263746]/10">
                    {faqs.map((faq, index) => {
                      const isOpen = openFaq === index;

                      return (
                        <div
                          key={faq.question}
                          className="border-b border-[#263746]/10"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenFaq(isOpen ? null : index)
                            }
                            className="flex w-full items-center justify-between gap-5 py-5 text-left"
                            aria-expanded={isOpen}
                          >
                            <span className="font-display text-base font-extrabold text-[#263746] sm:text-lg">
                              {faq.question}
                            </span>

                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 shrink-0 text-[#E15925]" />
                            ) : (
                              <ChevronDown className="h-5 w-5 shrink-0 text-[#E15925]" />
                            )}
                          </button>

                          <div
                            className={`grid transition-all duration-300 ${
                              isOpen
                                ? "grid-rows-[1fr] pb-5 opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="max-w-2xl text-sm leading-relaxed text-[#526574] sm:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==================================================
            INTRO + FORM
        ================================================== */}
        <section className="w-full bg-[#F4EBDD]">
          <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              {/* FORM */}
              <Reveal className="h-full">
                <div className="h-full bg-[#17232B] p-6 shadow-[0_18px_45px_rgba(23,35,43,0.14)] sm:p-8 lg:p-9">
                  <div className="mb-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                      Get started
                    </p>

                    <h2 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                      Ready to get started?
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="corporate-name"
                        className="mb-2 block text-sm font-bold text-white/85"
                      >
                        Your Name
                      </label>

                      <input
                        id="corporate-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Your Name"
                        className="w-full border border-white/10 bg-white px-4 py-3.5 text-sm text-[#263746] outline-none transition-colors placeholder:text-[#526574]/65 focus:border-[#ED6439]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="corporate-email"
                        className="mb-2 block text-sm font-bold text-white/85"
                      >
                        Email
                      </label>

                      <input
                        id="corporate-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="Email"
                        className="w-full border border-white/10 bg-white px-4 py-3.5 text-sm text-[#263746] outline-none transition-colors placeholder:text-[#526574]/65 focus:border-[#ED6439]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="corporate-message"
                        className="mb-2 block text-sm font-bold text-white/85"
                      >
                        Message
                      </label>

                      <textarea
                        id="corporate-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Tell us how you would like to volunteer..."
                        className="w-full resize-none border border-white/10 bg-white px-4 py-3.5 text-sm text-[#263746] outline-none transition-colors placeholder:text-[#526574]/65 focus:border-[#ED6439]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 bg-[#E15925] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(225,89,37,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C94B1E]"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              </Reveal>

              {/* INTRO CONTENT */}
              <Reveal className="h-full" delay={100}>
                <div className="flex h-full flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                    Corporate volunteering
                  </p>

                  <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold leading-tight text-[#263746] sm:text-4xl lg:text-5xl">
                    Volunteer for the cause of the{" "}
                    <span className="text-[#E15925]">
                      Elderly and PwDs
                    </span>
                  </h2>

                  <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#263746] sm:text-lg">
                    If you are a corporate team and would like to help out in
                    the cause that we stand for, get in touch with:
                  </p>

                  <div className="mt-7 border-l-4 border-[#ED6439] pl-5">
                    <h3 className="font-display text-xl font-extrabold text-[#263746] sm:text-2xl">
                      Ms. Swati Bhandary
                    </h3>

                    <a
                      href="tel:+919243737218"
                      className="mt-2 flex items-center gap-2 text-base font-bold text-[#E15925] transition-colors hover:text-[#C94B1E]"
                    >
                      <Phone className="h-4 w-4" />
                      +91 9243737218
                    </a>

                    <a
                      href="mailto:contact@nightingaleseldercare.com"
                      className="mt-1 flex items-center gap-2 break-all text-sm font-semibold text-[#526574] transition-colors hover:text-[#E15925] sm:text-base"
                    >
                      <Mail className="h-4 w-4 shrink-0" />
                      contact@nightingaleseldercare.com
                    </a>
                  </div>

                  <div className="mt-8 h-px w-full bg-[#263746]/15" />

                  <p className="mt-6 text-sm leading-relaxed text-[#526574]">
                    *We dont share your personal info with anyone.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}