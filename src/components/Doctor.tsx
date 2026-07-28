import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import dra from "@/assets/dra-juliana.jpg";

const credentials = [
  "Implantodontia e Reabilitação Oral",
  "Estética Dental e Lentes de Contato",
  "Harmonização Orofacial",
];

export function Doctor() {
  return (
    <section id="equipe" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.85fr_1fr] md:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -right-5 -top-5 -z-10 h-40 w-40 rounded-2xl border border-gold/40" />
            <img
              src={dra}
              alt={`Retrato da ${CLINIC.doctor}`}
              loading="lazy"
              width={960}
              height={1200}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Equipe</p>
          <span className="gold-rule mt-4" />
          <h2 className="mt-6 text-3xl md:text-5xl">{CLINIC.doctor}</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">{CLINIC.cro}</p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            Responsável técnica da JB Odontologia Prime, dedica sua carreira à reabilitação e à
            estética do sorriso. Une formação contínua, precisão clínica e uma escuta próxima
            para construir tratamentos sob medida.
          </p>
          <ul className="mt-8 space-y-3">
            {credentials.map((c) => (
              <li
                key={c}
                className="border-l border-gold/50 pl-4 text-sm text-muted-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
          <Button variant="goldOutline" size="lg" className="mt-9" asChild>
            <a href={whatsappLink(`Olá! Gostaria de agendar com a ${CLINIC.doctor}.`)}>
              Agendar com a Dra. Juliana
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
