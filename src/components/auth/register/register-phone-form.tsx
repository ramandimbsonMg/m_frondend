"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AiFillPhone } from "react-icons/ai";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";

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

  const onSubmit = async (data: PhoneRegisterInputs) => {
    try {
      // Simulation d'envoi / vérification
      await new Promise((res) => setTimeout(res, 1000));

      if (!data.phone.match(/^\+?\d{9,15}$/)) {
        setError("phone", { type: "manual", message: "Numéro invalide" });
        toast.error("Numéro invalide");
        return;
      }

      toast.success("Inscription terminée !");
      router.push("/login"); // Redirection
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
        icon={{ icon: AiFillPhone }}
        className="border-gray-200 focus:ring-primary-500 rounded-full transition-all"
        required
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-gray-900 text-white font-bold shadow-lg shadow-gray-200 hover:shadow-primary-100 transition-all"
      >
        {isSubmitting ? "Enregistrement..." : "Terminer l’inscription"}
      </Button>
    </form>
  );
};
