"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

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
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button/button";

const navItems = [
  { icon: Home, label: "Accueil", href: "/" },
  { icon: Users, label: "Réseau", href: "/reseau" },
  { icon: Briefcase, label: "Emplois", href: "/emplois" },
  { icon: MessageSquare, label: "Messagerie", href: "/messages" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: ShoppingBag, label: "Boutique", href: "/boutique" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center h-12">
            <img
              src="/logo-mis.png"
              alt="logo-missera.com"
              className="h-full object-contain"
            />
          </Link>

          {/* Search */}
          <div className="hidden md:block flex-1 max-w-[20rem] mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher des produits, posts, personnes..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100/50 rounded-full border border-gray-200 focus:bg-white focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center p-2 transition
                    ${
                      isActive
                        ? "text-cyan-600"
                        : "text-gray-600 hover:text-cyan-500"
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              );
            })}

            {/* ===== RADIX PROFILE MENU (TON MENU) ===== */}
            <NavigationMenu.Root className="relative ml-2">
              <NavigationMenu.List>
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="flex flex-col items-center p-2 cursor-pointer outline-none">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex items-center gap-1 text-xs mt-1 text-gray-600">
                      Moi
                      <CaretDownIcon />
                    </div>
                  </NavigationMenu.Trigger>

                  <NavigationMenu.Content className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
                    {/* Couverture */}
                    <div className="relative h-16.5 bg-gray-200">
                      {/* <img
                        src="/cover.jpg"
                        alt="Cover"
                        className="w-full h-full object-cover"
                      /> */}

                      {/* Avatar */}
                      <div className="absolute top-1 left-10 -translate-x-1/2">
                        <div className=" rounded-full shadow">
                          {/* <Image
                            src="/avatar.jpg"
                            alt="Avatar"
                            width={14}
                            height={14}
                            className="w-full h-full rounded-full object-cover"
                          /> */}
                          <div className="w-14 h-14 rounded-full border-2 border-white bg-primary flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              JD
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Infos user */}
                    <div className="pt-4 pb-2 text-center px-3">
                      <div className="flex justify-between items-center">
                        <div className="">
                          <p className="text-sm font-semibold text-gray-800">
                            Espoir
                          </p>
                          <p className="text-xs text-gray-500">@espoir</p>
                        </div>
                        <Button
                          variant="ico"
                          size="very-small"
                          className="mb-3 mx-3"
                          bgColor="bg-red-500 hover:bg-red-300"
                          icon={{ icon: LogOut }}
                        ></Button>
                      </div>
                    </div>

                    {/* Menu */}
                    <div className="border-t border-gray-200 text-sm">
                      <Link
                        href="/profile/moi"
                        className="block px-4 py-2 hover:bg-gray-50 hover:font-medium"
                      >
                        Voir mon profil
                      </Link>
                      <Link
                        href="/profile/editer"
                        className="block px-4 py-3 hover:bg-gray-50 hover:font-medium"
                      >
                        Modifier le profil
                      </Link>
                      <Link
                        href="/boutique/moi"
                        className="block px-4 py-3 hover:bg-gray-50 hover:font-medium"
                      >
                        Ma boutique
                      </Link>
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
            {/* ===== END RADIX ===== */}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="grid grid-cols-3 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
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
}
