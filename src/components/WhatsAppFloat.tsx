import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/clinic";
import { cn } from "@/lib/utils";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const defaultMessage =
    "Olá! Vim pelo site da JB Odontologia Prime e gostaria de mais informações sobre tratamentos e agendamento.";

  return (
    <a
      href={whatsappLink(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Iniciar conversa no WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-[60] flex h-16 w-16 items-center justify-center rounded-full transition-all duration-700 ease-out",
        "bg-gradient-to-br from-whatsapp via-whatsapp to-whatsapp/80",
        "shadow-[0_14px_40px_-5px_rgba(37,211,102,0.45),0_0_0_1px_rgba(37,211,102,0.35)]",
        visible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-90 pointer-events-none",
        "hover:scale-105 hover:shadow-[0_18px_50px_-5px_rgba(37,211,102,0.65)]",
      )}
    >
      <span className="pulse-gold absolute inset-0 rounded-full border-2 border-whatsapp/60" />
      <span className="absolute inset-0 rounded-full bg-white/0 transition-colors duration-500 hover:bg-white/10" />
      <MessageCircle
        className="!h-7 !w-7 relative text-white"
        strokeWidth={1.9}
        fill="none"
        aria-hidden
      />
    </a>
  );
}
