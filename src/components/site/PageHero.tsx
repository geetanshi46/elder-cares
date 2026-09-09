import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-dawn pb-16 pt-28 lg:pb-20 lg:pt-36">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-warm opacity-15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 text-[12.5px] text-muted-foreground"
        >
          <Link to="/" className="transition-colors hover:text-primary-deep">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          <span className="font-medium text-ink">{title}</span>
        </nav>

        <span className="section-eyebrow">{eyebrow}</span>
        <h1 className="mt-6 max-w-3xl font-display text-[2.3rem] font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
          {intro}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
