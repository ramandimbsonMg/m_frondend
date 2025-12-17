"use client";

import { Box } from "@/ui/design-systeme/box/box";
import { Typography } from "@/ui/design-systeme/typography/typography";
import Link from "next/link";
import { LogoSite } from "@/ui/components/logo/logo";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { RegisterPhoneFirstForm } from "./register.form";
import { QuickLoginUsers } from "../login/quickLogin/handleQuickLogin";
import Modal from "@/ui/design-systeme/modal/modal";
import { AiOutlineClose } from "react-icons/ai";
import { LeftColumnLogin } from "../login/quickLogin/LeftColumnLogin";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  className?: string;
}

interface User {
  id: number;
  email: string;
  phone?: string;
  avatar?: string;
  profile?: {
    name?: string;
    firstname?: string;
    bio?: string;
    slug?: string;
    photo?: string;
    couverture?: string;
  };
}

export const RegisterView = ({ className }: Props) => {
  const [star, setStar] = useState<User[]>([]);
  const [showQuickLoginMobile, setShowQuickLoginMobile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Charger les utilisateurs mock depuis localStorage ou créer un mock
  useEffect(() => {
    const stored = localStorage.getItem("local_users");
    if (stored) {
      setStar(JSON.parse(stored));
    } else {
      const mockUsers: User[] = [
        { id: 1, email: "user1@example.com" },
        { id: 2, email: "user2@example.com" },
        { id: 3, email: "user3@example.com" },
      ];
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
    <div
      className="
    relative 
    min-h-screen 
    flex 
    items-center 
    justify-center 
    bg-white 
    lg:bg-transparent
    px-4
  "
    >
      <div className="w-full lg:container lg:max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 gap-10 lg:items-start flex flex-col items-center">
          {/* LEFT COLUMN */}
          <div className="w-full flex justify-center lg:justify-start mb-2 lg:mb-0">
            <LeftColumnLogin />
          </div>

          {/* RIGHT COLUMN — FORMULAIRE D'INSCRIPTION */}
          <div className={clsx(className, "w-full max-w-sm mx-auto")}>
            <Box
              padding_x="px-5" padding_y="py-0"
              className="space-y-2 pb-3 pt-0 rounded shadow-md bg-white"
            >
                <LogoSite size="large" />

              <Typography className="text-sm text-gray-600">
                En continuant, vous acceptez{" "}
                <Link href="#" className="text-primary hover:underline">
                  les conditions de service et Avis de confidentialité.
                </Link>
              </Typography>

              <RegisterPhoneFirstForm />

              {showLogoutModal && (
                <Modal
                  onClose={() => setShowLogoutModal(false)}
                  title="Déconnexion réussie"
                >
                  <p>Vous avez été déconnecté avec succès.</p>
                </Modal>
              )}
            </Box>
          </div>

          {/* MODAL QUICK LOGIN MOBILE */}
          {showQuickLoginMobile && (
            <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:hidden">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4 relative">
                <button
                  onClick={() => setShowQuickLoginMobile(false)}
                  className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
                  aria-label="Fermer"
                >
                  <AiOutlineClose />
                </button>

                <div className="space-y-3">
                  <Typography className="font-medium text-center">
                    Utilisateurs enregistrés
                  </Typography>

                  {star.map((user) => (
                    <button
                      key={user.id}
                      className="flex items-center w-full gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {(user.email || user.phone || "U")
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <div>
                        <p className="font-medium">
                          {user.email || user.phone}
                        </p>
                        <p className="text-sm text-gray-500">
                          Compte utilisateur
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* BOUTON MOBILE */}
          <div className="lg:hidden mt-2 w-full flex justify-center">
            <button
              onClick={() => setShowQuickLoginMobile(true)}
              className="
            inline-flex items-center justify-center 
            w-full max-w-sm px-6 py-3
            bg-white border-2 border-gray-200 text-gray-800
            rounded-full shadow-lg
            hover:bg-primary-50 hover:border-primary-500 hover:text-primary-700
            transition-all duration-300 ease-in-out
          "
            >
              <FaUserCircle className="w-5 h-5 mr-3 text-primary-500" />
              <Typography component="span" variant="medium" weight="bold">
                Se connecter avec un compte local
              </Typography>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
