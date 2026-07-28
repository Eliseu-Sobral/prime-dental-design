export const CLINIC = {
  name: "JB Odontologia Prime",
  doctor: "Dra. Juliana Viana",
  cro: "CROSP 123.456",
  phoneDisplay: "(11) 99999-0000",
  whatsappNumber: "5511999990000",
  instagram: "https://instagram.com/jbodontologiaprime",
  instagramHandle: "@jbodontologiaprime",
  address: "Av. Barão de Mauá, 1200 — Centro, Mauá — SP",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Barão+de+Mauá,+Mauá+-+SP",
  mapEmbed:
    "https://www.google.com/maps?q=Av.%20Bar%C3%A3o%20de%20Mau%C3%A1%2C%20Mau%C3%A1%20-%20SP&output=embed",
  hours: "Seg a Sex · 9h às 19h | Sáb · 9h às 13h",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
