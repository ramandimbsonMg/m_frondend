"use client";

import { usePathname } from "next/navigation";

// Même fonction utilitaire que dans ConditionalSidebar
const isRouteMatch = (pathname: string, routePattern: string): boolean => {
  if (routePattern.includes("[") && routePattern.includes("]")) {
    const baseRoute = routePattern.split("[")[0];
    const expectedSegments = routePattern.split("/").length;
    const actualSegments = pathname.split("/").length;

    return (
      pathname.startsWith(baseRoute) && actualSegments === expectedSegments
    );
  }

  return pathname === routePattern || pathname.startsWith(`${routePattern}/`);
};

export default function ConditionalMainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const specialRoutes = [
    "/notifications",
    "/emplois",
    "/reseau",
    "/profile",
    "/profile/[id]",
    "/messages",
    "/boutique",
    "/concours",
    "/concours/[id]", 
  ];

  const isSpecialRoute = specialRoutes.some((route) =>
    isRouteMatch(pathname, route)
  );

  const containerClass = isSpecialRoute ? "lg:max-w-4xl" : "lg:max-w-2xl";

  return (
    <div className={`flex-1 ${containerClass} mx-auto px-4 py-6`}>
      {children}
    </div>
  );
}

// -----------------------
// VERSION SANS RIGHT SIDEBAR
// -----------------------
export const ConditionalMainWrapperNoRight = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  const specialRoutes = [
    "/notifications",
    "/emplois",
    "/reseau",
    "/messages",
    "/boutique",
    "/concours",
    "/concours/[id]",
    "/profile/[id]",
  ];

  const isSpecialRoute = specialRoutes.some((route) =>
    isRouteMatch(pathname, route)
  );

  const containerClass = isSpecialRoute ? "lg:max-w-8xl" : "lg:max-w-2xl";

  return (
    <div className={`lg:flex-1 ${containerClass} py-6`}>
      {children}
    </div>
  );
};
