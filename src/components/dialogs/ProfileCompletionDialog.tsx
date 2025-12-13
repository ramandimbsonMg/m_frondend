// app/components/dialogs/ProfileCompletionDialog.tsx
"use client";

import { useState } from "react";
import {
  X,
  User,
  Building,
  Briefcase,
  Camera,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface ProfileCompletionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  currentCompletion: number;
  onCompletionUpdate: (newCompletion: number) => void;
}

export default function ProfileCompletionDialog({
  isOpen,
  onClose,
  currentCompletion,
  onCompletionUpdate,
}: ProfileCompletionDialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    company: "",
    jobTitle: "",
    bio: "",
  });

  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      const newCompletion = 100;
      onCompletionUpdate(newCompletion);
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-primary" />
              <h3 className="font-medium text-gray-900">
                Informations personnelles
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-full placeholder:text-sm focus:ring-1 focus:ring-primary/50 hover:outline-0 outline-0"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email professionnel
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-full placeholder:text-sm focus:ring-1 focus:ring-primary/50 hover:outline-0 outline-0"
                  placeholder="exemple@entreprise.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-1 focus:ring-primary/50 placeholder:text-sm hover:outline-0 outline-0"
                  placeholder="+221 XX XXX XX XX"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-5 h-5 text-primary" />
              <h3 className="font-medium text-gray-900">
                Informations professionnelles
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Entreprise / Organisation
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-full placeholder:text-sm focus:ring-1 focus:ring-primary/50 hover:outline-0 outline-0"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Poste / Fonction
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-full placeholder:text-sm focus:ring-1 focus:ring-primary/50 hover:outline-0 outline-0"
                  placeholder="Votre fonction"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Localisation
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-full placeholder:text-sm focus:ring-1 focus:ring-primary/50 hover:outline-0 outline-0"
                  placeholder="Ville, Pays"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="font-medium text-gray-900">Présentation</h3>
            </div>

            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio / Description
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-1 border border-gray-200 rounded-lg focus:ring-1 focus:ring-primary/50 hover:outline-0 outline-0 placeholder:text-sm"
                  placeholder="Parlez-nous de vous, de vos compétences, de votre expérience..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Cette description apparaîtra sur votre profil public
                </p>
              </div>

              <div className="border border-dashed border-gray-300 rounded-lg px-4 pt-2 pb-0 text-center cursor-pointer">
                <Camera className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                <p className="text-sm text-gray-600">Photo de profil</p>
                {/* <button className="text-sm text-primary/80 hover:text-primary font-medium">
                  Télécharger une photo
                </button> */}
                <p className="text-xs text-gray-500 mt-0.5">
                  PNG, JPG jusqu'à 2MB
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden">
        {/* En-tête */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Complétez votre profil
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Un profil complet augmente votre visibilité de 40%
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Barre de progression */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Étape {step} sur {totalSteps}
            </span>
            <span className="text-sm font-semibold text-primary">
              {currentCompletion}% complété
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-primary h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Contenu du formulaire */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          {getStepContent()}
        </div>

        {/* Pied de page */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>Les informations sont sécurisées</span>
          </div>

          <div className="flex gap-3">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 font-medium cursor-pointer"
              >
                Retour
              </button>
            )}
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-primary text-white rounded-full hover:from-primary hover:to-primary/50 font-medium shadow-sm cursor-pointer"
            >
              {step === totalSteps ? "Terminer" : "Continuer"}
            </button>
          </div>
        </div>

        {/* Note d'information */}
        <div className="px-6 py-3 bg-blue-50 border-t border-blue-100">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-blue-700">
              Les profils complets reçoivent en moyenne{" "}
              <span className="font-semibold">3x plus de contacts</span> et de
              ventes sur Missera Market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
