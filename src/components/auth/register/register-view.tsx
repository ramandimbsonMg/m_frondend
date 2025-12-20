"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { RegisterPhoneFirstForm } from "./register-form";
import { LeftColumnLogin } from "../login/quickLogin/Left-column-login";
import Modal from "@/components/ui/modal/modal";
import { mockUsers } from "@/data/user";
import { User } from "@/types/types";
import Logo from "@/components/global/Logo";
import { QuickLoginUsersMobile } from "../login/quickLogin/handle-quickLogin";
import { Button } from "@/components/ui/button/button";
import { UserCircle } from "lucide-react";

interface Props {
  className?: string;
}

export const RegisterView = ({ className }: Props) => {
  const [star, setStar] = useState<User[]>([]);
  const [showQuickLoginMobile, setShowQuickLoginMobile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showMobileLogin, setShowMobileLogin] = useState(false);

  // Charger les utilisateurs mock depuis localStorage ou créer un mock
  useEffect(() => {
    const stored = localStorage.getItem("local_users");
    if (stored) {
      setStar(JSON.parse(stored));
    } else {
      setStar(mockUsers);
      localStorage.setItem("local_users", JSON.stringify(mockUsers));
    }

    const logoutSuccess = localStorage.getItem("logout_success");
    if (logoutSuccess) {
      setShowLogoutModal(true);
      localStorage.removeItem("logout_success");
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* LEFT COLUMN */}
      <div className="lg:w-1/2 hidden lg:block">
        <LeftColumnLogin />
      </div>
      {/* RIGHT COLUMN — FORMULAIRE D'INSCRIPTION */}
      <div className={clsx(className, "w-full max-w-sm mx-auto")}>
        <div className="max-w-sm w-full mx-auto space-y-4 bg-white px-6 py-6 rounded-xl">
          <div className="">
            <Logo size="lg" className="items-start" />
            {/* <p className="text-gray-500 mt-2 text-xs text-primary-900 font-bold items-end opacity-50">
                Heureux de vous revoir sur Missera.
              </p> */}
          </div>
          <p className="text-sm text-gray-600">
            En continuant, vous acceptez{" "}
            <Link href="#" className="text-primary hover:underline">
              les conditions de service et Avis de confidentialité.
            </Link>
          </p>

          <RegisterPhoneFirstForm />

          {showLogoutModal && (
            <Modal
              onClose={() => setShowLogoutModal(false)}
              title="Déconnexion réussie"
            >
              <p>Vous avez été déconnecté avec succès.</p>
            </Modal>
          )}
        </div>
      </div>
      <div className="fixed bottom-6 lg:hidden w-full px-2">
        <Button
          onClick={() => setShowMobileLogin(true)}
          className="px-4 py-2 bg-primary text-white"
        >
          <UserCircle className="text-primary-500" />
          Autre Comptes
        </Button>

        {/* Composant mobile */}
        <QuickLoginUsersMobile
          showModal={showMobileLogin}
          onClose={() => setShowMobileLogin(false)}
        />
      </div>
    </div>
  );
};
