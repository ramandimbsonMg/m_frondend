import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navigations/Navbar";
import ClientMainLayout from "@/components/layout/ClientMainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Missera Market - Crée. Vends. Inspire.",
  description:
    "Le premier réseau social de vente et collaboration pour les jeunes africains",
  keywords: ["e-commerce", "réseau social", "vente", "Afrique", "jeunes"],
  authors: [{ name: "Missera Market" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://misseramarket.com",
    title: "Missera Market - Crée. Vends. Inspire.",
    description:
      "Le premier réseau social de vente et collaboration pour les jeunes africains",
    siteName: "Missera Market",
  },
  twitter: {
    card: "summary_large_image",
    title: "Missera Market - Crée. Vends. Inspire.",
    description:
      "Le premier réseau social de vente et collaboration pour les jeunes africains",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // IMPORTANT: Enlever maximumScale et userScalable
  // pour permettre un affichage normal
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* ESSENTIEL: Meta viewport simple */}
        {/* Next.js gère déjà via export const viewport, mais pour être sûr */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />

        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Mobile app specific */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Missera Market" />

        {/* Format detection */}
        <meta name="format-detection" content="telephone=no, email=no" />

        {/* Empêche le zoom sur iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Conteneur principal avec largeur fixe et prévention du débordement */}
        <div className="min-h-screen w-full overflow-x-hidden bg-[#686b6e12]">
          <div className="mx-auto w-full max-w-[100vw]">
            <Navbar />
            <main className="w-full">
              <ClientMainLayout>{children}</ClientMainLayout>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
