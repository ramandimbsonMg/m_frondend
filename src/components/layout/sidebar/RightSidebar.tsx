"use client";

import {
  TrendingUp,
  Users,
  Award,
  ShoppingBag,
  Clock,
  Zap,
  ChevronRight,
} from "lucide-react";

const RightSidebar = () => {
  const trendingProducts = [
    {
      name: "Sac artisanal bogolan",
      seller: "ArtMali",
      price: "25.000 F",
      sales: "48",
    },
    {
      name: "Tissu wax limited",
      seller: "WaxQueen",
      price: "15.000 F",
      sales: "156",
    }
  ];

  const liveEvents = [
    {
      title: "Live: Création de marque",
      host: "Startup Africa",
      time: "16:00",
      viewers: "1.2k",
    },
    {
      title: "Demo: E-commerce tips",
      host: "Tech Entrepreneurs",
      time: "18:30",
      viewers: "845",
    },
  ];

  const suggestedPeople = [
    { name: "Amina Diallo", role: "Designer Mode", mutual: "12" },
    { name: "Mohamed Keita", role: "Tech Startup", mutual: "8" },
  ];

  return (
    <aside className="hidden xl:block w-80 min-h-[calc(100vh-4rem)] pt-6">
      <div className="sticky top-20">
        {/* Trending Products */}
        <div className="mb-4 card-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-secondary" />
              Tendances du marché
            </h3>
            <button className="text-sm text-primary hover:underline cursor-pointer">
              Voir plus
            </button>
          </div>
          <div className="space-y-3">
            {trendingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-sm text-gray-900">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Par {product.seller}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">
                      {product.price}
                    </div>
                    <div className="text-xs text-gray-500">
                      {product.sales} ventes
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full">
                    Populaire
                  </span>
                  <button className="text-xs text-primary font-medium hover:underline">
                    Acheter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Events */}
        <div className="mb-4 card-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-red-500" />
              Événements en direct
            </h3>
            <button className="text-sm text-primary hover:underline">
              Tout voir
            </button>
          </div>
          <div className="space-y-3">
            {liveEvents.map((event, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-3 hover:border-primary cursor-pointer transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-sm text-gray-900">
                      {event.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">{event.host}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm text-gray-900">
                      {event.time}
                    </div>
                    <div className="text-xs text-gray-500">
                      {event.viewers} spectateurs
                    </div>
                  </div>
                </div>
                <button className="w-full mt-3 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium hover:bg-red-100 transition-colors">
                  Rejoindre le live
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contests & Challenges */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-[10px] mb-4 border border-purple-100">
          <div className="">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Award className="w-5 h-5 mr-2 text-purple-600" />
                Concours du mois
              </h3>
              <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                Nouveau
              </span>
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">
              "Meilleur vendeur émergent"
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Gagnez 500.000 FCFA et une formation gratuite
            </p>
            <div className="flex items-center justify-between text-sm mb-4">
              <div>
                <div className="font-medium text-gray-900">
                  128 participants
                </div>
                <div className="text-gray-500">7 jours restants</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-purple-600">500K FCFA</div>
                <div className="text-gray-500">1er prix</div>
              </div>
            </div>
            <button className="w-full py-2 bg-pink-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity">
              Participer maintenant
            </button>
          </div>
        </div>

        {/* Suggested People */}
        <div className="card-1 mb-4 sticky top-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-500" />
              Personnes suggérées
            </h3>
            <button className="text-sm text-primary hover:underline">
              Voir plus
            </button>
          </div>
          <div className="space-y-3">
            {suggestedPeople.map((person, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {person.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-900">
                      {person.name}
                    </h4>
                    <p className="text-xs text-gray-600">{person.role}</p>
                    <p className="text-xs text-gray-500">
                      {person.mutual} amis en commun
                    </p>
                  </div>
                </div>
                <button className="text-sm font-medium text-primary hover:text-[#006097]">
                  Suivre
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Assistant */}
        <div className="bg-cyan-50/50 rounded-lg p-[10px] border border-cyan-100 mb-4">
          <div className="">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Assistant IA</h3>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">IA</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Optimisez vos ventes avec nos conseils IA personnalisés
            </p>
            <div className="space-y-2">
              <button className="w-full text-left py-2 px-3 bg-white rounded-full text-sm hover:bg-cyan-100 transition-colors cursor-pointer">
                📝 Améliorer mes descriptions
              </button>
              <button className="w-full text-left py-2 px-3 bg-white rounded-full text-sm hover:bg-cyan-100 transition-colors cursor-pointer">
                📈 Analyser mes performances
              </button>
              <button className="w-full text-left py-2 px-3 bg-white rounded-full text-sm hover:bg-cyan-100 transition-colors cursor-pointer">
                💡 Idées de produits tendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
