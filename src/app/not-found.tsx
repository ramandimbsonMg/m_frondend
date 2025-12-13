"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Search,
  ArrowLeft,
  Users,
  ShoppingBag,
  Briefcase,
  TrendingUp,
  Sparkles,
  Globe,
  Compass,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const suggestions = [
    {
      icon: Home,
      title: "Page d'accueil",
      description: "Retourner au fil d'actualité",
      href: "/",
    },
    {
      icon: Users,
      title: "Mon réseau",
      description: "Découvrir de nouvelles connexions",
      href: "/reseau",
    },
    {
      icon: ShoppingBag,
      title: "Boutique",
      description: "Explorer les produits tendance",
      href: "/boutique",
    },
    {
      icon: Briefcase,
      title: "Emplois",
      description: "Trouver des opportunités",
      href: "/emplois",
    },
    {
      icon: TrendingUp,
      title: "Concours",
      description: "Participer aux challenges",
      href: "/concours",
    },
  ];

  const trendingPages = [
    { name: "Fashion Entrepreneurs Africa", views: "2.4k" },
    { name: "Tech Startups Afrique", views: "1.8k" },
    { name: "E-commerce Senegal", views: "1.5k" },
    { name: "Artisanat du Sahel", views: "1.2k" },
  ];

  return (
    <div className="min-h-screen rounded-lg bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="lg:block hidden">
            <Link href="/" className="flex items-center w-full h-14">
              <img
                src="/logo-mis.png"
                alt="logo-missera.com"
                className="w-full h-full object-cover"
              />
              {/* <span className="text-xl font-bold text-gray-900 hidden md:block">
                Missera Market
              </span> */}
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </Link>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary cursor-pointer">
              <Zap className="w-4 h-4" />
              <span>Aide</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Column - Animated 404 */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-20">
              <div className="relative">
                <div className="text-9xl font-bold text-gray-900 opacity-10">
                  404
                </div>
                <div
                  className="absolute inset-0 text-9xl font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: "center",
                  }}
                >
                  404
                </div>
              </div>
              <div className="absolute -right-8 -top-8">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Compass className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Oups ! Page introuvable
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              La page que vous recherchez semble s'être égarée dans le vaste
              réseau de Missera Market.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher sur Missera Market..."
                  className="w-full pl-12 pr-4 py-2.5 placeholder:text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-primary text-white rounded-full hover:bg-primary">
                  Rechercher
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="flex items-center space-x-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Retour à l'accueil</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50"
              >
                Page précédente
              </button>
            </div>
          </div>

          {/* Right Column - Suggestions */}
          <div>
            {/* Trending Pages */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pages tendances
                  </h3>
                </div>
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-4">
                {trendingPages.map((page, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 group"
                  >
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-primary">
                        {page.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {page.views} vues cette semaine
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 px-3 py-2">
              <h3 className="font-semibold text-gray-900 mb-6">
                Vous cherchez peut-être :
              </h3>
              <div className="grid md:grid-cols- gap-4">
                {suggestions.map((item, index) => (
                  <Link key={index} href={item.href} className="group">
                    <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-sm transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-primary">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Help Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'aide supplémentaire ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe de support est disponible 24h/24 pour vous aider à
              retrouver votre chemin sur Missera Market.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-6 py-1.5 bg-accent text-white rounded-full hover:opacity-90 cursor-pointer">
                Contacter le support
              </button>
              <button className="px-6 py-1.5 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 cursor-pointer">
                Centre d'aide
              </button>
              <button className="px-6 py-1.5 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 cursor-pointer">
                Signaler un problème
              </button>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
            <div className="text-2xl font-bold text-cyan-700 mb-2">10M+</div>
            <div className="text-gray-700 text-sm">Pages sur Missera Market</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-700 mb-2">99.9%</div>
            <div className="text-gray-700 text-sm">Pages trouvées avec succès</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-2xl font-bold text-green-700 mb-2">
              &lt; 0.1%
            </div>
            <div className="text-gray-700 text-sm">Chance de se perdre ici</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Missera Market © 2024 • Le réseau social-commerce africain
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-900">
              Confidentialité
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Conditions
            </Link>
            <Link href="#" className="hover:text-gray-900">
              À propos
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Carrières
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full opacity-5"
            style={{
              background: `linear-gradient(45deg, 
                ${
                  i % 3 === 0 ? "#06b6d4" : i % 3 === 1 ? "#3b82f6" : "#8b5cf6"
                }, 
                ${
                  i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4"
                })`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `scale(${0.5 + Math.random()})`,
              animation: `float ${15 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div> */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg) scale(var(--scale, 1));
          }
          50% {
            transform: translateY(-20px) rotate(180deg)
              scale(calc(var(--scale, 1) * 1.1));
          }
        }
      `}</style>
    </div>
  );
}
