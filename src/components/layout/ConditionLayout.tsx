"use client";

import Navbar from "@/components/layout/navigations/Navbar";
import ClientMainLayout from "@/components/layout/ClientMainLayout";
import { usePathname } from "next/navigation";
import ProfileCompletionAlert from "../global/ProfileCompletionAlert";
import { useEffect, useRef, useState } from "react";

export default function ConditionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage = [
    "/login",
    "/register",
    "/forgot-password",
    "/not-found",
    "/error",
  ].includes(pathname);

  if (isAuthPage) return <>{children}</>;

  const [profileCompletion, setProfileCompletion] = useState(65);
  const [showAlert, setShowAlert] = useState(false);
  const [alertClosed, setAlertClosed] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (!alertClosed && currentScrollY < lastScrollY.current) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [alertClosed]);

  return (
    <>
      <Navbar />
{/* 
      {!alertClosed && (
        <div
          className={`fixed top-16 left-0 right-0 z-50 transition-all duration-300 ${
            showAlert
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6 pointer-events-none"
          }`}
        >
          <ProfileCompletionAlert
            completion={profileCompletion}
            onCompletionUpdate={setProfileCompletion}
            onClose={() => setAlertClosed(true)}
          />
        </div>
      )} */}

      {/* <main className={alertClosed ? "pt-0" : "pt-4"}> */}
      <main className="mt-2">

        <ClientMainLayout>{children}</ClientMainLayout>
      </main>
    </>
  );
}
