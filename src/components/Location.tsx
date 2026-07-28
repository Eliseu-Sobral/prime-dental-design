import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

export function Location() {
  return (
    <section id="localizacao" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Localização</p>
          <span className="gold-rule mt-4" />
          <h2 className="mt-6 text-3xl md:text-5xl">Fácil de chegar, difícil de esquecer</h2>

          <ul className="mt-10 space-y-7">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em]">Endereço</p>
                <p className="mt-1 text-sm text-muted-foreground">{CLINIC.address}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em]">Horários</p>
                <p className="mt-1 text-sm text-muted-foreground">{CLINIC.hours}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em]">Contato</p>
                <p className="mt-1 text-sm text-muted-foreground">{CLINIC.phoneDisplay}</p>
              </div>
            </li>
          </ul>

          <Button variant="goldOutline" size="lg" className="mt-10" asChild>
            <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
              Abrir no Google Maps
            </a>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <iframe
            title="Mapa da JB Odontologia Prime"
            src={CLINIC.mapEmbed}
            loading="lazy"
            className="h-[420px] w-full rounded-2xl border border-border shadow-soft"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
