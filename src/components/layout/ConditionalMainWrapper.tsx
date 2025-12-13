"use client";

import { usePathname } from "next/navigation";

export default function ConditionalMainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const specialRoutes = ["/notifications", "/emplois", "/reseau"];
  const isSpecialRoute = specialRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const containerClass = isSpecialRoute ? "max-w-4xl" : "max-w-2xl";

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

  const specialRoutes = ["/notifications", "/emplois", "/reseau"];
  const isSpecialRoute = specialRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const containerClass = isSpecialRoute ? "max-w-8xl" : "max-w-2xl";

  return (
    <div className={`flex-1 ${containerClass} mx-auto px-4 py-6`}>
      {children}
    </div>
  );
};
