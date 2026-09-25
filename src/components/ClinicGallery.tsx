import { Reveal } from "@/components/Reveal";
import { MapPin, Armchair, Stethoscope, Cpu } from "lucide-react";
import fachada from "@/assets/galeria-fachada.jpg";
import recepcao from "@/assets/galeria-recepcao.jpg";
import equipamentos from "@/assets/galeria-equipamentos.jpg";
import sobre from "@/assets/sobre-clinica.jpg";
import type { ComponentType, SVGProps } from "react";

type Item = {
  src: string;
  alt: string;
  label: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const items: Item[] = [
  {
    src: recepcao,
    alt: "Recepção aconchegante da clínica JB Odontologia Prime",
    label: "Recepção",
    description: "Acolhimento premium com aromaterapia e café da casa.",
    icon: Armchair,
  },
  {
    src: fachada,
    alt: "Fachada e corredores elegantes da clínica",
    label: "Ambientes",
    description: "Espaços silenciosos e climatizados pensados no seu bem-estar.",
    icon: MapPin,
  },
  {
    src: sobre,
    alt: "Consultório odontológico premium",
    label: "Consultórios",
    description: "Cadeiras ergonômicas, monitor 4K e visualização 3D do seu caso.",
    icon: Stethoscope,
  },
  {
    src: equipamentos,
    alt: "Equipamentos odontológicos modernos",
    label: "Tecnologia",
    description: "Microscópio óptico, scanner intraoral e radiografia digital.",
    icon: Cpu,
  },
];

export function ClinicGallery() {
  return (
    <section
      id="clinica"
      aria-label="Galeria da clínica"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, oklch(0.65 0.09 78 / 0.08), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow eyebrow-center">Nossa Estrutura</p>
            <h2 className="mt-6 text-luxury text-4xl md:text-5xl lg:text-6xl">
              Pensado nos <span className="gold-text">mínimos detalhes</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Uma clínica projetada para que você se sinta especial desde o primeiro passo.
              Silêncio, privacidade, aromas e temperatura pensados para uma experiência odontológica
              fora do comum.
            </p>
          </Reveal>
        </header>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ src, alt, label, description, icon: Icon }, i) => (
            <li key={label}>
              <Reveal delay={i * 90}>
                <figure className="group relative h-full overflow-hidden rounded-[22px] border border-white/[0.07]">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-95" />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at var(--mx,50%) var(--my,50%), oklch(0.65 0.09 78 / 0.2), transparent 55%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-black/40 text-gold backdrop-blur-sm transition-all duration-500 group-hover:bg-gold group-hover:text-ink-deep">
                      <Icon className="!w-[1.1rem] !h-[1.1rem]" strokeWidth={1.7} aria-hidden />
                    </span>
                    <figcaption className="font-display text-2xl leading-tight text-foreground">
                      {label}
                    </figcaption>
                    <p className="mt-3 text-sm leading-6 text-foreground/70">{description}</p>
                  </div>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
