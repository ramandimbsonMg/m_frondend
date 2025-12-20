"use client";

import Link from "next/link";
import { LoginForm } from "./login-form";
import { FormsType } from "@/types/formsProps";
import { useEffect, useState } from "react";
import { LeftColumnLogin } from "./quickLogin/Left-column-login";
import { UserCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { User } from "@/types/types";
import Modal from "@/components/ui/modal/modal";
import Logo from "@/components/global/Logo";
import { mockUsers } from "@/data/user";
import { QuickLoginUsersMobile } from "./quickLogin/handle-quickLogin";

interface Props {
  form: FormsType;
  className?: string;
}

export const LoginView = ({ form, className }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [showMobileLogin, setShowMobileLogin] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("local_users");
    if (stored) {
      setUsers(JSON.parse(stored));
    } else {
      setUsers(mockUsers);
      localStorage.setItem("local_users", JSON.stringify(mockUsers));
    }
  }, []);


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/2 hidden lg:block">
          <LeftColumnLogin />
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 py-8 lg:px-16">
          <div className="max-w-sm w-full mx-auto space-y-4 bg-white px-6 py-6 rounded-xl">
            <div className="">
              <Logo size="lg" className="items-start" />
              {/* <p className="text-gray-500 mt-2 text-xs text-primary-900 font-bold items-end opacity-50">
                Heureux de vous revoir sur Missera.
              </p> */}
            </div>

            <LoginForm />

            <p className="text-center text-sm text-gray-500 pt-4">
              En continuant, vous acceptez nos{" "}
              <Link
                href="#"
                className="text-gray-900 font-semibold underline underline-offset-4"
              >
                Conditions
              </Link>
            </p>
          </div>
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
