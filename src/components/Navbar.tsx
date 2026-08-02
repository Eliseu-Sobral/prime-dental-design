import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import { cn } from "@/lib/utils";
import logo from "@/assets/jb-logo.png.asset.json";

const links = [
  { href: "#sobre", label: "A Clínica" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#resultados", label: "Resultados" },
  { href: "#equipe", label: "Equipe" },
  { href: "#localizacao", label: "Localização" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-ink/95 backdrop-blur-md py-2 shadow-soft" : "bg-transparent py-4",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="JB Odontologia Prime"
            width={80}
            height={61}
            className="h-12 w-auto object-contain"
          />
          <span className="hidden font-display text-lg tracking-[0.18em] text-graphite-foreground sm:block">
            JB ODONTOLOGIA <span className="text-gold">PRIME</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-medium uppercase tracking-[0.16em] text-graphite-foreground/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button variant="gold" size="lg" className="hidden md:inline-flex" asChild>
            <a href={whatsappLink("Olá! Gostaria de agendar uma avaliação na JB Odontologia Prime.")}>
              Agendar Avaliação
            </a>
          </Button>
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-graphite-foreground lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-3 border-t border-gold/20 bg-ink/98 px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.16em] text-graphite-foreground/85"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="gold" size="lg" className="w-full" asChild>
                <a href={whatsappLink(`Olá, ${CLINIC.name}! Gostaria de agendar uma avaliação.`)}>
                  Agendar Avaliação
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
