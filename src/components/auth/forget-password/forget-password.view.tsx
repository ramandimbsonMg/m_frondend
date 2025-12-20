"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { ForgetPasswordForm } from "./forget-password.form";
import { FaUserCircle } from "react-icons/fa";
import { Box } from "@/components/ui/box/box";
import Modal from "@/components/ui/modal/modal";
import { AiOutlineClose } from "react-icons/ai";
import { LeftColumnLogin } from "../login/quickLogin/Left-column-login";

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

export const ForgetPasswordView = ({ className }: Props) => {
  const [star, setStar] = useState<User[]>([]);
  const [showQuickLoginMobile, setShowQuickLoginMobile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Charger les utilisateurs enregistrés depuis le localStorage (mock)
  useEffect(() => {
    const stored = localStorage.getItem("local_users");
    if (stored) {
      const parsed: User[] = JSON.parse(stored);
      setStar(parsed);
    } else {
      // Si aucun utilisateur, ajouter un mock
      const mockUsers: User[] = [
        { id: 1, email: "user1@example.com", avatar: "" },
        { id: 2, email: "user2@example.com", avatar: "" },
      ];
      setStar(mockUsers);
      localStorage.setItem("local_users", JSON.stringify(mockUsers));
    }
  }, []);

  useEffect(() => {
    const logoutSuccess = localStorage.getItem("logout_success");
    if (logoutSuccess) {
      setShowLogoutModal(true);
      localStorage.removeItem("logout_success");
    }
  }, []);

  return (
    <div className="relative lg:container justify-center lg:mt-20 lg:max-w-6xl mx-auto mt-8 flex items-center bg-white lg:bg-transparent">
      <div className="lg:grid lg:grid-cols-2 gap-2 items-start">
        {/* LEFT COLUMN */}
        <LeftColumnLogin />

        {/* RIGHT COLUMN: FORMULAIRE DE CONNEXION */}
        <div className={clsx(className, "w-full max-w-sm mx-auto")}>
          <Box
            padding_x="px-5"
            className="space-y-2   rounded shadow-md bg-white py-4"
          >
            <h2>Logo</h2>
            <p className="mb-4">
              En continuant, vous acceptez{" "}
              <Link href="#" className="text-primary hover:underline">
                les conditions de service et Avis de confidentialité.
              </Link>
            </p>
            <ForgetPasswordForm />
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

        {/* QuickLogin modal sur mobile */}
        {showQuickLoginMobile && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center lg:hidden pt-3 px-3">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4 relative">
              <button
                onClick={() => setShowQuickLoginMobile(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
                aria-label="Fermer"
              >
                <AiOutlineClose />
              </button>

              <div className="space-y-3">
                <p className="font-medium text-center">
                  Utilisateurs enregistrés
                </p>
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
                      <p className="font-medium">{user.email || user.phone}</p>
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

         <div className="lg:hidden mt-6 text-center px-4">
                  <button
                    onClick={() => setShowQuickLoginMobile(true)}
                    className="
                            inline-flex items-center justify-center w-full max-w-sm mx-auto
                            px-6 py-3
                            bg-white border-2 border-gray-200 text-gray-800
                            rounded-full shadow-lg
                            hover:bg-primary-50 hover:border-primary-500 hover:text-primary-700
                            transition-all duration-300 ease-in-out
                        "
                  >
                    <FaUserCircle className="w-5 h-5 mr-3 text-primary-500" />
                    <p className="font-medium">
                      Se connecter avec un compte local
                    </p>
                  </button>
              </div>
      </div>
    </div>
  );
};
