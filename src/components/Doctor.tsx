import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/lib/clinic";
import { cn } from "@/lib/utils";
import dra from "@/assets/dra-juliana.jpg";
import draBeatriz from "@/assets/dra-beatriz.jpg";

const team = [
  {
    name: "Dra. Juliana Viana",
    cro: "CROSP 123.456",
    image: dra,
    bio: "Responsável técnica da JB Odontologia Prime, dedica sua carreira à reabilitação e à estética do sorriso. Une formação contínua, precisão clínica e uma escuta próxima para construir tratamentos sob medida.",
    credentials: [
      "Implantodontia e Reabilitação Oral",
      "Estética Dental e Lentes de Contato",
      "Harmonização Orofacial",
    ],
  },
  {
    name: "Dra. Beatriz Almeida",
    cro: "CROSP 147206",
    image: draBeatriz,
    bio: "Atua com odontologia clínica e estética, com olhar minucioso para detalhes e um atendimento acolhedor. Conduz cada tratamento com planejamento individualizado e foco na naturalidade do resultado.",
    credentials: [
      "Clínica Geral e Prevenção",
      "Estética Dental e Clareamento",
      "Endodontia e Odontopediatria",
    ],
  },
];

export function Doctor() {
  return (
    <section id="equipe" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Equipe</p>
          <span className="gold-rule mt-4" />
          <h2 className="mt-6 text-3xl md:text-5xl">Profissionais dedicadas ao seu sorriso</h2>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {team.map((d, i) => (
            <div
              key={d.name}
              className="grid items-center gap-12 md:grid-cols-[0.85fr_1fr] md:gap-16"
            >
              <Reveal className={cn(i % 2 === 1 && "md:order-2")}>
                <div className="relative">
                  <div
                    className={cn(
                      "absolute -top-5 -z-10 h-40 w-40 rounded-2xl border border-gold/40",
                      i % 2 === 1 ? "-left-5" : "-right-5",
                    )}
                  />
                  <img
                    src={d.image}
                    alt={`Retrato da ${d.name}`}
                    loading="lazy"
                    width={960}
                    height={1200}
                    className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft"
                  />
                </div>
              </Reveal>

              <Reveal delay={120} className={cn(i % 2 === 1 && "md:order-1")}>
                <h3 className="text-3xl md:text-4xl">{d.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">{d.cro}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {d.bio}
                </p>
                <ul className="mt-8 space-y-3">
                  {d.credentials.map((c) => (
                    <li
                      key={c}
                      className="border-l border-gold/50 pl-4 text-sm text-muted-foreground"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <Button variant="goldOutline" size="lg" className="mt-9" asChild>
                  <a href={whatsappLink(`Olá! Gostaria de agendar com a ${d.name}.`)}>
                    Agendar com a {d.name.replace("Dra. ", "Dra. ").split(" ").slice(0, 2).join(" ")}
                  </a>
                </Button>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
