"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { Typography } from "@/ui/design-systeme/typography/typography";
import { Input } from "@/ui/design-systeme/input/input";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@/ui/design-systeme/button/button"; // Utilisation du composant Button

interface User {
  id: number;
  email: string;
  phone?: string;
  avatar?: string;
  name?: string;
  firstname?: string;
  fonction?: string;
  photo?: string;
}

// NOTE: Le composant a été renommé en QuickLoginUsers pour une meilleure conformité aux conventions Next.js/React.
export const QuickLoginUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedReconnect, setSelectedReconnect] = useState<User | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Charger les utilisateurs depuis le localStorage ou créer des mocks
  useEffect(() => {
    const stored = localStorage.getItem("local_users");
    if (stored) {
      setUsers(JSON.parse(stored));
    } else {
      const mockUsers: User[] = [
        {
          id: 1,
          email: "alice.l@missera.com",
          name: "Alice",
          firstname: "L.",
          fonction: "Admin",
          avatar:
            "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
        },
        {
          id: 2,
          email: "bob.k@missera.com",
          name: "Bob",
          firstname: "K.",
          fonction: "Utilisateur",
          avatar:
            "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
        },
        {
          id: 3,
          email: "charlie.m@missera.com",
          name: "Charlie",
          firstname: "M.",
          fonction: "Utilisateur",
        },
      ];
      setUsers(mockUsers);
      localStorage.setItem("local_users", JSON.stringify(mockUsers));
    }
  }, []);

  const handleDelete = (email?: string) => {
    if (!email) return;
    const updated = users.filter((u) => u.email !== email);
    setUsers(updated);
    localStorage.setItem("local_users", JSON.stringify(updated));
    if (selectedReconnect?.email === email) {
      setSelectedReconnect(null);
      setPassword("");
      setErrorMessage("");
    }
    setOpenMenu(null);
  };

  const toggleMenu = (id: number) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  const handleQuickLogin = () => {
    if (!selectedReconnect) return;

    if (!password) {
      setErrorMessage("Le mot de passe est requis.");
      return;
    }

    setLoading(true);
    // Simuler l'appel API
    setTimeout(() => {
      // Pour éviter alert() dans l'iFrame, utilisons console.log ou un message d'état
      console.log(`Connexion réussie simulée pour ${selectedReconnect.email}`);
      // Remplacer l'alert par une logique de redirection ou d'affichage de succès
      // alert(`Connexion réussie pour ${selectedReconnect.email}`);
      setPassword("");
      setSelectedReconnect(null);
      setErrorMessage("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="mt-4 space-y-6">
      <Typography variant="large" weight="bold" className="text-gray-900">
        Connexion rapide sur cet appareil
      </Typography>

      <div className="grid grid-cols-3 gap-4">
        {users.length === 0 && (
          <Typography className="col-span-3 text-center text-gray-500 p-4 border rounded-lg">
            Aucun utilisateur local enregistré.
          </Typography>
        )}

        {users.map((user) => {
          const fullName =
            [user.name, user.firstname].filter(Boolean).join(" ") ||
            "Utilisateur";
          const photoUrl = user.photo || user.avatar || "";
          const fallbackLetter = (
            user.name?.charAt(0) ||
            user.firstname?.charAt(0) ||
            user.email?.charAt(0) ||
            "U"
          ).toUpperCase();

          return (
            <div
              key={user.id}
              className={clsx(
                "flex flex-col items-center justify-center p-3 rounded-lg border border-primary/40 shadow-sm transition-all duration-200 cursor-pointer relative",
                selectedReconnect?.id === user.id
                  ? "ring-2 ring-primary-500 bg-primary-50/50 shadow-md transform scale-[1.02]"
                  : "hover:shadow-md hover:bg-gray-100"
              )}
              onClick={() => {
                setSelectedReconnect(
                  selectedReconnect?.id === user.id ? null : user
                );
                setOpenMenu(null); // Fermer le menu si on sélectionne
              }}
            >
              <div className="relative w-16 h-16 mb-2">
                {/* Conteneur pour l'avatar */}
                <div className="w-full h-full rounded-full overflow-hidden bg-primary-200 flex items-center justify-center text-primary-800 font-bold text-xl border-2 border-white shadow-inner">
                  {photoUrl ? (
                    <img
                      src={photoUrl}
                      alt={fullName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    fallbackLetter
                  )}
                </div>

                {/* Bouton de Menu */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu(user.id);
                  }}
                  className="absolute top-0 right-0 p-1 bg-white rounded-full border border-gray-300 shadow hover:bg-gray-100"
                  aria-label={`Options pour ${fullName}`}
                >
                  <HiDotsVertical size={12} className="text-gray-600" />
                </button>
              </div>

              <Typography
                weight="bold"
                className="text-center text-gray-900 truncate w-full"
              >
                {fullName}
              </Typography>
              <Typography variant="small" className="text-gray-500">
                {user.fonction || "Membre"}
              </Typography>

              {/* Menu contextuel de suppression */}
              {openMenu === user.id && (
                <div className="absolute top-10 right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-xl z-30 overflow-hidden">
                  <div
                    onClick={(e) => {
                      e.stopPropagation(); // Empêche la sélection de l'utilisateur
                      handleDelete(user.email);
                    }}
                    className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer flex items-center gap-2 transition-colors"
                  >
                    <AiOutlineDelete size={16} /> Supprimer
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* --- Formulaire de Connexion Rapide (Password) --- */}
      {selectedReconnect && (
        <div className="px-5 py-2 rounded-xl border-2 border-primary-100/50 bg-white shadow-inner space-y-3 transition-all duration-300">
          <Typography className="font-medium text-gray-800">
            Connexion rapide pour{" "}
            <span className="text-primary-600 font-bold">
              {selectedReconnect.name}
            </span>
          </Typography>

          <div className="flex flex-col sm:flex-row items-end gap-4">
            <div className="flex-grow w-full sm:w-auto">
              {/* Le composant Input doit être adapté pour fonctionner avec la prop errorMg et errors si non, il faut utiliser un champ d'entrée standard */}
              <label htmlFor="password" className="sr-only">
                Mot de passe
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMessage) setErrorMessage("");
                }}
                required
                // Note: La gestion d'erreur ici est un mock, à adapter selon votre système d'Input réel.
                // Si votre Input gère mieux les erreurs, ajustez l'utilisation de errorMg/errors.
              />
              {errorMessage && (
                <Typography
                  className="text-red-500 mt-1 block"
                >
                  {errorMessage}
                </Typography>
              )}
            </div>

            <Button
              onClick={handleQuickLogin}
              isLoading={loading}
              disabled={loading || !password}
              variant="accent"
              className="w-full sm:w-auto"
            >
              {loading ? "Connexion en cours..." : "Se connecter"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
