import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "plain",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: string;
  tone?: "plain" | "sand";
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${tone === "sand" ? "bg-sand" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || intro) && (
          <Reveal className="max-w-3xl">
            {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
            {title ? (
              <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.6rem]">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">{intro}</p>
            ) : null}
          </Reveal>
        )}
        <div className={eyebrow || title ? "mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function CardGrid({ children, cols = 3 }: { children: ReactNode; cols?: 2 | 3 | 4 }) {
  const map = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  } as const;
  return <div className={`grid gap-5 ${map[cols]}`}>{children}</div>;
}

export function InfoCard({
  icon: Icon,
  title,
  body,
  items,
  delay = 0,
}: {
  icon?: LucideIcon;
  title: string;
  body?: string;
  items?: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="card-soft group relative h-full overflow-hidden p-7 lg:p-8">
        <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-warm opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
        {Icon ? (
          <span className="relative grid place-items-center rounded-2xl bg-primary-soft p-3.5 text-primary-deep transition-transform duration-300 group-hover:scale-105 w-fit">
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </span>
        ) : null}
        <h3 className="relative mt-6 font-display text-lg font-bold text-ink">{title}</h3>
        {body ? (
          <p className="relative mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
            {body}
          </p>
        ) : null}
        {items?.length ? (
          <ul className="relative mt-5 space-y-2.5">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.2} />
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </Reveal>
  );
}

export function LinkCard({
  title,
  body,
  href,
  delay = 0,
}: {
  title: string;
  body: string;
  href: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <a href={href} className="card-soft group flex h-full flex-col p-7">
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">{body}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-deep">
          Learn more
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        </span>
      </a>
    </Reveal>
  );
}

export function StatRow({ stats }: { stats: { k: string; v: string }[] }) {
  return (
    <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.v} delay={i * 90}>
          <div className="card-soft h-full p-7">
            <dt className="font-display text-3xl font-extrabold text-gradient-warm">{s.k}</dt>
            <dd className="mt-2 text-[13.5px] leading-snug text-muted-foreground">{s.v}</dd>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}

export function Timeline({ items }: { items: { year: string; title: string; body: string }[] }) {
  return (
    <ol className="relative border-l border-border pl-8">
      {items.map((item, i) => (
        <li key={item.year} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[41px] grid h-6 w-6 place-items-center rounded-full bg-gradient-warm text-[10px] font-bold text-primary-foreground">
            {i + 1}
          </span>
          <Reveal delay={i * 70}>
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-primary-deep">
              {item.year}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-ink">{item.title}</h3>
            <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function DownloadList({
  files,
}: {
  files: { name: string; meta: string; href?: string }[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {files.map((f, i) => (
        <Reveal key={f.name} delay={i * 60}>
          <a
            href={f.href ?? "#download"}
            target={f.href ? "_blank" : undefined}
            rel={f.href ? "noreferrer" : undefined}
            className="card-soft flex items-center justify-between gap-4 p-5"
          >
            <span>
              <span className="block text-[14.5px] font-semibold text-ink">{f.name}</span>
              <span className="mt-1 block text-[12.5px] text-muted-foreground">{f.meta}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-primary-deep" strokeWidth={2} />
          </a>
        </Reveal>
      ))}
    </ul>
  );
}
