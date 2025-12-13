"use client";

import { useEffect } from "react";
import {
  AlertTriangle,
  RefreshCw,
  Home,
  LifeBuoy,
  Database,
  Server,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  const errorDetails = {
    message: error.message,
    digest: error.digest,
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== "undefined" ? navigator.userAgent : "Unknown",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">MM</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Missera Market
            </span>
          </Link>
          <div className="text-sm text-gray-600">
            Erreur ID:{" "}
            <span className="font-mono">
              {error.digest?.slice(0, 8) || "N/A"}
            </span>
          </div>
        </div>

        {/* Main Error */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-16 h-16 text-red-500" />
            </div>
            <div className="absolute -top-2 -right-2">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Server className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Oups ! Une erreur s'est produite
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre système a rencontré une difficulté technique. Notre équipe a
            été notifiée et travaille à la résolution.
          </p>

          <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-lg mb-8">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span className="font-medium">
              {error.message || "Erreur inconnue"}
            </span>
          </div>
        </div>

        {/* Recovery Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <button
            onClick={() => reset()}
            className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Réessayer</h3>
              <p className="text-sm text-gray-600">
                Tenter de recharger la page
              </p>
            </div>
          </button>

          <Link
            href="/"
            className="p-6 bg-white border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-md transition-all group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Retour à l'accueil
              </h3>
              <p className="text-sm text-gray-600">
                Naviguer vers la page principale
              </p>
            </div>
          </Link>

          <button className="p-6 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LifeBuoy className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Contacter le support
              </h3>
              <p className="text-sm text-gray-600">
                Obtenir de l'aide technique
              </p>
            </div>
          </button>
        </div>

        {/* Technical Details */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Database className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Détails techniques
              </h3>
            </div>
            <Shield className="w-5 h-5 text-gray-400" />
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500 mb-1">Code d'erreur</div>
                <div className="font-mono text-gray-900 bg-gray-100 p-2 rounded">
                  {error.digest || "NON-IDENTIFIÉ"}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Heure</div>
                <div className="font-mono text-gray-900">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="text-gray-500 mb-1">Message</div>
                <div className="font-mono text-gray-900 bg-gray-100 p-2 rounded text-xs">
                  {error.message || "Aucun message disponible"}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Ces informations ont été envoyées à notre équipe technique pour
            investigation.
          </div>
        </div>

        {/* System Status */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">État du système</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium">Serveurs</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium">Base de données</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium">Réseau</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm font-medium">API</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">99.8%</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Missera Market © 2024 • Système de surveillance d'erreurs
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-900">
              Statut des services
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Politique de support
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Sécurité
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
