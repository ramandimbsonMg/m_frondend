"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input/input";

interface PhoneRegisterInputs {
  phone: string;
}

export const RegisterPhoneForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PhoneRegisterInputs>();

  const router = useRouter();
  const email = router.query.email as string;
  const password = router.query.password as string;

  const onSubmit = async (data: PhoneRegisterInputs) => {
    try {
      // Simuler un délai
      await new Promise((res) => setTimeout(res, 1000));

      // Vérification simple mock
      if (!data.phone.match(/^\+?\d{9,15}$/)) {
        setError("phone", {
          type: "manual",
          message: "Numéro invalide",
        });
        toast.error("Numéro invalide");
        return;
      }

      // Succès simulé
      toast.success("Inscription terminée !");
      router.push("/connexion"); // Redirection fictive
    } catch (error) {
      setError("phone", {
        type: "manual",
        message: "Erreur lors de l’enregistrement du numéro.",
      });
      toast.error("Erreur lors de l’enregistrement");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <Input
        type="text"
        id="phone"
        placeholder="Votre numéro de téléphone"
        register={register}
        errors={errors}
        errorMg={errors.phone?.message || "Ce champ est requis"}
        isLoading={isSubmitting}
        isAutocompleted
        icon={{ icon: AiFillPhone }}
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
      >
        {isSubmitting ? "Enregistrement..." : "Terminer l’inscription"}
      </button>
    </form>
  );
};
