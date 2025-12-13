"use client";

import { useState } from "react";
import {
  Users,
  ShoppingBag,
  FileText,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  BarChart3,
  Shield,
  Settings,
  Download,
  Filter,
  Search,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Utilisateurs totaux",
      value: "12,458",
      change: "+12%",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Produits actifs",
      value: "5,892",
      change: "+8%",
      icon: ShoppingBag,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Commandes du mois",
      value: "2,456",
      change: "+24%",
      icon: FileText,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Revenus totaux",
      value: "45.8M FCFA",
      change: "+18%",
      icon: DollarSign,
      color: "bg-amber-100 text-amber-600",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD001",
      user: "Amina D.",
      amount: "45.000 FCFA",
      status: "completed",
      date: "15 mars 2024",
    },
    {
      id: "#ORD002",
      user: "Mohamed K.",
      amount: "28.500 FCFA",
      status: "pending",
      date: "14 mars 2024",
    },
    {
      id: "#ORD003",
      user: "Fatou S.",
      amount: "15.000 FCFA",
      status: "completed",
      date: "14 mars 2024",
    },
    {
      id: "#ORD004",
      user: "Ibrahim B.",
      amount: "60.000 FCFA",
      status: "failed",
      date: "13 mars 2024",
    },
  ];

  const recentUsers = [
    {
      name: "Jean Koffi",
      email: "jean@example.com",
      joinDate: "15 mars 2024",
      status: "active",
      type: "vendeur",
    },
    {
      name: "Marie Ndiaye",
      email: "marie@example.com",
      joinDate: "14 mars 2024",
      status: "pending",
      type: "acheteur",
    },
    {
      name: "Paul Sow",
      email: "paul@example.com",
      joinDate: "14 mars 2024",
      status: "active",
      type: "vendeur",
    },
    {
      name: "Sophie Traoré",
      email: "sophie@example.com",
      joinDate: "13 mars 2024",
      status: "suspended",
      type: "acheteur",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Tableau de bord Admin
          </h1>
          <p className="text-gray-600 mt-2">
            Gérez et surveillez l'activité de Missera Market
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>Exporter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-[#006097]">
            <Settings className="w-4 h-4" />
            <span>Paramètres</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 border-b border-gray-200 mb-8">
        {[
          "overview",
          "users",
          "products",
          "orders",
          "reports",
          "moderation",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium border-b-2 ${
              activeTab === tab
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab === "overview" && "Aperçu"}
            {tab === "users" && "Utilisateurs"}
            {tab === "products" && "Produits"}
            {tab === "orders" && "Commandes"}
            {tab === "reports" && "Rapports"}
            {tab === "moderation" && "Modération"}
          </button>
        ))}
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <span
                className={`text-sm font-medium ${
                  stat.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.title}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Commandes récentes
              </h3>
              <button className="text-sm text-primary hover:underline">
                Voir tout
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    ID Commande
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Client
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Montant
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">
                        {order.id}
                      </div>
                      <div className="text-sm text-gray-600">{order.date}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">
                        {order.user}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">
                        {order.amount}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status === "completed" && (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        )}
                        {order.status === "pending" && (
                          <AlertCircle className="w-3 h-3 mr-1" />
                        )}
                        {order.status === "failed" && (
                          <XCircle className="w-3 h-3 mr-1" />
                        )}
                        {order.status === "completed"
                          ? "Complétée"
                          : order.status === "pending"
                          ? "En attente"
                          : "Échouée"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Users */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Utilisateurs récents
              </h3>
              <button className="text-sm text-primary hover:underline">
                Voir tout
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Utilisateur
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Type
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Statut
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr
                    key={user.email}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-600">{user.email}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          user.type === "vendeur"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {user.type === "vendeur" ? "Vendeur" : "Acheteur"}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          user.status === "active"
                            ? "bg-green-100 text-green-800"
                            : user.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status === "active"
                          ? "Actif"
                          : user.status === "pending"
                          ? "En attente"
                          : "Suspendu"}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-gray-600 hover:text-gray-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-gray-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Analytiques du trafic
          </h3>
          <div className="flex items-center space-x-2">
            <select className="border rounded-lg px-3 py-1 text-sm">
              <option>7 derniers jours</option>
              <option>30 derniers jours</option>
              <option>3 derniers mois</option>
            </select>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="h-64 flex items-end space-x-2">
          {[40, 60, 80, 65, 75, 90, 85].map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-10 bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t-lg"
                style={{ height: `${height}%` }}
              ></div>
              <div className="text-xs text-gray-600 mt-2">Jour {index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Modération</h4>
              <p className="text-sm text-gray-600">12 rapports en attente</p>
            </div>
          </div>
          <button className="w-full py-2 bg-red-50 text-red-700 rounded-lg font-medium hover:bg-red-100">
            Voir les rapports
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Performances</h4>
              <p className="text-sm text-gray-600">+24% cette semaine</p>
            </div>
          </div>
          <button className="w-full py-2 bg-green-50 text-green-700 rounded-lg font-medium hover:bg-green-100">
            Voir les stats
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Utilisateurs</h4>
              <p className="text-sm text-gray-600">
                245 nouveaux cette semaine
              </p>
            </div>
          </div>
          <button className="w-full py-2 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100">
            Gérer les utilisateurs
          </button>
        </div>
      </div>
    </div>
  );
}
