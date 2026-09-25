import { useRef, type MouseEvent } from "react";
import {
  ShieldCheck,
  Sparkles,
  Award,
  ArrowUpDown,
  ArrowUpRight,
  HeartPulse,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/lib/clinic";
import clinicaGeral from "@/assets/clinica-geral.jpg";
import estetica from "@/assets/estetica.jpg";
import implantes from "@/assets/implantes.jpg";
import proteses from "@/assets/proteses.jpg";
import canal from "@/assets/canal.jpg";
import cirurgia from "@/assets/cirurgia.jpg";
import odontopediatria from "@/assets/odontopediatria.jpg";
import harmonizacao from "@/assets/harmonizacao.jpg";
import type { ComponentType, SVGProps } from "react";

type ServiceCard = {
  eyebrow: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: string;
  imageAlt: string;
};

const services: ServiceCard[] = [
  {
    eyebrow: "Clínica Geral",
    title: "Prevenção e Diagnóstico",
    description:
      "Consultas completas, limpezas, raspagens e diagnóstico precoce para uma saúde bucal de ferro.",
    icon: ShieldCheck,
    image: clinicaGeral,
    imageAlt: "Dentista realizando avaliação em consultório",
  },
  {
    eyebrow: "Estética Dental",
    title: "Sorriso de Cinema",
    description:
      "Lentes de contato, facetas e clareamento de última geração para um sorriso naturalmente deslumbrante.",
    icon: Sparkles,
    image: estetica,
    imageAlt: "Sorriso branco e harmonioso",
  },
  {
    eyebrow: "Implantes",
    title: "Dentes Novos em 3D",
    description:
      "Implantes de titânio com planejamento digital guiado para resultado previsível e duradouro.",
    icon: Award,
    image: implantes,
    imageAlt: "Modelo 3D de implante dentário",
  },
  {
    eyebrow: "Ortodontia",
    title: "Alinhadores Estéticos",
    description:
      "Aparelhos fixos e alinhadores transparentes para corrigir o sorriso sem abrir mão da estética.",
    icon: ArrowUpDown,
    image: proteses,
    imageAlt: "Alinhadores transparentes odontológicos",
  },
  {
    eyebrow: "Endodontia",
    title: "Tratamento de Canal",
    description:
      "Realizado sob microscópio óptico, preservando seu dente natural com máxima precisão.",
    icon: HeartPulse,
    image: canal,
    imageAlt: "Microscópio óptico odontológico em uso",
  },
  {
    eyebrow: "Cirurgia Oral",
    title: "Procedimentos Seguros",
    description:
      "Extrações, sisos e enxertos com técnica atraumática, sedação consciente e recuperação rápida.",
    icon: Sparkles,
    image: cirurgia,
    imageAlt: "Ambiente cirúrgico odontológico moderno",
  },
  {
    eyebrow: "Odontopediatria",
    title: "Pequenos Grandes Sorrisos",
    description:
      "Atendimento lúdico e acolhedor que transforma a visita ao dentista em uma experiência divertida.",
    icon: Users,
    image: odontopediatria,
    imageAlt: "Criança sorrindo no consultório odontológico",
  },
  {
    eyebrow: "Harmonização",
    title: "Equilíbrio Orofacial",
    description:
      "Procedimentos minimamente invasivos que valorizam seus traços com moderação e naturalidade.",
    icon: Sparkles,
    image: harmonizacao,
    imageAlt: "Harmonização facial e sorriso",
  },
];

function handleCardPointerMove(e: MouseEvent<HTMLElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty("--mx", `${x}%`);
  card.style.setProperty("--my", `${y}%`);
}

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="especialidades"
      aria-label="Nossas especialidades"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[min(900px,120vw)] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.65 0.09 78 / 0.12), transparent 70%)",
        }}
      />

      <header className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="eyebrow eyebrow-center">Nossos Serviços</p>
          <h2 className="mt-6 text-luxury text-4xl md:text-5xl lg:text-6xl">
            Cuidado <span className="gold-text">completo</span> para o seu sorriso
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
            Da prevenção à alta estética, oferecemos tratamentos sob medida, planejados digitalmente
            e executados com o mais alto padrão de excelência.
          </p>
          <div className="mt-8 flex justify-end max-w-xs mx-auto">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light"
            >
              Ver todos
              <ArrowUpRight className="!w-4 !h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </header>

      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 70}>
                <article
                  onPointerMove={handleCardPointerMove}
                  className="card-premium group flex h-full flex-col p-6"
                >
                  <div className="relative mb-5 aspect-[5/4] overflow-hidden rounded-xl">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={640}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-black/30 text-gold backdrop-blur-sm transition-all duration-500 group-hover:bg-gold group-hover:text-ink-deep">
                      <s.icon className="!w-[1.1rem] !h-[1.1rem]" strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold">
                      {s.eyebrow}
                    </p>
                    <h3 className="mb-3 font-display text-2xl leading-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-7 text-muted-foreground">
                      {s.description}
                    </p>

                    <a
                      href={whatsappLink(
                        `Olá! Gostaria de mais informações sobre ${s.eyebrow} — ${s.title}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-auto inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-colors duration-300 hover:text-gold"
                    >
                      Saiba mais
                      <ArrowUpRight className="!w-3.5 !h-3.5 transition-transform duration-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={200} className="mt-16 text-center">
          <Button variant="goldOutline" size="xl" asChild>
            <a
              href={whatsappLink(
                "Olá! Quero um planejamento personalizado para o meu tratamento odontológico.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero meu planejamento personalizado
              <ArrowUpRight className="!w-4 !h-4" strokeWidth={2} />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
