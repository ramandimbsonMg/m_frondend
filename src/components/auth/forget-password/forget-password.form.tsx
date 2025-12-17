"use client";

import { useState } from "react";
import { Input } from "@/ui/design-systeme/input/input";
import { Typography } from "@/ui/design-systeme/typography/typography";
import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import toast from "react-hot-toast";

export const ForgetPasswordForm = () => {
  const [step, setStep] = useState(1);
  const [identifier, setIdentifier] = useState("");
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [multipleUsers, setMultipleUsers] = useState<any[]>([]);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Mock envoi code
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1000)); // Simuler délai

    // Simulation : si email contient "multi", proposer plusieurs comptes
    if (identifier.includes("multi")) {
      setMultipleUsers([
        { id: 1, email: "user1@example.com", avatar: "" },
        { id: 2, email: "user2@example.com", avatar: "" },
      ]);
      setStep(2);
    } else {
      setSelectedUser({ email: identifier, avatar: "" });
      setStep(3);
      setSuccessMsg("Code envoyé avec succès !");
      toast.success("Code envoyé !");
    }

    setLoading(false);
  };

  const handleUserSelection = (user: any) => {
    setSelectedUser(user);
    setIdentifier(user.email || user.phone || "");
    setStep(3);
    setSuccessMsg("Code envoyé avec succès !");
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    // Simuler délai et succès
    await new Promise((res) => setTimeout(res, 1000));
    if (code === "123456") {
      setStep(4);
      setSuccessMsg("Mot de passe réinitialisé avec succès !");
      toast.success("Mot de passe réinitialisé !");
    } else {
      setErrorMsg("Code incorrect. Veuillez réessayer.");
      toast.error("Code incorrect !");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <Typography variant="medium" weight="bold" className="text-center">
        Réinitialiser le mot de passe
      </Typography>

      {errorMsg && (
        <p className="text-red-600 text-sm text-center">{errorMsg}</p>
      )}
      {successMsg && (
        <p className="text-green-600 text-sm text-center">{successMsg}</p>
      )}

      {/* Étape 1 : email / téléphone */}
      {step === 1 && (
        <form onSubmit={handleSendCode} className="space-y-4">
          <Input
            type="text"
            placeholder="Email ou téléphone"
            value={identifier}
            id="identifier"
            onChange={(e) => setIdentifier(e.target.value)}
            icon={{ icon: AiFillMail }}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-lg transition"
          >
            {loading ? "Traitement..." : "Rechercher mon compte"}
          </button>
        </form>
      )}

      {/* Étape 2 : sélection compte */}
      {step === 2 && (
        <div className="space-y-4">
          <Typography className="text-center font-medium">
            Sélectionnez votre compte
          </Typography>
          {multipleUsers.map((u) => (
            <button
              key={u.id}
              onClick={() => handleUserSelection(u)}
              className="flex items-center w-full gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {(u.email || u.phone || "U").charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-medium">{u.email || u.phone}</p>
                <p className="text-sm text-gray-500">Compte utilisateur</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Étape 3 : code + nouveau mot de passe */}
      {step === 3 && selectedUser && (
        <form onSubmit={handleResetPassword} className="space-y-4 relative">
          <Input
            type="text"
            placeholder="Code reçu"
            value={code}
            id="code"
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Nouveau mot de passe"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            id="newPassword"
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-lg transition"
            disabled={loading}
          >
            {loading ? "En cours..." : "Réinitialiser le mot de passe"}
          </button>
        </form>
      )}

      {/* Étape 4 : succès */}
      {step === 4 && (
        <p className="text-center text-green-600 font-medium">
          ✅ Votre mot de passe a été changé avec succès. Vous pouvez maintenant
          vous connecter.
        </p>
      )}

      <Typography className="text-center text-sm text-gray-700">
        Déjà un compte ?{" "}
        <Link
          href="/connexion"
          className="text-gray-900 font-semibold hover:underline"
        >
          Connecte-toi ici
        </Link>
      </Typography>
    </div>
  );
};
