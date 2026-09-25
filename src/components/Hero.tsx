import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import heroImg from "@/assets/hero-clinica.jpg";
import { CalendarCheck2, ShieldCheck, ArrowRight, Sparkles, Play } from "lucide-react";

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setParallaxY(Math.min(y * 0.35, 220));
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      ref={parallaxRef}
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 scale-110"
        style={{ transform: `translateY(${parallaxY}px) scale(1.08)` }}
      >
        <img
          src={heroImg}
          alt="Recepção premium da clínica JB Odontologia Prime"
          width={1920}
          height={1088}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero-bottom)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 85% 10%, oklch(0.65 0.09 78 / 0.18), transparent 55%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-36 pb-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo JB Odontologia Prime"
              width={320}
              height={400}
              className="h-32 w-auto object-contain drop-shadow-[0_10px_26px_rgba(0,0,0,0.6)] md:h-44 lg:h-52"
            />
          </div>

          <div className="mt-10 flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-gold pulse-gold" />
            <p className="eyebrow m-0 !before:hidden">Odontologia de Alto Padrão · Mauá — SP</p>
          </div>

          <h1 className="mt-6 text-luxury text-4xl leading-[1.04] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
            <span className="block text-foreground/95">Sorrisos</span>
            <span className="block">
              <span className="gold-text-shine inline-block" data-text="Excepcionais">
                Excepcionais
              </span>
            </span>
            <span className="mt-3 block font-display italic text-2xl text-foreground/65 sm:text-3xl md:text-4xl">
              Para uma vida mais feliz.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-[0.95rem] leading-relaxed text-foreground/70 md:text-base md:leading-8">
            Unimos tecnologia de ponta, técnicas minimamente invasivas e um atendimento
            verdadeiramente humanizado para criar sorrisos saudáveis que duram a vida toda.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <a
                href={whatsappLink(
                  `Olá, ${CLINIC.name}! Gostaria de agendar uma avaliação premium.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Avaliação
                <ArrowRight className="!w-4 !h-4" strokeWidth={2.2} />
              </a>
            </Button>
            <Button variant="luxInk" size="xl" asChild>
              <a href="#especialidades">
                <Play className="!w-4 !h-4 text-gold" strokeWidth={2.2} fill="currentColor" />
                Nossos Serviços
              </a>
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6">
            <div className="flex items-center gap-3 text-foreground/65">
              <Sparkles className="!w-5 !h-5 text-gold" strokeWidth={1.6} />
              <span className="text-xs uppercase tracking-[0.18em]">Atendimento personalizado</span>
            </div>
            <div className="flex items-center gap-3 text-foreground/65">
              <ShieldCheck className="!w-5 !h-5 text-gold" strokeWidth={1.6} />
              <span className="text-xs uppercase tracking-[0.18em]">Biossegurança rigorosa</span>
            </div>
            <div className="flex items-center gap-3 text-foreground/65">
              <CalendarCheck2 className="!w-5 !h-5 text-gold" strokeWidth={1.6} />
              <span className="text-xs uppercase tracking-[0.18em]">Horários flexíveis</span>
            </div>
          </div>
        </div>

        <dl className="mt-20 grid max-w-5xl grid-cols-2 gap-x-10 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-4">
          {[
            ["+15", "Anos de excelência"],
            ["+3.500", "Sorrisos reais"],
            ["9", "Especialidades"],
            ["100%", "Foco no paciente"],
          ].map(([value, label]) => (
            <div key={label} className="group">
              <dt className="font-display text-4xl leading-none gold-text md:text-5xl">{value}</dt>
              <dd className="mt-3 text-[0.68rem] uppercase tracking-[0.22em] text-foreground/55 transition-colors duration-500 group-hover:text-gold">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[0.62rem] uppercase tracking-[0.35em] text-foreground/45">
          Role para explorar
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}
