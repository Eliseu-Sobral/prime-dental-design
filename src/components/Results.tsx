import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/lib/clinic";
import { ArrowUpRight, Sparkles, Maximize2 } from "lucide-react";
import estetica from "@/assets/estetica.jpg";
import proteses from "@/assets/proteses.jpg";
import harmonizacao from "@/assets/harmonizacao.jpg";

const cases = [
  {
    src: estetica,
    eyebrow: "Estética",
    title: "Lentes de contato dental",
    text: "Harmonia de forma e cor em 3 sessões, preservando a estrutura dental com máxima naturalidade.",
  },
  {
    src: proteses,
    eyebrow: "Reabilitação",
    title: "Próteses fixas sobre implantes",
    text: "Devolução completa da função mastigatória, da fala e da autoestima com resultado previsível.",
  },
  {
    src: harmonizacao,
    eyebrow: "Harmonização",
    title: "Equilíbrio orofacial",
    text: "Procedimentos minimamente invasivos que valorizam seus traços com moderação e elegância.",
  },
];

export function Results() {
  return (
    <section
      id="resultados"
      aria-label="Resultados clínicos"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, oklch(0.65 0.09 78 / 0.12), transparent 55%), radial-gradient(circle at 85% 100%, oklch(0.65 0.09 78 / 0.1), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="eyebrow">Antes & Depois</p>
            <h2 className="mt-6 text-luxury text-4xl md:text-5xl lg:text-6xl">
              Resultados que <span className="gold-text">falam por si</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-base leading-8 text-muted-foreground md:text-right">
              Cada caso é planejado individualmente com Digital Smile Design. Conheça alguns dos
              tratamentos realizados e imagine o que podemos fazer pelo seu sorriso.
            </p>
          </Reveal>
        </header>

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={i * 110}>
                <article className="group card-premium flex h-full flex-col overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={c.src}
                      alt={c.title}
                      loading="lazy"
                      width={1600}
                      height={900}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/45 px-3.5 py-1.5 backdrop-blur-sm">
                      <Sparkles className="!w-3.5 !h-3.5 text-gold" strokeWidth={1.6} />
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold">
                        {c.eyebrow}
                      </span>
                    </div>
                    <div className="absolute bottom-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:border-gold/50 group-hover:text-gold">
                      <Maximize2 className="!w-4 !h-4" strokeWidth={1.6} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-2xl leading-tight text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{c.text}</p>
                    <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                    <a
                      href={whatsappLink(
                        `Olá! Vi o caso de ${c.title} e gostaria de saber mais sobre um tratamento parecido.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground/70 transition-colors duration-300 hover:text-gold"
                    >
                      Quero um resultado assim
                      <ArrowUpRight className="!w-4 !h-4 transition-transform duration-500 hover:translate-x-0.5 hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={200} className="mt-20 text-center">
          <Button variant="gold" size="xl" asChild>
            <a
              href={whatsappLink(
                "Olá! Gostaria de ver mais casos reais e agendar uma avaliação personalizada.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero meu novo sorriso
              <ArrowUpRight className="!w-4 !h-4" strokeWidth={2} />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
