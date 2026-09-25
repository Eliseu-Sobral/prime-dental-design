import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ServicesGrid } from "@/components/ServicesGrid";
import { About } from "@/components/About";
import { Results } from "@/components/Results";
import { ClinicGallery } from "@/components/ClinicGallery";
import { Doctor } from "@/components/Doctor";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { FinalCTA, Footer } from "@/components/FinalCTA";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const title = "JB Odontologia Prime | Clínica Odontológica Premium em Mauá";
const description =
  "Clínica odontológica premium em Mauá com atendimento de alto padrão. Especializada em implantes, próteses, estética dental e harmonização orofacial.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a0a0a" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen max-w-[100vw] overflow-x-clip bg-background text-foreground ambient-vignette film-grain scrollbar-lux">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ServicesGrid />
        <About />
        <Results />
        <ClinicGallery />
        <Doctor />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
