"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

// -----------------
// SIDEBAR GAUCHE
// -----------------
export default function ConditionalSidebar() {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/notifications",
    "/emplois",
    "/reseau",
    "/profile",
    "/boutique",
  ];

  const hide = hiddenRoutes.some((r) => pathname.startsWith(r));

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
  ];

  const hide = hiddenRoutes.some((r) => pathname.startsWith(r));

  if (hide) return null;
  return <RightSidebar />;
}

// -----------------
// VISIBILITÉ POUR LE MAIN WRAPPER
// -----------------
export function useRightSidebarVisible() {
  const pathname = usePathname();

  // même règle que ConditionalSidebarRight
  const hiddenRoutes = [
    "/emplois",
    "/reseau",
    "/messages",
    "/notifications",
    "/boutique",
  ];

  return !hiddenRoutes.some((r) => pathname.startsWith(r));
}
