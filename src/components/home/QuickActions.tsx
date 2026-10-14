import { useEffect, useRef, useState } from "react";
import {
  Brain,
  HeartHandshake,
  Briefcase,
  Home,
  GraduationCap,
  Landmark,
  Megaphone,
  Users,
  Handshake,
  HandHeart,
  X,
} from "lucide-react";

const ACTIONS = [
  {
    icon: Brain,
    label: "Dementia and Medical Care",
    href: "/services#dementia-care",
    color:
      "bg-[#FFF0E8] text-[#D94D2B] hover:bg-[#D94D2B] hover:text-white",
  },
  {
    icon: HeartHandshake,
    label: "Care for Marginalized Elders",
    href: "/services#marginalized",
    color:
      "bg-[#F4EAF8] text-[#7A3F8C] hover:bg-[#7A3F8C] hover:text-white",
  },
  {
    icon: HandHeart,
    label: "Prevention of Elder Abuse",
    href: "/services#elder-protection",
    color:
      "bg-[#FFF5D9] text-[#C88616] hover:bg-[#C88616] hover:text-white",
  },
  {
    icon: Briefcase,
    label: "Empowerment and Livelihood",
    href: "/services#empowerment-livelihood",
    color:
      "bg-[#E8F5F2] text-[#287D72] hover:bg-[#287D72] hover:text-white",
  },
  {
    icon: Home,
    label: "Supporting Old Age Homes",
    href: "/services#old-age-homes",
    color:
      "bg-[#FCE9E7] text-[#C84F49] hover:bg-[#C84F49] hover:text-white",
  },
  {
    icon: GraduationCap,
    label: "Training and Capacity Building",
    href: "/services#capacity-building",
    color:
      "bg-[#F1ECFA] text-[#68479A] hover:bg-[#68479A] hover:text-white",
  },
  {
    icon: Landmark,
    label: "Nightingales Smriti Gram",
    href: "/smriti-gram",
    color:
      "bg-[#FFF1DC] text-[#C66A1C] hover:bg-[#C66A1C] hover:text-white",
  },
  {
    icon: Megaphone,
    label: "Awareness and Advocacy",
    href: "/services#awareness",
    color:
      "bg-[#FDE8D8] text-[#D35428] hover:bg-[#D35428] hover:text-white",
  },
  {
    icon: Users,
    label: "Volunteer / Intern",
    href: "/get-involved#volunteer",
    color:
      "bg-[#E9F1F8] text-[#3E6685] hover:bg-[#3E6685] hover:text-white",
  },
  {
    icon: Handshake,
    label: "CSR Partnerships",
    href: "/get-involved#corporate",
    color:
      "bg-[#F3EAF5] text-[#80518B] hover:bg-[#80518B] hover:text-white",
  },
] as const;

const CALLBACK_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzfu_TWSRCABsC4_MmqjCVCb_qhJjMGAg-cRfq-i8HlS05E3X_sk7KNYsErhuOJ4JnN/exec";

const CALLBACK_OPTIONS = [
  "Dementia care",
  "Donation",
  "Volunteering",
  "Internship",
  "CSR partnership",
  "Other matters",
];

export function QuickActions() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const [callbackData, setCallbackData] = useState({
    name: "",
    phone: "",
    concern: "",
  });

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleCallbackSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
) => {
  event.preventDefault();

  setIsSending(true);
  setSent(false);
  setError("");

  try {
    const formBody = new URLSearchParams();

    formBody.append("name", callbackData.name);
    formBody.append("phone", callbackData.phone);
    formBody.append("email", "");
    formBody.append("writingAbout", callbackData.concern);
    formBody.append("message", "Request a call back");

    await fetch(CALLBACK_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    });

    setSent(true);

    setCallbackData({
      name: "",
      phone: "",
      concern: "",
    });
  } catch (error) {
    console.error("Callback request failed:", error);

    setError(
      "Something went wrong. Please try again or contact us directly.",
    );
  } finally {
    setIsSending(false);
  }
};

  const closeCallback = () => {
    if (isSending) return;

    setIsCallbackOpen(false);
    setSent(false);
    setError("");
  };

  return (
    <>
     {/* =========================================================
    QUICK ACTION CARDS — RESPONSIVE HORIZONTAL SCROLL
========================================================= */}

<section
  ref={sectionRef}
  aria-label="Quick actions"
  className="relative z-10 -mt-10 pb-6"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div
      className="
        flex
        gap-3
        overflow-x-auto
        overscroll-x-contain
        pb-3
        snap-x
        snap-mandatory
        scrollbar-hide
        sm:gap-4
      "
    >
      {ACTIONS.map((action, i) => {
        const Icon = action.icon;

        return (
         <div
  key={action.label}
  className="
    min-w-[calc((100vw-2rem-0.75rem)/2)]
    shrink-0
    snap-start
    sm:min-w-[calc((100vw-3rem-1rem)/3)]
    md:min-w-[calc((100vw-3rem-2rem)/4)]
    lg:min-w-[calc((100%-3rem)/4)]
  "
  style={{
    transitionDelay: `${i * 90}ms`,
  }}
>
            <a
              href={action.href}
              className="
                card-soft
                group
                flex
                min-h-[135px]
                h-full
                flex-col
                gap-4
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)]
                sm:min-h-[145px]
                sm:p-5
              "
            >
              <span
                className={`
                  grid
                  h-14
                  w-14
                  shrink-0
                  place-items-center
                  rounded-2xl
                  shadow-sm
                  ${action.color}
                `}
              >
                <Icon
                  className={`
                    h-6
                    w-6
                    transition-all
                    duration-700
                    ease-out
                    ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-20 opacity-0"
                    }
                    group-hover:scale-110
                  `}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                  strokeWidth={1.8}
                />
              </span>

              <span
                className="
                  block
                  text-[13px]
                  font-semibold
                  leading-snug
                  text-ink
                  sm:text-[13.5px]
                "
              >
                {action.label}
              </span>
            </a>
          </div>
        );
      })}
    </div>

    {/* Scroll hint */}
    <div className="mt-2 flex justify-center sm:hidden">
      <span className="text-[10px] font-semibold tracking-wide text-[#7B8790]">
        Swipe to explore →
      </span>
    </div>

  </div>
</section>

      {/* =========================================================
          REQUEST A CALL BACK — FIXED SIDE TAB
      ========================================================= */}

      <button
        type="button"
        onClick={() => {
          setIsCallbackOpen(true);
          setSent(false);
          setError("");
        }}
        aria-label="Request a Call Back"
        className="
          fixed
          right-0
          top-1/2
          z-[100]
          -translate-y-1/2
          rounded-l-lg
          bg-[#E15925]
          px-2.5
          py-4
          text-white
          shadow-[0_8px_25px_rgba(0,0,0,0.18)]
          transition-all
          duration-300
          hover:bg-[#C94D22]
          hover:pr-3.5
          sm:px-3
          sm:py-5
        "
      >
        <span
          className="
            block
            whitespace-nowrap
            text-[12px]
            font-bold
            tracking-wide
            [writing-mode:vertical-rl]
            [transform:rotate(180deg)]
          "
        >
          Request a Call Back
        </span>
      </button>

     {/* =========================================================
    CALLBACK MODAL
========================================================= */}

{isCallbackOpen && (
  <div
    className="
      fixed
      inset-0
      z-[200]
      flex
      items-center
      justify-center
      bg-[#17232B]/65
      p-4
      backdrop-blur-sm
    "
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        closeCallback();
      }
    }}
  >
    <div
      className="
        relative
        w-full
        max-w-[440px]
        overflow-hidden
        rounded-2xl
        border
        border-[#17232B]/8
        bg-[#FFFDF9]
        shadow-[0_25px_80px_rgba(23,35,43,0.22)]
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="callback-title"
    >
      {/* TOP ACCENT */}
      <div className="h-1.5 w-full bg-[#E15925]" />

      <div className="p-6 sm:p-8">

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={closeCallback}
          disabled={isSending}
          aria-label="Close callback form"
          className="
            absolute
            right-5
            top-5
            grid
            h-9
            w-9
            place-items-center
            rounded-full
            border
            border-[#17232B]/10
            bg-white
            text-[#526574]
            shadow-sm
            transition-all
            duration-200
            hover:border-[#E15925]/30
            hover:bg-[#FFF7EF]
            hover:text-[#E15925]
          "
        >
          <X className="h-4 w-4" />
        </button>

        {/* HEADER */}
        <div className="pr-10">
          <div
            className="
              mb-4
              inline-flex
              items-center
              rounded-full
              bg-[#FFF1E8]
              px-3
              py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#E15925]
            "
          >
            Get in touch
          </div>

          <h2
            id="callback-title"
            className="
              text-2xl
              font-extrabold
              tracking-tight
              text-[#263746]
              sm:text-[28px]
            "
          >
            Request a call back
          </h2>

          <p
            className="
              mt-2
              max-w-[340px]
              text-[13px]
              leading-5
              text-[#687985]
            "
          >
            We&apos;ll call you within one working day.
          </p>
        </div>

        {/* FORM / SUCCESS */}
        {sent ? (
          <div
            className="
              mt-7
              rounded-xl
              border
              border-[#E15925]/15
              bg-[#FFF7EF]
              p-6
              text-center
            "
          >
            <div
              className="
                mx-auto
                grid
                h-12
                w-12
                place-items-center
                rounded-full
                bg-[#E15925]
                text-xl
                font-bold
                text-white
              "
            >
              ✓
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#263746]">
              Thank you!
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#687985]">
              Your callback request has been received. Our team will contact
              you within one working day.
            </p>

            <button
              type="button"
              onClick={closeCallback}
              className="
                mt-5
                w-full
                rounded-lg
                bg-[#E15925]
                px-5
                py-3
                text-sm
                font-bold
                text-white
                transition-all
                duration-200
                hover:bg-[#C94D22]
                hover:shadow-[0_8px_20px_rgba(225,89,37,0.20)]
              "
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleCallbackSubmit}
            className="mt-7 space-y-5"
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="callback-name"
                className="
                  mb-2
                  block
                  text-[12px]
                  font-bold
                  tracking-wide
                  text-[#263746]
                "
              >
                Your name
              </label>

              <input
                id="callback-name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                value={callbackData.name}
                onChange={(event) =>
                  setCallbackData((previous) => ({
                    ...previous,
                    name: event.target.value,
                  }))
                }
                className="
                  w-full
                  rounded-lg
                  border
                  border-[#263746]/12
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-[#263746]
                  placeholder:text-[#9AA5AB]
                  outline-none
                  transition-all
                  duration-200
                  focus:border-[#E15925]
                  focus:ring-4
                  focus:ring-[#E15925]/10
                "
              />
            </div>

            {/* PHONE */}
            <div>
              <label
                htmlFor="callback-phone"
                className="
                  mb-2
                  block
                  text-[12px]
                  font-bold
                  tracking-wide
                  text-[#263746]
                "
              >
                Phone number
              </label>

              <input
                id="callback-phone"
                name="phone"
                type="tel"
                required
                placeholder="Enter your phone number"
                value={callbackData.phone}
                onChange={(event) =>
                  setCallbackData((previous) => ({
                    ...previous,
                    phone: event.target.value,
                  }))
                }
                className="
                  w-full
                  rounded-lg
                  border
                  border-[#263746]/12
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-[#263746]
                  placeholder:text-[#9AA5AB]
                  outline-none
                  transition-all
                  duration-200
                  focus:border-[#E15925]
                  focus:ring-4
                  focus:ring-[#E15925]/10
                "
              />
            </div>

            {/* CONCERN */}
            <div>
              <label
                htmlFor="callback-concern"
                className="
                  mb-2
                  block
                  text-[12px]
                  font-bold
                  tracking-wide
                  text-[#263746]
                "
              >
                What&apos;s the concern?
              </label>

              <select
                id="callback-concern"
                name="concern"
                required
                value={callbackData.concern}
                onChange={(event) =>
                  setCallbackData((previous) => ({
                    ...previous,
                    concern: event.target.value,
                  }))
                }
                className="
                  w-full
                  appearance-none
                  rounded-lg
                  border
                  border-[#263746]/12
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-[#263746]
                  outline-none
                  transition-all
                  duration-200
                  focus:border-[#E15925]
                  focus:ring-4
                  focus:ring-[#E15925]/10
                "
              >
                <option value="" disabled>
                  Select a concern
                </option>

                {CALLBACK_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* ERROR */}
            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
                {error}
              </p>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSending}
              className="
                w-full
                rounded-lg
                bg-[#E15925]
                px-5
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-[0_8px_20px_rgba(225,89,37,0.18)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#C94D22]
                hover:shadow-[0_12px_25px_rgba(225,89,37,0.24)]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {isSending ? "Sending..." : "Call me back"}
            </button>

            <p className="text-center text-[11px] leading-4 text-[#8A969D]">
              Your details will only be used to respond to your callback
              request.
            </p>
          </form>
        )}
      </div>
    </div>
  </div>
)}
    </>
  );
}