import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/lib/clinic";
import estetica from "@/assets/estetica.jpg";
import proteses from "@/assets/proteses.jpg";
import harmonizacao from "@/assets/harmonizacao.jpg";

const cases = [
  {
    src: estetica,
    title: "Lentes de contato dental",
    text: "Harmonia de forma e cor em 3 sessões, preservando a estrutura dental.",
  },
  {
    src: proteses,
    title: "Reabilitação com próteses",
    text: "Devolução da função mastigatória e da naturalidade do sorriso.",
  },
  {
    src: harmonizacao,
    title: "Harmonização orofacial",
    text: "Equilíbrio facial com resultado leve, natural e sob medida.",
  },
];

export function Results() {
  return (
    <section id="resultados" className="bg-champagne/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Antes e Depois</p>
          <span className="gold-rule mt-4" />
          <h2 className="mt-6 text-3xl md:text-5xl">Resultados que falam por si</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            Cada caso é planejado individualmente. Conheça alguns dos tratamentos realizados na
            clínica e imagine o que podemos fazer pelo seu sorriso.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <article className="overflow-hidden rounded-2xl bg-background shadow-soft">
                <img
                  src={c.src}
                  alt={c.title}
                  loading="lazy"
                  width={1600}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.12em]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <Button variant="gold" size="xl" asChild>
            <a href={whatsappLink("Olá! Gostaria de ver mais casos e agendar uma avaliação.")}>
              Quero meu novo sorriso
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
