import { site } from "./data";

export function buildWhatsappLink(message: string): string {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function reservationMessage(opts: {
  name: string;
  email?: string;
  groupName: string;
  classTitle: string;
  day: string;
  time: string;
  month: string;
}): string {
  return `Hola Rashi! Soy ${opts.name}.

Quiero reservar un mes completo de clases:

• Práctica: ${opts.classTitle}
• Grupo: ${opts.groupName}
• Día y horario: ${opts.day} ${opts.time}
• Mes: ${opts.month}
${opts.email ? `• Mail: ${opts.email}` : ""}

¿Puedo asegurar mi lugar?
Gracias!`;
}

export function workshopMessage(opts: {
  name: string;
  workshop: string;
  date: string;
}): string {
  return `Hola Rashi! Soy ${opts.name}.

Quiero anotarme al taller "${opts.workshop}" (${opts.date}).

¿Está disponible el cupo?
Gracias!`;
}

export function eventMessage(opts: {
  name: string;
  event: string;
  date: string;
}): string {
  return `Hola Rashi! Soy ${opts.name}.

Quiero reservar mi lugar en "${opts.event}" del ${opts.date}.

¡Gracias!`;
}

export function courseMessage(opts: {
  name: string;
  course: string;
}): string {
  return `Hola Rashi! Soy ${opts.name}.

Me interesa el ${opts.course}. ¿Me podés contar más sobre fechas, inversión y forma de pago?

Gracias!`;
}

export function generalMessage(): string {
  return `Hola Rashi! Vi la web de Yoga Vital Bariloche y quiero consultarte sobre las clases.`;
}
