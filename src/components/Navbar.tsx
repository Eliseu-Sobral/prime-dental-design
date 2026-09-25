import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import { cn } from "@/lib/utils";

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
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = links.map((l) => l.href.slice(1));
      let current = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-black/60 py-2 backdrop-blur-xl border-b border-gold/15"
          : "bg-transparent py-5",
      )}
    >
      <div className="divider-gold absolute bottom-0 left-0 right-0 opacity-40" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3 transition-transform duration-500 hover:scale-[1.01]"
        >
          <img
            src="/logo.png"
            alt="JB Odontologia Prime"
            width={180}
            height={220}
            className={cn(
              "h-16 w-auto object-contain transition-all duration-500 md:h-20",
              scrolled ? "h-14 md:h-16 drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]" : "",
            )}
          />
        </a>

        <ul className="hidden items-center gap-8 xl:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={cn(
                    "relative text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-500 py-3",
                    isActive ? "text-gold" : "text-foreground/70 hover:text-gold",
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500",
                      isActive ? "w-full" : "w-0 group-hover:w-full hover:w-full",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${CLINIC.whatsappNumber}`}
            className="hidden items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:text-gold md:inline-flex"
            aria-label="Telefone da clínica"
          >
            <Phone className="!w-4 !h-4" strokeWidth={1.6} />
            <span>{CLINIC.phoneDisplay}</span>
          </a>

          <Button
            variant="gold"
            size="lg"
            className="hidden md:inline-flex shadow-gold-intense hover:shadow-gold-intense"
            asChild
          >
            <a
              href={whatsappLink(
                "Olá! Gostaria de agendar uma avaliação premium na JB Odontologia Prime.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarCheck className="!w-4 !h-4" strokeWidth={1.8} />
              Agendar Avaliação
            </a>
          </Button>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-gold backdrop-blur transition-all hover:border-gold/40 xl:hidden"
          >
            {open ? (
              <X className="!w-5 !h-5" strokeWidth={1.8} />
            ) : (
              <Menu className="!w-5 !h-5" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-gold/10 bg-black/90 backdrop-blur-2xl transition-[max-height,opacity] duration-700 ease-out xl:hidden",
          open ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-8 lg:px-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-center justify-between rounded-2xl border border-white/[0.05] px-5 py-4 text-sm uppercase tracking-[0.18em] text-foreground/80 transition-all duration-500 hover:border-gold/30 hover:text-gold",
                  active === l.href.slice(1) ? "border-gold/25 bg-gold/[0.04] text-gold" : "",
                )}
              >
                <span>{l.label}</span>
                <span className="h-px w-8 bg-foreground/20 transition-all duration-500 group-hover:w-14 group-hover:bg-gold" />
              </a>
            </li>
          ))}
          <li className="pt-4">
            <Button variant="gold" size="xl" className="w-full" asChild>
              <a
                href={whatsappLink(
                  `Olá, ${CLINIC.name}! Gostaria de agendar uma avaliação premium.`,
                )}
                onClick={() => setOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Avaliação
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
