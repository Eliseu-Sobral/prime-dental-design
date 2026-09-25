import { Users, Calendar, BadgeCheck, HeartPulse, Shield, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import sobreImg from "@/assets/sobre-clinica.jpg";
import type { ComponentType, SVGProps } from "react";

const stats = [
  { icon: Users, value: "3.500+", label: "Pacientes felizes" },
  { icon: Calendar, value: "15+", label: "Anos de experiência" },
  { icon: BadgeCheck, value: "100%", label: "Satisfação" },
  { icon: HeartPulse, value: "9", label: "Especialidades" },
] as const;

type Pillar = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

const pillars: Pillar[] = [
  {
    icon: HeartPulse,
    title: "Atendimento humanizado",
    text: "Escuta atenta, planejamento transparente e acompanhamento próximo em cada etapa.",
  },
  {
    icon: Shield,
    title: "Tecnologia de ponta",
    text: "Diagnóstico digital, microscópio óptico, escaneamento intraoral e protocolos modernos.",
  },
  {
    icon: Sparkles,
    title: "Ambiente premium",
    text: "Espaço silencioso, climatizado e acolhedor, pensado no seu conforto absoluto.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-24 md:py-32"
      aria-label="Sobre a clínica"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, oklch(0.65 0.09 78 / 0.12), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_1fr] lg:gap-24">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-px rounded-[28px] opacity-60 blur-xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08]">
                <img
                  src={sobreImg}
                  alt="Interior elegante da JB Odontologia Prime"
                  loading="lazy"
                  decoding="async"
                  width={1400}
                  height={1750}
                  className="aspect-[4/5] w-full object-cover img-lux"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center gap-3 rounded-2xl border border-gold/40 bg-black/40 px-5 py-4 backdrop-blur-md">
                    <div className="flex -space-x-2">
                      {[Users, Calendar, BadgeCheck].map((Icon, i) => (
                        <span
                          key={i}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold-deep/60 to-gold/20 text-gold ring-2 ring-black"
                        >
                          <Icon className="!w-4 !h-4" strokeWidth={1.8} aria-hidden />
                        </span>
                      ))}
                    </div>
                    <div className="leading-tight">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">
                        Excelência real
                      </p>
                      <p className="text-sm text-foreground/85">
                        Milhares de sorrisos já transformados
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">A Clínica</p>
              <h2 className="mt-6 text-luxury text-4xl leading-tight md:text-5xl lg:text-[3.4rem]">
                Cuidado em quem você pode <span className="gold-text">confiar</span>.
                <br />
                Sorriso que você vai <span className="italic text-foreground/70">amar exibir</span>.
              </h2>
              <p className="mt-8 text-base leading-8 text-muted-foreground md:text-[1.02rem]">
                A <strong className="font-semibold text-foreground">JB Odontologia Prime</strong>{" "}
                nasceu do desejo de oferecer em Mauá uma experiência odontológica à altura das
                melhores clínicas do país. Sob a direção da{" "}
                <strong className="font-semibold text-foreground">Dra. Juliana Viana</strong>,
                unimos técnica apurada, tecnologias importadas e um olhar genuinamente humano para
                cada paciente.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Do primeiro diagnóstico ao acompanhamento pós-tratamento, cada detalhe é conduzido
                com precisão, segurança e discrição.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <ul className="mt-12 grid gap-8 sm:grid-cols-2">
                {pillars.map(({ icon: Icon, title, text }) => (
                  <li
                    key={title}
                    className="group flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-500 hover:border-gold/30 hover:bg-white/[0.04]"
                  >
                    <span className="icon-circle-gold !h-12 !w-12 shrink-0 group-hover:scale-105">
                      <Icon className="!w-[1.1rem] !h-[1.1rem]" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="mb-1.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-foreground">
                        {title}
                      </h3>
                      <p className="m-0 text-sm leading-6 text-muted-foreground">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-24 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.015] to-transparent p-8 md:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 60% 80% at 50% -10%, oklch(0.65 0.09 78 / 0.18), transparent 60%)",
              }}
            />
            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div
                  key={label}
                  className="relative text-center"
                  style={
                    i < stats.length - 1
                      ? {
                          borderRight: "1px solid oklch(0.65 0.09 78 / 0.14)",
                        }
                      : undefined
                  }
                >
                  <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/[0.08] text-gold">
                    <Icon className="!w-[1.4rem] !h-[1.4rem]" strokeWidth={1.5} />
                  </div>
                  <div className="font-display text-5xl leading-none gold-text md:text-6xl">
                    {value}
                  </div>
                  <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-foreground/60">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
