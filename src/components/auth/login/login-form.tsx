"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { EyeIcon, EyeOff, MailIcon } from "lucide-react";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => console.log("Login data :", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-3">
        <label className="text-md font-medium text-gray-700 ml-1 mt-2">
          Email
        </label>
        <Input
          type="text"
          id="email"
          placeholder="email@exemple.com"
          register={register}
          errors={errors}
          className="border-gray-200 focus:ring-primary-500 rounded-full transition-all"
          icon={{ icon: MailIcon }}
          required
          iconSize="lg"
        />
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center px-1">
          <label className="text-md font-medium text-gray-700">
            Mot de passe
          </label>
          <Link
            href="/forgot"
            className="text-xs text-primary-600 hover:text-primary-700 hover:underline font-medium"
          >
            Oublié ?
          </Link>
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="••••••••"
            register={register}
            errors={errors}
            className="border-gray-200 focus:ring-primary-500 placeholder:text-sm rounded-full transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500 transition-colors"
          >
            {showPassword ? <EyeOff size={20} className="text-primary" /> : <EyeIcon size={20} className="text-primary" />}
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          className="w-40 shadow-lg shadow-gray-200 hover:shadow-primary-100 transition-all rounded-full font-bold text-md bg-gray-900"
          bgColor="bg-gray-900"
        >
          Se connecter
        </Button>
      </div>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-400">Ou continuer avec</span>
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        {/* Google */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-primary border shadow hover:shadow-md transition-transform hover:scale-110 cursor-pointer">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
              fill="#EA4335"
            />
          </svg>
        </div>

        {/* Facebook */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-primary border shadow hover:shadow-md transition-transform hover:scale-110 cursor-pointer">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.413c0-3.046 1.808-4.72 4.516-4.72 1.297 0 2.656.233 2.656.233v2.96h-1.492c-1.488 0-1.953.938-1.953 1.9V12.073h3.297l-.527 3.49h-2.77V24C19.612 23.094 24 18.1 24 12.073z"
              fill="#1877F2"
            />
            <path
              d="M16.643 15.563l.527-3.49h-3.297V9.886c0-.962.465-1.9 1.953-1.9h1.492V5.026s-1.359-.233-2.656-.233c-2.708 0-4.516 1.674-4.516 4.72v2.559H7.078v3.49h3.047V24a12.52 12.52 0 001.875.148c.633 0 1.26-.05 1.875-.148v-8.437h2.768z"
              fill="white"
            />
          </svg>
        </div>

        {/* LinkedIn */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-primary border shadow hover:shadow-md transition-transform hover:scale-110 cursor-pointer">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.063 2.063 0 010 4.125zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              fill="#0A66C2"
            />
          </svg>
        </div>
      </div>
    </form>
  );
};
