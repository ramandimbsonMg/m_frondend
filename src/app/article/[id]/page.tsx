"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Eye,
  Calendar,
  Clock,
  Tag,
  User,
  Send,
  TrendingUp,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const articleId = params.id as string;

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(true);

  const article = {
    id: articleId,
    title: "Comment réussir son e-commerce en Afrique : 5 stratégies gagnantes",
    author: {
      name: "Ibrahim Ba",
      role: "Expert E-commerce • Madagascar",
      avatar: "IB",
    },
    content: `
      L'e-commerce en Afrique connaît une croissance exponentielle, mais réussir dans ce marché exige des stratégies adaptées. Voici 5 approches qui fonctionnent :

      ## 1. Adapter le paiement mobile
      Les solutions comme Mobile Money (Mvola, Orange Money) sont essentielles. 85% des transactions en ligne en Afrique de l'Ouest se font via mobile money.

      ## 2. Optimiser pour le mobile
      Plus de 70% du trafic e-commerce provient des smartphones. Votre site doit être parfaitement optimisé pour mobile.

      ## 3. Localiser le contenu
      Utilisez les langues locales, adaptez les images à la culture, et comprenez les habitudes d'achat régionales.

      ## 4. Gérer la logistique
      Les défis logistiques sont réels. Partenariats avec des sociétés de livraison locales et stockage stratégique sont clés.

      ## 5. Construire la confiance
      Avis clients, badges de vérification, et service client réactif sont indispensables.

      Ces stratégies ont permis à ma boutique d'atteindre 500 ventes mensuelles en 6 mois seulement.
    `,
    stats: {
      likes: 324,
      comments: 48,
      shares: 89,
      views: 1256,
      readingTime: "5 min",
    },
    tags: [
      "ecommerce",
      "afrique",
      "entrepreneuriat",
      "mobilemoney",
      "business",
    ],
    publishDate: "15 mars 2024",
    relatedArticles: [
      {
        id: "2",
        title: "Mobile Money : Le futur du paiement en Afrique",
        author: "Tech Africa",
        views: "892",
      },
      {
        id: "3",
        title: "Marketing digital pour PME africaines",
        author: "Marketing Pro",
        views: "456",
      },
    ],
    comments: [
      {
        id: 1,
        author: "Amina D.",
        content:
          "Excellent article ! Les points sur la logistique sont très pertinents.",
        time: "2h",
        likes: 12,
      },
      {
        id: 2,
        author: "Mohamed K.",
        content: "Très utile pour mon lancement. Merci pour le partage !",
        time: "4h",
        likes: 8,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </button>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-full ${
              isBookmarked
                ? "text-yellow-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Bookmark
              className="w-5 h-5"
              fill={isBookmarked ? "currentColor" : "none"}
            />
          </button>
          <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>

        {/* Author & Stats */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">
                {article.author.avatar}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {article.author.name}
              </h3>
              <p className="text-gray-600">{article.author.role}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">
              Publié le {article.publishDate}
            </div>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {article.stats.views} vues
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {article.stats.readingTime}
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mt-8">
          {article.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Action Stats */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 ${
                isLiked ? "text-primary" : "text-gray-600"
              }`}
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{article.stats.likes + (isLiked ? 1 : 0)}</span>
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 text-gray-600"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{article.stats.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600">
              <Share2 className="w-5 h-5" />
              <span>{article.stats.shares}</span>
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <TrendingUp className="w-4 h-4 inline mr-1" />
            Trending dans E-commerce
          </div>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Commentaires ({article.comments.length})
          </h3>

          {/* Comment Input */}
          <div className="flex items-start space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ajouter un commentaire..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows={2}
              />
              <div className="flex justify-end mt-2">
                <button
                  onClick={() => {
                    // Handle comment submission
                    setComment("");
                  }}
                  disabled={!comment.trim()}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-[#006097] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Commenter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {article.comments.map((comment) => (
              <div
                key={comment.id}
                className="border-b border-gray-100 pb-6 last:border-0"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {comment.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{comment.author}</div>
                      <p className="text-gray-700 mt-1">{comment.content}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>{comment.time}</span>
                        <button className="hover:text-gray-700">
                          Répondre
                        </button>
                        <button className="flex items-center space-x-1 hover:text-gray-700">
                          <ThumbsUp className="w-3 h-3" />
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Articles */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Articles similaires
        </h3>
        <div className="space-y-4">
          {article.relatedArticles.map((related) => (
            <Link
              key={related.id}
              href={`/article/${related.id}`}
              className="block p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{related.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Par {related.author}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-gray-600">
                    <Eye className="w-4 h-4 mr-1" />
                    {related.views} vues
                  </div>
                  <button className="mt-2 text-sm text-primary hover:underline">
                    Lire →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
