"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiGoogleFill } from "react-icons/ri";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
import Link from "next/link";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";

export interface PhoneRegisterInputs {
  phone: string;
  email?: string;
  password: string;
  confirmPassword: string;
}

export const RegisterPhoneFirstForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<"phone" | "confirm">("phone");
  const [phone, setPhone] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [resendError, setResendError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<PhoneRegisterInputs>();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  // Timer mock pour renvoi du code
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!canResend && step === "confirm") {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [canResend, step]);

  const handleSendCode = async () => {
    if (!phone.match(/^\+\d{9,15}$/)) {
      setError("phone", { type: "manual", message: "Numéro invalide" });
      toast.error("Numéro invalide");
      return;
    }

    setLoading(true);
    // Simuler envoi SMS
    await new Promise((res) => setTimeout(res, 1000));
    toast.success(`Code envoyé à ${phone}`);
    setStep("confirm");
    setCanResend(false);
    setCountdown(60);
    setLoading(false);
  };

  const onSubmit = async () => {
    const values = getValues();

    if (values.password !== values.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Les mots de passe ne correspondent pas",
      });
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    if (!smsCode.match(/^\d{4,6}$/)) {
      toast.error("Code SMS invalide");
      return;
    }

    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000)); // mock "inscription"
    toast.success("Compte créé avec succès !");
    router.push("/profile/setup"); // redirection fictive
    setLoading(false);
  };

  const handleGoogleSignup = () => {
    toast("Connexion Google simulée !");
    router.push("/profile/setup");
  };

  return (
    <form
      onSubmit={handleSubmit(step === "phone" ? handleSendCode : onSubmit)}
      className="space-y-5 max-w-md mx-auto"
    >
      <div>
        <PhoneInput
          country={"mg"}
          value={phone}
          onChange={(value) => setPhone("+" + value)}
          enableSearch
          searchPlaceholder="Rechercher un pays"
          placeholder="34 00 000 00"
          inputClass="!pl-14 !pr-4 !py-2 !rounded-full !w-full !text-base !overflow-hidden"
          disabled={step === "confirm"}
        />
      </div>

      {step === "confirm" && (
        <>
          <input
            type="text"
            value={smsCode}
            onChange={(e) => setSmsCode(e.target.value)}
            placeholder="Code de confirmation reçu par SMS"
            className="w-full p-3 border rounded-lg text-sm"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">
              {canResend ? "Pas reçu le code ?" : `Renvoyer dans ${countdown}s`}
            </span>

            <Button
              type="button"
              onClick={handleSendCode}
              disabled={!canResend}
              className={`font-medium underline ${
                canResend
                  ? "text-primary-600"
                  : "text-gray-400 cursor-not-allowed"
              }`}
              bgColor="bg-gray-900"
            >
              Renvoyer le code
            </Button>
          </div>

          {resendError && <p className="text-red-500 text-sm">{resendError}</p>}

          <Input
            type="email"
            id="email"
            placeholder="Adresse email (facultatif)"
            register={register}
            errors={errors}
            errorMg={errors.email?.message}
            isLoading={isSubmitting}
            isAutocompleted
          />

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
              register={register}
              errors={errors}
              errorMg={errors.password?.message || "Mot de passe requis"}
              isLoading={isSubmitting}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirmer le mot de passe"
              register={register}
              errors={errors}
              errorMg={
                errors.confirmPassword?.message || "Confirmation requise"
              }
              isLoading={isSubmitting}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
        </>
      )}

      <Button
        type="submit"
        onClick={handleSendCode}
        disabled={isSubmitting || loading}
        className="transition disabled:opacity-50 w-full"
        bgColor="bg-gray-900"
      >
        {loading
          ? step === "phone"
            ? "Envoi en cours..."
            : "Création du compte..."
          : step === "phone"
          ? "Envoyer le code"
          : "Créer un compte"}
      </Button>
      {/* Google */}
      <Button
        type="button"
        onClick={handleGoogleSignup}
        variant="outline"
        borderColor="border-gray-900"
        className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center gap-2"
      >
        <RiGoogleFill className="w-5 h-5" />
        <p className="font-medium">S'inscrire avec Google</p>
      </Button>
      <p className="text-center text-sm text-gray-700">
        Déjà un compte ?{" "}
        <Link
          href="/connexion"
          className="text-gray-900 font-semibold hover:underline"
        >
          Connecte-toi ici
        </Link>
      </p>
    </form>
  );
};
