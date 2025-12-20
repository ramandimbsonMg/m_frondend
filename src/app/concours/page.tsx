"use client";

import { useState } from "react";
import {
  Award,
  TrendingUp,
  Users,
  Clock,
  Trophy,
  Star,
  ChevronRight,
  Filter,
  Search,
  Calendar,
  DollarSign,
  Target,
} from "lucide-react";

export default function ContestsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const contests = [
    {
      id: 1,
      title: "Meilleur vendeur du mois",
      description:
        "Concours mensuel récompensant les vendeurs avec les meilleures performances",
      prize: "500.000 FCFA + Badge Top Seller",
      participants: 245,
      daysLeft: 7,
      status: "active",
      category: "sales",
      difficulty: "medium",
      sponsor: "Missera Market",
    },
    {
      id: 2,
      title: "Défi innovation produit",
      description:
        "Créez un produit innovant à partir de matériaux locaux et gagnez un financement",
      prize: "1.000.000 FCFA + Accélérateur",
      participants: 89,
      daysLeft: 14,
      status: "active",
      category: "innovation",
      difficulty: "hard",
      sponsor: "Banque UEMOA",
    },
    {
      id: 3,
      title: "Challenge marketing digital",
      description:
        "Développez la meilleure stratégie marketing pour une marque africaine",
      prize: "300.000 FCFA + Formation certifiée",
      participants: 156,
      daysLeft: 3,
      status: "ending",
      category: "marketing",
      difficulty: "easy",
      sponsor: "Google Africa",
    },
    {
      id: 4,
      title: "Concours mode durable",
      description: "Designer une collection de mode éco-responsable",
      prize: "750.000 FCFA + Exposition",
      participants: 78,
      daysLeft: 21,
      status: "active",
      category: "fashion",
      difficulty: "medium",
      sponsor: "LVMH Africa",
    },
  ];

  const filters = [
    { id: "all", label: "Tous les concours" },
    { id: "active", label: "En cours" },
    { id: "ending", label: "Bientôt terminés" },
    { id: "sales", label: "Ventes" },
    { id: "innovation", label: "Innovation" },
    { id: "marketing", label: "Marketing" },
  ];

  return (
    <div className="max-w-5xl px-4 mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-lg px-6 py-2 text-white mb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Concours & Challenges</h1>
            <p className="text-md text-gray-100 opacity-80">
              Participez à nos concours, gagnez des prix et boostez votre
              visibilité
            </p>
            <div className="flex items-center space-x-6 mt-6">
              <div className="flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-secondary" />
                <div>
                  <div className="text-lg font-bold">24</div>
                  <div className="text-xs opacity-90">Concours actifs</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-secondary" />
                <div>
                  <div className="text-lg font-bold">1,245</div>
                  <div className="text-xs opacity-90">Participants</div>
                </div>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-secondary" />
                <div>
                  <div className="text-lg font-bold">5M FCFA</div>
                  <div className="text-xs opacity-90">À gagner</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="px-6 py-2 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 cursor-pointer">
              Créer un concours
            </button>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="card-1 mb-4 top-16 sticky">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-2 py-1.5 rounded-full whitespace-nowrap cursor-pointer text-sm ${
                  activeFilter === filter.id
                    ? "bg-purple-100 text-purple-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un concours..."
                className="pl-10 pr-4 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-primary lg:w-60"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer">
              <Filter className="w-5 h-5" />
              <span>Filtrer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contest Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-4">
        {contests.map((contest) => (
          <div
            key={contest.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-sm transition-shadow"
          >
            {/* Header */}
            <div className="px-6 py-3 border-b border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contest.status === "active"
                          ? "bg-green-100 text-green-800"
                          : contest.status === "ending"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {contest.status === "active"
                        ? "En cours"
                        : "Bientôt terminé"}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contest.difficulty === "easy"
                          ? "bg-blue-100 text-primary"
                          : contest.difficulty === "medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {contest.difficulty === "easy"
                        ? "Facile"
                        : contest.difficulty === "medium"
                        ? "Moyen"
                        : "Difficile"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {contest.title}
                  </h3>
                  <p className="text-gray-600">{contest.description}</p>
                </div>
                <Award className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            {/* Prize */}
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Trophy className="w-4 h-4 mr-2" />
                    Prix à gagner
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {contest.prize}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-600 mb-1">Sponsor</div>
                  <div className="font-medium text-sm text-gray-900">
                    {contest.sponsor}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="px-6 py-3">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {contest.participants}
                  </div>
                  <div className="text-sm text-gray-600">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {contest.daysLeft}
                  </div>
                  <div className="text-sm text-gray-600">Jours restants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24</div>
                  <div className="text-sm text-gray-600">Projets</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progression du concours</span>
                  <span className="font-medium">
                    {Math.round(((21 - contest.daysLeft) / 21) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                    style={{
                      width: `${Math.round(
                        ((21 - contest.daysLeft) / 21) * 100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 py-2 bg-purple-600  text-white rounded-full font-medium hover:opacity-90 cursor-pointer">
                  Participer maintenant
                </button>
                <button className="px-2 py-2 border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="card mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Comment ça marche ?
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Choisissez",
              desc: "Sélectionnez un concours qui correspond à vos compétences",
            },
            {
              icon: Users,
              title: "Participez",
              desc: "Rejoignez le concours et soumettez votre projet",
            },
            {
              icon: TrendingUp,
              title: "Collaborez",
              desc: "Travaillez en équipe ou seul pour maximiser vos chances",
            },
            {
              icon: Trophy,
              title: "Gagnez",
              desc: "Remportez des prix et boostez votre carrière",
            },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard Preview */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            Classement actuel
          </h2>
          <button className="text-primary hover:underline font-medium text-sm cursor-pointer">
            Voir le classement complet
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2 text-left text-sm font-medium text-gray-600">
                  Position
                </th>
                <th className="py-2 text-left text-sm font-medium text-gray-600">
                  Participant
                </th>
                <th className="py-2 text-left text-sm font-medium text-gray-600">
                  Score
                </th>
                <th className="py-2 text-left text-sm font-medium text-gray-600">
                  Projets
                </th>
                <th className="py-2 text-left text-sm font-medium text-gray-600">
                  Badges
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((position) => (
                <tr
                  key={position}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        position === 1
                          ? "bg-yellow-100 text-yellow-800"
                          : position === 2
                          ? "bg-gray-100 text-gray-800"
                          : position === 3
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-50 text-gray-600"
                      }`}
                    >
                      {position}
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white font-bold">
                          U{position}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          Participant {position}
                        </div>
                        <div className="text-sm text-gray-600">
                          Madagascar, Ampasapito
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="font-bold">{4.9 - position * 0.1}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="font-medium">{12 - position}</span>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3].slice(0, position).map((badge) => (
                        <div
                          key={badge}
                          className="w-4 h-4 bg-purple-400 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
