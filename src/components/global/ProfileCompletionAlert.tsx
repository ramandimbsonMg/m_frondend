"use client";

import { AlertCircle, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import ProfileCompletionDialog from "../dialogs/ProfileCompletionDialog";

interface Props {
  completion: number;
  onCompletionUpdate: (value: number) => void;
  onClose: () => void;
}

export default function ProfileCompletionAlert({
  completion,
  onCompletionUpdate,
  onClose,
}: Props) {
  const [dialog, setDialog] = useState(false);

  if (completion >= 100) return null;

  return (
    <>
      <div className="hidden lg:block bg-white h-10 px-3">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-primary" />
            <div>
              <h4 className="font-semibold text-sm">Profil à compléter</h4>
              <p className="text-xs text-gray-500">
                Complétez votre profil pour améliorer votre visibilité
              </p>
            </div>
            <span className="text-xs font-bold px-2 py-0.5 bg-gray-100 rounded-full">
              {completion}%
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDialog(true)}
              className="text-sm px-4 py-1.5 rounded-full hover:underline text-primary flex items-center gap-1 cursor-pointer"
            >
              Compléter
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen -mt-20">
        <ProfileCompletionDialog
          isOpen={dialog}
          onClose={() => setDialog(false)}
          currentCompletion={completion}
          onCompletionUpdate={onCompletionUpdate}
        />
      </div>
    </>
  );
}
