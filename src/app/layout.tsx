import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navigations/Navbar";
import ClientMainLayout from "@/components/layout/ClientMainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Missera Market - Crée. Vends. Inspire.",
  description:
    "Le premier réseau social de vente et collaboration pour les jeunes africains",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* Optionnel: empêcher le zoom sur mobile si nécessaire */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /> */}
      </head>
      <body className={`${inter.className} bg-[#686b6e12]`}>
        <Navbar />
        <ClientMainLayout>{children}</ClientMainLayout>
      </body>
    </html>
  );
}
