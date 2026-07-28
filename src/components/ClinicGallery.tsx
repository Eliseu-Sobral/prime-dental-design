import { Reveal } from "@/components/Reveal";
import fachada from "@/assets/galeria-fachada.jpg";
import recepcao from "@/assets/galeria-recepcao.jpg";
import equipamentos from "@/assets/galeria-equipamentos.jpg";
import sobre from "@/assets/sobre-clinica.jpg";

const items = [
  { src: recepcao, alt: "Recepção da clínica", label: "Recepção" },
  { src: fachada, alt: "Corredor da clínica", label: "Ambientes" },
  { src: sobre, alt: "Consultório da clínica", label: "Consultórios" },
  { src: equipamentos, alt: "Equipamentos odontológicos modernos", label: "Equipamentos" },
];

export function ClinicGallery() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Conheça a Clínica</p>
          <span className="gold-rule mt-4" />
          <h2 className="mt-6 text-3xl text-graphite-foreground md:text-5xl">
            Um ambiente pensado nos mínimos detalhes
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <figure className="group relative overflow-hidden rounded-2xl">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-5 text-xs uppercase tracking-[0.18em] text-graphite-foreground">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
