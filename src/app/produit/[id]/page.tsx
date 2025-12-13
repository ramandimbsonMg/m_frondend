"use client";

import { useState } from "react";
import {
  Star,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingBag,
  MessageCircle,
  Eye,
  Tag,
  Award,
  Check,
} from "lucide-react";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("rouge");
  const [isLiked, setIsLiked] = useState(false);

  const product = {
    id: productId,
    name: "Robe wax premium édition limitée",
    price: "45.000 FCFA",
    originalPrice: "60.000 FCFA",
    discount: 25,
    description:
      "Robe élégante en wax premium de qualité supérieure. Coupe moderne inspirée des tendances actuelles avec une touche africaine authentique. Parfait pour les occasions spéciales.",
    seller: {
      name: "AfroChic Collection",
      rating: 4.8,
      sales: 1245,
      location: "Madagascar, Sénégal",
      verified: true,
    },
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "rouge", value: "#dc2626" },
      { name: "bleu", value: "#2563eb" },
      { name: "vert", value: "#16a34a" },
      { name: "jaune", value: "#ca8a04" },
    ],
    details: [
      "100% Wax premium",
      "Lavage à la main recommandé",
      "Fabriqué au Sénégal",
      "Livraison sous 3-5 jours",
      "Retour gratuit sous 30 jours",
    ],
    reviews: {
      average: 4.8,
      count: 156,
      distribution: { 5: 120, 4: 25, 3: 8, 2: 2, 1: 1 },
    },
    stock: 15,
    sold: 128,
    tags: ["limited-edition", "premium", "made-in-africa", "eco-friendly"],
  };

  const relatedProducts = [
    {
      id: "2",
      name: "Chemise homme en bazin",
      price: "25.000 FCFA",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    },
    {
      id: "3",
      name: "Sac bogolan artisanal",
      price: "28.500 FCFA",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        <span className="hover:text-gray-900 cursor-pointer">Accueil</span>
        <span className="mx-2">›</span>
        <span className="hover:text-gray-900 cursor-pointer">Mode</span>
        <span className="mx-2">›</span>
        <span className="hover:text-gray-900 cursor-pointer">Robes</span>
        <span className="mx-2">›</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          {/* Main Image */}
          <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
            {product.discount > 0 && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-red-500 text-white font-bold rounded-lg">
                  -{product.discount}%
                </span>
              </div>
            )}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full ${
                  isLiked
                    ? "bg-pink-50 text-pink-500"
                    : "bg-white text-gray-600"
                }`}
              >
                <Heart
                  className="w-5 h-5"
                  fill={isLiked ? "currentColor" : "none"}
                />
              </button>
              <button className="p-2 bg-white text-gray-600 rounded-full">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-1 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-primary" : "border-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`Vue ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          {/* Title & Price */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-bold">
                  {product.reviews.average}
                </span>
                <span className="ml-1 text-gray-600">
                  ({product.reviews.count} avis)
                </span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-green-600 font-medium">
                {product.sold} vendus
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">Stock: {product.stock}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                {product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-bold">
                    Économisez {product.discount}%
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Seller Info */}
          <div className="border-t border-gray-200 pt-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">AC</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">
                      {product.seller.name}
                    </h3>
                    {product.seller.verified && (
                      <Award className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{product.seller.rating} ⭐</span>
                    <span>{product.seller.sales} ventes</span>
                    <span>{product.seller.location}</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-blue-50">
                Voir la boutique
              </button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Taille</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedSize === size
                      ? "border-primary bg-blue-50 text-primary"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Couleur</h3>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                    selectedColor === color.name
                      ? "border-primary"
                      : "border-gray-300"
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: color.value }}
                  />
                  <span className="capitalize">{color.name}</span>
                  {selectedColor === color.name && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Quantité</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 min-w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-600">
                {product.stock} disponibles
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-[#006097] flex items-center justify-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Acheter maintenant</span>
            </button>
            <button className="w-full py-3 border border-primary text-primary rounded-lg font-bold hover:bg-blue-50 flex items-center justify-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Contacter le vendeur</span>
            </button>
          </div>

          {/* Policies */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Truck className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Livraison gratuite</div>
                <div className="text-xs text-gray-600">Madagascar</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                <div className="text-sm font-medium">30 jours retour</div>
                <div className="text-xs text-gray-600">Gratuit</div>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Garantie 1 an</div>
                <div className="text-xs text-gray-600">Produit</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            {["description", "details", "reviews", "shipping"].map((tab) => (
              <button
                key={tab}
                className="py-4 font-medium border-b-2 border-transparent hover:text-gray-900"
              >
                {tab === "description" && "Description"}
                {tab === "details" && "Détails"}
                {tab === "reviews" && "Avis (156)"}
                {tab === "shipping" && "Livraison"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">
              Description du produit
            </h3>
            <p className="text-gray-700 mb-4">{product.description}</p>

            <h4 className="font-semibold mb-2">
              Caractéristiques principales :
            </h4>
            <ul className="space-y-2">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Produits similaires
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((related) => (
            <div
              key={related.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{related.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-lg text-gray-900">
                    {related.price}
                  </span>
                  <button className="text-sm text-primary hover:underline">
                    Voir produit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
