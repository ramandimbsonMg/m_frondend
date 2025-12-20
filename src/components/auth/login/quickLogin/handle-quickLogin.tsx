"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { ChevronLeft, EyeIcon, EyeOff, Lock, Trash, X } from "lucide-react";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import { User } from "@/types/types";
import { mockUsers } from "@/data/user";
import Modal from "@/components/ui/modal/modal";
import { UserCard } from "@/components/global/UserCard";
import { useForm } from "react-hook-form";

export const QuickLoginUsersDesktop = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedReconnect, setSelectedReconnect] = useState<User | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("local_users");
    if (stored) setUsers(JSON.parse(stored));
    else {
      setUsers(mockUsers);
      localStorage.setItem("local_users", JSON.stringify(mockUsers));
    }
  }, []);

  const handleDelete = (email?: string) => {
    if (!email) return;
    const updated = users.filter((u) => u.email !== email);
    setUsers(updated);
    localStorage.setItem("local_users", JSON.stringify(updated));
    if (selectedReconnect?.email === email) setSelectedReconnect(null);
    setOpenMenu(null);
  };

  const toggleMenu = (id: number) =>
    setOpenMenu((prev) => (prev === id ? null : id));

  const handleQuickLogin = () => {
    if (!selectedReconnect) return;
    if (!password) return setErrorMessage("Le mot de passe est requis.");
    setLoading(true);
    setTimeout(() => {
      console.log(`Connexion simulée pour ${selectedReconnect.email}`);
      setPassword("");
      setSelectedReconnect(null);
      setErrorMessage("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-gray-200 text-lg font-medium">
        Connexion rapide sur cet appareil
      </h3>

      <div className="grid grid-cols-3 gap-4">
        {users.length === 0 && (
          <p className="col-span-3 text-center text-gray-500 p-4 border rounded-lg">
            Aucun utilisateur local enregistré.
          </p>
        )}

        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            selected={selectedReconnect?.id === user.id}
            onSelect={() =>
              setSelectedReconnect((prev) =>
                prev?.id === user.id ? null : user
              )
            }
            openMenu={openMenu === user.id}
            toggleMenu={() => toggleMenu(user.id)}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {selectedReconnect && (
        <div className="px-5 py-1.5 rounded-xl border-2 border-primary-100/50 bg-white/50 shadow-inner space-y-1">
          <p className="font-medium text-gray-800">
            Connexion rapide pour{" "}
            <span className="text-primary-600 font-bold">
              {selectedReconnect.name}
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-end gap-4">
            <div className="flex-grow w-full sm:w-auto">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage("");
                  }}
                  required
                  id={""}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-200 hover:text-primary-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>
              {errorMessage && (
                <p className="text-red-500 mt-1">{errorMessage}</p>
              )}
            </div>
            <Button
              onClick={handleQuickLogin}
              isLoading={loading}
              disabled={loading || !password}
              className="w-full sm:w-auto"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

interface Props {
  showModal: boolean;
  onClose: () => void;
}

export const QuickLoginUsersMobile = ({ showModal, onClose }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [step, setStep] = useState<1 | 2>(1); // 1: Liste, 2: Mot de passe

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const stored = localStorage.getItem("local_users");
    if (stored) setUsers(JSON.parse(stored));
  }, [showModal]);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    setStep(2); // Passer à l'étape du mot de passe
  };

  const handleBack = () => {
    setStep(1);
    setSelectedUser(null);
  };

  const onSubmitPassword = (data: any) => {
    console.log("Connexion de", selectedUser?.email, "avec mot de passe");
    // Logique de connexion ici
  };

  return (
    <>
      {showModal && (
        <Modal onClose={onClose} title="">
          <div className="relative h-min-screen flex flex-col">
            {/* Header avec bouton retour si étape 2 */}
            <div className="flex items-center justify-between mb-6">
              {step === 2 ? (
                <button
                  onClick={handleBack}
                  className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
              ) : (
                <h3 className="text-xl font-bold text-gray-900">
                  Connexion rapide
                </h3>
              )}
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* ÉTAPE 1 : GRILLE DES UTILISATEURS */}
            {step === 1 && (
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-6 text-center lg:text-left">
                  Choisissez un compte pour vous connecter instantanément.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {users.map((user) => (
                    <button
                      key={user.id}
                      onClick={() => handleSelectUser(user)}
                      className="group flex flex-col items-center px-4 py-2 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-primary-200 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative mb-3">
                        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md group-hover:scale-110 transition-transform">
                          {(user.email || "U").charAt(0).toUpperCase()}
                        </div>
                        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-800 truncate w-full text-center">
                        {user.email?.split("@")[0]}
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                        Actif
                      </span>
                    </button>
                  ))}
                </div>

                {users.length === 0 && (
                  <div className="text-center py-10">
                    <p className="text-gray-400 italic">
                      Aucun compte enregistré sur cet appareil.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* ÉTAPE 2 : FORMULAIRE DE MOT DE PASSE */}
            {step === 2 && selectedUser && (
              <div className="flex-1 flex flex-col items-center animate-in fade-in slide-in-from-right duration-300">
                {/* Avatar de l'utilisateur sélectionné */}
                <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-2xl mb-4 rotate-3">
                  {(selectedUser.email || "U").charAt(0).toUpperCase()}
                </div>

                <h4 className="text-xl font-bold text-gray-900">
                  {selectedUser.email?.split("@")[0]}
                </h4>
                <p className="text-sm text-gray-500 mb-8">
                  {selectedUser.email}
                </p>

                <form
                  onSubmit={handleSubmit(onSubmitPassword)}
                  className="w-full space-y-4"
                >
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="••••••••"
                      register={register}
                      errors={errors}
                      className="border-gray-200 focus:ring-primary-500 rounded-full transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <EyeIcon size={20} />
                      )}
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary-100"
                  >
                    Se connecter
                  </Button>

                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-full text-sm text-gray-500 hover:text-gray-700 font-medium py-2"
                  >
                    Ce n'est pas vous ?
                  </button>
                </form>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};
