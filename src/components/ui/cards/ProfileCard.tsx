"use client";

import { useState } from "react";
import { Info, User, Mail, Phone } from "lucide-react";

interface ProfileCardProps {
  name: string;
  role: string;
  status: string;
  level: string;
  profileCompletion: number; // %
}

export default function ProfileCard({
  name,
  role,
  status,
  level,
  profileCompletion,
}: ProfileCardProps) {
  const [showForm, setShowForm] = useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step < 3 ? step + 1 : step);
  const prevStep = () => setStep(step > 1 ? step - 1 : step);
  const skip = () => setShowForm(false);

  return (
    <div className="bg-cyan-50 rounded-xl border border-gray-200 px-3 py-2 mx-auto relative h-20 flex items-center justify-between gap-4">
      {/* Status / Level minimal */}
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-lg shadow flex flex-col items-center justify-center text-center min-w-[70px]">
          <div className="text-xs text-gray-600">Statut</div>
          <div className="text-sm font-bold text-primary">{status}</div>
          <div className="text-xs text-gray-600">Niv: {level}</div>
        </div>

        {/* Progression */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-1.5 bg-primary rounded-full transition-all"
              style={{ width: `${profileCompletion}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Bouton minimal */}
      {profileCompletion < 100 && !showForm && (
        <button
          className="px-3 py-1 bg-primary text-white rounded-full hover:bg-primary/80 flex items-center gap-1 transition"
          onClick={() => setShowForm(true)}
        >
          <Info className="w-4 h-4" />
        </button>
      )}

      {/* Formulaire step simplifié */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-white/90 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Compléter votre profil</h2>

            <div className="mb-4">
              <div className="flex justify-between mb-2 text-sm text-gray-600">
                <span>Étape {step} / 3</span>
                <span className="text-red-500 cursor-pointer" onClick={skip}>
                  Ignorer
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-primary rounded-full transition-all"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {step === 1 && (
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            )}
            {step === 2 && (
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            )}
            {step === 3 && (
              <textarea
                placeholder="Description"
                className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            )}

            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                disabled={step === 1}
              >
                Retour
              </button>
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
              >
                {step === 3 ? "Terminer" : "Suivant"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
