import { Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import logo from "@/assets/jb-logo.jpeg.asset.json";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-25"
        style={{ background: "var(--gradient-graphite)" }}
      />
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow">Vamos começar</p>
        <h2 className="mt-6 text-4xl text-graphite-foreground md:text-6xl">
          Seu novo sorriso <span className="text-gold">começa hoje</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-graphite-foreground/70 md:text-base">
          Agende sua avaliação e receba um plano de tratamento personalizado, com todas as
          etapas e valores explicados com clareza.
        </p>
        <Button variant="whatsapp" size="xl" className="mt-10" asChild>
          <a href={whatsappLink("Olá! Quero agendar minha avaliação na JB Odontologia Prime.")}>
            Agendar pelo WhatsApp
          </a>
        </Button>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-ink py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt="JB Odontologia Prime"
            loading="lazy"
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite-foreground/60">
            Odontologia premium em Mauá. Excelência técnica e cuidado humano em cada sorriso.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Contato
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-graphite-foreground/70">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" strokeWidth={1.4} />
              {CLINIC.phoneDisplay}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
              {CLINIC.address}
            </li>
            <li>
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Instagram className="h-4 w-4 text-gold" strokeWidth={1.4} />
                {CLINIC.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Atendimento
          </h3>
          <p className="mt-5 text-sm text-graphite-foreground/70">{CLINIC.hours}</p>
          <p className="mt-2 text-sm text-graphite-foreground/70">
            Responsável técnica: {CLINIC.doctor} — {CLINIC.cro}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-gold/15 px-6 pt-6">
        <p className="text-xs text-graphite-foreground/45">
          © {new Date().getFullYear()} {CLINIC.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
