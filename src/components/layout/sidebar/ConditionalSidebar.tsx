"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

// Fonction utilitaire pour vérifier les routes
const isRouteMatch = (pathname: string, routePattern: string): boolean => {
  // Si c'est une route dynamique avec [param]
  if (routePattern.includes("[") && routePattern.includes("]")) {
    // Extraire la partie avant [param]
    const baseRoute = routePattern.split("[")[0];
    // Vérifier si le pathname commence par cette base route
    // et a le bon nombre de segments
    const expectedSegments = routePattern.split("/").length;
    const actualSegments = pathname.split("/").length;

    return (
      pathname.startsWith(baseRoute) && actualSegments === expectedSegments
    );
  }

  // Pour les routes normales, vérifier la racine ET les sous-routes
  return pathname === routePattern || pathname.startsWith(`${routePattern}/`);
};

// -----------------
// SIDEBAR GAUCHE
// -----------------
export default function ConditionalSidebar() {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/notifications",
    "/emplois",
    "/reseau",
    "/profile", // Cache /profile ET /profile/[id]
    "/profile/[id]", // Alternative spécifique
    "/boutique",
    "/messages", // Ajouté pour cohérence
  ];

  const hide = hiddenRoutes.some((route) => isRouteMatch(pathname, route));

  if (hide) return null;
  return <Sidebar />;
}

// -----------------
// SIDEBAR DROITE
// -----------------
export function ConditionalSidebarRight() {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/emplois",
    "/reseau",
    "/messages",
    "/notifications",
    "/concours", // Cache /concours (sans ID)
    "/concours/[id]", // Cache /concours/1, /concours/abc, etc.
    "/boutique",
    "/profile/[id]", // Cache les profils dynamiques
  ];

  const hide = hiddenRoutes.some((route) => isRouteMatch(pathname, route));

  if (hide) return null;
  return <RightSidebar />;
}

// -----------------
// VISIBILITÉ POUR LE MAIN WRAPPER
// -----------------
export function useRightSidebarVisible() {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/emplois",
    "/reseau",
    "/messages",
    "/notifications",
    "/boutique",
    "/concours", // Cache pour /concours
    "/concours/[id]", // Cache pour /concours/1
    "/profile/[id]", // Cache pour /profile/123
  ];

  return !hiddenRoutes.some((route) => isRouteMatch(pathname, route));
}
