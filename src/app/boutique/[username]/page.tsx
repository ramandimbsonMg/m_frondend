"use client";

import { useState } from "react";
import {
  Filter,
  Grid,
  List,
  Star,
  TrendingUp,
  Heart,
  Share2,
  ChevronDown,
} from "lucide-react";
import { useParams } from "next/navigation";
import { shopData } from "@/data/shop";
import ProductCard from "@/components/ui/cards/ProductCard";
import Avatar from "@/components/global/Avatar";
import { Button } from "@/components/ui/button/button";
import Card from "@/components/ui/cards/Card";

export default function ShopPage() {
  const params = useParams();
  const username = params.username as string;
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 100000]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Shop Header */}
      <div className="bg-primary-100 rounded-t-xl border border-gray-200 px-4 py-2">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="flex items-start space-x-6">
            <div className="w-18 h-18 rounded-full border-4 border-white bg-primary flex items-center justify-center">
              <Avatar name={shopData.name} size="lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">
                {shopData.name}
              </h1>
              <p className="text-sm opacity-90 mt-1">{shopData.description}</p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 mr-1" />
                  <span className="font-bold">{shopData.rating}</span>
                  <span className="ml-1 opacity-90">
                    ({shopData.reviews} avis)
                  </span>
                </div>
                <span>-</span>
                <span className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {shopData.stats.totalSales} ventes
                </span>
                <span>-</span>
                <span>{shopData.location}</span>
                <span>-</span>
                <span>Membre depuis {shopData.joined}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button variant="outline">
              <Heart className="w-5 h-5 inline mr-2" />
              Suivre
            </Button>
            <Button variant="outline">
              <Share2 className="w-5 h-5 inline mr-2" />
              Partager
            </Button>
          </div>
        </div>
      </div>

      {/* Shop Stats */}
      <Card hoverable={false} className="rounded-t-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(shopData.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-xl font-bold text-gray-900">{value}</div>
              <div className="text-sm text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, " $1").toLowerCase()}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Policies */}
      <Card hoverable={false} className="mt-6">
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
      </Card>

      {/* Filters & Controls */}
      <div className="card-1 mt-6 sticky top-16 z-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="flex items-center space-x-2 border text-sm border-gray-300 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              <span>Filtrer</span>
            </Button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-full appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#4b6fc9] cursor-pointer text-sm"
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
                className="w-24 cursor-progress"
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
                className="w-24 cursor-progress"
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
          <Card hoverable={false} className="">
            <h3 className="font-semibold text-gray-900 mb-2">Catégories</h3>
            <div className="space-y-1">
              {shopData.categories.map((category) => (
                <button
                  key={category.name}
                  className="flex justify-between items-center w-full px-2 py-1 text-left rounded-full hover:bg-gray-100 text-sm border-none font-medium cursor-pointer"
                >
                  <span className="text-gray-700">{category.name}</span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </Card>
          {/* Price Filter */}
          <Card
            hoverable={false}
            className="mt-3 pt-6 sticky top-34 z-10"
          >
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
          </Card>

          {/* Tags */}
          <Card
            hoverable={false}
            className="mt-3 pt-6"
          >
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
          </Card>
          <Card hoverable={false} className="mt-3">
            {/* Shop Owner */}
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
            <Button variant="outline" className="w-full py-1.5 border border-primary text-primary rounded-full hover:bg-blue-50">
              Voir le profil
            </Button>
          </Card>
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
                            <span className="text-xl font-bold text-gray-900">
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
                        <div className="text-right flex items-center gap-4">
                          <Button variant="outline" className="text-gray-600 hover:bg-gray-100 rounded-full">
                            <Heart className="w-5 h-5" />
                          </Button>
                          <Button  className="px-4 py-2 bg-[#4b6fc9] text-white hover:bg-[#006097]">
                            Acheter
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8 text-sm">
            <Button variant="outline" className="px-3 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
              Précédent
            </Button>
            {[1, 2, 3, 4, 5].map((num) => (
              <Button variant="outline" size="small"
                key={num}
                className={`py-1 w-4 rounded-full cursor-pointer font-bold ${
                  num === 1 ? "bg-primary text-white" : "hover:bg-gray-100"
                }`}
              >
                {num}
              </Button>
            ))}
            <Button variant="outline" className="px-3 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
              Suivant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
