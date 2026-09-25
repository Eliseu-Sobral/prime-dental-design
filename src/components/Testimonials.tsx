import { Star, Quote, UserCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    name: "Camila R.",
    initials: "CR",
    treatment: "Lentes de contato dental",
    text: "Sempre tive vergonha de sorrir. A Dra. Juliana explicou cada etapa com muita calma e o resultado ficou natural, exatamente como eu imaginava. Hoje sorrio sem receios.",
  },
  {
    name: "Marcos A.",
    initials: "MA",
    treatment: "Implantes dentários",
    text: "Atendimento impecável do começo ao fim. Voltei a mastigar normalmente e o pós-operatório foi muito mais tranquilo do que eu esperava. Recomendo a todos.",
  },
  {
    name: "Fernanda L.",
    initials: "FL",
    treatment: "Odontopediatria",
    text: "Meu filho perdeu completamente o medo de dentista. A equipe é acolhedora, o ambiente é lindo e o cuidado com as crianças é realmente diferenciado.",
  },
  {
    name: "Roberto S.",
    initials: "RS",
    treatment: "Reabilitação oral completa",
    text: "Clínica de altíssimo nível em Mauá. Profissionalismo, pontualidade e um cuidado humano que faz toda diferença. Hoje tenho meu sorriso de volta.",
  },
  {
    name: "Patrícia G.",
    initials: "PG",
    treatment: "Harmonização orofacial",
    text: "Resultado discreto e extremamente natural. Ninguém percebeu que fiz algo, mas todos comentam o quanto estou bem. Exatamente o que eu queria.",
  },
  {
    name: "Ricardo T.",
    initials: "RT",
    treatment: "Endodontia microscópica",
    text: "Rápido, sem dor e com explicação detalhada de cada etapa. Resolveram meu problema de raiz em uma única sessão. Equipe fantástica.",
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de pacientes"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.65 0.09 78 / 0.08), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow eyebrow-center">Depoimentos Reais</p>
            <h2 className="mt-6 text-luxury text-4xl md:text-5xl lg:text-6xl">
              A confiança de quem <span className="gold-text">já transformou</span> seu sorriso
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Palavras de pacientes que confiaram no nosso trabalho. A maior conquista da clínica é
              ver cada sorriso plenamente realizado.
            </p>
          </Reveal>
        </header>

        <Reveal delay={120}>
          <Carousel opts={{ align: "start", loop: true }} className="mt-16 md:mt-20">
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={`${t.name}-${i}`}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 md:pl-6"
                >
                  <blockquote className="group card-premium flex h-full flex-col p-7 md:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/[0.09] border border-gold/30 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink-deep">
                        <Quote className="!w-5 !h-5 -ml-0.5" strokeWidth={1.6} aria-hidden />
                      </div>
                      <div className="flex gap-0.5 text-gold">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="!h-3.5 !w-3.5 fill-current" aria-hidden />
                        ))}
                      </div>
                    </div>

                    <p className="mt-6 flex-1 text-[0.92rem] leading-7 text-foreground/80">
                      <span className="sr-only">Aspas de abertura</span>
                      {t.text}
                      <span className="sr-only">Aspas de fechamento</span>
                    </p>

                    <footer className="mt-7 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/20 via-gold/5 to-transparent font-display text-sm text-gold">
                          {t.initials}
                        </div>
                        <div className="leading-tight">
                          <p className="font-sans text-[0.85rem] font-semibold text-foreground">
                            {t.name}
                          </p>
                          <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold">
                            {t.treatment}
                          </p>
                        </div>
                      </div>
                      <UserCircle2
                        className="!w-5 !h-5 shrink-0 text-foreground/25 transition-colors duration-500 group-hover:text-gold/60"
                        strokeWidth={1.4}
                        aria-hidden
                      />
                    </footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-10 flex items-center justify-center gap-3">
              <CarouselPrevious className="static h-12 w-12 translate-y-0 rounded-xl border border-gold/30 bg-transparent text-gold transition-all hover:scale-105 hover:bg-gold hover:text-ink-deep" />
              <CarouselNext className="static h-12 w-12 translate-y-0 rounded-xl border border-gold/30 bg-transparent text-gold transition-all hover:scale-105 hover:bg-gold hover:text-ink-deep" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
