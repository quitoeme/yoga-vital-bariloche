import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
import MotionProvider from "@/components/MotionProvider";

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
  metadataBase: new URL(site.url),
  title: {
    default: "Yoga Bariloche | Ayur Yoga Vital con Rashi · Yoga terapéutico",
    template: "%s | Ayur Yoga Vital Bariloche",
  },
  description:
    "Yoga en Bariloche: clases de Ayur Yoga Vital con Rashi en San Carlos de Bariloche. Yoga terapéutico que une el yoga clásico con el Ayurveda, meditación con gongs, talleres y formación profesional al pie de los Andes.",
  applicationName: "Ayur Yoga Vital Bariloche",
  authors: [{ name: "Rashi · Ayur Yoga Vital Bariloche" }],
  creator: "Ayur Yoga Vital Bariloche",
  publisher: "Ayur Yoga Vital Bariloche",
  keywords: [
    "yoga bariloche",
    "ayur yoga vital bariloche",
    "ayur yoga vital",
    "clases de yoga bariloche",
    "yoga terapéutico bariloche",
    "ayur yoga",
    "Rashi",
    "baño de gong bariloche",
    "meditación bariloche",
    "profesorado de yoga bariloche",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Yoga Bariloche | Ayur Yoga Vital con Rashi",
    description:
      "Clases de Ayur Yoga Vital, yoga terapéutico, meditación con gongs y formación profesional en San Carlos de Bariloche.",
    url: site.url,
    siteName: "Ayur Yoga Vital Bariloche",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ayur Yoga Vital Bariloche con Rashi · amanecer sobre el Nahuel Huapi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Bariloche | Ayur Yoga Vital con Rashi",
    description:
      "Clases de Ayur Yoga Vital y yoga terapéutico en San Carlos de Bariloche.",
    images: ["/og.jpg"],
  },
  category: "Health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-sand-50 text-slate-850 antialiased">
        <MotionProvider>{children}</MotionProvider>
        <JsonLd />
      </body>
    </html>
  );
}
