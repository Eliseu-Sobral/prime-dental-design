export const CLINIC = {
  name: "JB Odontologia Prime",
  doctor: "Dra. Juliana Viana",
  cro: "CROSP 123.456",
  doctors: [
    { name: "Dra. Juliana Viana", cro: "CROSP 123.456" },
    { name: "Dra. Beatriz Almeida", cro: "CROSP 147206" },
  ],
  phoneDisplay: "(11) 96351-5287",
  whatsappNumber: "5511963515287",
  instagram: "https://instagram.com/jbodontologiaprime",
  instagramHandle: "@jbodontologiaprime",
  address: "Rua Santa Paula, 47 — Jardim Oratório, Mauá — SP",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Santa+Paula,+47,+Jardim+Orat%C3%B3rio,+Mau%C3%A1+-+SP",
  mapEmbed:
    "https://www.google.com/maps?q=Rua%20Santa%20Paula%2C%2047%20-%20Jardim%20Orat%C3%B3rio%2C%20Mau%C3%A1%20-%20SP&output=embed",
  hours: "Seg a Sex · 9h às 19h | Sáb · 9h às 13h",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
