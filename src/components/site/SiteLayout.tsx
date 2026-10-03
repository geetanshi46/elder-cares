import type { ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { QuickActions } from "@/components/home/QuickActions";
import { AccessibilityWidget } from "@/components/site/AccessibilityWidget";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />

      <AccessibilityWidget />

      <main id="main">{children}</main>

      <div className="pb-16">
        <QuickActions />
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}