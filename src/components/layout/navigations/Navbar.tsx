"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  ShoppingBag,
  Menu,
  X,
  User,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Accueil", href: "/" },
    { icon: Users, label: "Réseau", href: "/reseau" },
    { icon: Briefcase, label: "Emplois", href: "/emplois" },
    { icon: MessageSquare, label: "Messagerie", href: "/messages" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: ShoppingBag, label: "Boutique", href: "/boutique" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center w-full h-14">
            <img src="/logo-mis.png" alt="logo-missera.com" className="w-full h-full object-cover"  />
              {/* <span className="text-xl font-bold text-gray-900 hidden md:block">
                Missera Market
              </span> */}
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-[25rem] mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher des produits, posts, personnes..."
                className="w-full placeholder:text-sm pl-10 pr-4 py-2 bg-gray-100/50 rounded-full border border-gray-200 focus:outline-none focus:ring-0 focus:ring-cyan-500 focus:bg-white focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center p-2 text-gray-600 hover:text-primary transition-colors group"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs mt-1 group-hover:text-primary">
                  {item.label}
                </span>
              </Link>
            ))}

            {/* Profile Dropdown */}
            <div className="relative group ml-2">
              <button className="flex flex-col items-center p-2 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-xs mt-1 text-gray-600">Moi</span>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link
                  href="/profile/moi"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Voir mon profil
                </Link>
                <Link
                  href="/profile/editer"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Modifier le profil
                </Link>
                <Link
                  href="/boutique/moi"
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  Ma boutique
                </Link>
                <div className="border-t border-gray-200">
                  <button className="w-full text-left px-4 py-3 text-red-600 hover:bg-gray-50">
                    Déconnexion
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="grid grid-cols-3 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
