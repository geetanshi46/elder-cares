import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Download,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoHorizontal from "@/assets/nmt-logo-horizontal.png";

const COLUMNS = [
  {
    title: "Organisation",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Leadership", to: "/about" },
      { label: "Annual Reports", to: "/impact" },
      { label: "Careers", to: "/get-involved" },
      { label: "Newsroom", to: "/news-events" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "Dementia Care", to: "/services" },
      { label: "Elder Care", to: "/services" },
      { label: "Training", to: "/services" },
      { label: "Research", to: "/services" },
      { label: "Smriti Gram", to: "/smriti-gram" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Donate", to: "/get-involved" },
      { label: "Volunteer", to: "/get-involved" },
      { label: "Internship", to: "/get-involved" },
      { label: "CSR Partnership", to: "/get-involved" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
] as const;

const DOWNLOADS = [
  "Resources",
  "Annual Report 2024–25 (PDF)",
  "80G & FCRA Certificates (PDF)",
];

const SOCIALS = [
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/NightingalesMedicalTrustDementiaCare/",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/nmteldercare/",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nightingales-medical-trust",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCfDVyJWQZ4JoPw300mnYsTw",
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#17242C] text-white"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-32 -top-28 h-72 w-72 rounded-full bg-[#ED6439]/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-28 top-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#ED6439]/25 blur-3xl" />

      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

        {/* =====================================================
            BRAND + NAVIGATION
            ===================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_2fr] lg:gap-12">

          {/* LEFT — BRAND */}
          <div>
            {/* Logo */}
            <div className="inline-flex bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.14)]">
              <img
                src={logoHorizontal}
                alt="Nightingales Medical Trust — NMT Eldercare, Estd 1998"
                width={1419}
                height={492}
                className="h-12 w-auto max-w-[180px] object-contain sm:h-[52px] sm:max-w-[195px]"
              />
            </div>

            {/* Accent */}
            <div className="mt-4 flex items-center gap-3">
              <span className="h-[3px] w-11 rounded-full bg-white" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ED6439]" />
            </div>

            {/* Description */}
            <p className="mt-4 max-w-md text-[13.5px] leading-[1.65] text-white/85">
              A not-for-profit organisation dedicated to the well-being
              of the elderly and persons with Dementia
            </p>
          </div>

          {/* RIGHT — NAVIGATION */}
          <div className="grid grid-cols-2 gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="flex items-center gap-2.5">
                  <span className="h-[2px] w-7 bg-[#ED6439]" />

                  <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">
                    {col.title}
                  </h3>
                </div>

                <ul className="mt-4 space-y-2.5 text-[13.5px]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="inline-block text-white/80 transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Download Centre */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-7 bg-[#ED6439]" />

                <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">
                  Download Centre
                </h3>
              </div>

              <ul className="mt-4 space-y-3 text-[13px]">
                {DOWNLOADS.map((file) => (
                  <li key={file}>
                    <a
                      href="#download"
                      className="group flex items-start gap-2.5 text-white/80 transition-colors hover:text-white"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center bg-white/10 text-[#ED6439] transition-colors group-hover:bg-white">
                        <Download
                          className="h-3.5 w-3.5"
                          strokeWidth={1.8}
                        />
                      </span>

                      <span className="leading-relaxed">{file}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* =====================================================
            CONTACT INFORMATION — ONE ROW ON DESKTOP
            ===================================================== */}

        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">

          {/* Address */}
          <div className="flex items-center gap-3 border border-white/20 bg-black/[0.07] px-3.5 py-3 transition-all duration-300 hover:border-white/35 hover:bg-black/[0.11]">
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-white/15">
              <MapPin className="h-4 w-4" strokeWidth={1.8} />
            </span>

            <span className="text-[12.5px] leading-relaxed text-white/85">
              8P6, Kasturinagar, 3rd A Cross Rd, Banasawadi,
              Bengaluru 560043
            </span>
          </div>

          {/* Phone */}
          <a
            href="tel:+918042426565"
            className="flex items-center gap-3 border border-white/20 bg-black/[0.07] px-3.5 py-3 text-[13px] text-white/85 transition-all duration-300 hover:border-white/35 hover:bg-black/[0.11] hover:text-white"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-white/15">
              <Phone className="h-4 w-4" strokeWidth={1.8} />
            </span>

            +91 80 4242 6565
          </a>

          {/* Email */}
          <a
            href="mailto:contact@nightingaleseldercare.com"
            className="flex items-center gap-3 border border-white/20 bg-black/[0.07] px-3.5 py-3 text-[12.5px] text-white/85 transition-all duration-300 hover:border-white/35 hover:bg-black/[0.11] hover:text-white"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-white/15">
              <Mail className="h-4 w-4" strokeWidth={1.8} />
            </span>

            <span className="break-all">
              contact@nightingaleseldercare.com
            </span>
          </a>
        </div>

        {/* =====================================================
            SOCIAL MEDIA
            ===================================================== */}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
            Follow Us
          </p>

          <div className="flex gap-2">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center border border-white/25 bg-white/[0.08] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#ED6439]"
              >
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
            ===================================================== */}

        <div className="mt-7 grid gap-3 border-t border-white/20 pt-5 text-[11px] text-white/65 sm:flex sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Nightingales Medical Trust.
            All rights reserved.
          </p>

          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>

            <a href="#terms" className="transition-colors hover:text-white">
              Terms of Use
            </a>

            <a href="#refund" className="transition-colors hover:text-white">
              Donation & Refund Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}