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

  // PWA metadata
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Missera Market",
    statusBarStyle: "default",
  },
  applicationName: "Missera Market",

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
  maximumScale: 1,
  themeColor: "#4b6fc9",
  viewportFit: "cover",
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

        {/* Viewport pour PWA */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />

        {/* PWA manifest - ESSENTIEL pour l'installation */}
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />

        {/* Thème couleur pour les navigateurs */}
        <meta name="theme-color" content="#4b6fc9" />
        <meta name="msapplication-TileColor" content="#4b6fc9" />

        {/* iOS specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Missera Market" />
        <link
          rel="apple-touch-startup-image"
          href="/favicon_io/apple-touch-icon.png"
        />

        {/* Windows specific */}
        <meta
          name="msapplication-TileImage"
          content="/favicon_io/mstile-144x144.png"
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Format detection */}
        <meta
          name="format-detection"
          content="telephone=no, email=no, address=no"
        />
      </head>
      <body className={`${inter.className} bg-[#686b6e12] antialiased`}>
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('Service Worker registered with scope:', registration.scope);
                    },
                    function(err) {
                      console.log('Service Worker registration failed:', err);
                    }
                  );
                });
              }
              
              // Détection d'installation PWA
              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                
                // Afficher un bouton d'installation
                const installButton = document.createElement('button');
                installButton.textContent = 'Installer l\'app';
                installButton.className = 'fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg z-50';
                installButton.onclick = () => {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                      console.log('User accepted the install prompt');
                    }
                    deferredPrompt = null;
                  });
                };
                document.body.appendChild(installButton);
              });
            `,
          }}
        />

        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full">
            <ClientMainLayout>{children}</ClientMainLayout>
          </main>
        </div>
      </body>
    </html>
  );
}
