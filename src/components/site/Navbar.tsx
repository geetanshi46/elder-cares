import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  Search,
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react";

import logoHorizontal from "@/assets/nmt-logo-horizontal.png";
import { SITE_SEARCH_INDEX } from "../../lib/searchIndex";

const NAV_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Smriti Gram", to: "/smriti-gram" },
  { label: "The Road Ahead", to: "/the-road-ahead" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Impact", to: "/impact" },
  { label: "News & Events", to: "/news-events" },
  { label: "Contact", to: "/contact" },
] as const;

function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const searchResults = useMemo(() => {
    const query = normalizeSearchText(searchQuery);

    if (!query) {
      return [];
    }

    const terms = query.split(" ").filter(Boolean);

    return SITE_SEARCH_INDEX.map((item) => {
      const title = normalizeSearchText(item.title);
      const description = normalizeSearchText(item.description);
      const keywords = item.keywords.map(normalizeSearchText);
      const searchable = `${title} ${description} ${keywords.join(" ")}`;

      let score = 0;

      if (title === query) score += 100;
      if (title.includes(query)) score += 60;
      if (keywords.some((keyword) => keyword === query)) score += 55;
      if (keywords.some((keyword) => keyword.includes(query))) score += 35;
      if (description.includes(query)) score += 25;

      for (const term of terms) {
        if (title.includes(term)) score += 18;
        if (keywords.some((keyword) => keyword.includes(term))) score += 12;
        if (description.includes(term)) score += 8;
      }

      return { item, score, searchable };
    })
      .filter(({ score, searchable }) => score > 0 && searchable.length > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(({ item }) => item);
  }, [searchQuery]);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim() || searchResults.length === 0) {
      return;
    }

    window.location.href = searchResults[0].href;
  };

  const handleSearchResultClick = () => {
    closeSearch();
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-all duration-500 ${
        scrolled ? "shadow-soft" : "border-b border-border/70"
      }`}
    >
      {/* =========================================================
          TOP CONTACT STRIP
          ========================================================= */}
      <div className="bg-[#D9533B] text-white">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div
            className="
              flex
              min-h-9
              w-full
              items-center
              justify-between
              gap-3
              py-1.5
              text-[9.5px]
              font-semibold
              sm:min-h-10
              sm:gap-6
              sm:py-2
              sm:text-xs
            "
          >
            {/* PHONE — LEFT */}
            <a
              href="tel:+918042426565"
              aria-label="Call Nightingales Medical Trust at 080 4242 6565"
              className="
                inline-flex
                min-w-0
                shrink-0
                items-center
                gap-1.5
                whitespace-nowrap
                transition-opacity
                hover:opacity-80
              "
            >
              <Phone
                className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                strokeWidth={2.2}
              />

              <span>080 - 4242 6565</span>
            </a>

            {/* EMAIL — RIGHT */}
            <a
              href="mailto:contact@nightingaleseldercare.com"
              aria-label="Email Nightingales Medical Trust"
              className="
                inline-flex
                min-w-0
                max-w-[58%]
                items-center
                justify-end
                gap-1.5
                transition-opacity
                hover:opacity-80
                sm:max-w-none
              "
            >
              <Mail
                className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                strokeWidth={2.2}
              />

              <span className="truncate">
                contact@nightingaleseldercare.com
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          SKIP LINK
          ========================================================= */}
      <a
        href="#main"
        className="
          sr-only
          focus:not-sr-only
          focus:absolute
          focus:left-4
          focus:top-4
          focus:z-[60]
          focus:rounded-full
          focus:bg-primary
          focus:px-4
          focus:py-2
          focus:text-sm
          focus:text-primary-foreground
        "
      >
        Skip to content
      </a>

      {/* =========================================================
          MAIN NAVBAR
          ========================================================= */}
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          gap-4
          px-3
          py-2
          sm:gap-5
          sm:px-6
          sm:py-2.5
          lg:px-8
          lg:py-3
          xl:grid
          xl:grid-cols-[210px_minmax(0,1fr)_auto]
          xl:items-center
          xl:gap-4
          xl:py-3.5
          xl:pr-8
          2xl:grid-cols-[220px_minmax(0,1fr)_auto]
          2xl:gap-5
        "
      >
        {/* =======================================================
            HORIZONTAL LOGO
            ======================================================= */}
        <Link
          to="/"
          aria-label="Nightingales Medical Trust home"
          className="
            -ml-1
            flex
            w-fit
            shrink-0
            items-center
            sm:-ml-1.5
            xl:ml-0
            2xl:-ml-1
          "
        >
          <img
            src={logoHorizontal}
            alt="Nightingales Medical Trust — NMT Eldercare, Estd 1998"
            width={1419}
            height={492}
            className="
              h-[60px]
              w-auto
              max-w-[175px]
              object-contain
              sm:h-[68px]
              sm:max-w-[195px]
              md:h-[72px]
              md:max-w-[205px]
              lg:h-[76px]
              lg:max-w-[220px]
              xl:h-[76px]
              xl:max-w-[210px]
              2xl:h-[78px]
              2xl:max-w-[220px]
            "
          />
        </Link>

        {/* =======================================================
            DESKTOP NAVIGATION
            ======================================================= */}
        <nav
          aria-label="Primary"
          className="
            hidden
            min-w-0
            items-center
            justify-center
            gap-0
            overflow-hidden
            xl:flex
            xl:px-1
            2xl:gap-0.5
          "
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              activeProps={{
                className: "bg-primary-soft text-primary-deep",
              }}
              className="
                whitespace-nowrap
                rounded-full
                px-2.5
                py-2.5
                text-[13px]
                font-semibold
                text-foreground
                transition-all
                duration-200
                hover:bg-primary-soft
                hover:text-primary-deep
                2xl:px-3
                2xl:text-[13.5px]
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* =======================================================
            RIGHT ACTIONS
            ======================================================= */}
        <div
          className="
            ml-auto
            flex
            shrink-0
            items-center
            gap-3
            xl:ml-0
            xl:justify-self-end
            2xl:gap-3.5
          "
        >
          {/* SEARCH */}
          <button
            type="button"
            aria-label="Search the site"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
            className="
              grid
              h-10
              w-10
              shrink-0
              place-items-center
              rounded-full
              border
              border-border
              bg-card/70
              text-foreground/70
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-primary/40
              hover:text-primary-deep
              hover:shadow-soft
              sm:h-11
              sm:w-11
            "
          >
            {searchOpen ? (
              <X
                className="h-[18px] w-[18px] sm:h-[19px] sm:w-[19px]"
                strokeWidth={1.8}
              />
            ) : (
              <Search
                className="h-[18px] w-[18px] sm:h-[19px] sm:w-[19px]"
                strokeWidth={1.8}
              />
            )}
          </button>

          {/* =====================================================
              DONATE NOW
              ===================================================== */}
          <Link
            to="/get-involved"
            hash="donate"
            aria-label="Donate"
            className="
              hidden
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#ED6439]
              px-4
              py-2.5
              text-[13px]
              font-bold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#ED6439]
              hover:shadow-lg
              xl:inline-flex
              2xl:px-5
            "
          >
            Donate
          </Link>

          {/* MOBILE MENU */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="
              grid
              h-10
              w-10
              shrink-0
              place-items-center
              rounded-full
              border
              border-border
              bg-card/70
              text-foreground/80
              shadow-sm
              transition-all
              duration-300
              hover:border-primary/40
              hover:text-primary-deep
              xl:hidden
              sm:h-11
              sm:w-11
            "
          >
            {menuOpen ? (
              <X
                className="h-[18px] w-[18px] sm:h-[19px] sm:w-[19px]"
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                className="h-[18px] w-[18px] sm:h-[19px] sm:w-[19px]"
                strokeWidth={1.8}
              />
            )}
          </button>
        </div>
      </div>

      {/* =========================================================
          SEARCH PANEL
          ========================================================= */}
      {searchOpen && (
        <div
          className="
            border-t
            border-border
            bg-card/95
            px-3
            py-4
            shadow-[0_18px_45px_-24px_rgba(0,0,0,0.28)]
            backdrop-blur-xl
            sm:px-6
            lg:px-8
          "
        >
          <form
            className="mx-auto flex max-w-4xl items-center gap-2"
            onSubmit={handleSearchSubmit}
          >
            <label htmlFor="site-search" className="sr-only">
              Search Nightingales Medical Trust
            </label>

            <div
              className="
                flex
                min-w-0
                flex-1
                items-center
                gap-3
                rounded-full
                border
                border-border
                bg-background
                px-4
                py-3
                shadow-sm
                focus-within:border-[#ED6439]/50
                focus-within:ring-2
                focus-within:ring-[#ED6439]/10
              "
            >
              <Search
                className="h-4 w-4 shrink-0 text-muted-foreground"
                strokeWidth={1.8}
              />

              <input
                id="site-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dementia care, services, memory clinics, Smriti Gram..."
                autoFocus
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  text-sm
                  outline-none
                  placeholder:text-muted-foreground
                "
              />
            </div>

            <button
              type="submit"
              disabled={!searchQuery.trim() || searchResults.length === 0}
              className="
                shrink-0
                rounded-full
                bg-[#ED6439]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#ED6439]
                hover:shadow-lg
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:translate-y-0
                disabled:hover:shadow-sm
              "
            >
              Search
            </button>
          </form>

          {/* SEARCH RESULTS */}
          {searchQuery.trim() && (
            <div
  className="
    mx-auto
    mt-3
    max-w-4xl
    max-h-[420px]
    overflow-y-auto
    overflow-x-hidden
    rounded-2xl
    border
    border-border
    bg-background
    shadow-lg
  "
>
              {searchResults.length > 0 ? (
                <div className="p-2">
                  <div className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Search results
                  </div>

                  {searchResults.map((result) => (
                    <a
                      key={`${result.title}-${result.href}`}
                      href={result.href}
                      onClick={handleSearchResultClick}
                      className="
                        flex
                        items-center
                        justify-between
                        gap-4
                        rounded-xl
                        px-4
                        py-3
                        transition-colors
                        hover:bg-primary-soft
                      "
                    >
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-foreground">
                          {result.title}
                        </span>

                        <span className="mt-0.5 block line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {result.description}
                        </span>
                      </span>

                      <ChevronRight
                        className="h-4 w-4 shrink-0 text-muted-foreground"
                        strokeWidth={1.8}
                      />
                    </a>
                  ))}
                </div>
              ) : (
                <div className="px-5 py-6 text-center">
                  <Search className="mx-auto h-5 w-5 text-muted-foreground" />

                  <p className="mt-2 text-sm font-semibold text-foreground">
                    No results found
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Try terms like dementia, caregiver, memory, Smriti Gram,
                    donation, training or elder abuse.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* =========================================================
          MOBILE MENU
          ========================================================= */}
      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="
            max-h-[70vh]
            overflow-y-auto
            border-t
            border-border
            bg-card/95
            px-4
            pb-6
            pt-2
            backdrop-blur-xl
            xl:hidden
          "
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                px-3
                py-3
                text-[15px]
                font-medium
                text-foreground/85
                transition-colors
                hover:bg-primary-soft
                hover:text-primary-deep
              "
            >
              {link.label}

              <ChevronRight
                className="h-4 w-4 text-muted-foreground"
                strokeWidth={1.8}
              />
            </Link>
          ))}

          {/* MOBILE DONATE BUTTON */}
          <Link
            to="/get-involved"
            hash="donate"
            onClick={() => setMenuOpen(false)}
            className="
              mt-3
              flex
              items-center
              justify-center
              rounded-xl
              bg-[#ED6439]
              px-4
              py-3
              text-[15px]
              font-bold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:bg-[#ED6439]
              hover:shadow-lg
            "
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}