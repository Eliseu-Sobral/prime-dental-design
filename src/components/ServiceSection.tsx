import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { whatsappLink } from "@/lib/clinic";
import { cn } from "@/lib/utils";

export interface ServiceSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tone?: "light" | "champagne";
}

export function ServiceSection({
  id,
  eyebrow,
  title,
  description,
  benefits,
  image,
  imageAlt,
  reverse = false,
  tone = "light",
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", tone === "champagne" ? "bg-champagne/40" : "bg-background")}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className={cn(reverse && "lg:order-2")}>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-2xl border border-gold/30" />
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={1600}
              height={900}
              className="aspect-[16/10] w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className={cn(reverse && "lg:order-1")}>
          <p className="eyebrow">{eyebrow}</p>
          <span className="gold-rule mt-4" />
          <h3 className="mt-5 text-3xl leading-tight md:text-4xl">{title}</h3>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <Check className="h-3 w-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <Button variant="goldOutline" size="lg" className="mt-9" asChild>
            <a href={whatsappLink(`Olá! Gostaria de saber mais sobre ${title}.`)}>
              Agendar avaliação
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
