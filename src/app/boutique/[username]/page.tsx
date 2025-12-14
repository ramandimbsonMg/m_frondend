"use client";

import { useState } from "react";
import {
  Filter,
  Grid,
  List,
  Star,
  TrendingUp,
  Shield,
  Truck,
  Headphones,
  Heart,
  Share2,
  ShoppingBag,
  ChevronDown,
  Tag,
  Award,
} from "lucide-react";
import { useParams } from "next/navigation";
import ProductCard from "@/components/cards/ProductCard";
import { shopData } from "@/data/shop";

export default function ShopPage() {
  const params = useParams();
  const username = params.username as string;
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 100000]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Shop Header */}
      <div className="bg-primary rounded-t-xl overflow-hidden">
        <div className="p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 rounded-full border-4 border-white bg-primary flex items-center justify-center">
                <span className="text-white text-2xl font-bold w-20 h-20 text-center flex justify-center items-center">AC</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold">{shopData.name}</h1>
                <p className="text-lg opacity-90 mt-1">
                  {shopData.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 mr-1" />
                    <span className="font-bold">{shopData.rating}</span>
                    <span className="ml-1 opacity-90">
                      ({shopData.reviews} avis)
                    </span>
                  </div>
                  <span>•</span>
                  <span className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {shopData.stats.totalSales} ventes
                  </span>
                  <span>•</span>
                  <span>{shopData.location}</span>
                  <span>•</span>
                  <span>Membre depuis {shopData.joined}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30">
                <Heart className="w-5 h-5 inline mr-2" />
                Suivre
              </button>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30">
                <Share2 className="w-5 h-5 inline mr-2" />
                Partager
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Stats */}
      <div className="card-1">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(shopData.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{value}</div>
              <div className="text-sm text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, " $1").toLowerCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Policies */}
      <div className="card-1 mt-6">
        <div className="grid md:grid-cols-3 gap-6">
          {shopData.policies.map((policy, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <policy.icon className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{policy.title}</h4>
                <p className="text-sm text-gray-600">{policy.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters & Controls */}
      <div className="card-1 mt-6 sticky top-16 z-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filtrer</span>
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#4b6fc9]"
              >
                <option value="popular">Plus populaires</option>
                <option value="newest">Plus récents</option>
                <option value="price-low">Prix: croissant</option>
                <option value="price-high">Prix: décroissant</option>
                <option value="rating">Meilleures notes</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm text-gray-600">Prix:</span>
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
                className="w-24"
              />
              <span className="text-sm text-gray-600">à</span>
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-24"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-full cursor-pointer ${
                viewMode === "grid"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-full cursor-pointer ${
                viewMode === "list"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Categories Sidebar */}
        <div className="md:w-64"> 
          <div className="card"> 
            <h3 className="font-semibold text-gray-900 mb-4">Catégories</h3>
            <div className="space-y-2">
              {shopData.categories.map((category) => (
                <button
                  key={category.name}
                  className="flex justify-between items-center w-full p-3 text-left rounded-lg hover:bg-gray-50"
                >
                  <span className="text-gray-700">{category.name}</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Prix</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>0 FCFA</span>
                  <span>100.000 FCFA</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm font-medium">
                  <span>{priceRange[0].toLocaleString()} FCFA</span>
                  <span>{priceRange[1].toLocaleString()} FCFA</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">
                Tags populaires
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "limited",
                  "premium",
                  "new",
                  "best-seller",
                  "eco-friendly",
                  "handmade",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Shop Owner */}
          <div className="card mt-4">
            <h3 className="font-semibold text-gray-900 mb-4">
              À propos du vendeur
            </h3>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">FD</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{shopData.owner}</h4>
                <p className="text-sm text-gray-600">Propriétaire</p>
              </div>
            </div>
            <button className="w-full py-1.5 border border-primary text-primary rounded-full hover:bg-blue-50">
              Voir le profil
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {shopData.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {shopData.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {product.name}
                          </h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-2xl font-bold text-gray-900">
                              {product.price}
                            </span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                              <span>{product.rating}</span>
                              <span className="text-gray-500 ml-1">
                                ({product.sales} ventes)
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 mt-3">
                            {product.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <button className="mb-2 p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="px-4 py-2 bg-[#4b6fc9] text-white rounded-lg hover:bg-[#006097]">
                            Acheter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button className="px-3 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
              Précédent
            </button>
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`px-3 py-1 rounded-full ${
                  num === 1 ? "bg-primary text-white" : "hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            ))}
            <button className="px-3 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
