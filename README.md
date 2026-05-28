# Yoga Vital Bariloche · Landing de Rashi

Landing page de Yoga Vital con Rashi en San Carlos de Bariloche.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** con paleta inspirada en la Patagonia
- **Framer Motion** para animaciones
- **Lucide React** para íconos
- Sin backend: las reservas, inscripciones a talleres y consultas abren WhatsApp con un mensaje pre-armado al número de Rashi.

## Cómo correr

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Cómo editar contenido

Todo está centralizado en [lib/data.ts](lib/data.ts):

- `site` — nombre, dirección, WhatsApp, email, etc.
- `classFeatures` — tipos de clase con descripción, intensidad, duración.
- `schedule` — horarios semanales con cupos disponibles.
- `courses` — profesorado, instructorado, especializaciones.
- `workshops` — talleres reiterativos.
- `events` — eventos esporádicos (baños de gong, retiros, lunas).
- `aboutRashi` — bio y credenciales.
- `yogaVitalPhilosophy` — explicación de Yoga Vital.

## Notificación a Rashi

Cada reserva, inscripción o consulta genera un link de WhatsApp con todos los datos pre-completados. Al apretar enviar, le llega directamente a Rashi.

El número está en `site.whatsapp` (formato internacional sin `+` ni espacios).

## Foto de Rashi

Reemplazá la URL de Unsplash dentro de [components/AboutRashi.tsx](components/AboutRashi.tsx) por una foto real cuando la tengas. Misma idea para las imágenes de eventos en [lib/data.ts](lib/data.ts).

## Deploy

Funciona out-of-the-box en Vercel y Netlify. `npm run build` para verificar el build localmente.
