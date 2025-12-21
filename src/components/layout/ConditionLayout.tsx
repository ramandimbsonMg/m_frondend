"use client";

import Navbar from "@/components/layout/navigations/Navbar";
import ClientMainLayout from "@/components/layout/ClientMainLayout";
import { usePathname } from "next/navigation";

export default function ConditionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot-password" ||
    pathname === "/not-found";
  if (isAuthPage) {
    return <>{children}</>;
  }
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full max-w-none">
        <ClientMainLayout>{children}</ClientMainLayout>
      </main>
    </>
  );
}
