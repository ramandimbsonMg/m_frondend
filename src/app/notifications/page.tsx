"use client";

import { useState } from "react";
import {
  Bell,
  Check,
  X,
  Settings,
  Users,
  ThumbsUp,
  MessageCircle,
  Share2,
  Star,
  Award,
  TrendingUp,
  Calendar,
  ShoppingBag,
  Briefcase,
  Zap,
  Filter,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [unreadOnly, setUnreadOnly] = useState(false);

  const notifications = [
    {
      id: 1,
      type: "like",
      user: "Amina Diallo",
      action: "a aimé votre publication",
      target: '"Nouvelle collection printemps-été disponible"',
      time: "Il y a 2 minutes",
      read: false,
      avatar: "AD",
    },
    {
      id: 2,
      type: "connection",
      user: "Fatou Sow",
      action: "a accepté votre invitation",
      target: "Vous êtes maintenant connectés",
      time: "Il y a 2 heures",
      read: true,
      avatar: "FS",
    },
    {
      id: 3,
      type: "sale",
      user: "System",
      action: "Nouvelle vente !",
      target: "Commande #ORD-0012 confirmée",
      time: "Il y a 5 heures",
      read: true,
      avatar: "MM",
    },
    {
      id: 4,
      type: "achievement",
      user: "System",
      action: "Nouveau badge débloqué",
      target: "Top Seller - Niveau 3",
      time: "Hier",
      read: true,
      avatar: "MM",
    },
  ];

  const notificationTypes = [
    { id: "all", label: "Toutes", icon: Bell, count: 24 },
    { id: "unread", label: "Non lues", icon: Zap, count: 3 },
    { id: "social", label: "Social", icon: Users, count: 8 },
    { id: "sales", label: "Ventes", icon: ShoppingBag, count: 6 },
    { id: "system", label: "Système", icon: Settings, count: 10 },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "like":
        return ThumbsUp;
      case "comment":
        return MessageCircle;
      case "connection":
        return Users;
      case "sale":
        return ShoppingBag;
      case "achievement":
        return Award;
      case "mention":
        return Share2;
      case "contest":
        return Star;
      case "recommendation":
        return TrendingUp;
      default:
        return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "like":
        return "bg-pink-100 text-pink-600";
      case "comment":
        return "bg-blue-100 text-blue-600";
      case "connection":
        return "bg-green-100 text-green-600";
      case "sale":
        return "bg-amber-100 text-amber-600";
      case "achievement":
        return "bg-purple-100 text-purple-600";
      case "mention":
        return "bg-cyan-100 text-cyan-600";
      case "contest":
        return "bg-yellow-100 text-yellow-600";
      case "recommendation":
        return "bg-emerald-100 text-emerald-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (unreadOnly && notification.read) return false;
    if (activeFilter === "unread") return !notification.read;
    if (activeFilter === "social")
      return [
        "like",
        "comment",
        "connection",
        "mention",
        "recommendation",
      ].includes(notification.type);
    if (activeFilter === "sales") return ["sale"].includes(notification.type);
    if (activeFilter === "system")
      return ["achievement", "contest"].includes(notification.type);
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="card mb-4 sticky top-16 z-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 sticky top-20">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Notifications</h1>
              <p className="text-gray-600 mt-1 text-sm">
                Restez informé de toutes vos activités
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={unreadOnly}
                onChange={(e) => setUnreadOnly(e.target.checked)}
                className="rounded text-primary"
              />
              <span className="text-sm text-gray-700">Non lues seulement</span>
            </label>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-4">
        {/* Sidebar - Filters */}
        <div className="lg:col-span-4">
          <div className="card-1">
            <h3 className="font-semibold text-gray-900 mb-4">
              Filtrer par type
            </h3>
            <div className="space-y-2">
              {notificationTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveFilter(type.id)}
                    className={`flex items-center justify-between w-full p-3 rounded-lg cursor-pointer ${
                      activeFilter === type.id
                        ? "bg-blue-50 text-primary"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-4 h-4" />
                      <span className="font-medium text-sm">{type.label}</span>
                    </div>
                    {type.count > 0 && (
                      <span
                        className={`px-1 py-0.5 text-[8px] font-bold rounded-full ${
                          activeFilter === type.id
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {type.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Actions rapides
              </h3>
              <div className="space-y-1">
                <button className="w-full flex items-center justify-between px-1 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <span className="font-medium text-sm">
                    Tout marquer comme lu
                  </span>
                  <Check className="w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between px-1 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <span className="font-medium text-sm">
                    Supprimer anciennes
                  </span>
                  <X className="w-4 h-4" />
                </button>
                <button className="w-full flex items-center justify-between px-1 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <span className="font-medium text-sm">
                    Paramètres avancés
                  </span>
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="card mt-6 sticky top-20">
            <h3 className="font-semibold text-gray-900 mb-4">Statistiques</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 text-xs">
                    Notifications aujourd'hui
                  </span>
                  <span className="font-medium">8</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 text-xs">
                    Taux d'ouverture
                  </span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-accent h-1.5 rounded-full w-4/5"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 text-xs">
                    Moyenne par jour
                  </span>
                  <span className="font-medium">12</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-purple-500 h-1.5 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Notifications List */}
        <div className="lg:col-span-8">
          <div className="card">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-md font-semibold text-gray-900">
                    {activeFilter === "all"
                      ? "Toutes les notifications"
                      : activeFilter === "unread"
                      ? "Notifications non lues"
                      : activeFilter === "social"
                      ? "Activités sociales"
                      : activeFilter === "sales"
                      ? "Ventes & Transactions"
                      : "Notifications système"}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {filteredNotifications.length} notification(s)
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                    Tout marquer comme lu
                  </button>
                </div>
              </div>
            </div>

            {/* Notifications List */}
            <div className="divide-y divide-gray-100">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification) => {
                  const Icon = getNotificationIcon(notification.type);
                  const colorClass = getNotificationColor(notification.type);

                  return (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-gray-50 ${
                        !notification.read ? "bg-blue-50/50" : ""
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        {/* Avatar */}
                        <div className="relative">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClass}`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          {!notification.read && (
                            <div className="absolute -top-0.5 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-gray-900">
                                <span className="font-medium text-sm">
                                  {notification.user}
                                </span>{" "}
                                <span className="text-xs">
                                  {notification.action}
                                </span>
                              </p>
                              {notification.target && (
                                <p className="text-gray-700 mt-1 text-sm">
                                  {notification.target}
                                </p>
                              )}
                              <p className="text-xs text-gray-500 mt-2">
                                {notification.time}
                                {!notification.read && (
                                  <span className="ml-2 text-blue-600 font-medium">
                                    ● Non lu
                                  </span>
                                )}
                              </p>
                            </div>
                            <div className="flex items-start space-x-2">
                              {notification.type === "connection" && (
                                <button className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-lg hover:bg-green-200">
                                  Message
                                </button>
                              )}
                              {notification.type === "sale" && (
                                <button className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-lg hover:bg-amber-200">
                                  Voir la commande
                                </button>
                              )}
                              <button className="p-1 text-gray-400 hover:text-gray-600">
                                {notification.read ? (
                                  <Clock className="w-4 h-4" />
                                ) : (
                                  <CheckCircle className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center space-x-3 mt-4">
                            {!notification.read && (
                              <button className="text-sm text-blue-600 hover:text-blue-800">
                                Marquer comme lu
                              </button>
                            )}
                            {notification.type === "like" && (
                              <button className="text-sm text-gray-600 hover:text-gray-900">
                                Voir la publication
                              </button>
                            )}
                            {notification.type === "comment" && (
                              <button className="text-sm text-gray-600 hover:text-gray-900">
                                Répondre
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Aucune notification
                  </h3>
                  <p className="text-gray-600">
                    {unreadOnly
                      ? "Vous n'avez pas de notifications non lues"
                      : "Vous êtes à jour avec toutes vos notifications"}
                  </p>
                </div>
              )}
            </div>

            {/* Load More */}
            {filteredNotifications.length > 0 && (
              <div className="px-4 py-3 border-t border-gray-200">
                <button className="w-full py-1.5 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 cursor-pointer">
                  Charger plus de notifications
                </button>
              </div>
            )}
          </div>

          {/* Notification Settings */}
          <div className="card mt-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-md font-semibold text-gray-900">
                  Préférences de notification
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Personnalisez les notifications que vous recevez
                </p>
              </div>
              <Settings className="w-6 h-6 text-gray-600" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              {[
                { label: "Ventes & Transactions", enabled: true },
                { label: "Activités sociales", enabled: true },
                { label: "Concours & Challenges", enabled: true },
                { label: "Nouvelles fonctionnalités", enabled: false },
                { label: "Newsletter hebdomadaire", enabled: true },
                { label: "Promotions partenaires", enabled: false },
              ].map((setting, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                >
                  <span className="font-medium text-gray-900">
                    {setting.label}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={setting.enabled}
                      className="sr-only peer"
                      readOnly
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-1.5 bg-primary text-white rounded-full font-medium hover:bg-[#006097] cursor-pointer">
              Enregistrer les préférences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
