"use client";

import { useState } from "react";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Building,
  MapPin,
  Briefcase,
  School,
  Star,
  MessageCircle,
  ChevronRight,
  MoreVertical,
  X,
  Check,
  Globe,
  TrendingUp,
  Award,
  Calendar,
  ThumbsUp,
} from "lucide-react";

export default function ReseauPage() {
  const [activeTab, setActiveTab] = useState("connections");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const connections = [
    {
      id: 1,
      name: "Amina Diallo",
      title: "Fondatrice - Mode Madagascar",
      company: "AfroChic Collection",
      location: "Madagascar, Fianarantsoa",
      mutualConnections: 12,
      skills: ["Fashion Design", "E-commerce", "Marketing"],
      avatar: "AD",
      status: "active",
      connectionType: "1st",
      lastActive: "Actif il y a 2h",
    },
    {
      id: 2,
      name: "Mohamed Keita",
      title: "CEO Tech Startup",
      company: "Tech Innov CI",
      location: "Tamatave, 13 Mai",
      mutualConnections: 8,
      skills: ["Software Development", "AI", "Business Strategy"],
      avatar: "MK",
      status: "active",
      connectionType: "2nd",
      lastActive: "Actif maintenant",
    },
    {
      id: 3,
      name: "Fatou Sow",
      title: "Directrice Artistique",
      company: "Artisanat WA",
      location: "Tamatave, Tanambao",
      mutualConnections: 15,
      skills: ["Artisanat", "Design", "Gestion Projet"],
      avatar: "FS",
      status: "offline",
      connectionType: "1st",
      lastActive: "Hors ligne",
    },
    {
      id: 4,
      name: "Ibrahim Ba",
      title: "Expert E-commerce",
      company: "E-com Africa",
      location: "Madagascar, Antananarivo",
      mutualConnections: 6,
      skills: ["E-commerce", "Logistique", "Mobile Money"],
      avatar: "IB",
      status: "active",
      connectionType: "2nd",
      lastActive: "Actif il y a 30min",
    },
  ];

  const suggestedConnections = [
    {
      id: 5,
      name: "Jean Koffi",
      title: "Investisseur Tech",
      company: "Africa Ventures",
      location: "Antananarivo, Meteo",
      mutualConnections: 3,
      reason: "Vous avez des compétences complémentaires en e-commerce",
      avatar: "JK",
    },
    {
      id: 6,
      name: "Marie Ndiaye",
      title: "Spécialiste Marketing",
      company: "Digital Africa",
      location: "Fianarantsoa, Ankofafa",
      mutualConnections: 5,
      reason: "Membre de Fashion Entrepreneurs Africa",
      avatar: "MN",
    },
  ];

  const networkStats = {
    total: 342,
    newThisWeek: 24,
    byLocation: [
      { location: "Antananarivo", count: 156 },
      { location: "Tamatave", count: 78 },
      { location: "Antsirabe", count: 45 },
      { location: "Fianarantsoa", count: 32 },
      { location: "Autres", count: 31 },
    ],
    byIndustry: [
      { industry: "Mode & Design", count: 89 },
      { industry: "Tech & Innovation", count: 76 },
      { industry: "Artisanat", count: 54 },
      { industry: "Commerce", count: 48 },
      { industry: "Services", count: 32 },
    ],
  };

  const filters = [
    { id: "location-madagascar", label: "Madagascar", icon: MapPin },
    { id: "fashion", label: "Mode & Design", icon: Briefcase },
    { id: "tech", label: "Tech", icon: Building },
    { id: "artisanat", label: "Artisanat", icon: Award },
    { id: "ecommerce", label: "E-commerce", icon: TrendingUp },
    { id: "recent", label: "Actifs récemment", icon: Calendar },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Mon réseau</h1>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-primary mr-2" />
                <span className="text-lg font-semibold text-gray-900">
                  {networkStats.total}
                </span>
                <span className="text-gray-600 ml-1">contacts</span>
              </div>
              <div className="text-secondary font-medium">
                <TrendingUp className="w-4 h-4 inline mr-1" />+
                {networkStats.newThisWeek} cette semaine
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary cursor-pointer">
              <UserPlus className="w-4 h-4" />
              <span>Étendre mon réseau</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Filters & Stats */}
        <div className="lg:w-64">
          {/* Search */}
          <div className="card-1 mb-4 sticky top-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher dans mon réseau..."
                className="w-full pl-10 pr-4 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-sm"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="card mb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Filtres</h3>
              <Filter className="w-5 h-5 text-gray-600" />
            </div>
            <div className="space-y-2">
              {filters.map((filter) => (
                <label
                  key={filter.id}
                  className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(filter.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedFilters([...selectedFilters, filter.id]);
                      } else {
                        setSelectedFilters(
                          selectedFilters.filter((f) => f !== filter.id)
                        );
                      }
                    }}
                    className="rounded text-primary"
                  />
                  <filter.icon className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{filter.label}</span>
                </label>
              ))}
            </div>
            {selectedFilters.length > 0 && (
              <button
                onClick={() => setSelectedFilters([])}
                className="w-full mt-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Effacer tous les filtres
              </button>
            )}
          </div>

          {/* Network Stats */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4">
              Statistiques du réseau
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Par localisation</span>
                </div>
                <div className="space-y-2">
                  {networkStats.byLocation.map((stat) => (
                    <div
                      key={stat.location}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-700">
                        {stat.location}
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {stat.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Par secteur</span>
                </div>
                <div className="space-y-2">
                  {networkStats.byIndustry.map((stat) => (
                    <div
                      key={stat.industry}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-700">
                        {stat.industry}
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {stat.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">
                    Nouveaux contacts
                  </span>
                  <span className="text-sm font-bold text-secondary">
                    +{networkStats.newThisWeek}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-secondary h-1.5 rounded-full"
                    style={{
                      width: `${
                        (networkStats.newThisWeek / networkStats.total) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Invite Friends */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 p-[10px] mt-4">
            <h3 className="font-semibold text-gray-900 mb-3">
              Étendez votre réseau
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Invitez vos contacts à rejoindre Missera Market
            </p>
            <button className="w-full py-1.5 border border-primary text-primary rounded-full font-medium hover:bg-blue-50">
              Inviter des contacts
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="bg-white rounded-lg border border-gray-200 mb-4">
            <div className="flex border-b border-gray-200">
              {["connections", "pending", "suggestions", "groups"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-3 cursor-pointer font-medium border-b-2 ${
                      activeTab === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab === "connections" && "Mes contacts"}
                    {tab === "pending" && "En attente (5)"}
                    {tab === "suggestions" && "Suggestions"}
                    {tab === "groups" && "Groupes (8)"}
                  </button>
                )
              )}
            </div>

            {/* Tab Content */}
            <div className="px-6 py-3">
              {activeTab === "connections" && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-md font-semibold text-gray-900">
                      Tous mes contacts ({connections.length})
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
                        Trier par: Récent
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Connections Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {connections.map((connection) => (
                      <div
                        key={connection.id}
                        className="card hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          {/* Avatar & Info */}
                          <div className="flex items-start space-x-4">
                            <div className="relative">
                              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                                <span className="text-white font-bold text-lg">
                                  {connection.avatar}
                                </span>
                              </div>
                              {connection.status === "active" && (
                                <div className="absolute bottom-0 right-0 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
                              )}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">
                                {connection.name}
                              </h4>
                              <p className="text-gray-700 mt-1 text-sm max-w-[110px] truncate">
                                {connection.title}
                              </p>
                              <div className="flex items-center space-x-2 mt-2 text-xs text-gray-600">
                                <span className="flex items-center max-w-[80px] truncate">
                                  <Building className="w-4 h-4 mr-1 shrink-0" />
                                  <span className="truncate">
                                    {connection.company}
                                  </span>
                                </span>

                                <span className="flex items-center max-w-[80px] truncate">
                                  <MapPin className="w-4 h-4 mr-1 shrink-0" />
                                  <span className="truncate">
                                    {connection.location}
                                  </span>
                                </span>
                              </div>

                              <div className="flex items-center mt-2">
                                <span className="text-xs px-2 py-1 bg-blue-100 text-primary rounded-full mr-2">
                                  {connection.connectionType}°
                                </span>
                                <span className="text-xs text-gray-600">
                                  {connection.mutualConnections} amis en commun
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {connection.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                          <div className="text-xs text-gray-600">
                            {connection.lastActive}
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer">
                              <MessageCircle className="w-4 h-4" />
                              <span className="text-sm">Message</span>
                            </button>
                            <button className="flex items-center h-10 w-10 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer text-center justify-center">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "suggestions" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Personnes que vous pourriez connaître
                    </h3>
                    <button className="text-sm text-primary hover:underline">
                      Voir plus
                    </button>
                  </div>

                  {/* Suggested Connections */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {suggestedConnections.map((suggestion) => (
                      <div
                        key={suggestion.id}
                        className="bg-white border border-gray-200 rounded-xl p-6"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                {suggestion.avatar}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">
                                {suggestion.name}
                              </h4>
                              <p className="text-gray-700 mt-1">
                                {suggestion.title}
                              </p>
                              <div className="flex items-center space-x-3 mt-2 text-sm text-gray-600">
                                <span className="flex items-center">
                                  <Building className="w-3 h-3 mr-1" />
                                  {suggestion.company}
                                </span>
                                <span className="flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {suggestion.location}
                                </span>
                              </div>
                              <div className="mt-2">
                                <p className="text-sm text-gray-600">
                                  {suggestion.reason}
                                </p>
                                <div className="flex items-center mt-2">
                                  <Users className="w-3 h-3 text-gray-400 mr-1" />
                                  <span className="text-xs text-gray-600">
                                    {suggestion.mutualConnections} amis en
                                    commun
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                          <button className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                            Ignorer
                          </button>
                          <button className="flex-1 ml-3 py-2 bg-primary text-white rounded-lg hover:bg-[#006097]">
                            <UserPlus className="w-4 h-4 inline mr-2" />
                            Suivre
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Groups Suggestions */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 p-6 mt-8">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Groupes suggérés
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Fashion Entrepreneurs Africa",
                          members: "2.4k",
                        },
                        { name: "Tech Startups Afrique", members: "3.1k" },
                        { name: "Artisans du Sahel", members: "1.8k" },
                      ].map((group, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-white/50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                              <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">
                                {group.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {group.members} membres
                              </div>
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm hover:bg-purple-200">
                            Rejoindre
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "groups" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Vos groupes
                    </h3>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-[#006097]">
                      <Users className="w-4 h-4" />
                      <span>Créer un groupe</span>
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Fashion Madagascar",
                        description:
                          "Designers et créateurs de mode à Madagascar",
                        members: 245,
                        posts: 156,
                        privacy: "public",
                      },
                      {
                        name: "Tech Entrepreneurs CI",
                        description:
                          "Startups et innovateurs tech en Côte d'Ivoire",
                        members: 128,
                        posts: 89,
                        privacy: "private",
                      },
                      {
                        name: "Artisanat du Sahel",
                        description: "Artisans et créateurs du Sahel",
                        members: 89,
                        posts: 45,
                        privacy: "public",
                      },
                    ].map((group, index) => (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-600 relative">
                          <div className="absolute bottom-4 left-4">
                            <div className="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <Users className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                group.privacy === "public"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {group.privacy === "public" ? "Public" : "Privé"}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 pt-12">
                          <h4 className="font-bold text-gray-900 text-lg mb-2">
                            {group.name}
                          </h4>
                          <p className="text-gray-600 text-sm mb-4">
                            {group.description}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <div>
                              <div className="font-medium">
                                {group.members} membres
                              </div>
                              <div>{group.posts} publications</div>
                            </div>
                            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                              Voir
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Alumni & Events */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Alumni */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">
                  Anciens collaborateurs
                </h3>
                <School className="w-5 h-5 text-gray-600" />
              </div>
              <div className="space-y-1">
                {[
                  {
                    name: "Papa Diop",
                    company: "Google Africa",
                    role: "Senior Developer",
                  },
                  {
                    name: "Aissatou Diallo",
                    company: "Amazon",
                    role: "Product Manager",
                  },
                  {
                    name: "Moussa Traoré",
                    company: "Facebook",
                    role: "Design Lead",
                  },
                ].map((alumni, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 px-3 py-1.5 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {alumni.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {alumni.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {alumni.role} • {alumni.company}
                      </div>
                    </div>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer">
                      <UserPlus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-sm text-primary hover:underline cursor-pointer">
                Voir plus d'anciens collaborateurs
              </button>
            </div>

            {/* Network Events */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">
                  Événements réseau
                </h3>
                <Calendar className="w-5 h-5 text-gray-600" />
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: "Meetup E-commerce Madagascar",
                    date: "25 mars",
                    attendees: 45,
                  },
                  {
                    title: "Webinar: Marketing Digital",
                    date: "28 mars",
                    attendees: 89,
                  },
                  {
                    title: "Networking Tech Abidjan",
                    date: "2 avril",
                    attendees: 32,
                  },
                ].map((event, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:border-primary"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {event.title}
                        </h4>
                        <div className="flex items-center space-x-3 mt-2 text-sm text-gray-600">
                          <span className="flex items-center text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {event.date}
                          </span>
                          <span className="flex items-center text-xs">
                            <Users className="w-3 h-3 mr-1" />
                            {event.attendees} particip
                          </span>
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs hover:bg-gray-200 cursor-pointer">
                        S'inscrire
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-sm text-primary hover:underline">
                Découvrir plus d'événements
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Quick Actions */}
        <div className="lg:w-64">
          {/* Invitations Received */}
          <div className="card mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900">
                Invitations reçues
              </h3>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                5
              </span>
            </div>
            <div className="space-y-4">
              {[
                { name: "Karim Cissé", role: "Product Designer" },
                { name: "Nadia Sy", role: "Marketing Manager" },
                { name: "Oumar Kanté", role: "Tech Founder" },
              ].map((invitation, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium text-gray-900">
                      {invitation.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {invitation.role}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <button className="p-1 text-green-600 hover:bg-green-50 rounded-full cursor-pointer">
                      <Check className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:bg-gray-100 rounded-full cursor-pointer">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-3 py-2 text-sm text-primary hover:underline cursor-pointer">
              Voir toutes les invitations
            </button>
          </div>

          {/* People Also Viewed */}
          <div className="card mb-4">
            <h3 className="font-semibold text-gray-900 mb-4">
              Les gens consultent aussi
            </h3>
            <div className="space-y-4">
              {[
                { name: "Sarah Koné", role: "Fashion Influencer", views: 156 },
                { name: "Drissa Bamba", role: "E-commerce Expert", views: 89 },
              ].map((person, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {person.name}
                    </div>
                    <div className="text-xs text-gray-600">{person.role}</div>
                    <div className="text-xs text-gray-500">
                      {person.views} vues cette semaine
                    </div>
                  </div>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer">
                    <UserPlus className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Export Network */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4">
              Exporter mon réseau
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Téléchargez la liste de vos contacts
            </p>
            <div className="space-y-2">
              <button className="w-full py-1.5 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 cursor-pointer">
                Exporter en CSV
              </button>
              <button className="w-full py-1.5 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 cursor-pointer">
                Exporter en PDF
              </button>
            </div>
          </div>

          {/* Network Privacy */}
          <div className="card mt-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-5 h-5 text-gray-600" />
              <h4 className="font-medium text-gray-900">
                Confidentialité réseau
              </h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Gérez qui peut voir vos contacts
            </p>
            <button className="w-full py-2 text-sm text-primary hover:underline cursor-pointer">
              Modifier les paramètres
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
