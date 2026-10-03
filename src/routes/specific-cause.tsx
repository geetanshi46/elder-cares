/* eslint-disable prettier/prettier */

import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  Heart,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";

const RAZORPAY_URL =
  "https://razorpay.com/payment-button/pl_ON0cPKPzoI6TVq/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button";

type Cause = {
  id: number;
  cause: string;
  amount: string;
  numericAmount?: number;
};

const causes: Cause[] = [
  { id: 1, cause: "The care and support for one needy elder at Sandhya Kirana Day Care Centre for a month", amount: "Rs. 3,000.00", numericAmount: 3000 },
  { id: 2, cause: "Care and support of one person at Sandhya Suraksha Home for Destitute Elderly for a month", amount: "Rs. 6,400.00", numericAmount: 6400 },
  { id: 3, cause: "Special breakfast for elders at Sandhya Suraksha Home for Destitute Elderly", amount: "Rs. 2,500.00", numericAmount: 2500 },
  { id: 4, cause: "Special Lunch for residents at Sandhya Suraksha (Veg)", amount: "Rs. 5,000.00", numericAmount: 5000 },
  { id: 4, cause: "Special Lunch for residents at Sandhya Suraksha (Non-Veg)", amount: "Rs. 7,000.00", numericAmount: 7000 },
  { id: 5, cause: "Snacks with Tea - Morning (At our Destitute Homes)", amount: "Rs. 750.00", numericAmount: 750 },
  { id: 5, cause: "Snacks with Tea - Evening (At our Destitute Homes)", amount: "Rs. 1,750.00", numericAmount: 1750 },
  { id: 6, cause: "Dinner for senior citizens at Sandhya Suraksha", amount: "Rs. 4,500.00", numericAmount: 4500 },
  { id: 7, cause: "Full day meals for elderly at Sandhya Suraksha", amount: "Rs. 13,500.00", numericAmount: 13500 },
  { id: 8, cause: "Donate during a special day in your life", amount: "Any Amount" },
  { id: 9, cause: "Donate in general towards Corpus Fund of the Trust", amount: "Any Amount" },
  { id: 10, cause: "Donate Fixed Assets / Medical Equipment and other items / Structure", amount: "Based on Cost of the Assets" },
  { id: 11, cause: "Donate towards any other cause or in memory of a loved one", amount: "Any Amount" },
  { id: 12, cause: "Towards the Set Up of Smriti Gram - A specialized 300-bed care centre for Persons with Dementia with 100 beds for the marginalized", amount: "Any Amount" },
];

const faqItems = [
  { question: "What kind of donations are accepted?", answer: "Donations may be in cash or kind." },
  { question: "How do I donate?", answer: "Donations can be made in person at any of our centres. Cheques and DDs may be sent by post. Donations can also be made on our website through the online payment gateway." },
  { question: "Is it possible to know where my donation has been used?", answer: "Yes. Donors can reach out to Ms. Swati at allprojects@nightingaleseldercare.com" },
  { question: "How do I get a tax receipt?", answer: "For donations made in person, the receipt will be provided immediately. For cheques and DDs received by post, a receipt will be sent by post within 7 days – attach your postal address. Tax receipts for online payments are also posted. Alternatively, a scanned copy of the receipt can be emailed to you." },
];

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-10 bg-[#ED6439]" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED6439]">{eyebrow}</p>
      </div>
      <h2 className="text-3xl font-black tracking-tight text-[#17232B] sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-[#526574] sm:text-lg">{description}</p>}
    </div>
  );
}

function DonationModal({ cause, onClose }: { cause: Cause; onClose: () => void }) {
  const isFixedAmount = Boolean(cause.numericAmount);
  const [amount, setAmount] = useState(cause.numericAmount ? String(cause.numericAmount) : "");
  const [step, setStep] = useState<1 | 2>(1);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAddress] = useState("");
  const amountValue = Number(amount) || 0;

  const next = (event: FormEvent) => {
    event.preventDefault();
    if (!amountValue) return;
    setStep(2);
  };

  const proceed = (event: FormEvent) => {
    event.preventDefault();
    if (!email || !phone || !name || !pan || !address) return;
    window.open(RAZORPAY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17232B]/75 p-3 backdrop-blur-sm sm:p-5" role="dialog" aria-modal="true" aria-label="Donation form">
      <div className="relative flex max-h-[94vh] w-full max-w-[430px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
        <div className="bg-[#F15A00] px-5 py-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">Nightingales Medical Trust</p>
              <p className="mt-1 text-base font-bold">{step === 1 ? "Donation Amount" : "User Details"}</p>
            </div>
            <button type="button" onClick={() => setShowCloseConfirm(true)} aria-label="Close donation form" className="rounded-full border border-white/30 p-2 transition hover:bg-white/15"><X className="h-5 w-5" /></button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className={`h-1.5 flex-1 rounded-full ${step === 1 ? "bg-white" : "bg-white/35"}`} />
            <span className={`h-1.5 flex-1 rounded-full ${step === 2 ? "bg-white" : "bg-white/35"}`} />
          </div>
        </div>

        <div className="border-b border-[#263746]/10 bg-[#FFF9F0] px-5 py-4">
          <div className="flex items-center gap-3">
            {step === 2 && <button type="button" onClick={() => setStep(1)} className="rounded-full border border-[#263746]/15 p-2 text-[#263746] transition hover:border-[#F15A00] hover:text-[#F15A00]" aria-label="Back to donation amount"><ChevronLeft className="h-5 w-5" /></button>}
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#F15A00]/25 bg-white text-xs font-black text-[#F15A00] shadow-sm">NMT</div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold uppercase text-[#263746]">Nightingales Medical Trust</p>
              <p className="mt-0.5 line-clamp-2 text-xs text-[#526574]">{cause.cause}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {step === 1 ? (
            <form onSubmit={next} className="space-y-6 p-5 sm:p-6">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#263746]">Donate an Amount of your Choice <span className="text-[#F15A00]">*</span></label>
                <div className="flex items-center rounded-xl border border-[#263746]/15 bg-[#FAFAFA] px-4 transition focus-within:border-[#F15A00] focus-within:bg-white">
                  <span className="text-lg font-semibold text-[#263746]">₹</span>
                  <input type="number" min="1" value={amount} readOnly={isFixedAmount} onChange={(event) => setAmount(event.target.value)} className="w-full border-0 bg-transparent px-3 py-4 text-base font-semibold outline-none" placeholder={isFixedAmount ? "" : "Enter amount"} required />
                </div>
                <div className="mt-3 rounded-xl bg-[#FFF9F0] p-3 text-xs leading-5 text-[#526574]"><span className="font-bold text-[#263746]">Cause: </span>{cause.cause}</div>
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#17232B] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#F15A00]">Continue<ArrowRight className="h-4 w-4" /></button>
            </form>
          ) : (
            <form onSubmit={proceed} className="space-y-3 p-5 sm:p-6">
              {[["Email", email, setEmail, "email"], ["Phone", phone, setPhone, "tel"], ["Name", name, setName, "text"], ["PAN Number", pan, setPan, "text"]].map(([label, value, setter, type]) => (
                <input key={label as string} type={type as string} value={value as string} onChange={(event) => (setter as (value: string) => void)(event.target.value)} placeholder={`${label as string} *`} className="w-full rounded-xl border border-[#263746]/15 bg-[#FAFAFA] px-4 py-3.5 text-sm text-[#17232B] outline-none transition placeholder:text-[#526574]/70 focus:border-[#F15A00] focus:bg-white" required />
              ))}
              <textarea value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Address *" rows={3} className="w-full resize-none rounded-xl border border-[#263746]/15 bg-[#FAFAFA] px-4 py-3.5 text-sm text-[#17232B] outline-none transition placeholder:text-[#526574]/70 focus:border-[#F15A00] focus:bg-white" required />
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#263746]/10 pt-4">
                <div className="shrink-0"><p className="text-[11px] uppercase tracking-wide text-[#526574]">Donation Amount</p><p className="mt-0.5 text-lg font-black text-[#17232B]">₹ {amountValue.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</p></div>
                <button type="submit" className="rounded-xl bg-[#17232B] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#F15A00]">Proceed to Pay</button>
              </div>
            </form>
          )}
        </div>

        <div className="border-t border-[#263746]/10 bg-white px-5 py-2.5 text-center text-[10px] font-medium uppercase tracking-wide text-[#526574]">Secure payment via Razorpay</div>

        {showCloseConfirm && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#17232B]/55 p-5 backdrop-blur-[2px]">
            <div className="w-full rounded-2xl bg-white p-6 shadow-2xl">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#FFF1EB] text-[#F15A00]"><X className="h-5 w-5" /></div>
              <h3 className="mt-4 text-xl font-black text-[#17232B]">Cancel donation?</h3>
              <p className="mt-2 text-sm leading-6 text-[#526574]">Your entered details will be lost if you close this donation form.</p>
              <div className="mt-6 flex gap-3">
                <button type="button" onClick={() => setShowCloseConfirm(false)} className="flex-1 rounded-xl border border-[#263746]/15 px-4 py-3 text-sm font-bold text-[#263746] transition hover:border-[#F15A00] hover:text-[#F15A00]">Keep Editing</button>
                <button type="button" onClick={onClose} className="flex-1 rounded-xl bg-[#17232B] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#F15A00]">Yes, Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DonationTable() {
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);

  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-[#263746]/10 bg-white shadow-[0_18px_50px_rgba(23,35,43,0.08)] md:block">
        <div className="grid grid-cols-[70px_minmax(0,1.65fr)_minmax(150px,0.8fr)_175px] items-center bg-[#17232B] px-6 py-5 text-xs font-bold uppercase tracking-[0.14em] text-white lg:px-7">
          <div>SL</div><div>Cause</div><div>Approximate<br />Amount</div><div className="text-right">Donation</div>
        </div>
        {causes.map((item, index) => (
          <div key={`${item.id}-${index}`} className="grid grid-cols-[70px_minmax(0,1.65fr)_minmax(150px,0.8fr)_175px] items-center gap-4 border-t border-[#263746]/10 px-6 py-6 transition hover:bg-[#FFF9F0] lg:px-7">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF1EB] text-sm font-black text-[#F15A00]">{item.id}</div>
            <div className="pr-4 text-base leading-7 text-[#263746] lg:text-[17px]">{item.cause}</div>
            <div className="text-sm font-bold leading-6 text-[#526574] lg:text-base">{item.amount}</div>
            <div className="text-right"><button type="button" onClick={() => setSelectedCause(item)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F15A00] px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#17232B] focus:outline-none focus:ring-2 focus:ring-[#F15A00] focus:ring-offset-2 lg:px-5 lg:text-sm">Donate Now<ArrowRight className="h-4 w-4" /></button></div>
          </div>
        ))}
      </div>

      <div className="space-y-4 md:hidden">
        {causes.map((item, index) => (
          <article key={`${item.id}-mobile-${index}`} className="rounded-2xl border border-[#263746]/10 bg-white p-5 shadow-[0_10px_30px_rgba(23,35,43,0.06)]">
            <div className="flex items-start justify-between gap-4"><span className="rounded-full bg-[#FFF1EB] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#F15A00]">SL {item.id}</span><span className="text-right text-sm font-bold text-[#263746]">{item.amount}</span></div>
            <p className="mt-5 text-base leading-7 text-[#263746]">{item.cause}</p>
            <button type="button" onClick={() => setSelectedCause(item)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F15A00] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#17232B]">Donate Now<ArrowRight className="h-4 w-4" /></button>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-[#F15A00]/15 bg-[#FFF9F0] px-5 py-5 text-center text-sm leading-7 text-[#526574] sm:px-8">All donations to Nightingales Medical Trust are eligible for 50% tax deduction under Sec 80G of the Income Tax Act.<br />We have FCRA registration and are eligible to receive foreign funds.</div>
      {selectedCause && <DonationModal cause={selectedCause} onClose={() => setSelectedCause(null)} />}
    </>
  );
}

function WhyDonate() {
  const cards = [
    { number: "01", title: "We are Dependable", text: "We are a well-established NGO working in the field of age care since 1998. Our programmes are well monitored and our stakeholders – the elderly directly benefiting from our services - are an integral part of our monitoring team, ensuring that our services meet their needs.", icon: Heart },
    { number: "02", title: "We are Transparent", text: "All donations will be reciprocated with a receipt for the full value.", icon: ShieldCheck },
    { number: "03", title: "We are Authorised", text: "We are covered under the amendments made to Schedule VII of the Companies Act 2013 vide notification dated Feb 27th 2014. All donations to Nightingales Medical Trust are eligible for 50% tax deduction under Sec 80G of the Income Tax Act. We have FCRA registration and are eligible to receive foreign funds.", icon: Sparkles },
  ];

  return (
    <section className="bg-[#FFF9F0] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionIntro eyebrow="Why NMT" title="Why Donate at NMT?" description="Your support helps us continue meaningful work in elder care, dignity, healthcare and community support." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((item) => { const Icon = item.icon; return (
            <article key={item.number} className="group relative overflow-hidden rounded-2xl border border-[#263746]/10 bg-white p-7 shadow-[0_12px_35px_rgba(23,35,43,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,35,43,0.1)] sm:p-8">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[70px] bg-[#FFF1EB] transition group-hover:bg-[#F15A00]" />
              <div className="relative">
                <div className="flex items-center justify-between"><p className="text-3xl font-black text-[#F15A00]">{item.number}.</p><div className="grid h-11 w-11 place-items-center rounded-full bg-[#FFF1EB] text-[#F15A00] transition group-hover:bg-[#17232B] group-hover:text-white"><Icon className="h-5 w-5" /></div></div>
                <h3 className="mt-8 text-2xl font-black text-[#263746]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#526574] sm:text-base">{item.text}</p>
              </div>
            </article>
          ); })}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-14">
        <div>
          <SectionIntro eyebrow="Need to know" title="Donation FAQs" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#263746]/10 bg-white">
            {faqItems.map((faq, index) => { const isOpen = open === index; return (
              <div key={faq.question} className="border-b border-[#263746]/10 last:border-b-0">
                <button type="button" onClick={() => setOpen(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-sm font-bold text-[#263746] transition hover:bg-[#FFF9F0] hover:text-[#F15A00] sm:px-6 sm:text-base" aria-expanded={isOpen}><span>{faq.question}</span><ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#F15A00]" : "text-[#526574]"}`} /></button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-7 text-[#526574] sm:px-6 sm:text-base">{faq.answer}</p></div></div>
              </div>
            ); })}
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#17232B] p-3 shadow-[0_20px_55px_rgba(23,35,43,0.12)] sm:min-h-[440px]">
          <div className="relative flex h-full min-h-[334px] items-end overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(237,100,57,0.35),transparent_35%),linear-gradient(145deg,#263746,#17232B)] sm:min-h-[414px]">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" /><div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-[#ED6439]/25" />
            <div className="relative z-10 p-7 sm:p-9"><div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#ED6439] text-white"><Heart className="h-5 w-5 fill-current" /></div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED6439]">Your support matters</p><h3 className="mt-3 max-w-sm text-3xl font-black leading-tight text-white sm:text-4xl">Every contribution can create meaningful care.</h3><p className="mt-4 max-w-sm text-sm leading-6 text-white/70">Replace this visual area with the final approved NMT campaign image.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadyToDonate() {
  return (
    <section className="relative overflow-hidden bg-[#F15A00] px-5 py-14 sm:px-8 sm:py-16">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[28px] border-white/10" /><div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[32px] border-[#17232B]/10" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 sm:flex-row">
        <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">Make an impact today</p><h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-[#17232B] sm:text-5xl">Ready to Donate?</h2></div>
        <a href={RAZORPAY_URL} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-black uppercase text-[#F15A00] shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:bg-[#17232B] hover:text-white">Donate Now<ArrowRight className="h-5 w-5" /></a>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="rounded-3xl bg-[#263746] p-7 shadow-[0_20px_50px_rgba(38,55,70,0.18)] sm:p-10 lg:p-12">
  <div className="mb-7 flex items-center gap-3">
    <div className="grid h-10 w-10 place-items-center rounded-full bg-[#ED6439]/15 text-[#ED6439]">
      <ArrowRight className="h-5 w-5" />
    </div>

    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
      Get in touch
    </p>
  </div>

 <h3 className="text-3xl font-black text-white sm:text-4xl">
  Have any queries?
</h3>

<form
  className="mt-8 space-y-4"
  onSubmit={(event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value.trim();

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    const subject = `Donation Enquiry from ${name}`;

    const body = `Hello Nightingales Medical Trust,

Name: ${name}
Email: ${email}

Message:
${message}

Thank you.`;

    window.location.href = `mailto:contact@nightingaleseldercare.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }}
>
  <input
    name="name"
    type="text"
    required
    placeholder="Your Name"
    className="
      w-full
      rounded-xl
      border
      border-white/10
      bg-white
      px-5
      py-4
      text-base
      text-[#17232B]
      outline-none
      placeholder:text-[#526574]/75
      focus:ring-2
      focus:ring-[#ED6439]
    "
  />

  <input
    name="email"
    type="email"
    required
    placeholder="Email"
    className="
      w-full
      rounded-xl
      border
      border-white/10
      bg-white
      px-5
      py-4
      text-base
      text-[#17232B]
      outline-none
      placeholder:text-[#526574]/75
      focus:ring-2
      focus:ring-[#ED6439]
    "
  />

  <textarea
    name="message"
    required
    placeholder="Message"
    rows={5}
    className="
      w-full
      resize-none
      rounded-xl
      border
      border-white/10
      bg-white
      px-5
      py-4
      text-base
      text-[#17232B]
      outline-none
      placeholder:text-[#526574]/75
      focus:ring-2
      focus:ring-[#ED6439]
    "
  />

  <button
    type="submit"
    className="
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-xl
      bg-[#ED6439]
      px-7
      py-4
      text-sm
      font-black
      uppercase
      text-white
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-[#D9532B]
      hover:shadow-lg
    "
  >
    Send Message
    <ArrowRight className="h-4 w-4" />
  </button>
</form>
</div>
        <div className="flex items-center"><div className="w-full"><div className="mb-5 h-1 w-14 rounded-full bg-[#D9533B]" /><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F15A00]">Senior Care</p><h3 className="mt-3 text-4xl leading-tight text-[#263746] sm:text-5xl">Donate towards the<br />cause of <strong>Senior Care</strong></h3><p className="mt-8 text-lg font-bold leading-8 text-[#263746] sm:text-xl">If you would like to help us in our work, please get in touch with:</p><div className="mt-7 space-y-1 text-lg font-bold leading-8 text-[#263746]"><p>Ms. Swati Bhandary</p><p>+91 9243737218</p><p>contact@nightingaleseldercare.com</p></div><div className="my-8 h-px w-full bg-[#F15A00]/45" /><div className="flex items-start gap-3 text-sm text-[#263746] sm:text-base"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#F15A00]" /><p>We dont share your personal info with anyone.</p></div></div></div>
      </div>
    </section>
  );
}

function SpecificCausePage() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main id="main">
        <section className="relative overflow-hidden bg-[#FFF9F0] px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-[#F15A00]/10" /><div className="absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full border-[45px] border-[#263746]/5" />
          <div className="relative mx-auto max-w-6xl"><div className="grid items-end gap-10 lg:grid-cols-[1fr_0.35fr]"><div><div className="mb-5 flex items-center gap-3"><span className="h-px w-12 bg-[#F15A00]" /><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F15A00]">Support Nightingales Medical Trust</p></div><h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.98] tracking-[-0.03em] text-[#17232B] sm:text-6xl lg:text-7xl">Donating<br /><span className="text-[#F15A00]">Individuals &amp; Groups</span></h1></div><div className="hidden lg:block"><div className="ml-auto max-w-[210px] rounded-3xl border border-[#263746]/10 bg-white p-5 shadow-[0_20px_50px_rgba(23,35,43,0.08)]"><Heart className="h-7 w-7 text-[#F15A00]" /><p className="mt-8 text-4xl font-black text-[#17232B]">01</p><p className="mt-1 text-sm leading-6 text-[#526574]">Choose the cause you want to support.</p></div></div></div></div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl"><SectionIntro eyebrow="Ways to contribute" title="Choose a Specific Cause" description="Explore the causes below and choose the contribution that best matches the kind of support you would like to provide." /><div className="mt-10"><DonationTable /></div><div className="mt-14 grid gap-6 border-t border-[#263746]/10 pt-10 text-base leading-8 text-[#526574] sm:text-lg"><p>The Trust accepts donations through online payment (INR) or though Credit Card, Cheques and Demand Drafts favouring &quot;Nightingales Medical Trust&quot;. Cash donations are acceptable only for amounts below Rs 10,000. (80G is not applicable for cash donations above Rs 2000 as per income tax rules) Donors are requested to provide their PAN details while making a donation.</p><p>We also accept donations in kind. These include furniture, equipment used by elders like wheelchairs, walkers, walking sticks etc. clothes, books, stationary, etc. in good condition.</p></div></div>
        </section>

        <WhyDonate />
        <FAQSection />
        <ReadyToDonate />
        <ContactCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export const Route = createFileRoute("/specific-cause")({
  component: SpecificCausePage,
});
