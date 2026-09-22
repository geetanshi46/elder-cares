import { useState } from "react";
import {
  Lock,
  ShieldCheck,
  HeartHandshake,
  Users,
  Building2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function GetInvolved() {
  const [monthly, setMonthly] = useState(true);
  const [amount, setAmount] = useState("");

  return (
    <section
  id="donate"
  className="
    relative
    overflow-hidden
    bg-[#FFF9EE]
    pt-12
    pb-10
    sm:pt-14
    sm:pb-12
    lg:pt-16
    lg:pb-12
  "
>
      {/* =========================================================
          BACKGROUND DECORATION
          ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-[#E8A22F]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-[#E85A3F]/8
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-[#E8A22F]/6
          blur-3xl
        "
      />

      {/* Top section separator */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-1
          bg-gradient-to-r
          from-transparent
          via-[#E8A22F]
          to-transparent
          opacity-70
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HEADER
            ========================================================= */}

        <Reveal className="max-w-3xl">

          <span
  className="
    inline-flex
    items-center
    gap-2
    border
    border-[#E8A22F]/25
    bg-white/75
    px-4
    py-2
    text-sm
    font-bold
    uppercase
    tracking-[0.18em]
    text-[#B66F00]
    shadow-[0_8px_25px_rgba(180,110,0,0.08)]
    backdrop-blur-sm
  "
>
  <span
    className="
      grid
      h-6
      w-6
      place-items-center
      rounded-full
      bg-[#ED6439]
      text-white
    "
  >
    <HeartHandshake
      className="h-3.5 w-3.5"
      strokeWidth={2}
    />
  </span>

  How you can help
</span>

          <h2 id="corporate"
            className="
            
              mt-6
              font-display
              text-3xl
              font-extrabold
              scroll-mt-24
              leading-tight
              text-ink
              sm:text-4xl
              lg:text-[3.2rem]
            "
          >
            Get{" "}
            <span className="text-[#ED6439]">
  Involved
</span>
          </h2>

          <div className="mt-5 flex items-center gap-3">
  <span className="h-[2px] w-14 bg-[#ED6439]" />

  <span className="h-2.5 w-2.5 rounded-full bg-[#ED6439]" />
</div>

          <p
            className="
              mt-6
              text-[15.5px]
              leading-relaxed
              text-muted-foreground
              sm:text-base
            "
          >
            You can support our work by contributing to ongoing and new
            initiatives, collaborating with us to create sustainable impact,
            volunteering your time and expertise, and advocating for the
            dignity, rights, and well-being of older persons.
          </p>
        </Reveal>


        {/* =========================================================
            WAYS TO GET INVOLVED
            ========================================================= */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* =====================================================
              CSR PARTNERSHIPS — UNCHANGED
              ===================================================== */}

          <Reveal delay={80}>
<div
  id="corporate"
  className="
    group
    relative
    h-full
    overflow-hidden
    border
    border-[#ED6439]/20
    bg-white
    p-7
    shadow-[0_18px_50px_-20px_rgba(70,45,10,0.18)]
    transition-all
    duration-500
    hover:-translate-y-1.5
    hover:border-[#ED6439]/40
    hover:shadow-[0_28px_65px_-20px_rgba(237,100,57,0.24)]
    sm:p-8
  "
>
    {/* Accent */}
    <div
      className="
        absolute
        inset-x-0
        top-0
        h-1
        bg-[#ED6439]
      "
    />

    <div
      className="
        absolute
        -right-16
        -top-16
        h-40
        w-40
        rounded-full
        bg-[#ED6439]/10
        blur-3xl
        transition-transform
        duration-700
        group-hover:scale-125
      "
    />

    <div className="relative flex items-start gap-5">

      {/* ICON */}
      <span
        className="
          grid
          h-14
          w-14
          shrink-0
          place-items-center
          bg-[#ED6439]
          text-white
          shadow-[0_10px_25px_rgba(237,100,57,0.28)]
          transition-transform
          duration-500
          group-hover:scale-105
          group-hover:rotate-3
        "
      >
        <Building2
          className="h-6 w-6"
          strokeWidth={1.7}
        />
      </span>

      <div>
  <h3 className="font-display text-xl font-bold text-ink">
    CSR Partnerships
  </h3>

        <span className="mt-2 block h-1 w-10 rounded-full bg-[#ED6439] transition-all duration-300 group-hover:w-16" />
      </div>

    </div>

    <p className="relative mt-6 text-[14.5px] leading-relaxed text-muted-foreground">
      Partner with Nightingales Medical Trust to create meaningful and
      measurable impact in the lives of older persons, people living
      with dementia and vulnerable communities. Corporates can support
      a wide range of initiatives in elder care, dementia care,
      healthcare, mental health, nutrition, support for marginalized
      and homeless elders, prevention of elder abuse, digital literacy,
      capacity building, livelihood and empowerment of rural women.
      Beyond financial support, corporate employees can contribute their
      time, skills and expertise through meaningful volunteering
      opportunities across NMT&rsquo;s projects.
    </p>

    <div className="relative mt-6 flex items-center gap-2 text-[13px] font-bold text-[#ED6439]">
      Explore partnership opportunities

      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        strokeWidth={2}
      />
    </div>
  </div>
</Reveal>


          {/* =====================================================
              VOLUNTEERING — UNCHANGED
              ===================================================== */}

                   <Reveal delay={140}>
            <div className="group relative h-full overflow-hidden border border-[#ED6439]/15 bg-white p-7 shadow-[0_18px_50px_-20px_rgba(70,45,10,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#ED6439]/35 hover:shadow-[0_28px_65px_-20px_rgba(237,100,57,0.24)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#ED6439]" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ED6439]/8 blur-3xl transition-transform duration-700 group-hover:scale-125" />

              <div className="relative flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center bg-[#ED6439] text-white shadow-[0_10px_25px_rgba(237,100,57,0.22)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <HeartHandshake className="h-6 w-6" strokeWidth={1.7} />
                </span>

                <div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    Collaboration Opportunities
                  </h3>
                  <span className="mt-2 block h-1 w-10 rounded-full bg-[#ED6439] transition-all duration-300 group-hover:w-16" />
                </div>
              </div>

              <div className="relative mt-6 space-y-4 text-[14.5px] leading-relaxed text-muted-foreground">
                <p>
                  We believe meaningful change happens through collaboration.
                  NMT works with like-minded organisations, government agencies,
                  universities, medical institutions and educational institutions
                  to develop and implement innovative solutions for ageing and
                  dementia care.
                </p>
                <p>
                  We welcome partnerships in research, training, technology and
                  innovation, community initiatives, knowledge exchange, capacity
                  building and joint programmes.
                </p>
                <p>
                  Several organisations are already working with us successfully,
                  and we invite more like-minded partners to join us in creating a
                  healthier, safer and more inclusive society for older persons.
                </p>
              </div>

              <div className="relative mt-6 flex items-center gap-2 text-[13px] font-bold text-[#ED6439]">
                Explore Collaboration Opportunities →
              </div>
            </div>
          </Reveal>

<Reveal delay={140}>
  <div
    className="
      group
      relative
      h-full
      overflow-hidden
      border
      border-[#ED6439]/15
      bg-white
      p-7
      shadow-[0_18px_50px_-20px_rgba(70,45,10,0.18)]
      transition-all
      duration-500
      hover:-translate-y-1.5
      hover:border-[#ED6439]/35
      hover:shadow-[0_28px_65px_-20px_rgba(237,100,57,0.24)]
      sm:p-8
    "
  >
    {/* Accent */}
    <div
      className="
        absolute
        inset-x-0
        top-0
        h-1
        bg-[#ED6439]
      "
    />

    <div
      className="
        absolute
        -right-16
        -top-16
        h-40
        w-40
        rounded-full
        bg-[#ED6439]/8
        blur-3xl
        transition-transform
        duration-700
        group-hover:scale-125
      "
    />

    <div className="relative flex items-start gap-5">

      {/* ICON */}
      <span
        className="
          grid
          h-14
          w-14
          shrink-0
          place-items-center
          bg-[#ED6439]
          text-white
          shadow-[0_10px_25px_rgba(237,100,57,0.22)]
          transition-transform
          duration-500
          group-hover:scale-105
          group-hover:rotate-3
        "
      >
        <Users
          className="h-6 w-6"
          strokeWidth={1.7}
        />
      </span>

      <div>
        <h3 className="font-display text-xl font-bold text-ink">
          Volunteering &amp; Internships
        </h3>

        <span className="mt-2 block h-1 w-10 rounded-full bg-[#ED6439] transition-all duration-300 group-hover:w-16" />
      </div>

    </div>

    <p className="relative mt-6 text-[14.5px] leading-relaxed text-muted-foreground">
      There are many meaningful ways to contribute to the work of
      Nightingales Medical Trust. Volunteers and interns can engage
      with older persons and people living with dementia, support
      active ageing and wellness programmes, assist with community
      outreach and awareness activities, contribute their professional
      skills, and support research, technology and other organisational
      initiatives. We offer opportunities for students, professionals
      and individuals to learn, contribute and make a meaningful
      difference in the lives of older persons and vulnerable
      communities.
    </p>

    <div className="relative mt-6 flex items-center gap-2 text-[13px] font-bold text-[#ED6439]">
      Discover ways to contribute

      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        strokeWidth={2}
      />
    </div>
  </div>
</Reveal>

        </div>


        {/* =========================================================
            DONATE + CONTACT AREA
            ========================================================= */}

        <div className="mt-10 grid grid-cols-1 gap-6">

          {/* =====================================================
              DONATION PANEL
              ===================================================== */}

          <Reveal>

            <div
              className="
                group
                relative
                h-full
                overflow-hidden
                border
                border-white/10
                bg-[#E15925]
                p-8
                shadow-[0_30px_75px_-18px_rgba(23,35,43,0.55),0_10px_30px_rgba(237,100,57,0.18)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#ED6439]/35
                hover:shadow-[0_38px_90px_-18px_rgba(23,35,43,0.62),0_15px_38px_rgba(237,100,57,0.28)]
                sm:p-8
lg:p-9
              "
            >

              {/* =================================================
                  PREMIUM ORANGE SIDE ACCENT
                  ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-8
                  left-0
                  top-8
                  w-[4px]
                  bg-[#ED6439]
                  shadow-[0_0_20px_rgba(237,100,57,0.42)]
                "
              />

              {/* Small bottom accent */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  right-10
                  h-[3px]
                  w-28
                  bg-[#ED6439]
                  opacity-90
                  shadow-[0_0_15px_rgba(237,100,57,0.30)]
                "
              />

              {/* Background glows */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#ED6439]/20
                  blur-3xl
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-28
                  -left-20
                  h-64
                  w-64
                  rounded-full
                  bg-[#E85A3F]/15
                  blur-3xl
                "
              />

              {/* Dot texture */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.035]
                  [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
                  [background-size:24px_24px]
                "
              />

              <div className="relative">

  <span
  id="donate"
    className="
      inline-flex
      items-center
      gap-2
      text-sm
      font-bold
      uppercase
      tracking-[0.18em]
      text-white
    "
  >
    <Sparkles className="h-4 w-4 text-white" />
    Support our work
  </span>

  <h2
    className="
      mt-3
      max-w-xl
      font-display
      text-3xl
      font-extrabold
      leading-tight
      text-white
      sm:text-[2.5rem]
    "
  >
    Make A Meaningful{" "}
    <span className="text-[#14212B]">
      Difference.
    </span>
  </h2>

  <p
    className="
      mt-3
      max-w-xl
      text-[15px]
      leading-relaxed
      text-white/70
    "
  >
    Support ongoing and new initiatives of Nightingales Medical
    Trust and help us create sustainable impact in the lives of older
    persons, people living with dementia and vulnerable communities.
  </p>


  {/* Frequency selector */}
<div
  role="group"
  aria-label="Donation frequency"
  className="
    mt-5
    inline-flex
    rounded-full
    border
    border-white/10
    bg-white/5
    p-1
  "
>
  {[
    { label: "Monthly", value: true },
    { label: "One time", value: false },
  ].map((opt) => (
    <button
      key={opt.label}
      type="button"
      aria-pressed={monthly === opt.value}
      onClick={() => setMonthly(opt.value)}
      className={`
        rounded-full
        px-5
        py-2
        text-sm
        font-semibold
        transition-all
        duration-300
        ${
          monthly === opt.value
            ? "bg-[#14212B] text-white shadow-[0_5px_18px_rgba(20,33,43,0.28)]"
            : "text-white/55 hover:text-white"
        }
      `}
    >
      {opt.label}
    </button>
  ))}
</div>


  {/* Amount */}

  <label
    htmlFor="donation-amount"
    className="
      mt-4
      block
      text-sm
      font-medium
      text-white/85
    "
  >
    Donation amount
  </label>

  <div
    className="
      mt-2
      flex
      items-center
      gap-2
      border
      border-white/10
      bg-white/[0.06]
      px-4
      py-3
      transition-colors
      focus-within:border-[#ED6439]/60
      focus-within:bg-white/[0.09]
    "
  >
    <span className="font-display text-lg font-bold text-[#14212B]">
      ₹
    </span>

    <input
      id="donation-amount"
      inputMode="numeric"
      value={amount}
      onChange={(e) =>
        setAmount(e.target.value.replace(/\D/g, ""))
      }
      placeholder="Enter amount"
      className="
        min-w-0
        flex-1
        bg-transparent
        text-base
        text-white
        outline-none
        placeholder:text-white/35
      "
    />
  </div>


 {/* Donate button */}

<button
  type="button"
  onClick={() => {
    const subject = monthly
      ? "Monthly Donation Enquiry"
      : "One-Time Donation Enquiry";

    const body = `Hello Nightingales Medical Trust,

I would like to make a ${
      monthly ? "monthly" : "one-time"
    } donation${
      amount
        ? ` of ₹${Number(amount).toLocaleString("en-IN")}`
        : ""
    }.

Please share the payment details/instructions.

Thank you.`;

    window.location.href = `mailto:rm@nightingaleseldercare.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }}
  className="
    mt-4
    flex
    w-full
    items-center
    justify-center
    gap-2
    bg-[#14212B]
    px-6
    py-3.5
    text-[15px]
    font-bold
    text-white
    shadow-[0_12px_30px_rgba(20,33,43,0.25)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-white
    hover:text-[#14212B]
    hover:shadow-[0_18px_40px_rgba(20,33,43,0.25)]
  "
>
  <HeartHandshake
  className="h-5 w-5 text-white group-hover:text-[#14212B]"
  strokeWidth={1.8}
/>

  Donate
  {amount
    ? ` ₹${Number(amount).toLocaleString("en-IN")}`
    : ""}
  {monthly ? " monthly" : " now"}
</button>

</div>
            </div>

          </Reveal>


{/* =====================================================
    TRUST / LEGAL STRIP
    ===================================================== */}
<div
  className="
    mt-4
    flex
    w-full
    items-center
    gap-4
    border
    border-[#ED6439]/25
    bg-white/80
    px-5
    py-3
    shadow-[0_10px_30px_rgba(237,100,57,0.12)]
    backdrop-blur-sm
    transition-all
    duration-300
    hover:border-[#ED6439]/40
    hover:shadow-[0_14px_35px_rgba(237,100,57,0.16)]
    sm:px-6
    sm:py-4
  "
>
  {/* Icon */}
  <span
    className="
      grid
      h-10
      w-10
      shrink-0
      place-items-center
      rounded-lg
      bg-[#ED6439]/15
      text-[#ED6439]
      ring-1
      ring-[#ED6439]/20
    "
  >
    <ShieldCheck
      className="h-5 w-5"
      strokeWidth={1.8}
    />
  </span>

  {/* Text */}
  <p
    className="
      min-w-0
      text-[12.5px]
      leading-[1.65]
      text-muted-foreground
      sm:text-[13px]
      lg:text-[13.5px]
    "
  >
    Donations to Nightingales Medical Trust are exempt under Section
    80G of the Income Tax Act of India. The Trust is eligible for CSR
    funding. NMT is approved to receive donations from abroad under
    FCRA. The Trust is also registered as an NPO with NSE / BSE.
  </p>
</div>
          

        </div>


      </div>
    </section>
  );
}