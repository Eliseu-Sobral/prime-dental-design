import { Star } from "lucide-react";
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
    treatment: "Lentes de contato dental",
    text: "Sempre tive vergonha de sorrir. A Dra. Juliana explicou cada etapa com muita calma e o resultado ficou natural, exatamente como eu queria.",
  },
  {
    name: "Marcos A.",
    treatment: "Implantes",
    text: "Atendimento impecável do começo ao fim. Voltei a mastigar normalmente e o pós-operatório foi muito tranquilo.",
  },
  {
    name: "Fernanda L.",
    treatment: "Odontopediatria",
    text: "Meu filho perdeu completamente o medo de dentista. A equipe é acolhedora e o ambiente é lindo.",
  },
  {
    name: "Roberto S.",
    treatment: "Prótese e reabilitação",
    text: "Clínica de altíssimo nível em Mauá. Profissionalismo, pontualidade e um cuidado que faz diferença.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Depoimentos</p>
          <span className="gold-rule mt-4" />
          <h2 className="mt-6 text-3xl text-graphite-foreground md:text-5xl">
            A confiança de quem já passou por aqui
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                  <blockquote className="h-full rounded-2xl border border-gold/20 bg-graphite p-8">
                    <div className="flex gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-graphite-foreground/80">
                      “{t.text}”
                    </p>
                    <footer className="mt-6 border-t border-gold/20 pt-4">
                      <p className="text-sm text-graphite-foreground">{t.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-gold">
                        {t.treatment}
                      </p>
                    </footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0 border-gold/40 bg-transparent text-gold hover:bg-gold hover:text-primary-foreground" />
              <CarouselNext className="static translate-y-0 border-gold/40 bg-transparent text-gold hover:bg-gold hover:text-primary-foreground" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
