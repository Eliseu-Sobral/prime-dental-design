import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServiceSection } from "@/components/ServiceSection";
import { Results } from "@/components/Results";
import { ClinicGallery } from "@/components/ClinicGallery";
import { Doctor } from "@/components/Doctor";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { FinalCTA, Footer } from "@/components/FinalCTA";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Reveal } from "@/components/Reveal";

import clinicaGeral from "@/assets/clinica-geral.jpg";
import proteses from "@/assets/proteses.jpg";
import implantes from "@/assets/implantes.jpg";
import cirurgia from "@/assets/cirurgia.jpg";
import odontopediatria from "@/assets/odontopediatria.jpg";
import canal from "@/assets/canal.jpg";
import estetica from "@/assets/estetica.jpg";
import harmonizacao from "@/assets/harmonizacao.jpg";

const title = "JB Odontologia Prime | Dentista em Mauá";
const description =
  "Clínica odontológica premium em Mauá especializada em implantes, próteses, estética dental, harmonização orofacial e muito mais.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    id: "especialidades",
    eyebrow: "Clínica Geral",
    title: "Cuidados completos para sua saúde bucal",
    description:
      "Consultas de rotina conduzidas com diagnóstico digital e um plano preventivo desenhado para manter seu sorriso saudável por muitos anos.",
    benefits: ["Avaliação completa", "Limpeza profissional", "Prevenção", "Diagnóstico preciso"],
    image: clinicaGeral,
    imageAlt: "Dentista realizando avaliação em consultório moderno",
  },
  {
    eyebrow: "Próteses",
    title: "A naturalidade do seu sorriso de volta",
    description:
      "Próteses fixas e removíveis planejadas digitalmente, com encaixe confortável e estética indistinguível dos dentes naturais.",
    benefits: ["Recuperação estética", "Mastigação eficiente", "Conforto diário", "Naturalidade"],
    image: proteses,
    imageAlt: "Paciente sorrindo com próteses de aparência natural",
    reverse: true,
  },
  {
    eyebrow: "Implantes",
    title: "Segurança e durabilidade em cada implante",
    description:
      "Implantes de titânio de alta performance, guiados por tomografia e planejamento 3D para máxima previsibilidade do resultado.",
    benefits: ["Segurança cirúrgica", "Durabilidade", "Estética superior", "Planejamento 3D"],
    image: implantes,
    imageAlt: "Modelo 3D de implante dentário",
  },
  {
    eyebrow: "Cirurgia",
    title: "Procedimentos cirúrgicos com total controle",
    description:
      "Ambiente preparado, protocolos rigorosos de biossegurança e acompanhamento próximo em toda a recuperação.",
    benefits: ["Procedimentos seguros", "Equipamentos modernos", "Recuperação assistida", "Protocolos rigorosos"],
    image: cirurgia,
    imageAlt: "Sala cirúrgica odontológica moderna",
    reverse: true,
  },
  {
    eyebrow: "Odontopediatria",
    title: "Primeiras experiências que ficam para sempre",
    description:
      "Atendimento lúdico e acolhedor, que ensina hábitos saudáveis e transforma a ida ao dentista em algo natural para as crianças.",
    benefits: ["Ambiente acolhedor", "Atendimento infantil", "Prevenção precoce", "Educação em saúde"],
    image: odontopediatria,
    imageAlt: "Criança sorrindo durante atendimento odontológico",
  },
  {
    eyebrow: "Tratamento de Canal",
    title: "Alívio da dor com alta precisão",
    description:
      "Endodontia realizada sob microscópio odontológico, preservando ao máximo a estrutura do dente e eliminando o desconforto.",
    benefits: ["Alívio da dor", "Preservação do dente", "Alta precisão", "Sessões reduzidas"],
    image: canal,
    imageAlt: "Dentista utilizando microscópio odontológico",
    reverse: true,
  },
  {
    eyebrow: "Estética Dental",
    title: "Um sorriso branco e harmonioso",
    description:
      "Clareamento, lentes de contato e facetas desenhadas digitalmente para respeitar as proporções únicas do seu rosto.",
    benefits: ["Clareamento", "Lentes de contato", "Facetas", "Recontorno estético"],
    image: estetica,
    imageAlt: "Sorriso branco e harmonioso",
  },
  {
    eyebrow: "Harmonização Orofacial",
    title: "Equilíbrio facial com resultado natural",
    description:
      "Procedimentos minimamente invasivos que valorizam seus traços, sempre com moderação e leitura estética individualizada.",
    benefits: ["Equilíbrio facial", "Naturalidade", "Autoestima", "Procedimentos minimamente invasivos"],
    image: harmonizacao,
    imageAlt: "Paciente sorrindo após harmonização facial",
    reverse: true,
  },
];

function Index() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />

        <section className="bg-background pt-20 md:pt-28">
          <Reveal className="mx-auto max-w-3xl px-6 text-center">
            <p className="eyebrow">Especialidades</p>
            <span className="gold-rule mx-auto mt-4" />
            <h2 className="mt-6 text-3xl md:text-5xl">
              Tratamentos completos, do preventivo ao estético
            </h2>
          </Reveal>
        </section>

        {services.map((s, i) => (
          <ServiceSection key={s.eyebrow} {...s} tone={i % 2 === 0 ? "light" : "champagne"} />
        ))}

        <Results />
        <ClinicGallery />
        <Doctor />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
