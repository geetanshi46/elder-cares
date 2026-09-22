import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { Hero } from "@/components/home/Hero";
import { QuickActions } from "@/components/home/QuickActions";
// import { SilentCrisis } from "@/components/home/SilentCrisis";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Impact } from "@/components/home/Impact";
import { SmritiGram } from "@/components/home/SmritiGram";
import { RoadAhead } from "@/components/home/RoadAhead";
import { Testimonials } from "@/components/home/Testimonials";
import { Events } from "@/components/home/Events";
import { GetInvolved } from "@/components/home/GetInvolved";
import { Partners } from "@/components/home/Partners";
// import { Blogs } from "@/components/home/Blogs";
import { Newsletter } from "@/components/home/Newsletter";
import { FinalCta } from "@/components/home/FinalCta";
import { Recognitions } from "@/components/home/Recognitions";

const title = "Nightingales Medical Trust — Dignified Elder & Dementia Care";
const description =
  "Compassionate and innovative age care since 1998 — memory clinics, day care, home care, elder helplines and Smriti Gram, India's first dementia village.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main id="main">
        <Hero />
        <QuickActions />
        {/* <SilentCrisis /> */}
        <About />
        <Services />
        <Impact />
        <SmritiGram />
        <RoadAhead />
        <Recognitions />
<GetInvolved />
{/* <Testimonials /> */}
{/* <Events /> */}
<Partners />
        {/* <Blogs /> */}
        {/* <Newsletter /> */}
        {/* <FinalCta /> */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
