"use client";

import { useEffect, useState } from "react";
import {
  Image as ImageIcon,
  BarChart2,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/cards/PostCard";
import ProductCard from "@/components/cards/ProductCard";
import ProfileCompletionAlert from "@/components/global/ProfileCompletionAlert";
import { posts, trendingProducts } from "@/data/post";

export default function Home() {
  const [activeTab, setActiveTab] = useState("feed");
  const [profileCompletion, setProfileCompletion] = useState(65);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-4">
      {/* Profile Completion Alert */}
      <ProfileCompletionAlert
        completion={profileCompletion}
        onCompletionUpdate={setProfileCompletion}
      />
      {/* Feed Tabs */}
      <div
        className={`flex space-x-4 border-b pt-2 border-gray-200 bg-white z-50 rounded-b  ${
          isSticky ? "sticky top-16 border-t" : ""
        }`}
      >
        <button
          className={`pb-3 px-4 font-medium cursor-pointer ${
            activeTab === "feed"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => setActiveTab("feed")}
        >
          <div className="flex items-center space-x-2">
            <span>Fil d'actualité</span>
            <span className="bg-accent text-xs px-2 py-0.5 rounded-full text-white">
              128
            </span>
          </div>
        </button>
        <button
          className={`pb-3 px-4 font-medium cursor-pointer ${
            activeTab === "market"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => setActiveTab("market")}
        >
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Marché</span>
          </div>
        </button>
        <button
          className={`pb-3 px-4 font-medium cursor-pointer ${
            activeTab === "network"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => setActiveTab("network")}
        >
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>Tendances</span>
          </div>
        </button>
      </div>

      {/* Create Post */}
      <CreatePost />

      {/* Trending Products Section */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900 flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2 text-accent" />
            Produits tendances
          </h2>
          <button className="text-sm text-primary hover:underline cursor-pointer">
            Voir plus
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Stats Widget */}
      <div className="card-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900">
            Vos statistiques hebdomadaires
          </h2>
          <BarChart2 className="w-5 h-5 text-primary" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center card-3 bg-cyan-50 rounded-lg">
            <div className="text-2xl font-bold text-cyan-700">156</div>
            <div className="text-sm text-cyan-600">Vues profil</div>
            <div className="text-xs text-green-600 mt-1">+12%</div>
          </div>
          <div className="text-center card-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-700">24</div>
            <div className="text-sm text-blue-600">Nouveaux abonnés</div>
            <div className="text-xs text-green-600 mt-1">+8%</div>
          </div>
          <div className="text-center card-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-700">8</div>
            <div className="text-sm text-green-600">Ventes</div>
            <div className="text-xs text-green-600 mt-1">+15%</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-700">89%</div>
            <div className="text-sm text-purple-600">Taux satisfaction</div>
            <div className="text-xs text-green-600 mt-1">+3%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
