"use client";

import { useState } from "react";
import {
  ShoppingBag,
  Star,
  Heart,
  Share2,
  Eye,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    seller: string;
    rating: number;
    sales: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
            -20%
          </span>
        </div>

        {/* Quick Actions */}
        <div
          className={`absolute top-3 right-3 flex flex-col space-y-2 transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full shadow-lg cursor-pointer ${
              isLiked ? "bg-pink-500 text-white" : "bg-white text-gray-600"
            }`}
          >
            <Heart
              className="w-4 h-4"
              fill={isLiked ? "currentColor" : "none"}
            />
          </button>
          <button className="p-2 bg-white text-gray-600 rounded-full shadow-lg cursor-pointer">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white text-gray-600 rounded-full shadow-lg cursor-pointer">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">Par {product.seller}</p>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg text-gray-900">
              {product.price}
            </div>
            <div className="text-xs text-gray-500 line-through">
              35.000 FCFA
            </div>
          </div>
        </div>

        {/* Rating & Sales */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
          <div className="text-sm text-gray-600">{product.sales} ventes</div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm font-medium">Voir</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-primary text-white py-2 rounded-lg hover:bg-[#006097] transition-colors cursor-pointer">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Acheter</span>
          </button>
        </div>

        {/* Payment Methods */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Paiements acceptés:</span>
            <div className="flex items-center space-x-1">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                Mvola
              </span>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded">
                OM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
