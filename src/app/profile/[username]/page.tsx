"use client";

import { useState } from "react";
import {
  MapPin,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  Globe,
  Star,
  Share2,
  MoreVertical,
  MessageCircle,
  Plus,
  Image as ImageIcon,

} from "lucide-react";
import { useParams } from "next/navigation";
import PostCard from "@/components/cards/PostCard";
import Link from "next/link";

export default function PublicProfilePage() {
  const params = useParams();
  const username = params.username as string;

  const [activeTab, setActiveTab] = useState("about");
  const [isFollowing, setIsFollowing] = useState(false);

  const profileData = {
    name: "Fatou Diop",
    username: username,
    role: "Developer Informatique & Entrepreneure",
    location: "Madagascar, Ihosy",
    company: "Missera Collection",
    joinDate: "Membre depuis mars 2023",
    bio: "Créateur de mode africaine contemporaine. Passionnée par la réinvention des tissus traditionnels. Vendeur certifiée sur Missera Market.",
    stats: {
      sales: 156,
      followers: 1245,
      following: 342,
      rating: 4.8,
      reviews: 89,
    },
    badges: [
      { name: "Vendeur Pro", color: "bg-blue-100 text-blue-800" },
      { name: "Top Seller", color: "bg-green-100 text-green-800" },
      { name: "Verified", color: "bg-purple-100 text-purple-800" },
      { name: "Fast Shipper", color: "bg-amber-100 text-amber-800" },
    ],
    skills: [
      "Design Mode",
      "E-commerce",
      "Marketing Digital",
      "Production Textile",
      "Gestion Marque",
    ],
    products: [
      {
        id: 1,
        name: "Robe wax premium",
        price: "45.000 FCFA",
        sales: 42,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
      },
      {
        id: 2,
        name: "Sac bogolan artisanal",
        price: "28.500 FCFA",
        sales: 28,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      },
      {
        id: 3,
        name: "Bijoux éthiques",
        price: "15.000 FCFA",
        sales: 65,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
      },
    ],
    posts: [
      {
        id: 1,
        author: {
          name: "Fatou Diop",
          role: "Designer Mode • Madagascar",
          avatar: "FD",
        },
        content:
          "Nouvelle collection printemps-été disponible ! Des coupes modernes avec des tissus africains authentiques. #modeafricaine",
        likes: 245,
        comments: 48,
        shares: 12,
        time: "1j",
        isLiked: false,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Cover Photo */}
      <div className="relative h-48 rounded-t-lg overflow-hidden">
        <div className="absolute inset-0 bg-gray-300"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b')] bg-cover bg-center opacity-20"></div>
        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 text-center flex items-center justify-center hover:bg-white cursor-pointer">
            <MoreVertical className="w-4 h-4 text-gray-700" />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 text-center flex items-center justify-center hover:bg-white cursor-pointer">
            <Share2 className="w-4 h-4 text-gray-700" />
          </button>
          {isFollowing ? (
            <button
              onClick={() => setIsFollowing(false)}
              className="px-4 py-1.5 h-10 bg-white text-gray-700 font-medium rounded-full hover:bg-gray-50 cursor-pointer"
            >
              Abonné
            </button>
          ) : (
            <button
              onClick={() => setIsFollowing(true)}
              className="px-4 py-1.5 h-10 bg-primary text-white font-medium rounded-full hover:bg-[#006097] cursor-pointer text-sm"
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Suivre
            </button>
          )}
          <Link href="/messages" className="px-4 py-1.5 h-10 bg-white text-primary font-medium rounded-full border border-primary hover:bg-blue-50 cursor-pointer text-sm">
            <MessageCircle className="w-4 h-4 inline mr-2" />
            Message
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-b-lg border border-t-0 border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Avatar & Basic Info */}
          <div className="flex items-start space-x-6">
            <div className="relative -mt-28">
              <div className="w-40 h-40 rounded-full border-4 border-white bg-primary flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl font-bold">JD</span>
              </div>
              <div className="absolute bottom-2 right-3 w-8 h-8 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="mt-2">
              <h1 className="text-3xl font-bold text-gray-900">
                {profileData.name}
              </h1> 
              <p className="text-lg text-gray-700 mt-1">{profileData.role}</p>

              <div className="flex flex-wrap items-center gap-3 mt-3 text-gray-600 text-sm">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {profileData.location}
                </span> -
                <span className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" />
                  {profileData.company}
                </span> -
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {profileData.joinDate}
                </span>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 mt-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">
                    {profileData.stats.sales}
                  </div>
                  <div className="text-sm text-gray-600">Ventes</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">
                    {profileData.stats.followers}
                  </div>
                  <div className="text-sm text-gray-600">Abonnés</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">
                    {profileData.stats.following}
                  </div>
                  <div className="text-sm text-gray-600">Abonnements</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-xl font-bold text-gray-900">
                      {profileData.stats.rating}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    ({profileData.stats.reviews} avis)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {profileData.badges.map((badge, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium ${badge.color}`}
            >
              {badge.name}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="mt-6 bg-white rounded-lg border border-gray-200">
        <div className="flex overflow-x-auto">
          {["about", "products", "posts", "reviews", "network"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-0 px-6 py-4 font-medium border-b-2 whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab === "about" && "À propos"}
              {tab === "products" && "Produits"}
              {tab === "posts" && "Publications"}
              {tab === "reviews" && "Avis"}
              {tab === "network" && "Réseau"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "about" && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bio & Contact */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Présentation
                </h3>
                <p className="text-gray-700">{profileData.bio}</p>

                <div className="mt-6 space-y-3">
                  <h4 className="font-medium text-gray-900">Contact</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-3" />
                      missera@company.com
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-3" />
                      +261 38 90 524 67
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Globe className="w-4 h-4 mr-3" />
                      www.missera.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Languages */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Compétences
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {profileData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Langues
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Français</span>
                      <span>Langue maternelle</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Anglais</span>
                      <span>Courant</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Malagasy</span>
                      <span>Langue maternelle</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Produits en vente
                </h3>
                <button className="text-primary hover:underline font-medium">
                  Voir toute la boutique
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {profileData.products.map((product) => (
                  <div
                    key={product.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-gray-900">
                        {product.name}
                      </h4>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-lg text-gray-900">
                          {product.price}
                        </span>
                        <span className="text-sm text-gray-600">
                          {product.sales} ventes
                        </span>
                      </div>
                      <button className="w-full mt-3 py-2 bg-primary text-white rounded-lg font-medium hover:bg-[#006097]">
                        Voir le produit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "posts" && (
            <div className="space-y-6">
              {profileData.posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
