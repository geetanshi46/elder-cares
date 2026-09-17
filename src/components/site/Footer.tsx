/* eslint-disable prettier/prettier */
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
      { label: "NMT In News", to: "/news-events" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "Dementia and Medical Care", to: "/services", hash: "dementia-care" },
      { label: "Care for Marginalized Elders", to: "/services", hash: "marginalized" },
      { label: "Prevention of Elder Abuse", to: "/services", hash: "elder-protection" },
      { label: "Empowerment and Livelihood", to: "/services", hash: "empowerment-livelihood" },
      { label: "Supporting Old Age Homes", to: "/services", hash: "old-age-homes" },
      { label: "Training and Capacity Building", to: "/services", hash: "capacity-building" },
      { label: "Awareness and Advocacy", to: "/services", hash: "awareness" },
      { label: "Nightingales Smriti Gram", to: "/smriti-gram" },
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
  {
    label: "Annual Report 2024–25 (PDF)",
    href: "https://nightingaleseldercare.com/assets/files/Annual_Report_2024_2025.pdf",
  },
  {
    label: "80G & FCRA Certificates (PDF)",
    href: "#download",
  },
];

const SOCIALS = [
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/nmteldercare/",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCfDVyJWQZ4JoPw300mnYsTw",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/NightingalesMedicalTrustDementiaCare/",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nightingales-medical-trust",
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#E15925] text-white"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-32 -top-28 h-72 w-72 rounded-full bg-white/12 blur-3xl" />

      <div className="pointer-events-none absolute -right-28 top-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/12 blur-3xl" />

      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-8 text-left sm:px-6 sm:py-10 lg:px-8 lg:py-14">

        {/* =====================================================
            BRAND + NAVIGATION
            ===================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[250px_1fr] lg:gap-10 xl:grid-cols-[270px_1fr] xl:gap-12">

          {/* LEFT — BRAND */}
          <div className="w-full max-w-[280px]">
            {/* Logo */}
            <div className="inline-flex max-w-full rounded-md bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.14)]">
              <img
                src={logoHorizontal}
                alt="Nightingales Medical Trust — NMT Eldercare, Estd 1998"
                width={1419}
                height={492}
                className="h-auto w-auto max-h-11 max-w-[190px] object-contain sm:max-h-12 sm:max-w-[210px] md:max-w-[225px]"
              />
            </div>

            {/* Accent */}
            <div className="mt-3 flex items-center gap-2.5">
              <span className="h-[2.5px] w-9 rounded-full bg-white" />
              <span className="h-2 w-2 rounded-full bg-[#F29000]" />
            </div>

            {/* Description */}
            <p className="mt-3 text-[13px] leading-[1.6] text-white/80">
              A not-for-profit organisation dedicated to the well-being
              of the elderly and persons with Dementia
            </p>
          </div>

          {/* RIGHT — NAVIGATION */}
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-8 text-left min-[420px]:grid-cols-2 sm:gap-y-9 lg:grid-cols-4 lg:gap-x-7">
            {COLUMNS.map((col) => (
              <div key={col.title} className="text-left">
                <div className="text-left">
                  <h3 className="text-left text-sm font-bold uppercase tracking-[0.18em] text-white/90">
  {col.title}
</h3>
                </div>

                <ul className="mt-4 space-y-2.5 text-[13.5px]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        hash={"hash" in link ? (link.hash as string) : undefined}
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
            <div className="text-left">
              <div className="text-left">
                <h3 className="text-left text-sm font-bold uppercase tracking-[0.18em] text-white/90">
  Download Centre
</h3>
              </div>

              <ul className="mt-4 space-y-3 text-[13px]">
                {DOWNLOADS.map((file) => (
  <li key={file.label}>
    <a
      href={file.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-2.5 text-white/80 transition-colors hover:text-white"
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center bg-[#14212B] text-white transition-colors group-hover:bg-white">
        <Download
          className="h-3.5 w-3.5 text-white group-hover:text-[#14212B]"
          strokeWidth={1.8}
        />
      </span>

      <span className="leading-relaxed">{file.label}</span>
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
          <div className="flex items-center gap-3 border border-[#14212B]/70 bg-[#14212B] px-3.5 py-3 transition-all duration-300 hover:border-white/60 hover:bg-[#14212B]">
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-white/15">
              <MapPin className="h-4 w-4 text-white" strokeWidth={1.8} />
            </span>

            <span className="text-[12.5px] leading-relaxed text-white">
              8P6, Kasturinagar, 3rd A Cross Rd, Banasawadi,
              Bengaluru 560043
            </span>
          </div>

          {/* Phone */}
          <a
            href="tel:+918042426565"
            className="flex items-center gap-3 border border-[#14212B]/70 bg-[#14212B] px-3.5 py-3 text-[13px] text-white transition-all duration-300 hover:border-white/60 hover:bg-[#14212B] hover:text-white"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-white/15">
              <Phone className="h-4 w-4 text-white" strokeWidth={1.8} />
            </span>

            +91 80 4242 6565
          </a>

          {/* Email */}
          <a
            href="mailto:contact@nightingaleseldercare.com"
            className="flex items-center gap-3 border border-[#14212B]/70 bg-[#14212B] px-3.5 py-3 text-[12.5px] text-white transition-all duration-300 hover:border-white/60 hover:bg-[#14212B] hover:text-white"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-white/15">
              <Mail className="h-4 w-4 text-white" strokeWidth={1.8} />
            </span>

            <span className="break-all">
              contact@nightingaleseldercare.com
            </span>
          </a>
        </div>

        {/* =====================================================
            SOCIAL MEDIA
            ===================================================== */}

        <div className="mt-7 flex flex-col gap-4 border-t border-white/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
            Follow Us
          </p>

          <div className="flex flex-wrap gap-2.5">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/35 bg-white/[0.12] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#F29000] sm:h-11 sm:w-11"
              >
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
            ===================================================== */}

        <div className="mt-7 grid gap-4 border-t border-white/25 pt-5 text-[11px] text-white/75 sm:flex sm:items-center sm:justify-between">
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