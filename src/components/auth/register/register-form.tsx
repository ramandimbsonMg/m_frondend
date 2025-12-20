"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiGoogleFill } from "react-icons/ri";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";

export interface PhoneRegisterInputs {
  phone: string;
  email?: string;
  password: string;
  confirmPassword: string;
}

export const RegisterPhoneFirstForm = () => {
  const [step, setStep] = useState<"phone" | "confirm">("phone");
  const [phone, setPhone] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<PhoneRegisterInputs>();

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

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSendCode = async () => {
    if (!phone.match(/^\+\d{9,15}$/)) {
      setError("phone", { type: "manual", message: "Numéro invalide" });
      toast.error("Numéro invalide");
      return;
    }
    setLoading(true);
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
    await new Promise((res) => setTimeout(res, 1000));
    toast.success("Compte créé avec succès !");
    // ici tu peux router.push("/profile/setup");
    setLoading(false);
  };

  const handleGoogleSignup = () => {
    toast("Connexion Google simulée !");
  };

  return (
    <form
      onSubmit={handleSubmit(step === "phone" ? handleSendCode : onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      {step === "phone" && (
        <div className="space-y-3">
          <label className="text-md font-medium text-gray-700 ml-1">
            Numéro de téléphone
          </label>
          <div className="w-full space-y-2 group">
            <div className="relative phone-input-container">
              <PhoneInput
                country="mg"
                value={phone}
                onChange={(value) => setPhone("+" + value)}
                enableSearch
                searchPlaceholder="Rechercher un pays..."
                placeholder="34 00 000 00"
                // Styles du conteneur principal
                containerClass="!w-full !rounded-full !border-0"
                // Styles de l'input (le champ texte)
                inputClass="!w-full !h-10 !pl-16 !text-base !font-medium !text-gray-900 !bg-white !rounded-full !border-1 !border-gray-300 focus:!border-primary-500 focus:!ring-1 focus:!ring-gray-200 transition-all"
                // Styles du bouton de sélection du pays (drapeau)
                buttonClass="!bg-transparent !border-0 !rounded-l-full !pl-4 !w-14 hover:!bg-transparent group-focus-within:!bg-transparent"
                // Styles du menu déroulant
                dropdownClass="!rounded-2xl !shadow-2xl !border-gray-100 !mt-2 !animate-in !fade-in !slide-in-from-top-2 !duration-200"
                // Customization fine
                inputStyle={{
                  width: "100%",
                }}
                buttonStyle={{
                  backgroundColor: "transparent",
                }}
              />

              {/* Petite décoration : un point vert si le numéro semble long (optionnel) */}
              {phone.length > 10 && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              )}
            </div>

            <p className="text-[11px] text-gray-400 ml-4">
              Format international automatique pour Madagascar
            </p>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-44 shadow-lg shadow-gray-200 hover:shadow-primary-100 transition-all rounded-full font-bold text-md bg-gray-900"
              bgColor="bg-gray-900"
              disabled={loading || isSubmitting}
            >
              {loading ? "Envoi..." : "Envoyer le code"}
            </Button>
          </div>
        </div>
      )}

      {step === "confirm" && (
        <>
          <Input
            type="text"
            id="smsCode"
            value={smsCode}
            onChange={(e) => setSmsCode(e.target.value)}
            placeholder="Code SMS reçu"
            className="border-gray-200 focus:ring-primary-200 rounded-full transition-all w-full"
          />
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">
              {canResend ? "Pas reçu le code ?" : `Renvoyer dans ${countdown}s`}
            </span>
            <Button
              type="button"
              onClick={handleSendCode}
              disabled={!canResend}
              className="font-medium underline text-white disabled:text-gray-400 disabled:cursor-not-allowed"
              bgColor="bg-gray-900"
            >
              Renvoyer
            </Button>
          </div>

          <Input
            type="email"
            id="email"
            placeholder="Email (facultatif)"
            register={register}
            errors={errors}
            errorMg={errors.email?.message}
            className="border-gray-200 focus:ring-primary-300 rounded-full transition-all"
          />

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
              register={register}
              errors={errors}
              errorMg={errors.password?.message || "Mot de passe requis"}
              className="border-gray-200 focus:ring-primary-500 placeholder:text-sm rounded-full transition-all w-full"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500 transition-colors"
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
              className="border-gray-200 focus:ring-primary-500 placeholder:text-sm rounded-full transition-all w-full"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500 transition-colors"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={loading || isSubmitting}
              className="w-44 rounded-full bg-gray-900 text-white font-bold shadow-lg shadow-gray-200 hover:shadow-primary-100 transition-all"
            >
              {loading ? "Création..." : "Créer le compte"}
            </Button>
          </div>
        </>
      )}

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
