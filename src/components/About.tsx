import { HeartHandshake, Sparkles, Cpu } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import sobreImg from "@/assets/sobre-clinica.jpg";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Escuta atenta, planejamento transparente e acompanhamento em cada etapa do tratamento.",
  },
  {
    icon: Cpu,
    title: "Tecnologia de ponta",
    text: "Diagnóstico digital, escaneamento intraoral e protocolos modernos para resultados precisos.",
  },
  {
    icon: Sparkles,
    title: "Ambiente premium",
    text: "Espaço moderno, silencioso e acolhedor, pensado para o seu conforto do início ao fim.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">A Clínica</p>
          <span className="gold-rule mt-4" />
          <h2 className="mt-6 text-3xl leading-tight md:text-5xl">
            Seu sorriso nas mãos de profissionais altamente qualificados
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            A JB Odontologia Prime nasceu do desejo de oferecer em Mauá uma experiência
            odontológica à altura das melhores clínicas do país. Sob a direção da{" "}
            <strong className="font-semibold text-foreground">Dra. Juliana Viana</strong>, unimos
            técnica apurada, tecnologia e um olhar genuinamente humano para cada paciente.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Do primeiro diagnóstico ao acompanhamento pós-tratamento, cada detalhe é conduzido
            com precisão, segurança e discrição.
          </p>

          <ul className="mt-10 grid gap-6">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/40 text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.12em]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative">
            <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-2xl bg-champagne" />
            <img
              src={sobreImg}
              alt="Consultório elegante da JB Odontologia Prime"
              loading="lazy"
              width={1600}
              height={900}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
