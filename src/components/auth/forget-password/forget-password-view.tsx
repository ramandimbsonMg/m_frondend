"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { ForgetPasswordForm } from "./forget-password-form";
import { FaUserCircle } from "react-icons/fa";
import { Box } from "@/components/ui/box/box";
import Modal from "@/components/ui/modal/modal";
import { AiOutlineClose } from "react-icons/ai";
import { LeftColumnLogin } from "../login/quickLogin/Left-column-login";
import Logo from "@/components/global/Logo";

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
    <div className="flex-1 flex flex-col justify-center px-8 py-8 lg:px-16">
      <div className="max-w-sm lg:max-w-[305px] w-full mx-auto space-y-4 bg-white px-6 py-6 rounded-xl">
        <div className="">
          <Logo size="lg" className="items-start" />
          {/* <p className="text-gray-500 mt-2 text-xs text-primary-900 font-bold items-end opacity-50">
                Heureux de vous revoir sur Missera.
              </p> */}
        </div>
        <p className="text-center text-sm text-gray-500 pt-4">
          En continuant, vous acceptez{" "}
          <Link href="#" className="text-primary hover:underline">
            les conditions de service et Avis de confidentialité.
          </Link>
        </p>
        <ForgetPasswordForm />
      
      </div>
    </div>
  );
};
