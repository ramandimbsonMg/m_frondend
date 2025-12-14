'use client';

import { useState } from 'react';
import { 
  ArrowLeft,
  Award,
  Trophy,
  Users,
  Calendar,
  Clock,
  Target,
  BarChart3,
  Share2,
  Heart,
  ChevronRight,
  DollarSign,
  CheckCircle,
  FileText,
  Video,
  MessageCircle,
  TrendingUp,
  Star,
  MapPin,
  Globe,
  ChevronDown
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function ContestDetailPage() {
  const params = useParams();
  const router = useRouter();
  const contestId = params.id as string;
  
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const contest = {
    id: contestId,
    title: 'Meilleur vendeur du mois - Édition Mars 2024',
    tagline: 'Défiez vos limites, dominez le marché',
    organizer: {
      name: 'Missera Market',
      logo: 'M',
      verified: true,
    },
    sponsor: {
      name: 'Banque UEMOA',
      logo: 'B',
    },
    description: `
      Participez au plus grand concours de vente en ligne dédié aux entrepreneurs africains !
      Ce mois-ci, nous mettons à l'honneur l'innovation et l'excellence commerciale.
      
      ## Objectifs du concours :
      - Promouvoir l'excellence dans le e-commerce africain
      - Récompenser les entrepreneurs les plus innovants
      - Créer une communauté de vendeurs d'élite
      
      ## Critères d'évaluation :
      - Nombre de ventes réalisées
      - Satisfaction client (notes et avis)
      - Innovation des produits/services
      - Engagement communautaire
      
      Les gagnants bénéficieront d'une visibilité exceptionnelle sur la plateforme.
    `,
    prizes: [
      { position: 1, amount: '500.000 FCFA', rewards: ['Badge Top Seller', 'Formation gratuite', 'Visibilité premium'] },
      { position: 2, amount: '250.000 FCFA', rewards: ['Badge Elite Seller', 'Coaching personnalisé'] },
      { position: 3, amount: '100.000 FCFA', rewards: ['Badge Rising Star'] },
    ],
    timeline: [
      { phase: 'Inscriptions', date: '1-15 Mars', status: 'active' },
      { phase: 'Phase de vente', date: '16-31 Mars', status: 'upcoming' },
      { phase: 'Évaluation', date: '1-5 Avril', status: 'upcoming' },
      { phase: 'Annonce résultats', date: '7 Avril', status: 'upcoming' },
    ],
    stats: {
      participants: 245,
      projects: 156,
      prizePool: '850.000 FCFA',
      daysLeft: 7,
      completion: 35,
    },
    requirements: [
      'Compte vendeur vérifié',
      'Minimum 5 produits actifs',
      'Note moyenne ≥ 4.0/5',
      'Aucune sanction récente',
    ],
    judges: [
      { name: 'Dr. Aminata Kane', role: 'Expert E-commerce', avatar: 'AK' },
      { name: 'M. Ibrahim Diallo', role: 'Investisseur Tech', avatar: 'ID' },
      { name: 'Mme. Fatou Ndiaye', role: 'Entrepreneure', avatar: 'FN' },
    ],
    leaderboard: [
      { rank: 1, name: 'AfroChic Collection', score: 98, sales: 45, change: 'up' },
      { rank: 2, name: 'Tech Innov CI', score: 95, sales: 38, change: 'up' },
      { rank: 3, name: 'Artisanat WA', score: 92, sales: 32, change: 'down' },
      { rank: 4, name: 'Wax Queen', score: 89, sales: 28, change: 'up' },
      { rank: 5, name: 'Digital Africa', score: 87, sales: 25, change: 'new' },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-5">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour aux concours</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-orange-600/50 rounded-2xl px-6 py-3 text-white mb-4">
        <div className="flex flex-col md:flex-row md:items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Concours officiel
              </div>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm flex items-center">
                <Trophy className="w-3 h-3 mr-1" />
                {contest.stats.prizePool} à gagner
              </div>
            </div>
            <h1 className="text-xl font-bold mb-2">{contest.title}</h1>
            <p className="text-sm opacity-90 mb-3">{contest.tagline}</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <div className="-space-y-2">
                  <div className="text-lg font-bold">
                    {contest.stats.participants}
                  </div>
                  <div className="text-sm opacity-90">Participants</div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <div className="-space-y-2">
                  <div className="text-lg font-bold">
                    {contest.stats.daysLeft}
                  </div>
                  <div className="text-sm opacity-90">Jours restants</div>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                <div className="-space-y-2">
                  <div className="text-lg font-bold">
                    {contest.stats.projects}
                  </div>
                  <div className="text-sm opacity-90">Projets</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-2">
              <div className="text-xs mb-2 font-bol">Organisé par</div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">
                    {contest.organizer.logo}
                  </span>
                </div>
                <div>
                  <div className="font-bold">{contest.organizer.name}</div>
                  {contest.organizer.verified && (
                    <div className="text-xs flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Vérifié
                    </div>
                  )}
                </div>
              </div>
              <div className="text-xs mb-2 font-bol">Sponsorisé par</div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">
                    {contest.sponsor.logo}
                  </span>
                </div>
                <div className="font-medium">{contest.sponsor.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="bg-white rounded-lg border border-gray-200 mb-4">
            <div className="flex border-b border-gray-200 overflow-x-auto">
              {[
                "overview",
                "timeline",
                "prizes",
                "leaderboard",
                "judges",
                "resources",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium border-b-2 whitespace-nowrap ${
                    activeTab === tab
                      ? "border-purple-600 text-purple-700"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab === "overview" && "Aperçu"}
                  {tab === "timeline" && "Calendrier"}
                  {tab === "prizes" && "Prix"}
                  {tab === "leaderboard" && "Classement"}
                  {tab === "judges" && "Jury"}
                  {tab === "resources" && "Ressources"}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Description du concours
                    </h3>
                    <div className="prose max-w-none">
                      {contest.description
                        .split("\n")
                        .map((paragraph, index) => (
                          <p key={index} className="text-gray-700 mb-4">
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Conditions de participation
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {contest.requirements.map((req, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 px-4 py-2 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Progression du concours
                      </h3>
                      <span className="font-bold text-purple-600">
                        {contest.stats.completion}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                        style={{ width: `${contest.stats.completion}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>Début</span>
                      <span>Fin</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "prizes" && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {contest.prizes.map((prize) => (
                      <div
                        key={prize.position}
                        className={`border rounded-2xl p-6 ${
                          prize.position === 1
                            ? "border-yellow-300 bg-gradient-to-b from-yellow-50 to-amber-50"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              prize.position === 1
                                ? "bg-accent text-white"
                                : prize.position === 2
                                ? "bg-gradient-to-r from-gray-400 to-gray-600 text-white"
                                : "bg-accent text-white"
                            }`}
                          >
                            <Trophy className="w-6 h-6" />
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600">
                              Position
                            </div>
                            <div className="text-sm font-bold text-gray-900">
                              #{prize.position}
                            </div>
                          </div>
                        </div>
                        <div className="text-xl font-bold text-gray-900 mb-4">
                          {prize.amount}
                        </div>
                        <div className="space-y-2">
                          {prize.rewards.map((reward, index) => (
                            <div
                              key={index}
                              className="flex items-center text-gray-700"
                            >
                              <Award className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                              <span className="text-sm">{reward}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Prizes */}
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 p-[10px]">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      🎁 Autres récompenses
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <Share2 className="w-5 h-5 text-blue-500" />
                        <div>
                          <div className="font-medium text-gray-900">
                            Visibilité médiatique
                          </div>
                          <div className="text-sm text-gray-600">
                            Fonctionnalité dans notre newsletter
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <div>
                          <div className="font-medium text-gray-900">
                            Boost de profil
                          </div>
                          <div className="text-sm text-gray-600">
                            Badge exclusif pendant 3 mois
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "leaderboard" && (
                <div>
                  {/* Top 3 */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {contest.leaderboard.slice(0, 3).map((entry) => (
                      <div
                        key={entry.rank}
                        className={`relative rounded-2xl p-6 ${
                          entry.rank === 1
                            ? "bg-gradient-to-b from-yellow-50 to-amber-50 border-2 border-yellow-200"
                            : "bg-white border border-gray-200"
                        }`}
                      >
                        {entry.rank === 1 && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <div className="px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded-full">
                              🥇 Gagnant actuel
                            </div>
                          </div>
                        )}
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gray-900 mb-2">
                            #{entry.rank}
                          </div>
                          <div className="font-bold text-gray-900 text-lg mb-2">
                            {entry.name}
                          </div>
                          <div className="flex items-center justify-center space-x-4 mb-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">
                                {entry.score}
                              </div>
                              <div className="text-sm text-gray-600">Score</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">
                                {entry.sales}
                              </div>
                              <div className="text-sm text-gray-600">
                                Ventes
                              </div>
                            </div>
                          </div>
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                              entry.change === "up"
                                ? "bg-green-100 text-green-800"
                                : entry.change === "down"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {entry.change === "up" && (
                              <TrendingUp className="w-3 h-3 mr-1" />
                            )}
                            {entry.change === "down" && (
                              <TrendingUp className="w-3 h-3 mr-1 rotate-180" />
                            )}
                            {entry.change === "new" && "Nouveau"}
                            {entry.change !== "new" && "Cette semaine"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Full Leaderboard */}
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900">
                        Classement complet
                      </h4>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                              Position
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                              Participant
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                              Score
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                              Ventes
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                              Tendance
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {contest.leaderboard.map((entry) => (
                            <tr
                              key={entry.rank}
                              className="border-b border-gray-100 hover:bg-gray-50"
                            >
                              <td className="py-4 px-6">
                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    entry.rank <= 3
                                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                      : "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {entry.rank}
                                </div>
                              </td>
                              <td className="py-4 px-6">
                                <div className="font-medium text-gray-900">
                                  {entry.name}
                                </div>
                              </td>
                              <td className="py-4 px-6">
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                                  <span className="font-bold">
                                    {entry.score}
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-6">
                                <div className="font-medium">{entry.sales}</div>
                              </td>
                              <td className="py-4 px-6">
                                <div
                                  className={`flex items-center ${
                                    entry.change === "up"
                                      ? "text-green-600"
                                      : entry.change === "down"
                                      ? "text-red-600"
                                      : "text-blue-600"
                                  }`}
                                >
                                  {entry.change === "up" && (
                                    <TrendingUp className="w-4 h-4 mr-1" />
                                  )}
                                  {entry.change === "down" && (
                                    <TrendingUp className="w-4 h-4 mr-1 rotate-180" />
                                  )}
                                  {entry.change === "new" && "Nouveau"}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Registration CTA */}
          {!isRegistered && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100 px-6 py-3 mb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Prêt à participer ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Rejoignez {contest.stats.participants} entrepreneurs et
                    tentez de remporter les prix
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Clôture dans {contest.stats.daysLeft} jours
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Gratuit pour tous les membres
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={() => setIsRegistered(true)}
                    className="px-8 py-2 bg-accent text-white rounded-lg font-bold hover:opacity-90 cursor-pointer"
                  >
                    S'inscrire maintenant
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-80">
          {/* Timeline */}
          <div className="card mb-4">
            <h3 className="font-semibold text-gray-900 mb-4">Calendrier</h3>
            <div className="space-y-4">
              {contest.timeline.map((phase, index) => (
                <div key={phase.phase} className="flex items-start space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      phase.status === "active"
                        ? "bg-green-100 text-green-600"
                        : phase.status === "upcoming"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {phase.phase}
                    </div>
                    <div className="flex items-center gap-2 justify-between">
                      <div className="text-xs text-gray-600">{phase.date}</div>
                      <div
                        className={`text-xs mt-1 px-2 py-1 rounded-full inline-block ${
                          phase.status === "active"
                            ? "bg-green-100 text-green-800"
                            : phase.status === "upcoming"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {phase.status === "active"
                          ? "En cours"
                          : phase.status === "upcoming"
                          ? "À venir"
                          : "Terminé"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="card mb-4">
            <div className="space-y-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-full flex items-center justify-center space-x-2 py-2 rounded-full ${
                  isLiked
                    ? "bg-pink-50 text-pink-600 border border-pink-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Heart
                  className="w-5 h-5"
                  fill={isLiked ? "currentColor" : "none"}
                />
                <span className='text-sm'>{isLiked ? "Suivi" : "Suivre ce concours"}</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                <Share2 className="w-5 h-5" />
                <span className='text-sm'>Partager</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                <MessageCircle className="w-5 h-5" />
                <span className='text-sm'>Forum du concours</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="card mb-4">
            <h3 className="font-semibold text-gray-900 mb-4">Statistiques</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Taux d'inscription</span>
                  <span className="font-medium">+15% cette semaine</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Engagement moyen</span>
                  <span className="font-medium">4.8/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-accent h-1.5 rounded-full w-4/5"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Taux de réussite</span>
                  <span className="font-medium">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-purple-500 h-1.5 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 p-[10px]">
            <h3 className="font-semibold text-gray-900 mb-4">
              Ressources utiles
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-900">
                    Guide du participant
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white"
              >
                <div className="flex items-center space-x-3">
                  <Video className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-900">
                    Webinaire d'introduction
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between p-3 bg-white/50 rounded-lg hover:bg-white"
              >
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-900">
                    Template de soumission
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}