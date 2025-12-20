"use client";

import { CheckCircle2 } from "lucide-react";
import { QuickLoginUsersDesktop } from "./handle-quickLogin";

export const LeftColumnLogin = () => {
  return (
    <div
      className="relative overflow-hidden space-y-3 lg:block hidden p-10
bg-gradient-to-br from-cyan-500 via-cyan-950 to-cyan-700
rounded-3xl rounded-l-none shadow-2xl h-screen text-white
bg-[url('/assets/images/bg-illustration/bg-illustration1.png')]
bg-cover bg-center bg-no-repeat bg-opacity-50"
    >
      <div className="absolute inset-0 bg-cyan-950/70 h-full"></div>

      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 bg-[url'assets/images/bg-illustration/bg-illustration1.png'] rounded-full blur-3xl z-20"></div>

      <div className="relative z-10 space-y-3 animate-in fade-in slide-in-from-left duration-700">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
            Rejoignez la communauté des <br />
            <span className="text-primary">créateurs de valeur</span>
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed max-w-md">
            En vous inscrivant sur{" "}
            <span className="font-semibold text-white">Missera</span>, vous
            accédez à une plateforme moderne où chaque produit raconte une
            histoire.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {[
            "Découvrez des articles uniques",
            "Vendez vos propres produits sans effort",
            "Gagnez en visibilité rapidement",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-slate-300 group-hover:text-white transition-colors">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 pt-8 border-t border-white/10">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
          Connexion rapide
        </h4>
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
          <QuickLoginUsersDesktop />
        </div>
      </div>
    </div>
  );
};
