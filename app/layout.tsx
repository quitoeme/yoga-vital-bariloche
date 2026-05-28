import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Yoga Vital Bariloche · Rashi · Yoga terapéutico en la Patagonia",
  description:
    "Clases de Yoga Vital con Rashi en San Carlos de Bariloche. Yoga terapéutico, meditación con gongs, talleres, baños sonoros y formación profesional al pie de los Andes.",
  keywords: [
    "Yoga Bariloche",
    "Yoga Vital",
    "Ayur Yoga",
    "Rashi",
    "Baño de Gong Bariloche",
    "Yoga terapéutico Patagonia",
    "Profesorado de Yoga",
  ],
  openGraph: {
    title: "Yoga Vital Bariloche · Rashi",
    description:
      "Yoga terapéutico, meditación con gongs y formación profesional en San Carlos de Bariloche.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-sand-50 text-slate-850 antialiased">{children}</body>
    </html>
  );
}
