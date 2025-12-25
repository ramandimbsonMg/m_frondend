import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionLayout from "@/components/layout/ConditionLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Missera Market",
    template: " %s | Crée. Vends. Inspire.",
  },
  description:
    "Le premier réseau social de vente et collaboration pour les jeunes africains",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Missera Market",
  },
  applicationName: "Missera Market",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4b6fc9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4b6fc9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} bg-[#686b6e12]`}>
        <div className="min-h-screen flex flex-col">
          <ConditionLayout>{children}</ConditionLayout>
        </div>
      </body>
    </html>
  );
}
