"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  TrendingUp,
  Bookmark,
  Share2,
  Building,
  CheckCircle,
  Zap,
  Users,
  Target,
  ChevronRight,
  Star,
} from "lucide-react";

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState("recommended");
  const [searchQuery, setSearchQuery] = useState("");

  const jobListings = [
    {
      id: 1,
      title: "Senior E-commerce Manager",
      company: "AfroChic Collection",
      location: "Dakar, Sénégal",
      salary: "450.000 - 600.000 FCFA/mois",
      type: "Temps plein",
      posted: "Il y a 2 jours",
      remote: true,
      urgent: true,
      description:
        "Gestion complète de notre plateforme e-commerce. Expérience en Mobile Money requise.",
      skills: [
        "E-commerce",
        "Marketing Digital",
        "Mobile Money",
        "Analyse Data",
      ],
      applicants: 45,
      match: 95,
    },
    {
      id: 2,
      title: "Développeur Fullstack",
      company: "Tech Innov CI",
      location: "Abidjan, Côte d'Ivoire",
      salary: "350.000 - 500.000 FCFA/mois",
      type: "Temps plein",
      posted: "Il y a 5 jours",
      remote: true,
      urgent: false,
      description:
        "Développement d'applications web et mobile pour startups africaines.",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      applicants: 89,
      match: 88,
    },
    {
      id: 3,
      title: "Designer Produit Mode",
      company: "Wax Queen",
      location: "Lomé, Togo",
      salary: "300.000 - 400.000 FCFA/mois",
      type: "Temps plein",
      posted: "Il y a 1 semaine",
      remote: false,
      urgent: true,
      description:
        "Création de collections mode inspirées des tissus africains.",
      skills: ["Fashion Design", "Adobe Suite", "Trend Analysis", "Production"],
      applicants: 32,
      match: 92,
    },
  ];

  const recommendedJobs = [
    {
      id: 4,
      title: "Growth Marketing Manager",
      company: "Digital Africa",
      location: "Remote",
      salary: "500.000+ FCFA/mois",
      match: 96,
    },
    {
      id: 5,
      title: "Artisan Product Manager",
      company: "Artisanat WA",
      location: "Ouagadougou",
      salary: "400.000 FCFA/mois",
      match: 91,
    },
  ];

  const jobAlerts = [
    { keyword: "E-commerce", count: 24 },
    { keyword: "Marketing Digital", count: 18 },
    { keyword: "Fashion Design", count: 12 },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="card mb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Trouvez le job de vos rêves
            </h1>
            <p className="text-md opacity-90">
              Des opportunités professionnelles adaptées aux talents africains
            </p>
            <div className="flex items-center space-x-3 mt-2">
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                <div>
                  <div className="text-lg font-bold">1,245</div>
                  <div className="text-xs opacity-90">Offres actives</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <div>
                  <div className="text-lg font-bold">4,562</div>
                  <div className="text-xs opacity-90">Candidats actifs</div>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                <div>
                  <div className="text-lg font-bold">89%</div>
                  <div className="text-xs opacity-90">Taux de matching</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 cursor-pointer">
              Poster une offre
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un poste, une compétence ou une entreprise..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073b1]"
          />
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073b1]">
              <option>Localisation</option>
              <option>Dakar</option>
              <option>Abidjan</option>
              <option>Lomé</option>
              <option>Remote</option>
            </select>
          </div>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073b1]">
              <option>Type d'emploi</option>
              <option>Temps plein</option>
              <option>Contrat</option>
              <option>Stage</option>
              <option>Freelance</option>
            </select>
          </div>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073b1]">
              <option>Salaire</option>
              <option>200K - 400K FCFA</option>
              <option>400K - 600K FCFA</option>
              <option>600K+ FCFA</option>
            </select>
          </div>
          <button className="px-6 py-2 bg-[#0073b1] text-white rounded-lg font-medium hover:bg-[#006097]">
            <Search className="w-4 h-4 inline mr-2" />
            Rechercher
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="lg:w-64">
          {/* Quick Apply Profile */}
          <div className="card mb-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">JD</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">John Doe</h4>
                <p className="text-sm text-gray-600">Vendeur Pro</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Profil complet</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <button className="w-full py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary cursor-pointer">
              Compléter mon profil
            </button>
          </div>

          {/* Job Alerts */}
          <div className="card mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900">Alertes emploi</h3>
              <Zap className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="space-y-3">
              {jobAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                >
                  <span className="font-medium text-gray-900">
                    {alert.keyword}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {alert.count} offres
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm text-[#0073b1] hover:underline">
              + Ajouter une alerte
            </button>
          </div>

          {/* Top Companies */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4">
              Entreprises phares
            </h3>
            <div className="space-y-2">
              {[
                { name: "AfroChic", jobs: 8, hiring: true },
                { name: "Tech Innov", jobs: 12, hiring: true },
                { name: "Digital Africa", jobs: 15, hiring: true },
              ].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-3 py-1 hover:bg-gray-50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {company.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {company.jobs} offres
                    </div>
                  </div>
                  {company.hiring && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Recrute
                    </span>
                  )}
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm text-primary cursor-pointer hover:underline">
              Voir toutes les entreprises
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
            <div className="flex border-b border-gray-200">
              {["recommended", "recent", "remote", "saved"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-4 font-medium border-b-2 ${
                    activeTab === tab
                      ? "border-[#0073b1] text-[#0073b1]"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab === "recommended" && "Recommandés pour vous"}
                  {tab === "recent" && "Récents"}
                  {tab === "remote" && "Remote"}
                  {tab === "saved" && "Sauvegardés (12)"}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="p-6">
              <div className="space-y-6">
                {jobListings.map((job) => (
                  <div
                    key={job.id}
                    className="border border-gray-200 rounded-xl p-6 hover:border-[#0073b1] transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-1">
                        {/* Job Header */}
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-xl font-bold text-gray-900">
                                {job.title}
                              </h3>
                              {job.urgent && (
                                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-full">
                                  URGENT
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-gray-600">
                              <span className="flex items-center">
                                <Building className="w-4 h-4 mr-1" />
                                {job.company}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {job.posted}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                              <Bookmark className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                              <Share2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        {/* Job Details */}
                        <div className="mt-4">
                          <p className="text-gray-700 mb-4">
                            {job.description}
                          </p>

                          {/* Salary & Type */}
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                              <DollarSign className="w-3 h-3 inline mr-1" />
                              {job.salary}
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {job.type}
                            </span>
                            {job.remote && (
                              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                                Remote possible
                              </span>
                            )}
                          </div>

                          {/* Skills */}
                          <div className="mb-4">
                            <div className="text-sm text-gray-600 mb-2">
                              Compétences requises:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600">
                              {job.applicants} candidats • Match:{" "}
                              <span className="font-bold">{job.match}%</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                                Voir détails
                              </button>
                              <button className="px-4 py-2 bg-[#0073b1] text-white rounded-lg hover:bg-[#006097]">
                                Postuler maintenant
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Jobs Quick View */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Autres offres recommandées
              </h3>
              <button className="text-sm text-[#0073b1] hover:underline">
                Voir tout
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendedJobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-[#0073b1]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">{job.title}</h4>
                      <div className="text-sm text-gray-600 mt-1">
                        {job.company} • {job.location}
                      </div>
                      <div className="text-sm font-medium text-gray-900 mt-2">
                        {job.salary}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="font-bold text-green-600">
                          {job.match}%
                        </span>
                      </div>
                      <button className="mt-2 text-sm text-[#0073b1] hover:underline">
                        Postuler
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Resources */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Boostez votre carrière
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Ressources pour améliorer votre employabilité
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border hover:border-purple-300">
                    CV Builder
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border hover:border-purple-300">
                    Interview Prep
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border hover:border-purple-300">
                    Salary Insights
                  </button>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  <span>Explorer les ressources</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-64">
          {/* Application Tracker */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">
                Suivi candidatures
              </h3>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="space-y-4">
              {[
                { status: "Soumis", count: 8, color: "bg-blue-500" },
                { status: "En revue", count: 5, color: "bg-yellow-500" },
                { status: "Entretien", count: 3, color: "bg-purple-500" },
                { status: "Offre", count: 1, color: "bg-green-500" },
              ].map((track, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full ${track.color} mr-3`}
                    ></div>
                    <span className="text-sm text-gray-700">
                      {track.status}
                    </span>
                  </div>
                  <span className="font-medium">{track.count}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm text-[#0073b1] hover:underline">
              Voir le détail
            </button>
          </div>

          {/* Top Skills in Demand */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Compétences recherchées
            </h3>
            <div className="space-y-3">
              {[
                { skill: "E-commerce Strategy", jobs: 124 },
                { skill: "Mobile Money Integration", jobs: 89 },
                { skill: "Digital Marketing", jobs: 156 },
                { skill: "Fashion Design", jobs: 78 },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                >
                  <span className="text-sm text-gray-700">{item.skill}</span>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {item.jobs} offres
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Salary Insights */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Insights salaire
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">E-commerce Manager</span>
                  <span className="font-medium">450K FCFA</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Fullstack Developer</span>
                  <span className="font-medium">420K FCFA</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Product Designer</span>
                  <span className="font-medium">380K FCFA</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 py-2 text-sm text-[#0073b1] hover:underline">
              Explorer les salaires
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
