"use client";

import Link from "next/link";
import { LoginForm } from "./login-form";
import { useEffect, useState } from "react";
import { Props, User } from "@/types/types";
import Logo from "@/components/global/Logo";
import { mockUsers } from "@/data/user";

export const LoginView = ({className}:Props) => {
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
    <div className="flex-1 flex flex-col justify-center px-8 py-8 lg:px-16">
      <div className="max-w-sm lg:max-w-[305px] w-full mx-auto space-y-4 bg-white px-6 py-6 rounded-xl">
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
  );
};
