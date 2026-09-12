import { useEffect, useRef, useState } from "react";
import { HandHeart } from "lucide-react";
import {
  Brain,
  HeartHandshake,
  ShieldCheck,
  Briefcase,
  Home,
  GraduationCap,
  Landmark,
  Megaphone,
  Users,
  Handshake,
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

export function QuickActions() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Quick actions"
      className="relative z-10 -mt-10 pb-6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            lg:gap-4
          "
        >
          {ACTIONS.map((action, i) => {
            const Icon = action.icon;

            return (
              <div
                key={action.label}
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
                    h-full
                    min-h-[135px]
                    flex-col
                    gap-4
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)]
                    lg:min-h-[145px]
                    lg:p-5
                  "
                >

                  {/* =================================================
                      LARGE VIBRANT ICON
                      ================================================= */}

                  <span
                    className={`
                      grid
                      h-16
                      w-16
                      shrink-0
                      place-items-center
                      rounded-2xl
                      shadow-sm
                      ${action.color}
                    `}
                  >
                    <Icon
                      className={`
                        h-7
                        w-7
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

                  {/* =================================================
                      LABEL
                      ================================================= */}

                  <span
                    className="
                      block
                      text-[13.5px]
                      font-semibold
                      leading-snug
                      text-ink
                    "
                  >
                    {action.label}
                  </span>

                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}