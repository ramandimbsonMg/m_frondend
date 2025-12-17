"use client";

import { QuickLoginUsers } from "./handleQuickLogin";

export const LeftColumnLogin = () => {
  return (
    <div className="space-y-4 lg:block hidden p-8 bg-gray-50 rounded-xl shadow-lg h-full">
      {/* --- Section de Bienvenue et Motivation --- */}
      <div className="space-y-4 animate-fade-in">
        {/* Titre */}
        <h4
          className="text-gray-900 text-lg leading-tight"
        >
          Rejoignez la communauté des{" "}
          <span className="text-primary-600">créateurs de valeur</span>
        </h4>

        {/* Description */}
        <div
          className="text-gray-600 text-lg leading-relaxed"
        >
          En vous inscrivant sur{" "}
          <span className="font-semibold text-primary-600">Missera</span>, vous
          accédez à une plateforme moderne où chaque produit raconte une
          histoire. Développez votre audience, transformez vos passions en
          revenus et profitez d’une expérience sociale fluide, intelligente et
          tournée vers la création.
        </div>

        {/* Liste améliorée */}
        {/* <div className="space-y-4 pt-3">
          {[
            "Découvrez des articles uniques et tendance",
            "Connectez-vous directement avec les créateurs",
            "Vendez vos propres produits sans effort",
            "Gagnez en visibilité grâce à notre réseau social intégré",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                ✔
              </div>
              <p className="text-gray-700 text-sm leading-snug">{item}</p>
            </div>
          ))}
        </div> */}
      </div>

      <hr className="border-gray-300" />

      {/* ✅ QuickLogin visible sur grand écran */}
      <div className="hidden lg:block">
        {/* Le titre de la connexion rapide sera déplacé dans le composant QuickLoginUsers pour une meilleure modularité */}
        <QuickLoginUsers />
      </div>
    </div>
  );
};
