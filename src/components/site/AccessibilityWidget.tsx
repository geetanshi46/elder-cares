import { useEffect, useState } from "react";
import { Accessibility, Minus, Plus, RotateCcw, X } from "lucide-react";

type TextSize = "small" | "normal" | "large" | "extra-large";

const TEXT_SIZE_VALUES: Record<TextSize, string> = {
  small: "0.9",
  normal: "1",
  large: "1.1",
  "extra-large": "1.2",
};

const STORAGE_KEY = "nmt-accessibility";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const settings = JSON.parse(saved);

        if (settings.textSize) {
          setTextSize(settings.textSize);
        }

        if (typeof settings.highContrast === "boolean") {
          setHighContrast(settings.highContrast);
        }

        if (typeof settings.underlineLinks === "boolean") {
          setUnderlineLinks(settings.underlineLinks);
        }
      } catch {
        // Ignore invalid saved accessibility settings
      }
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty(
      "--accessibility-text-scale",
      TEXT_SIZE_VALUES[textSize]
    );

    root.classList.toggle("accessibility-high-contrast", highContrast);
    root.classList.toggle("accessibility-underline-links", underlineLinks);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        textSize,
        highContrast,
        underlineLinks,
      })
    );
  }, [textSize, highContrast, underlineLinks]);

  const increaseTextSize = () => {
    setTextSize((current) => {
      if (current === "small") return "normal";
      if (current === "normal") return "large";
      if (current === "large") return "extra-large";
      return "extra-large";
    });
  };

  const decreaseTextSize = () => {
    setTextSize((current) => {
      if (current === "extra-large") return "large";
      if (current === "large") return "normal";
      if (current === "normal") return "small";
      return "small";
    });
  };

  const resetAccessibility = () => {
    setTextSize("normal");
    setHighContrast(false);
    setUnderlineLinks(false);
  };

  return (
    <>
      {/* Accessibility floating button */}
      <div className="fixed bottom-24 right-4 z-[999]">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Open accessibility options"
          aria-expanded={isOpen}
          className="grid h-12 w-12 place-items-center rounded-full bg-[#ED6439] text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#D9532B] focus:outline-none focus:ring-4 focus:ring-[#ED6439]/30"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Accessibility className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Accessibility panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[998] w-[calc(100vw-2rem)] max-w-[290px] rounded-2xl border border-[#263746]/10 bg-white p-5 shadow-2xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ED6439]/10 text-[#ED6439]">
              <Accessibility className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-display text-base font-bold text-[#263746]">
                Accessibility
              </h2>

              <p className="text-xs text-[#526574]">
                Adjust your viewing preferences
              </p>
            </div>
          </div>

          {/* Text size */}
          <div className="border-b border-[#263746]/10 pb-5">
            <p className="mb-3 text-sm font-bold text-[#263746]">
              Text Size
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={decreaseTextSize}
                aria-label="Decrease text size"
                className="grid h-10 w-10 place-items-center rounded-lg border border-[#263746]/15 bg-white text-[#263746] transition hover:border-[#ED6439] hover:bg-[#FFF4EF] hover:text-[#ED6439]"
              >
                <Minus className="h-4 w-4" />
              </button>

              <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#FFF4EF] text-sm font-semibold text-[#263746]">
                {textSize === "small" && "Small"}
                {textSize === "normal" && "Normal"}
                {textSize === "large" && "Large"}
                {textSize === "extra-large" && "Extra Large"}
              </div>

              <button
                type="button"
                onClick={increaseTextSize}
                aria-label="Increase text size"
                className="grid h-10 w-10 place-items-center rounded-lg border border-[#263746]/15 bg-white text-[#263746] transition hover:border-[#ED6439] hover:bg-[#FFF4EF] hover:text-[#ED6439]"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* High contrast */}
          <label className="flex cursor-pointer items-center justify-between gap-4 border-b border-[#263746]/10 py-4">
            <div>
              <p className="text-sm font-semibold text-[#263746]">
                High Contrast
              </p>

              <p className="mt-0.5 text-xs text-[#526574]">
                Improve text visibility
              </p>
            </div>

            <input
              type="checkbox"
              checked={highContrast}
              onChange={(event) =>
                setHighContrast(event.target.checked)
              }
              className="h-4 w-4 accent-[#ED6439]"
            />
          </label>

          {/* Underline links */}
          <label className="flex cursor-pointer items-center justify-between gap-4 border-b border-[#263746]/10 py-4">
            <div>
              <p className="text-sm font-semibold text-[#263746]">
                Underline Links
              </p>

              <p className="mt-0.5 text-xs text-[#526574]">
                Make links easier to identify
              </p>
            </div>

            <input
              type="checkbox"
              checked={underlineLinks}
              onChange={(event) =>
                setUnderlineLinks(event.target.checked)
              }
              className="h-4 w-4 accent-[#ED6439]"
            />
          </label>

          {/* Reset */}
          <button
            type="button"
            onClick={resetAccessibility}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-[#263746]/15 px-4 py-2.5 text-sm font-semibold text-[#263746] transition hover:border-[#ED6439] hover:bg-[#FFF4EF] hover:text-[#ED6439]"
          >
            <RotateCcw className="h-4 w-4" />
            Reset Settings
          </button>
        </div>
      )}
    </>
  );
}