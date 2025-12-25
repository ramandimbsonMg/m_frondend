"use client";

import Link from "next/link";
import {
  User,
  Users,
  Bookmark,
  Flag,
  Video,
  Calendar,
  Clock,
  Zap,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("feed");

  const menuItems = [
    { icon: User, label: "Votre profil", href: "/profile/moi" },
    { icon: Users, label: "Réseau", href: "/reseau", badge: "53" },
    { icon: Bookmark, label: "Éléments sauvegardés", href: "/sauvegardes" },
    { icon: Flag, label: "Pages", href: "/pages" },
    { icon: Video, label: "Live", href: "/live" },
    { icon: Calendar, label: "Événements", href: "/evenements" },
  ];

  const shortcuts = [
    { name: "Tech Africa", members: "12.5k" },
    { name: "Fashion Madagascar", members: "8.2k" },
    { name: "Artisans WA", members: "5.7k" },
  ];

  return (
    <aside className="hidden lg:block w-64 min-h-[calc(100vh-4rem)] pt-6">
      <div className="sticky top-20">
        {/* Profile Card */}
        <div className="mb-4">
          <div className="relative card-1">
            <div className="bg-gray-300 h-20 rounded-tl">
              <div className="absolute top-2.5 left-12 transform -translate-x-1/2">
                <div className="w-18 h-18 rounded-full border-4 border-white bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JD</span>
                </div>
              </div>
            </div>
            <div className="pt-3 text-center">
              <h3 className="font-semibold text-gray-900 mt-2">John Doe</h3>
              <div className="text-sm text-gray-600 mt-1 flex items-center gap-2 text-center justify-center">
                Vendeur Pro
                <hr className="h-6 w-1 border-l border-t-0 border-gray-200" />
                Madagascar
              </div>
              <div className="flex items-center text-center justify-center space-x-4 mt-3">
                <div className="text-center">
                  <div className="font-bold text-gray-900">24</div>
                  <div className="text-xs text-gray-500">Ventes</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900">156</div>
                  <div className="text-xs text-gray-500">Abonnés</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900">4.8</div>
                  <div className="text-xs text-gray-500">Avis</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="card-1">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Stats & Analytics */}
        <div className="card mt-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900">Statistiques</h4>
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Visites boutique</span>
                  <span className="font-medium">+12%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-secondary h-1.5 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Taux engagement</span>
                  <span className="font-medium">+8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
            <hr className="border-gray-200" />
            <button className="w-full mt-4 text-sm font-medium text-secondary hover:text-secondary cursor-pointer">
              Voir détails →
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card mt-4">
          <h4 className="font-semibold text-gray-900 mb-4">Actions rapides</h4>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center space-x-2 bg-primary text-white py-2 px-4 rounded-full hover:bg-[#006097] transition-colors cursor-pointer">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Publier un produit</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-2 border border-primary text-primary py-2 px-4 rounded-full hover:bg-cyan-50 transition-colors cursor-pointer">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm">Créer une promo</span>
            </button>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="card mt-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-gray-900">Vos raccourcis</h4>
            <button className="text-sm text-primary hover:underline cursor-pointer">
              Modifier
            </button>
          </div>
          <div className="space-y-3">
            {shortcuts.map((shortcut) => (
              <div
                key={shortcut.name}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {shortcut.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{shortcut.name}</div>
                    <div className="text-xs text-gray-500">
                      {shortcut.members} membres
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-4 mt-8 pb-6">
          <div className="text-xs text-gray-500 space-y-2">
            <div className="flex flex-wrap gap-2">
              <a href="#" className="hover:underline">
                À propos
              </a>
              <a href="#" className="hover:underline">
                Accessibilité
              </a>
              <a href="#" className="hover:underline">
                Centre d'aide
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="hover:underline">
                Confidentialité
              </a>
              <a href="#" className="hover:underline">
                Conditions
              </a>
              <a href="#" className="hover:underline">
                Publicités
              </a>
            </div>
            <div className="pt-2">
              <span>Missera Market © 2024</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
