// components/PWAInstructions.tsx
"use client";

import { useState } from "react";

export default function PWAInstructions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-primary hover:underline"
      >
        Comment installer l'app ?
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">
              Installer Missera Market
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Sur Chrome Android :</h4>
                <ol className="list-decimal pl-5 text-sm">
                  <li>Ouvrez le menu (3 points en haut à droite)</li>
                  <li>Cliquez sur "Ajouter à l'écran d'accueil"</li>
                  <li>Confirmez l'installation</li>
                </ol>
              </div>

              <div>
                <h4 className="font-medium">Sur Safari iOS :</h4>
                <ol className="list-decimal pl-5 text-sm">
                  <li>Cliquez sur le bouton de partage (boîte avec flèche)</li>
                  <li>Faites défiler et cliquez sur "Sur l'écran d'accueil"</li>
                  <li>Cliquez sur "Ajouter"</li>
                </ol>
              </div>

              <div>
                <h4 className="font-medium">Sur Chrome Desktop :</h4>
                <p className="text-sm">
                  Cliquez sur l'icône d'installation dans la barre d'URL
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full bg-primary text-white py-2 rounded-lg"
            >
              Compris
            </button>
          </div>
        </div>
      )}
    </>
  );
}
