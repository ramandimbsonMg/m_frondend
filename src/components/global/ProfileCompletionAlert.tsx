"use client";

import { useState, useEffect } from "react";
import {
  AlertCircle,
  X,
  ChevronRight,
  User,
  TrendingUp,
  Clock,
} from "lucide-react";
import ProfileCompletionDialog from "../dialogs/ProfileCompletionDialog";

interface ProfileCompletionAlertProps {
  completion: number;
  onCompletionUpdate: (newCompletion: number) => void;
}

export default function ProfileCompletionAlert({
  completion,
  onCompletionUpdate,
}: ProfileCompletionAlertProps) {
  const [isVisible, setIsVisible] = useState(false); // Commencer à false
  const [showDialog, setShowDialog] = useState(false);
  const [lastShownTime, setLastShownTime] = useState<number | null>(null);
  const [timeUntilNextShow, setTimeUntilNextShow] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true); // État de chargement

  // Charger le temps de dernière affichage au démarrage
  useEffect(() => {
    const savedLastShown = localStorage.getItem("profileAlertLastShown");
    if (savedLastShown) {
      setLastShownTime(parseInt(savedLastShown));
    }
    setIsLoading(false); // Fin du chargement
  }, []);

  // Vérifier si 6 heures sont passées - EXÉCUTÉ UNE SEULE FOIS
  useEffect(() => {
    if (!isLoading) {
      if (lastShownTime) {
        const sixHoursInMs = 6 * 60 * 60 * 1000; // 6 heures en millisecondes
        const timeSinceLastShown = Date.now() - lastShownTime;
        const timeRemaining = sixHoursInMs - timeSinceLastShown;

        if (timeRemaining > 0) {
          // Si moins de 6 heures sont passées, calculer le temps restant
          setTimeUntilNextShow(timeRemaining);
          setIsVisible(false); // Cacher l'alerte
        } else {
          // Si 6 heures ou plus sont passées, afficher l'alerte
          setTimeUntilNextShow(0);
          setIsVisible(true);
        }
      } else {
        // Si jamais affiché avant, montrer l'alerte
        setIsVisible(true);
      }
    }
  }, [isLoading, lastShownTime]); // Dépend de isLoading

  // Alternative plus simple : utiliser directement localStorage dans le useEffect
  useEffect(() => {
    const checkAlertVisibility = () => {
      const savedLastShown = localStorage.getItem("profileAlertLastShown");

      if (!savedLastShown) {
        // Premier affichage
        setIsVisible(true);
        return;
      }

      const lastShown = parseInt(savedLastShown);
      const sixHoursInMs = 6 * 60 * 60 * 1000;
      const timeSinceLastShown = Date.now() - lastShown;

      if (timeSinceLastShown >= sixHoursInMs) {
        // 6 heures ou plus sont passées
        setIsVisible(true);
        setLastShownTime(lastShown);
      } else {
        // Moins de 6 heures
        const remaining = sixHoursInMs - timeSinceLastShown;
        setTimeUntilNextShow(remaining);
        setIsVisible(false);
        setLastShownTime(lastShown);
      }
    };

    checkAlertVisibility();
  }, []); // Exécuté une seule fois au montage

  // Mettre à jour le compteur toutes les secondes
  useEffect(() => {
    if (timeUntilNextShow > 0) {
      const timer = setInterval(() => {
        setTimeUntilNextShow((prev) => {
          if (prev <= 1000) {
            clearInterval(timer);
            setIsVisible(true);
            localStorage.removeItem("profileAlertLastShown"); // Réinitialiser
            return 0;
          }
          return prev - 1000;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeUntilNextShow]);

  // Formater le temps restant
  const formatTimeRemaining = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    // Enregistrer le moment où l'alerte a été fermée
    localStorage.setItem("profileAlertLastShown", Date.now().toString());
    setLastShownTime(Date.now());
    setTimeUntilNextShow(6 * 60 * 60 * 1000); // Réinitialiser à 6h
  };

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleShowNow = () => {
    setIsVisible(true);
    localStorage.removeItem("profileAlertLastShown"); // Permettre l'affichage immédiat
  };

  const getMessage = () => {
    if (completion < 50) {
      return "Commencez à compléter votre profil pour améliorer votre visibilité";
    } else if (completion < 80) {
      return "Vous êtes à mi-chemin ! Complétez votre profil pour plus d'opportunités";
    } else {
      return "Quelques informations manquantes pour un profil parfait";
    }
  };

  const getColorClasses = () => {
    if (completion < 50) {
      return "bg-amber-50 border-amber-200 text-amber-800";
    } else if (completion < 80) {
      return "bg-primary-10 border-gray-200 text-primary-800";
    } else {
      return "bg-emerald-50 border-emerald-200 text-emerald-800";
    }
  };

  // Si le profil est complet à 100%, ne pas afficher l'alerte
  if (completion >= 100) return null;

  // Pendant le chargement, ne rien afficher
  if (isLoading) return null;

  // Si l'alerte n'est pas visible et qu'il reste du temps, afficher un message
  if (!isVisible && timeUntilNextShow > 0) {
    return (
      <div className="card text-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">
              Rappel profil : disponible dans{" "}
              {formatTimeRemaining(timeUntilNextShow)}
            </span>
          </div>
          <button
            onClick={handleShowNow}
            className="text-sm text-primary-600 hover:text-primary-800 font-medium cursor-pointer"
          >
            Afficher maintenant
          </button>
        </div>
      </div>
    );
  }

  if (!isVisible) return null;

  return (
    <>
      <div className={`card ${getColorClasses()} lg:block hidden`}>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className="mt-0.5">
              <AlertCircle className="w-5 h-5 text-primary" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">Profil à compléter</h4>
                <span className="text-xs font-bold px-2 py-0.5 bg-white/50 rounded-full">
                  {completion}%
                </span>
              </div>
              <p className="text-sm mb-2 text-gray-500">{getMessage()}</p>
              <div className="flex items-center gap-4">
                {/* Barre de progression */}
                <div className="flex-1">
                  <div className="w-full bg-gray-400/50 rounded-full h-1.5 mb-1">
                    <div
                      className="h-1.5 rounded-full bg-primary"
                      style={{ width: `${completion}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    {/* <span>Profil basique</span>
                    <span className="font-medium">Profil complet</span> */}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleClose}
                    className="text-sm px-3 py-1.5 hover:bg-white/30 bg-gray-50 cursor-pointer rounded-full font-medium"
                  >
                    Plus tard
                  </button>
                  <button
                    onClick={handleOpenDialog}
                    className="text-sm px-4 py-1.5 rounded-full hover:bg-white/90 font-medium shadow-sm flex items-center gap-1 cursor-pointer"
                  >
                    Compléter
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1 hover:bg-white/30 rounded-full ml-2"
          >
            <X className="w-4 h-4 cursor-pointer" />
          </button>
        </div>

        {/* Avantages */}
        <div className="pt-2 border-t border-white/30 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex items-center gap-2 text-xs">
            <User className="w-3 h-3 text-secondary" />
            <span>+40% de visibilité</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <TrendingUp className="w-3 h-3 text-secondary" />
            <span>3x plus de contacts</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <svg
              className="w-3 h-3 text-secondary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Confiance accrue</span>
          </div>
        </div>
      </div>

      {/* Dialogue de complétion */}
      <ProfileCompletionDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        currentCompletion={completion}
        onCompletionUpdate={onCompletionUpdate}
      />
    </>
  );
}
