import { Button } from "@/components/ui/button";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import heroImg from "@/assets/hero-clinica.jpg";
import logo from "@/assets/jb-logo.jpeg.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Recepção da clínica JB Odontologia Prime"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-30 blur-[1px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />


      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <img
          src={logo.url}
          alt="Logo JB Odontologia Prime"
          width={112}
          height={112}
          className="h-24 w-24 rounded-full object-cover shadow-gold md:h-28 md:w-28"
        />
        <p className="eyebrow mt-8">Odontologia de alto padrão · Mauá — SP</p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-graphite-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Transformando Sorrisos com <span className="text-gold">Excelência</span>
        </h1>
        <p className="mt-7 max-w-xl text-sm leading-relaxed text-graphite-foreground/75 md:text-base">
          Clínica premium especializada em implantes, próteses, estética dental e harmonização
          orofacial. Tecnologia avançada, ambiente acolhedor e um cuidado inteiramente dedicado
          ao seu sorriso.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="gold" size="xl" asChild>
            <a href={whatsappLink(`Olá, ${CLINIC.name}! Gostaria de agendar uma avaliação.`)}>
              Agendar Avaliação
            </a>
          </Button>
          <Button variant="whatsapp" size="xl" asChild>
            <a href={whatsappLink("Olá! Gostaria de falar com a equipe.")}>Falar no WhatsApp</a>
          </Button>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-gold/25 pt-8 sm:grid-cols-3">
          {[
            ["+15 anos", "de experiência clínica"],
            ["+3.000", "sorrisos transformados"],
            ["9 especialidades", "em um só lugar"],
          ].map(([value, label]) => (
            <div key={value}>
              <dt className="font-display text-2xl text-gold md:text-3xl">{value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-graphite-foreground/60">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
