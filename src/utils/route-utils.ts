// utils/routeUtils.ts
export const isRouteMatch = (
  pathname: string,
  routePattern: string
): boolean => {
  // Si c'est une route dynamique avec [param]
  if (routePattern.includes("[") && routePattern.includes("]")) {
    // Convertir le pattern en regex
    // Exemple: /concours/[id] → /concours/([^/]+)
    const regexPattern = routePattern
      .replace(/\[.*?\]/g, "([^/]+)")
      .replace(/\//g, "\\/");

    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(pathname);
  }

  // Pour les routes normales, vérifier la racine ET les sous-routes
  return pathname === routePattern || pathname.startsWith(`${routePattern}/`);
};

// Fonction pour vérifier plusieurs routes
export const shouldHideComponent = (
  pathname: string,
  hiddenRoutes: string[]
): boolean => {
  return hiddenRoutes.some((route) => isRouteMatch(pathname, route));
};
