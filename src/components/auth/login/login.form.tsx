"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { EyeIcon, EyeOff, Link2Icon, MailIcon } from "lucide-react";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";

export interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Pas de backend → simple console.log
  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login data :", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Champ Email / Numéro */}
      <Input
        type="text"
        id="email"
        placeholder="Email ou numéro"
        register={register}
        errors={errors}
        errorMg={errors.email?.message || "Ce champ est requis"}
        isLoading={isSubmitting}
        isAutocompleted={true}
        icon={{ icon: MailIcon }}
        required
      />

      {/* Champ Password */}
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Mot de passe"
          register={register}
          errors={errors}
          errorMg={errors.password?.message || "Ce champ est requis"}
          isLoading={isSubmitting}
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-7 transform -translate-y-1/2 text-primary -mt-2"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <EyeIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Bouton de connexion */}
      <Button type="submit" className="w-full" bgColor="bg-gray-900">
        Se connecter
      </Button>

      {/* Google */}
      <Button
        type="button"
        variant="outline"
        borderColor="border-gray-900"
        className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center gap-2"
      >
        <Link2Icon className="w-5 h-5" />
        <h5 className="font-medium">Se connecter avec Google</h5>
      </Button>

      {/* Liens */}
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <Link href="/mots-de-passe-oublie" className="hover:underline">
          Mot de passe oublié ?
        </Link>
      </div>

      <hr className="my-6 border-gray-200" />

      <p className="text-center text-sm text-gray-700">
        Pas encore de compte ?{" "}
        <Link
          href="/connexion/inscription"
          className="text-gray-900 font-semibold hover:underline"
        >
          Créer un compte
        </Link>
      </p>
    </form>
  );
};
