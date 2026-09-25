import { MapPin, Clock, Phone, ArrowUpRight, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

const contactItems = [
  {
    icon: MapPin,
    title: "Endereço",
    value: CLINIC.address,
  },
  {
    icon: Clock,
    title: "Horários de Atendimento",
    value: CLINIC.hours,
  },
  {
    icon: Phone,
    title: "Telefone & WhatsApp",
    value: CLINIC.phoneDisplay,
    href: `tel:${CLINIC.whatsappNumber}`,
  },
  {
    icon: Car,
    title: "Acesso & Estacionamento",
    value: "Fácil acesso, estacionamento rotativo conveniado próximo.",
  },
];

export function Location() {
  return (
    <section
      id="localizacao"
      aria-label="Como chegar"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 10% 0%, oklch(0.65 0.09 78 / 0.12), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow">Localização</p>
              <h2 className="mt-6 text-luxury text-4xl leading-tight md:text-5xl">
                Fácil de chegar.
                <br />
                <span className="gold-text">Difícil de esquecer</span>.
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                Situada no coração de Mauá, com infraestrutura de clínica de referência. Agende seu
                horário e descubra uma nova experiência em odontologia.
              </p>

              <ul className="mt-12 space-y-5">
                {contactItems.map(({ icon: Icon, title, value, href }) => (
                  <li
                    key={title}
                    className="group rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5 transition-all duration-500 hover:border-gold/25 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="icon-circle-gold !h-12 !w-12 shrink-0 group-hover:scale-105">
                        <Icon className="!w-[1.1rem] !h-[1.1rem]" strokeWidth={1.6} aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
                          {title}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="mt-2 block text-base leading-7 text-foreground/85 transition-colors hover:text-gold"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-2 m-0 text-base leading-7 text-foreground/85">{value}</p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="goldOutline" size="xl" asChild>
                  <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Abrir no Google Maps
                    <ArrowUpRight className="!w-4 !h-4" strokeWidth={2} />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="group relative overflow-hidden rounded-[26px] border border-white/[0.09] shadow-gold-intense/40">
              <div
                className="pointer-events-none absolute -inset-px -z-10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, oklch(0.65 0.09 78 / 0.25), transparent 60%)",
                }}
              />
              <iframe
                title="Mapa da JB Odontologia Prime em Mauá"
                src={CLINIC.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[460px] w-full bg-black/20 md:h-[560px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
