import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/lib/clinic";
import { cn } from "@/lib/utils";
import { Award, ArrowUpRight, BadgeCheck, GraduationCap, UserCircle2 } from "lucide-react";

const team = [
  {
    name: "Dra. Juliana Viana",
    cro: "CROSP 123.456",
    image: "/juliana.jpeg",
    position: "Diretora Clínica · Reabilitação & Estética",
    bio: "Responsável técnica da JB Odontologia Prime, dedica sua carreira à reabilitação oral e à estética do sorriso. Une formação internacional contínua, precisão clínica e uma escuta próxima para construir tratamentos sob medida com resultado natural.",
    credentials: [
      "Implantodontia e Reabilitação Oral Avançada",
      "Estética Digital & Lentes de Contato",
      "Harmonização Orofacial Master",
    ],
  },
  {
    name: "Dra. Beatriz Almeida",
    cro: "CROSP 147.206",
    image: "/beatriz.jpg",
    position: "Clínica Geral · Endodontia · Odontopediatria",
    bio: "Atua com odontologia clínica e estética, com olhar minucioso para detalhes e um atendimento acolhedor. Conduz cada tratamento com planejamento individualizado, biossegurança rigorosa e foco na preservação da estrutura dental natural.",
    credentials: [
      "Clínica Geral e Prevenção",
      "Endodontia Microscópica",
      "Odontopediatria Comportamental",
    ],
  },
];

export function Doctor() {
  return (
    <section
      id="equipe"
      aria-label="Nossa equipe"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 100% at 50% 0%, oklch(0.65 0.09 78 / 0.1), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow eyebrow-center">A Equipe</p>
            <h2 className="mt-6 text-luxury text-4xl md:text-5xl lg:text-6xl">
              Profissionais <span className="gold-text">dedicadas</span> ao seu sorriso
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Duas cirurgiãs-dentistas apaixonadas por criar sorrisos. Especialistas com formação
              contínua e compromisso inabalável com o melhor desfecho para cada paciente.
            </p>
          </Reveal>
        </header>

        <div className="mt-20 space-y-24 md:space-y-32">
          {team.map((d, i) => (
            <article
              key={d.name}
              className="grid items-center gap-14 md:gap-20 md:grid-cols-[0.9fr_1.1fr]"
            >
              <Reveal className={cn(i % 2 === 1 && "md:order-2")}>
                <div className="relative">
                  <div
                    className="pointer-events-none absolute -inset-6 -z-10 opacity-50 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, oklch(0.65 0.09 78 / 0.22), transparent 60%)",
                    }}
                  />
                  <div className="relative overflow-hidden rounded-[26px] border border-white/[0.09]">
                    <img
                      src={d.image}
                      alt={`Retrato profissional da ${d.name}`}
                      loading="lazy"
                      width={960}
                      height={1200}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <div className="flex items-center gap-3 rounded-2xl border border-gold/40 bg-black/45 px-4 py-3 backdrop-blur-md">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                          <BadgeCheck className="!w-5 !h-5" strokeWidth={1.6} aria-hidden />
                        </span>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
                          {d.cro}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120} className={cn(i % 2 === 1 && "md:order-1")}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2">
                  <UserCircle2 className="!w-4 !h-4 text-gold" strokeWidth={1.6} />
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-foreground/60">
                    {d.position}
                  </span>
                </div>

                <h3 className="mt-7 text-luxury text-3xl leading-[1.05] md:text-5xl">{d.name}</h3>
                <p className="mt-6 text-base leading-8 text-muted-foreground md:text-[1.02rem]">
                  {d.bio}
                </p>

                <h4 className="mt-10 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground/70">
                  <GraduationCap className="!w-4 !h-4 text-gold" strokeWidth={1.6} />
                  Especialidades
                </h4>
                <ul className="mt-5 space-y-4">
                  {d.credentials.map((c) => (
                    <li
                      key={c}
                      className="group flex items-start gap-4 rounded-2xl border border-white/[0.05] bg-white/[0.015] p-4 transition-colors duration-500 hover:border-gold/20 hover:bg-white/[0.04]"
                    >
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/[0.08] text-gold transition-all duration-500 group-hover:scale-105">
                        <Award className="!w-[1rem] !h-[1rem]" strokeWidth={1.7} />
                      </span>
                      <p className="m-0 text-sm leading-6 text-foreground/80">{c}</p>
                    </li>
                  ))}
                </ul>

                <Button variant="goldOutline" size="xl" className="mt-10" asChild>
                  <a
                    href={whatsappLink(`Olá! Gostaria de agendar uma consulta com a ${d.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar com {d.name.split(" ").slice(0, 2).join(" ")}
                    <ArrowUpRight className="!w-4 !h-4" strokeWidth={2} />
                  </a>
                </Button>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
