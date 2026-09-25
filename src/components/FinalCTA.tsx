import {
  Instagram,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  Sparkles,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CLINIC, whatsappLink } from "@/lib/clinic";

export function FinalCTA() {
  return (
    <section
      id="contato"
      aria-label="Chamada final para contato"
      className="relative isolate overflow-hidden py-24 md:py-36"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.13 0.002 60) 0%, oklch(0.14 0.01 60 / 0.9) 40%, oklch(0.12 0.01 60) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 100%, oklch(0.65 0.09 78 / 0.22), transparent 65%), radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.65 0.09 78 / 0.12), transparent 60%)",
        }}
      />
      <div className="divider-gold absolute top-0 left-0 right-0 opacity-80" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal className="relative text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/40 px-5 py-2.5 backdrop-blur-sm">
            <Sparkles className="!w-4 !h-4 text-gold" strokeWidth={1.6} aria-hidden />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Vamos transformar seu sorriso
            </span>
          </div>

          <h2 className="text-luxury text-5xl leading-[1.02] sm:text-6xl md:text-[5.25rem] lg:text-[5.75rem]">
            Seu novo sorriso{" "}
            <span className="block sm:inline">
              começa{" "}
              <span className="gold-text-shine" data-text="hoje">
                hoje
              </span>
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-foreground/70 md:text-lg">
            Agende sua avaliação premium e receba um plano de tratamento individualizado, com todas
            as etapas e valores explicados com total transparência.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={whatsappLink(
                  "Olá! Quero agendar minha avaliação premium na JB Odontologia Prime.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar pelo WhatsApp
                <ArrowUpRight className="!w-4 !h-4" strokeWidth={2} />
              </a>
            </Button>
            <Button variant="luxInk" size="xl" asChild>
              <a href={`tel:${CLINIC.whatsappNumber}`}>
                <Phone className="!w-4 !h-4 text-gold" strokeWidth={1.8} />
                Ligar agora
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const quickLinks = [
  { href: "#top", label: "Início" },
  { href: "#sobre", label: "A Clínica" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#resultados", label: "Resultados" },
  { href: "#equipe", label: "Equipe" },
  { href: "#localizacao", label: "Localização" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-black/60 py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 0%, oklch(0.65 0.09 78 / 0.06), transparent 65%)",
        }}
      />
      <div className="divider-gold absolute top-0 left-0 right-0 opacity-50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <a
              href="#top"
              className="group inline-flex items-center gap-3 transition-transform duration-500 hover:scale-[1.01]"
            >
              <img
                src="/logo.png"
                alt="JB Odontologia Prime"
                loading="lazy"
                width={220}
                height={270}
                className="h-24 w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] md:h-28"
              />
            </a>
            <p className="mt-6 max-w-xs text-sm leading-7 text-foreground/55">
              Odontologia premium em Mauá. Excelência técnica, tecnologia de ponta e cuidado humano
              em cada detalhe do seu sorriso.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {[
                {
                  icon: Instagram,
                  href: CLINIC.instagram,
                  label: "Instagram da clínica",
                },
                {
                  icon: Facebook,
                  href: CLINIC.instagram,
                  label: "Facebook da clínica",
                },
                {
                  icon: Linkedin,
                  href: CLINIC.instagram,
                  label: "LinkedIn da clínica",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-foreground/50 transition-all duration-500 hover:border-gold/40 hover:bg-gold/[0.08] hover:text-gold"
                >
                  <Icon className="!w-[1rem] !h-[1rem]" strokeWidth={1.6} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Links Rápidos
            </h3>
            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm leading-6 text-foreground/55 transition-colors duration-300 hover:text-gold"
                  >
                    <span className="h-px w-5 bg-foreground/15 transition-all duration-500 group-hover:w-8 group-hover:bg-gold" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Contato
            </h3>
            <ul className="mt-6 space-y-5 text-sm text-foreground/65">
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 !h-4 !w-4 shrink-0 text-gold"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <a
                  href={`tel:${CLINIC.whatsappNumber}`}
                  className="transition-colors hover:text-gold"
                >
                  {CLINIC.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 !h-4 !w-4 shrink-0 text-gold"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="leading-6">{CLINIC.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Instagram
                  className="mt-0.5 !h-4 !w-4 shrink-0 text-gold"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <a
                  href={CLINIC.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {CLINIC.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Horários
            </h3>
            <div className="mt-6">
              <p className="text-sm leading-7 text-foreground/65">{CLINIC.hours}</p>
            </div>
            <h4 className="mt-8 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Corpo Clínico
            </h4>
            <ul className="mt-5 space-y-3">
              {CLINIC.doctors.map((d) => (
                <li key={d.name} className="text-xs leading-6 text-foreground/60">
                  <p className="font-semibold text-foreground/75">{d.name}</p>
                  <p className="text-[0.65rem] tracking-[0.18em] uppercase text-gold/80">{d.cro}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/[0.08] pt-8 md:flex-row md:items-center">
          <p className="text-xs leading-6 text-foreground/40">
            © {new Date().getFullYear()} {CLINIC.name}. Todos os direitos reservados. Odontologia de
            alto padrão em Mauá — SP.
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-foreground/30">
            Feito com <span className="text-gold">excelência</span> ·{" "}
            <span className="text-gold">biossegurança</span> ·{" "}
            <span className="text-gold">humanidade</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
