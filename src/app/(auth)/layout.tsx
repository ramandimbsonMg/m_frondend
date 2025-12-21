"use client";

import { useState } from "react";
import { Users } from "lucide-react";

import { QuickLoginUsersMobile } from "@/components/auth/login/quickLogin/handle-quickLogin";
import { LeftColumnLogin } from "@/components/auth/login/quickLogin/Left-column-login";
import { Button } from "@/components/ui/button/button";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMobileLogin, setShowMobileLogin] = useState(false);

  return (
    <div className="h-screen">
      <div className="flex w-full overflow-hidden flex-col lg:flex-row">
        <div className="hidden lg:block lg:w-1/2">
          <LeftColumnLogin />
        </div>

        <div className="flex-1">{children}</div>
      </div>

      <div className="fixed top-8 left-20 w-full lg:hidden">
        <div className="relative inline-flex group">
          <span className="absolute inset-0 rounded-full bg-primary-400 opacity-20 group-hover:animate-ping" />

          <Button
            onClick={() => setShowMobileLogin(true)}
            variant="ico"
            size="medium"
            className="
              relative h-12 w-12 rounded-full bg-white
              border-2 border-primary-100 text-white
              shadow-lg flex items-center justify-center
              transition-all duration-300
              hover:scale-110 hover:bg-primary-50 hover:text-primary-700
            "
          >
            <Users size={22} strokeWidth={2.5} />

            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary" />
            </span>
          </Button>

          <div
            className="
            absolute bottom-full mb-2 left-1/2 -translate-x-1/2
            rounded bg-gray-900 px-2 py-1 mt-6
            text-[10px] font-bold uppercase tracking-tighter text-white
            opacity-0 transition-opacity group-hover:opacity-100
            pointer-events-none whitespace-nowrap
          "
          >
            Changer de compte
          </div>
        </div>

        <QuickLoginUsersMobile
          showModal={showMobileLogin}
          onClose={() => setShowMobileLogin(false)}
        />
      </div>
    </div>
  );
}
