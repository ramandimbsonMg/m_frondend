"use client";

import clsx from "clsx";
import { Trash } from "lucide-react";
import { User } from "@/types/types";

interface UserCardProps {
  user: User;
  selected?: boolean;
  onSelect?: (user: User) => void;
  onDelete?: (email: string) => void;
  openMenu?: boolean;
  toggleMenu?: () => void;
  size?: "sm" | "md" | "lg"; // small, medium, large
}

export const UserCard = ({
  user,
  selected,
  onSelect,
  onDelete,
  openMenu,
  toggleMenu,
  size = "md",
}: UserCardProps) => {
  const fullName =
    [user.name, user.firstname].filter(Boolean).join(" ") || "Utilisateur";
  const photoUrl = user.photo || user.avatar || "";
  const fallbackLetter = (
    user.name?.charAt(0) ||
    user.firstname?.charAt(0) ||
    user.email?.charAt(0) ||
    "U"
  ).toUpperCase();

  const sizeMap = {
    sm: "w-12 h-12 text-lg",
    md: "w-16 h-16 text-xl",
    lg: "w-20 h-20 text-2xl",
  };

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center p-3 rounded-lg border border-primary/40 shadow-sm transition-all cursor-pointer relative",
        selected
          ? "ring-2 ring-primary-500 bg-primary-50/50 scale-[1.02]"
          : "hover:shadow-md hover:bg-gray-100"
      )}
      onClick={() => onSelect?.(user)}
    >
      <div className={clsx("relative mb-2", sizeMap[size])}>
        <div
          className={clsx(
            "w-full h-full rounded-full overflow-hidden bg-primary-200 flex items-center justify-center text-primary-800 font-bold border-2 border-white shadow-inner",
            sizeMap[size]
          )}
        >
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

        {toggleMenu && onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
            className="absolute -top-1 -right-1 p-1 bg-white rounded-full border shadow hover:bg-gray-100"
          >
            <Trash size={12} className="text-secondary" />
          </button>
        )}
      </div>

      <h4 className="text-center font-bold truncate w-full">{fullName}</h4>
      <p className="text-gray-400 text-sm">{user.fonction || "Membre"}</p>

      {openMenu && onDelete && (
        <div className="absolute top-16 right-2 w-36 bg-white border rounded-lg shadow-xl z-30">
          <div
            onClick={(e) => {
              e.stopPropagation();
              onDelete(user.email);
            }}
            className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
          >
            <Trash size={14} /> Supprimer
          </div>
        </div>
      )}
    </div>
  );
};
