import { Cpu, Award, HeartHandshake, CalendarRange } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { ComponentType, SVGProps } from "react";

type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

const features: Feature[] = [
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    text: "Equipamentos modernos para diagnósticos precisos e tratamentos minimamente invasivos.",
  },
  {
    icon: Award,
    title: "Dentistas Experientes",
    text: "Profissionais altamente qualificados e em constante atualização científica.",
  },
  {
    icon: HeartHandshake,
    title: "Conforto do Paciente",
    text: "Priorizamos seu bem-estar com uma abordagem acolhedora, cuidadosa e amigável.",
  },
  {
    icon: CalendarRange,
    title: "Agendamento Flexível",
    text: "Horários estendidos e sábado para se adaptar ao seu ritmo de vida agitado.",
  },
];

export function Features() {
  return (
    <section
      aria-label="Nossos diferenciais"
      className="relative overflow-hidden border-y border-white/[0.06] bg-background/60 py-16 backdrop-blur-xs md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "var(--gradient-gold-soft)" }}
      />
      <div className="divider-gold absolute top-0 left-0 right-0 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 80}>
                <article className="group flex h-full flex-col items-start text-center sm:items-start">
                  <div className="icon-circle-gold group-hover:gold-ring-glow mb-6">
                    <Icon className="!w-[1.4rem] !h-[1.4rem]" strokeWidth={1.4} aria-hidden />
                  </div>
                  <h3 className="mb-3 w-full text-left font-sans text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-foreground sm:text-left">
                    {title}
                  </h3>
                  <p className="m-0 w-full text-left text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <div className="divider-gold absolute bottom-0 left-0 right-0 opacity-70" />
    </section>
  );
}
